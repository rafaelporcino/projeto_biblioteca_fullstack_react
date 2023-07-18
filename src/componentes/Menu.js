import React from "react";
import { useState } from "react";

//import ListAutor from './componentes/ListAutor';
//import ListLivro from './componentes/ListLivro';

export default function Menu() {
    const [menuAtivo, setMenuAtivo] = useState(false);

    function dispararMenu() {
        setMenuAtivo(!menuAtivo);     
    }

    return (
        <header className="w3-top w3-margin-botton">
            <nav className="w3-bar w3-large w3-black">
                <a href="#" className="w3-bar-item w3-button w3-hide-large w3-hide-medium" onClick={() => dispararMenu()}>&#9776;</a>	
                <a href="#" className="w3-bar-item w3-button">  <i className="fa fa-home w3-xlarge"></i></a>
                <a href="/" className="w3-bar-item w3-button w3-hide-small">Home</a>
                <a href="/Pages/Autores_pg" className="w3-bar-item w3-button w3-hide-small">Autores</a>
                <a href="ListLivro" className="w3-bar-item w3-button w3-hide-small">Livros</a>
                <a href="ListEmprestimo" className="w3-bar-item w3-button w3-hide-small">Emprestimos</a>
                <a href="#" className="w3-bar-item w3-button w3-right">
                    <i className="fa fa-search w3-xlarge"></i>	
                </a>	
            </nav>		
            <nav id="menu-mobile" className={"w3-bar-block w3-large w3-black w3-hide w3-hide-large w3-hide-medium"+ (menuAtivo ?" w3-show" :"")}>
            <a href="/" className="w3-bar-item w3-button">Home</a>
            <a href="/ListAutor" className="w3-bar-item w3-button">Autores</a>
            <a href="/ListLivros" className="w3-bar-item w3-button">Livros</a>
            <a href="/ListEmprestimo" className="w3-bar-item w3-button">Emprestimos</a>
            </nav>

        </header>

    )
}