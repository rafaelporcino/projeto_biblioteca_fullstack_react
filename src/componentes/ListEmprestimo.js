import React, { useEffect } from "react";
import CardEmprestimo from "./CardEmprestimo";
import { useState } from "react";
import API from '../service/API';

export default function ListEmprestimos() {
    const [emprestimo, setEmprestimos ] = useState([]);

    useEffect(() => {
        API.get("/emprestimo")
            .then((response) => setEmprestimos(response.data))
            .catch((err) => alert(err));
    }, [])


    return (
        <section class="w3-row w3-container w3-margin-top">
        {  emprestimo.map( empr => 
                <CardEmprestimo key={empr.id} emprestimo={empr}></CardEmprestimo>
            )}
        </section>
    )
}