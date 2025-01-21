import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from "axios"

const ArrivesSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    brand: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    img: Yup.string().required('Required'),
    price: Yup.number().required('Required'),
});
const Add = () => {
    const DB_URL = "http://localhost:8080"
    return (
        <div>
            <div className="container">
                <h1>Add New Arrives</h1>
                <Formik
                    initialValues={{
                        name: '',
                        brand: '',
                        img: '',
                        price: 0,
                    }}
                    validationSchema={ArrivesSchema}
                    onSubmit={async (values, { resetForm }) => {
                        // same shape as initial values
                        const arrives = { ...values }
                        const res = await axios.post(`${DB_URL}/arrives`, arrives)
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
                            <Field name="brand" type="text" />
                            {errors.brand && touched.brand ? <div>{errors.brand}</div> : null}
                            <Field name="price" type="number" />
                            {errors.price && touched.price ? <div>{errors.price}</div> : null}
                            <button type="submit">Submit</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    )
}

export default Add