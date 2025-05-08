CREATE DEFINER=`root`@`localhost` PROCEDURE `PA_CORE_CapCatalogos`(IN jsonParametros JSON)
sp:BEGIN
	DECLARE 	strOpcion 		 varchar(10) ;
	DECLARE 	strUsuario 		 VARCHAR(30);
	DECLARE 	strCodigo 		 varchar(10) ;
	DECLARE		strDetalle 		 varchar(255);	
	DECLARE		intEstatus 		 INT ;
	DECLARE		intId			 BIGINT;
    DECLARE		intIdTipo		 BIGINT;
    DECLARE		blnActivo		 bit;
    DECLARE		strClaveCatalogo varchar(10);
    DECLARE     strToken         Text;
    DECLARE     strTokenUser     Text;
    DECLARE		strAccion        varchar(30);
    DECLARE		strModulo        varchar(30) default 'jm_core';
    DECLARE		strPrograma      varchar(50)  default 'core_catalogos';
	DECLARE		jsonAnterior 	 JSON;
    DECLARE     strMotivo        varchar(100);
    
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION 
		BEGIN
			SET intEstatus = 0;
			GET DIAGNOSTICS CONDITION 1 strCodigo = RETURNED_SQLSTATE, strDetalle = MESSAGE_TEXT;
		END;
	SET  lc_time_names = 'es_ES';
    
   select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Opcion')),
			JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Usuario')),
            JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.ClaveCatalogo')),
            JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Catalogo.Id'))
	INTO  strOpcion,strUsuario,strClaveCatalogo,intId;
    
	IF (strOpcion='CC') THEN
		Select 	CATALOGO.CAT_Id as Id,
				CATALOGO.CAT_Clave as CLAVE,
                CATALOGO.CAT_Nombre as NOMBRE
        From	core_catalogos_tipo TIPO
				Join core_catalogos CATALOGO
					on TIPO.CTT_Id=CATALOGO.CTT_Id
		Where	CATALOGO.CAT_Activo = 1 And TIPO.CTT_Clave=strClaveCatalogo
        order by Nombre;
                    
	END IF;
    
    IF (strOpcion In ('C','CT')) THEN
		Select 	TIPO.CTT_Id as Id,
				TIPO.CTT_Clave as CLAVE,
                TIPO.CTT_Nombre as NOMBRE,
                TIPO.CTT_Descripcion as DESCRIPCION,
                TIPO.CTT_Usuario as USUARIO,
                TIPO.CTT_Fecha as FECHA
        From	core_catalogos_tipo TIPO
        Order 	By Nombre;
	END IF;
     IF (strOpcion = 'CI') THEN
		Select 
             CATALOGOS.CAT_Id                       As Id,
			 CATALOGOS.CTT_Id                       As IdTipo,
			 CATALOGOS.CAT_Clave  					As CLAVE,
             CATALOGOS.CAT_Nombre 					As NOMBRE,
             CATALOGOS.CAT_Descripcion 				As DESCRIPCION,
             CATALOGOS.CAT_Usuario 					As USUARIO,
             CATALOGOS.CAT_Fecha 					As FECHA,
             CATALOGOS.CAT_UsuarioModifica   		As USUARIO_MODIFICA,
             CATALOGOS.CAT_FechaModifica     		As FECHA_MODIFICA,
             CATALOGOS.CAT_UsuarioElimina			As USUARIO_ELIMINA,
             CATALOGOS.CAT_FechaElimina				As FECHA_ELIMINA,
             CATALOGOS.CAT_MotivoEliminacion		As MOTIVO,
             CAST(CATALOGOS.CAT_Activo AS unsigned) As ACTIVO
        From core_catalogos CATALOGOS
			Join core_catalogos_tipo CATALOGOS_TIPO
				On CATALOGOS_TIPO.CTT_Id = CATALOGOS.CTT_Id
		Where CATALOGOS.CTT_Id = intId;
	END IF;
    IF (strOpcion='G') THEN
		select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Catalogo.Clave')),
				JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Catalogo.IdTipo'))
		INTO  strClaveCatalogo, intIdTipo;
		IF intId = 0 THEN
			IF (SELECT count(*) 
				FROM core_catalogos CATALOGO 
                WHERE CATALOGO.CAT_Clave = strClaveCatalogo 
                And CATALOGO.CTT_Id=intIdTipo ) > 0 THEN
				SIGNAL SQLSTATE VALUE '99999'
				SET MESSAGE_TEXT = '¡Catalogo Existente!';
			END IF;	
        END IF;        
		START TRANSACTION;
		IF intId = 0 THEN  
			SET strAccion='crear';
			INSERT INTO core_catalogos
			(
				CAT_Clave,
				CAT_Nombre,
                CTT_Id,
				CAT_Descripcion,
				CAT_Fecha,
				CAT_Usuario,
				CAT_Activo
			)
			SELECT DISTINCT 
					Catalogo.Clave       as CAT_Clave,
					Catalogo.Nombre      as CAT_Nombre,
                    Catalogo.CLAVE_TIPO  as CTT_Id,
					Catalogo.Descripcion as CAT_Descripcion,
					now() 				 as CAT_Fecha,
					strUsuario 			 as CAT_Usuario,
                    1 					 as PER_Activo
			FROM JSON_TABLE(jsonParametros, '$.Catalogo'
					COLUMNS (
						CLAVE       varchar(15)  PATH '$.CLAVE', 
						NOMBRE      VARCHAR(50)  PATH '$.NOMBRE',
						CLAVE_TIPO  bigint       PATH '$.CLAVE_TIPO',
						DESCRIPCION	varchar(150) PATH '$.DESCRIPCION'
					)
				) AS Catalogo;
            Set intId = LAST_INSERT_ID();	
		ELSE
				SET strAccion = 'actualizar';
				Update core_catalogos CATALOGO
				Join ( select 
						Id,
						CLAVE,
						NOMBRE,
                        IdTipo,
						DESCRIPCION,
						ACTIVO
				FROM JSON_TABLE(jsonParametros, '$.Catalogo'
					COLUMNS (
						Id		     bigint	     PATH '$.Id',
						CLAVE        VARCHAR(15)  PATH '$.CLAVE',
						NOMBRE       VARCHAR(50)  PATH '$.NOMBRE',
						IdTipo       Bigint       PATH '$.IdTipo',
						DESCRIPCION  VARCHAR(150) PATH '$.DESCRIPCION',
						ACTIVO       bit          PATH '$.ACTIVO'
					)
				) AS CATALOGO_UP )  AS CATALOGO_UP 
					  on CATALOGO.CAT_Id = CATALOGO_UP.Id
				SET CATALOGO.CAT_Clave             = CATALOGO_UP.CLAVE,
					CATALOGO.CAT_Nombre            = CATALOGO_UP.NOMBRE,
                    CATALOGO.CTT_Id                = CATALOGO_UP.IdTipo,
                    CATALOGO.CAT_Descripcion       = CATALOGO_UP.DESCRIPCION,
                    CATALOGO.CAT_UsuarioModifica   = strUsuario, 
                    CATALOGO.CAT_FechaModifica     = now(),
                    CATALOGO.CAT_Activo            = CATALOGO_UP.ACTIVO,
                    CATALOGO.CAT_UsuarioElimina    = null,
					CATALOGO.CAT_FechaElimina      = null,
					CATALOGO.CAT_MotivoEliminacion = null;
        END IF;

		IF intEstatus = 0 then
				ROLLBACK;
				call PA_CORE_Bitacoras(strModulo, strPrograma, "ErrorSQL", intId, jsonParametros, json_object("Error", strDetalle), strUsuario);
            	SELECT  intId, intEstatus, strCodigo, strDetalle;
        ELSE 
			 call PA_CORE_Bitacoras(strModulo, strPrograma, strAccion, intId, jsonAnterior, jsonParametros, strUsuario);
             Select intId As Id;
        	COMMIT;
      END IF;
	END IF;
    
    /* Consulta catalogo permisos */
    If(strOpcion = 'CCP') Then 
		SELECT CAT_Id     As Id,
               CAT_Nombre As NOMBRE
        FROM core_catalogos
		Where CTT_Id = 2;
    End If; 
    
    /* Desactivar catalogos */
    If (strOpcion = 'DC') Then
		select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Catalogo.Motivo'))
		INTO  strMotivo;
        START TRANSACTION;
		Update core_catalogos CATALOGO
				Join ( Select Id, Motivo
				FROM JSON_TABLE(jsonParametros, 
					   '$.Catalogo[*]' COLUMNS (
						Id		bigint 		 PATH '$.Id',
                        Motivo  varchar(100) PATH '$.Motivo'
					)
				) AS CATALOGO_UP )  AS CATALOGO_UP 
					  on CATALOGO.CAT_Id = CATALOGO_UP.Id
				SET  CATALOGO.CAT_MotivoEliminacion = CATALOGO_UP.Motivo,
                     CATALOGO.CAT_Activo            = 0,
                     CATALOGO.CAT_UsuarioElimina    = strUsuario,
                     CATALOGO.CAT_FechaElimina      = now();
			IF intEstatus = 0 then
				ROLLBACK;
				call PA_CORE_Bitacoras(strModulo, strPrograma, "ErrorSQL", intId, jsonParametros, json_object("Error", strDetalle), strUsuario);
            	SELECT  intId, intEstatus, strCodigo, strDetalle;
			ELSE 
				 call PA_CORE_Bitacoras(strModulo, strPrograma, strAccion, intId, jsonAnterior, jsonParametros, strUsuario);
				 Select intId As Id;
				COMMIT;
		  END IF;
	  END IF;
END