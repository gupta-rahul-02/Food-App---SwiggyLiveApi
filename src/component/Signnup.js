import {useFormik} from "formik"
//import { Body } from "./Body"
import {Link } from "react-router-dom"
const Signup = () =>{
    const formik = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        onSubmit:values =>{
            alert(JSON.stringify(values,null,2))
        }
    })

    return(
        <div className="mt-36 bg-orange-300 border-s-2 border-violet-400 w-56 ml-[40%] pb-5">
            <form  className="flex flex-col items-center  " onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input 
                className=""
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
            />
            <label htmlFor="password">Password</label>
            <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            />
            <Link to={"/"}> <button type="submit" className="">Submit</button></Link>
        </form>
        </div>
        
    )
}

export default Signup