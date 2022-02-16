import  { useEffect, useRef } from "react";



const useHorizontalScroll=() =>{
    
    const elref = useRef<HTMLDivElement>(null);
    
    
    useEffect(()=>{
      const el = elref.current;    
        if(el) {
            
            const onWheel = (e:WheelEvent) => {
                if (e.deltaY ===0) {return;}
                
                el.scrollTo({
                    top: 0,
                    left: el.scrollLeft + (e.deltaY)*3.24,// 가로로 이동할 크기 
                    behavior: "smooth"
                });
                e.preventDefault();
                console.log(e.deltaY)
  
            };
            el.addEventListener("wheel",onWheel);
            return() => el.removeEventListener("wheel",onWheel);
        }
    },[]);
    return elref;
    }

    
    

    export {useHorizontalScroll};
    