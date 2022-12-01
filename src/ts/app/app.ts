import Processo from "../abstracoes/processo";
import Entrada from "../io/entrada";
import Cliente from "../modelos/cliente";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import Principal from "../processos/principal";

console.clear()
console.log(`Bem-vindo(a) ao melhor sistema de gestão de clubes, hotéis e resorts do mundo, o Atlantis`);

let processo: Processo
let execucao: Boolean = true
let entrada = new Entrada()

while (execucao) {
    processo = new Principal()
    processo.processar()
    execucao = processo.Execucao
}
/*     console.log(`Por favor selecione uma opcao: `);
    console.log(`1 - Cadastrar Cliente`);
    console.log(`2 - Cadastrar Dependentes`);
    console.log(`3 - Listagem de Clientes`);
    console.log(`4 - Listagem de Dependentes`);
    console.log(`5 - Mostrar extrato`);
    console.log(`0 - Sair`);

    let opcao = entrada.receberNumero('Qual a opcao desejada? ')



    switch (opcao) {
        case 1:
            let nome = entrada.receberTexto(`Por favor informe seu nome: `)
            let nomeSocial = entrada.receberTexto(`Por favor informe seu nome social: `)
            let dataNasc = entrada.receberData(`Por favor informe sua data de nascimento, no padrão dd/mm/yyyy: `)
            let usuario = new Cliente(nome, nomeSocial, dataNasc)
            let partesDataA = dataNasc.split('/')
            let anoA = new Number(partesDataA[2].valueOf()).valueOf()
            let mesA = new Number(partesDataA[1].valueOf()).valueOf()
            let diaA = new Number(partesDataA[0].valueOf()).valueOf() 
            let dataNascimento = new Date(ano, mes, dia)
            let dataCadast = entrada.receberData(`Por favor informe a data de cadastro, no padrão dd/mm/yyyy: `)
            let partesDataB = dataNasc.split('/')
            let anoB = new Number(partesDataA[2].valueOf()).valueOf()
            let mesB = new Number(partesDataA[1].valueOf()).valueOf()
            let diaB = new Number(partesDataA[0].valueOf()).valueOf() 
            let dataCadastro = new Date(ano, mes, dia)
            let telefone = entrada.receberTexto(`Por favor, informe seu telefone com o DDD, no padrão DDD Numero: `)
            let partesTelefone = telefone.split(" ")
            let telefonesNew = new Telefone(partesTelefone[0], partesTelefone[1])
            usuario.Telefones.push(telefonesNew)
            let endereco = entrada.receberTexto(`Por favor, informe seu endereco: Rua, Bairro, Cidade, Estado, Pais, CodigoPostal `)
            let partesEndereco = endereco.split(",")
            let enderecoNew = new Endereco(partesEndereco[0], partesEndereco[1], partesEndereco[2], partesEndereco[3], partesEndereco[4], partesEndereco[5])
            usuario.Endereco = enderecoNew as Endereco
            break;
    }
} */
