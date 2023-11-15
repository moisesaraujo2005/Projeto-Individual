create database ProjetoIndividual; 
use ProjetoIndividual;
drop database ProjetoIndividual;
 create table Usuario (
 idUsuario int primary key auto_increment,
 nome varchar(50), 
 email varchar(50), 
 senha varchar(50),
 dataNascimento date,
 Sexo char(1),
 skatista char(3), 
 skatistaPreferido varchar(50));
 
 create table Skate(
 idSkate int primary key auto_increment, 
 modalidade varchar(50));
 
 
 create table skate_usuario(
 fkSkate int, 
 fkUsuario int, 
  constraint fkSka foreign key(fkSkate) references Skate(idSkate),
 constraint fkUsu foreign key(fkUsuario) references Usuario(idUsuario));
 
 insert into Usuario Values 
 (null, 'Moises', 'moises@gmail.com', '1231231', '2005-05-07', 'M', 'Sim', 'Tiago Lemos')

 ;
 insert into Skate values 
 (1, 'Street');
 insert into skate_usuario values
 (1,1) ;
 select*from Skate join skate_usuario on idSkate=fkSkate join Usuario on idUsuario=fkUsuario where nome='Moises';
 

