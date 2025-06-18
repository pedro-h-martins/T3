import React, { useState } from "react";

export default function ListaProduto(props) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productData, setProductData] = useState([
        { nome: 'Produto 1', valor: 29.99 },
        { nome: 'Produto 2', valor: 39.99 },
        { nome: 'Produto 3', valor: 19.99 },
        { nome: 'Produto 4', valor: 49.99 }
    ]);

    const handleProductClick = (index) => {
        setSelectedProduct(selectedProduct === index ? null : index);
    };

    const handleSave = (index) => {
        setSelectedProduct(null);
    };

    const handleDelete = (index) => {
        const updatedProducts = productData.filter((_, i) => i !== index);
        setProductData(updatedProducts);
        setSelectedProduct(null);
    };

    return (
        <div className="container-fluid">
            <section className="mb-5">
                <div className="list-group">
                    {productData.map((produto, index) => (
                        <div key={index} className="list-group-item">
                            <div className="d-flex w-100 justify-content-between align-items-center"
                                onClick={() => handleProductClick(index)}
                                style={{ cursor: 'pointer' }}>
                                <h5 className="mb-1">{produto.nome}</h5>
                                <div className="d-flex align-items-center">
                                    <i className={`bi bi-chevron-${selectedProduct === index ? 'up' : 'down'}`}></i>
                                </div>
                            </div>

                            {selectedProduct === index && (
                                <div className="mt-3">
                                    <form className="mb-3">
                                        <div className="mb-3">
                                            <label className="form-label">Valor</label>
                                            <div className="input-group">
                                                <span className="input-group-text">R$</span>
                                                <input type="number"
                                                    className="form-control"
                                                    step="0.01"
                                                    defaultValue={produto.valor} />
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
                <h3 className="text-center mb-4">Produtos mais consumidos em quantia:</h3>
                <div className="list-group">
                    {['Produto 2', 'Produto 4', 'Produto 3'].map((produto, index) => (
                        <div key={index} className="list-group-item">
                            <div className="d-flex w-100 justify-content-between align-items-center">
                                <h5 className="mb-1">{produto}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
