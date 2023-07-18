import React from "react";

//{livro} -> props para livro = const livro = props.livro
export default function Cardlivro({livro}) {
    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
				<div className="w3-card">
					<div className="w3-container w3-center">                  
                    <h5>{livro.id}</h5>
                    <h3>{livro.id_autor}</h3>
                    <h3>{livro.titulo}</h3>
                </div>
            </div>
        </div>
    )

}
