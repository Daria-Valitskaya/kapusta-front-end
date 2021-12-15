import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
const Notification = ({message}) => {
    const notify = () => {toast.error(message, {
      position: "top-center",
      autoClose: 6000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

    return (
      <div>
        <button onClick={notify}>Notify!</button>
        <ToastContainer
          position="top-center"
          autoClose={6000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
}

export default Notification;