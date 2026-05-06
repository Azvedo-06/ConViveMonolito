## ConVive — Plataforma Web de Inclusão Social e Eventos Comunitários

# Sobre o Projeto

O ConVive é uma plataforma web desenvolvida com o objetivo de promover inclusão social, participação comunitária, saúde, bem-estar e acesso à informação através da divulgação de eventos, atividades, cursos e ações sociais.

Além das funcionalidades comunitárias, o sistema também passou a incluir suporte para eventos privados com venda de ingressos online, oferecendo uma alternativa mais acessível financeiramente em comparação às grandes plataformas concorrentes.

O projeto busca atender:

Organizadores de eventos comunitários;
Pequenos produtores de eventos;
Instituições sociais;
Usuários que desejam participar de eventos públicos e privados.

O sistema permitirá gerenciamento de eventos, inscrições, controle de participantes e venda de ingressos digitais.

O projeto está alinhado aos Objetivos de Desenvolvimento Sustentável (ODS):

ODS 3 — Saúde e Bem-Estar
ODS 10 — Redução das Desigualdades
ODS 11 — Cidades e Comunidades Sustentáveis

# Objetivo do Sistema

Criar uma plataforma centralizada para gerenciamento e divulgação de ações comunitárias, facilitando a comunicação entre organizadores e participantes.

# Regra de Negócio Principal

Funcionalidade Principal: Criação e Gerenciamento de Eventos Públicos e Privados

## Fluxo da Regra de Negócio

  1 - O organizador realiza login no sistema;
  2 - O organizador cadastra um evento;
  3 - O sistema define se o evento será público ou privado;
  4 - O sistema valida os dados do evento;
  5 - O evento é salvo no banco de dados;
  6 - O evento é disponibilizado na plataforma;
  7 - Usuários podem visualizar detalhes do evento;
  8 - O usuário realiza inscrição ou compra do ingresso;
  9 - O sistema verifica disponibilidade de vagas;
  10 - O pagamento é processado;
  11 - A inscrição é confirmada;
  12 - O sistema gera confirmação digital de participação.

## Arquitetura do Projeto

O backend foi desenvolvido utilizando:

- NestJS
- Sequelize + PostgreSQL
- JWT para autenticação
- Arquitetura modular

Cada funcionalidade possui:
- Controller
- dtos(interfaces) / mappers
- Service
- Model (Sequelize) Entity
