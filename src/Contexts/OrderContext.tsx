import {
    ReactNode,
    createContext,
    useState,
  } from 'react'

  type Product = {
    image: string;
    flags: string[];
    title: string;
    description: string;
    quantity: number;
    price: number;
  };

  interface OrderContexType {
    order: Product[]
    setOrder: (data: Product[]) => void
  }

  interface OrderContextProviderProps {
    children: ReactNode
  }

  export const OrderContext = createContext({} as OrderContexType)

  export function OrderContextProvider({
    children,
  }: OrderContextProviderProps) {

    const [order, setOrder] = useState<Product[]>([])

    return (
        <OrderContext.Provider
          value={{order, setOrder}}
        >
          {children}
        </OrderContext.Provider>
      )
  }
