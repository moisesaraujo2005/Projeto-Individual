create database ProjetoIndividual; 
use ProjetoIndividual;
drop database ProjetoIndividual;
 create table Usuario (
 idUsuario int primary key auto_increment,
 nome varchar(50), 
 email varchar(50), 
 senha varchar(50),
 dataNascimento date,
 sexo varchar(40),
 skatista char(3));
 
 create table modalidade(
 idModalidade int primary key auto_increment, 
 nome varchar(50));
 
 
 create table modalidade_usuario(
 fkModalidade int, 
 fkUsuario int, 
  constraint fkModalide foreign key(fkModalidade) references modalidade(idModalidade),
 constraint fkUsu foreign key(fkUsuario) references Usuario(idUsuario));
 
 insert into Usuario Values 
 (null, 'Moises', 'moises@gmail.com', '1231231', '2005-05-07', 'M', 'Sim')

 ;
 insert into modalidade values 
 ( null, 'Street'),
 (null,'Vert'), 
 (null,'Bowl'),
 (null,'FreeStyle'),
 (null,'Downhill');
 insert into skate_usuario values
 (1,1) ;
 select*from Skate join skate_usuario on idSkate=fkSkate join Usuario on idUsuario=fkUsuario where nome='Moises';
 select*from usuario;
 select count(nome) from modalidade where nome ='street';
 select*from modalidade;
select count(skatista)  from usuario where skatista= 'sim'
