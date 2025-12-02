import React from 'react'
import { useFetchGiftsQuery } from '../store'

export default function Totals() {
  const { data, isLoading, Error} = useFetchGiftsQuery();
  console.log(data);

  //get all the gifts that are purchased - filter
  //Total all the gifts that are purchased - reducer

  // const giftsPurchased = data.filter((gift) => {
  //   return !gift.purchased
  // });
  // const notPurchased = data.filter((gift) => {
  //   return !gift.purchased
  // });

  // const totalPurchased = giftsPurchased.reduce((total, gift) => {
  //   return total += gift.price;
  // }, 0);
  // console.log(totalPurchased)

  let content
  if(data){
    content = 
    <>
      <div className="">
        <h3>Total Spent:<span></span></h3>
      </div>
      <div>
        <h3>Still left to buy:<span></span></h3>
      </div>
    </>
    if(isLoading){
      content = <div>Loading...</div>
    }
  }

  return (
    <div className='text-center w-2/3 mt-5'>
      <h2 className='font-bold'>Totals</h2>
      <div className="flex flex-row justify-evenly gap-4 py-4 px-4 border-2">
        {content}
      </div>
    </div>
  )
}
