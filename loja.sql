-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema langglow
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema langglow
-- -----------------------------------------------------
drop DATABASE EXISTS `langglow`;
CREATE SCHEMA IF NOT EXISTS `langglow` DEFAULT CHARACTER SET utf8 ;
USE `langglow` ;

-- -----------------------------------------------------
-- Table `langglow`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `langglow`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `langglow`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `langglow`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `img` VARCHAR(60) NOT NULL,
  `img1` VARCHAR(60) NOT NULL,
  `img2` VARCHAR(60) NOT NULL,
  `categorias_id` INT NOT NULL,
  `preco` DECIMAL(6,2) NOT NULL,
  `descricao` VARCHAR(1000) NOT NULL,
  `detalhes` VARCHAR(1000) NOT NULL,
  `composicao` VARCHAR(1000) NOT NULL,
  `precausao` VARCHAR(1000) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_produtos_categorias_idx` (`categorias_id` ASC),
  CONSTRAINT `fk_produtos_categorias`
    FOREIGN KEY (`categorias_id`)
    REFERENCES `langglow`.`categorias` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `langglow`.`clientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `langglow`.`clientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `senha` VARCHAR(64) NOT NULL,
  `endereco` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `langglow`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `langglow`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `status` TINYINT NOT NULL,
  `clientes_id` INT NOT NULL,
  `valor_total` DECIMAL(6,2) NOT NULL,
  `endereco_entrega` VARCHAR(250) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_pedidos_clientes1_idx` (`clientes_id` ASC),
  CONSTRAINT `fk_pedidos_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `langglow`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `langglow`.`avaliacoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `langglow`.`avaliacoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nota` TINYINT NOT NULL,
  `clientes_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_avaliacoes_clientes1_idx` (`clientes_id` ASC),
  CONSTRAINT `fk_avaliacoes_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `langglow`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `langglow`.`pedidos_tem_produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `langglow`.`pedidos_tem_produtos` (
  `produtos_id` INT NOT NULL,
  `pedidos_id` INT NOT NULL,
  INDEX `fk_produtos_has_pedidos_pedidos1_idx` (`pedidos_id` ASC),
  INDEX `fk_produtos_has_pedidos_produtos1_idx` (`produtos_id` ASC),
  CONSTRAINT `fk_produtos_has_pedidos_produtos1`
    FOREIGN KEY (`produtos_id`)
    REFERENCES `langglow`.`produtos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_produtos_has_pedidos_pedidos1`
    FOREIGN KEY (`pedidos_id`)
    REFERENCES `langglow`.`pedidos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `langglow`.`avaliacoes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `langglow`.`avaliacoes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nota` TINYINT NOT NULL,
  `clientes_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_avaliacoes_clientes1_idx` (`clientes_id` ASC),
  CONSTRAINT `fk_avaliacoes_clientes1`
    FOREIGN KEY (`clientes_id`)
    REFERENCES `langglow`.`clientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
