import React, { useContext, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContext";

function CreatePost() {
  const { authState } = useContext(AuthContext);

  let history = useHistory();
  const initialValues = {
    title: "",
    postText: "",
  };

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      history.push("/login");
    }
  }, []);

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title!"),
    postText: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:3001/posts", data, {
        headers: { accessToken: localStorage.getItem("accessToken") },
      })
      .then((response) => {
        history.push("/");
      });
  };

  return (
    <div className="createPostPage w-1/3 mx-auto border p-4">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label className='block py-2'>Title: </label>
          <ErrorMessage name="title" component="span" className='block text-red-500' />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="title"
            placeholder="(Ex. Title...)"
            class="p-2 block w-full border"
          />
          <label className='block py-2'>Post: </label>
          <ErrorMessage name="postText" component="span" className='block text-red-500' />
          <Field
            autoComplete="off"
            id="inputCreatePost"
            name="postText"
            placeholder="(Ex. Post...)"
            class='p-2 block w-full border h-32'
          />

          <button type="submit" className='bg-blue-800 text-white w-full my-4 py-2 hover:bg-blue-600'> Create Post</button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreatePost;
