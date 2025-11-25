import { Form, Formik } from "formik";
import * as Yup from "yup";
import Logo from "@assets/logo.svg?react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router-dom";

function LoginForm() {
  const schema = Yup.object({
    username: Yup.string()
      .min(3, "Username must be at least 3 characters")
      .matches(
        /^[a-zA-Z0-9_]+$/,
        "Only letters, numbers and underscores allowed",
      )
      .required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("submitting...");
  };

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => {
        return (
          <Form className="text-white p-16 rounded-2xl bg-dark-06 w-fit">
            <div className="flex gap-2 items-center mb-4 justify-center">
              <Logo className="size-8" />
              <span className="font-heading text-white font-bold text-3xl">
                Reelr
              </span>
            </div>

            <h1 className="font-heading font-bold text-center text-2xl mb-10">
              Welcome Back!
            </h1>

            <div className="flex flex-col gap-6 w-80">
              <Input
                label="Username:"
                type="text"
                name="username"
                placeholder="Nikita_84"
                error={touched.username && Boolean(errors.username)}
                helperText={touched.username && errors.username}
                required
              />
              <Input
                label="Password:"
                type="password"
                name="password"
                placeholder="**********"
                error={touched.password && Boolean(errors.password)}
                helperText={touched.password && errors.password}
                required
              />
            </div>

            <div className="flex flex-col gap-2 mt-12">
              <Button type="submit" className="w-full bg-cyan! text-white">
                Login
              </Button>

              <div className="flex gap-2 text-sm font-body text-white-accent mx-auto">
                <span>Don’t have an account yet?</span>
                <Link to="/register" className="font-bold hover:underline">
                  Register
                </Link>
              </div>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default LoginForm;
