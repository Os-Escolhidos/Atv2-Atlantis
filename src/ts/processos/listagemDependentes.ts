import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressaorCliente from "../impressores/impressorCliente";
import ImpressaorDepedente from "../impressores/impressorDependente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private dependentes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.dependentes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let RGTitular = this.entrada.receberTexto("Digite o RG do Titular: ")

        console.log('Iniciando a listagem dos dependentes...')
        this.dependentes.forEach(dependentes => {
            dependentes.Documentos.filter(x => {
                if (x.Numero === RGTitular) {
                  this.impressor = new ImpressaorDepedente(dependentes)
                  console.log(this.impressor.imprimir())
              }
            })
        })
        
    }
}