import {
    ReactNode,
    createContext,
    useState,
  } from 'react'

  export type Product = {
    image: string;
    flags: string[];
    title: string;
    description: string;
    quantity: number;
    price: number;
  };

  interface OrderContexType {
    order: Product[]
    setOrder: React.Dispatch<React.SetStateAction<Product[]>>
  }

  interface OrderContextProviderProps {
    children: ReactNode
  }

  export const OrderContext = createContext({} as OrderContexType)

  export function OrderContextProvider({
    children,
  }: OrderContextProviderProps) {

    const [order, setOrder] = useState<Product[]>([])
    console.log("🚀 ~ file: OrderContext.tsx:32 ~ order:", order)

    return (
        <OrderContext.Provider
          value={{order, setOrder}}
        >
          {children}
        </OrderContext.Provider>
      )
  }
