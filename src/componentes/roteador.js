/* eslint-disable no-unused-vars */
import { useState } from "react";
import BarraNavegacao from "./barraNavegacao"
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioEditarPet from "./formularioEditarPet";
import ProdutosServicos from "./tabelaProdutosServicosMaisConsumidos";
import PagamentoCliente from "./tabelaPagamentoCliente";
import ListaProduto from "./listaProdutos";
import ListaServico from "./listaServicos";
import BotoesCadastro from "./botoesCadastroCliente";

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
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
                    <ListaCliente tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'Editar Pet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
                    <FormularioEditarPet tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Produtos e Serviços') {
            return (
                <>  <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
                    <ProdutosServicos tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Pagamento do Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
                    <PagamentoCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Produtos') {
            return (
                <>  <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
                    <ListaProduto tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Serviços') {
            return (
                <>  <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastros') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
                    <div className="container">
                        <h3 className="text-center mb-4">Área de Cadastros</h3>
                        <BotoesCadastro seletorView={selecionarView} tema="#e3f2fd" telaAtiva={tela} />
                    </div>
                </>
            )
        } else if (tela === 'Cadastrar Cliente') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
                    <BotoesCadastro seletorView={selecionarView} tema="#e3f2fd" telaAtiva={tela} />
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastrar Pet') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
                    <BotoesCadastro seletorView={selecionarView} tema="#e3f2fd" telaAtiva={tela} />
                    <FormularioCadastroPet tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastrar Produto') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
                    <BotoesCadastro seletorView={selecionarView} tema="#e3f2fd" telaAtiva={tela} />
                    <FormularioCadastroProduto tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastrar Serviço') {
            return (
                <>
                    <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
                    <BotoesCadastro seletorView={selecionarView} tema="#e3f2fd" telaAtiva={tela} />
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        } else {
            return (
                <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
            )
        }
    }

    return (
        construirView()
    )
}