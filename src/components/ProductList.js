import React from 'react';

const ProductList = ({products, removeProduct, selectProduct}) => {
    return (
        <div>
            <ul>
            {
                products.map(product => (
                    <li style={{marginBottom: "10px"}} key={product.id}>
                        <ul>
                            <li><b>Name: </b>{product.name}</li>
                            <li><b>Categoria: </b>{product.category}</li>
                            <li><b>Precio: </b>{product.price}</li>
                            <li><b>Disponible: </b>{product.isAvailable?"disponible": "agotado"}</li>
                        </ul>
                        <button onClick={() => removeProduct(product.id)}>
                            Eliminar
                        </button>
                        <button onClick={() => selectProduct(product)}>
                            Actualizar
                        </button>
                    </li>
                ))
            }
            </ul> 
        </div>
    );
};

export default ProductList;