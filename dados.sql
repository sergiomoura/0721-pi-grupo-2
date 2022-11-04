CREATE DATABASE  IF NOT EXISTS `langglow` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `langglow`;
-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: langglow
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Dumping data for table `avaliacoes`
--

LOCK TABLES `avaliacoes` WRITE;
/*!40000 ALTER TABLE `avaliacoes` DISABLE KEYS */;
/*!40000 ALTER TABLE `avaliacoes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'olhos'),(2,'rosto'),(3,'lábios'),(4,'sobrancelhas'),(5,'skincare');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'langglow','langglow2022@gmail.com','$2b$10$2VvaUbFGGkabxi1Uk8xIC.ILhAWRAoX8u4kiP6bldvXTPn7TzbylG','Hollywood'),(2,'Geovanna','geo2022@gmail.com','$2b$10$rt3iWhkZWJ1rX2nIiaieweq5m0M4pzggmshk.tfiwPHjisG73.G5u','Itália'),(3,'Gaby','gaby2022@gmail.com','$2b$10$/AiY9GpFqRdG4m8KAnn6j.Id0CJrBG35IjFGwG2GRZYnIgZ8jNCxy','Portugal'),(4,'Naty','naty2022@gmail.com','$2b$10$NtvJxLR2phRSopBKr7t5c.sPe//3sLPHmwxqE59vx.3LUqFCek2VS','Canadá'),(5,'AnaCarol','anacarol2022@gmail.com','$2b$10$FuH0kSmwCO9desD78cUpiu0h0aQThthmUWw9RlCvtyd9WqIJCNWMW','Roma'),(6,'Lara','lara2022@gmail.com','$2b$10$yhCC8Cvg4LESCuEF7fD1WO2V63JIjEitabqzGO8iKwKITA4a7TaZy','World');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pedidos`
--

LOCK TABLES `pedidos` WRITE;
/*!40000 ALTER TABLE `pedidos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `pedidos_tem_produtos`
--

LOCK TABLES `pedidos_tem_produtos` WRITE;
/*!40000 ALTER TABLE `pedidos_tem_produtos` DISABLE KEYS */;
/*!40000 ALTER TABLE `pedidos_tem_produtos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES 
(1,'rimel transparente','rimel.jpg',1,2.50,
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?'
),
(2,'base','base.jpg',2,30.00,
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?'
),
(3,'paleta','paleta azul.png',3,14.00,
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?'
),
(4,'paleta colorida','paleta colorida.jpg',4,4.00,
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?'
),
(5,'paleta','paleta1.jpg',5,10.00,
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?',
'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur ullam veniam excepturi laudantium recusandae sequi laborum in officiis maiores blanditiis officia, quaerat odit vitae dolore culpa quo mollitia quos minus saepe nisi harum aliquid at. Quod, qui sint? Numquam quas harum asperiores dolorum inventore debitis quo excepturi autem libero animi perferendis consectetur dolorem similique, magni vero recusandae saepe fugit laudantium doloribus minima eius. Voluptates minus ipsum dignissimos expedita doloremque tenetur porro esse totam est excepturi sit impedit eos non natus iure dolores qui, corporis vitae quas ullam in molestias eum. Architecto porro, qui quidem illo molestiae saepe sunt amet culpa?'
);
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-04 14:38:34
