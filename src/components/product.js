import React from "react"
import "./product.css"

class Product extends React.Component {
    render() {
        return (

            <div className="card">
                <div className="cardHeader"> {this.props.name} </div>
                <div className="imageBoxContainer"><div className="imageBox"> <img className="image" src={this.props.image} /> </div></div>
                <div className="info">
                <ul className="infoList">
                    <li>{this.props.type}</li>
                    <li>{this.props.substance}</li>
                    <li>{this.props.size}</li>
                    <li>{this.props.numberInPack} st i förpackningen</li>
                </ul>
                </div>
                <div className="priceAndBuy">
                    <div className="price"> {this.props.price} SEK </div>
                    <div className="buy">Buy</div>
                </div>
                <div className="deliveryTime"> Delivery time: {this.props.deliveryTime} </div>
            </div>

        )

    }
}

export default Product
