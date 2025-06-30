/* PRENDAS */
SELECT * FROM daimler.dai_prendas
Where PRE_Categoria = 'PLAYERA';
/*where PRE_Nombre = 'CAMISA PRODUCCION MANGA LARGA AZUL' or PRE_Nombre = 'CAMISA PRODUCCION MANGA CORTA AZUL' or
	  PRE_Nombre = 'CAMISA SPARK MANGA LARGA' or PRE_Nombre = 'CAMISA SPARK MANGA CORTA' or
      PRE_Nombre = 'PANTALON MEZCLILLA'*/

/* TALLAS POR PRENDA 
				CAMISAS										 		Pantalones
    - Camisa Produccion Manga Larga   - 2                - PANTALON MEZCLILLA			  - 1
    - Camisa Produccion Manga Corta   - 3                - PANTALON GABARDINA 			  - 7
    - CAMISA TEAM LEADER MANGA LARGA  - 35
    - CAMISA TEAM LEADER MANGA CORTA  - 36
    - CAMISA MTTO MANGA LARGA         - 14
	- CAMISA MTTO MANGA CORTA         - 15
    - CAMISA MRG MANGA LARGA          - 5
    - CAMISA MRG MANGA CORTA          - 6
    - CAMISA SPARK MANGA LARGA        - 8
    - CAMISA SPARK MANGA LARGA        - 9
    - CAMISA TOS MANGA LARGA          - 12
    - CAMISA TOS MANGA CORTA          - 13
    
            PLAYERA
    - PLAYERA MANGA CORTA GRIS        - 4
*/

SELECT * FROM daimler.dai_prendas_talla
WHERE PRE_Id IN (1, 2, 3, 8, 9);

/* TALLAS */
	Select * from dai_catalogos
	Where CAT_Clave in (40);
    /*Where CAT_Clave in ('2xs','xs', 's', 'M', 'L', 'XL', '2xl' '4XL', '3XL');*/

/* 	   CAMISAS							PANTALONES
   CAT_Id 52 - 2XS               	CAT_Id 24 - 28
   CAT_Id 11 -  XS                  CAT_Id 25 - 30 
   CAT_Id 10 -   S					CAT_Id 13 - 32 
   CAT_Id  9 -   M 					CAT_Id 19 - 34
   CAT_Id 12 -   L 					CAT_Id 26 - 36
   CAT_Id 18 -  XL					CAT_Id 27 - 38
   CAT_Id 21 - 2XL 					CAT_Id 28 - 40
									CAT_Id 29 - 42
   CAT_Id 22 - 3XL					CAT_Id 53 - 46
   CAT_Id 23 - 4XL 					CAT_Id 30 - 44
*/

/* 
  AJUSTE DE ENTRADA - DESCUENTA CANTIDA 
  AJUSTE DE SALIDA  - AUMENTA CANTIDA 
*/

/* EXISTENCIAS DE ENTRADA Y SALIDA POR PRENDA Y TALLAS */
SELECT 
    MOV_DET.CAT_Talla,
    SUM(CASE WHEN MOV.MOV_Entrada = 1 THEN MOD_Cantidad ELSE 0 END) AS CANTIDAD_ENTRADA,
    SUM(CASE WHEN MOV.MOV_Entrada = 0 THEN MOD_Cantidad ELSE 0 END) AS CANTIDAD_SALIDA,
    SUM(CASE WHEN MOV.MOV_Entrada = 1 THEN MOD_Cantidad ELSE 0 END) -
    SUM(CASE WHEN MOV.MOV_Entrada = 0 THEN MOD_Cantidad ELSE 0 END) AS DIFERENCIA
FROM daimler.dai_movimientos MOV
JOIN daimler.dai_movimientos_detalle MOV_DET
    ON MOV.MOV_Id = MOV_DET.MOV_Id
WHERE MOV_DET.PRE_Id = 1
  AND MOV_DET.CAT_Talla IN (24,13,19)
GROUP BY MOV_DET.CAT_Talla
ORDER BY MOV_DET.CAT_Talla;