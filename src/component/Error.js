import {useRouteError} from "react-router-dom"
const Error = () =>{
    let error = useRouteError()
    const{status, statusText} = error
    return (
        <>
        <h1>Error Occured</h1>
        <h3>status code: {status} </h3>
        <h3>message : {statusText}</h3>
        </>
    )
}

export default Error