
import Product from "./product"
import React from "react"
const productsJson = require("./../products.json")
const cruzVerde = require("./cruz-verde.jpg")



class App extends React.Component {

  render() {
    return (
      <div className="bodyPage">

        <div className="pageHeader">
          <img className="cruzVerde" src={cruzVerde} alt="Abbes Apotek" />
          <ul className="headerList">
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>

        <div className="page">
          {productsJson.products.map((item) => {
          return <Product
              name={item.name}
              price={item.price}
              type={item.type}
              size={item.size}
              numberInPack={item.numberInPack}
              deliveryTime={item.deliveryTime}
              image={item.image}
              substance={item.substance}
          />
          })}
        </div>

        <footer className="pageFooter"> </footer>

      </div>
    )
  }

}

export default App
