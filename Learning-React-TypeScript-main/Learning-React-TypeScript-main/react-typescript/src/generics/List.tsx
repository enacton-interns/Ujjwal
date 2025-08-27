import type React from "react";

type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
  renderItems: (value: T) => React.ReactNode;
};
export default function List<T>({ items, onClick, renderItems }: ListProps<T>) {
  return (
    <div>
      <h2>List Items</h2>
      {items.map((item, index) => (
        <div key={index} onClick={() => onClick(item)}>
          {renderItems(item)}
        </div>
      ))}
    </div>
  );
}
