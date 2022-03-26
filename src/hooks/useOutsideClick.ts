import { useEffect } from "react";

function useOutsideClick(ref: any, callback: () => void) {

   useEffect(() => {
     function handleClick(e: MouseEvent) {
       if(ref.current && !ref.current.contains(e.target)) {
         callback()
       }
     }

     document.addEventListener('click', handleClick)

     return () => {
       document.removeEventListener('click', handleClick)
     }
   }, [ref, callback])
}

export default useOutsideClick;