import { FaCartShopping } from "react-icons/fa6";
const CartItemsCount = ({products}) => {
    const totalTypes = products.length;
  return (
    <div className="relative text-2xl">
        <FaCartShopping className="text-3xl mr-3"/>
        <span className="absolute -top-2 -right-0 bg-teal-300 text-slate-900 text-xs px-2 rounded-full">
          {totalTypes}
        </span>
    </div>
  )
}

export default CartItemsCount