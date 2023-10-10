import React from 'react'

export default function Graph() {
  return (
   <>
     <div className='bg-white mt-4 mr-2 shadow-lg rounded'>     {/* graph */}
                   
                   <div className='flex justify-end'>
                       <div className='mt-4 mr-6 '>
                           <button className='border-2 p-1 px-2 mr-1 rounded-lg bg-gray-100'>1D</button>
                           <button className='border-2 p-1 px-2 mr-1 rounded-lg bg-gray-100'>1W</button>
                           <button className='border-2 p-1 px-2 mr-1 rounded-lg bg-gray-100'>1M</button>
                           <button className='border-2 p-1 px-2 mr-1 rounded-lg bg-gray-100'>6D</button>
                           <button className='border-2 p-1 px-2 mr-1 rounded-lg bg-gray-100'>1Y</button>
                           <button className='border-2 p-1 px-2 mr-1 rounded-lg bg-gray-100'>C</button>
                       </div>
                       <div className='mt-4 mr-2'>
                           <form action="" className='border-2 p-2 rounded-lg  bg-gray-100'  >
                               <select className=' block  w-full  rounded leading-tight focus:outline-none  bg-gray-100 '>
                                   <option value="someOption">Cryptocurrency</option>

                               </select>
                           </form>
                       </div>
                       <div className='mt-4 mr-6'>
                           <form action="" className='border-2 p-2 rounded-lg bg-gray-100'>
                               <select className=' block  w-full  rounded leading-tight focus:outline-none  bg-gray-100 '>
                                   <option value="someOption">Chart Type</option>

                               </select>
                           </form>
                       </div>
                   </div>
                   <div>
                       <img className='w-full h-[310px] p-4' src="https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                   </div>
               </div>
   </>
  )
}
