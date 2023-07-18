import React, { useEffect } from "react";
import CardProduto from "./CardProduto";
import { useState } from "react";
import API from '../service/API';

export default function ListProdutos() {
    const [produtos, setProdutos ] = useState([]);

    useEffect(() => {
        API.get("/produtos")
            .then((response) => setProdutos(response.data))
            .catch((err) => alert(err));
    }, [])


    return (
        <section class="w3-row w3-container w3-margin-top">
        {  produtos.map( prod => 
                <CardProduto key={prod.id} produto={prod}></CardProduto>
            )}
        </section>
    )
}