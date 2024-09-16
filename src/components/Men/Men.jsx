import React from 'react';
import Header from '../Header/Header';
import MenCrowsel from '../Home/Maincrowsel';
import { crowsel } from '../../database';
import Categorycrowselmen from './Categorycrowselmen';
import { bigdeal, mencategory, topbrandsmen, menluxe, indianwear, sportswear,footwear,accessories} from '../../database';
import Categories from "../Home/Categories"
import Cstmcategories from './cstmcategory';


function Men() {
  return (

    <>
    <Header />
    <MenCrowsel images = {crowsel.men}/>
    <Categorycrowselmen bigdeal = {bigdeal} head ="BIGGEST DEALS ON TOP BRANDS"/>
    <Cstmcategories category={mencategory} head="SHOP BY CATEGORY" topclass = "w-[14%]" cstmclass = "gap-7"/>
    <Categories category={topbrandsmen} head="EXPLORE TOP BRANDS" topclass ="w-[16.8%]" cstmclass= "gap-7" />
    <Cstmcategories category={menluxe} head="ALEXENDER LUXE" topclass = "w-[14%]" cstmclass = "gap-6" />
    <Categories category={indianwear} head="TRENDING IN INDIAN WEAR" topclass ="w-[16.7%]" cstmclass = "gap-7" />
    <Categories category={sportswear} head="TRENDING IN SPORTS WEAR" topclass ="w-[16.7%]" cstmclass = "gap-7" />
    <Categories category={footwear} head="TRENDING IN FOOTWEAR" topclass ="w-[16.7%]" cstmclass = "gap-7"  />
    <Categories category={accessories} head="TRENDING IN ACCESSORIES" topclass ="w-[16.7%]" cstmclass = "gap-7" />

    </>
  )
}

export default Men
