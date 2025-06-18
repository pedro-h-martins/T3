import React, { useRef } from "react";

export default function FormularioCadastroPet(props) {
    const formRef = useRef(null);
    const tema = props.tema;

    const handleReset = (e) => {
        e.preventDefault();
        if (formRef.current) {
            formRef.current.reset();
        }
    };

    return (
        <div className="container-fluid">
            <form ref={formRef} onSubmit={handleReset}>
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="CPF do Responsável"
                        aria-label="CPF do Responsável"
                        aria-describedby="CPF do Responsável"
                    />
                </div>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Nome do Pet"
                        aria-label="Nome do Pet"
                        aria-describedby="Nome do Pet"
                    />
                </div>
                <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
                    <div className="col-12 col-md-4">
                        <div className="p-2">
                            <label className="form-label">Tipo do Pet</label>
                            <select className="form-select" aria-label="Tipo do Pet">
                                <option value="">Selecione o tipo do pet</option>
                                <option value="cachorro">Cachorro</option>
                                <option value="gato">Gato</option>
                                <option value="passaro">Pássarinho</option>
                                <option value="hamster">Hamster</option>
                                <option value="outro">Outro</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="p-2">
                            <label className="form-label">Gênero do Pet</label>
                            <div className="d-flex gap-4">
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="genero"
                                        id="generoM"
                                        value="M"
                                    />
                                    <label className="form-check-label" htmlFor="generoM">
                                        Masculino
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="genero"
                                        id="generoF"
                                        value="F"
                                    />
                                    <label className="form-check-label" htmlFor="generoF">
                                        Feminino
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Raça do Pet"
                        aria-label="Raça do Pet"
                        aria-describedby="Raça do Pet"
                    />
                </div>

                <div className="input-group mb-3">
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        style={{ background: tema }}
                    >
                        Cadastrar
                    </button>
                </div>
            </form>
        </div>
    );
};
