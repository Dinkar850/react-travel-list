import { useState } from "react";
import Logo from "./Logo";
import Stats from "./Stats";
import Form from "./Form";
import PackingList from "./PackingList";

//components:
/*
1.Logo
2.Form
3.PackingList 
4.Item in packingList
5.Stats
*/

function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleTogglePacked(itemId) {
    setItems((items) =>
      items.map((item) =>
        item.id !== itemId ? item : { ...item, packed: !item.packed }
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you wanna delete all items?"
    );
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemoveItems={handleRemoveItems}
        onTogglePacked={handleTogglePacked}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
