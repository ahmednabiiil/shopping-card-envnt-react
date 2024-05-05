"use client";
import React from "react";
import { Button } from "react-bootstrap";

const ItemList = ({ items, cart, onToggleItem }) => {
  return (
    <div>
      {items.length === 0 ? (
        <div>No items found</div>
      ) : (
        <div className="row">
          {items.map((item) => {
            const inCart = cart.some((cartItem) => cartItem.id === item.id);
            return (
              <div className="col-xl-3 col-lg-4 col-sm-6" key={item.id}>
                <div className="card__item">
                  <div className="card__photo">
                    <img src={item.img} alt="" className="img-fluid w-100" />
                  </div>
                  <div className="card__data">
                    <ul className="list-unstyled d-flex align-items-center justify-content-between mt-10">
                      <li> Name :</li>
                      <li className="fw-bold text-black"> {item.name} </li>
                    </ul>
                    <hr />
                    <ul className="list-unstyled d-flex align-items-center justify-content-between">
                      <li> Price :</li>
                      <li className="fw-bold text-black">
                        ${item.price.toFixed(2)}
                      </li>
                    </ul>
                    <div className="text-end">
                      <Button
                        variant="secondary"
                        onClick={() => onToggleItem(item)}
                      >
                        {inCart ? "Remove" : "Add"}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ItemList;
