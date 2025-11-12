-- MySQL 8.0 Script - Banco: handly
-- Compatível com MySQL 8.0+
-- Gerado a partir de dump MariaDB 10.4.32

SET NAMES utf8mb4;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET unique_checks = 0;

-- =====================================================
-- Estrutura da tabela `tabela_contratacao`
-- =====================================================

DROP TABLE IF EXISTS `tabela_contratacao`;

CREATE TABLE `tabela_contratacao` (
  `id_contratacao` INT NOT NULL AUTO_INCREMENT,
  `id_cliente` INT NOT NULL,
  `id_servico` INT NOT NULL,
  PRIMARY KEY (`id_contratacao`),
  
  -- Chaves estrangeiras (opcionais, se as tabelas existirem)
  CONSTRAINT `fk_contratacao_cliente`
    FOREIGN KEY (`id_cliente`) REFERENCES `tabela_cliente` (`id_cliente`)
    ON DELETE CASCADE ON UPDATE CASCADE,
    
  CONSTRAINT `fk_contratacao_servico`
    FOREIGN KEY (`id_servico`) REFERENCES `tabela_servico` (`id_servico`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- =====================================================
-- Dados da tabela `tabela_contratacao`
-- =====================================================

LOCK TABLES `tabela_contratacao` WRITE;
/* 
Exemplo de inserção (opcional):
INSERT INTO `tabela_contratacao` (`id_cliente`, `id_servico`)
VALUES (1, 2);
*/
UNLOCK TABLES;

SET foreign_key_checks = 1;
SET unique_checks = 1;
