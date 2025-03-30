export default function Item({ itemObj, onRemoveItems, onTogglePacked }) {
  return (
    <li>
      <input
        type="checkbox"
        value={itemObj.packed}
        onChange={() => onTogglePacked(itemObj.id)}
      />
      <span style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
        {itemObj.quantity} {itemObj.description}
      </span>
      <button
        style={{ background: "none" }}
        onClick={() => onRemoveItems(itemObj.id)}
      >
        ❌
      </button>
    </li>
  );
}
