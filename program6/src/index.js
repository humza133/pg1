import ReactDOM from "react-dom/client";
import { AddInventory, Display_Inventory } from "./toInventory";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Display_Inventory />
    <AddInventory />
  </>,
);
