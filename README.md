# :iphone: Sobre o GamePlay

O Aplicativo GamePlay fez parte do Next Level Week da Rocketseat, sendo a trilha React Native. Sua ideia é de auxiliar na organização de jogatinas, utilizando
sua conta do Discord, para o agendamento.


## :hammer_and_wrench: Tecnologias

- [Figma](http://www.figma.com/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)

## :running_man: Como rodar

Antes de mais nada, é necessário ter o expo e o node instalados na sua máquina. Você pode adquirí-los aqui, caso não tenha:
- [Node](https://nodejs.org/en/)
- [Expo](https://expo.io/)

Pode ser que seja necessário baixar o Typescript também, [clique aqui](https://www.typescriptlang.org/download) para isso.

É preciso cadastrar o aplicativo no [Discord Developers](https://discord.com/developers/applications) para ter acesso ao serviço de autenticação do mesmo.

Feita a clonagem, o GamePlay terá um arquivo chamado _.env.example_. Você precisa apagar o _.example_ e por suas rotas adquiridas no Discord!

 ```cl
REDIRECT_URI= 
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
```
Instale as dependências do projeto

```cl
$ npm install
ou
$ yarn add
```
E rode usando o Expo, por meio do seguinte comando:

```cl
$ expo start
```
 E pronto! Só se divertir.
 
 

