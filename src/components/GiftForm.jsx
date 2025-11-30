import { useAddGiftMutation } from "../store"
import { useState } from "react";

export default function GiftForm() {

  const[addGift, results] = useAddGiftMutation();

  //Local state for form
  const[name, setName] = useState("");
  const[price, setPrice] = useState("");
  const[purchased, setPurchased] = useState(false);

  const handleGiftChange = (e) => {
    setName(e.target.value)
  }

  const handlePriceChange = (e) => {
    setPrice(e.target.value)
  }

  const handlePChange = (e) => {
    setPurchased(e.target.checked)
  }


  const handleSubmit = (e) => {
  e.preventDefault();
  const newGift = {
    name,
    price,
    purchased,
  }
  console.log(newGift)
  //trigger network request
  addGift(newGift);
  //reset form to empty string
  setName("");
  setPrice("");
  setPurchased(false);
  }

  const isDisabled = !name || !price;

  //add button class for disabled here
  const buttonClass = "bg-slate-700 text-white p-2 border-none rounded w-2/5 cursor-pointer" + (isDisabled ? " opacity-50 cursor-not-allowed" : " opacity-100")

  return (
    <div className="w-full flex flex-col justify-center items-center py-5">
      <h1>Add Items to the Gift List</h1>
      <form className="flex flex-col gap-2 border-2 border-slate-600 p-4 rounded w-2/3" onSubmit={handleSubmit}>
          <label htmlFor="name">Gift</label>
          <input 
          className="border-2 border-slate-400" 
          onChange={handleGiftChange} 
          value={name} 
          type="text" 
          placeholder="Enter gift" 
          id="name">
          </input>
          <label htmlFor="price">Price</label>
          <input className="border-2 border-slate-400" onChange={handlePriceChange} value={price} type="number" placeholder="Enter price" id="price"></input>
          <legend>Purchased yet?</legend>
          <div>
          <input onChange={handlePChange} checked={purchased} type="checkbox" id="purchased" name="purchased"></input>
          <label htmlFor="purchased">Yes</label>
          </div>
          <button className={buttonClass} disabled={isDisabled} type="submit">Submit</button>
      </form>
    </div>
  )
}
