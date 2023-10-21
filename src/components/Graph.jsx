import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { setCryptoCurrency } from '../redux/actions/action';
import { useState, useEffect } from 'react';

export default function Graph() {
    
let axiosConfig = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": "*",
    }
  };
    const [selectedCOption, setSelectedCOption] = useState('bitcoin');
    const [selectedGraph, setSelectedGraph] = useState('Line');
    // cosnt [coinData, setCoinData] = useState({
    //     labels: selectedCOption.map()
    // })
    const cryptoCurrencies = useSelector((state) => state.allCurrencies.cryptoCurrency);
    const dispatch = useDispatch();
    const fetchCryptoCurrencies = async () => {
        const response = await axios.get("api/v3/coins/list?x_cg_demo_api_key=CG-rNjhjw1T4bWewkoAKsJra8HW",axiosConfig).catch((err)=>{
            console.log("Err",err)
        });
      
        dispatch(setCryptoCurrency(response.data))
    }

useEffect(()=>{
    fetchCryptoCurrencies();
},[]);
    // console.log(cryptoCurrencies)
    // console.log(selectedCOption)
    // console.log(selectedGraph)
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
                           <div  className='border-2 p-2 rounded-lg  bg-gray-100'  >
                               <select value={selectedCOption} onChange={e => setSelectedCOption(e.target.value)} className=' block  w-full  rounded leading-tight focus:outline-none  bg-gray-100 '>
                               <option  value="" >Cryptocurrency</option>
                               { cryptoCurrencies.map(item => (
                                   <option key={item.id} value={item.name} >{item.name}</option>
                                   ))}
                               </select>
                           </div>
                       </div>
                       <div className='mt-4 mr-6'>
                           <div action="" className='border-2 p-2 rounded-lg bg-gray-100'>
                               <select onChange={e => setSelectedGraph(e.target.value)} className=' block  w-full  rounded leading-tight focus:outline-none  bg-gray-100 '>
                                   <option defaultValue={null} value="someOption">Chart Type</option>
                                   <option value="BarChartHorizontal">Bar Chart Horizontal</option>
                                   <option value="Line">Line</option>
                                   <option value="Bar Chart Vertical">Bar Chart Vertical</option>
                               </select>
                           </div>
                       </div>
                   </div>
                   <div>
                     {/* {
                        if(selectedGraph) == {

                        }
                     } */}
                       <img className='w-full h-[310px] p-4' src="https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                   </div>
               </div>
   </>
  )
}
