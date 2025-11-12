-- MySQL 8.0 Script - Banco: handly
-- Compatível com MySQL 8.0+
-- Gerado a partir de dump MariaDB 10.4.32

SET NAMES utf8mb4;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET unique_checks = 0;


-- Estrutura da tabela `tabela_cliente`

DROP TABLE IF EXISTS `tabela_cliente`;

CREATE TABLE `tabela_cliente` (
  `id_cliente` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(20) DEFAULT NULL,
  `endereco` VARCHAR(150) DEFAULT NULL,
  `cidade` VARCHAR(100) DEFAULT NULL,
  `estado` VARCHAR(100) DEFAULT NULL,
  `senha` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `uk_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- Dados da tabela `tabela_cliente`

LOCK TABLES `tabela_cliente` WRITE;

UNLOCK TABLES;

SET foreign_key_checks = 1;
SET unique_checks = 1;
