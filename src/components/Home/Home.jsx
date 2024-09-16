import React from "react";
import Header from "../Header/Header";
import HomeCrowsel from "./Maincrowsel";
import CategoryCrowsel from "./Categorycrowsel";
import { crowsel, brandcarousel, homecategory } from "../../database";
import Categories from "./Categories";

function Home() {
  return (
    <>
      <Header />
      <HomeCrowsel images={crowsel.home} />
      
      <CategoryCrowsel categories ={brandcarousel.MedalWorthybrands} head="MEDAL WORTHY BRANDS TO BAG
"/>
      <CategoryCrowsel categories ={brandcarousel.Globalbrand} head="GRAND GLOBAL BRANDS"/>
    <Categories category={homecategory} head="SHOP BY CATEGORY" />
    </>
  );
}

export default Home;
