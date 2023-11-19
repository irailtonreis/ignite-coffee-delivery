import {
    ReactNode,
    createContext,
    useState,
  } from 'react'

  export type Product = {
    id: string;
    image: string;
    flags: string[];
    title: string;
    description: string;
    quantity: number;
    price: number;
  };

  interface OrderContexType {
    order: Product[]
    paymentType: string
    setOrder: React.Dispatch<React.SetStateAction<Product[]>>
    setPaymentType: (card: CardType) => void,
    addProduct: (product: Product) => void;
    removeProduct: (product: Product) => void;
  }

  export enum CardType {
    Credit = 'CREDIT',
    Debit = 'DEBIT',
    Cash = 'CASH',
  }

  interface OrderContextProviderProps {
    children: ReactNode
  }

  export const OrderContext = createContext({} as OrderContexType)

  export function OrderContextProvider({
    children,
  }: OrderContextProviderProps) {

    const [order, setOrder] = useState<Product[]>([])
    const [paymentType, setPaymentType] = useState(CardType.Debit)
    console.log("🚀 ~ file: OrderContext.tsx:32 ~ order:", order)

    const addProduct = (product: Product) => {
      const exist = order.find((item) => item.id === product.id);
      if (exist) {
        setOrder(
          order.map((x) =>
            x.id === product.id ? { ...exist, quantity: exist.quantity + 1 } : x
          )
        );
      } else {
        setOrder([...order, { ...product, quantity: 1 }]);
      }
    };

    const removeProduct = (product:Product) => {
      const exist = order.find((x) => x.id === product.id);
      if (exist) {
        const removeProduct = order.filter((x) => x.id !== product.id)
        setOrder(()=>removeProduct);
      } 
    };
    return (
        <OrderContext.Provider
          value={{order, paymentType, setPaymentType, setOrder, addProduct, removeProduct}}
        >
          {children}
        </OrderContext.Provider>
      )
  }
