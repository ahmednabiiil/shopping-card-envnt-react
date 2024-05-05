"use client";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import items from "./component/data";
import CategoryFilter from "./component/CategoryFilter";
import ItemList from "./component/ItemList";
import "../src/styles/globals.scss";
import SuccessPage from "./component/SuccessPage";

const MainPage = () => {
  const [category, setCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(items);
  const [showModal, setShowModal] = useState(false);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    setFilteredItems(
      newCategory === "All"
        ? items
        : items.filter((item) => item.category === newCategory)
    );
  };

  const handleToggleItem = (item) => {
    const inCart = cart.some((cartItem) => cartItem.id === item.id);
    if (inCart) {
      setCart(cart.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCart([...cart, item]);
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handleBuyClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/success");
  };

  return (
    <div className="main">
      <div className="container">
        <div className="text-center">
          <h2>Category: {category}</h2>
        </div>

        <CategoryFilter onChange={handleCategoryChange} />

        <ItemList
          items={filteredItems}
          cart={cart}
          onToggleItem={handleToggleItem}
        />
        <hr />
        <div className="text-center d-flex align-items-center justify-content-between mt-30">
          <h2>Total Price: ${totalPrice.toFixed(2)}</h2>

          <Button
            variant="primary"
            onClick={handleBuyClick}
            disabled={cart.length === 0}
          >
            Buy
          </Button>
        </div>

        <Modal show={showModal} onHide={handleCloseModal}>
          <Modal.Header>
            <Modal.Title>Receipt Information</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {cart.map((item) => (
              <div key={item.id}>
                <ul className="list-unstyled">
                  <li className="d-flex align-items-center justify-content-between">
                    <span className="fw-bold">{item.name}</span>
                    <span className="fw-bold"> ${item.price.toFixed(2)} </span>
                  </li>
                </ul>
              </div>
            ))}

            <hr />
            <div>
              <p className="d-flex align-items-center justify-content-between fw-bold">
                Total Price: <span>${totalPrice.toFixed(2)} </span>
              </p>
            </div>
          </Modal.Body>

          <Modal.Footer className="border-0">
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </Router>
  );
};

export default App;
