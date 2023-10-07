import React from "react";
import { useFormik } from "formik";

// initial Values object
const initialValues = {
  name: "",
  email: "",
  channel: "",
};
// OnSubmit Function
const onSubmit = (values) => {
  console.log("FormValues", values);
};
// Validate Function
const validate = (values) => {
  //values.name,values.email,values.channel
  //errors.name,errors.email,errors.channel
  let errors = {};
  if (!values.name) {
    errors.name = "required";
  }
  if (!values.email) {
    errors.email = "required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email formate ";
  }
  if (!values.channel) {
    errors.channel = "required";
  } else if (values.channel.length > 20) {
    errors.channel = "Must be 20 characters or less";
  }
  return errors;
};
const YoutubeForm = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  // value object
  console.log("FormikValues", formik.values);
  //  Errors Object
  console.log("FormikErrors", formik.errors);
  // Visited fields object
  console.log("FormikVisited", formik.touched);

  return (
    <div className="main-container">
      <h1 className="heading">Formic Library</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="errors">{formik.errors.name}</div>
        ) : null}
        <label htmlFor="email">Email Address:</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <div className="errors">{formik.errors.email}</div>
        ) : null}
        <label htmlFor="channel">Channel Name:</label>
        <input
          id="channel"
          name="channel"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.channel}
          onBlur={formik.handleBlur}
        />
        {formik.touched.channel && formik.errors.channel ? (
          <div className="errors">{formik.errors.channel}</div>
        ) : null}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
