-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versión del servidor:         10.6.17-MariaDB - mariadb.org binary distribution
-- SO del servidor:              Win64
-- HeidiSQL Versión:             12.6.0.6765
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para jm_core
CREATE DATABASE IF NOT EXISTS `jm_core` /*!40100 DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci */;
USE `jm_core`;

-- Volcando estructura para tabla jm_core.core_modulos
CREATE TABLE IF NOT EXISTS `dai_modulos` (
  `MOD_Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `MOD_Clave` varchar(15) DEFAULT NULL,
  `MOD_Nombre` varchar(50) DEFAULT NULL,
  `MOD_NombreMenu` varchar(50) DEFAULT NULL,
  `MOD_Descripcion` varchar(150) DEFAULT NULL,
  `MOD_Icono` varchar(255) DEFAULT NULL,
  `MOD_Usuario` varchar(30) DEFAULT NULL,
  `MOD_Fecha` datetime DEFAULT NULL,
  `MOD_Activo` bit(1) DEFAULT NULL,
  `MOD_Orden` int(11) DEFAULT NULL,
  `MOD_MotivoEliminacion` varchar(100) DEFAULT NULL,
  `MOD_UsuarioElimina` varchar(45) DEFAULT NULL,
  `MOD_FechaElimina` datetime DEFAULT NULL,
  PRIMARY KEY (`MOD_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=188 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla jm_core.core_modulos: ~11 rows (aproximadamente)
INSERT INTO `core_modulos` (`MOD_Id`, `MOD_Clave`, `MOD_Nombre`, `MOD_NombreMenu`, `MOD_Descripcion`, `MOD_Icono`, `MOD_Usuario`, `MOD_Fecha`, `MOD_Activo`, `MOD_Orden`, `MOD_MotivoEliminacion`, `MOD_UsuarioElimina`, `MOD_FechaElimina`) VALUES
	(100, 'VEN', 'VENTAS', 'VENTAS', 'Test asda', './view/assets/img/ventasmenu.svg', 'christian.acosta', '2025-01-22 17:58:18', b'0', 11, NULL, NULL, NULL),
	(101, 'JUM', 'JUMACO', 'JUMACO', 'Modulo de administracion', './view/assets/img/jumacomenu.svg', 'jose.gonzalez', '2024-07-22 00:00:00', b'1', 8, NULL, NULL, NULL),
	(102, 'ALM', 'ALMACEN', 'ALMACEN', 'Modulo de almacen', './view/assets/img/almacenmenu.svg', 'jose.gonzalez', '2024-07-22 00:00:00', b'1', 3, NULL, NULL, NULL),
	(103, 'CON', 'CONTABILIDAD', 'CONTABILIDAD', 'Modulo de contabilidad', './view/assets/img/contabilidadmenu.svg', 'jose.gonzalez', '2024-07-22 00:00:00', b'1', 6, NULL, NULL, NULL),
	(104, 'EMB', 'EMBARQUES', 'EMBARQUES', 'Modulo de embarques', './view/assets/img/embarquesmenu.svg', 'jose.gonzalez', '2024-07-22 00:00:00', b'1', 5, NULL, NULL, NULL),
	(105, 'PRO', 'PROCESOS', 'PROCESOS', 'Modulo de procesos', './view/assets/img/procesosmenu.svg', 'jose.gonzalez', '2024-07-22 00:00:00', b'1', 4, NULL, NULL, NULL),
	(106, 'CSR', 'CUSTOMER', 'CUSTOMER SR', 'Modulo de planeacion', './view/assets/img/planeacionmenu.svg', 'jose.gonzalez', '2024-07-22 00:00:00', b'1', 2, NULL, NULL, NULL),
	(107, 'RH', 'RECURSOS', 'RECURSOS', 'Modulo de recursos humanos', './view/assets/img/recursosmenu.svg', 'jose.gonzalez', '2024-07-22 00:00:00', b'1', 7, NULL, NULL, NULL),
	(109, 'REP', 'REPORTES', 'REPORTES', 'Modulo de reportes', './view/assets/img/reportesmenu.svg', 'jose.gonzalez', '2024-07-22 00:00:00', b'1', 10, NULL, NULL, NULL),
	(186, 'SIS', 'SISTEMAS', 'SISTEMAS', 'Modulo de sistemas', './view/assets/img/Sistemas.svg', 'christian.acosta', '2025-01-27 00:00:00', b'1', 12, NULL, NULL, NULL);

-- Volcando estructura para tabla jm_core.core_perfiles
CREATE TABLE IF NOT EXISTS `core_perfiles` (
  `PER_Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `PER_Clave` varchar(15) DEFAULT NULL,
  `PER_Nombre` varchar(150) DEFAULT NULL,
  `PER_Descripcion` varchar(255) DEFAULT NULL,
  `PER_Usuario` varchar(30) DEFAULT NULL,
  `PER_Fecha` datetime DEFAULT NULL,
  `PER_Activo` bit(1) DEFAULT NULL,
  `PER_UsuarioModifica` varchar(30) DEFAULT NULL,
  `PER_FechaModifica` datetime DEFAULT NULL,
  `PER_UsuarioElimina` varchar(30) DEFAULT NULL,
  `PER_FechaElimina` datetime DEFAULT NULL,
  `PER_MotivoEliminacion` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`PER_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla jm_core.core_perfiles: ~6 rows (aproximadamente)
INSERT INTO `core_perfiles` (`PER_Id`, `PER_Clave`, `PER_Nombre`, `PER_Descripcion`, `PER_Usuario`, `PER_Fecha`, `PER_Activo`, `PER_UsuarioModifica`, `PER_FechaModifica`, `PER_UsuarioElimina`, `PER_FechaElimina`, `PER_MotivoEliminacion`) VALUES
	(1, 'ADM', 'ADMINISTRADOR', 'ADMINISTRADOR', 'christian.acosta', '2025-02-12 17:27:29', b'1', 'christian.acosta', '2025-02-12 17:27:29', NULL, NULL, NULL),
	(2, 'VEN', 'VENDEDOR', 'VENDEDOR', 'jose.gonzalez', '2024-07-22 00:00:00', b'1', NULL, NULL, NULL, NULL, NULL),
	(29, 'RH', 'Recursos Humanos', 'Atencion a personal administrativo', 'christian.acosta', '2025-02-05 12:42:26', b'1', 'christian.acosta', '2025-02-05 12:42:26', NULL, NULL, NULL),
	(35, 'CON', 'Contador', 'Contador ', 'christian.acosta', '2025-02-12 10:46:26', b'1', 'christian.acosta', '2025-02-12 10:46:26', NULL, NULL, NULL),
	(41, 'ALM', 'Almacenista', 'Almacenista de mercancia lista', 'christian.acosta', '2025-02-12 10:50:01', b'1', 'christian.acosta', '2025-02-12 10:50:01', NULL, NULL, NULL),
	(47, 'CSR', 'Customer Service', 'Customer Service', 'christian.acosta', '2025-09-02 10:14:39', b'1', NULL, NULL, NULL, NULL, NULL);

-- Volcando estructura para tabla jm_core.core_perfiles_detalle
CREATE TABLE IF NOT EXISTS `core_perfiles_detalle` (
  `PRD_Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `PER_Id` bigint(20) DEFAULT NULL,
  `CPP_Id` bigint(11) DEFAULT NULL,
  PRIMARY KEY (`PRD_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=13858 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla jm_core.core_perfiles_detalle: ~208 rows (aproximadamente)
INSERT INTO `core_perfiles_detalle` (`PRD_Id`, `PER_Id`, `CPP_Id`) VALUES
	(1349, 5, NULL),
	(13019, 31, NULL),
	(13020, 31, NULL),
	(13021, 31, NULL),
	(13022, 31, NULL),
	(13023, 31, NULL),
	(13024, 31, NULL),
	(13025, 31, NULL),
	(13026, 31, NULL),
	(13027, 31, NULL),
	(13028, 31, NULL),
	(13029, 31, NULL),
	(13030, 31, NULL),
	(13031, 31, NULL),
	(13032, 31, NULL),
	(13033, 31, NULL),
	(13034, 31, NULL),
	(13035, 31, NULL),
	(13036, 31, NULL),
	(13037, 31, NULL),
	(13038, 31, NULL),
	(13039, 31, NULL),
	(13040, 31, NULL),
	(13041, 31, NULL),
	(13042, 31, NULL),
	(13043, 31, NULL),
	(13044, 31, NULL),
	(13045, 31, NULL),
	(13046, 31, NULL),
	(13047, 31, NULL),
	(13048, 31, NULL),
	(13049, 31, NULL),
	(13050, 31, NULL),
	(13051, 31, NULL),
	(13052, 31, NULL),
	(13053, 31, NULL),
	(13054, 31, NULL),
	(13055, 31, NULL),
	(13056, 31, NULL),
	(13057, 31, NULL),
	(13058, 31, NULL),
	(13059, 31, NULL),
	(13060, 31, NULL),
	(13061, 31, NULL),
	(13062, 31, NULL),
	(13063, 31, NULL),
	(13064, 31, NULL),
	(13065, 31, NULL),
	(13066, 31, NULL),
	(13067, 31, NULL),
	(13068, 31, NULL),
	(13069, 31, NULL),
	(13070, 31, NULL),
	(13071, 31, NULL),
	(13072, 31, NULL),
	(13073, 31, NULL),
	(13074, 31, NULL),
	(13075, 31, NULL),
	(13076, 31, NULL),
	(13077, 31, NULL),
	(13078, 31, NULL),
	(13079, 31, NULL),
	(13080, 31, NULL),
	(13081, 31, NULL),
	(13082, 31, NULL),
	(13083, 31, NULL),
	(13084, 31, NULL),
	(13085, 31, NULL),
	(13086, 31, NULL),
	(13087, 31, NULL),
	(13088, 31, NULL),
	(13089, 31, NULL),
	(13090, 31, NULL),
	(13091, 31, NULL),
	(13092, 31, NULL),
	(13093, 31, NULL),
	(13094, 31, NULL),
	(13095, 31, NULL),
	(13146, 30, NULL),
	(13147, 30, NULL),
	(13148, 30, NULL),
	(13149, 38, NULL),
	(13150, 38, NULL),
	(13460, 40, 68),
	(13461, 40, 15),
	(13463, 34, 68),
	(13464, 34, 69),
	(13486, 36, NULL),
	(13487, 36, 3),
	(13497, 35, 68),
	(13498, 35, 69),
	(13499, 35, 41),
	(13500, 35, 42),
	(13504, 41, 41),
	(13505, 41, 42),
	(13506, 41, 19),
	(13507, 41, 20),
	(13531, 44, 68),
	(13532, 44, 69),
	(13533, 44, 15),
	(13534, 44, 41),
	(13535, 44, 42),
	(13536, 44, 20),
	(13541, NULL, 9),
	(13673, 1, 8),
	(13674, 1, 9),
	(13675, 1, 66),
	(13676, 1, 67),
	(13677, 1, 68),
	(13678, 1, 69),
	(13679, 1, 41),
	(13680, 1, 42),
	(13681, 1, 51),
	(13682, 1, 52),
	(13683, 1, 19),
	(13684, 1, 20),
	(13685, 1, 15),
	(13686, 1, 16),
	(13687, 1, 18),
	(13688, 1, 17),
	(13689, 1, 49),
	(13690, 1, 50),
	(13691, 1, 53),
	(13692, 1, 54),
	(13693, 1, 5),
	(13694, 1, 6),
	(13695, 1, 7),
	(13696, 1, 10),
	(13697, 1, 11),
	(13698, 1, 23),
	(13699, 1, 24),
	(13700, 1, 55),
	(13701, 1, 57),
	(13702, 1, 56),
	(13703, 1, 70),
	(13704, 1, 71),
	(13705, 1, 58),
	(13706, 1, 59),
	(13707, 1, 25),
	(13708, 1, 26),
	(13709, 1, 45),
	(13710, 1, 46),
	(13711, 1, 36),
	(13712, 1, 62),
	(13713, 1, 63),
	(13714, 1, 78),
	(13715, 1, 22),
	(13716, 1, 21),
	(13717, 1, 27),
	(13718, 1, 28),
	(13719, 1, 1),
	(13720, 1, 2),
	(13721, 1, 72),
	(13722, 1, 73),
	(13723, 1, 74),
	(13724, 1, 75),
	(13725, 1, 76),
	(13726, 1, 12),
	(13727, 1, 13),
	(13728, 1, 31),
	(13729, 1, 32),
	(13730, 1, 33),
	(13731, 1, 40),
	(13732, 1, 34),
	(13733, 1, 35),
	(13734, 1, 37),
	(13735, 1, 38),
	(13736, 1, 39),
	(13737, 1, 3),
	(13738, 1, 4),
	(13739, 1, 64),
	(13740, 1, 65),
	(13741, 1, 60),
	(13742, 1, 61),
	(13743, 1, 47),
	(13744, 1, 48),
	(13745, 1, 30),
	(13746, 1, 29),
	(13747, 1, 43),
	(13748, 1, 44),
	(13749, 1, 14),
	(13800, 1, 186),
	(13801, 1, 79),
	(13802, 1, 80),
	(13803, 1, 81),
	(13804, 1, 82),
	(13805, 2, 82),
	(13806, 35, 82),
	(13807, 1, 83),
	(13808, 2, 83),
	(13809, 35, 83),
	(13810, 1, 84),
	(13811, 2, 84),
	(13812, 35, 84),
	(13813, 1, 85),
	(13814, 2, 85),
	(13815, 35, 85),
	(13819, 1, 89),
	(13820, 1, 90),
	(13821, 2, 90),
	(13822, 1, 91),
	(13823, 2, 91),
	(13824, 1, 92),
	(13825, 2, 92),
	(13826, 1, 93),
	(13827, 2, 93),
	(13828, 1, 94),
	(13829, 2, 94),
	(13835, 1, 97),
	(13836, 1, 98),
	(13837, 1, 99),
	(13838, 1, 100),
	(13839, 1, 101),
	(13840, 1, 102),
	(13841, 1, 103),
	(13842, 1, 104),
	(13843, 1, 105),
	(13844, 1, 106),
	(13845, 1, 107),
	(13846, 1, 108),
	(13847, 1, 109),
	(13848, 1, 110),
	(13849, 1, 111),
	(13850, 1, 112),
	(13852, 1, 114),
	(13853, 1, 115),
	(13854, 1, 116),
	(13855, 1, 117),
	(13856, 1, 118),
	(13857, 1, 119);

-- Volcando estructura para tabla jm_core.core_programas
CREATE TABLE IF NOT EXISTS `core_programas` (
  `PRO_Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `PRO_Clave` varchar(15) DEFAULT NULL,
  `PRO_Nombre` varchar(50) DEFAULT NULL,
  `PRO_Descripcion` varchar(150) DEFAULT NULL,
  `MOD_Id` bigint(20) DEFAULT NULL,
  `PRO_Fecha` datetime DEFAULT NULL,
  `PRO_Usuario` varchar(30) DEFAULT NULL,
  `PRO_Ruta` varchar(150) DEFAULT NULL,
  `PRO_Raiz` varchar(15) DEFAULT NULL,
  `PRO_Orden` int(11) DEFAULT NULL,
  `PRO_Activo` bit(1) DEFAULT NULL,
  `PRO_MotivoEliminacion` varchar(100) DEFAULT NULL,
  `PRO_UsuarioElimina` varchar(45) DEFAULT NULL,
  `PRO_FechaElimina` datetime DEFAULT NULL,
  PRIMARY KEY (`PRO_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=304 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla jm_core.core_programas: ~48 rows (aproximadamente)
INSERT INTO `core_programas` (`PRO_Id`, `PRO_Clave`, `PRO_Nombre`, `PRO_Descripcion`, `MOD_Id`, `PRO_Fecha`, `PRO_Usuario`, `PRO_Ruta`, `PRO_Raiz`, `PRO_Orden`, `PRO_Activo`, `PRO_MotivoEliminacion`, `PRO_UsuarioElimina`, `PRO_FechaElimina`) VALUES
	(200, 'V_COT', 'Cotizaciones', 'Cotizaciones', 100, '2024-11-21 15:45:37', 'jose.gonzalez', '?m=VENTAS&p=cotizaciones', 'VENTAS', 2, b'1', NULL, NULL, NULL),
	(201, 'L_USU', 'Usuarios', 'Usuarios', 101, '2024-12-05 17:20:41', 'jose.gonzalez', '?m=LAZLOTEX&p=usuarios', 'LAZLOTEX', 4, b'1', NULL, NULL, NULL),
	(202, 'L_PER', 'Perfiles', 'Perfiles', 101, '2024-11-21 15:47:23', 'jose.gonzalez', '?m=LAZLOTEX&p=perfiles', 'LAZLOTEX', 3, b'1', NULL, NULL, NULL),
	(203, 'L_PRO', 'Programas', 'Programas', 101, '2024-11-21 15:43:52', 'jose.gonzalez', '?m=LAZLOTEX&p=programas', 'LAZLOTEX', 2, b'1', NULL, NULL, NULL),
	(204, 'L_MOD', 'Modulos', 'Modulos', 101, '2024-11-21 15:43:45', 'jose.gonzalez', '?m=LAZLOTEX&p=modulos', 'LAZLOTEX', 1, b'1', NULL, NULL, NULL),
	(208, 'V_PED', 'Pedidos', 'Pedidos', 100, '2024-12-05 16:38:25', 'jose.gonzalez', '?m=VENTAS&p=pedidos', NULL, 3, b'1', NULL, NULL, NULL),
	(209, 'PR_DIS', 'Disenios', 'Disenios', 105, '2024-12-05 17:12:02', 'jose.gonzalez', '?m=PROCESOS&p=disenios', NULL, 1, b'1', NULL, NULL, NULL),
	(215, 'PR_SER', 'Costura', 'Costura', 105, '2024-12-05 17:11:57', 'jose.gonzalez', '?m=PROCESOS&p=costura', NULL, 3, b'1', NULL, NULL, NULL),
	(216, 'E_EMP', 'Empaque', 'Empaques', 104, '2024-12-05 17:14:11', 'jose.gonzalez', '?m=EMBARQUES&p=empaque', NULL, 0, b'1', NULL, NULL, NULL),
	(217, 'C_PRO', 'Proveedores', 'Proveedores', 103, '2024-12-05 17:16:59', 'jose.gonzalez', '?m=CONTABILIDAD&p=proveedores', NULL, 2, b'1', NULL, NULL, NULL),
	(218, 'C_FAC', 'Facturas', 'Facturas', 103, '2024-12-05 17:16:55', 'jose.gonzalez', '?m=CONTABILIDAD&p=facturas', NULL, 4, b'1', NULL, NULL, NULL),
	(232, 'R_EMP', 'Empleados', 'Empleados', 107, '2024-11-26 12:27:45', 'jose.gonzalez', '?m=RECURSOS&p=empleados', NULL, 1, b'1', NULL, NULL, NULL),
	(234, 'L_LIN', 'Lineas', 'Lineas', 103, '2024-11-25 15:53:28', 'jose.gonzalez', '?m=LAZLOTEX&p=lineas', NULL, 8, b'1', NULL, NULL, NULL),
	(236, 'C_DAF', 'Datos_Fiscales', 'Datos Físcales', 103, '2024-11-21 16:01:24', 'jose.gonzalez', '?m=CONTABILIDAD&p=datos_fiscales', NULL, 3, b'1', NULL, NULL, NULL),
	(237, 'L_CON', 'Contactos', 'Contáctos', 101, '2024-11-22 13:52:49', 'jose.gonzalez', '?m=LAZLOTEX&p=contactos', NULL, 6, b'1', NULL, NULL, NULL),
	(238, 'C_PAG', 'Pagos', 'Pagos', 103, '2024-11-21 16:01:58', 'jose.gonzalez', '?m=CONTABILIDAD&p=pagos', NULL, 5, b'1', NULL, NULL, NULL),
	(239, 'R_VEN', 'Ventas', 'Ventas', 109, '2024-11-22 10:25:10', 'jose.gonzalez', '?m=REPORTES&p=ventas', NULL, 0, b'1', NULL, NULL, NULL),
	(240, 'A_POS', 'Surtir', 'Surtir', 102, '2024-11-26 16:07:11', 'jose.gonzalez', '?m=ALMACEN&p=surtir', NULL, 0, b'1', NULL, NULL, NULL),
	(241, 'V_CLI', 'Clientes', 'Clientes', 100, '2024-11-22 13:15:52', 'jose.gonzalez', '?m=VENTAS&p=clientes', NULL, 1, b'1', NULL, NULL, NULL),
	(242, 'CSR_DES', 'Desarrollos', 'Desarrollos', 106, '2024-12-17 12:13:12', 'jose.gonzalez', '?m=PLANEACION&p=moldes', NULL, 2, b'1', NULL, NULL, NULL),
	(244, 'L_MAR', 'Marcas', 'Marcas', 101, '2024-11-20 16:23:50', 'jose.gonzalez', '?m=LAZLOTEX&p=marcas', NULL, 2, b'0', NULL, NULL, NULL),
	(245, 'L_CAT', 'Catalogos', 'Catálogos', 101, '2024-11-22 13:54:43', 'jose.gonzalez', '?m=LAZLOTEX&p=catalogos', NULL, 5, b'1', NULL, NULL, NULL),
	(246, 'L_DIR', 'Direcciones', 'Direcciones', 101, '2024-11-25 15:53:45', 'jose.gonzalez', '?m=LAZLOTEX&p=direcciones', NULL, 7, b'1', NULL, NULL, NULL),
	(247, 'R_MEN', 'Menu', 'Menú', 107, '2024-11-26 12:38:12', 'jose.gonzalez', '?m=RECURSOS&p=menu', NULL, 2, b'1', NULL, NULL, NULL),
	(249, 'CSR_EST', 'Estilos', 'Estilos', 106, '2024-12-05 16:41:38', 'jose.gonzalez', '?m=PLANEACION&p=prendas', NULL, 3, b'1', NULL, NULL, NULL),
	(250, 'R_EXI', 'Existencias', 'Existencias', 109, '2024-12-05 16:46:02', 'jose.gonzalez', '?m=REPORTES&p=existencias', NULL, 2, b'1', NULL, NULL, NULL),
	(252, 'R_PLA', 'Planeacion', 'Planeación', 109, '2024-12-05 16:55:32', 'jose.gonzalez', '?m=PLANEACION&p=planeacion', NULL, 3, b'1', NULL, NULL, NULL),
	(253, 'CSR_BOO', 'Boom', 'Boom', 102, '2024-12-05 16:56:16', 'jose.gonzalez', '?m=PLANEACION&p=avios', NULL, 4, b'1', NULL, NULL, NULL),
	(254, 'A_TRA', 'Transferencias', 'Transferencias', 102, '2024-12-05 17:05:47', 'jose.gonzalez', '?m=ALMACEN&p=transferencia', NULL, 2, b'1', NULL, NULL, NULL),
	(255, 'A_ENT', 'Entradas', 'Entradas', 102, '2024-12-05 17:06:55', 'jose.gonzalez', '?m=ALMACEN&p=entradas', NULL, 3, b'1', NULL, NULL, NULL),
	(256, 'A_SAL', 'Salidas', 'Salidas', 102, '2024-12-05 17:09:02', 'jose.gonzalez', '?m=ALMACEN&p=salidas', NULL, 4, b'1', NULL, NULL, NULL),
	(257, 'A_CON', 'Conteos', 'Conteos', 102, '2024-12-05 17:09:19', 'jose.gonzalez', '?m=ALMACEN&p=conteos', NULL, 5, b'1', NULL, NULL, NULL),
	(258, 'PR_BOR', 'Bordados', 'Bordados', 105, '2024-12-05 17:11:38', 'jose.gonzalez', '?m=PROCESOS&p=bordados', NULL, 2, b'1', NULL, NULL, NULL),
	(259, 'E_RUT', 'Ruta', 'Ruta', 104, '2024-12-05 17:14:28', 'jose.gonzalez', '?m=EMBARQUES&p=ruta', NULL, 2, b'1', NULL, NULL, NULL),
	(260, 'C_ART', 'Articulos', 'Artículos', 103, '2024-12-10 11:21:22', 'jose.gonzalez', '?m=CONTABILIDAD&p=articulos', NULL, 1, b'1', NULL, NULL, NULL),
	(261, 'E_EMB', 'Embarques', 'Embarques', 104, '2024-12-10 12:16:41', 'jose.gonzalez', '?m=EMBARQUES&p=embarques', NULL, 2, b'1', NULL, NULL, NULL),
	(283, 'SIS', 'Generador_Codigo', 'Generador de codigo', 186, '2024-01-27 00:00:00', 'christian.acosta', '?m=JUMACO&p=sistemas', NULL, 1, b'1', NULL, NULL, NULL),
	(284, 'CSR_DIS', 'Diseños', 'Diseños', 106, '2025-02-21 00:00:00', 'jose.gonzalez', NULL, NULL, 5, b'1', NULL, NULL, NULL),
	(287, 'CSR_MAR', 'Marcas', 'Marcas', 106, '2025-02-21 00:00:00', 'jose.gonzalez', NULL, NULL, 1, b'1', NULL, NULL, NULL),
	(288, 'CSR_PED', 'Pedidos', 'Pedidos', 106, '2025-02-21 00:00:00', 'jose.gonzalez', NULL, NULL, 6, b'1', NULL, NULL, NULL),
	(292, 'CSR_TEL', 'Telas', 'Telas', 102, '2025-03-12 09:24:05', 'christian.acosta', '?m=PROCESOS&p=telas', NULL, 4, b'1', NULL, NULL, NULL),
	(296, 'CSR_MAR', 'Marcas', 'Marcas', 106, '2025-03-12 17:50:20', 'christian.acosta', '?m=PROCESOS&p=marcas', NULL, 5, b'0', NULL, NULL, NULL),
	(297, 'CSR_TAL', 'Tallas', 'Tallas', 106, '2025-03-24 12:31:41', 'christian.acosta', '?m=CUSTOMER&p=tallas', NULL, 5, b'0', NULL, NULL, NULL),
	(298, 'OPM', 'programa_muestras', 'Programa Muestras', 106, '2025-04-04 14:11:40', 'christian.acosta', '?m=CUSTOMER&p=programa de muestras', NULL, 0, b'1', NULL, NULL, NULL),
	(299, 'CLI', 'Clientes', 'Clientes', 103, '2025-05-06 10:10:30', 'christian.acosta', '?m=CONTABILIDAD&p=clientes', NULL, 5, b'1', NULL, NULL, NULL),
	(301, 'SPEC', 'SPEC', 'SPEC', 106, '2025-07-08 08:42:15', 'christian.acosta', '?m=CUSTOMER&p=spec', NULL, 1, b'0', NULL, NULL, NULL);

-- Volcando estructura para tabla jm_core.core_programas_permiso
CREATE TABLE IF NOT EXISTS `core_programas_permiso` (
  `CPP_Id` bigint(11) NOT NULL AUTO_INCREMENT,
  `PRO_Id` bigint(20) DEFAULT NULL,
  `CAT_Permiso` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`CPP_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=120 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla jm_core.core_programas_permiso: ~92 rows (aproximadamente)
INSERT INTO `core_programas_permiso` (`CPP_Id`, `PRO_Id`, `CAT_Permiso`) VALUES
	(1, 204, 100010),
	(2, 204, 100011),
	(3, 203, 100010),
	(4, 203, 100011),
	(5, 200, 100062),
	(6, 200, 100010),
	(7, 200, 100011),
	(8, 202, 100010),
	(9, 202, 100011),
	(10, 236, 100010),
	(11, 236, 100011),
	(12, 238, 100010),
	(13, 238, 100011),
	(14, 239, 100010),
	(15, 241, 100010),
	(16, 241, 100011),
	(17, 237, 100011),
	(18, 237, 100010),
	(19, 245, 100010),
	(20, 245, 100011),
	(21, 234, 100011),
	(22, 234, 100010),
	(23, 246, 100010),
	(24, 246, 100011),
	(25, 232, 100010),
	(26, 232, 100011),
	(27, 247, 100010),
	(28, 247, 100011),
	(29, 240, 100011),
	(30, 240, 100010),
	(31, 208, 100062),
	(32, 208, 100010),
	(33, 208, 100011),
	(34, 249, 100010),
	(35, 249, 100011),
	(36, 250, 100010),
	(37, 251, 100062),
	(38, 251, 100010),
	(39, 251, 100011),
	(40, 252, 100010),
	(41, 253, 100010),
	(42, 253, 100011),
	(43, 254, 100010),
	(44, 254, 100011),
	(45, 255, 100010),
	(46, 255, 100011),
	(47, 256, 100010),
	(48, 256, 100011),
	(49, 257, 100010),
	(50, 257, 100011),
	(51, 258, 100010),
	(52, 258, 100011),
	(53, 215, 100010),
	(54, 215, 100011),
	(55, 209, 100062),
	(56, 209, 100011),
	(57, 209, 100010),
	(58, 216, 100010),
	(59, 216, 100011),
	(60, 259, 100010),
	(61, 259, 100011),
	(62, 218, 100010),
	(63, 218, 100011),
	(64, 217, 100010),
	(65, 217, 100011),
	(66, 201, 100011),
	(67, 201, 100010),
	(68, 260, 100010),
	(69, 260, 100011),
	(70, 261, 100010),
	(71, 261, 100011),
	(72, 242, 100062),
	(73, 242, 100069),
	(74, 242, 100070),
	(75, 242, 100010),
	(76, 242, 100011),
	(77, 262, 100010),
	(78, 283, 100010),
	(79, 292, 100010),
	(80, 292, 100011),
	(81, 292, 100062),
	(90, 295, 100010),
	(91, 295, 100011),
	(92, 295, 100062),
	(93, 295, 100069),
	(94, 295, 100070),
	(97, 296, 100007),
	(98, 296, 100010),
	(99, 296, 100011),
	(100, 296, 100062),
	(101, 296, 100069),
	(102, 296, 100070),
	(103, 297, 100010),
	(104, 297, 100011),
	(105, 297, 100062),
	(106, 298, 100010),
	(107, 298, 100011),
	(108, 299, 100010),
	(109, 299, 100011),
	(110, 299, 100062),
	(111, 300, 100010),
	(112, 300, 100011),
	(114, 301, 100010),
	(115, 301, 100011),
	(116, 301, 100062),
	(117, 302, 100007),
	(118, 303, 100010),
	(119, 303, 100011);

-- Volcando estructura para tabla jm_core.core_unidades_negocio
CREATE TABLE IF NOT EXISTS `core_unidades_negocio` (
  `UNN_Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `EMP_Id` bigint(20) DEFAULT NULL,
  `UNN_Nombre` varchar(100) DEFAULT NULL,
  `UNN_Direccion` varchar(255) DEFAULT NULL,
  `UNN_UsuarioResponsable` varchar(30) DEFAULT NULL,
  `UNN_Activo` bit(1) DEFAULT NULL,
  `UNN_Actividad` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`UNN_Id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla jm_core.core_unidades_negocio: ~4 rows (aproximadamente)
INSERT INTO `core_unidades_negocio` (`UNN_Id`, `EMP_Id`, `UNN_Nombre`, `UNN_Direccion`, `UNN_UsuarioResponsable`, `UNN_Activo`, `UNN_Actividad`) VALUES
	(2, 1, 'CORTE', 'Suchil 265, Parque Industrial, 35079 Gómez Palacio, Dgo.', 'jorge.belmonte', b'1', NULL),
	(3, 1, 'NAVE 1', NULL, NULL, b'1', NULL),
	(5, 1, 'NAVE 2', NULL, NULL, b'1', NULL),
	(6, 1, 'NAVE 3', NULL, NULL, b'1', NULL);

-- Volcando estructura para tabla jm_core.core_usuarios
CREATE TABLE IF NOT EXISTS `core_usuarios` (
  `USU_Id` bigint(20) NOT NULL AUTO_INCREMENT,
  `USU_Usuario` varchar(30) NOT NULL,
  `USU_Nombre` varchar(150) DEFAULT NULL,
  `USU_NombreInterno` varchar(50) DEFAULT NULL,
  `USU_FechaIngreso` date DEFAULT NULL,
  `USU_Correo` varchar(50) DEFAULT NULL,
  `USU_Password` blob DEFAULT NULL,
  `CAT_Area` bigint(20) DEFAULT NULL,
  `CAT_Puesto` bigint(20) DEFAULT NULL,
  `UNN_Id` bigint(20) DEFAULT NULL,
  `EMP_Id` bigint(20) DEFAULT NULL,
  `USU_UsuarioCrea` varchar(30) DEFAULT NULL,
  `USU_FechaCrea` datetime DEFAULT NULL,
  `USU_Fecha` datetime DEFAULT NULL,
  `USU_Activo` bit(1) DEFAULT NULL,
  `USU_Imagen` varchar(45) DEFAULT NULL,
  `USU_UsuarioModifica` varchar(30) DEFAULT NULL,
  `USU_FechaModifica` datetime DEFAULT NULL,
  `USU_UsuarioElimina` varchar(30) DEFAULT NULL,
  `USU_FechaElimina` datetime DEFAULT NULL,
  `USU_MotivoEliminacion` varchar(100) DEFAULT NULL,
  `USU_Token` text DEFAULT NULL,
  `PER_Id` bigint(11) DEFAULT NULL,
  `USU_UsuarioNuevo` bit(1) DEFAULT NULL,
  PRIMARY KEY (`USU_Id`,`USU_Usuario`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla jm_core.core_usuarios: ~4 rows (aproximadamente)
INSERT INTO `core_usuarios` (`USU_Id`, `USU_Usuario`, `USU_Nombre`, `USU_NombreInterno`, `USU_FechaIngreso`, `USU_Correo`, `USU_Password`, `CAT_Area`, `CAT_Puesto`, `UNN_Id`, `EMP_Id`, `USU_UsuarioCrea`, `USU_FechaCrea`, `USU_Fecha`, `USU_Activo`, `USU_Imagen`, `USU_UsuarioModifica`, `USU_FechaModifica`, `USU_UsuarioElimina`, `USU_FechaElimina`, `USU_MotivoEliminacion`, `USU_Token`, `PER_Id`, `USU_UsuarioNuevo`) VALUES
	(51, 'christian.acosta', 'Christian Acosta', 'Christian Acosta', '2025-01-06', 'osvaldo.arco0794@gmail.com', _binary 0x3736333139343337343538616465313239653863376138653631633139653734, 100006, 100009, NULL, NULL, 'test.test', '2025-09-01 17:09:05', NULL, b'1', 'chris.png', NULL, NULL, NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJyb290Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzYwMDUwMjg1LCJleHAiOjE3NjAzMDk0ODV9.9rxzfUBF7mct8TNmPNq6YXX_2MjF21-iWR6_Nt6MSXQ', NULL, b'0'),
	(52, 'test.test', 'Test', 'Test', '2025-09-02', 'osvaldo.arco0794@gmail.com', _binary 0x6539366465356633366363636163626164656361643764313035663936636536, 100013, 101414, NULL, NULL, 'christian.acosta', '2025-09-02 16:28:23', NULL, b'1', NULL, NULL, NULL, NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJyb290Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzU2OTEzODA1LCJleHAiOjE3NTcxNzMwMDV9.CzY5oWMTwNyMr8YGccq9oHg9jL_D1ATBEhCML8jIE1w', NULL, b'0'),
	(53, 'test', 'test', 'test', '2025-09-03', 'osvaldo.arco0794@gmail.com', _binary 0x3338303139326462313539346537336564316636653332656330366337643166, 100013, 100009, NULL, NULL, 'christian.acosta', '2025-09-03 13:40:54', NULL, b'1', NULL, NULL, NULL, NULL, NULL, NULL, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJyb290Iiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNzU2OTI5MDQ5LCJleHAiOjE3NTcxODgyNDl9.bTz-D9PPoHfJT7784v9V0dzlFN2JqX1qFzgZZKvmROw', NULL, b'0'),
	(54, 'test2', 'test2', 'test2', '2025-09-03', 'osvaldo.arco0794@gmail.com', _binary 0x3236316436383466366237643961663939366135363931653731303630373565, 100006, 100009, NULL, NULL, 'christian.acosta', '2025-09-03 13:58:26', NULL, b'1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, b'1');

-- Volcando estructura para tabla jm_core.core_usuarios_funcion
CREATE TABLE IF NOT EXISTS `core_usuarios_funcion` (
  `USU_Usuario` varchar(30) DEFAULT NULL,
  `CAT_Funcion` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla jm_core.core_usuarios_funcion: ~0 rows (aproximadamente)
INSERT INTO `core_usuarios_funcion` (`USU_Usuario`, `CAT_Funcion`) VALUES
	('raul.gomez', 100060);

-- Volcando estructura para tabla jm_core.core_usuarios_perfil
CREATE TABLE IF NOT EXISTS `core_usuarios_perfil` (
  `USU_Usuario` varchar(30) DEFAULT NULL,
  `PER_Id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla jm_core.core_usuarios_perfil: ~48 rows (aproximadamente)
INSERT INTO `core_usuarios_perfil` (`USU_Usuario`, `PER_Id`) VALUES
	('jose.gonzalez', 1),
	('dev.test', 1),
	('norma.test', 2),
	('norma.test', 32),
	('norma.test', 33),
	('norma.test', 34),
	('master', 1),
	('master', 2),
	('master', 29),
	('master', 30),
	('master', 31),
	('master', 32),
	('master', 33),
	('master', 34),
	('master', 35),
	('master', 36),
	('master', 40),
	('master', 41),
	('master', 44),
	('master2', 33),
	('master2', 34),
	('master2', 35),
	('Eli.marin', 2),
	('prueba.validation', 31),
	('prueba.validation', 32),
	('prueba.validation', 33),
	('asdasd', 35),
	('asdas', 34),
	('asd', 32),
	('asd', 34),
	('Update', NULL),
	('test.15', NULL),
	('valeria.test', 2),
	('valeria.test', 29),
	('valeria.test', 41),
	('test3', 29),
	('test3', 30),
	('test4', 35),
	('test5', 35),
	('test6', 29),
	('test6', 30),
	('test6', 32),
	('test6', 33),
	('christian.acosta', 1),
	('test.test', 47),
	('test', 1),
	('test2', 1),
	('test2', 2);

-- Volcando estructura para tabla jm_core.core_usuarios_unidad_negocio
CREATE TABLE IF NOT EXISTS `core_usuarios_unidad_negocio` (
  `USU_Usuario` varchar(30) DEFAULT NULL,
  `UNN_Id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- Volcando datos para la tabla jm_core.core_usuarios_unidad_negocio: ~28 rows (aproximadamente)
INSERT INTO `core_usuarios_unidad_negocio` (`USU_Usuario`, `UNN_Id`) VALUES
	('norma.test', 2),
	('norma.test', 3),
	('master', 1),
	('master', 2),
	('master', 3),
	('master2', 2),
	('Eli.marin', 1),
	('prueba.validation', 1),
	('prueba.validation', 3),
	('asdasd', 1),
	('asdasd', 2),
	('asdas', 1),
	('asd', 1),
	('Update', NULL),
	('test.15', NULL),
	('valeria.test', 3),
	('test3', 3),
	('test4', 1),
	('test5', 1),
	('test6', 2),
	('christian.acosta', 1),
	('christian.acosta', 2),
	('christian.acosta', 3),
	('test.test', 3),
	('test', 2),
	('test2', 2),
	('test2', 3),
	('test2', 5);

-- Volcando estructura para procedimiento jm_core.PA_CORE_CapProgramas
DELIMITER //
CREATE PROCEDURE `PA_CORE_CapProgramas`(IN jsonParametros JSON)
sp:BEGIN
	DECLARE 	strOpcion         varchar(10) ;
	DECLARE 	strUsuario        VARCHAR(30);
	DECLARE 	strCodigo         varchar(10) ;
	DECLARE		strDetalle        varchar(255);	
	DECLARE		intEstatus 		  BOOL DEFAULT 1;
    DECLARE		strAccion         varchar(30);
    DECLARE		strModulo         varchar(30) default 'jm_core';
    DECLARE		strPrograma       varchar(50)  default 'core_programas';
	DECLARE		jsonAnterior      JSON;
	DECLARE		strNombrePrograma varchar(50) ;
	DECLARE		intId			  BIGINT;
    DECLARE		blnActivo		  bit;
    DECLARE		intIdModulo 	  bigint;
    DECLARE     strMotivo         varchar(100);
    DECLARE     IdPrograma        bigint;

	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION 
		BEGIN
			SET intEstatus = 0;
			GET DIAGNOSTICS CONDITION 1 strCodigo = RETURNED_SQLSTATE, strDetalle = MESSAGE_TEXT;
		END;
	SET  lc_time_names = 'es_ES';
	
   select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Opcion')),
			JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Usuario')),
            JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Programa.Id'))
	INTO  strOpcion,strUsuario,intId;
     IF (strOpcion='CPP') THEN
		Select 	DETALLE.PRD_Id as Id,
				CONCAT(PROGRAMA.PRO_Nombre,' - ', PERMISO.CAT_Nombre ) as NOMBRE
		From 	core_perfiles_detalle DETALLE
				Join core_programas PROGRAMA
					ON PROGRAMA.PRO_Id=DETALLE.PRO_Id
				Join core_catalogos PERMISO
					ON PERMISO.CAT_Id=DETALLE.CAT_Permiso
		Where	DETALLE.PER_Id=intId;
	END IF;
    IF (strOpcion in ('C','CT')) THEN
		Select 	PROGRAMA.PRO_Id as Id,
				PROGRAMA.PRO_Clave as CLAVE,
                PROGRAMA.PRO_Nombre as NOMBRE,
                MODULO.MOD_Nombre as MODULO,
                MODULO.MOD_Id     as MODULO_ID,
                PROGRAMA.PRO_Ruta as RUTA,
                PROGRAMA.PRO_Fecha as FECHA,
                PROGRAMA.PRO_Usuario as USUARIO,
                ifnull(PROGRAMA.PRO_Orden,0) as ORDEN,
                CAST(PROGRAMA.PRO_Activo AS unsigned)  As ACTIVO,
                PROGRAMA.PRO_UsuarioElimina As USUARIO_ELIMINA,
                PROGRAMA.PRO_FechaElimina   As FECHA_ELIMINA,
                PROGRAMA.PRO_MotivoEliminacion as MOTIVO
		From	core_programas PROGRAMA	
				Join core_modulos MODULO
					on MODULO.MOD_Id=PROGRAMA.MOD_Id
		Where	PROGRAMA.PRO_Activo=1 or strOpcion='CT';
	END IF;
    IF (strOpcion='CI') THEN
		Select 	PROGRAMA.PRO_Id as Id,
				PROGRAMA.PRO_Clave as CLAVE,
                PROGRAMA.PRO_Nombre as NOMBRE,
                MODULO.MOD_Nombre as MODULO,
                PROGRAMA.PRO_Ruta as RUTA,
                PROGRAMA.PRO_Fecha as FECHA,
                PROGRAMA.PRO_Usuario as USUARIO,
                PROGRAMA.MOD_Id as Id_MODULO,
                PROGRAMA.PRO_Activo as ACTIVO,
                 ifnull(PROGRAMA.PRO_Orden,0) as ORDEN
		From	core_programas PROGRAMA	
				Join core_modulos MODULO
					on MODULO.MOD_Id=PROGRAMA.MOD_Id
		Where	PROGRAMA.PRO_Id=intId;
 
		Select 	CATALOGO.CAT_Id as Id,
                CATALOGO.CAT_Nombre as NOMBRE
        From	core_catalogos_tipo TIPO
				Join core_catalogos CATALOGO
					on TIPO.CTT_Id=CATALOGO.CTT_Id
		Where	CATALOGO.CAT_Activo=1 And TIPO.CTT_Clave='CORE_PER'
        order by Nombre;
        
        Select	PROGRAMA_PERMISO.CAT_Permiso as Id,
				DENSE_RANK() OVER( ORDER BY PROGRAMA_PERMISO.CAT_Permiso desc ) -1 AS RENGLON,
                
                PERMISO.CAT_Nombre as NOMBRE
        From	core_programas_permiso PROGRAMA_PERMISO
				Join core_catalogos PERMISO
					on	PROGRAMA_PERMISO.CAT_Permiso=PERMISO.CAT_Id
        Where	PROGRAMA_PERMISO.PRO_Id=intId
        Order	by RENGLON;
        
	END IF;
	IF (strOpcion='G') THEN
		select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Programa.Nombre')),
				JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Programa.MOD_Id'))
		INTO  strNombrePrograma, intIdModulo;
		IF intId=0 THEN
			IF (SELECT count(*) FROM core_programas PROGRAMA WHERE PROGRAMA.PRO_Nombre = strNombrePrograma And PROGRAMA.MOD_Id=intIdModulo )>0 THEN
				SIGNAL SQLSTATE VALUE '99999'
				SET MESSAGE_TEXT = '¡Programa Existente!';
			END IF;	
        END IF;        
		START TRANSACTION;
		
		IF intId = 0 THEN
			SET strAccion='crear';
			INSERT INTO core_programas
			(
				PRO_Clave,
				PRO_Nombre,
                PRO_Descripcion,
				MOD_Id,
				PRO_Fecha,
				PRO_Usuario,
				PRO_Ruta,
                PRO_Activo,
                PRO_Orden
			)
			SELECT DISTINCT 
					Programa.Clave as PRO_Clave,
					Programa.Nombre as PRO_Nombre,
                    Programa.Nombre as PRO_Nombre,
					Programa.MOD_Id as MOD_Id,
					now() as PRO_Fecha,
					strUsuario as PRO_Usuario,
					concat('?m=',MODULO.MOD_Nombre ,'&p=',lower(Programa.Nombre) ) as PRO_Ruta,
                    1 as PRO_Activo,
                    Programa.Orden as PRO_Orden
			FROM JSON_TABLE(jsonParametros, '$.Programa'
					COLUMNS (
						Clave   varchar(15) PATH '$.Clave', 
						Nombre  VARCHAR(150)  PATH '$.Nombre',
						Ruta    varchar(50)PATH '$.Ruta',
						MOD_Id  bigint PATH '$.MOD_Id',
						Orden   int PATH '$.Orden'
					)
				) AS Programa
			Join core_modulos MODULO
				on MODULO.MOD_Id=Programa.MOD_Id;
            set intId=LAST_INSERT_ID();	
            /* Insertar Permisos de programas */
            Delete From core_programas_permiso
            Where PRO_Id = intId;
            Insert Into core_programas_permiso
            (
				PRO_Id,
                CAT_Permiso
            )
            SELECT DISTINCT 
					intId     As PRO_Id,
					PERMISOS_UP.CAT_Permiso As CAT_Permiso
			FROM JSON_TABLE(jsonParametros, '$.Programa.Permisos[*]'
					COLUMNS (
						CAT_Permiso  bigint PATH '$.CAT_Permiso'
					)
			) AS PERMISOS_UP;
            /* Insertar Peril Detalle */
            Insert Into core_perfiles_detalle
            (
				PER_Id, 
                CPP_Id
			) SELECT DISTINCT 
					PERFILES_UP.PER_Id      As PER_Id, 
                    PROGRAMA_PERMISO.CPP_Id As CPP_Id
			FROM JSON_TABLE(jsonParametros, '$.Programa.Perfiles[*]'
					COLUMNS (
						PER_Id  bigint PATH '$.PER_Id'
					)
			) AS PERFILES_UP
            Join core_programas_permiso AS PROGRAMA_PERMISO
				On PROGRAMA_PERMISO.PRO_Id = intId; 
		ELSE
				SET strAccion='actualizar';
				SELECT   json_object("PRO_Id",PROGRAMA.PRO_Id,"PRO_Clave",PRO_Clave,"PRO_Nombre", PRO_Nombre,"MOD_Id", MOD_Id,"PRO_Ruta",PRO_Ruta, "PRO_Fecha",PRO_Fecha,"PRO_Usuario",PRO_Usuario,"Permisos",json_array(
                     (select GROUP_CONCAT(json_object("CAT_Permiso",CAT_PERMISO))   
                      from core_programas_permiso  PERMISO
                      where PERMISO.PRO_Id = PROGRAMA.PRO_Id))
                      )
				FROM 	core_programas PROGRAMA
                where PROGRAMA.PRO_Id=intId
				Into jsonAnterior;				
                
				Update core_programas PROGRAMA
				Join ( select Id,Nombre,MOD_Id,Orden,Activo
				FROM JSON_TABLE(jsonParametros, '$.Programa'
					COLUMNS (
					Id		bigint	PATH '$.Id',
					Nombre VARCHAR(150)  PATH '$.Nombre',
					MOD_Id bigint PATH '$.MOD_Id',
					Orden int PATH '$.Orden',
                    Activo bit PATH '$.Activo'
					)
				) AS PROGRAMA_UP )  AS PROGRAMA_UP 
					  on PROGRAMA.PRO_Id=PROGRAMA_UP.Id
					Join core_modulos MODULO
						on MODULO.MOD_Id=PROGRAMA_UP.MOD_Id
				SET PROGRAMA.PRO_Nombre=PROGRAMA_UP.Nombre , PROGRAMA.MOD_Id=PROGRAMA_UP.MOD_Id,PROGRAMA.PRO_Usuario=strUsuario,PROGRAMA.PRO_Fecha=now(),PROGRAMA.PRO_Activo=PROGRAMA_UP.Activo,PROGRAMA.PRO_Orden=PROGRAMA_UP.Orden,PROGRAMA.PRO_Ruta=concat('?m=',MODULO.MOD_Nombre ,'&p=',lower(PROGRAMA_UP.Nombre) );
			Delete from 	core_programas_permiso Where PRO_Id=intId;
            Insert Into core_programas_permiso
            (
				PRO_Id,
                CAT_Permiso
            )
            SELECT DISTINCT 
					intId as PRO_Id,
					PERMISOS_UP.CAT_Permiso as CAT_Permiso
			FROM JSON_TABLE(jsonParametros, '$.Programa.Permisos[*]'
					COLUMNS (
					CAT_Permiso  bigint PATH '$.CAT_Permiso'
					)
				) AS PERMISOS_UP;	 
        END IF;
      
		IF intEstatus=0 then
				ROLLBACK;
				call PA_CORE_Bitacoras(strModulo,strPrograma,"ErrorSQL",intId,jsonParametros, json_object("Error", strDetalle),strUsuario);
            	SELECT  intId,intEstatus,strCodigo,strDetalle;
        ELSE 
			 call PA_CORE_Bitacoras(strModulo,strPrograma,strAccion,intId,jsonAnterior,jsonParametros,strUsuario);
             Select intId as Id;
        	COMMIT;
           
      END IF;
		
	END IF;
	
    IF (strOpcion='CUP') THEN
		select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Programa')),
				JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Modulo'))
		INTO  strPrograma,strModulo;
        Select	PROGRAMA.PRO_Id as Id,
				PROGRAMA.PRO_Activo as ACTIVO		
        From	core_programas PROGRAMA	
		Where	PROGRAMA.PRO_Nombre=strPrograma;
        
        Select 	PERMISO.CAT_Id as Id,
				PERMISO.CAT_Clave as Clave,
                PERMISO.CAT_Nombre as Nombre
		From	core_programas PROGRAMA	
				JOin core_programas_permiso PROGRAMAS_PERMISO
					on PROGRAMA.PRO_Id=PROGRAMAS_PERMISO.PRO_Id
				Join core_catalogos PERMISO
					on PERMISO.CAT_Id=PROGRAMAS_PERMISO.CAT_Permiso
				Join core_perfiles_detalle PERFIL_DETALLE
					ON PERFIL_DETALLE.PRO_Id=PROGRAMAS_PERMISO.PRO_Id And PERFIL_DETALLE.CAT_Permiso=PROGRAMAS_PERMISO.CAT_Permiso
				Join core_usuarios_perfil USUARIO_PERFIL
					ON USUARIO_PERFIL.PER_Id=PERFIL_DETALLE.PER_Id
		Where	PROGRAMA.PRO_Nombre=strPrograma and USUARIO_PERFIL.USU_Usuario=strUsuario  
        Order	by Id;
	END IF;
   
   /* Desactivar programa */
   If (strOpcion = 'DP') Then
		select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Programa.Motivo'))
		INTO  strMotivo;
        START TRANSACTION;
		Update core_programas PROGRAMA
				Join ( select Id, Motivo
				FROM JSON_TABLE(jsonParametros, 
					   '$.Programa[*]' COLUMNS (
						Id		bigint 		 PATH '$.Id',
                        Motivo  varchar(100) PATH '$.Motivo'
					)
				) AS PROGRAMA_UP )  AS PROGRAMA_UP 
					  on PROGRAMA.PRO_Id 			= PROGRAMA_UP.Id
				SET  PROGRAMA.PRO_MotivoEliminacion = PROGRAMA_UP.Motivo,
                     PROGRAMA.PRO_Activo            = 0,
                     PROGRAMA.PRO_UsuarioElimina    = strUsuario,
                     PROGRAMA.PRO_FechaElimina   	= now();
			IF intEstatus = 0 then
					ROLLBACK;
					call PA_CORE_Bitacoras(strModulo,strPrograma,"ErrorSQL",intId,jsonParametros, json_object("Error", strDetalle),strUsuario);
					SELECT  intId,intEstatus,strCodigo,strDetalle;
			ELSE 
					 call PA_CORE_Bitacoras(strModulo,strPrograma,strAccion,intId,jsonAnterior,jsonParametros,strUsuario);
					 Select intId as Id;
					COMMIT;
			END IF;
	  END IF;
END//
DELIMITER ;

-- Volcando estructura para procedimiento jm_core.PA_CORE_CapUsuarios
DELIMITER //
CREATE PROCEDURE `PA_CORE_CapUsuarios`(IN jsonParametros JSON)
sp:BEGIN
	/* GLOBALES */
	DECLARE 	strOpcion 	   varchar(10) ;
	DECLARE 	strUsuario 	   VARCHAR(30);
	DECLARE 	strCodigo      varchar(10) ;
	DECLARE		strDetalle     varchar(255);	
	DECLARE		intEstatus 	   BOOL DEFAULT 1;
    DECLARE     strToken       Text;
    DECLARE     strTokenUser   text;
    DECLARE		strAccion      varchar(30);
    DECLARE		strModulo      varchar(30) default 'jm_core';
    DECLARE		strPrograma    varchar(50)  default 'core_perfiles';
	DECLARE		jsonAnterior   JSON;
	DECLARE		intId		   BIGINT;
    DECLARE		blnActivo	   bit;
    
    /* VALIDAR PERMISOS USUARIO */
    DECLARE     strPasswrod    varchar(30);
    DECLARE     intIdModulo    BIGINT;
    
    /* VARIABLES MODULO */
    DECLARE     strUsuarioJM   varchar(50);
    DECLARE     strMotivo      varchar(100);
    DECLARE     strUpdateUsr   varchar(30);
    
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION 
		BEGIN
			SET intEstatus = 0;
			GET DIAGNOSTICS CONDITION 1 strCodigo = RETURNED_SQLSTATE, strDetalle = MESSAGE_TEXT;
		END;
	SET  lc_time_names = 'es_ES';

   select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Opcion')),
			JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Usuario')),
            JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Token')),
            JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.UsuarioJM.Id'))
	INTO  strOpcion, strUsuario, strToken, intId;
    
	Select 	USU_Token 
	From 	core_usuarios USUARIO
	WHERE 	USUARIO.USU_Usuario = strUsuario
	Into strTokenUser;
    
    If (strTokenUser != strToken) Then
		SIGNAL SQLSTATE VALUE '45000'
		SET MESSAGE_TEXT = '¡El token no coincide!';
		SELECT  intId,intEstatus,strCodigo,strDetalle;
		leave sp;
    End If;
    
    IF (strOpcion IN ('C','CT')) THEN
		Select 	USUARIO.USU_Id     			  		as Id,
				USUARIO.USU_Usuario 	      		 as USUARIO,
                USUARIO.USU_Nombre 		     		 as NOMBRE,
                USUARIO.USU_NombreInterno    		 as NOMBRE_INTERNO,
                USUARIO.USU_FechaIngreso      		 as FECHA_INGRESO,
                USUARIO.USU_Correo 		     		 as CORREO,
                AREA.CAT_Nombre 		     		 as AREA,
                USUARIO.CAT_Area                     as ID_AREA,
                PUESTO.CAT_Nombre                    as PUESTO,
                USUARIO.CAT_Puesto                   as ID_PUESTO,
                USUARIO.USU_Imagen                   as IMG,
                /* PERFILES.PER_Nombre                  as PERFIL,
                USUARIO.PER_Id                       as IdPerfil,
                UNIDAD_NEGOCIO.UNN_Nombre            as UNIDAD_NEGOCIO,
                USUARIO.UNN_Id		                 as ID_UNIDAD_NEGOCIO, */
				CAST(USUARIO.USU_Activo AS unsigned) as ACTIVO,
                USUARIO.USU_UsuarioCrea	      		 as USUARIO_CREA,
                USUARIO.USU_FechaCrea 	             as FECHA,
                USUARIO.USU_UsuarioModifica          as USUARIO_MODIFICA,
                USUARIO.USU_FechaModifica     		 as FECHA_MODIFICA,
                USUARIO.USU_UsuarioElimina    		 as USUARIO_ELIMINA,
                USUARIO.USU_FechaElimina      		 as FECHA_ELIMINA,
                USUARIO.USU_MotivoEliminacion        as MOTIVO_ELIMINACION
        From 	core_usuarios USUARIO
				Join core_catalogos AREA
					On AREA.CAT_Id = USUARIO.CAT_Area
				Join core_catalogos PUESTO
					On PUESTO.CAT_Id = USUARIO.CAT_Puesto
				/*Join core_unidades_negocio UNIDAD_NEGOCIO
					On UNIDAD_NEGOCIO.UNN_Id = USUARIO.UNN_Id
				Left Join core_perfiles PERFILES
					On USUARIO.PER_Id = PERFILES.PER_Id*/
		Where	USUARIO.USU_Activo = 1 
				OR 
                strOpcion          = 'CT';
	END IF;
	
     IF (strOpcion='CI') THEN	
        Select Distinct
			PROGRAMA_PERMISO.CPP_Id 								  As IdPerfil,
			CONCAT(PROGRAMAS.PRO_Nombre, ' - ', CATALOGOS.CAT_Nombre) As NOMBRE
		From core_perfiles PERFILES
			Join core_perfiles_detalle PERFILES_DETALLE
				On PERFILES.PER_Id = PERFILES_DETALLE.PER_Id
			Join core_programas_permiso PROGRAMA_PERMISO
				On PERFILES_DETALLE.CPP_Id = PROGRAMA_PERMISO.CPP_Id
			Join core_programas PROGRAMAS
				On PROGRAMAS.PRO_Id = PROGRAMA_PERMISO.PRO_Id
			Join core_catalogos CATALOGOS
				On CATALOGOS.CAT_Id = PROGRAMA_PERMISO.CAT_Permiso
		Join core_usuarios_perfil USUARIO_PERFIL
				On USUARIO_PERFIL.PER_Id = PERFILES.PER_Id
		Where USUARIO_PERFIL.USU_Usuario = strUsuario;
        Select 
			PERFILES.PER_Nombre As NOMBRE, 
            USUARIO_PERFIL.PER_Id As Id
        From core_perfiles PERFILES
			Join core_usuarios_perfil USUARIO_PERFIL
				On PERFILES.PER_Id = USUARIO_PERFIL.PER_Id
		Where USUARIO_PERFIL.USU_Usuario = strUsuario;
        Select 
			UNIDAD_NEGOCIO.UNN_Nombre AS NOMBRE, 
            UNIDAD_NEGOCIO.UNN_Id     As Id
        From core_unidades_negocio UNIDAD_NEGOCIO
			Join core_usuarios_unidad_negocio USUARIO_UNIDAD_NEGOCIO
				On USUARIO_UNIDAD_NEGOCIO.UNN_Id = UNIDAD_NEGOCIO.UNN_Id
		Where USUARIO_UNIDAD_NEGOCIO.USU_Usuario = strUsuario;
	END IF;
    
    IF (strOpcion = 'G') THEN
		Select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.UsuarioJM.USUARIO'))
		INTO  strUsuarioJM;
        IF intId = 0 THEN
			IF (SELECT count(*) FROM core_usuarios USUARIO 
                WHERE USUARIO.USU_Usuario = strUsuarioJM ) > 0 THEN
				SIGNAL SQLSTATE VALUE '99999'
				SET MESSAGE_TEXT = '¡Usuario Existente!';
			END IF;	
        END IF;        
		START TRANSACTION;
			IF intId = 0 THEN  
				SET strAccion='crear';
				INSERT INTO core_usuarios
				(
					USU_Usuario,
					USU_Nombre,
					USU_NombreInterno,
					USU_FechaIngreso,
					USU_Correo,
					USU_Password,
					CAT_AREA,
					CAT_Puesto,
					USU_UsuarioCrea,
					USU_FechaCrea,
                    USU_Activo,
                    USU_UsuarioNuevo
				)
				SELECT DISTINCT 
						Usuario.USUARIO 	         AS  USU_Usuario,
						Usuario.NOMBRE               AS  USU_Nombre,
						Usuario.NOMBRE_INTERNO       AS  USU_NombreInterno,
                        Usuario.FECHA_INGRESO        AS  USU_FechaIngreso,
                        Usuario.CORREO               AS  USU_NombreInterno,
                        MD5(UPPER(Usuario.USUARIO))  AS  USU_Password,
                        Usuario.ID_AREA              AS  CAT_AREA,
                        Usuario.ID_PUESTO            AS  CAT_PUESTO,
						strUsuario 			         AS  USU_UsuarioCrea,
                        now()                        AS  USU_FechaCrea,
						1                            AS  USU_Activo,
                        1                            AS USU_UsuarioNuevo
				FROM JSON_TABLE(jsonParametros, '$.UsuarioJM'
						COLUMNS (
							USUARIO         Varchar(15)  PATH  '$.USUARIO', 
							NOMBRE          Varchar(50)  PATH  '$.NOMBRE',
							NOMBRE_INTERNO  Varchar(100) PATH  '$.NOMBRE_INTERNO',
                            Fecha_Ingreso   Datetime     PATH  '$.FECHA_INGRESO',
                            CORREO          Varchar(100) PATH  '$.CORREO',
                            ID_AREA         Bigint       PATH  '$.ID_AREA',
                            ID_PUESTO       Bigint       PATH  '$.ID_PUESTO'
						)
					) AS Usuario;
				set intId = LAST_INSERT_ID();
                
                /* Insertar perfiles */
                Delete From core_usuarios_perfil
                Where USU_Usuario = strUsuarioJM; 
                Insert Into core_usuarios_perfil (
					USU_Usuario,
                    PER_Id
                ) SELECT DISTINCT 
						USUARIO_PERFIL.USUARIO 	AS  USU_Usuario,
						USUARIO_PERFIL.PER_ID   AS  PER_Id
				FROM JSON_TABLE(jsonParametros, '$.UsuarioJM.PERFIL[*]'
						COLUMNS (
							USUARIO        Varchar(30)  PATH  '$.USUARIO', 
							PER_ID         Varchar(20)  PATH  '$.PER_Id'
						)
				) AS USUARIO_PERFIL;
                
                /* Insertar unidad negocio */
                Delete From core_usuarios_unidad_negocio
                Where USU_Usuario = strUsuarioJM; 
                Insert Into core_usuarios_unidad_negocio (
					USU_Usuario,
                    UNN_Id
                ) SELECT DISTINCT 
						USUARIO_UNIDAD_NEGOCIO.USUARIO 	AS  USU_Usuario,
						USUARIO_UNIDAD_NEGOCIO.PER_ID   AS  UNN_Id
				FROM JSON_TABLE(jsonParametros, '$.UsuarioJM.UNIDAD_NEGOCIO[*]'
						COLUMNS (
							USUARIO        Varchar(30)  PATH  '$.USUARIO', 
							PER_ID         Varchar(20)  PATH  '$.UNN_Id'
						)
					) AS USUARIO_UNIDAD_NEGOCIO;
			ELSE
				SET strAccion = 'actualizar';
                /* IF (SELECT count(*) FROM core_usuarios USUARIO 
					WHERE USUARIO.USU_Usuario = strUsuarioJM ) > 0 THEN
					SIGNAL SQLSTATE VALUE '99999'
					SET MESSAGE_TEXT = '¡Usuario Existente!';
				END IF; */
                Update core_usuarios USUARIOS
					Join (Select 
                            USUARIO,
                            NOMBRE, 
                            NOMBRE_INTERNO,
                            FECHA_INGRESO,
                            CORREO,
                            ID_AREA,
                            ID_PUESTO,
                            UNN_Id
				FROM JSON_TABLE(jsonParametros, '$.UsuarioJM'
					COLUMNS (
							USUARIO         Varchar(15)  PATH  '$.USUARIO', 
							NOMBRE          Varchar(50)  PATH  '$.NOMBRE',
							NOMBRE_INTERNO  Varchar(100) PATH  '$.NOMBRE_INTERNO',
                            FECHA_INGRESO   Datetime     PATH  '$.FECHA_INGRESO',
                            CORREO          Varchar(100) PATH  '$.CORREO',
                            ID_AREA         Bigint       PATH  '$.ID_AREA',
                            ID_PUESTO       Bigint       PATH  '$.ID_PUESTO',
                            UNN_Id          Bigint       PATH  '$.ID_UNIDAD_NEGOCIO'
					)
				) AS USUARIOS_UP )  AS USUARIOS_UP 
					  on USUARIOS.USU_Usuario = USUARIOS_UP.USUARIO
				SET 
                    USUARIOS.USU_USUARIO         =  USUARIOS_UP.USUARIO,
                    USUARIOS.USU_Nombre 	     = USUARIOS_UP.NOMBRE,
                    USUARIOS.USU_NombreInterno   = USUARIOS_UP.NOMBRE_INTERNO,
                    USUARIOS.USU_FechaIngreso    = USUARIOS_UP.FECHA_INGRESO,
                    USUARIOS.USU_Correo          = USUARIOS_UP.CORREO,
                    USUARIOS.CAT_Area            = USUARIOS_UP.ID_AREA,
                    USUARIOS.CAT_Puesto          = USUARIOS_UP.ID_PUESTO,
                    USUARIOS.UNN_Id              = USUARIOS_UP.UNN_Id,
                    USUARIOS.USU_UsuarioModifica = strUsuario,
                    USUARIOS.USU_FechaModifica   = now();
                    
				/* Insertar perfiles */
                Delete From core_usuarios_perfil
                Where USU_Usuario = strUsuarioJM; 
                Insert Into core_usuarios_perfil (
					USU_Usuario,
                    PER_Id
                ) SELECT DISTINCT 
						USUARIO_PERFIL.USUARIO 	AS  USU_Usuario,
						USUARIO_PERFIL.PER_ID   AS  PER_Id
				FROM JSON_TABLE(jsonParametros, '$.UsuarioJM.PERFIL[*]'
						COLUMNS (
							USUARIO        Varchar(30)  PATH  '$.USUARIO', 
							PER_ID         Varchar(20)  PATH  '$.PER_Id'
						)
				) AS USUARIO_PERFIL;
                
                /* Insertar unidad negocio */
                Delete From core_usuarios_unidad_negocio
                Where USU_Usuario = strUsuarioJM; 
                Insert Into core_usuarios_unidad_negocio (
					USU_Usuario,
                    UNN_Id
                ) SELECT DISTINCT 
						USUARIO_UNIDAD_NEGOCIO.USUARIO 	AS  USU_Usuario,
						USUARIO_UNIDAD_NEGOCIO.PER_ID   AS  UNN_Id
				FROM JSON_TABLE(jsonParametros, '$.UsuarioJM.UNIDAD_NEGOCIO[*]'
						COLUMNS (
							USUARIO        Varchar(30)  PATH  '$.USUARIO', 
							PER_ID         Varchar(20)  PATH  '$.UNN_Id'
						)
					) AS USUARIO_UNIDAD_NEGOCIO;
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
    
    /* Consulta permisos */
    If (strOpcion = 'CP') Then
		Select 	distinct 
				PERMISOS.CPP_Id As IdPerfil,
				PROGRAMA.PRO_Id as IdPrograma,
                PERMISO.CAT_Id 	as IdPermiso,
                CONCAT(PROGRAMA.PRO_Nombre,' - ', PERMISO.CAT_Nombre ) as NOMBRE
		From 	core_programas PROGRAMA
				Join core_programas_permiso PERMISOS
					ON PERMISOS.PRO_Id = PROGRAMA.PRO_Id
				Join core_catalogos PERMISO
					ON PERMISO.CAT_Id = PERMISOS.CAT_Permiso
		Order by NOMBRE;
    End If;
    
    /* Resetear Password */
    If(strOpcion = 'RP') Then 
		START TRANSACTION;
		SET strUpdateUsr = (Select USU_Usuario From core_usuarios Where USU_Id = intId);
        Update core_usuarios
			Set USU_Password = MD5(UPPER(strUpdateUsr))
		Where USU_Id         = intId
			AND USU_Password <> MD5(UPPER(strUpdateUsr));
		Select intEstatus As Estatus;
        IF intEstatus = 0 then
			ROLLBACK;
			CALL PA_CORE_Bitacoras(strModulo, strPrograma, "ErrorSQL", intId, jsonParametros, 
				 json_object("La nueva contraseña no puede ser igual a la anterior", strDetalle), strUsuario);
			SELECT  intId, intEstatus, strCodigo, strDetalle;
        ELSE 
			CALL PA_CORE_Bitacoras(strModulo, strPrograma, strAccion, intId, jsonAnterior, jsonParametros, strUsuario);
            SELECT intId As Ids;
        	COMMIT;
		END IF;
    End If; 
    
     /* Desactivar Usuario */
	If (strOpcion = 'DU') Then
		select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.UsuariosJM.Motivo'))
		INTO  strMotivo;
        START TRANSACTION;
		Update core_usuarios USUARIO
				Join ( select Id, Motivo
				FROM JSON_TABLE(jsonParametros, 
					   '$.UsuariosJM[*]' COLUMNS (
						Id		bigint 		 PATH '$.Id',
                        Motivo  varchar(100) PATH '$.Motivo'
					)
				) AS USUARIO_UP )  AS USUARIO_UP 
					  on USUARIO.USU_Id = USUARIO_UP.Id
				SET  USUARIO.USU_MotivoEliminacion = USUARIO_UP.Motivo,
                     USUARIO.USU_Activo            = 0,
                     USUARIO.USU_UsuarioElimina    = strUsuario,
                     USUARIO.USU_FechaElimina      = now();
			IF intEstatus = 0 then
				ROLLBACK;
				Call PA_CORE_Bitacoras(strModulo,strPrograma,"ErrorSQL",intId,jsonParametros, json_object("Error", strDetalle), strUsuario);
				SELECT  intId, intEstatus, strCodigo, strDetalle;
			ELSE 
				Call PA_CORE_Bitacoras(strModulo, strPrograma, strAccion, intId, jsonAnterior, jsonParametros, strUsuario);
				Select intId as Id;
				COMMIT;
			END IF;
	  END IF;
     
     /* PERMISO USUARIO */
     If (strOpcion = 'PU') Then
		Select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.IdModulo'))
			   INTO  intIdModulo;
        Select CATALOGOS.Nombre     As PERMISO,
			   PROGRAMAS.PRO_Nombre As PROGRAMA
		From core_usuarios USUARIOS
			Join core_usuarios_perfil USUARIOS_PERFIL
				On USUARIOS.USU_Usuario = USUARIOS_PERFIL.USU_Usuario
			Join core_perfiles_detalle PERFILES_DETALLE 
				On USUARIOS_PERFIL.PER_Id = PERFILES_DETALLE.PER_Id
			/* sacar el programa */
			Join core_programas PROGRAMAS
				On PERFILES_DETALLE.PRO_Id = PROGRAMAS.PRO_Id
			/* Sacar el permiso */  
			Join vwCatalogos CATALOGOS 
				On PERFILES_DETALLE.CAT_Permiso = CATALOGOS.Id
		WHERE USUARIOS.USU_Usuario = strUsuario
			  AND PROGRAMAS.PRO_Id = intIdModulo;
     End If; 
End//
DELIMITER ;

-- Volcando estructura para procedimiento jm_core.PA_CORE_ConMenu
DELIMITER //
CREATE PROCEDURE `PA_CORE_ConMenu`(IN jsonParametros JSON)
sp:BEGIN
	DECLARE 	strOpcion    varchar(10) ;
    DECLARE 	strUsuario   VARCHAR(30);
	DECLARE 	strCodigo    varchar(10) ;
	DECLARE		strDetalle   varchar(255);	
	DECLARE		intEstatus 		BOOL DEFAULT 1;
	
    DECLARE		strAccion varchar(30);
    DECLARE		strModulo    varchar(30) default 'laz_core';
    DECLARE		strPrograma  varchar(50)  default 'core_perfiles';
	DECLARE		jsonAnterior JSON;
	DECLARE		intId		 BIGINT;
    DECLARE		blnActivo	 bit;
    DECLARE		strPassword  varchar(30);
    DECLARE		intIdPerfil  bigint;
    DECLARE     strToken     Text;
    DECLARE     strTokenUser Text;
    DECLARE     strNombre     VARCHAR(100);
    DECLARE     strIcono      VARCHAR(100);
    DECLARE     strMotivo     varchar(100);
    DECLARE     strPasswrod    varchar(30);
    DECLARE     intIdModulo    BIGINT;
    DECLARE     strPasswordPersonal varchar(50);
    
	DECLARE CONTINUE HANDLER FOR SQLEXCEPTION 
		BEGIN
			SET intEstatus = 0;
			GET DIAGNOSTICS CONDITION 1 strCodigo = RETURNED_SQLSTATE, strDetalle = MESSAGE_TEXT;
		END;
	SET  lc_time_names = 'es_ES';
	
   select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Opcion')),
	      JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Token')),
	      JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Usuario')),
          JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Modulo.Id'))
	INTO  strOpcion, strToken, strUsuario, intId;
    
     
		Select USU_Token 
		From core_usuarios USUARIO
		WHERE USUARIO.USU_Usuario = strUsuario
		Into strTokenUser;
		
		If (strOpcion Not IN ('VU', 'UT') And strTokenUser != strToken) Then
			SIGNAL SQLSTATE VALUE '45000'
			SET MESSAGE_TEXT = '¡El token no coincide!';
			SELECT  intId,intEstatus,strCodigo,strDetalle;
		leave sp;
    End If;
        
        
	If (strOpcion = 'G') Then
        START TRANSACTION;
        If intId = 0 Then
			SET strAccion = 'Crear';
			Insert Into core_modulos (
				
                MOD_Nombre,
                MOD_Icono,
                MOD_Usuario,
                MOD_Fecha,
                MOD_Activo,
                MOD_Orden
            )
         SELECT DISTINCT 
					Modulo.Nombre       As MOD_Nombre,
                    Modulo.Icono	    As MOD_Icono,
					strUsuario          As MOD_Usuario,
                    now()               As MOD_Fecha,
                    1                   As MOD_Activo,
                    11                  As MOD_Orden
			FROM JSON_TABLE(jsonParametros, '$.Modulo'
					COLUMNS (
						
						Nombre 		varchar(100) PATH '$.Nombre',
                        Icono	    varchar(100) PATH '$.Icono'
					)
				) AS Modulo;
			Set intId = last_insert_id();
        Else
		
        SET strAccion='actualizar';
			Update core_modulos MODULOS
            Join (Select Id,Nombre, Icono
				From json_table(jsonParametros, '$.Modulo'
					columns (
						Id     bigint       PATH '$.Id',
						Nombre varchar(100) PATH '$.Nombre',
						Icono  varchar(100) PATH '$.Icono'
					)
				) As MODULOS_UP )  As MODULOS_UP
				On MODULOS.MOD_Id  = MODULOS_UP.Id
            Set MODULOS.MOD_Nombre = MODULOS_UP.Nombre,MODULOS.MOD_Icono  = MODULOS_UP.Icono;
       End If;
       
       
	   IF intEstatus=0 then
				ROLLBACK;
				call PA_CORE_Bitacoras(strModulo,strPrograma,"ErrorSQL",intId,jsonParametros, json_object("Error", strDetalle),strUsuario);
            	SELECT  intId,intEstatus,strCodigo,strDetalle;
        ELSE 
			 call PA_CORE_Bitacoras(strModulo,strPrograma,strAccion,intId,jsonAnterior,jsonParametros,strUsuario);
             Select intId As Id;
        	COMMIT;
      END IF;
      
    End If; 

    
    IF (strOpcion='VUS') THEN
	
         IF NOT  EXISTS(
				SELECT PERFIL.USU_Usuario
                FROM 	core_usuarios_perfil PERFIL
                WHERE PERFIL.USU_Usuario= strUsuario ) 
          THEN
				SIGNAL SQLSTATE VALUE '99999'
				SET MESSAGE_TEXT = '¡Usuario sin perfil!';
                SELECT  intId,intEstatus,strCodigo,strDetalle;
                leave sp;
          
          END IF;
        
        Select 	MODULO.MOD_Id          as Id,
				MODULO.MOD_Nombre      as Nombre,
                MODULO.MOD_NombreMenu  as NombreMenu,
				MODULO.MOD_Icono       as Icono, 
                CAST(MODULO.MOD_Activo AS unsigned)  As Activo
		From	core_modulos MODULO
        Order	By MODULO.MOD_Orden;
		
        Select Distinct
			PROGRAMAS.PRO_Id          As Id,
			PROGRAMAS.PRO_Nombre      As Nombre,
            PROGRAMAS.PRO_Descripcion As NombreMenu,
			PROGRAMAS.MOD_Id          As IdModulo,
			PROGRAMAS.PRO_Ruta 	      As Ruta,
            CAST(PROGRAMAS.PRO_Activo AS Unsigned) AS Activo
		From core_perfiles PERFILES
			Join core_perfiles_detalle PERFILES_DETALLE
				On PERFILES.PER_Id = PERFILES_DETALLE.PER_Id
			Join core_programas_permiso PROGRAMA_PERMISO
				On PERFILES_DETALLE.CPP_Id = PROGRAMA_PERMISO.CPP_Id
			Join core_programas PROGRAMAS
				On PROGRAMAS.PRO_Id = PROGRAMA_PERMISO.PRO_Id
			Join core_catalogos CATALOGOS
				On CATALOGOS.CAT_Id = PROGRAMA_PERMISO.CAT_Permiso
			Join core_usuarios_perfil USUARIOS
				On USUARIOS.PER_Id = PERFILES_DETALLE.PER_Id
		Where CATALOGOS.CAT_Clave = 'CON' AND USUARIOS.USU_Usuario = strUsuario;
        
	END IF;
    
    If (strOpcion = 'CM') Then
        Select 	MODULO.MOD_Id     as Id,
				MODULO.MOD_Nombre as Nombre,
				MODULO.MOD_Icono  as Icono, 
                CAST(MODULO.MOD_Activo AS unsigned)  As Activo
		From	core_modulos MODULO
        Order	By MODULO.MOD_Orden;
    End If;
    
    /* VALIDAR USUARIO INICIO SESION */
	IF (strOpcion='VU') THEN	
    	select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Usuario')),
			JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Password'))
		INTO  strUsuario,strPasswrod;
        
        IF NOT  EXISTS(
				SELECT USUARIO.USU_Usuario
                FROM 	core_usuarios USUARIO 
                WHERE USUARIO.USU_Usuario= strUsuario  AND USU_Password = MD5(strPasswrod) and USUARIO.USU_Activo=1) 
          THEN
				SIGNAL SQLSTATE VALUE '45000'
				SET MESSAGE_TEXT = '¡Credenciales Incorrectas!';
                SELECT  intId,intEstatus,strCodigo,strDetalle;
                leave sp;
          END IF;
    
            Select  USUARIO.USU_Usuario as USUARIO,
					USUARIO.USU_Nombre as NOMBRE,
                    USUARIO.USU_Correo as CORREO,
                    AREA.Nombre as AREA,
                    PUESTO.Nombre as PUESTO
            From 	core_usuarios USUARIO
					left Join vwcatalogos PUESTO
						on Puesto.Id=USUARIO.CAT_Puesto
					left Join vwcatalogos AREA
						on Area.Id=USUARIO.CAT_Area
            WHERE 	USUARIO.USU_Usuario= strUsuario  AND USU_Password = MD5(strPasswrod);
      
     END IF;
     
     /* ACTUALIZA TOKEN */
     IF (strOpcion = 'UT') THEN
			
            Update core_usuarios
            Set USU_Token = strToken
            Where USU_Usuario = strUsuario;
            
			Select USUARIO.USU_Token    	                   As TokenAPI,
				    USUARIO.USU_Usuario                        As UserActive,
                    USUARIO.USU_NombreInterno                  As NOMBRE,
                    USUARIO.USU_Correo  	   				   As CORREO,
                    USUARIO.USU_Imagen                         As IMG,
                    AREA.Nombre                				   As AREA,
                    PUESTO.Nombre                              As PUESTO,
                    CAST(USUARIO.USU_UsuarioNuevo As unsigned) As USUARIO_NUEVO
            From core_usuarios USUARIO 
				left Join vwcatalogos PUESTO
					on Puesto.Id = USUARIO.CAT_Puesto
				left Join vwcatalogos AREA
					on Area.Id = USUARIO.CAT_Area
            WHERE USUARIO.USU_Usuario = strUsuario;
     END IF;
     
     /* ACTUALIZAR CONTRASEÑA PERSONAL */
     If(strOpcion = 'UP') Then 
		Select JSON_UNQUOTE(JSON_EXTRACT( jsonParametros,'$.Password'))
        Into strPasswordPersonal;
        START TRANSACTION;
        Update core_usuarios
        Set USU_Password = MD5(strPasswordPersonal),
			USU_UsuarioNuevo = 0
        Where USU_Usuario    = strUsuario 
			AND USU_Password <> MD5(strPasswordPersonal);
		SET intEstatus = ROW_COUNT();
        Select intEstatus as ESTATUS;
        IF intEstatus = 0 then
			ROLLBACK;
			SET strDetalle = 'La nueva contraseña no puede ser igual a la actual';
			CALL PA_CORE_Bitacoras(
				strModulo, strPrograma, 'ErrorSQL',
				intId, jsonParametros,
				JSON_OBJECT('Error', strDetalle), strUsuario
			);
			SELECT intId, intEstatus, 'ERR' AS strCodigo, strDetalle;
        ELSE 
			 call PA_CORE_Bitacoras(strModulo,strPrograma,strAccion,intId,jsonAnterior,jsonParametros,strUsuario);
             Select intId As Ids;
        	COMMIT;
      END IF;
     End If;
END//
DELIMITER ;

-- Volcando estructura para vista jm_core.vwcatalogos
-- Creando tabla temporal para superar errores de dependencia de VIEW
CREATE TABLE `vwcatalogos` (
	`Id` BIGINT(20) NOT NULL,
	`Clave` VARCHAR(15) NULL COLLATE 'latin1_swedish_ci',
	`Nombre` VARCHAR(100) NULL COLLATE 'latin1_swedish_ci',
	`Descripcion` VARCHAR(150) NULL COLLATE 'latin1_swedish_ci',
	`Activo` BIT(1) NULL,
	`ClaveTipo` VARCHAR(15) NULL COLLATE 'latin1_swedish_ci',
	`Orden` INT(11) NULL
) ENGINE=MyISAM;

-- Eliminando tabla temporal y crear estructura final de VIEW
DROP TABLE IF EXISTS `vwcatalogos`;
CREATE ALGORITHM=UNDEFINED SQL SECURITY DEFINER VIEW `vwcatalogos` AS select `catalogo`.`CAT_Id` AS `Id`,`catalogo`.`CAT_Clave` AS `Clave`,`catalogo`.`CAT_Nombre` AS `Nombre`,`catalogo`.`CAT_Descripcion` AS `Descripcion`,`catalogo`.`CAT_Activo` AS `Activo`,`tipo`.`CTT_Clave` AS `ClaveTipo`,`catalogo`.`CAT_Orden` AS `Orden` from (`core_catalogos_tipo` `tipo` join `core_catalogos` `catalogo` on(`catalogo`.`CTT_Id` = `tipo`.`CTT_Id`)) ;

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
