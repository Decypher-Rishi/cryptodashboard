import React from 'react'

export default function Portfolio() {
    return (
        <>
            <div className=' bg-white mt-4 mr-2 shadow-lg rounded'>

                <div className='flex justify-between p-4 px-8    ' >
                    <div>Portfolio</div>
                    <div><span className='text-gray-400'>Total value</span> $1000</div>
                </div>
                <div><img className='w-[500px] h-[200px]' src="https://p7.hiclipart.com/preview/151/662/425/pie-chart-diagram-computer-icons-circle-graph.jpg" alt="" /></div>
            </div>
        </>
    )
}
