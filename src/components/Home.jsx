import React from 'react'
import { FiSearch } from 'react-icons/fi'

export default function Home() {
    return (
        <>

            <div className='m-4 md:flex'>
                {/* main div */}
                <div className='w-4/6'>
                    <div className='flex gap-4 mt-4 mr-2  '>
                        <div className='border shadow-lg p-2 bg-white px-6 justify-center rounded focus:outline-none  items-center '>
                            {/* currencry selector */}
                            <form action="">
                                <select className=' block  w-full  rounded leading-tight focus:outline-none  focus:bg-white '>
                                    <option value="someOption">USD</option>
                                    <option value="otherOption">INR</option>
                                </select>
                            </form>
                        </div>
                        <div className='flex w-full border shadow-lg p-2 bg-white px-2  rounded focus:outline-none items-center '>
                            {/* search bar */}
                            <form action="">
                                <button className='pl-4 pr-2 text-lg text-slate-400 font-2'><FiSearch /></button>
                                <input className='text-sm font-medium' type="text" placeholder="Search by coin" name="search" />
                            </form>
                        </div>

                    </div>
                    <div className='bg-white mt-4 mr-2 shadow-lg rounded'>
                        {/* graph */}
                        <div className='flex justify-end'>
                            <div className='mt-4 mr-6'>
                                <button className='border-2 p-1 mr-1 rounded-lg bg-gray-100'>1D</button>
                                <button className='border-2 p-1 mr-1 rounded-lg bg-gray-100'>1W</button>
                                <button className='border-2 p-1 mr-1 rounded-lg bg-gray-100'>1M</button>
                                <button className='border-2 p-1 mr-1 rounded-lg bg-gray-100'>6D</button>
                                <button className='border-2 p-1 mr-1 rounded-lg bg-gray-100'>1Y</button>
                                <button className='border-2 p-1 mr-1 rounded-lg bg-gray-100'>C</button>
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
                            <img  className='w-full h-[310px] p-4' src="https://images.pexels.com/photos/6770609/pexels-photo-6770609.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className=' bg-white mt-4 mr-2 shadow-lg rounded'>
                            {/* portfolio */}
                            <img className='p-4 w-[500px] h-[250px]' src="https://images.pexels.com/photos/6476787/pexels-photo-6476787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                        <div className=' bg-white mt-4 mr-2 shadow-lg rounded'>
                            {/* exchange rates */}
                            <img className='p-4 w-[500px] h-[250px]' src="https://images.pexels.com/photos/7948036/pexels-photo-7948036.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>
                </div>
                <div className='w-2/6 mt-4 border shadow-lg p-2 bg-white px-2 justify-center rounded focus:outline-none  items-center'>
                    {/* market cap */}
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
                </div>
            </div>

        </>
    )
}
