import {useEffect, useState} from 'react'
export const useModal = () => {
    const closeModal = () => {
        setShow(false)
      };
      const openModal = () => {
        setShow(true)
      }
    const [show,setShow] = useState(false);
    useEffect(()=>{
        setShow(show)
    },[show])
    return {show,openModal,closeModal}
}