import { createContext, useEffect, useState } from "react";

const ShopContext = createContext()

export const ShopProvider = ({children})=>{

    const [cart, setCart] = useState([])
    // use state for saving our products
    const [products, setProducts] = useState([])

    // useEffect for fetching the products on every load
    useEffect(()=>{
       fetchProducts() 
    },[])
    useEffect(()=>{
        console.log(cart);
        
    },[cart])

    // function for fetching our products
    const fetchProducts = async()=>{
        const res = await fetch("http://localhost:3000/marketify")
        const data = await res.json()

        setProducts(data)        
    }

    const topSelling = products.filter((product)=> product.topSelling == true)

    const addToCart = (product)=>{
        setCart([...cart, product])
        
    }

    

    


    return <ShopContext.Provider value={{products, topSelling, cart, addToCart}}>
        {children}
    </ShopContext.Provider>
}

export default ShopContext