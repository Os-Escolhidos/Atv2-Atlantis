import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import ImpressorDepedente from "../impressores/impressorDependente";
import Impressor from "../interfaces/impressor";
import Cliente from "../modelos/cliente";

export default class ListagemDependentes extends Processo {
    private clientes: Cliente[]
    private impressor!: Impressor
    constructor() {
        super()
        this.clientes = Armazem.InstanciaUnica.Clientes
    }
    processar(): void {
        console.clear()
        let RGTitular = this.entrada.receberTexto("Digite o RG do Titular: ")

        /* console.log('Iniciando a listagem dos dependentes...')
        this.clientes.map((clienteMap) => {
            clienteMap.Documentos.filter((docFilter) => {
                if (docFilter.Numero === RGTitular) {
                    clienteMap.Dependentes.forEach((dependentes) => {
                        this.impressor = new ImpressorDepedente(dependentes)
                        console.log(this.impressor.imprimir())
                    })
                }
            })
        }) */
       this.clientes.forEach(cliente => {
            cliente.Documentos.filter(x => {
                if (x.Numero === RGTitular) {
                  cliente.Dependentes.forEach (dep => {
                    this.impressor = new ImpressorDepedente(dep)
                    console.log(this.impressor.imprimir())
                  })
                }
            })
        })
    }
}