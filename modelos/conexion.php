<?php
class Conexion
{
static public function conectar()
{
	try {
		$link = new PDO("mysql:dbname=daimler;host=127.0.0.1:3307","root","root");
		$link-> exec("set names utf8");
		return $link;
	}
	catch(PDOException $e)
    {
    	echo "La conexión ha fallado: " . $e->getMessage();
    }
}

}