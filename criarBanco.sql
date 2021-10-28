create database conjunto_palavras;
use conjunto_palavras;

create table palavras(
id int not null auto_increment,
palavra varchar(20) not null,
dificuldade int not null,
primary key(id));

create table dicas(
id int not null auto_increment,
dica varchar(80) not null,
pal_id int not null,
primary key (id),
foreign key (pal_id)
references palavras (id));

insert into palavras(palavra, dificuldade) values("gesso", 1);
insert into palavras(palavra, dificuldade) values("leite", 1);
insert into palavras(palavra, dificuldade) values("prata", 1);
insert into palavras(palavra, dificuldade) values("carro", 1);
insert into palavras(palavra, dificuldade) values("nove", 1);

insert into dicas(dica, pal_id)  values("Auxiliar no tratamento de algumas fraturas", 1);
insert into dicas(dica, pal_id) values("Substância comumente branca", 1);
insert into dicas(dica, pal_id) values("Encontrado em praticamente todo o mundo", 1);

insert into dicas(dica, pal_id) values("Líquido de origem animal", 2);
insert into dicas(dica, pal_id) values("Possue coloração branca", 2);
insert into dicas(dica, pal_id) values("Fonte de cálcio", 2);

insert into dicas(dica, pal_id) values("Um tipo de metal", 3);
insert into dicas(dica, pal_id) values("Muito utilizado em joias", 3);
insert into dicas(dica, pal_id) values("Possue coloração prateada", 3);

insert into dicas(dica, pal_id) values("Possui um motor", 4);
insert into dicas(dica, pal_id) values("Precisa de um motorista", 4);
insert into dicas(dica, pal_id) values("possui quatro rodas", 4);

insert into dicas(dica, pal_id) values("É um número", 5);
insert into dicas(dica, pal_id) values("É composto de um algorismo", 5);
insert into dicas(dica, pal_id) values("É divisível por 3", 5);


insert into palavras(palavra, dificuldade) values("sangue", 2);
insert into palavras(palavra, dificuldade) values("estrada", 2);
insert into palavras(palavra, dificuldade) values("raquete", 2);
insert into palavras(palavra, dificuldade) values("cigarra", 2);
insert into palavras(palavra, dificuldade) values("camelo", 2);

insert into dicas(dica, pal_id) values("Está presente no corpo humano", 6);
insert into dicas(dica, pal_id) values("Possui a cor vermelha", 6);
insert into dicas(dica, pal_id) values("Sua forma normal é líquida", 6);

insert into dicas(dica, pal_id) values("Possibilita a circulação de pessoas", 7);
insert into dicas(dica, pal_id) values("Muitas vezes possibilita a circulação de automóveis", 7);
insert into dicas(dica, pal_id) values("Segundo o Detran é uma via rural não pavimentada", 7);

insert into dicas(dica, pal_id) values("Possui um cabo, um aro oval e uma rede", 8);
insert into dicas(dica, pal_id) values("Usada em esportes", 8);
insert into dicas(dica, pal_id) values("Usada, entre outras coisas, para rebater bolas", 8);

insert into dicas(dica, pal_id) values("Possui 6 patas", 9);
insert into dicas(dica, pal_id) values("É conhecida por fazer um alto barulho", 9);
insert into dicas(dica, pal_id) values("Possuem exoesqueleto", 9);

insert into dicas(dica, pal_id) values("É um mamífero", 10);
insert into dicas(dica, pal_id) values("É um quadrupede", 10);
insert into dicas(dica, pal_id) values("Muito conhecido por viver no deserto", 10);

insert into palavras(palavra, dificuldade) values("anatomia", 3);
insert into palavras(palavra, dificuldade) values("locomotiva", 3);
insert into palavras(palavra, dificuldade) values("voltímetro", 3);
insert into palavras(palavra, dificuldade) values("Submarino", 3);
insert into palavras(palavra, dificuldade) values("Caridade", 3);

insert into dicas(dica, pal_id) values("É uma ciência", 11);
insert into dicas(dica, pal_id) values("Estuda a organização estrutural dos seres vivos", 11);
insert into dicas(dica, pal_id) values("É estudada no curso de medicina", 11);

insert into dicas(dica, pal_id) values("Puxa vagões de carga ou de pessoas", 12);
insert into dicas(dica, pal_id) values("Necessita de trilhos para se locomover", 12);
insert into dicas(dica, pal_id) values("Possui um custo benefício melhor que os caminhões", 12);

insert into dicas(dica, pal_id) values("Aparelho de medição", 13);
insert into dicas(dica, pal_id) values("Utilizado na área de elétrica", 13);
insert into dicas(dica, pal_id) values("Muitas vezes pode ser substituído por um multímetro", 13);

insert into dicas(dica, pal_id) values("Nome dado a um grupo de veículos", 14);
insert into dicas(dica, pal_id) values("É visto (ou não visto) no mar", 14);
insert into dicas(dica, pal_id) values("Quando está em atividade pode-se encontrá-lo utilizando radar,", 14);

insert into dicas(dica, pal_id) values("É um mamífero", 15);
insert into dicas(dica, pal_id) values("É um mamífero", 15);
insert into dicas(dica, pal_id) values("É um mamífero", 15);

select * from palavras;

