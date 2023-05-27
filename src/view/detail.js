import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './components/header'
import Loader from './components/loader'

const Detail = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(false)
    const getProduct = async()=>{
        setLoader(true);
        try{
        await fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res=>res.json())
        .then(json=>{
            setProduct(json)
            setLoader(false)
        })
        }catch(error){
            console.log(error)
        }
    }
    useEffect(() => {
        getProduct()
    }, [id])
    
    return (
        <>
    /*==============header=============*/
            <Header />

            <div className='container body-margin'>
            {loader ? <Loader /> : <Body product={product} />}
            </div>
        </>
    )
}

export default Detail

export const Body =({product})=>{
    return (
        <div className='row'>
        <div className='col col-md-6'>
            <div className='card'>
                <div className='card-body'>
                    <img className='card-img-top' src={product.image}/>
                </div>
            </div>
        </div>
        <div className='col col-md-6'>
            <div className='card'>
                <div className='card-body'>
                    <h3 className='card-title'>
                        {product.title}
                    </h3>
                    <p className='card-text'>{product.description}</p>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <h5 className='card-title'>${product.price}</h5>
                    <Link to={`/products/${product.id}/edit`}>
                        <button className='btn btn-outline-success'>edit</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    )
}
