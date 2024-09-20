export default function Clear({ onSetItem }) {
    function handleClearItems() {
      const confirmed = window.confirm(
        "Are you sure you want to delete all items?"
      );
      if (confirmed) onSetItem([]);
    }
    return <button onClick={handleClearItems}>Clear</button>;
  }