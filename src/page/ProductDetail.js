import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  let {id} = useParams();
  const [product, setProduct]=useState(null);
  const getProductDetail=async()=> {
    let url = `https://my-json-server.typicode.com/3dodam/hm/products/${id}`;
    let responsive = await fetch(url);
    let data=await responsive.json();
    //await은 비동기화를 시켜주어야함
    //=async()=> 이걸로 비동기화 하는 거임
    //둘은 짝지!
    console.log(data)
    setProduct(data);
  }
  useEffect(()=>{
  getProductDetail();
  },[])

  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='col-7 d-flex justify-content-end'>
            <img src={product?.img}/>
        </div>
        <div className='col-5 ps-5 pt-3 d-flex flex-column gap-2'>
          <div className='fw-bolder'>{product?.title}</div>
          <div>{product?.price}</div>
          <div>{product?.choice?"Conscious choice":""}</div>
          <div>
            {/* <select className='form-select' aria-label='Default select example'>
              <option selected>사이즈</option>
              {product?.size.length > 0 &&
              product.size.map((item)=>{
                return <option value={item}>{item}</option>;
              })}
            </select> */}
          </div>
          <button className='btn btn-primary'>추가</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail