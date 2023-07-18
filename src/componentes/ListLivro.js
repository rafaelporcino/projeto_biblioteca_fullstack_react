import React, { useEffect } from "react";
import Cardlivro from "./CardLivro";
import { useState } from "react";
import API from '../service/API';

export default function Listlivros() {
    const [livros, setlivros ] = useState([]);

    useEffect(() => {
        API.get("/livro")
            .then((response) => setlivros(response.data))
            .catch((err) => alert(err));
    }, [])


    return (
        <section class="w3-row w3-container w3-margin-top">
        {  livros.map( prod => 
                <Cardlivro key={prod.id} livro={prod}></Cardlivro>
            )}
        </section>
    )
}