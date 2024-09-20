export default function Sort({ sortBy, onSortBy }) {
    return (
      <select value={sortBy} onChange={(e) => onSortBy(e.target.value)}>
        <option value="input">Sort by input order</option>
        <option value="description">Sort by description</option>
        <option value="packed">Sort by packed status</option>
      </select>
    );
  }