import { useState, useCallback } from "react";

const useAlert = ()=>{
    const [alertMessage, setAlertMessage] = useState({
        show: false,
        type: null,
        message: ""
    })

    const showAndHide = useCallback(
      (type, message) => {
        setAlertMessage({show:true, type, message})

        setTimeout(() => {
            setAlertMessage((prev)=>({...prev, show:false}))
        }, 3000);
      },
      [second],
    )

    return {alertMessage, showAndHide}
    
}

export default useAlert