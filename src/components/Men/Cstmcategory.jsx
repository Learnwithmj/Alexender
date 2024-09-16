import React from 'react'

function Cstmcategories({category, head, topclass, cstmclass}) {
  return (
    <>
     <h1 className=" text-2xl font-bold  text-left pl-8 py-16">{head}</h1>
     <div className='w-[100%] gap-1 h-aut0  m-auto justify-center '>
        <div className={`flex flex-wrap justify-center ${cstmclass}`}>
{category.map((categories)=>(
    <div className={`${topclass}`}>
        <img src={categories}/>
    </div>
))}
        </div>
        </div> 
    </>
  )
}

export default Cstmcategories
