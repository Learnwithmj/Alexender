import React, { useState, useEffect } from "react";
import axios from "axios";

function Fetch() {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  useEffect(() => {
    const fetchData = async (productResponse, categoryResponse) => {
    try {
      productResponse = await axios.get("https://fakestoreapi.com/products")
      setProducts(productResponse.data);

      categoryResponse = await axios.get("https://fakestoreapi.com/products/categories")
      setCategories(categoryResponse.data);
      
    } catch (error) {
      console.error("Error fetching data", error);
    }
    
};
fetchData();
}, []);
  return (
<>
<div>
      <h2>Categories</h2>
      <ul>
        {categories?.map((category) => (
          <li key={category.id}>{category}</li>
        ))}
      </ul>
    </div>

      <div className="w-full pt-20 ">


        <div className="w-[95%] flex flex-wrap m-auto">

        {products?.map((prod) => (
          
          <li key={prod.id} className="m-auto w-[49%]  md:w-auto">
            <img src={prod.image} alt={prod.name} className=" md:w-52 md:h-72 w-[100%] h-52  shadow-sm  shadow-slate-400" />
          </li>
        ))}
        </div>
      </div>
    </>  
);
}

export default Fetch;
