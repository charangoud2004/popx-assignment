import { Form, Formik, Field, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";

export const FormData = ({ isregister, Buttontext, heading, lorem }) => {
  const nav = useNavigate();
  const initialValues = isregister
    ? {
        fullname: "",
        phonenumber: "",
        email: "",
        password: "",
        companyname: "",
      }
    : {
        email: "",
        password: "",
      };

  const validationSchema = Yup.object(
    isregister
      ? {
          fullname: Yup.string().required("Name is required"),
          email: Yup.string()
            .email("invalid email")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Minimum 6 character")
            .required("password is required"),
          companyname: Yup.string().required("please provide company name"),
          phonenumber: Yup.string()
            .matches(
              /^\d{10}$/,
              "Phone number must be exactly 10 digits of numbers"
            )
            .required("Phone number is required"),
        }
      : {
          email: Yup.string()
            .email("invalid email")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Minimum 6 character")
            .required("password is required"),
        }
  );

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      console.log(values);
      setSubmitting(false);
      resetForm();
      isregister
        ? toast.success("Registration successful")
        : toast.success("Login successful");
      localStorage.setItem("email", values.email);
      localStorage.setItem("name", values.fullname);
      nav("/profile");
    }, 1000);
  };

  return (
    <div className="mt-4">
      <h1 className="text-3xl font-bold capitalize max-w-[250px] ">
        {heading}
      </h1>
      {!isregister && (
        <p className="text-gray-500 text-sm max-w-[280px] mt-2 font-medium">
          {lorem}
        </p>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className=" py-4">
            {!isregister ? (
              <>
                <div>
                  <label htmlFor="email">Email Address:</label> <br />
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border w-full px-3 rounded-md py-2 bg-gray-200"
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-red-500"
                  />
                </div>
                <div className="mt-3">
                  <label htmlFor="password">Password</label> <br />
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border w-full px-3 rounded-md py-2 bg-gray-200"
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="text-red-500"
                  />
                </div>
                <br />
              </>
            ) : (
              <>
                <div className="mt-2">
                  <label htmlFor="fullname">FullName:</label> <br />
                  <Field
                    id="fullname"
                    type="text"
                    name="fullname"
                    placeholder="Enter name..."
                    className="border w-full px-3 rounded-md py-2 bg-gray-200"
                  />
                  <ErrorMessage
                    component="div"
                    name="fullname"
                    className="text-red-500"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="phonenumber">PhoneNumber:</label> <br />
                  <Field
                    id="phonenumber"
                    type="tel"
                    name="phonenumber"
                    placeholder="phonenumber"
                    className="border w-full px-3 rounded-md py-2 bg-gray-200"
                  />
                  <ErrorMessage
                    component="div"
                    name="phonenumber"
                    className="text-red-500"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="email">Email Address:</label> <br />
                  <Field
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border w-full px-3 rounded-md py-2 bg-gray-200"
                  />
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-red-500"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="password">Password</label> <br />
                  <Field
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="border w-full px-3 rounded-md py-2  bg-gray-200"
                  />
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="text-red-500"
                  />
                </div>
                <div className="mt-2">
                  <label htmlFor="companyname">Company Name:</label> <br />
                  <Field
                    id="companyname"
                    type="text"
                    name="companyname"
                    placeholder="companyname"
                    className="border w-full px-3 rounded-md py-2 bg-gray-200"
                  />
                  <ErrorMessage
                    component="div"
                    name="companyname"
                    className="text-red-500"
                  />
                </div>
                <br />
              </>
            )}
            {isregister && (
              <>
                <label htmlFor="agency">Are you an agency</label>
                <br />
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      value="yes"
                      name="agency"
                      required
                      className="mr-1 accent-violet-500 w-4 h-6"
                    />
                    <span className="capitalize mr-2">yes</span>
                  </div>
                  <div className="flex items-center">
                    <input
                      className="mr-1 accent-violet-500  w-4 h-6"
                      type="radio"
                      required
                      value="no"
                      name="agency"
                    />
                    <span className="capitalize">no</span>
                  </div>
                </div>
              </>
            )}

            <button
              className="bg-violet-500 hover:bg-violet-700  rounded-md w-full py-2 text-white font-medium mt-4"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? `submiting..` : `${Buttontext}`}
            </button>
            <br />
            {isregister ? (
              <p className="capitalize text-sm mt-2">
                already have an acccount ?{" "}
                <strong className="text-violet-600 hover:text-violet-800 hover:underline">
                  <Link to={"/login"}>login</Link>
                </strong>
              </p>
            ) : (
              <p className="capitalize text-sm mt-2">
                not register yet ?{" "}
                <strong className="text-violet-600 hover:text-violet-800 hover:underline">
                  <Link to={"/register"}>register</Link>
                </strong>
              </p>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};
