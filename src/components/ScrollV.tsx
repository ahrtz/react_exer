import React, { useEffect, useRef } from 'react'

const useVerticalScroll = () => {
        
    const elref1 = useRef<HTMLDivElement>(null);
    // const [pageNum,setPageNum] = useState(0);
    
    
    useEffect(() => {
        const el1 = elref1.current;


        if (el1){
            
            const onWheelVertical = (e:WheelEvent) => {
                
                e.preventDefault();
                
                if (e.deltaY ===0) {
                    return;
                }
                // 현재 페이지 확인
                const present = Math.floor(window.scrollY / window.innerHeight)
                // 단순 첫 페이지용 
                console.log()
                if(present === 0 && (e.clientY>=271 && e.clientY <= 571)){
                    return;
                }

                //document.documentElement.scrollTop 페이지 최상단위치
                window.scrollTo({
                    top: (present+Math.floor(e.deltaY/100))*window.innerHeight,
                    left:0,
                    behavior: "smooth"
                }); // 왜 윈도우인지? 
                
            };
            el1.addEventListener("wheel",onWheelVertical);
            return() => el1.removeEventListener("wheel",onWheelVertical);
        }
    },[])
    
    return elref1;
}

export default useVerticalScroll;