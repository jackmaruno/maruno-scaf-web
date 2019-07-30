## Criando um novo módulo dentro da pasta funcionalidades e declarando o módulo no modulo principal
ng g module funcionalidades/funcionalidade-exemplo --routing  -m app.module.ts

ng g module funcionalidades/teste --routing  -m app.module.ts
#
## Criando um entity 
ng g entity funcionalidades/funcionalidade-exemplo/Saque --module funcionalidade-exemplo.module.ts --reducers ../../reducers/index.ts --group true -d

ng g entity funcionalidades/teste/Deposito --module teste.module.ts --reducers ../../reducers/index.ts --group true

## Criando os effects
ng g effect funcionalidades/funcionalidade-exemplo/Saque -m funcionalidades/funcionalidade-exemplo/funcionalidade-exemplo.module.ts --group -d

ng g effect funcionalidades/teste/Deposito -m funcionalidades/teste/teste.module.ts --group


## Criando um container de exemplo
ng g container funcionalidades/teste/containers/ContainerDeposito 

## Criando um componente de exemplo
ng g c funcionalidades/teste/components/exemplo-componente


## Criando um service de exemplo
ng g service funcionalidades/teste/deposito-service --flat true -d

teste branch git flow




## ********

## Executando o @ngrx/feature para criação dos arquivos base de actions, reducers e effects.
## Também declarando o redutor criado nos reducers principais


### Executar estes ou:
### Gerando os arquivos de feature agrupados
ng g feature funcionalidades/funcionalidade-exemplo/Saque --reducers ../../reducers/index.ts --group

### Gerando os arquivos de feature não agrupados
ng g feature funcionalidades/funcionalidade-exemplo/Saque --reducers ../../reducers/index.ts
