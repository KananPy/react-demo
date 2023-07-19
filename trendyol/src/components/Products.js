import React, { Component } from "react";
import ProductCard from "./ProductCard";
import PropTypes from "prop-types";

export class Products extends Component {
  static defaultProps = {
    listName: "Products",
    products: [],
    isloading: false
  };

  render() {


    const product = this.props.products?.map((product, index) => (
      <ProductCard
        key={"product" + index}
        // title={product.title}
        // image={product.img_url}
        // price={product.price}

        {...product}
      />
    ));

    const {listName,products, isLoading} = this.props

    if(isLoading){
        return <div className="display-4"> Loading... </div>
    }

    return (
      <div className="my-5">
        <div className="h1">{listName}</div>
        <div className="row ">{product}</div>
      </div>
    );
  }
}

Products.propTypes = {
  listName: PropTypes.string,
  products: PropTypes.array,
  isloading: PropTypes.bool
};
