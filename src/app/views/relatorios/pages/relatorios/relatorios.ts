import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
 
import { TemplatePortal } from '@angular/cdk/portal';
import { RelatorioService } from '../../../../services/relatorio.service';
import { SidebarContainerService } from '../../../../components/sidebar/sidebar-container.service';
import { Constantes } from '../../../../util/constantes';

/***********************************
*  Tela Contatos
*  @Aplicativo SCAF WEB
*  @Autor willian.maruno
***********************************/
@Component({
  selector: 'app-relatorios', 
  templateUrl: './relatorios.html',
  styleUrls: ['./relatorios.scss']
})
export class RelatoriosPage implements OnInit{ 

  public relatorio:any = {};
  public meses:any[];
  public filtros:any[] = [];
  public despesas:any[] = [];
  public receitas:any[] = [];
  


  @ViewChild('filtrosSidebar', {static:true}) filtrosSidebar: TemplateRef<any>; 
  /***************************************************************************************************
   *            Construtor de pobre
   ***************************************************************************************************/
  constructor( public relatorioService:RelatorioService
             , private sidebarService: SidebarContainerService ) {
  }

  /***************************************************************************************************
   * inicia os componentes
   ***************************************************************************************************/
  ngOnInit() {
    this.addToList(this.filtros, 1, 'Tipos');
    this.addToList(this.filtros, 2, 'Etiquetas');
    this.addToList(this.filtros, 3, 'Meses');
    this.addToList(this.filtros, 4, 'Categorias');
    this.pesquisar(); 
    this.sidebarService.open(new TemplatePortal(this.filtrosSidebar, undefined, {})); 
  }
 

  /***************************************************************************************************
   *  realiza a pesquisa 
   ***************************************************************************************************/
  public pesquisar() {
    this.meses = [];
    this.relatorioService.findRelatorio().subscribe(
      (response:any) =>{
        let tags = [{codigo:0, nome:"Sem Etiqueta"}];
        response.tags = tags.concat(response.tags);
        this.relatorio = response; 
        for(let competencia of this.relatorio.competencias) { 
          this.meses.push({nome:competencia, check: true});
        }
        this.limpar();
      }
    );
  } 


  /***************************************************************************************************
   * atualiza
   ***************************************************************************************************/
  public set(o:any){   
    o.check = !o.check; 
    this.atualizarListas();
  }

  /***************************************************************************************************
   *  limpa
   ***************************************************************************************************/
  public limpar(){
    this.setFiltros(true);
    this.atualizarListas();
  }

  public setFiltros(check:boolean){
    for(let mes of this.meses) { 
      mes.check = check;
    }
    for(let tag of this.relatorio.tags) { 
      tag.check = check;
    }
    for(let tipo of this.relatorio.tipos) { 
      tipo.check = check;
    }
    for(let grupo of this.relatorio.grupos) { 
      grupo.check = check;
      for(let categoria of grupo.listCategorias) { 
        categoria.check = check;
      }
    } 
  }
  /***************************************************************************************************
   *  
   ***************************************************************************************************/
 
  private selecionarTodos(check:boolean, lista:any[]) {    
    for(let o of lista) {   
      o.check = check;
    }
  } 
  
  public selecionarFiltro (filtro:any) {   
    filtro.check = !filtro.check;

    if(filtro.codigo == 1){ 
      this.selecionarTodos(filtro.check, this.relatorio.tipos);
    }else if(filtro.codigo == 2){ 
      this.selecionarTodos(filtro.check, this.relatorio.tags);
    }else if(filtro.codigo == 3){ 
      this.selecionarTodos(filtro.check, this.meses);
    }else if(filtro.codigo == 4){ 
      this.selecionarTodos(filtro.check, this.relatorio.grupos);
      for(let grupo of this.relatorio.grupos) {    
        this.selecionarTodos(filtro.check, grupo.listCategorias); 
      } 
    } 
    this.atualizarListas();
  }

   
	private addToList(lista:any, codigo:number, nome:string){
		var set = false;  
		for(let o of lista) {   
			if(o.codigo == codigo){
				set = true; 
			}
		}
		if(!set){
			lista.push({codigo:codigo, nome:nome, check: true, valor: 0.00, valorReceita: 0.00});
		} 
  }
  

  /***************************************************************************************************
   *  
   ***************************************************************************************************/
   
