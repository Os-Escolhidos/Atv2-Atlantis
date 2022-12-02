import Processo from "../../abstracoes/processo";
import Cliente from "../../modelos/cliente";

export default class EditarDocumento extends Processo {
  private cliente: Cliente;
  constructor(cliente: Cliente) {
    super();
    this.cliente = cliente;
    this.execucao = true;
  }
  processar() {
    console.clear();
    console.log(`Lista dos Documentos`);
    this.cliente.Documentos.forEach((i) => {
      console.log(`------------------------------`);
      console.log(`|  Tipo do documento: ${i.Tipo}`);
      console.log(`|  Número do documento: ${i.Numero}`);
      console.log(`------------------------------`);
    });
    let documento = this.entrada.receberTexto("Digite o número do documento: ");
    this.cliente.Documentos.filter((doc) => doc.Numero == documento).forEach(
      (novo) => {
        let novoNumero = this.entrada.receberTexto(
          "Nùmero atualizado do documento: "
        );
        let novaData = this.entrada.receberData("Nova data de expedição do documento: ");
        novo.Numero = novoNumero;
        novo.DataExpedicao = novaData;
      }
    );
  }
}