-- MySQL 8.0 Script - Banco: handly
-- Compatível com MySQL 8.0+
-- Gerado a partir de dump MariaDB 10.4.32

SET NAMES utf8mb4;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET unique_checks = 0;

-- Estrutura da tabela `tabela_pagamento`


DROP TABLE IF EXISTS `tabela_pagamento`;

CREATE TABLE `tabela_pagamento` (
  `id_pagamento` INT NOT NULL AUTO_INCREMENT,
  `id_contratacao` INT NOT NULL,
  `valor` DECIMAL(10,2) NOT NULL,
  `metodo_pagamento` ENUM('cartao_credito', 'pix', 'boleto', 'dinheiro') NOT NULL,
  `status_pagamento` ENUM('pendente', 'pago', 'cancelado') DEFAULT 'pendente',
  PRIMARY KEY (`id_pagamento`),

  -- Relacionamento com a tabela de contratação 
    FOREIGN KEY (`id_contratacao`) REFERENCES `tabela_contratacao` (`id_contratacao`)
    ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


-- Dados da tabela `tabela_pagamento`

LOCK TABLES `tabela_pagamento` WRITE;

UNLOCK TABLES;

SET foreign_key_checks = 1;
SET unique_checks = 1;
