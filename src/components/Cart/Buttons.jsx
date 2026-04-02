const Buttons = ({products,setProducts }) => {

  const reset = ()=>{
    //get
    let counterRest = products;
    //logic
    counterRest= products.map((product)=>({
    id: product.id,
    name: product.name,
    price: product.price,
    count: 1
  }))
    //update
    setProducts(counterRest);
  }

  const empty = ()=>{
    setProducts([]);
  }

  return (
      <div className="flex gap-4 items-center justify-center ">
        <button className="btn btn-accent">D/L</button>
        <button className="btn btn-accent" onClick={()=>reset()}>RESET</button>
        <button className="btn btn-accent" onClick={()=>empty()}>EMPTY</button>
      </div>
  )
}

export default Buttons;