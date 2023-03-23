 
# Montando um Site Netflix Fullstack com React, NextJS, TailwindCSS e Prisma

![netflix_s](https://user-images.githubusercontent.com/88254614/226807565-1379a94f-ead4-4702-a79a-e381bfab612f.png)

![Screenshot_1](https://user-images.githubusercontent.com/88254614/227362334-165c91d1-f917-40dc-8b69-2d1c8f73d83a.png)


## Foi Usado:

- Ambiente, Typescript, Configuração do NextJS
- MongoDB & Prisma connectar, criação de banco de dados
- Autenticação com NextAuth, Google & Github Login
- Capacidade de resposta total em todas as páginas
- Autenticação baseada em cookies
- Criação de API e Controllers
- Efeitos e animações orientados a detalhes usando TailwindCSS
- Reagir à busca de dados SWR
- Gerenciamento de estado Zustand

## Setup .env arquivo

```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```
 
## Iniciar o app

```shell or bash..
npm run dev
```

## Comandos 

Comando npm `npm run [comando]`

| comando         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Inicia uma instância de desenvolvimento  |

Como gosto muito de assistir filmes resolvir criar um site igual Netflix em ingles para dar aquela treinada no ingles
Proxima att vou colocar um sistema de pt - ing

## Netflix 1.0 :)
Foi colocado um sistema de login & register 
Implementei sistema de login Google Client ID & GitClient ID
segue>
![video-to-gif](https://user-images.githubusercontent.com/88254614/226805657-dbad4c8a-bbce-40aa-a2b2-1d62acc98c9d.gif)


## Atulização 2.0 

Adicionei sistema de como usuario tentar clicar em logar vai aparecer um erro impedindo dele nao acessar area de usuario
segue><br>
![1](https://user-images.githubusercontent.com/88254614/227362260-dd78c210-e516-4206-9875-04aed3a27748.gif)

Foi adicionado area de usuario/char igual a Netflix em arquivo profiles.tsx 
segue><br>
![2](https://user-images.githubusercontent.com/88254614/227362289-32f0ebdb-2e1a-441f-b284-dd8ec266b242.gif)

Depois integrei Mongodb ao site salvar dados.
segue><br>
![3](https://user-images.githubusercontent.com/88254614/227362300-74d773b0-e763-4567-8539-152d527c5565.gif)
