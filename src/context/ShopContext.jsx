import { createContext, useEffect, useState } from "react";

const ShopContext = createContext()

export const ShopProvider = ({children})=>{
    // use state for saving our products
    const [products, setProducts] = useState([])

    // useEffect for fetching the products on every load
    useEffect(()=>{
       fetchProducts() 
    },[])

    // function for fetching our products
    const fetchProducts = async()=>{
        const res = await fetch("http://localhost:3000/marketify")
        const data = await res.json()

        setProducts(data)        
    }

    


    return <ShopContext.Provider value={products}>
        {children}
    </ShopContext.Provider>
}

export default ShopContext