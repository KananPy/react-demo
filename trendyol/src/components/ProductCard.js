import React, { Component } from "react";
import PropTypes from "prop-types";
import CarIMG from "../assets/images/car.jpg"

// const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Volkswagen_Logo_till_1995.svg/1200px-Volkswagen_Logo_till_1995.svg.png'

const inlineCss = {
  width: "18rem",
};

export class ProductCard extends Component {
  render() {
    const { img_url, title, price } = this.props;

    // let imageUrl = img_url

    // if(!img_url){
    //     imageUrl = "https://assets.entrepreneur.com/content/3x2/2000/1661888151-DAL500017.jpg"
    // }

    // const imageUrl = img_url
    //   ? img_url
    //   : CarIMG;

      function renderTag(url){
        let tag = url? <img src={url} classNName="card-img-top" alt={title} /> : <span>No Image</span>

        return tag
      }

    return (
      <div className="col-4 p-5">
        <div className="card" style={inlineCss}>
          {renderTag(img_url)}
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{price}</p>
            <a href="#" className="btn btn-danger">
              Add to basket
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCard;

ProductCard.propType = {
  title: PropTypes.string,
  img_url: PropTypes.string || null,
  price: PropTypes.number,
};
