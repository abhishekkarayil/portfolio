import React,{useState,useEffect} from 'react'

function Time() {
    const [Timer, setTimer] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTimer(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);
    const formattedTime = Timer.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


  return (
    <div>{formattedTime}</div>
  )
}

export default Time