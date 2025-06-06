import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";

const ButtonWhatsapp = ({ phoneNumber, message}) => {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a href={url}  target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}><span className='text-white'><IoLogoWhatsapp /></span></a>
  )
}


export default ButtonWhatsapp
