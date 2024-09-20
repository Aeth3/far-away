import { useState } from "react";
import List from "./list";
import Sort from "./sort";
import Clear from "./clear";

export default function PackingList({ items, onDeleteItem, onToggleItem, onSetItem }) {
    const [sortBy, setSortBy] = useState("input");
    let sortedItems;
  
    if (sortBy === "input") {
      sortedItems = items;
    }
    if (sortBy === "description") {
      sortedItems = items
        .slice()
        .sort((a, b) => a.description.localeCompare(b.description));
    }
    if (sortBy === "packed") {
      sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
    }
    return (
      <div className="list">
        {sortedItems.length === 0 ? (
          "No item found"
        ) : (
          <ul>
            {sortedItems.map((l) => (
              <List
                key={l.id}
                item={l}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
              />
            ))}
          </ul>
        )}
        <div className="actions">
          <Sort sortBy={sortBy} onSortBy={setSortBy} />
  
          <Clear onSetItem={onSetItem} />
        </div>
      </div>
    );
  }