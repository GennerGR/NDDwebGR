import React from "react";
import './ContainerProduct.css';
import Product from "./product/Product";

export default function ContainerProduct () {
    return (
        <section className="ContainerProduct">
            
            <div className="categories">
                <p>
                    CATEGORIAS
                </p>
            </div>

            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </section>
    )
}