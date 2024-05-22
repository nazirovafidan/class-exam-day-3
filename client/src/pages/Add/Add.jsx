import React from 'react'
import { useFormik } from 'formik';
import { post } from '../../sevices/requests';
import { endpoint } from '../../sevices/constants';
import { Helmet } from "react-helmet";
import './add.scss'
import { addSchema } from '../../validations/add.validation';

const Add = () => {
  const formik = useFormik({
    initialValues: {
      imageSrc: '',
      title: '',
      price: ''
    },validationSchema:addSchema,
     onSubmit:async(values)=> {
      console.log(values)
      await post(endpoint.arrivals,values)
      formik.resetForm()
    }
  });
  return (
   <div >
    <Helmet>
    <meta charSet="utf-8" />
    <title>Add</title>
    <link rel="canonical" href="http://mysite.com/example" />
  </Helmet>
    <form style={{paddingTop:'150px'}} onSubmit={formik.handleSubmit}>
      <label htmlFor="imgSrc">ImageSrc:</label>
      <input type="text" value={formik.values.imageSrc} name='imageSrc' id='imgSrc' onChange={formik.handleChange} />
      <label htmlFor="title">Title:</label>
      <input type="text"value={formik.values.title} name='title' id='title' onChange={formik.handleChange} />
      <label htmlFor="price">Price:</label>
      <input type="text"value={formik.values.price} name='price' id='price' onChange={formik.handleChange} />
      <button type='submit'>Add</button>
    </form>
   </div>
  )
}

export default Add