import React from "react";

export default function TabelaPagamentoCliente() {
    return (
        <main className="container-fluid">
            <section className="payment-section mb-5">
                <header>
                    <h3 className="text-center mb-4">Pagamento deste Cliente:</h3>
                </header>
                <h4 className="mb-3">Produtos</h4>
                <div className="card mb-4">
                    <div className="card-body p-0">
                        <div className="bg-info bg-opacity-10 rounded p-3 mb-3 fw-semibold d-none d-md-flex">
                            <div className="col-md-3">Nome do Produto</div>
                            <div className="col-md-3">Preço Unitário</div>
                            <div className="col-md-3">Quantidade</div>
                            <div className="col-md-3">Pet</div>
                        </div>
                        <div className="px-3">
                            <div className="row py-2 hover-effect">
                                <div className="col-12 col-md-3 mb-2 mb-md-0">
                                    <span className="d-md-none fw-bold">Nome do Produto: </span>
                                    Ração Premium
                                </div>
                                <div className="col-12 col-md-3 mb-2 mb-md-0">
                                    <span className="d-md-none fw-bold">Preço Unitário: </span>
                                    R$ 120,00
                                </div>
                                <div className="col-12 col-md-3 mb-2 mb-md-0">
                                    <span className="d-md-none fw-bold">Quantidade: </span>
                                    2
                                </div>
                                <div className="col-12 col-md-3">
                                    <span className="d-md-none fw-bold">Pet: </span>
                                    Rex
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h4 className="mb-3">Serviços</h4>
                <div className="card">
                    <div className="card-body p-0">
                        <div className="bg-info bg-opacity-10 rounded p-3 mb-3 fw-semibold d-none d-md-flex">
                            <div className="col-md-3">Nome do Serviço</div>
                            <div className="col-md-3">Preço Unitário</div>
                            <div className="col-md-3">Quantidade</div>
                            <div className="col-md-3">Pet</div>
                        </div>
                        <div className="px-3">
                            <div className="row py-2 hover-effect">
                                <div className="col-12 col-md-3 mb-2 mb-md-0">
                                    <span className="d-md-none fw-bold">Nome do Serviço: </span>
                                    Banho e Tosa
                                </div>
                                <div className="col-12 col-md-3 mb-2 mb-md-0">
                                    <span className="d-md-none fw-bold">Preço Unitário: </span>
                                    R$ 80,00
                                </div>
                                <div className="col-12 col-md-3 mb-2 mb-md-0">
                                    <span className="d-md-none fw-bold">Quantidade: </span>
                                    1
                                </div>
                                <div className="col-12 col-md-3">
                                    <span className="d-md-none fw-bold">Pet: </span>
                                    Rex
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="total-section">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-3 fw-bold">
                                Total a Pagar:
                            </div>
                            <div className="col-md-9 text-start fw-bold">
                                R$ 320,00
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
