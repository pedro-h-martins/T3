/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import BotoesAcaoCliente from "./botoesAcaoCliente";

function ListaCliente(props) {
    const [selectedClient, setSelectedClient] = useState(null);
    const [clientData, setClientData] = useState([
        { nome: 'Cliente 1', nomeSocial: '', email: '', pet: 'Rex' },
        { nome: 'Cliente 2', nomeSocial: '', email: '', pet: 'Rex' },
        { nome: 'Cliente 3', nomeSocial: '', email: '', pet: 'Rex' },
        { nome: 'Cliente 4', nomeSocial: '', email: '', pet: 'Rex' },
        { nome: 'Cliente 5', nomeSocial: '', email: '', pet: 'Rex' },
        { nome: 'Cliente 6', nomeSocial: '', email: '', pet: 'Rex' },
    ]);

    const handleClientClick = (index) => {
        setSelectedClient(selectedClient === index ? null : index);
    };

    const handleSave = (index) => {
        setSelectedClient(null);
    };

    const handleDelete = (index) => {
        setSelectedClient(null);
    };

    const handleOrder = (index) => {
        setSelectedClient(null);
    };

    return (
        <div className="container-fluid d-flex flex-column min-vh-100">
            <div className="list-group flex-grow-1 mb-5">
                {clientData.map((cliente, index) => (
                    <div key={index} className="list-group-item">
                        <div className="d-flex w-100 justify-content-between align-items-center"
                            onClick={() => handleClientClick(index)}
                            style={{ cursor: 'pointer' }}>
                            <h5 className="mb-1">{cliente.nome}</h5>
                            <i className={`bi bi-chevron-${selectedClient === index ? 'up' : 'down'}`}></i>
                        </div>

                        {selectedClient === index && (
                            <div className="mt-3">
                                <form className="mb-3">
                                    <div className="mb-3">
                                        <label className="form-label">Nome</label>
                                        <input type="text" className="form-control" defaultValue={cliente.nome} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Nome Social</label>
                                        <input type="text" className="form-control" defaultValue={cliente.nomeSocial} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" defaultValue={cliente.email} />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Pet</label>
                                        <select className="form-select" defaultValue={cliente.pet}>
                                            <option value="Rex">Rex</option>
                                            <option value="Max">Max</option>
                                            <option value="Luna">Luna</option>
                                        </select>
                                    </div>

                                    <div className="mb-4">
                                        <h6 className="mb-3">Solicitar Produtos e Serviços</h6>
                                        <div className="mb-3">
                                            <label className="form-label">Produto</label>
                                            <select className="form-select mb-2">
                                                <option value="">Selecione um produto</option>
                                                <option value="Ração">Ração</option>
                                                <option value="Brinquedo">Brinquedo</option>
                                                <option value="Coleira">Coleira</option>
                                            </select>
                                            <div className="input-group">
                                                <span className="input-group-text">Quantidade</span>
                                                <input type="number" className="form-control" min="1" defaultValue="1" />
                                            </div>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label">Serviço</label>
                                            <select className="form-select mb-2">
                                                <option value="">Selecione um serviço</option>
                                                <option value="Banho">Banho</option>
                                                <option value="Tosa">Tosa</option>
                                                <option value="Consulta">Consulta</option>
                                            </select>
                                            <div className="input-group">
                                                <span className="input-group-text">Quantidade</span>
                                                <input type="number" className="form-control" min="1" defaultValue="1" />
                                            </div>
                                        </div>

                                        <button type="button" className="btn btn-primary" onClick={() => handleOrder(index)}>
                                            Solicitar Pedido
                                        </button>
                                    </div>

                                    <div className="d-flex gap-2">
                                        <button type="button" className="btn btn-success" onClick={() => handleSave(index)}>
                                            Salvar Modificações
                                        </button>
                                        <button type="button" className="btn btn-danger" onClick={() => handleDelete(index)}>
                                            Excluir Cliente
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <BotoesAcaoCliente seletorView={props.seletorView} />
        </div>
    );
}

export default ListaCliente;
