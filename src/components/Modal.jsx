import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect } from 'react'

export default function Modal({ isOpen, onClose}) {
    //prevent scrolling with useEffect
    useEffect(() => {
        if(isOpen) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    })

    if(!isOpen) return null;


  return ReactDOM.createPortal(
        <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80">
            <div className='fixed inset-30 bg-white rounded flex flex-col align-center justify-center p-20 w-[2/3]'>
                <p>You better watch out!</p>
                <p>You better not cry!</p>
                <p>You better be good, I'm telling you why</p>
            </div>
        </div>,
    document.getElementById("modal-root")
  );
};
