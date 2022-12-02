import Processo from "../abstracoes/processo";
import MenuTipoCadastroTelefone from "../menus/menuTipoCadastroTelefone";
import MenuTelefone from "../menus/menuTipoCadastroTelefone";
import Cliente from "../modelos/cliente";
import Telefone from "../modelos/telefone";

export default class CadastrarTelefones extends Processo {
    private cliente: Cliente
    constructor(cliente: Cliente) {
        super()
        this.cliente = cliente
        this.menu = new MenuTipoCadastroTelefone()
        this.execucao = true
    }

    processar(): void {
        console.log(`Cadastrar Telefone`);
        while (this.execucao) {
            this.menu.mostrar();
            this.opcao = this.entrada.receberNumero("Qual opção desejada?");
            switch (this.opcao) {
            case 1:
                let numerotell = this.entrada.receberTexto("Digite seu número, no formato DDD-Numero:")
                let partesNumero = numerotell.split('-')
                let telefone = new Telefone(partesNumero[0], partesNumero[1])
                this.cliente.Telefones.push(telefone)
                break; 
            case 0:
                this.execucao = false;
                break;
            }
        }
    }
}