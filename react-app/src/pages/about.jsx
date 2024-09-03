import { Link, Navigate } from "react-router-dom";

export default function AboutPage() {
    return (
       <div>
        <h1>About page</h1>
        {/* {<Navigate to={'/'}>Home Page</Navigate>} */}
        <Link to={'/'}>Home Page</Link>
       </div> 
    )
}