import React, { useState } from "react";

function ListaServico(props) {
    const [selectedService, setSelectedService] = useState(null);
    const [serviceData, setServiceData] = useState([
        { nome: 'Serviço 1', valor: 49.99 },
        { nome: 'Serviço 2', valor: 59.99 },
        { nome: 'Serviço 3', valor: 39.99 },
        { nome: 'Serviço 4', valor: 69.99 }
    ]);

    const handleServiceClick = (index) => {
        setSelectedService(selectedService === index ? null : index);
    };

    const handleSave = (index) => {
        setSelectedService(null);
    };

    const handleDelete = (index) => {
        const updatedServices = serviceData.filter((_, i) => i !== index);
        setServiceData(updatedServices);
        setSelectedService(null);
    };

    return (
        <div className="container-fluid">
            <section className="mb-5">
                <div className="list-group">
                    {serviceData.map((servico, index) => (
                        <div key={index} className="list-group-item">
                            <div className="d-flex w-100 justify-content-between align-items-center"
                                onClick={() => handleServiceClick(index)}
                                style={{ cursor: 'pointer' }}>
                                <h5 className="mb-1">{servico.nome}</h5>
                                <div className="d-flex align-items-center">
                                    <i className={`bi bi-chevron-${selectedService === index ? 'up' : 'down'}`}></i>
                                </div>
                            </div>

                            {selectedService === index && (
                                <div className="mt-3">
                                    <form className="mb-3">
                                        <div className="mb-3">
                                            <label className="form-label">Valor</label>
                                            <div className="input-group">
                                                <span className="input-group-text">R$</span>
                                                <input type="number"
                                                    className="form-control"
                                                    step="0.01"
                                                    defaultValue={servico.valor} />
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <button type="button"
                                                className="btn btn-success"
                                                onClick={() => handleSave(index)}>
                                                Salvar
                                            </button>
                                            <button type="button"
                                                className="btn btn-danger"
                                                onClick={() => handleDelete(index)}>
                                                Excluir
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <section className="mb-5">
                <h3 className="text-center mb-4">Serviços mais consumidos em quantia:</h3>
                <div className="list-group">
                    {['Serviço 2', 'Serviço 4', 'Serviço 3'].map((servico, index) => (
                        <div key={index} className="list-group-item">
                            <div className="d-flex w-100 justify-content-between align-items-center">
                                <h5 className="mb-1">{servico}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ListaServico;
