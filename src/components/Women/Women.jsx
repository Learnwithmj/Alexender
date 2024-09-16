import React from 'react';
import Header from '../Header/Header';
import { crowsel } from '../../database';
import { bigdeal, mencategory, topbrandsmen, menluxe, indianwear, sportswear,footwear,accessories} from '../../database';

import WomenCrowsel from '../Home/Maincrowsel';
import Categories from "../Home/Categories";
import Cstmcategories from "../Men/Cstmcategory";
import Categorycrowselmen from '../Men/Categorycrowselmen';



function Women() {
  return (
  <>
  <Header />
   <WomenCrowsel images ={crowsel.women}/>
   <Categorycrowselmen bigdeal = {bigdeal} head ="BIGGEST DEALS ON TOP BRANDS"/>
    <Cstmcategories category={mencategory} head="SHOP BY CATEGORY" topclass = "w-[14%]" cstmclass = "gap-7"/>
    <Categories category={topbrandsmen} head="EXPLORE TOP BRANDS" topclass ="w-[16.8%]" cstmclass= "gap-7" />
    <Cstmcategories category={menluxe} head="ALEXENDER LUXE" topclass = "w-[14%]" cstmclass = "gap-7" />
    <Categories category={indianwear} head="TRENDING IN INDIAN WEAR" topclass ="w-[16.7%]" cstmclass = "gap-7" />
    <Categories category={sportswear} head="TRENDING IN SPORTS WEAR" topclass ="w-[16.7%]" cstmclass = "gap-7" />
    <Categories category={footwear} head="TRENDING IN FOOTWEAR" topclass ="w-[16.7%]" cstmclass = "gap-7"  />
    <Categories category={accessories} head="TRENDING IN ACCESSORIES" topclass ="w-[16.7%]" cstmclass = "gap-7" />
  </>
  )
}

export default Women
