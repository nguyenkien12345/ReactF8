import React, { useRef, useState, useMemo } from 'react';

function DemoUseMemo() {

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [products, setProducts] = useState([]);

    const nameRef = useRef();

    const handleSubmit = () => {
        setProducts([...products, {
            name: name,
            price: Number(price),
        }]);
        setName("");
        setPrice("");
        nameRef.current.focus();
    }

    const total = useMemo(() => {
        const totalPrice = products.reduce((sum, product) => {
            console.log("BILLS")
            return sum + product.price;
        },0);
        return totalPrice;
    },[products]);

    return (
        <>
        <input type="text" placeholder="Enter Your Name: " value={name} onChange={(e) => setName(e.target.value)} ref={nameRef}/>
        <br/>
        <input type="text" placeholder="Enter Your Price: " value={price} onChange={(e) => setPrice(e.target.value)}/>
        <br/>
        <button onClick={handleSubmit}>Add Product</button>
        <p>Total: {total}</p>

        <ul>
           {products.map((product,index) => (
               <li key={index}>Name: {product.name} - Price: {product.price}</li>
           ))} 
        </ul>
        </>
    )
}

export default DemoUseMemo
