import Header from "./components/Header";
import GiftForm from "./components/GiftForm";
import GiftList from "./components/GiftList";
import Modal from "./components/Modal"
import { useState } from "react"

function App() {
  //modal state
  const [isOpen, setIsOpen] = useState(true);


  //modal function
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
    <Modal isOpen ={isOpen} onClose={handleClose} />
    <Header />
    <GiftForm />
    <GiftList />
    </>
  )
}

export default App
