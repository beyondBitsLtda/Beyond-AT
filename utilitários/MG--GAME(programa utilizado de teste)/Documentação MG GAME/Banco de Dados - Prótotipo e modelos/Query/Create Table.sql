use mg_game;

create table player (
id_player int primary key auto_increment,
nome_player varchar(45) not null,
pontuacao_player int default 0,
fk_id_game int not null);

create table questoes (
id_questao int primary key auto_increment,
enunciado varchar(500) not null,
pontuacao int default 100,
opcao_01 char  not null,
opcao_02 char  not null,
opcao_03 char  not null,
opcao_04 char  not null,
fk_id_game int not null);

create table game (
id_game int primary key auto_increment,
nome_game varchar(45) not null,
fk_id_player_01 int,
fk_id_player_02 int,
fk_id_player_03 int,
fk_id_player_04 int,
fk_id_player_vencedor int);
