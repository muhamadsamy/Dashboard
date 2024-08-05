import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

function SignUp() {
  return (
    <>
      <div className="h-screen flex items-center justify-center lg:flex-row flex-col shadow-2xl">
        <div className="lg:w-1/4  w-full  border-1 rounded-s-xl bg-red-200 ">
          <h1 className=" mt-6 text-3xl font-semibold flex justify-center">Sign Up</h1>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              repassword: "",
            }}
            validationSchema={Yup.object({
              firstName: Yup.string()
                .max(15, "Must be 15 characters or less")
                .required("Required"),
              lastName: Yup.string()
                .max(20, "Must be 20 characters or less")
                .required("Required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(8, "Password must contain at least 8 characters")
                .matches(/(?=.*[0-9])/, "Password must contain a number")
                .matches(
                  /(?=.*[!@#$%^&*()_+|~=`":;',./<>?\[\]])/,
                  "Password must contain a special character"
                )
                .required("Required"),
              repassword: Yup.string().oneOf(
                [Yup.ref("password"), null],
                "Passwords do not match")
              .required("Required"),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {(formik) => (
              <form
                className="flex flex-col p-4"
                onSubmit={formik.handleSubmit}
              >
                <input
                  className="inputStyle"
                  placeholder="First Name"
                  id="firstName"
                  type="text"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div className=" text-red-600 mr-8">{formik.errors.firstName}</div>
                ) : null}

                <input
                  className="inputStyle"
                  placeholder="Last Name"
                  id="lastName"
                  type="text"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div className=" text-red-600 mr-8">{formik.errors.lastName}</div>
                ) : null}
                <input
                  className="inputStyle"
                  placeholder="email"
                  id="email"
                  type="email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className=" text-red-600 mr-8">{formik.errors.email}</div>
                ) : null}

                <input
                  className="inputStyle"
                  placeholder="password"
                  id="password"
                  type="password"
                  {...formik.getFieldProps("password")}
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className=" text-red-600 mr-8">{formik.errors.password}</div>
                ) : null}
                <input
                  className="inputStyle"
                  placeholder="repeat password"
                  id="repassword"
                  type="password"
                  {...formik.getFieldProps("repassword")}
                />
                {formik.touched.repassword && formik.errors.repassword ? (
                  <div className=" text-red-600 mr-8">{formik.errors.repassword}</div>
                ) : null}

                <button type="submit" className="flex place-self-center  bg-black text-white w-auto py-3 px-10 mt-4 rounded-full  ">Submit</button>
              </form>
            )}
          </Formik>
        </div>
        <div className="lg:w-1/4  w-full  border-1 rounded-e-xl bg-white ">
          <img
            className="w-full h-full"
            src={require(`../assets/signup.jpg`)}
            alt="sign up image"
          />
          <Link to={'/'} className="flex justify-center font-bold" >you  have an account? sign in</Link>
        </div>
      </div>
    </>
  );
}

export default SignUp;
