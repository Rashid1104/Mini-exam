import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ClockSchema = Yup.object().shape({
  name: Yup.string()
    .min(4, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  img: Yup.string()
    .min(5, 'Too Short!')
    .max(1000, 'Too Long!')
    .required('Required'),
  price: Yup.number().required('Required'),
});

const Add = () => {
  const DB_URL = "http://localhost:8080"

  return (
    <div>
      <div className="container">
        <div className="row">
        <h1 style={{textAlign: "center",fontSize: "3rem"}}>Add Clock</h1>
     <Formik
       initialValues={{
         name: '',
         img: '',
         price: 0,
       }}
       validationSchema={ClockSchema}
       onSubmit={async (values,{resetForm}) => {
         const clock = {...values}
         const res = await axios.post(`${DB_URL}/clocks`,clock)
         console.log(values);
         resetForm()
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="img" />
           {errors.img && touched.img ? (
             <div>{errors.img}</div>
           ) : null}
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}
           <Field name="price" type="number" />
           {errors.price && touched.price ? <div>{errors.price}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
        </div>
      </div>
    </div>
  )
}

export default Add