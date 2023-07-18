import React, { useEffect } from "react";
import CardUsuario from "./CardUsuario";
import { useState } from "react";
import API from '../service/API';

export default function ListUsuarios() {
    const [usuarios, setUsuarios ] = useState([]);

    useEffect(() => {
        API.get("/usuarios")
            .then((response) => setUsuarios(response.data))
            .catch((err) => alert(err));
    }, [])


    return (
        <section class="w3-row w3-container w3-margin-top">
        {  usuarios.map( usu => 
                <CardUsuario key={usu.id} usuario={usu}></CardUsuario>
            )}
        </section>
    )
}