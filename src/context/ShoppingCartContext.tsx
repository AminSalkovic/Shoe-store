import {ReactNode,createContext,useContext, useState} from 'react'
import MobileDropdown from '../components/MobileDropdown'
import { useLocalStorage } from '../components/hooks/useLocalStorage'
import ShoppingCart from '../components/ShoppingCart'

type ShoppingCartProviderProps={
   children:ReactNode
}

type CartItem={
  id:number
  quantity:number
}

type ShoppingCartContext={
  openShoppingCart:()=>void
  closeShoppingCart:()=>void
  openMobileDropdown:()=>void
  closeMobileDropdown:()=>void
  cartItems:CartItem[],
  getItemQuantity:(id:number)=>void,
  removeFromCart:(id:number)=>void,
  increaseCartQuantity:(id:number)=>void
  decreaseCartQuantity:(id:number)=>void
  cartQuantity:number
}



const ShoppingCartContext=createContext({} as ShoppingCartContext)

export function useShoppingCart(){
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps){
     
  const [cartItems,setCartItems]=useLocalStorage<CartItem[]>('shopping-cart',[])

   const[isOpenCart,setIsOpenCart]=useState(false);
   const[isOpenMobileDropdown,setIsOpenMobileDropdown]=useState(false);
  


   const openShoppingCart=()=> setIsOpenCart(true);
   const closeShoppingCart=()=>setIsOpenCart(false);
   const openMobileDropdown=()=>setIsOpenMobileDropdown(true);
   const closeMobileDropdown=()=>setIsOpenMobileDropdown(false);

  
   const cartQuantity=cartItems.reduce((quantity,item)=>item.quantity + quantity,0)

   function getItemQuantity(id:number){
       return cartItems.find((item  => item.id === id))?.quantity || 0
     }

   function increaseCartQuantity(id:number){
    setCartItems(currItems => {
     if(currItems.find(item => item.id === id)==null){
       return [...currItems,{id,quantity:1}]
     }else{
       return currItems.map(item=>{
         if(item.id===id){
           return {...item,quantity:item.quantity+1}
         }else{
           return item
         }
       })
     }
    })
 }

 function decreaseCartQuantity(id:number){
  setCartItems(currItems => {
   if(currItems.find(item => item.id === id)?.quantity===1){
     return currItems.filter(item=>item.id !== id)
   }else{
     return currItems.map(item=>{
       if(item.id===id){
         return {...item,quantity:item.quantity - 1}
       }else{
         return item
       }
     })
   }
  })
}

 function removeFromCart(id:number){
  setCartItems(currItems =>{
     return currItems.filter(item=>item.id !== id)
  })
}



    return(
       <ShoppingCartContext.Provider value={{openShoppingCart,closeShoppingCart,openMobileDropdown,
       closeMobileDropdown,cartItems,cartQuantity,
       removeFromCart,
       increaseCartQuantity,decreaseCartQuantity,getItemQuantity}}> 
         {children}
         <ShoppingCart isOpenCart={isOpenCart}/>
         <MobileDropdown isOpenMobileDropdown={isOpenMobileDropdown}/>
       </ShoppingCartContext.Provider>
    )
}