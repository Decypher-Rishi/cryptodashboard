import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
import { setMarketCap } from '../redux/actions/action';
import { useEffect } from 'react';

export default function Market({ selectedOptionP }) {
    const timesToShow = 7;


    // const [selectedMarket, setSelectedMarket] = useState('');
    const cryptoMarkets = useSelector((state) => state.allCurrencies.cryptoMarket);
    const dispatch = useDispatch();

    const fetchCryptoMarket = async () => {

        const response = await axios.get(`api/v3/coins/markets?vs_currency=${selectedOptionP}&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en&x_cg_demo_api_key=CG-rNjhjw1T4bWewkoAKsJra8HW`).catch((err) => {
            console.log("Err", err)
        });

        dispatch(setMarketCap(response.data));

    }

    useEffect(() => {
        fetchCryptoMarket();

    }, [selectedOptionP]);



    return (
        <>
            <div className='w-2/6 mt-4 border shadow-lg p-2 bg-white px-2 justify-center rounded focus:outline-none  items-center'>

                <div>
                    <h1 className='font-base p-4 w-auto text-xl font-semibold mr-2'>Cryptocurrency by market cap</h1>
                </div>
                <div >
                    {cryptoMarkets.slice(0, timesToShow).map((item, index) => (

                        <div key={index} className='flex  justify-between p-4 border-t-2'>
                            <div >
                                <h2 className='text-base'>{item.name}</h2>
                                <h3 className='text-sm text-slate-500'>Mtk.Cap {item.market_cap}</h3>
                            </div>
                            <div >
                                {
                                    item.price_change_percentage_24h > 0 ? (<h3 className='text-base text-green-700'>{(item.price_change_percentage_24h).toFixed(1)}%</h3>) : (<h3 className='text-base text-red-700'>{(item.price_change_percentage_24h).toFixed(1)}%</h3>)
                                }

                            </div>

                        </div>
                    ))}


                </div>
            </div>
        </>
    )
}
