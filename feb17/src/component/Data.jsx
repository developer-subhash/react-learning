import { useState } from "react";
import MovingIcon from "./MovingIcon";

function Data(){
    const [data, setData] = useState([]);

    let cb = () => {
        const newData = ["data 1", "data 2"] // downloaded 
        setData(newData);
        // setTimeout();
    }
    setTimeout(cb, 5000); // downloading data takes 5 sec,



    return (
        <div>
            { data.length>0 ? data : <MovingIcon /> }
        </div>
    )
}



// function cb1(cb2, cb3){
//     console.log("cb 1");
//     cb2(cb3);
// }

// function cb2(cb){
//     console.log("cb 2");
//     cb()
// }

// function cb3(){
//     console.log("cb 3")
// }

// function cbSuccess(){
//     console.log("success")
// }

// function cbFailure(){
//     console.log("fail")
// }

// let promise = new Promise(cbSuccess, cbFailure);

// promise(cbSuccess, cbFailure).then(()=>{}).catch(()=>{})
export default Data;