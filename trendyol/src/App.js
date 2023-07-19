import React from "react";
import { Header } from "./components/Header";
import { Products } from "./components/Products";
import { Container } from "./components/Container";
import dataK from "./mock/data3.json"

const data1 = [
  { title: "Product1", price: 5.99, img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Volkswagen_Logo_till_1995.svg/1200px-Volkswagen_Logo_till_1995.svg.png" },
  { title: "Product2", price: 5.99, img_url: null },
  { title: "Product3", price: 5.99, img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZz_R3iYYpDgIulODeK1l-HpRRPNUxUHk7A6Tq0QQ9&s" },
  { title: "Product4", price: 5.99, img_url: null },
  { title: "Product5", price: 5.99, img_url: "https://1000logos.net/wp-content/uploads/2018/02/Ford-Logo.png" },
];

const data2 = [
  { title: "Product1", price: 5.99, img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Volkswagen_Logo_till_1995.svg/1200px-Volkswagen_Logo_till_1995.svg.png" },
  { title: "Product2", price: 5.99, img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/2048px-BMW.svg.png" },
  { title: "Product3", price: 5.99, img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZz_R3iYYpDgIulODeK1l-HpRRPNUxUHk7A6Tq0QQ9&s" },
  { title: "Product4", price: 5.99, img_url: "https://upload.wikimedia.org/wikipedia/en/2/2a/Alfa_Romeo_logo.png" },
  { title: "Product5", price: 5.99, img_url: "https://1000logos.net/wp-content/uploads/2018/02/Ford-Logo.png" },
];




export class App extends React.Component {
  render() {

    const isLoading = false
    return (
      <>
        <Header />
        <Container>
          <Products listName="All products"  products={data1} isLoading={isLoading}/>
          <Products listName="Best selling products" products={data2} isLoading={isLoading}/>
          <Products listName="New products" products={dataK} isLoading={isLoading}/>
        </Container>
      </>
    );
  }
}
