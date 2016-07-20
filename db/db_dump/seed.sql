CREATE DATABASE  IF NOT EXISTS `VIS` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `VIS`;
-- MySQL dump 10.13  Distrib 5.7.9, for osx10.9 (x86_64)
--
-- Host: 127.0.0.1    Database: VIS
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'listServers','nothing special'),(2,'getServer','one server'),(3,'createServer',''),(4,'updateServer',NULL),(5,'deleteServer',NULL),(6,'listServersByUser',NULL),(7,'listServersByCurrentUser',NULL),(8,'addUserToExistingServer',NULL),(9,'removeUserFromExistingServer',NULL),(10,'listServerRoles',NULL),(11,'postponeDueDate',NULL),(12,'listUsers',NULL),(13,'getUser',NULL),(14,'createUser',NULL),(15,'updateUser',''),(16,'deleteUser',NULL),(17,'login',NULL),(18,'listVmUsers',NULL),(19,'changePassword',NULL),(20,'restorePassword',NULL),(21,'listNotVMUsers',NULL),(22,'listServerTypes',NULL),(23,'listNotUsersServers',NULL),(24,'changeRights',NULL),(25,'listUserRoles',''),(26,'changeServerRights',NULL),(27,'listServersWhereUserRoleIsUser',NULL),(28,'listServersWhereUserRoleIsAdmin',''),(29,'stopServer',NULL),(30,'startServer',NULL),(31,'changeRootPassword',NULL);
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'user','standart user'),(2,'admin','super user');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles_to_permissions`
--

DROP TABLE IF EXISTS `roles_to_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles_to_permissions` (
  `role_id` bigint(20) NOT NULL,
  `permission_id` bigint(20) NOT NULL,
  PRIMARY KEY (`role_id`,`permission_id`),
  KEY `fk_roles_to_permissions_to_permissions` (`permission_id`),
  CONSTRAINT `fk_roles_to_permissions_to_permissions` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`),
  CONSTRAINT `fk_roles_to_permissions_to_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles_to_permissions`
--

