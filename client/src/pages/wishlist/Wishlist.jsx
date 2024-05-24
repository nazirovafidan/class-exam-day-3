import React, { useContext } from 'react'
import { WishlistContext } from '../../context/wishlistContext'

const Wishlist = () => {
    const{wishlist,setWishlist}=useContext(WishlistContext)
  return (
    <div>
        <ul>
            {wishlist && wishlist((item)=>{
                return(
                    <li key={item.id}>
                        <span>{item.title}</span>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}

export default Wishlist