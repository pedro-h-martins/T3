/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import BotoesAcaoCliente from "./botoesAcaoCliente";
import BotaoTopClientes from "./botaoTopClientes";

export default function ListaCliente({ tema, seletorView }) {
    const [selectedClient, setSelectedClient] = useState(null);
    const [clientData, setClientData] = useState([
        { nome: 'Pedro Santos', nomeSocial: '', email: 'pedro.santos@email.com', pet: 'Rex' },
        { nome: 'Maria Oliveira', nomeSocial: '', email: 'maria.oliveira@email.com', pet: 'Luna' },
        { nome: 'Fernanda Lima', nomeSocial: '', email: 'fernanda.lima@email.com', pet: 'Max' },
        { nome: 'Carlos Ferreira', nomeSocial: '', email: 'carlos.ferreira@email.com', pet: 'Bella' },
        { nome: 'Ana Pereira', nomeSocial: '', email: 'ana.pereira@email.com', pet: 'Thor' },
        { nome: 'Lucas Almeida', nomeSocial: '', email: 'lucas.almeida@email.com', pet: 'Nina' },
        { nome: 'João Silva', nomeSocial: '', email: 'joao.silva@email.com', pet: 'Mel' },
        { nome: 'Roberto Souza', nomeSocial: '', email: 'roberto.souza@email.com', pet: 'Bob' },
        { nome: 'Mariana Costa', nomeSocial: '', email: 'mariana.costa@email.com', pet: 'Billy' },
        { nome: 'Juliana Martins', nomeSocial: '', email: 'juliana.martins@email.com', pet: 'Lola' }
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
            <BotaoTopClientes seletorView={seletorView} viewAtual="Clientes" />
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
                                            <option value="Luna">Luna</option>
                                            <option value="Max">Max</option>
                                            <option value="Bella">Bella</option>
                                            <option value="Thor">Thor</option>
                                            <option value="Nina">Nina</option>
                                            <option value="Mel">Mel</option>
                                            <option value="Bob">Bob</option>
                                            <option value="Billy">Billy</option>
                                            <option value="Lola">Lola</option>
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
            <BotoesAcaoCliente seletorView={seletorView} />
        </div>
    );
}