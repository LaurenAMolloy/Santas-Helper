import React from 'react'
import { TiDelete } from "react-icons/ti";
import { TiGift } from "react-icons/ti";
import { useRemoveGiftMutation } from '../store';

export default function GiftListItem({ gift }) {
  const[removeGift, results] = useRemoveGiftMutation();

  const handleRemoveGift = () => {
    console.log("deleting item...")
    removeGift(gift);
  }
  
  const { name, price } = gift
  return (
    <div className="flex justify-between items-center w-80 bg-gray-200 py-1 px-1">
      <div className='flex'>
      <p><span className='font-bold'>Gift: </span>{name}</p>
      <p className="pl-2"><span className='font-bold'>Price: </span>£{price}</p>
      </div>
      <div className='flex flex-row items-center'>
      <TiDelete onClick={handleRemoveGift} className='w-6 h-6' />
      <TiGift className='w-6 h-6' />
      </div>
    </div>
  )
}
