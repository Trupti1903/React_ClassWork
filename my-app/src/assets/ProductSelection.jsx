import React, { Component } from 'react';

class ProductSelection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { label: 'Pen', price: 11 },
        { label: 'Pencil', price: 5 },
        { label: 'Eraser', price: 10 },
        { label: 'Sharpener', price: 7 },
        { label: 'Calculator', price: 50 },
      ],
      selectedIndex: 0,
      quantity: 1,
    };
  }

  handleChange = (e) => {
    this.setState({ selectedIndex: Number(e.target.value) });
  };

  increaseQuantity = () => {
    this.setState((prev) => ({ quantity: prev.quantity + 1 }));
  };

  decreaseQuantity = () => {
    this.setState((prev) => ({ quantity: prev.quantity - 1 }));
  };

  render() {
    const { products, selectedIndex, quantity } = this.state;
    const selectedItem = products[selectedIndex];
    const totalPrice = selectedItem.price * quantity;

    return (
      <div style={{ marginBottom: '30px' }}>
        <h3>Product Selection</h3>

        {/* Dropdown */}
        <select value={selectedIndex} onChange={this.handleChange}>
          {products.map((item, index) => (
            <option key={index} value={index}>
              {item.label} - ₹{item.price}
            </option>
          ))}
        </select>

        {/* Quantity */}
        <div style={{ marginTop: '10px' }}>
          {quantity === 0 && (
            <button onClick={this.decreaseQuantity}>-</button>
          )}

          <span style={{ margin: '0 10px' }}>{quantity}</span>

          {quantity <= 10 && (
            <button onClick={this.increaseQuantity}>+</button>
          )}
        </div>

        {/* Total Price */}
        <p>
          <strong>Total Price: ₹{totalPrice}</strong>
        </p>
      </div>
    );
  }
}

export default ProductSelection;
