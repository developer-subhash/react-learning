import { useState } from "react";

function getTime(){
    let today = new Date();
    let time = today.getHours() + " : " + today.getMinutes() + " : " + today.getSeconds();
    return time;
}

function Timer(){
    const time = getTime();
    const [date, setTime] = useState(time);

    let cb = () => {
        // console.log("current date is " + Date());
        setTime(getTime());
    }
    setInterval(cb, 1000); // asynchronous method


    return (
        <div>
            {date}
        </div>
    )
}

export default Timer;