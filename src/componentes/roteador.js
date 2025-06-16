/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioEditarPet from "./formularioEditarPet";
import ProdutosServicos from "./tabelaProdutosServicosMaisConsumidos";
import PagamentoCliente from "./tabelaPagamentoCliente";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes')
    const selecionarView = (valor, e) => {
        e.preventDefault()
        setTela(valor)
    }

    const construirView = () => {
        if (tela === 'Clientes') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros']} />
                    <ListaCliente tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'Cadastros') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros']} />
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Editar Pet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros']} />
                    <FormularioEditarPet tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Produtos e Serviços') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros']} />
                    <ProdutosServicos tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Pagamento do Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros']} />
                    <PagamentoCliente tema="#e3f2fd" />
                </>
            )
        } else {
            return (
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Cadastros']} />
            )
        }
    }

    return (
        construirView()
    )
}