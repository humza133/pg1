import React, { useState, useEffect } from "react";
import axios from "axios";

function Display_Inventory() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000").then((res) => {
      setItems(Array.isArray(res.data) ? res.data : []);
    });
  }, [items]);

  return (
    <>
      <h2>Inventory</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function AddInventory() {
  const [item, setItem] = useState({
    id: "",
    name: "",
    quantity: "",
    price: "",
  });

  const submit = () => {
    axios.post("http://localhost:4000/add", item).then(() => {
      alert("Item Added");
    });
  };

  return (
    <>
      <h2>Add Inventory Item</h2>

      <input
        placeholder="ID"
        onChange={(e) => setItem({ ...item, id: e.target.value })}
      />
      <br />

      <input
        placeholder="Name"
        onChange={(e) => setItem({ ...item, name: e.target.value })}
      />
      <br />

      <input
        placeholder="Quantity"
        onChange={(e) => setItem({ ...item, quantity: e.target.value })}
      />
      <br />

      <input
        placeholder="Price"
        onChange={(e) => setItem({ ...item, price: e.target.value })}
      />
      <br />

      <button onClick={submit}>Add Item</button>
    </>
  );
}
export { Display_Inventory, AddInventory };
