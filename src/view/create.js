import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from './components/header'

const Create = () => {
    const [form, setForm] = useState({
        title:'',
        description:'',
        price:0,
        category:'',
        image:'',
    })
    const handleTitleChange = (event) => {
        setForm({ ...form, title: event.target.value });
      }
      
      const handleDescriptionChange = (event) => {
        setForm({ ...form, description: event.target.value });
      }
      
      const handlePriceChange = (event) => {
        setForm({ ...form, price: event.target.value });
      }
      
      const handleCategoryChange = (event) => {
        setForm({ ...form, category: event.target.value });
      }
      
      const handleImageChange = (event) => {
        setForm({ ...form, image: event.target.value });
      }
    
    const createProduct= async()=>{
        try{
        await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                form
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
    }catch(error){
        console.log('error is :',error)
    }
    }

    const submitForm = async(event)=>{
        event.preventDefault()
        await createProduct()
    }
  return (<>
    /*==============header=============*/
    <Header />
    <div className='container body-margin'>
        <div className='card'>
            <div className='card-header d-flex justify-content-between pb-0'>
                <h2 className='header-title m-0'>Create Product</h2>
               <Link to={'/'}><button className='btn btn-outline-success float-end'>All Products</button></Link>
            </div>
            <div className='card-body'>
            <form onSubmit={submitForm}>
            <div className='row'>
                <div className='col col-12 mb-2'>
                    <label className='form-label'>Title</label>
                    <input placeholder='title...' onChange={handleTitleChange} value={form.title} className='form-control' name='title'/>
                </div>
                <div className='col col-12 mb-2'>
                    <label className='form-label'>Description</label>
                    <textarea placeholder='desc...' onChange={handleDescriptionChange} value={form.description} rows='6' className='form-control' name='description'/>
                </div>
                <div className='col col-6 mb-2'>
                    <label className='form-label'>Price</label>
                    <input placeholder='price...' onChange={handlePriceChange} value={form.price} type={'number'} className='form-control' name='price'/>
                </div>
                <div className='col col-6 mb-2'>
                    <label className='form-label'>Category</label>
                    <input type='text' onChange={handleCategoryChange} value={form.category} className='form-control' name='category'/>
                </div>
                <div className='col col-6 mb-2'>
                    <label className='form-label'>Image</label>
                    <input placeholder='image url' onChange={handleImageChange} value={form.image} className='form-control' name='image'/>
                </div>
                <div className='col col-12'>
                    <button type='submit' className='btn btn-outline-primary'>Create</button>
                </div>
            </div>
            </form>
        </div>
        </div>
    </div>
    </>
  )
}

export default Create