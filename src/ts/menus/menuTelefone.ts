import Menu from "../interfaces/menu";

export default class MenuTelefone implements Menu {
    mostrar(): void {
        console.clear()
        console.log(`****************************`)
        console.log(`| Deseja cadastrar o telefone `)
        console.log(`----------------------`)
        console.log(`| 1 - Cadastrar Telefone`)
        console.log(`| 2 - Seguir`)
        console.log(`----------------------`)
    }
}