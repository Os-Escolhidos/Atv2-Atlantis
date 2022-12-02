import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";
import Endereco from "../../modelos/endereco";

export default class EditarEndereco extends Processo {
  private cliente: Cliente;

  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
  }
  processar() {
    let rua = this.entrada.receberTexto("Digite o nome da rua?");
    let bairro = this.entrada.receberTexto("Digite o nome do bairro?");
    let cidade = this.entrada.receberTexto("Digite o nome da cidade?");
    let estado = this.entrada.receberTexto("Digite o nome do estado?");
    let pais = this.entrada.receberTexto("Digite o nome do país?");
    let codigoPostal = this.entrada.receberTexto("Digite o código postal?");
    this.cliente.Endereco.Bairro = bairro;
    this.cliente.Endereco.Rua = rua;
    this.cliente.Endereco.Cidade = cidade;
    this.cliente.Endereco.Estado = estado;
    this.cliente.Endereco.Pais = pais;
    this.cliente.Endereco.CodigoPostal = codigoPostal;
    this.cliente.Dependentes.map(
      (clienteEndereco) =>
        (clienteEndereco.Endereco = this.cliente.Endereco as Endereco)
    );
  }
}