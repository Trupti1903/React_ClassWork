import React, { Component } from 'react';

class Pagination extends Component {
  constructor(props) {
    super(props);

    const items = Array.from({ length: 30 }, (_, index) => ({
      id: index + 1,
      name: `Item ${index + 1}`,
      price: (index + 1) * 10,
    }));

    this.state = {
      items,
      currentPage: 1,
      itemsPerPage: 5,
    };
  }

  handleNext = () => {
    this.setState((prev) => ({ currentPage: prev.currentPage + 1 }));
  };

  handlePrevious = () => {
    this.setState((prev) => ({ currentPage: prev.currentPage - 1 }));
  };

  render() {
    const { items, currentPage, itemsPerPage } = this.state;

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);

    return (
      <div>
        <h3>Pagination List</h3>

        <ul>
          {currentItems.map((item) => (
            <li key={item.id}>
              {item.name} - ₹{item.price}
            </li>
          ))}
        </ul>

        <button
          onClick={this.handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span style={{ margin: '0 10px' }}>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={this.handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    );
  }
}

export default Pagination;
