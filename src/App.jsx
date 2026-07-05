import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('olive')

  return(

    <div style={{background:color}} className='h-screen pt-160'>

   <div className=' flex flex-row w-fit
     p-3 rounded-4xl bg-gray-600 mx-150 '> 
  
      <button className='text-red-500  rounded-3xl p-2 bg-red-900 '
     onClick={()=>setColor('red')}>RED</button> 
     
  
     <button  className='text-green-500  bg-green-900 rounded-3xl p-2'
     onClick={()=>setColor('green')}>GREEN</button>

      <button className='text-blue-500  bg-blue-900 rounded-3xl p-2'
      onClick={()=>setColor('blue')}>BLUE</button>

       <button className='text-gray-500  bg-black rounded-3xl p-2'
       onClick={()=>setColor('black')}>Black</button>

       <button className='text-orange-500  bg-orange-900 rounded-3xl p-2'
       onClick={()=>setColor('orange')}>Orange</button>

        <button className='text-black  bg-white rounded-3xl p-2'
       onClick={()=>setColor('white')}>White</button>
    
   </div>
   </div>
  )
}

      
export default App