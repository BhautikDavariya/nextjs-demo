"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { errorState, loginPalyer } from "@/actions";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Index = () => {
  const registerPlayer = useSelector((state) => state?.registerPlayer);
  const error = useSelector((state) => state?.error);
  const [thoreError, setThoreError] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    // email: Yup.string().email("Invalid email").required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      // email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(loginPalyer(values));
    },
  });

  useEffect(() => {
    if (error?.response?.data?.error && thoreError) {
      const notify = () => toast.error(error?.response?.data?.error);
      notify();
    } else {
      dispatch(errorState(null));
      setThoreError(true);
    }
  }, [error]);

  useEffect(() => {
    if (registerPlayer?.id) {
      localStorage.setItem("user", JSON.stringify(registerPlayer));
      router.push("/");
    }
  }, [registerPlayer]);

  return (
    <div className="h-[100vh] flex flex-col justify-center align-middle items-center">
      <div className="bg-white w-[40%] p-4" title="Register">
        <div className="text-3xl text-black mb-3">Login:</div>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <div>
            <input
              // prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="username"
              name="username"
              className="border rounded-md w-full p-3 text-black"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username && formik.touched.username ? (
              <div className="text-sm text-red-500">
                {formik.errors.username}
              </div>
            ) : null}
          </div>
          {/* <div>
            <input
              // prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
              type="email"
              name="email"
              className="border rounded-md w-full p-3 text-black"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-sm text-red-500">{formik.errors.email}</div>
            ) : null}
          </div> */}
          <div>
            <input
              // prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              name="password"
              className="border rounded-md w-full p-3 text-black"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-sm text-red-500">
                {formik.errors.password}
              </div>
            ) : null}
          </div>
          <div className="text-black">
            <button
              className="login-form-button me-2 px-4 py-2 rounded-md bg-blue-200"
              type="submit"
            >
              Submit
            </button>
            Or{" "}
            <button
              type="link"
              className="text-blue-500 underline"
              onClick={() => router.push("/register")}
            >
              register now!
            </button>
          </div>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Index;
