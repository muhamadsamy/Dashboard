
import { Formik, Form, Field} from "formik";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
function LoginForm() {
    const navigate = useNavigate();
    const handelSubmit=(values)=>{
        localStorage.setItem("username",values.username);
        
        navigate("/users");

    };
    const handleValidation=(values)=>{
        const errors={};
        if (!values.username){
            errors.username="username is required";
        }
        if(!values.password){
            errors.password="password is required";
        }
        return errors;
    };
  
    return (
    <Formik initialValues={{username:"",password:""}}
     onSubmit={handelSubmit}
        validate={handleValidation}
        validateOnBlur={false}>
            {({errors})=>
        <Form className={styles.form}>
        <h1>Welcome!</h1>
        
        <Field type="text" name="username" placeholder="Enter ur name" className={styles.field}/>
        {errors.username && <p className={styles.error}>{errors.username}</p>}
        
        <Field type="password" name="password"  placeholder="*******"  className={styles.field}/>
        {errors.password && <p className={styles.error}>{errors.password}</p>}
        <input type="submit" value="submit" className={styles["submit-button"]} />
        </Form>}
    </Formik>  );
}

export default LoginForm;