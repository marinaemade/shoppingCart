import Buttons from "./Buttons"
import CartItem from "./CartItem"

const Cart = ({products ,setProducts, increment,decrement,remove,reset,empty}) => {
  return (
    <div className="h-screen text-center space-y-4">
      <h1 className="text-2xl fw-bold pb-3">Your Cart </h1>

      <Buttons   products={products} setProducts={setProducts}/>

      {products.map((product)=>(
        <CartItem product={product} key={product.id} increment={increment} decrement={decrement} remove={remove} />
      ))}

      <h1 className="text-2xl fw-bold pt-3">Total: $500</h1>
    </div>
    
  )
}

export default Cart