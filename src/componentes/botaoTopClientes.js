import React from "react";

export default function BotaoTopClientes({ seletorView, viewAtual }) {
    return (
        <div className="d-flex justify-content-start ms-3 my-4">
            {viewAtual === 'Top Clientes' ? (
                <button
                    type="button"
                    className="btn btn-secondary d-flex align-items-center"
                    onClick={(e) => seletorView('Clientes', e)}
                >
                    <i className="bi bi-arrow-left me-2"></i>
                    <span>Voltar à lista geral</span>
                </button>
            ) : (
                <button
                    type="button"
                    className="btn btn-primary d-flex align-items-center"
                    onClick={(e) => seletorView('Top Clientes', e)}
                >
                    <i className="bi bi-trophy me-2"></i>
                    <span>Ver Top Clientes</span>
                </button>
            )}
        </div>
    )
}
