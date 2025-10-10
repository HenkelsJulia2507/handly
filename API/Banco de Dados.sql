create database api;
use api;

create table clientes  (
id serial primary key,
nome varchar(100),
telefone varchar(20),
email varchar(100) unique,
password varchar (100)
);

select * from clientes;

