-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: saludmental
-- ------------------------------------------------------
-- Server version	5.7.30-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `seg_opcion_menu`
--

DROP TABLE IF EXISTS `seg_opcion_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seg_opcion_menu` (
  `som_id` int(11) NOT NULL,
  `som_nombre` varchar(150) CHARACTER SET utf8 COLLATE utf8_spanish_ci NOT NULL,
  `som_nivel` int(11) NOT NULL,
  `som_id_padre` int(11) DEFAULT NULL,
  `som_orden` int(11) NOT NULL,
  `som_css` varchar(100) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT '',
  `som_url` varchar(250) CHARACTER SET utf8 COLLATE utf8_spanish_ci DEFAULT NULL,
  `som_visible` tinyint(4) NOT NULL,
  PRIMARY KEY (`som_id`),
  KEY `seg_opcion_menu_id_padre` (`som_id_padre`),
  CONSTRAINT `seg_opcion_menu_id_padre` FOREIGN KEY (`som_id_padre`) REFERENCES `seg_opcion_menu` (`som_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seg_opcion_menu`
--

LOCK TABLES `seg_opcion_menu` WRITE;
/*!40000 ALTER TABLE `seg_opcion_menu` DISABLE KEYS */;
/*!40000 ALTER TABLE `seg_opcion_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seg_opcion_menu_rol`
--

DROP TABLE IF EXISTS `seg_opcion_menu_rol`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seg_opcion_menu_rol` (
  `smp_id_rol` int(11) NOT NULL,
  `smp_id_opcion_menu` int(11) NOT NULL,
  KEY `seg_opcion_menu_id_opcion_menu_idx` (`smp_id_opcion_menu`),
  KEY `seg_opcion_menu_id_rol_idx` (`smp_id_rol`),
  CONSTRAINT `seg_opcion_menu_id_opcion_menu` FOREIGN KEY (`smp_id_opcion_menu`) REFERENCES `seg_opcion_menu` (`som_id`),
  CONSTRAINT `seg_opcion_menu_id_rol` FOREIGN KEY (`smp_id_rol`) REFERENCES `spv`.`ma_rol` (`rol_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seg_opcion_menu_rol`
--

LOCK TABLES `seg_opcion_menu_rol` WRITE;
/*!40000 ALTER TABLE `seg_opcion_menu_rol` DISABLE KEYS */;
/*!40000 ALTER TABLE `seg_opcion_menu_rol` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'saludmental'
--
/*!50003 DROP PROCEDURE IF EXISTS `actualizarClaveUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `actualizarClaveUsuario`(
	varIdUsuario bigint,
	varClave varchar(50)
)
BEGIN
UPDATE `spv`.`us_usuario` SET
    us_clave = varClave
WHERE us_id = varIdUsuario;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `obtenerClaveUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerClaveUsuario`(
	varIdusuario int(20),
	out varClave varchar(50)
)
BEGIN
SELECT 
    us_clave
INTO
	varClave
FROM spv.us_usuario
WHERE us_id = varIdUsuario;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `obtenerOpcionesMenuUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerOpcionesMenuUsuario`(
  varIdUsuario int,
  varIdAplicacion int)
begin
	Select distinct som_id idopcionmenu, 
		   som_nombre nombre, 
           som_nivel nivel, 
           case when som_id_padre IS NULL then 0 
                else som_id_padre 
		   end as idpadre, 
           som_css css, 
           som_url url,
           som_visible visible
    from seg_opcion_menu 
	where som_id in (
							Select distinct som_id
							from spv.us_perfil 
								inner join seg_opcion_menu_rol on smp_id_rol = pf_rol
								inner join seg_opcion_menu on som_id = smp_id_opcion_menu
                                inner join spv.ma_rol on rol_id = pf_rol
							where pf_usuario = varIdUsuario 
                            and pf_aplicacion = varIdAplicacion union all
							Select distinct som_id_padre
							from spv.us_perfil
								inner join seg_opcion_menu_rol on smp_id_rol = pf_rol
								inner join seg_opcion_menu on som_id = smp_id_opcion_menu
                                inner join spv.ma_rol on rol_id = pf_rol
							where pf_usuario = varIdUsuario 
                               and pf_aplicacion = varIdAplicacion
                               and som_id_padre is not null
							 ) 
    order by som_nivel, som_id_padre, som_orden;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `obtenerPersona` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerPersona`(varIdPersona bigint,
  out varNombres varchar(100),
  out varApellidos varchar(100),
  out varNumeroDocumento varchar(100),
  out varTipoDocumento varchar(100)
  )
BEGIN
	SELECT
	`pe_numero_id`,
	 ti.ti_nombre,
	`pe_nombres`,
	`pe_apellidos`
    INTO varNumeroDocumento, 
         varTipoDocumento,
         varNombres,
         varApellidos
	FROM buho.`pe_persona` pe
	 inner join buho.ma_tipo_identificacion ti on ti.ti_codigo = pe.pe_tipo_id
     WHERE 	`pe_id` = varIdPersona;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `obtenerPrivilegiosUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerPrivilegiosUsuario`(
 varIdUsuario int,
 varIdAplicacion int
)
BEGIN

	select rol_id idprivilegio, rol_nombre nombre, rol_codigo codigo
    from spv.ma_rol 
    inner join spv.us_perfil on pf_rol = rol_id
    where pf_usuario = varIdUsuario
     and pf_aplicacion = varIdAplicacion;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `obtenerUsuario` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `obtenerUsuario`(
	in varNombreUsuario varchar(50),
	out varNombres varchar(250),
	out varApellidos varchar(250),
	out varIdUsuario int(20),
	out varClave varchar(50),
    out varCorreoElectronico varchar(100),
    out varIdPersona bigint
)
BEGIN
SELECT 
    pe.pe_nombres,
    pe.pe_apellidos,
    usu.us_id,
    usu.us_clave,
    pe.pe_id
INTO
	varNombres,
	varApellidos,
	varidusuario,
	varClave,
    varIdPersona
FROM spv.us_usuario usu
  inner join buho.pe_persona pe on usu.us_persona = pe.pe_id
WHERE usu.us_nombre_usuario = varNombreUsuario;

SELECT 
    em.email
INTO
	varCorreoElectronico
FROM spv.us_usuario usu
  inner join buho.pe_persona pe on usu.us_persona = pe.pe_id
  inner join buho.pe_email em on em.email_persona = pe.pe_id
WHERE usu.us_nombre_usuario = varNombreUsuario LIMIT 1;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-12-12 13:28:11
