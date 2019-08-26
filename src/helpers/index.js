import { useEffect } from "react";

/**
 * Hook that invoke the given callback function if the outside 
 * of the specified ref is clicked
 */
export function useOutsideClickListner({ ref, callback }) {
  /**
   * Invokes the callback if clicked on outside of the element
   */
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  }

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}
