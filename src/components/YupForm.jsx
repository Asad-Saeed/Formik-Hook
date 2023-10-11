import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
// import {useFormik } from "formik";
import * as Yup from "yup";

// initial Values object
const initialValues = {
  name: "",
  email: "",
  channel: "",
  social: {
    facebook: '',
    twitter: '',
  },
  phoneNumbers:["",""]
};
// OnSubmit Function
const onSubmit = (values) => {
  console.log("FormValues", values);
};
// Validate Function
// const validate = (values) => {
//   //values.name,values.email,values.channel
//   //errors.name,errors.email,errors.channel
//   let errors = {};
//   if (!values.name) {
//     errors.name = "required";
//   }
//   if (!values.email) {
//     errors.email = "required";
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = "Invalid email formate ";
//   }
//   if (!values.channel) {
//     errors.channel = "required";
//   } else if (values.channel.length > 20) {
//     errors.channel = "Must be 20 characters or less";
//   }
//   return errors;
// };
const validationSchema = Yup.object({
  name: Yup.string().required("required!"),
  email: Yup.string().email("invalid Email").required("required!"),
  channel: Yup.string().required("required!"),
});

const YupForm = () => {
  //   const formik = useFormik({
  //     initialValues,
  //     onSubmit,
  //     // validate,
  //     validationSchema
  //   });
  //   // value object
  //   console.log("FormikValues", formik.values);
  //   //  Errors Object
  //   console.log("FormikErrors", formik.errors);
  //   // Visited fields object
  //   console.log("FormikVisited", formik.touched);

  return (
    <>
      <div  className="main-container"><h1 className="heading">Yup Library</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        className="main-container"
      >
        <Form>
          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" id='name' />
          <ErrorMessage  name="name" className="errors" /> 
          {/* className not work */}
          <label htmlFor="email">Email Address:</label>
          <Field name="email" type="text" id='email'/>
          <ErrorMessage  name="email" />
          <label htmlFor="channel">Channel Name:</label>
          <Field name="channel" type="text" id='channel'/>
          <ErrorMessage  name="channel" />
          <label htmlFor="social">Social Accounts Nested object:</label>
          <Field name="social.facebook" type="text" id="social"/>
          <br/>
          <Field name="social.twitter" type="text" id="social"/>

          <label htmlFor="phoneNumbers">Phone Number Array:</label>
          <Field name="phoneNumbers[0]" type="text" id="phoneNumbers"/>
          <br/>
          <Field name="phoneNumbers[1]" type="text" id="phoneNumbers"/>
          <br/>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      </div>
    </>
  );
};

export default YupForm;
