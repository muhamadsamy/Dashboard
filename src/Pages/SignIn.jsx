import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-screen flex items-center justify-center lg:flex-row flex-col ">
      <div className="lg:w-1/4  w-full border-1 rounded-e-xl bg-white ">
          <img
            src={require(`../assets/signup.jpg`)}
            alt="sign up image"
          />
          <div>
             <Link to='/SignUp' className="flex justify-center text-lg font-bold" >you don't havr account ? sign up</Link>
          </div>
        </div>
        <div className="lg:w-1/4  w-full  border-1 rounded-s-xl bg-red-200 ">
          <h1 className=" mt-6 text-3xl font-semibold flex justify-center">Sign In</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={Yup.object({
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
            })}
            onSubmit={(values, { setSubmitting }) => {
              navigate("/users");
             
                setSubmitting(false);
              }
            }
          >
            {(formik) => (
              <form
                className="flex flex-col p-4"
                onSubmit={formik.handleSubmit}
              >
               
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
               
                <button type="submit" className="flex place-self-center  bg-black text-white w-auto py-3 px-10 mt-4 rounded-full  ">Submit</button>
              </form>
            )}
          </Formik>
        </div>
        
      </div>
    </>
  );
}

export default SignIn;
