import  { useEffect, useRef, useState } from "react";

interface proptype {
    setTest:(test:number) => void
  }

const useHorizontalScroll=(props:proptype) =>{
    const [windowSize,setWindowSize]  = useState({
        width:window.innerWidth,
        height:window.innerHeight,
    })
    
    const handleResize = () => {
        setWindowSize({
            width:window.innerWidth,
            height:window.innerHeight,
        })
    }

    const elref = useRef<HTMLDivElement>(null);
    
    
    useEffect(()=>{
      const el = elref.current;    
        if(el) {
            
            props.setTest(el.offsetTop);
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
            window.addEventListener("resize",handleResize)
            return() => {
                el.removeEventListener("wheel",onWheel);
                window.removeEventListener("resize",handleResize)

            }
        }
    },[windowSize]);
    return {elref};
    }

    
    

    export {useHorizontalScroll};
    