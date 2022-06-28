import React from "react"

const Catg = () => {
  const data = [
    {
      cateImg: "./images/category/cat-11.png",
      cateName: "Apple",
    },
    {
      cateImg: "./images/category/cat-22.png",
      cateName: "Samasung",
    },
    {
      cateImg: "./images/category/cat-33.png",
      cateName: "Oppo",
    },
    {
      cateImg: "./images/category/cat-44.png",
      cateName: "Vivo",
    },
    {
      cateImg: "./images/category/cat-55.png",
      cateName: "Redimi",
    },
    {
      cateImg: "./images/category/cat-66.png",
      cateName: "Sony",
    },
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1>Brands </h1>
          <h1>Shops </h1>
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
