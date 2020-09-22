import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
export default class Products extends React.Component{
  constructor(props){
    super(props)
    this.state={
      type:["Vegetables","fruits"],
      name:["Onions","kales","Carrots","Cucumber","Tomatoes","Garlic","Green Peas","Ginger","Red Cabbage","Mangoes","Melons","bananas","pineaple","Grape fruit","Avocado"],
      quantity:[90,40,150,130,140,100,200,70,140,30,170,200,300,200,400],
      price:[140,60,125,240,360,100,200,250,600,450,300,200,250,270,50],
    };
  }
  render(){
    return (
      <div>
        <div class="topnav">
          <a class="active" href="#home">
            Home
          </a>
          <a href="#news">Products</a>
          <a href="#contact">View Cart</a>
          <a href="#about">Contact us</a>
          <button class="button button3">LOGIN</button>
          <input type="text" placeholder="Search.."></input>
        </div>
        <h1> GREENS KIOSK</h1>
        <div className="add">
          <p class="image-description"> Stay healthy,be fit</p>
        </div>
        <h1>Products</h1>
        <div className="product">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT0tS7FPnR37UpBfNwu7jWh7EO6DEJ2W3G2Fg&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[0]}</p>
            <p>Type:{this.state.type[0]}</p>
            <p> Quantity:{this.state.quantity[0]}</p>
            <p> Price:{this.state.price[0]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQQH7Jpk2JjZfk63rtoaUfM8dK38Ca-j-FFPA&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[1]}</p>
            <p>Type:{this.state.type[1]}</p>
            <p> Quantity:{this.state.quantity[1]}</p>
            <p> Price:{this.state.price[1]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZVlO0X7ZvmfiRS4hfoIPQeY8p5Fb7Eh9cFQ&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[2]}</p>
            <p>Type:Vegetables{this.state.type[2]}</p>
            <p> Quantity:{this.state.quantity[2]}</p>
            <p> Price:{this.state.price[2]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpb0HYz9t8CopxGd1_XBvEdm1WBCH3Np_mjw&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[3]}</p>
            <p>Type: Fruits{this.state.type[3]}</p>
            <p> Quantity:{this.state.quantity[3]}</p>
            <p> Price:{this.state.price[3]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTwhXZtc-HDtHv4a7AaFR0gl-NhpeXo9XJF6A&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[4]}</p>
            <p>Type: fruits{this.state.type[4]}</p>
            <p> Quantity:{this.state.quantity[4]}</p>
            <p> Price:{this.state.price[4]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQrT9HvcBXh4y0Qu-suWNT_fmHbymujAos0rw&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[5]}</p>
            <p>Type: fruits{this.state.type[5]}</p>
            <p> Quantity:{this.state.quantity[5]}</p>
            <p> Price:{this.state.price[5]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe8gIaBImRho4WFPT6E5LPOhLa3hebgj1jIA&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[6]}</p>
            <p>Type: fruits{this.state.type[6]}</p>
            <p> Quantity:{this.state.quantity[6]}</p>
            <p> Price:{this.state.price[6]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJwUpiuUUTFpY9ZRMTT0s5vqUcobF9HsL_-w&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[7]}</p>
            <p>Type: fruits{this.state.type[7]}</p>
            <p> Quantity:{this.state.quantity[7]}</p>
            <p> Price:{this.state.price[7]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTqPArNTyx8zLQd2oDw_sA1Mk18VrRskQXdOw&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[8]}</p>
            <p>Type: fruits{this.state.type[8]}</p>
            <p> Quantity:{this.state.quantity[8]}</p>
            <p> Price:{this.state.price[8]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRdgFx1krcf-QA7LYoQaBuhgj-4-VAEkIL3lA&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[9]}</p>
            <p>Type: fruits{this.state.type[9]}</p>
            <p> Quantity:{this.state.quantity[9]}</p>
            <p> Price:{this.state.price[9]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDm_GjH4gCz0EehhGpEb9q8fTkw0JnDEhwxg&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[10]}</p>
            <p>Type: Vegetables{this.state.type[10]}</p>
            <p> Quantity:{this.state.quantity[10]}</p>
            <p> Price:{this.state.price[10]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ7DfWv5EncXWf0fkLaKX9KQx7ptFfMi6_rqA&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[11]}</p>
            <p>Type: Vegetables{this.state.type[11]}</p>
            <p> Quantity:{this.state.quantity[11]}</p>
            <p> Price:{this.state.price[11]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6o98-D42fEchy6hUbBh0uyZD9nMpz9JmLSw&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[12]}</p>
            <p>Type: Vegetables{this.state.type[12]}</p>
            <p> Quantity:{this.state.quantity[12]}</p>
            <p> Price:{this.state.price[12]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBufdwg5Mun6CZVQBeoo8C4FaMxiQ9wrbSsQ&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[13]}</p>
            <p>Type: Vegetables{this.state.type[13]}</p>
            <p> Quantity:{this.state.quantity[13]}</p>
            <p> Price:{this.state.price[13]}</p>

            <input type="button" class="button" value="Add To Cart"></input>
          </div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuU4dk8AOQZLtXQehAs4_1K1Sk4UkKUkCCQA&usqp=CAU"></img>
          <div className="item">
            <p>Name:{this.state.name[14]}</p>
            <p>Type: Vegetables{this.state.type[14]}</p>
            <p> Quantity:{this.state.quantity[14]}</p>
            <p> Price:{this.state.price[14]}</p>
            <input type="button" class="button" value="Add To Cart"></input>
          </div>
        </div>
      </div>
    );}
}
ReactDOM.render(
  <Products/>,
  document.getElementById('root')
);
