import React, { useEffect, useState } from 'react';

const ProductsForm = ({addProduct, productEdit, selectProduct, upDateProduct}) => {

    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [isAvailable, setIsAvailable] = useState(false);


    useEffect(()=> {
        console.log("cambio productedit")
        if(productEdit){
        setName(productEdit.name);
        setCategory(productEdit.category);
        setPrice(productEdit.price);
        setIsAvailable(productEdit.isAvailable);
        }else{
            setName("");
            setCategory("");
            setPrice("");
            setIsAvailable(false);
        }
    }, [productEdit])

    const submit = e => {
        e.preventDefault();
       
        const product = {
            id: Date.now(),
            name: name, // si la propiedad y el valor son iguales se puede escribir (name,)
            category: category,
            price: price,
            isAvailable: isAvailable
        }
        if (productEdit){
            product.id = productEdit.id;
            upDateProduct(product);
        }else{
           
            addProduct(product);

        }
    
    }

    return (
        <div>
            <form onSubmit={submit}>
                <div className='input-container'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type="text" 
                        id='name' 
                        onChange={e => setName (e.target.value)}
                        value = {name}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor='category'>Categoria</label>
                    <input 
                        type="text" 
                        id='category' 
                        onChange={e => setCategory(e.target.value)}
                        value = {category}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor='price'>Precio</label>
                    <input 
                        type="number"
                        id='price' 
                        onChange={e => setPrice (e.target.value)} 
                        value={price}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor='isAvailable'>Esta disponible</label>
                    <input 
                        type="checkbox" 
                        id='isAvailable' 
                        onChange={e => setIsAvailable(e.target.checked)}
                        checked = {isAvailable}/>
                </div>
                <button>Submit</button>
                {
                   productEdit &&  <button 
                   type='button'
                   onClick={() =>selectProduct(null)}
                   >Cancelar</button>
                }
                
            </form>
        </div>
    );
};

export default ProductsForm;