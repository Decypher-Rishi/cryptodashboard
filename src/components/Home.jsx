import React from 'react'
import { FiSearch } from 'react-icons/fi'
import Graph from './Graph'
import Portfolio from './Portfolio'
import Exchange from './Exchange'
import Market from './Market'

export default function Home() {
    return (
        <>

            <div className='m-4 md:flex'> {/* main div */}
               
                <div className='w-4/6'>
                    <div className='flex gap-4 mt-4 mr-2  '>
                        <div className='border shadow-lg p-2 bg-white px-6 justify-center rounded focus:outline-none  items-center '>    {/* currencry selector */}
                        
                            <form action="">
                                <select className=' block  w-full  rounded leading-tight focus:outline-none  focus:bg-white '>
                                    <option value="someOption">USD</option>
                                    <option value="otherOption">INR</option>
                                </select>
                            </form>
                        </div>
                        <div className='flex w-full border shadow-lg p-2 bg-white px-2  rounded focus:outline-none items-center '> {/* search bar */}
                           
                            <form action="">
                                <button className='pl-4 pr-2 text-lg text-slate-400 font-2'><FiSearch /></button>
                                <input className='text-sm font-medium' type="text" placeholder="Search by coin" name="search" />
                            </form>
                        </div>

                    </div>
                    <Graph/>
                    {/* <div className='bg-white mt-4 mr-2 shadow-lg rounded'>   
                   
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
                    </div>  graph */}
                    <div className='flex justify-between'>
                        {/* <div className=' bg-white mt-4 mr-2 shadow-lg rounded'>    
                       
                            <div className='flex justify-between p-4 px-8    ' >
                                <div>Portfolio</div>
                                <div><span className='text-gray-400'>Total value</span> $1000</div>
                            </div>
                            <div><img className='w-[500px] h-[200px]' src="https://p7.hiclipart.com/preview/151/662/425/pie-chart-diagram-computer-icons-circle-graph.jpg" alt="" /></div>
                        </div> portfolio */}
                        <Portfolio/>
                        {/* <div className=' bg-white mt-4 mr-2 shadow-lg rounded'> 
                           
                            <div className='p-4 px-8'>Exchange Rates</div>
                            <div className='flex p-4 px-10'>
                                <div>
                                    <div className='flex pt-2 '>
                                        <p className='text-red-600 px-2 my-auto'>Sell</p>
                                        <form action=""  className='border-2 p-2 rounded-lg  bg-gray-100'>
                                            <select className=' block  w-[90px]  rounded leading-tight focus:outline-none  bg-gray-100 '>
                                             
                                                <option value="someOption">Bitcoin</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div className='flex pt-2' >
                                        <p className='text-green-600 px-2 my-auto'>Buy</p>
                                        <form action="" className='border-2 p-2 rounded-lg  bg-gray-100'>
                                            <select className=' block  w-[90px]  rounded leading-tight focus:outline-none  bg-gray-100 '>
                                          
                                                <option value="someOption">Etheruem</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>
                                <div className='px-10'>
                                    <p className='text-gray-400 text-sm'>Enter Value</p>
                                    <form action="" className='border-2 rounder'>
                                        <input className='text-sm my-auto p-2 font-medium' type="text" placeholder="Avl:0.002BTC" name="search" />
                                    </form>
                                    <p className='text-green-600 pt-2'>23000 Eth</p>
                                </div>
                            </div>
                            <div className='flex justify-center'><button className='bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Exchange</button></div>
                        </div> exchange rates */}
                        <Exchange/>
                    </div>
                </div>
                {/* <div className='w-2/6 mt-4 border shadow-lg p-2 bg-white px-2 justify-center rounded focus:outline-none  items-center'> 
                   
                    <div>
                        <h1 className='font-base p-4 w-auto text-xl font-semibold mr-2'>Cryptocurrency by market cap</h1>
                    </div>
                    <div >
                        <div className='flex  justify-between p-4 border-t-2'>
                            <div >
                                <h2 className='text-base'>Tether</h2>
                                <h3 className='text-sm text-slate-500'>Mtk.Cap $192032</h3>
                            </div>
                            <div >
                                <h3 className='text-base text-green-700'>2.20%</h3>
                            </div>

                        </div>
                        <div className='flex justify-between p-4 border-t-2'>
                            <div>
                                <h2 className='text-base'>Bitcoin</h2>
                                <h3 className='text-sm text-slate-500'>Mtk.Cap $192032</h3>
                            </div>
                            <div>
                                <h3 className='text-base text-red-700'>2.20%</h3>
                            </div>

                        </div><div className='flex justify-between p-4 border-t-2'>
                            <div>
                                <h2 className='text-base'>Tether</h2>
                                <h3 className='text-sm text-slate-500'>Mtk.Cap $192032</h3>
                            </div>
                            <div>
                                <h3 className='text-base text-green-700'>2.20%</h3>
                            </div>

                        </div><div className='flex justify-between p-4 border-t-2'>
                            <div>
                                <h2 className='text-base'>Tether</h2>
                                <h3 className='text-sm text-slate-500'>Mtk.Cap $192032</h3>
                            </div>
                            <div>
                                <h3 className='text-base text-green-700'>2.20%</h3>
                            </div>

                        </div><div className='flex justify-between p-4 border-t-2'>
                            <div>
                                <h2 className='text-base'>Tether</h2>
                                <h3 className='text-sm text-slate-500'>Mtk.Cap $192032</h3>
                            </div>
                            <div>
                                <h3 className='text-base text-green-700'>2.20%</h3>
                            </div>

                        </div><div className='flex justify-between p-4 border-t-2'>
                            <div>
                                <h2 className='text-base'>Tether</h2>
                                <h3 className='text-sm text-slate-500'>Mtk.Cap $192032</h3>
                            </div>
                            <div>
                                <h3 className='text-base text-green-700'>2.20%</h3>
                            </div>

                        </div><div className='flex justify-between p-4 border-t-2'>
                            <div>
                                <h2 className='text-base'>Tether</h2>
                                <h3 className='text-sm text-slate-500'>Mtk.Cap $192032</h3>
                            </div>
                            <div>
                                <h3 className='text-base text-green-700'>2.20%</h3>
                            </div>

                        </div>

                    </div>
                </div>  market cap */}
                <Market/>
            </div>

        </>
    )
}
