import React, { useEffect } from "react";
import CardAutor from "./CardAutor";
import { useState } from "react";
import API from '../service/API';

export default function ListAutor() {
    const [autor, setAutor ] = useState([]);

    useEffect(() => {
        API.get("/autor")
            .then((response) => setAutor(response.data))
            .catch((err) => alert(err));
    }, [])


    return (
        <section class="w3-row w3-container w3-margin-top">
        {  autor.map( prod => 
                <CardAutor key={prod.id} autor={prod}></CardAutor>             
            )}
        </section>
    )
}