import React, { useEffect } from "react";
import CardAutor from "./CardAutor";
import { useState } from "react";
import API from '../service/API';

export default function ListAutors() {
    const [autors, setAutors ] = useState([]);

    useEffect(() => {
        API.get("/autor")
            .then((response) => setAutors(response.data))
            .catch((err) => alert(err));
    }, [])


    return (
        <section class="w3-row w3-container w3-margin-top">
        {  autors.map( aut => 
                <CardAutor key={aut.id} autor={aut}></CardAutor>             
            )}
        </section>
    )
}