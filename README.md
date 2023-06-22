# ecommerce
Trabalho A3 E-commerce feito por: Jenifer Rafaela, Fernando Barbosa, Gabriel Dias.

Necessário usar o banco de dados para o funcionamento correto do trabalho (Copie todo o sql abaixo e cole no mysql).

CREATE DATABASE sneakersEcommerce;

USE sneakersecommerce;

Para salvar dados do cliente e fazer a validação de email e senha e verificação de email na hora do cadastro.

CREATE TABLE usuarios (
    id int PRIMARY KEY AUTO_INCREMENT NOT NULL,
    Pnome varchar(140) NOT NULL,
    Snome varchar(140),
    email varchar(140) UNIQUE NOT NULL,
    senha varchar(16) NOT NULL,
    dataNasc DATE NOT NULL
);

Salvar a compra feita e poder fazer recomendações quando o cliente entrar com login.

CREATE TABLE sneakersecommerce.itens_pedido (
id INT NOT NULL AUTO_INCREMENT,
marca VARCHAR(140) NOT NULL,
nomeProduto VARCHAR(250) NOT NULL,
pedidoId int(16) NOT NULL,
preco VARCHAR(250) NOT NULL,
quantidade VARCHAR(140) NOT NULL,
tamanhoProduto VARCHAR(140) NOT NULL,
PRIMARY KEY (id)) ENGINE = InnoDB;

Faz a relação do pedido com o cliente.
CREATE TABLE sneakersecommerce.pedido (
ClienteId INT(16) NOT NULL,
Pedido INT(16) NOT NULL AUTO_INCREMENT,
PRIMARY KEY (Pedido)) ENGINE = InnoDB;

Página Inicial (se o cliente clicar em login ele é redirecionado para a página de login):
![PaginaInicial](https://github.com/Jenifer-Rafaela/ecommerce/assets/100365167/530e9fdd-3d45-4640-a922-8351845a0aaa)

Página Nike:
![PaginaNike](https://github.com/Jenifer-Rafaela/ecommerce/assets/100365167/ac992fc1-7fee-448e-a034-6a7b09deaa06)

Página New Balance:
![image](https://github.com/Jenifer-Rafaela/ecommerce/assets/100365167/bdd696ce-6bc4-478e-a5cd-e41d007266ed)

Página Adidas:
![image](https://github.com/Jenifer-Rafaela/ecommerce/assets/100365167/783d190a-e31f-4740-8e07-470e763c90df)

Página Puma:
![image](https://github.com/Jenifer-Rafaela/ecommerce/assets/100365167/553e96ec-2a94-44d3-bedb-6bc185cfef45)

Página Login (Com validação de email e senha):
![image](https://github.com/Jenifer-Rafaela/ecommerce/assets/100365167/994e6e46-5982-4f1c-bf71-4b00c0685419)

Página Cadastro(Verifica se o email já existe no banco de dados):
![image](https://github.com/Jenifer-Rafaela/ecommerce/assets/100365167/5942a7a1-4c42-4d5c-a94e-f5d711658fae)

Página de venda do produto (todos os produtos tem página de venda):
![image](https://github.com/Jenifer-Rafaela/ecommerce/assets/100365167/ad8262cb-4e1e-43c9-9d54-2278beb4e2aa)

Página de carrinho (com opção de aumentar e diminuir a quantidade ou remover o produto, total atualizado conforme a adição de tênis no carrinho):
![image](https://github.com/Jenifer-Rafaela/ecommerce/assets/100365167/72d3e529-3d92-4c91-807c-2b88702a34e0)

Página de finalização da compra:
![image](https://github.com/Jenifer-Rafaela/ecommerce/assets/100365167/5014a678-6fe6-4ee6-8491-3064d234ab0f)

Quando o cliente faz login, é verificado qual a marca que ele mais comprou e assim ele é direcionado para a página da marca. 
Se o cliente clicar em sair ele é redirecionado para o login.




