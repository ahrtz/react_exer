import React, { useEffect, useRef } from 'react'

const useVerticalScroll = (height:number) => {
        
    const elref1 = useRef<HTMLDivElement>(null);
    
    
    
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
                // 271을 확인하는건 현재 scroll H 함수에 존재함 
                console.log("clientY :"+e.clientY + "present : " + present)
                console.log(height)
                console.log(( e.clientY <= height+300))
                console.log(e.clientY>=height )
                if(present === 0 && (e.clientY>=height && e.clientY <= height+300)){
                    return;
                }
                
                window.scrollTo({
                    top: (present+Math.floor(e.deltaY/100))*window.innerHeight,
                    left:0,
                    behavior: "smooth"
                }); // 왜 윈도우인지? 
                
            };
            el1.addEventListener("wheel",onWheelVertical);
            return() => el1.removeEventListener("wheel",onWheelVertical);
        }
    },[height])
    
    return elref1;
}

export default useVerticalScroll;