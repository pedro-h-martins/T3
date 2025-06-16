import React from "react";

export default function BotoesAcaoCliente(props) {
    return (
        <div className="sticky-bottom bg-light py-3 mt-auto">
            <div className="container-fluid">
                <div className="d-flex justify-content-center gap-2">
                    <button type="button" 
                        className="btn btn-outline-primary"
                        onClick={(e) => props.seletorView('Editar Pet', e)}>
                        Atualizar/Editar Pet
                    </button>
                    <button type="button" 
                        className="btn btn-outline-success"
                        onClick={(e) => props.seletorView('Produtos e Serviços', e)}>
                        Produtos e Serviços dos Pets
                    </button>                        
                    <button type="button" 
                        className="btn btn-outline-info"
                        onClick={(e) => props.seletorView('Pagamento do Cliente', e)}>
                        Pagamento do Cliente
                    </button>
                </div>
            </div>
        </div>
    );
}
