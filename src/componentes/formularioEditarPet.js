import { useState, useRef } from "react";

export default function FormularioEditaPet({ tema }) {
    const formRef = useRef(null);

    const handleReset = (e) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current.reset();
        }
    }

    return (
        <div className="container-fluid">
            <form ref={formRef} onSubmit={handleReset}>
                <div className="text-center mb-4">
                    <h4>Digite o CPF do responsável pelo Pet:</h4>
                </div>
                <div className="d-flex flex-column align-items-center">
                    <div className="input-group mb-3 w-90">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="CPF do responsável"
                            aria-label="CPF do responsável"
                        />
                    </div>
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        style={{ background: tema }}
                    >
                        Buscar
                    </button>
                </div>
            </form>
        </div>
    );
}
