import React, { useRef } from "react";

export default function FormularioCadastroServico(props) {
    const formRef = useRef();
    const tema = props.tema;

    const handleReset = (e) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <div className="container-fluid">
            <form ref={formRef} onSubmit={handleReset}>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Nome do serviço" aria-label="Nome do serviço" aria-describedby="Nome do serviço" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">R$</span>
                    <input type="number" step="0.01" min="0" className="form-control" placeholder="Preço do serviço" aria-label="Preço do serviço" aria-describedby="Preço do serviço" />
                </div>
                <div className="input-group mb-3">
                    <button className="btn btn-outline-secondary" type="submit" style={{ background: tema }}>Cadastrar</button>
                </div>
            </form>
        </div>
    );
}
