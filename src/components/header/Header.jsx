import React from "react";
import './Header.css';
import imagen from './img.jpeg';

export default function Header() {
    return (
        <header>
            <div>
                <img id='img' src={imagen} alt="" width='50px' />
            </div>
            <div>
                <p>
                    TIENDA EN LINEA
                </p>
            </div>
            <input type="text" placeholder="Texto por defecto"/>
            <div className="about">
                <a href="">Contactanos</a>
                <a href="">Categorias</a>
                <a href="">Sobre nosotros</a>
            </div>
            <div className="links">
                <a href="">extra</a>
                <a href="">extra</a>
            </div>
        </header>
    )
}

