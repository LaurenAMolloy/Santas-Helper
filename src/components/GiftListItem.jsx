import React from 'react'
import { TiDelete } from "react-icons/ti";
import { TiGift } from "react-icons/ti";
import { useRemoveGiftMutation, useTogglePurchasedMutation } from '../store';

export default function GiftListItem({ gift }) {
  const[removeGift] = useRemoveGiftMutation();
  const[togglePurchased] = useTogglePurchasedMutation();

  const handleRemoveGift = () => {
    console.log("deleting item...")
    removeGift(gift);
  }

  const handleTogglePurchase = () => {
    console.log("toggling...")
    togglePurchased(gift)
  }
  
  const { name, price, purchased } = gift
  

  return (
    <div className="flex justify-between items-center w-80 bg-gray-200 py-1 px-1">
      <div className='flex'>
      <p><span className='font-bold'>Gift: </span>{name}</p>
      <p className="pl-2"><span className='font-bold'>Price: </span>£{price}</p>
      </div>
      <div className='flex flex-row items-center justify-between w-[20%]'>
      <TiDelete onClick={handleRemoveGift} className='w-6 h-6 cursor-pointer' />
      <TiGift 
      onClick={handleTogglePurchase}
      className='w-6 h-6 cursor-pointer' 
      style = {{color: purchased ? "green" : "red"}}  
      />
      </div>
    </div>
  )
}
