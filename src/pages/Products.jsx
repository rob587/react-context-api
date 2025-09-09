import React, {useEffect, useState } from 'react'
import axios from 'axios'
import { useContext} from 'react'
import  {CountContext} from '../contexts/BudgetContext'


import { Link } from 'react-router-dom'


const Products = () => {

  
  const {budgetMode} = useContext(CountContext)

  const [products, setProducts] = useState([])
  
  const url = ("https://fakestoreapi.com/products")
  
  const fetchData = () =>{
    axios.get(url).then((resp)=>{
      setProducts(resp.data)
    })
  }

    useEffect(() => {
    fetchData()
  }, [])

  const filteredProducts = budgetMode === true
  ?products.filter(product=>product.price <= 30)
  :products


  return (
    <div>
      <div className="container mt-5">
        <div className="row g-4">

            {products.map((product)=>{
              return(
            <div className="col-4 d-flex mt-5" key={filteredProducts.id}>
             <div className="card shadow-sm h-100">
                <img className="card-img-top p-3" src={filteredProducts.image}  alt={filteredProducts.description}/>
                <div className="card-body ">
                  <h2 className="card-title "><Link to={`/products/${filteredProducts.id}`}>{filteredProducts.title}</Link></h2>
                </div>
              </div>
           </div>

            )

              
            })}

        </div>
      </div>
    </div>
  )
}

export default Products
