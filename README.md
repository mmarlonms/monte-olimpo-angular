<br />
<img src="https://github.com/mmarlonms/monte-olimpo/blob/master/docs/monte-olimpo-logo.png" width="90" height="90">

# Monte Olimpo - Angular
O Intuito dessa Aplicação é apresentar uma aplicação em Angular que consome as apis de autenticação e de aplicação Monte Olimpo. 

O Foco da aplicação é consumir o Back End e não criar um exemplo de aplicação front-end, tendo em vista isso muitos pontos de interface estão falhos, como por exemplo a validação de campos, que somente é feita em back-end.

![enter image description here](https://raw.githubusercontent.com/mmarlonms/monte-olimpo-angular/master/docs/Gods%20with%20Filter.PNG)

## Pré Requisitos

Para executar o projeto é necessário ter as seguintes apis em execução local. 
* [Monte Olimpo](https://github.com/mmarlonms/monte-olimpo) 
* [Monte Olimpo Auth Server](https://github.com/mmarlonms/monte-olimpo-auth-server)


## Como instalar

- Baixe ou clone este repositório usando `git clone https://github.com/giordanna/projeto-cadastro-pessoa.git`;
- Dentro do diretório, instale as dependências usando `npm install`.

## Como executar

Execute `ng serve` para executar a versão de desenvolvimento. Depois acesse `http://localhost:4200/`.

Para executar o servidores de endpoints de API ( Monte Olimpo e Monte Olimpo Auth Server).

## Como compilar/construir

Execute `ng build` para buildar o projeto. Para buildar a versão de produção adicione a flag `--prod`. Os arquivos serão armazenados do diretório `dist`.

Para Executar basta executar o comando `ng serve`.

## Como Funciona?

Ao iniciar a aplicação o usuário terá acesso a tela de login: 
![enter image description here](https://raw.githubusercontent.com/mmarlonms/monte-olimpo-angular/master/docs/Login.PNG)

Essa tela fará a autenticação serviço através do end point https://localhost:5006/api/v1/auth/. 

As demais telas faram chamadas na API monte olimpo através do end point: 
https://localhost:5001/api/v1/god/

Com o usuário autenticado ele terá acesso ao sistema. 

O Sistema foi construido utilizando Angular Material, por isso o sistema se comporta tanto na web descktop quanto no mobile: 

![enter image description here](https://github.com/mmarlonms/monte-olimpo-angular/blob/master/docs/Mobile.PNG?raw=true)

![enter image description here](https://github.com/mmarlonms/monte-olimpo-angular/blob/master/docs/Menu%20Mobile.PNG?raw=true)

No na parte superior do grid estão o campo para filtro e o botão para criar um novo elemento. 

No cando direito do grid existe um menu para alterar o excluir um registro.

Somente pessoas com o perfil de admin podem excluir. 

A Aplicação conta com os tratamento de erros vindo do back end end. Os erros são categorizados em : 
	* 400 - Core Exception - Exceções de regra de negócio. 
	* 401 - Unathorized Exceotion - Falta de Acesso
	* 420 - Validation Erro - Erro customizado para validações de model. 
	* 500 - Internal Erro - Erro interno da aplicação. 

![enter image description here](https://github.com/mmarlonms/monte-olimpo-angular/blob/master/docs/Gods%20with%20Filter.PNG?raw=true)
![Creation](https://github.com/mmarlonms/monte-olimpo-angular/blob/master/docs/Creation.PNG?raw=true)

![enter image description here](https://github.com/mmarlonms/monte-olimpo-angular/blob/master/docs/Menu-Edit-Delete.PNG?raw=true)

Validação de Model
![enter image description here](https://github.com/mmarlonms/monte-olimpo-angular/blob/master/docs/Validation%20Error.PNG?raw=true)

Validação de Negocio: 
![enter image description here](https://github.com/mmarlonms/monte-olimpo-angular/blob/master/docs/Core%20Exception%20Error.PNG?raw=true)

Validação de Exceção interna:
![enter image description here](https://github.com/mmarlonms/monte-olimpo-angular/blob/master/docs/Exception%20Sample.PNG?raw=true)
