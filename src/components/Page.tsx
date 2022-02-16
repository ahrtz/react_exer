import React from 'react'
interface PageText{
    text:String
}


const Page = (props:PageText) => {
  return (
    <div className='bodyarea'>
        <h1>내용내용 {props.text}</h1>
    </div>
  )
}

export default Page