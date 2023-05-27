import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from './components/header'
import Loader from './components/loader'

const Edit = () => {
    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [loader, setLoader] = useState(false)

    const handleTitleChange = (event) => {
        console.log(event.target.value)
        setProduct({ ...product, title: event.target.value });
    }

    const handleDescriptionChange = (event) => {
        setProduct({ ...product, description: event.target.value });
    }

    const handlePriceChange = (event) => {
        setProduct({ ...product, price: event.target.value });
    }

    const handleCategoryChange = (event) => {
        setProduct({ ...product, category: event.target.value });
    }

    const handleImageChange = (event) => {
        setProduct({ ...product, image: event.target.value });
    }

    const updateProduct = async () => {
        try {
            await fetch(`https://fakestoreapi.com/products/${product.id}`, {
                method: "PATCH",
                body: JSON.stringify(
                    product
                )
            })
                .then(res => res.json())
                .then(json => console.log(json))
        } catch (error) {
            console.log('error is :', error)
        }
    }

    const clearform=()=>{
        setProduct({
            title: '',
            description: '',
            price: 0,
            category: '',
            image: '',
        }) 
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        console.log('updated')
        await updateProduct()
        //clear form
        clearform()

    }
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
            {
                loader ? <Loader /> :
                    <div className='card'>
                        <div className='card-header d-flex justify-content-between pb-0'>
                            <h2 className='header-title m-0'>Update Product</h2>
                            <Link to={'/'}><button className='btn btn-outline-success float-end'>All Products</button></Link>
                        </div>
                        <div className='card-body'>
                            <form onSubmit={handleSubmit}>
                                <div className='row'>
                                    <div className='col col-12 mb-2'>
                                        <label className='form-label'>Title</label>
                                        <input placeholder='title...' onChange={handleTitleChange} value={product.title} className='form-control' name='title' />
                                    </div>
                                    <div className='col col-12 mb-2'>
                                        <label className='form-label'>Description</label>
                                        <textarea placeholder='desc...' onChange={handleDescriptionChange} value={product.description} rows='6' className='form-control' name='description' />
                                    </div>
                                    <div className='col col-6 mb-2'>
                                        <label className='form-label'>Price</label>
                                        <input placeholder='price...' onChange={handlePriceChange} value={product.price} type={'number'} className='form-control' name='price' />
                                    </div>
                                    <div className='col col-6 mb-2'>
                                        <label className='form-label'>Category</label>
                                        <input type='text' onChange={handleCategoryChange} value={product.category} className='form-control' name='category' />
                                    </div>
                                    <div className='col col-6 mb-2'>
                                        <label className='form-label'>Image</label>
                                        <input placeholder='image url' onChange={handleImageChange} value={product.image} className='form-control' name='image' />
                                    </div>
                                    <div className='col col-12'>
                                        <button type='submit' className='btn btn-outline-primary'>Create</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            }
        </div>
    </>
    )
}

export default Edit
