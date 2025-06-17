/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function ListaServico(props) {
    let tema = props.tema
    return (
        <div className="container-fluid d-flex flex-column" style={{ minHeight: "100vh" }}>
            <div className="list-group mb-3">
                <a href="#" className="list-group-item list-group-item-action">Serviço 1</a>
                <a href="#" className="list-group-item list-group-item-action">Serviço 2</a>
                <a href="#" className="list-group-item list-group-item-action">Serviço 3</a>
                <a href="#" className="list-group-item list-group-item-action" style={{ backgroundColor: tema }}>Serviço 4</a>
            </div>
            
            <div className="mt-3 mb-3">
                <h3 className="text-center mb-3">Serviços mais consumidos:</h3>
                <div className="list-group">
                    <a href="#" className="list-group-item list-group-item-action">Serviço 2</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviço 4</a>
                    <a href="#" className="list-group-item list-group-item-action">Serviço 3</a>
                </div>
            </div>
        </div>
    );
}
