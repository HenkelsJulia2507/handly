-- MySQL 8.0 Script - Banco: handly
-- Estrutura da tabela `tabela_prestador`

SET NAMES utf8mb4;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET unique_checks = 0;

DROP TABLE IF EXISTS `tabela_prestador`;

CREATE TABLE `tabela_prestador` (
  `id_prestador` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `telefone` VARCHAR(20) DEFAULT NULL,
  `endereco` VARCHAR(150) DEFAULT NULL,
  `cidade` VARCHAR(100) DEFAULT NULL,
  `estado` VARCHAR(100) DEFAULT NULL,
  `especialidade` VARCHAR(100) DEFAULT NULL,
  `descricao` VARCHAR(200) DEFAULT NULL,
  `senha` VARCHAR(255) NOT NULL, -- campo destinado ao armazenamento da senha criptografada
  PRIMARY KEY (`id_prestador`),
  UNIQUE KEY `uk_email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

SET foreign_key_checks = 1;
SET unique_checks = 1;
