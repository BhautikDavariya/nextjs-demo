"use client";
import React, { useEffect } from "react";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { ragisterPalyer } from "@/actions";
import { useRouter } from "next/router";
import * as Yup from "yup";
const Index = () => {
  const registerPlayer = useSelector((state) => state?.registerPlayer);
  const router = useRouter();
  const dispatch = useDispatch();
  const SignupSchema = Yup.object().shape({
    username: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    firstname: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastname: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    password: Yup.string()
      .min(5, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (values) => {
      dispatch(ragisterPalyer(values, router));
    },
  });

  useEffect(() => {
    if (registerPlayer?.id) {
      localStorage.setItem("user", JSON.stringify(registerPlayer));
      router.push("/");
    }
  }, [registerPlayer]);

  return (
    <div className="h-[100vh] flex flex-col justify-center align-middle items-center">
      <Card className="bg-white w-[40%]" title="Register">
        <form onSubmit={formik.handleSubmit}>
          <Form.Item
          >
            <Input
              // prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
            />
            {formik.errors.username && formik.touched.username ? (
              <div className="text-sm text-red-500">
                {formik.errors.username}
              </div>
            ) : null}
          </Form.Item>
          <Form.Item
          
          >
            <Input
              // prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="firstname"
              name="firstname"
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
            {formik.errors.firstname && formik.touched.firstname ? (
              <div className="text-sm text-red-500">
                {formik.errors.firstname}
              </div>
            ) : null}
          </Form.Item>
          <Form.Item
          
          >
            <Input
              // prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="lastname"
              name="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
            {formik.errors.lastname && formik.touched.lastname ? (
              <div className="text-sm text-red-500">
                {formik.errors.lastname}
              </div>
            ) : null}
          </Form.Item>
          <Form.Item
          
          >
            <Input
              // prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="email"
              type="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-sm text-red-500">{formik.errors.email}</div>
            ) : null}
          </Form.Item>
          <Form.Item
           
          >
            <Input
              // prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-sm text-red-500">
                {formik.errors.password}
              </div>
            ) : null}
          </Form.Item>
          <Form.Item>
            <button
              className="login-form-button me-2 px-4 py-2 rounded-md bg-blue-200"
              type="submit"
            >
              Submit
            </button>
            Or{" "}
            <Button type="link" onClick={() => router.push("/login")}>
              login now!
            </Button>
          </Form.Item>
        </form>
      </Card>
    </div>
  );
};

export default Index;
