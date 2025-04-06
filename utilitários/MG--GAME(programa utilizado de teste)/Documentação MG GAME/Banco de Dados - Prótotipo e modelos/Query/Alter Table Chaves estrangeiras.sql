use mg_game;

ALTER TABLE player
ADD CONSTRAINT fk_id_game
FOREIGN KEY (fk_id_game)
REFERENCES game(id_game);

ALTER TABLE questoes
ADD CONSTRAINT fk_id_game_questoes
FOREIGN KEY (fk_id_game)
REFERENCES game(id_game);

ALTER TABLE game
ADD CONSTRAINT fk_id_player_01
FOREIGN KEY (fk_id_player_01)
REFERENCES player(id_player);

ALTER TABLE game
ADD CONSTRAINT fk_id_player_02
FOREIGN KEY (fk_id_player_02)
REFERENCES player(id_player);

ALTER TABLE game
ADD CONSTRAINT fk_id_player_03
FOREIGN KEY (fk_id_player_03)
REFERENCES player(id_player);

ALTER TABLE game
ADD CONSTRAINT fk_id_player_04
FOREIGN KEY (fk_id_player_01)
REFERENCES player(id_player);

ALTER TABLE game
ADD CONSTRAINT fk_id_player_vencedor
FOREIGN KEY (fk_id_player_vencedor)
REFERENCES player(id_player);



