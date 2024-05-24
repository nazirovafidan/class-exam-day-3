import React, { useContext, useEffect, useState } from 'react'
import './home.scss'
import { Helmet } from "react-helmet";
import { getAll } from '../../sevices/requests';
import { endpoint } from '../../sevices/constants';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BasketContext } from '../../context/basketContext';

const Home = () => {
  const [arrivals, setArrivals] = useState([])
  const {basket,setBasket} = useContext(BasketContext)
  useEffect(()=>{
    getAll(endpoint.arrivals).then((res)=>{
      if(res.data && Array.isArray(res.data.data)){
        setArrivals(res.data.data)
      }
    })
  },[])
  
  
  
  // useEffect(() => {
  //   getAll(endpoint.arrivals).then((res) => {
  //     if (res.data && Array.isArray(res.data.data)) {
  //       setArrivals(res.data.data)
  //     }
  //   })
  // }, [])

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section className='hero'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12">
              <div className='content'>
                <div className='title'>SPRING / SUMMER COLLECTION 2017</div>
                <div className='sub-title'>Get up to 30% Off New Arrivals</div>
                <div className='button'>
                  <button>Shop Now</button></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='categories'>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4">
              <div className="women">
                <div className="img">
                  <img src="https://preview.colorlib.com/theme/coloshop/images/banner_1.jpg" alt="" />
                </div>
                <div className="title">
                  <span>women's</span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4">
              <div className="acc">
                <div className="img">
                  <img src="	https://preview.colorlib.com/theme/coloshop/images/banner_2.jpg" alt="" />
                </div>
                <div className="title">
                  <span>accesorie's</span>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 ">
              <div className="women">
                <div className="img">
                  <img src="	https://preview.colorlib.com/theme/coloshop/images/banner_3.jpg" alt="" />
                </div>
                <div className="title">
                  <span>men's</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='arrivals'>
        <div className="container"> 
          <div className="text">
          <span>New Arrivals</span>
          </div>
          <div className="cards">
            {arrivals && arrivals.map((arrival) => {
              return (
                <div className="card" key={arrival._id}>
                  <div className="card-inner">
                    <div className="img">
                      <img src={arrival.imageSrc} alt="" />
                    </div>
                    <div className="title">
                      <span>{arrival.title}</span>
                    </div>
                    <div className="price">
                      <span>{arrival.price}</span>
                    </div>
                    <div className="button">
                      <button onClick={()=>{
                        const foundItem=basket.find((x)=>x.id==arrival._id)
                        if(foundItem){
                          foundItem.count+=1
                          setBasket([...basket])
                          localStorage.basket
                        }else{
                          const basketProduct={...arrival}
                          basketProduct.count=1
                          setBasket((currentBasket)=>{
                            currentBasket.push(basketProduct)
                            localStorage.setItem('basket',JSON.stringify(currentBasket))
                            return[...currentBasket]
                          })
                        }
                      }}>Add to cart</button>
                      <button onc
                      >Add to wishlist</button>
                    </div>
                  </div>
                </div>)
            })}
          </div>
        </div>
      </section>

      <section className='slider'>
        <div className="text">
          <span>Best Sellers
          </span>
        </div>
        <Swiper className=" mySwiper"
                slidesPerView={5}
                spaceBetween={0}
                pagination={{ 
                  clickable: true,
                }}>
          {arrivals&&arrivals.map((arrival)=>{
            return(
              <SwiperSlide key={arrival._id}>
                <div className="card" >
                  <div className="card-inner">
                    <div className="img">
                      <img src={arrival.imageSrc} alt="" />
                    </div>
                    <div className="title">
                      <span>{arrival.title}</span>
                    </div>
                    <div className="price">
                      <span>{arrival.price}</span>
                    </div>
                    <div className="button">
                      <button>Add to cart</button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </section>

    </div>

  )
}

export default Home