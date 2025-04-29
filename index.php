<?php

//controladores
require_once "controladores/plantilla.controlador.php";
require_once "extensiones/vendor/autoload.php";
//require_once "controladores/usuarios.controlador.php";
//require_once "controladores/marcas.controlador.php";
//require_once "controladores/lineas.controlador.php";
//require_once "controladores/division.controlador.php";
//require_once "controladores/subcategorias.controlador.php";
//require_once "controladores/categorias.controlador.php";

//modelos
//require_once "modelos/usuarios.modelo.php";
//require_once "modelos/marcas.modelo.php";
//require_once "modelos/lineas.modelo.php";
//require_once "modelos/divisiones.modelo.php";
//require_once "modelos/subcategorias.modelo.php";
//require_once "modelos/categorias.modelo.php";

/*require_once "controladores/categorias.controlador.php";
require_once "controladores/productos.controlador.php";
require_once "controladores/clientes.controlador.php";
require_once "controladores/ventas.controlador.php";

require_once "modelos/categorias.modelo.php";
require_once "modelos/productos.modelo.php";
require_once "modelos/clientes.modelo.php";
require_once "modelos/ventas.modelo.php";*/




$plantilla= new ControladorPlantilla();
$plantilla -> ctrPlantilla(); 