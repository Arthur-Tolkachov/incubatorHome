import {RefObject, useEffect} from "react";

function useOutSideClick (ref: RefObject<HTMLInputElement>, fn:(isOpen: boolean) => void) {
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                fn(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, fn]);
}

export default useOutSideClick