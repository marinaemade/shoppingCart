const CartItem = ({product:{id,name,price,count} , increment,decrement,remove}) => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap items-center container mx-auto gap-4 sm:justify-evenly bg-slate-200/70 dark:bg-slate-800/70 rounded p-4">

      <div className="flex gap-4">
        <h1>{name}</h1> 
        <h1>${price}</h1> 
        <h1> count: {count}</h1> 
        
      </div>

      <div className="flex gap-4">
        <button className="btn btn-success"
                onClick={()=> increment(id)}
        >+</button>
        <button className="btn btn-error" disabled={count <= 1} onClick={()=> decrement(id)}>-</button>
        <button className="btn btn-warning" onClick={()=>remove(id)}>x</button>
      </div>

      <div>
        Total: {price*count}$
      </div>

    </div>
  )
}

export default CartItem