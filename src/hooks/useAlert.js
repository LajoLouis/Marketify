import { useState } from "react";

const useAlert = ()=>{
    const [alertMessage, setAlertMessage] = useState({
        show: false,
        type: null,
        message: ""
    })

    const showAndHide = (type, message) => {
        setAlertMessage({show:true, type, message})

        setTimeout(() => {
            setAlertMessage((prev)=>({...prev, show:false}))
        }, 3000);
      }
    
    

    return {alertMessage, showAndHide}
    
}

export default useAlert