// Hook personalizado do Toastify
import { toast } from "react-toastify";

function useToast (msg, status = null) {
    if(!status){
        toast.success(msg, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
        });
        return;
    }
    if(status === "error"){
        toast.error(msg, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            theme: "light",
        });
        return;
    }
}

export default useToast;