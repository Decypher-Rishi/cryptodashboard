import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { setCurrency } from '../redux/actions/action';
import { useState, useEffect } from 'react';
import Market from './Market';


export default function Header({ setSelectedOptionP }) {
    const [selectedOption, setSelectedOption] = useState('usd');
    const currencies = useSelector((state) => state.allCurrencies.currency);
    const dispatch = useDispatch();
    const fetchCurrencies = async () => {
        const response = await axios.get("api/v3/simple/supported_vs_currencies?x_cg_demo_api_key=CG-rNjhjw1T4bWewkoAKsJra8HW").catch((err)=>{
            console.log("Err",err)
        });
        dispatch(setCurrency(response.data))
    }

useEffect(()=>{
    fetchCurrencies();
    setSelectedOptionP(selectedOption);
},[selectedOption]);
    // console.log(currencies)
    // console.log(selectedOption);

  return (
   <>
     <div className='flex gap-4 mt-4 mr-2  '>
                        <div className='border shadow-lg p-2 bg-white px-6 justify-center rounded focus:outline-none  items-center '>    {/* currencry selector */}
                        
                        
                                <select value={selectedOption} onChange={e => setSelectedOption(e.target.value) } className=' block  w-full  rounded leading-tight focus:outline-none  focus:bg-white '>
                                    <option value="usd">USD</option>
                                    { currencies.map(item => (
                                    <option className='text-black' key={item} value={item}>{item.toUpperCase()}</option>
                                    ))}
                                </select>
                         
                        </div>
                        <div className='flex w-full border shadow-lg p-2 bg-white px-2  rounded focus:outline-none items-center '> {/* search bar */}
                           
                            <form action="">
                                <button className='pl-4 pr-2 text-lg text-slate-400 font-2'><FiSearch /></button>
                                <input className='text-sm font-medium' type="text" placeholder="Search by coin" name="search" />
                            </form>
                        </div>

                    </div>
   </>
  )
}
