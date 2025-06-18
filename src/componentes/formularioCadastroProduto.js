import React, { useRef } from "react";

export default function FormularioCadastroProduto(props) {
    const formRef = useRef(null);

    const handleReset = (e) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current.reset();
        }
    }

    let tema = props.tema;
    return (
        <div className="container-fluid">
            <form ref={formRef} onSubmit={handleReset}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do produto" aria-label="Nome do produto" aria-describedby="Nome do produto" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">R$</span>
                    <input type="number" step="0.01" min="0" className="form-control" placeholder="Preço do produto" aria-label="Preço do produto" aria-describedby="Preço do produto" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
};
