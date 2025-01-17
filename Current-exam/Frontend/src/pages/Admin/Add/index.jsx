import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios"

const ArivallsSchema = Yup.object().shape({
  img: Yup.string()
    .required('Required'),
  name: Yup.string()
    .min(0, 'Too Short!')
    .max(300, 'Too Long!')
    .required('Required'),
  price: Yup.number().required('Required'),
});

const Add = () => {
  const DB_URL = "http://localhost:8080"

  return (
    <div>
      <div className="container">
        <h1>Signup</h1>
        <Formik
          initialValues={{
            img: '',
            name: '',
            price: 0,
          }}
          validationSchema={ArivallsSchema}
          onSubmit={async (values, { resetForm }) => {
            console.log(values);

            const arivall = { ...values }
            const res = await axios.post(`${DB_URL}/arivalls`, arivall)
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
              <button type="submit" className='btn'>Submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}


export default Add