LOCK TABLES `roles_to_permissions` WRITE;
/*!40000 ALTER TABLE `roles_to_permissions` DISABLE KEYS */;
INSERT INTO `roles_to_permissions` VALUES (1,1),(1,2),(1,3),(1,4),(1,5),(1,7),(1,10),(1,11),(1,12),(1,13),(1,14),(1,15),(1,16),(1,17),(1,18),(1,19),(1,20),(1,21),(1,22),(1,23),(1,24),(1,25),(1,26),(1,27),(1,28),(1,29),(1,30),(1,31),(2,1),(2,2),(2,3),(2,4),(2,5),(2,6),(2,7),(2,8),(2,9),(2,10),(2,11),(2,12),(2,13),(2,14),(2,15),(2,16),(2,17),(2,18),(2,19),(2,20),(2,21),(2,22),(2,23),(2,24),(2,25),(2,26),(2,27),(2,28),(2,29),(2,30),(2,31);
/*!40000 ALTER TABLE `roles_to_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server_permissions`
--

DROP TABLE IF EXISTS `server_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `server_permissions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_permissions`
--

LOCK TABLES `server_permissions` WRITE;
/*!40000 ALTER TABLE `server_permissions` DISABLE KEYS */;
INSERT INTO `server_permissions` VALUES (1,'listServers',''),(2,'getServer',NULL),(3,'createServer',NULL),(4,'updateServer',NULL),(5,'deleteServer',NULL),(6,'listServersByUser',NULL),(7,'listServersByCurrentUser',NULL),(8,'addUserToExistingServer',NULL),(9,'removeUserFromExistingServer',NULL),(10,'listServerRoles',NULL),(11,'postponeDueDate',NULL),(12,'listUsers',NULL),(13,'getUser',''),(14,'createUser',NULL),(15,'updateUser',NULL),(16,'deleteUser',NULL),(17,'login',NULL),(18,'listVmUsers',NULL),(19,'changePassword',NULL),(20,'restorePassword',NULL),(21,'listNotVMUsers',NULL),(22,'listServerTypes',''),(23,'listNotUsersServers',''),(24,'changeRights',NULL),(25,'listUserRoles',NULL),(26,'changeServerRights',NULL),(27,'listServersWhereUserRoleIsUser',NULL),(28,'listServersWhereUserRoleIsAdmin',NULL),(29,'stopServer',NULL),(30,'startServer',NULL),(31,'changeRootPassword',NULL);
/*!40000 ALTER TABLE `server_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server_roles`
--

DROP TABLE IF EXISTS `server_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `server_roles` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_roles`
--

LOCK TABLES `server_roles` WRITE;
/*!40000 ALTER TABLE `server_roles` DISABLE KEYS */;
INSERT INTO `server_roles` VALUES (1,'user','simple user'),(2,'admin','server owner');
/*!40000 ALTER TABLE `server_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server_roles_to_server_permissions`
--

DROP TABLE IF EXISTS `server_roles_to_server_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `server_roles_to_server_permissions` (
  `server_role_id` bigint(20) NOT NULL,
  `server_permission_id` bigint(20) NOT NULL,
  PRIMARY KEY (`server_role_id`,`server_permission_id`),
  KEY `fk_server_roles_to_permissions_to_server_permissions` (`server_permission_id`),
  CONSTRAINT `fk_server_roles_to_permissions_to_server_permissions` FOREIGN KEY (`server_permission_id`) REFERENCES `server_permissions` (`id`),
  CONSTRAINT `fk_server_roles_to_permissions_to_server_roles` FOREIGN KEY (`server_role_id`) REFERENCES `server_roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_roles_to_server_permissions`
--

LOCK TABLES `server_roles_to_server_permissions` WRITE;
/*!40000 ALTER TABLE `server_roles_to_server_permissions` DISABLE KEYS */;
INSERT INTO `server_roles_to_server_permissions` VALUES (1,7),(1,27),(1,28),(1,29),(1,30),(2,4),(2,5),(2,6),(2,7),(2,8),(2,9),(2,11),(2,27),(2,28),(2,29),(2,30),(2,31);
/*!40000 ALTER TABLE `server_roles_to_server_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server_statuses`
--

DROP TABLE IF EXISTS `server_statuses`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `server_statuses` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_statuses`
--

LOCK TABLES `server_statuses` WRITE;
/*!40000 ALTER TABLE `server_statuses` DISABLE KEYS */;
INSERT INTO `server_statuses` VALUES (1,'Running','some status description'),(2,'Stopped','default status');
/*!40000 ALTER TABLE `server_statuses` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `server_types`
--

DROP TABLE IF EXISTS `server_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `server_types` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `vzstring` varchar(255) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `server_types`
--

LOCK TABLES `server_types` WRITE;
/*!40000 ALTER TABLE `server_types` DISABLE KEYS */;
INSERT INTO `server_types` VALUES (1,'CentOS 6 (32 bit)','centos-6-x86','CentOS 6 (32 bit)'),(2,'CentOS 6 (64 bit)','centos-6-x86_64','CentOS 6 (64 bit)'),(3,'CentOS 7 (64 bit)','centos-7-x86_64','CentOS 7 (64 bit)'),(4,'Debian 7 (32 bit)','debian-7.0-x86','Debian 7 (32 bit)'),(5,'Debian 7 (64 bit)','debian-7.0-x86_64','Debian 7 (64 bit)'),(6,'Ububtu 14.04 LTS (32 bit)','ubuntu-14.04-x86','Ububtu 14.04 LTS (32 bit)'),(7,'Ubuntu 14.04 LTS (64 bit)','ubuntu-14.04-x86_64','Ububtu 14.04 LTS (64 bit)');
/*!40000 ALTER TABLE `server_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `servers`
--

DROP TABLE IF EXISTS `servers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `servers` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `type_id` bigint(20) NOT NULL,
  `status_id` bigint(20) NOT NULL,
  `due_date` datetime NOT NULL,
  `description` text,
  `created_date` datetime NOT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  `host` bigint(20) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`),
  KEY `fk_servers_to_server_types` (`type_id`),
  KEY `fk_servers_to_server_statuses` (`status_id`),
  CONSTRAINT `fk_servers_to_server_statuses` FOREIGN KEY (`status_id`) REFERENCES `server_statuses` (`id`),
  CONSTRAINT `fk_servers_to_server_types` FOREIGN KEY (`type_id`) REFERENCES `server_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servers`
--

LOCK TABLES `servers` WRITE;
/*!40000 ALTER TABLE `servers` DISABLE KEYS */;
/*!40000 ALTER TABLE `servers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `shops`
--

DROP TABLE IF EXISTS `shops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `shops` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `employees_number` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `shops`
--

LOCK TABLES `shops` WRITE;
/*!40000 ALTER TABLE `shops` DISABLE KEYS */;
/*!40000 ALTER TABLE `shops` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `firstName` varchar(45) DEFAULT NULL,
  `secondName` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `company` varchar(45) DEFAULT NULL,
  `description` text,
  `role_id` bigint(20) NOT NULL,
  `created_date` datetime NOT NULL,
  `deleted` tinyint(1) DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `phone_UNIQUE` (`phone`),
  KEY `fk_users_to_roles` (`role_id`),
  CONSTRAINT `fk_users_to_roles` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (5,'oleg','qW88888888','Oleg','Mironov','test@test.com','34400','Test','',2,'2016-07-08 00:00:00',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_to_servers`
--

DROP TABLE IF EXISTS `users_to_servers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users_to_servers` (
  `user_id` bigint(20) NOT NULL,
  `server_id` bigint(20) NOT NULL,
  `server_role_id` bigint(20) NOT NULL,
  PRIMARY KEY (`user_id`,`server_id`,`server_role_id`),
  KEY `fk_users_to_servers_to_servers` (`server_id`),
  KEY `fk_users_to_servers_to_server_roles` (`server_role_id`),
  CONSTRAINT `fk_users_to_servers_to_server_roles` FOREIGN KEY (`server_role_id`) REFERENCES `server_roles` (`id`),
  CONSTRAINT `fk_users_to_servers_to_servers` FOREIGN KEY (`server_id`) REFERENCES `servers` (`id`),
  CONSTRAINT `fk_users_to_servers_to_users` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_to_servers`
--

LOCK TABLES `users_to_servers` WRITE;
/*!40000 ALTER TABLE `users_to_servers` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_to_servers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-07-08 10:00:25
