import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Footer.scss';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import TextField from '@mui/material/TextField';

const Footer = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      _type: 'contact',
      name: '',
      email: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name required'),
      email: Yup.string().email('Invalid email').required('Email required'),
      message: Yup.string().required('The message cannot be empty'),
    }),
    onSubmit: (values) => {
      setLoading(true);
      client.create(values)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
    },
  });

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me ☕</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="muhannad.abbasi.1995@gmail.com" className="p-text">muhannad.abbasi.1995@gmail.com</a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form 
          onSubmit={formik.handleSubmit}
          className='flex_center'
        >
          <TextField
            fullWidth
            id="name"
            name="name"
            placeholder="Your name"
            className="app__footer-form app__flex"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{
              "& fieldset": { border: 'none' },
            }}
          />
          <TextField
            fullWidth
            id="email"
            name="email"
            placeholder="Your email"
            className="app__footer-form app__flex"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={{
              "& fieldset": { border: 'none' },
            }}
          />
          <TextField
            fullWidth
            id="message"
            name="message"
            placeholder="Your message"
            className="app__footer-form app__flex"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            sx={{
              "& fieldset": { border: 'none' },
            }}
          />
          <div className="">
            <button
              type="submit"
              className="p-text"
            >
              {!loading ? 'Send message' : 'Sending...'}
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for your message!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
