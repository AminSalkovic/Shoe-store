import {ReactNode,createContext,useContext, useState} from 'react'
import MobileDropdown from '../components/MobileDropdown'
import MenDropdown from '../components/pages/men/MenDropdown'
import ShoppingCart from '../components/ShoppingCart'

type ShoppingCartProviderProps={
   children:ReactNode
}

type ShoppingCartContext={
  openShoppingCart:()=>void
  closeShoppingCart:()=>void
  openMobileDropdown:()=>void
  closeMobileDropdown:()=>void
  openMenDropdown:()=>void
  closeMenDropdown:()=>void
}

const ShoppingCartContext=createContext({} as ShoppingCartContext)

export function useShoppingCart(){
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
     
   const[isOpenCart,setIsOpenCart]=useState(false);
   const[isOpenMobileDropdown,setIsOpenMobileDropdown]=useState(false);
   const[isOpenMenDropdown,setIsOpenMenDropdown]=useState(false);


   const openShoppingCart=()=> setIsOpenCart(true);
   const closeShoppingCart=()=>setIsOpenCart(false);
   const openMobileDropdown=()=>setIsOpenMobileDropdown(true);
   const closeMobileDropdown=()=>setIsOpenMobileDropdown(false);
   const openMenDropdown=()=>setIsOpenMenDropdown(true);
   const closeMenDropdown=()=>setIsOpenMenDropdown(false);


    return(
       <ShoppingCartContext.Provider value={{openShoppingCart,closeShoppingCart,openMobileDropdown,
       closeMobileDropdown,openMenDropdown,closeMenDropdown}}> 
         {children}
         <ShoppingCart isOpenCart={isOpenCart}/>
         <MobileDropdown isOpenMobileDropdown={isOpenMobileDropdown}/>
        {isOpenMenDropdown && <MenDropdown/>}
       </ShoppingCartContext.Provider>
    )
}