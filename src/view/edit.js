import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './components/header'
import Loader from './components/loader'

const Edit = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(false)
    const getProduct = async () => {
        setLoader(true);
        try {
            await fetch(`https://fakestoreapi.com/products/${id}`)
                .then(res => res.json())
                .then(json => {
                    setProduct(json)
                    setLoader(false)
                })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getProduct()
    }, [id])
    return (<>
    /*==============header=============*/
        <Header />
        <div className='container body-margin'>
            {loader ? <Loader /> : <Body product={product} />}
        </div>
    </>
    )
}

export default Edit

export const Body = ({ product }) => {
    return (
        <div className='card'>
            <div className='card-header d-flex justify-content-between pb-0'>
                <h2 className='header-title m-0'>Update Product</h2>
                <Link to={'/'}><button className='btn btn-outline-success float-end'>All Products</button></Link>
            </div>
            <div className='card-body'>
                <div className='row'>
                    <div className='col col-12 mb-2'>
                        <label className='form-label'>Title</label>
                        <input placeholder='title...' className='form-control' name='title' value={product.title} />
                    </div>
                    <div className='col col-12 mb-2'>
                        <label className='form-label'>Description</label>
                        <textarea placeholder='desc...' rows='6' className='form-control' name='description' value={product.description} />
                    </div>
                    <div className='col col-6 mb-2'>
                        <label className='form-label'>Price</label>
                        <input placeholder='price...' type={'number'} className='form-control' name='price' value={product.price} />
                    </div>
                    <div className='col col-6 mb-2'>
                        <label className='form-label'>Category</label>
                        <input type={'text'} className='form-control' name='price' value={product.category} />
                    </div>
                    <div className='col col-6 mb-2'>
                        <label className='form-label'>Image</label>
                        <input placeholder='image url' className='form-control' name='image' value={product.image} />
                    </div>
                    <div className='col col-12'>
                        <button className='btn btn-outline-primary'>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}