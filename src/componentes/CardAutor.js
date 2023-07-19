import React from "react";

//{Autor} -> props para Autor = const Autor = props.Autor
export default function CardAutor({autor}) {
    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
				<div className="w3-card">
					<div className="w3-container w3-center">                   
                    <h5>{autor.id}</h5>                                       
                    <h4>{autor.nome}</h4>                    
                </div>
            </div>
        </div>
    )

}
