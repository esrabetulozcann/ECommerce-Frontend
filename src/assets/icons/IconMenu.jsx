// src/assets/icons/IconMenu.jsx
import { GrUserFemale } from "react-icons/gr";
import { SlUser } from "react-icons/sl";
import { PiBabyCarriage } from "react-icons/pi";
import { RiSofaLine } from "react-icons/ri";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { CiDumbbell } from "react-icons/ci";
import { FaBook } from "react-icons/fa";
import {FaTv} from 'react-icons/fa';



const categoryIcons = {
  'Kadın': <GrUserFemale />,
  'Erkek': <SlUser />,
  'Çocuk': <PiBabyCarriage />,
  'Ev & Yaşam': <RiSofaLine />,
  'Süpermarket': <LiaShoppingBasketSolid />,
  'Kozmetik': <img src="https://cdn.dsmcdn.com/mobile/web-navigation/V2/Kozmetik.svg" alt="Kozmetik" width={20} height={20} />,
  'Ayakkabı & Çanta': <img src="https://cdn.dsmcdn.com/mobile/web-navigation/V2/Ayakkabi_Canta.svg" alt="Ayakkabı & Çanta" width={20} height={20} />,
  'Elektronik': <FaTv />,
  'Spor & Outdoor': <CiDumbbell />,
  'Kitap & Kırtasiye & Hobi': <FaBook />,
  
};

export default categoryIcons;
