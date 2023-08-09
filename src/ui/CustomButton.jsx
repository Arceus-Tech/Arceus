import React, {useState} from 'react'

function CustomButton({title}) {

  let [isOver , setIsOver] = useState(false);
  return (

    <div className=' relative cursor-pointer select-none' onMouseEnter={()=>setIsOver(true)}  onMouseLeave={()=>setIsOver(false)}  onMouseUp={()=>setIsOver(true)} onMouseDown={()=>setIsOver(false)}>
       
        <div className= {`${isOver && '-translate-x-1 -translate-y-1'} absolute py-3 px-5 bg-white rounded-md border-2 border-black font-bold transition-all`}>{title}</div>
        <div className=' py-3 px-5 rounded-md bg-indigo-800 border-2 border-indigo-800 font-bold'>{title}</div>
    </div>
    
  )
}

export default CustomButton