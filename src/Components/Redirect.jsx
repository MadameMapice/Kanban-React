import { useEffect } from "react";
import { useNavigate } from "react-router";

function Redirect(props) {

    let navigate =useNavigate()
    useEffect(() => {
        navigate(props.to)

    }, []);

    return <div></div>
    
}

export default Redirect