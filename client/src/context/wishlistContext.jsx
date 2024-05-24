import { createContext, useState } from "react";

export const WishlistContext=createContext()
export const WishlistContextProvider=({children})=>{
    let localWishlist=JSON.parse(localStorage.getItem('wishlist'))
    if(!localWishlist){
        localStorage.setItem('wishlist',JSON.stringify([]))
    }
    let [wishlist,setWishlist]=useState([localWishlist||[]])
    return(
        <WishlistContext.Provider value={{wishlist,setWishlist}}>
            {children}
        </WishlistContext.Provider>
    )
}