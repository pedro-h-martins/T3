import { useState } from "react";
import BarraNavegacao from "./barraNavegacao";
import ListaCliente from "./listaCliente";
import FormularioCadastroCliente from "./formularioCadastroCliente";
import FormularioCadastroPet from "./formularioCadastroPet";
import FormularioCadastroProduto from "./formularioCadastroProduto";
import FormularioCadastroServico from "./formularioCadastroServico";
import FormularioEditaPet from "./formularioEditarPet";
import TabelaProdutosServicosMaisConsumidos from "./tabelaProdutosServicosMaisConsumidos";
import TabelaPagamentoCliente from "./tabelaPagamentoCliente";
import ListaProdutos from "./listaProdutos";
import ListaServico from "./listaServicos";
import BotoesCadastro from "./botoesCadastroCliente";
import ListaTopClientes from "./listaTopclientes";
import BotaoTopClientes from "./botaoTopClientes";

export default function Roteador() {
    const [tela, setTela] = useState('Clientes');

    const selecionarView = (novaTela, evento) => {
        evento.preventDefault();
        console.log(novaTela);
        setTela(novaTela);
    };

    const render = () => {
        let barraNavegacao = <BarraNavegacao seletorView={selecionarView} tema="#e3f2fd" botoes={['Clientes', 'Produtos', 'Serviços', 'Cadastros']} />
        if (tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'Editar Pet') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioEditaPet tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Produtos e Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <TabelaProdutosServicosMaisConsumidos tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Pagamento do Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <TabelaPagamentoCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Top Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <BotaoTopClientes seletorView={selecionarView} viewAtual="Top Clientes" />
                    <ListaTopClientes tema="#e3f2fd" seletorView={selecionarView} />
                </>
            )
        } else if (tela === 'Produtos') {
            return (
                <>
                    {barraNavegacao}
                    <ListaProdutos tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Serviços') {
            return (
                <>
                    {barraNavegacao}
                    <ListaServico tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastros' || tela === 'Cadastrar Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <BotoesCadastro tema="#e3f2fd" seletorView={selecionarView} telaAtiva={tela === 'Cadastros' ? 'Cadastrar Cliente' : tela} />
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastrar Pet') {
            return (
                <>
                    {barraNavegacao}
                    <BotoesCadastro tema="#e3f2fd" seletorView={selecionarView} telaAtiva={tela} />
                    <FormularioCadastroPet tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastrar Produto') {
            return (
                <>
                    {barraNavegacao}
                    <BotoesCadastro tema="#e3f2fd" seletorView={selecionarView} telaAtiva={tela} />
                    <FormularioCadastroProduto tema="#e3f2fd" />
                </>
            )
        } else if (tela === 'Cadastrar Serviço') {
            return (
                <>
                    {barraNavegacao}
                    <BotoesCadastro tema="#e3f2fd" seletorView={selecionarView} telaAtiva={tela} />
                    <FormularioCadastroServico tema="#e3f2fd" />
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioCadastroCliente tema="#e3f2fd" />
                </>
            )
        }
    }

    return render();
}