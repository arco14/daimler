CREATE DEFINER=`root`@`localhost` PROCEDURE `PA_DAI_CapEmbarque`(IN jsonParametros JSON)
sp:BEGIN
    /*VARIABLES GLOBALES */
    DECLARE 	strOpcion varchar(10); 
    DECLARE 	strUsuario VARCHAR(30);
    DECLARE 	strCodigo varchar(10); 
    DECLARE		strDetalle varchar(255);	
    DECLARE		intEstatus 		BOOL DEFAULT 1;
    DECLARE     strToken       Text;
    DECLARE     strTokenUser   Text;
    DECLARE		strAccion varchar(30);
    DECLARE		strModulo varchar(30) default 'daimler';
    DECLARE		strPrograma varchar(50)  default 'dai_embarque';
    DECLARE		strTabla varchar(15) ; 
    DECLARE		jsonAnterior JSON;
    DECLARE		intId			BIGINT;
    DECLARE		blnActivo		bit;
    DECLARE     strMotivo       varchar(100);
    DECLARE CONTINUE HANDLER FOR SQLEXCEPTION 
        BEGIN
            SET intEstatus = 0;
            GET DIAGNOSTICS CONDITION 1 strCodigo = RETURNED_SQLSTATE, strDetalle = MESSAGE_TEXT;
        END;
    SET  lc_time_names = 'es_ES';
    /* SETEAR VALOR DEL NODO PRINCIPAL */
    Select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Opcion')),
            JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Usuario')),
            JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Token')),
            JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Embarque.Id'))
    INTO  strOpcion, strUsuario, strToken, intId;
    /* VALIDAR QUE EL TOKEN DE LA PETICION DEL USUAIO EXISTA */
    Select USU_Token 
        From jm_core.core_usuarios USUARIO
        WHERE USUARIO.USU_Usuario = strUsuario
        Into strTokenUser;
    If (strOpcion Not IN ('VU', 'UT') And strTokenUser != strToken) Then
        SIGNAL SQLSTATE VALUE '45000'
        SET MESSAGE_TEXT = '¡El token no coincide!';
        SELECT  intId,intEstatus,strCodigo,strDetalle;
        leave sp;
    End If;
    /* CONUSLTAS */
    If (strOpcion in ('C', 'CT')) Then 
        Select 
			MOVIMIENTOS.MOV_Id   As ID,
            MOV_Fecha            As FECHA,
            MOV_Usuario          As USUARIO,
            MOV_Documento        As COMENTARIOS,
            CATALOGO.CAT_Nombre  As TIPO_CATALOGO,
            MOVIMIENTOS.CAT_Tipo As ID_TIPO_CATALOGO
		From dai_movimientos MOVIMIENTOS
			Left Join dai_catalogos CATALOGO
				On MOVIMIENTOS.CAT_Tipo = CATALOGO.CAT_Id
		Where MOVIMIENTOS.CAT_Tipo = 54 OR MOVIMIENTOS.CAT_Tipo = 64
			  AND 
              MOVIMIENTOS.MOV_Activo = 1 Or strOpcion = 'CT'
		Order By MOVIMIENTOS.MOV_Id Desc;
    End If; 
    
    /* MOVIMIENTO DETALLE */
    If (strOpcion in ('CD', 'CDT')) Then 
        Select 
			MOVIMIENTOS_DETALLE.MOD_Id    As ID,
            MOVIMIENTOS_DETALLE.PRE_Id    As ID_PRENDA,
            PRENDAS.Pre_Nombre            As PRENDA,
            MOVIMIENTOS_DETALLE.CAT_Talla As ID_TALLA,
            TALLAS.CAT_Nombre             As TALLA,
            MOD_Cantidad                  As CANTIDAD
		From dai_movimientos_detalle MOVIMIENTOS_DETALLE
			Left Join dai_prendas PRENDAS
				On PRENDAS.PRE_Id = MOVIMIENTOS_DETALLE.PRE_Id
			Left Join dai_catalogos TALLAS
				On MOVIMIENTOS_DETALLE.CAT_Talla = TALLAS.CAT_Id
		Where MOVIMIENTOS_DETALLE.MOV_Id = intId
			AND MOVIMIENTOS_DETALLE.MOD_Activo = 1;
    End If; 
    
    /* GUARDAR O EDITAR */
    IF (strOpcion='G') THEN
        START TRANSACTION;
        IF intId = 0 THEN
            SET strAccion = 'guardarEmbarque';
            Insert Into dai_movimientos (
                MOV_Fecha,
                MOV_FechaHora,
                MOV_Documento,
                MOV_Usuario,
                MOV_Entrada,
                CAT_Tipo,
                MOV_Activo
            ) SELECT DISTINCT 
                EMBARQUE.Fecha          As MOV_Fecha,
                NOW()                   As MOV_FechaHora,
                EMBARQUE.Comentario     As MOV_Comentario,
                EMBARQUE.Usuario        As MOV_Usuario,
                1                       As MOV_Entrada,
                EMBARQUE.Tipo_Catalogo  As CAT_Tipo,
                1                       As MOV_Activo
            FROM JSON_TABLE (jsonParametros, '$.Embarque'
                COLUMNS (
						Fecha          datetime    PATH '$.Fecha',
                        Comentario     varchar(45) PATH '$.Comentario',
                        Usuario        varchar(45) PATH '$.Usuario',
                        Tipo_Catalogo  bigint      PATH '$.Tipo_Catalogo'
                    )
                ) AS EMBARQUE;
            set intId = LAST_INSERT_ID();
        ELSE
            SET strAccion='actualizarEmbarque';
            Select json_object ("MOV_Id", MOVIMIENTOS.MOV_Id,
								"MOV_Fecha", MOVIMIENTOS.MOV_Fecha,
								"MOV_FechaHora", MOVIMIENTOS.MOV_FechaHora,
								"MOV_Documento", MOVIMIENTOS.MOV_Documento,
								"CAT_Tipo", MOVIMIENTOS.CAT_Tipo,
								"MOV_Activo", MOVIMIENTOS.MOV_Activo
								)
			From dai_movimientos MOVIMIENTOS
			Where MOVIMIENTOS.MOV_Id = intId;
            
			Update dai_movimientos MOVIMIENTO
			Join ( select
				    Id,
					Fecha,
					Comentario,
					Usuario,
					Tipo_Catalogo
			FROM JSON_TABLE(jsonParametros, '$.Embarque'
				COLUMNS (
                    Id             bigint      PATH '$.Id',
					Fecha          datetime    PATH '$.Fecha',
					Comentario     varchar(45) PATH '$.Comentario',
					Usuario        varchar(45) PATH '$.Usuario',
					Tipo_Catalogo  bigint      PATH '$.Tipo_Catalogo'
				)
			) AS MOVIMIENTO_UP )  AS MOVIMIENTO_UP 
				  on MOVIMIENTO.MOV_Id = MOVIMIENTO_UP.Id
			SET MOVIMIENTO.MOV_Fecha     = MOVIMIENTO_UP.Fecha,
                MOVIMIENTO.MOV_FechaHora = NOW(),
                MOVIMIENTO.MOV_Documento = MOVIMIENTO_UP.Comentario,
                MOVIMIENTO.MOV_Usuario   = MOVIMIENTO_UP.Usuario,
                MOVIMIENTO.CAT_Tipo      = MOVIMIENTO_UP.Tipo_Catalogo;
        END IF;
        IF intEstatus = 0 then
            ROLLBACK;
            CALL jm_core.PA_CORE_Bitacoras(strModulo,strPrograma,"ErrorSQL",intId,jsonParametros, json_object("Error", strDetalle),strUsuario);
            SELECT  intId as Id,intEstatus,strCodigo,strDetalle;
        ELSE 
            CALL jm_core.PA_CORE_Bitacoras(strModulo,strPrograma,strAccion,intId,jsonAnterior,jsonParametros,strUsuario);
            Select  MOVIMIENTOS.MOV_Id As Id
            From	dai_movimientos MOVIMIENTOS
            Where	MOVIMIENTOS.MOV_Id = intId;
            COMMIT;
        END IF;
    END IF;	
    
    /*Guardar Detalle*/
    IF (strOpcion='GD') THEN
        START TRANSACTION;
        IF intId = 0 THEN
            SET strAccion = 'guardarMovimientoDetalle';
            Insert Into dai_movimientos_detalle (
                MOV_Id,
                PRE_Id,
                CAT_Talla,
                MOD_Cantidad,
                MOD_Activo
            ) SELECT DISTINCT 
				MOVIMIENTO_DETALLE.Movimiento As MOV_Id,
                MOVIMIENTO_DETALLE.Prenda     As PRE_Id,
                MOVIMIENTO_DETALLE.Talla      As CAT_Talla,
                MOVIMIENTO_DETALLE.Cantidad   As MOD_Cantidad,
                1                             As MOD_Activo
            FROM JSON_TABLE (jsonParametros, '$.Embarque'
                COLUMNS (
						Movimiento  bigint PATH '$.Movimiento',
                        Prenda      bigint PATH '$.Prenda',
                        Talla       bigint PATH '$.Talla',
                        Cantidad    bigint PATH '$.Cantidad'
                    )
                ) AS MOVIMIENTO_DETALLE;
            SET intId = LAST_INSERT_ID();
        ELSE
			SET strAccion='actualizarMovimientoDetalle';
            Select json_object ("MOD_Id", MOVIMIENTOS_DETALLE.MOD_Id,
								"MOV_Id", MOVIMIENTOS_DETALLE.MOV_Id,
								"PRE_Id", MOVIMIENTOS_DETALLE.PRE_Id,
								"CAT_Talla", MOVIMIENTOS_DETALLE.CAT_Talla,
								"MOD_Cantidad", MOVIMIENTOS_DETALLE.MOD_Cantidad,
								"MOD_Activo", MOVIMIENTOS_DETALLE.MOD_Activo)
			From dai_movimientos_detalle MOVIMIENTOS_DETALLE
			Where MOVIMIENTOS_DETALLE.MOD_Id = intId;

			Update dai_movimientos_detalle MOVIMIENTOS_DETALLE
			Join ( select
				    Id,
					Movimiento,
					Prenda,
					Talla,
					Cantidad
			FROM JSON_TABLE(jsonParametros, '$.Embarque'
				COLUMNS (
                    Id          bigint PATH '$.Id',
					Movimiento  bigint PATH '$.Movimiento',
					Prenda      bigint PATH '$.Prenda',
					Talla       bigint PATH '$.Talla',
					Cantidad    bigint PATH '$.Cantidad'
				)
			) AS MOVIMIENTOS_DETALLE_UP )  AS MOVIMIENTOS_DETALLE_UP 
				  on MOVIMIENTOS_DETALLE.MOD_Id = MOVIMIENTOS_DETALLE_UP.Id
			SET MOVIMIENTOS_DETALLE.MOV_Id       = MOVIMIENTOS_DETALLE_UP.Movimiento,
                MOVIMIENTOS_DETALLE.PRE_Id       = MOVIMIENTOS_DETALLE_UP.Prenda,
                MOVIMIENTOS_DETALLE.CAT_Talla    = MOVIMIENTOS_DETALLE_UP.Talla,
                MOVIMIENTOS_DETALLE.MOD_Cantidad = MOVIMIENTOS_DETALLE_UP.Cantidad;
        END IF;
        IF intEstatus = 0 then
            ROLLBACK;
            CALL jm_core.PA_CORE_Bitacoras(strModulo,strPrograma,"ErrorSQL",intId,jsonParametros, json_object("Error", strDetalle),strUsuario);
            SELECT  intId as Id,intEstatus,strCodigo,strDetalle;
        ELSE 
            CALL jm_core.PA_CORE_Bitacoras(strModulo,strPrograma,strAccion,intId,jsonAnterior,jsonParametros,strUsuario);
            Select  EMBARQUE.EMB_Id     As Id
            From	dai_embarque EMBARQUE
            Where	EMBARQUE.EMB_Id = intId;
            COMMIT;
        END IF;
    END IF;	
    
    /* DESACTIVAR EMBARQUE */
    If (strOpcion = 'D') Then
        START TRANSACTION;
        Update dai_movimientos EMBARQUE
                Join ( Select Id 
                FROM JSON_TABLE(jsonParametros, 
                    '$.Embarque' COLUMNS (
                        Id  bigint PATH '$.Id'
                    )
                ) AS EMBARQUE_UP ) AS EMBARQUE_UP 
                    On EMBARQUE.MOV_Id = EMBARQUE_UP.Id
                SET EMBARQUE.MOV_Activo = 0;
            IF intEstatus = 0 then
                ROLLBACK;
                CALL jm_core.PA_CORE_Bitacoras(strModulo, strPrograma, "ErrorSQL", intId, jsonParametros, json_object("Error", strDetalle), strUsuario);
                SELECT  intId, intEstatus, strCodigo, strDetalle;
            ELSE 
                CALL jm_core.PA_CORE_Bitacoras(strModulo, strPrograma, strAccion, intId, jsonAnterior, jsonParametros, strUsuario);
                Select intId As Id;
                COMMIT;
        END IF;
    END IF;
    
    /* DESACTIVAR DETALLE EMBARQUE */
    If (strOpcion = 'DD') Then
        START TRANSACTION;
        Update dai_movimientos_detalle EMBARQUE
                Join ( Select Id 
                FROM JSON_TABLE(jsonParametros, 
                    '$.Embarque' COLUMNS (
                        Id  bigint PATH '$.Id'
                    )
                ) AS EMBARQUE_UP ) AS EMBARQUE_UP 
                    On EMBARQUE.MOD_Id = EMBARQUE_UP.Id
                SET EMBARQUE.MOD_Activo = 0;
            IF intEstatus = 0 then
                ROLLBACK;
                CALL jm_core.PA_CORE_Bitacoras(strModulo, strPrograma, "ErrorSQL", intId, jsonParametros, json_object("Error", strDetalle), strUsuario);
                SELECT  intId, intEstatus, strCodigo, strDetalle;
            ELSE 
                CALL jm_core.PA_CORE_Bitacoras(strModulo, strPrograma, strAccion, intId, jsonAnterior, jsonParametros, strUsuario);
                Select intId As Id;
                COMMIT;
        END IF;
    END IF;
END