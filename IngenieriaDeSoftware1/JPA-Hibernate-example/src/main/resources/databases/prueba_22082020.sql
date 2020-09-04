-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 22-08-2020 a las 14:59:44
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `enfermedad`
--

DROP TABLE IF EXISTS `enfermedad`;
CREATE TABLE IF NOT EXISTS `enfermedad` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripción` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `historiaclinica`
--

DROP TABLE IF EXISTS `historiaclinica`;
CREATE TABLE IF NOT EXISTS `historiaclinica` (
  `id` int(11) NOT NULL,
  `persona_documento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe83go5gy7uvwuv9qhovs2gjhj` (`persona_documento`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona`
--

DROP TABLE IF EXISTS `persona`;
CREATE TABLE IF NOT EXISTS `persona` (
  `documento` varchar(255) NOT NULL,
  `apellidos` varchar(255) DEFAULT NULL,
  `fecha_nacimiento` date DEFAULT NULL,
  `nombres` varchar(255) DEFAULT NULL,
  `tipo_documento` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`documento`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `persona_enfermedad`
--

DROP TABLE IF EXISTS `persona_enfermedad`;
CREATE TABLE IF NOT EXISTS `persona_enfermedad` (
  `id` int(11) NOT NULL,
  `documento` varchar(255) NOT NULL,
  CONSTRAINT `persona_enfermedad_ibfk_1`
    FOREIGN KEY (`id`) REFERENCES `enfermedad` (`id`),
  CONSTRAINT `persona_enfermedad_ibfk_2`
    FOREIGN KEY (`documento`) REFERENCES `persona` (`documento`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

COMMIT;









/*CREATE TABLE `employee_project` (
  `employee_id` int(11) NOT NULL,
  `project_id` int(11) NOT NULL,
  PRIMARY KEY (`employee_id`,`project_id`),
  KEY `project_id` (`project_id`),
  CONSTRAINT `employee_project_ibfk_1` 
   FOREIGN KEY (`employee_id`) REFERENCES `employee` (`employee_id`),
  CONSTRAINT `employee_project_ibfk_2` 
   FOREIGN KEY (`project_id`) REFERENCES `project` (`project_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;*/


/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
