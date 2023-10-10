import React from 'react'

export default function Exchange() {
    return (
        <>
            <div className=' bg-white mt-4 mr-2 shadow-lg rounded'>

                <div className='p-4 px-8'>Exchange Rates</div>
                <div className='flex p-4 px-10'>
                    <div>
                        <div className='flex pt-2 '>
                            <p className='text-red-600 px-2 my-auto'>Sell</p>
                            <form action="" className='border-2 p-2 rounded-lg  bg-gray-100'>
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
            </div>
        </>
    )
}
