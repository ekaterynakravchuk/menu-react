import { useState } from "react";
import "./App.css";
import data from "./data";
import MenuItem from "./components/MenuItem";
import FilterButton from "./components/FilterButton";

function App() {
  const [menu, setMenu] = useState(data);
  const allCategories = ["all", ...new Set(data.map((item) => item.category))];
  const Filter = (filter) => {
    if (filter === "all") {
      setMenu(data);
    } else if (filter === filter) {
      let filteredData = data.filter((item) => item.category === filter);
      setMenu(filteredData);
    }
  };
  return (
    <>
      <h1>Our Menu</h1>
      <div className="menu_buttons">
        {allCategories.map((cat) => {
          return <FilterButton key={cat} text={cat} filter={Filter} />;
        })}
      </div>
      <div className="menu__items">
        {menu.map((item) => {
          return <MenuItem key={item.id} {...item} />;
        })}
      </div>
    </>
  );
}

export default App;
