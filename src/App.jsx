import { useState } from "react";
import Nav from "./components/Nav";
import Cart from "./components/Cart/Cart";

const App = () => {

  let [products,setProducts] = useState(
    [
      { id: 0, name: "pepsi", price: 10, count: 1 },
      { id: 1, name: "kranchy", price: 20, count: 2 },
      { id: 2, name: "kola", price: 30, count: 3 },
      { id: 3, name: "chepsy", price: 40, count: 4 },
    ]
  );

  //get for increment and decrement and remove
  let newProducts=products;
  const increment= (id)=>{
    //logic
    newProducts = newProducts.map((product)=>{
      if (product.id == id) {
        product.count+=1;
      }
      return product;
    })

    setProducts(newProducts);  //update using usestate only
  };

  const decrement = (id)=>{
    //logic
    newProducts= newProducts.map((product)=>{
      if (product.id==id) {
        product.count-=1;
      }
      return product;
    })

    //update
    setProducts(newProducts)
  }

  const remove = (id)=>{
    //logic
    newProducts= newProducts.filter((product)=>{
      if (product.id != id) {
        return product;
      }
    })
    //update
    setProducts(newProducts);
  }

  return (
    <>
      <Nav />
      <Cart products={products} setProducts={setProducts} increment={increment} decrement={decrement} remove={remove}  />
    </>
  )
}

export default App