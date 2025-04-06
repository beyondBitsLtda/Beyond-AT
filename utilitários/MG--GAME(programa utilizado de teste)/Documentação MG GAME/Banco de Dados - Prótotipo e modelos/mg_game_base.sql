-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: mg_game
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `game`
--

DROP TABLE IF EXISTS `game`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `game` (
  `id_game` int NOT NULL AUTO_INCREMENT,
  `nome_game` varchar(45) NOT NULL,
  `fk_id_player_01` int DEFAULT NULL,
  `fk_id_player_02` int DEFAULT NULL,
  `fk_id_player_03` int DEFAULT NULL,
  `fk_id_player_04` int DEFAULT NULL,
  `fk_id_player_vencedor` int DEFAULT NULL,
  PRIMARY KEY (`id_game`),
  KEY `fk_id_player_02` (`fk_id_player_02`),
  KEY `fk_id_player_03` (`fk_id_player_03`),
  KEY `fk_id_player_04` (`fk_id_player_01`),
  KEY `fk_id_player_vencedor` (`fk_id_player_vencedor`),
  CONSTRAINT `fk_id_player_01` FOREIGN KEY (`fk_id_player_01`) REFERENCES `player` (`id_player`),
  CONSTRAINT `fk_id_player_02` FOREIGN KEY (`fk_id_player_02`) REFERENCES `player` (`id_player`),
  CONSTRAINT `fk_id_player_03` FOREIGN KEY (`fk_id_player_03`) REFERENCES `player` (`id_player`),
  CONSTRAINT `fk_id_player_04` FOREIGN KEY (`fk_id_player_01`) REFERENCES `player` (`id_player`),
  CONSTRAINT `fk_id_player_vencedor` FOREIGN KEY (`fk_id_player_vencedor`) REFERENCES `player` (`id_player`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game`
--

LOCK TABLES `game` WRITE;
/*!40000 ALTER TABLE `game` DISABLE KEYS */;
/*!40000 ALTER TABLE `game` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `player` (
  `id_player` int NOT NULL AUTO_INCREMENT,
  `nome_player` varchar(45) NOT NULL,
  `pontuacao_player` int DEFAULT '0',
  `fk_id_game` int NOT NULL,
  PRIMARY KEY (`id_player`),
  KEY `fk_id_game` (`fk_id_game`),
  CONSTRAINT `fk_id_game` FOREIGN KEY (`fk_id_game`) REFERENCES `game` (`id_game`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questoes`
--

DROP TABLE IF EXISTS `questoes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questoes` (
  `id_questao` int NOT NULL AUTO_INCREMENT,
  `enunciado` varchar(500) NOT NULL,
  `pontuacao` int DEFAULT '100',
  `opcao_01` char(1) NOT NULL,
  `opcao_02` char(1) NOT NULL,
  `opcao_03` char(1) NOT NULL,
  `opcao_04` char(1) NOT NULL,
  `fk_id_game` int NOT NULL,
  PRIMARY KEY (`id_questao`),
  KEY `fk_id_game_questoes` (`fk_id_game`),
  CONSTRAINT `fk_id_game_questoes` FOREIGN KEY (`fk_id_game`) REFERENCES `game` (`id_game`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questoes`
--

LOCK TABLES `questoes` WRITE;
/*!40000 ALTER TABLE `questoes` DISABLE KEYS */;
/*!40000 ALTER TABLE `questoes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-10-18  6:16:36
