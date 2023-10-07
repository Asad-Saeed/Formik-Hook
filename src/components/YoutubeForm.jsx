import React from "react";
import {useFormik} from 'formik'

const YoutubeForm = () => {
  const formik=useFormik({
    initialValues:{
      name:"",
      email:"",
      channel:""
    },
    onSubmit:values=>{
      console.log("FormValues",values);
    }
  })
  return (
    <div className="main-container">
      <h1 className="heading">Formic Library</h1>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input id="name" name="name" type="text" onChange={formik.handleChange} value={formik.values.name} />
        <label htmlFor="email">Email Address:</label>
        <input id="email" name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
        <label htmlFor="channel">Channel Name:</label>
        <input id="channel" name="channel" type="text" onChange={formik.handleChange} value={formik.values.channel} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default YoutubeForm;
