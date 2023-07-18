import React from "react";

//{usuario} -> props para usuario = const usuario = props.usuario
export default function CardUsuario({usuario}) {
    return (
        <div className="w3-col l4 m6 s12 w3-container w3-padding-16">
				<div className="w3-card">
					<div className="w3-container w3-center">
                    <img src={usuario.imagem} style={{width: "70%"}} />
                    <h5>{usuario.nome}</h5>                   
                </div>
            </div>
        </div>
    )

}
