
# Modal


## Crie seu componente que será exibido dentro do modal

* Exemplo do arquivo .html : modal-exemplo.component.html

```html
<!-- o sc-action bar é obrigatório para uma exibição correta do actionbar -->
<sc-actionbar> 
  <h1> Teste </h1>
  <seu-component></seu-component>
</sc-actionbar>
```

* Exemplo do arquivo .ts: actionbar-exemplo.component.ts

```javascript
export class ActionBarExemploComponent {

  constructor(
    public actionBarRef: ActionBarRef, // Passar parametros ao fechar no actionBarRef.close({nome: 'test'})
    @Inject(ACTIONBAR_DATA) public data: any) { }
    
}
```
* Declare o componente no entryComponents do module da funcionalidade

@NgModule({
  ...
  entryComponents: [ActionBarExemploComponent],
  ...
})
export class AppModule { }

## Faça a chamada do action bar a partir da sua funcionalidade

* No construtor da sua funcionalidade, faça o import do ActionBarService

```javascript
constructor(private actionBarService: ActionBarService) { }
```

* Execute a opção open do action bar a partir do seguinte comando:


```javascript
 const modalRef: ActionBarRef = this.actionBarService.open(ModalAdicionarComponent, config);
```

* Quando existe a necessidade de executar algum passo a partir do fechamento do action bar ou se
espera um retorno, executar o método a seguir:

```javascript
   modalRef.afterClosed().subscribe(result => {
     ...
   });
```

