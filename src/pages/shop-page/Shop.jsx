import React, { Component } from "react";
import PreviewCollection from "../../components/collection-preview/PreviewCollection";
import SHOP_DATA from "../../Data/SHOP_DATA";

export default class Shop extends Component {
  state = {
    collections: SHOP_DATA,
  };

  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <PreviewCollection key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
