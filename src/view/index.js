import React, { useEffect, useState } from 'react'
import Header from './components/header'
import Loader from './components/loader'
import ProductListing from './components/productListing'

const Index = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const allProducts = async () => {
        setLoading(true);
        await fetch(`https://fakestoreapi.com/products?sort=desc`)
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
    }
    console.log(products)
    useEffect(() => {
        allProducts()
    }, [])
    return (
        <>
        /*==============header=============*/
            <Header />
            <div className='container body-margin'>
                {loading ? <Loader /> : <ProductListing products={products}/>}
            </div>
        </>
    )

}

export default Index