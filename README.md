# ecommerce
Trabalho A3 E-commerce feito por: Jenifer Rafaela, Fernando Barbosa, Gabriel Dias.

Necessário usar o banco de dados para o funcionamento correto do trabalho (Copie todo o sql abaixo e cole no mysql).

CREATE DATABASE sneakersEcommerce;

USE sneakersecommerce;

CREATE TABLE usuarios (
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Pnome varchar(140) NOT NULL,
    Snome varchar(140),
    email varchar(140) UNIQUE NOT NULL,
    senha varchar(16) NOT NULL,
    dataNasc DATE NOT NULL
);

CREATE TABLE sneakersecommerce.itens_pedido (
id INT NOT NULL AUTO_INCREMENT,
marca VARCHAR(140) NOT NULL,
nomeProduto VARCHAR(250) NOT NULL,
pedidoId int(16) NOT NULL,
preco VARCHAR(250) NOT NULL,
quantidade VARCHAR(140) NOT NULL,
tamanhoProduto VARCHAR(140) NOT NULL,
PRIMARY KEY (id)) ENGINE = InnoDB;

CREATE TABLE sneakersecommerce.pedido (
ClienteId INT(16) NOT NULL,
Pedido INT(16) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (Pedido)) ENGINE = InnoDB;
