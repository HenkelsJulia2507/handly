create database api;
use api;

create table clientes  (
    id int auto_increment primary key,
    nome varchar(100),
    telefone varchar(20),
    email varchar(100) unique,
    password varchar (100)
);

create table prestadores (
    id int auto_increment primary key,
    nome varchar(100),
    telefone varchar(20),
    email varchar(100) unique,
    password varchar (100)
);

select * from clientes;
select * from prestadores;




-- controladores para teste
drop table clientes;
drop table prestadores;
drop database api;
