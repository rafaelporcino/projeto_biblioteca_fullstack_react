import React from "react";

//{Emprestimo} -> props para Emprestimo = const Emprestimo = props.Emprestimo
export default function CardEmprestimo({emprestimo}) {
    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
				<div className="w3-card">
					<div className="w3-container w3-center">                       
                    <h5>{emprestimo.id}</h5>                    
                    <h5>{emprestimo.id_usuario}</h5>                    
                    <h5>{emprestimo.username}</h5>
                    <h5>{emprestimo.titulo}</h5>                    
                    <h5>{emprestimo.id_situacao}</h5>                    
                    <h5>{emprestimo.dt_retirada}</h5>                    
                    <h5>{emprestimo.dt_devolucao_prevista}</h5>                    
                    <h5>{emprestimo.dt_entrega}</h5>                    
                </div>
            </div>
        </div>
    )

}
