import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Dashboard/Modal.css'
export default function Modal() {

  
    const showToast = () => {
        toast('Reach for a Healthy Treat!', {
            data: {
                title: 'Reach for a Healthy Treat!',
                text: 'We are here again with another article'
            }
        });
    }

  return (
    <div className='myToast'>

<button onClick={showToast}>.</button>
            <ToastContainer />
    </div>
  )
}
