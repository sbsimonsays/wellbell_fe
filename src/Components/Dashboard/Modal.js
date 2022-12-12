import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Dashboard/Modal.css";
export default function Modal({message}) {
  
  const showToast = () => {
    toast(message,  {
        icon: "🔔 ",
      data: {
        title: message,
        text: "We are here again with another article",
      },
    });
  };

  return (
    <div className="myToast">
      <button onClick={showToast}>.</button>
      <ToastContainer
        position="top-center"
      />
    </div>
  );
}
