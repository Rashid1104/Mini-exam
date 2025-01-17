import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios"




const ClotherSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  price: Yup.number().required('Required'),
  imageUrl: Yup.string().required('Required'),
});

const AddClothers = () => {
  const DB_URL = "http://localhost:8080"

  return (
    <>
      <Formik
        initialValues={{
          title: '',
          price: '',
          description: '',
          imageUrl: '',
        }}
        validationSchema={ClotherSchema}
        onSubmit={async (values, { resetForm }) => {
          console.log(values);

          const clother = { ...values }
          const res = await axios.post(`${DB_URL}/clothers`, clother)
          resetForm()


        }}
      >
        {({ errors, touched }) => (
          <Form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <Field name="name" />
              {errors.name && touched.name ? (
                <div>{errors.name}</div>
              ) : null}
            </div>
            <div>
              <Field name="price" type={"number"} />
              {errors.price && touched.price ? (
                <div>{errors.price}</div>
              ) : null}
            </div>
            <div>
              <Field name="description" type="text" />
              {errors.description && touched.description ? <div>{errors.description}</div> : null}
            </div>
            <div>
              <Field name="imageUrl" type="url" />
              {errors.imageUrl && touched.imageUrl ? <div>{errors.imageUrl}</div> : null}
            </div>
            <button type="submit" className='btn'>Submit</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default AddClothers