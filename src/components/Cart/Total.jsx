const Total = ({products}) => {

let sum = products.reduce((total,product)=>{
    return total +  product.price*product.count;
},0)

    return (
    <div className="text-center text-2xl">
        {sum>0 ? `Total: ${sum}` : 'Empty Cart' }
    </div>
  )
}

export default Total