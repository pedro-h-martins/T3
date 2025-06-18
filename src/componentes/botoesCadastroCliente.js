import React from "react";

export default function BotoesCadastro(props) {
    return (
        <div className="bg-light py-3 mb-4">
            <div className="container-fluid">
                <div className="d-flex justify-content-center gap-2">
                    <button
                        type="button"
                        className={`btn ${props.telaAtiva === 'Cadastrar Cliente' ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={e => props.seletorView('Cadastrar Cliente', e)}
                    >
                        Cadastrar Cliente
                    </button>
                    <button
                        type="button"
                        className={`btn ${props.telaAtiva === 'Cadastrar Pet' ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={e => props.seletorView('Cadastrar Pet', e)}
                    >
                        Cadastrar Pet
                    </button>
                    <button
                        type="button"
                        className={`btn ${props.telaAtiva === 'Cadastrar Produto' ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={e => props.seletorView('Cadastrar Produto', e)}
                    >
                        Cadastrar Produto
                    </button>
                    <button
                        type="button"
                        className={`btn ${props.telaAtiva === 'Cadastrar Serviço' ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={e => props.seletorView('Cadastrar Serviço', e)}
                    >
                        Cadastrar Serviço
                    </button>
                </div>
            </div>
        </div>
    );
}