  public atualizarListas() { 
    this.despesas = this.getLista(false);
    this.receitas = this.getLista(true);
  }

  public getLista(receitas: boolean): any[] {    
    let lista = new Array();

    for(let competencia of this.relatorio.competencias) { 
      let mes = this.getNodeCompetencia(competencia);
  
      for(let grupoVO of this.relatorio.grupos) {    
        var grupo = this.getNodeGrupo(grupoVO);
        if((!receitas && grupoVO.codigo != Constantes.GRUPO_RECEITAS) || (receitas && grupoVO.codigo == Constantes.GRUPO_RECEITAS)){
          for(let categoriaVO of grupoVO.listCategorias) {    
            var categoria = this.getNodeCategoria(grupoVO, categoriaVO); 
  
            for(let lancamentoVO of this.relatorio.lista) {    
              if(lancamentoVO.anoMes == competencia && lancamentoVO.codCategoria == categoriaVO.codigo){
                if(this.validar(lancamentoVO)){
                  var lancamento = this.getNodeLancamento(lancamentoVO); 
                  this.somarNode(categoria, lancamento);
                  categoria.children.push(lancamento);
                }
              }
            }
            if(categoria.children.length > 0){
              this.somarNode(grupo, categoria);
              grupo.children.push(categoria);
            }
          }
  
          if(grupo.children.length > 0){
            this.somarNode(mes, grupo);
            mes.children.push(grupo);
          } 
        }
      }

      if(mes.children.length > 0){ 
        lista.push(mes);
      }
    }
    return lista;
  } 

  private validar(lancamento:any) {    
      var set = true;
      for(let mes of this.meses) { 
        if(mes.nome == lancamento.anoMes && !mes.check){
          set = false;
        } 
      }
    
      for(let tipo of this.relatorio.tipos) {   
        if(tipo.codigo == lancamento.codTipo && !tipo.check){ 
          set = false; 
        } 
      }
 
      if(lancamento.tags && lancamento.tags.split(';').length > 0){
        let countAll = 0, countUncheck = 0;
        for(let tag of this.relatorio.tags){
          for(let tagLanc of lancamento.tags.split(';')){
            if(tagLanc == tag.nome){
              countAll++; 
              if(!tag.check){
                countUncheck++;
              }
            }
          }
        }
        if(countUncheck > 0 && countUncheck == countAll){ 
          set = false; 
        }
      }else if(!this.relatorio.tags[0].check){ 
        set = false; 
      }  
    
      for(let grupo of this.relatorio.grupos) {    
        for(let categoria of grupo.listCategorias) {  
          if(categoria.codigo == lancamento.codCategoria && !categoria.check){ 
            set = false; 
          } 
        }
      }     
    
      return set;
    }
  
	private somarNode(o1:any, o2:any){ 
		o1.data.valorPrevisto = o1.data.valorPrevisto + o2.data.valorPrevisto;
		o1.data.valorLancamento = o1.data.valorLancamento + o2.data.valorLancamento; 
  }
  
  
	private getNodeCompetencia(competencia:string):any{ 
    let o = {nome: `Competência - ${competencia}`, valorPrevisto: 0.0, valorLancamento: 0.0};
    return {data:o, children:[]}; 
  }
  
	private getNodeGrupo(grupo:any):any{ 
    let o = {nome: `Grupo - ${grupo.nome}`, codGrupo: grupo.codigo, nomeGrupo: grupo.nome, valorPrevisto: 0.0, valorLancamento: 0.0};
    return {data:o, children:[]}; 
  }
  
	private getNodeCategoria(grupo:any, categoria:any):any{ 
    let o = {nome: `Categoria - ${categoria.nome}`, codGrupo: grupo.codigo, nomeGrupo: grupo.nome, codCategoria: categoria.codigo, nomeCategoria: categoria.nome, valorPrevisto: 0.0, valorLancamento: 0.0};
    return {data:o, children:[]}; 
  }
		 
	private getNodeLancamento(o:any):any{ 
    o.nome = `Lançamento - ${o.codigo}`;
    o.nomeTipo = this.getNomeTipo(o.codTipo);
    return {data:o, children:[]}; 
  }

	private getNomeTipo(codigo){
    for(let tipo of this.relatorio.tipos) {   
      if(tipo.codigo == codigo){ 
        return tipo.nome;
      } 
    }
    return '';
	}
}
