import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import "./index.css"

const DishSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(30, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
  img: Yup.string().required('Required'),
  price: Yup.number().required('Required'),
});
const Add = () => {
    const DB_URL = "http://localhost:8080"
  return (
    <div>
      <div className="container">
      <div>
     <h1 className='Add'>Add Dish</h1>
     <Formik
       initialValues={{
        name: '',
        description: '',
        img: '',
        price: 0,
       }}
       validationSchema={DishSchema}
       onSubmit={async (values,{resetForm}) =>{
        const dish = {...values}
        const res = await axios.post(`${DB_URL}/dishes`,dish)
        console.log(values);
        resetForm()
        
       }
       }
     >
       {({ errors, touched }) => (
       <div className="row form">
         <div className="col-4">
          <img src="https://i.pinimg.com/originals/75/db/cc/75dbcc764b23a1b87fc2c083306da85a.gif" alt="" width={300}/>
         </div>
         <div className="col-4">
         <Form>
           <Field name="img" />
           {errors.img && touched.img ? (
             <div>{errors.img}</div>
           ) : null}
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="description" />
           {errors.description && touched.description ? (
             <div>{errors.description}</div>
           ) : null}
           <Field name="price" type="number" />
           {errors.price && touched.price ? <div>{errors.price}</div> : null}
          <div>
          <button type="submit" className='btn'>Submit</button>
          </div>
         </Form>
         </div>
         <div className="col-4">
         <img src="https://i.pinimg.com/originals/75/db/cc/75dbcc764b23a1b87fc2c083306da85a.gif" alt="" width="300" className='img' />
         </div>
       </div>
       )}
     </Formik>
   </div>
      </div>
    </div>
  )
}

export default Add