import Processo from "../abstracoes/processo";
import Armazem from "../dominio/armazem";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import CadastrarDocumentosCliente from "./cadastrarDocumentosCliente";
import CadastrarTelefones from "./cadastroTelefones";

export default class CadastroClienteDependente extends Processo { 
    private cliente: Cliente[]

    constructor(){
        super();
        this.cliente = Armazem.InstanciaUnica.Clientes;
        this.execucao = true
    }
    
    processar(): void {
        console.log('Iniciando o cadastro de um novo dependente...')

        let entrada = this.entrada.receberTexto("Digite o RG do Titular: ")
        this.cliente.forEach(i => {
            i.Documentos.filter(x => {
                if(x.Numero === entrada){
                    let nome = this.entrada.receberTexto('Qual o nome do novo dependente ?')
                    let nomeSocial = this.entrada.receberTexto('Qual o nome social do novo dependente ?')
                    let dataNascimento = this.entrada.receberData('Qual a data de nascimento ?')
                    let dependente = new Cliente(nome, nomeSocial, dataNascimento)

        this.processo = new CadastrarDocumentosCliente(dependente)
        this.processo.processar()

        this.processo = new CadastrarTelefones(dependente)
        this.processo.processar

        dependente.Endereco = i.Endereco.clonar() as Endereco;

        i.Dependentes.push(dependente);

        let armazem = Armazem.InstanciaUnica
        armazem.Clientes.push(dependente)

        console.log('Finalizando o cadastro do dependente...')
            }
    })})
}}   