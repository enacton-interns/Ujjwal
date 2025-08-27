import List from "./List";

export default function ListProvider() {
  const arr = [1, 2, 3, 4];
  const str = ["Surat", "Ahemdabad", "Vadodara", "GandhiNagar"];
  const person = [
    { name: "Ujjwal", age: 23 },
    { name: "Satyam", age: 20 },
    { name: "Sudarshan", age: 21 },
  ];
  return (
    <div>
      <List
        items={arr}
        onClick={(item) => console.log(item)}
        renderItems={(item) => <span>{item}</span>}
      />
      <List
        items={str}
        onClick={(item) => console.log(item)}
        renderItems={(item) => <span>{item}</span>}
      />
      <List
        items={person}
        onClick={(item) => console.log(item)}
        renderItems={(item) => <span>{item.name}</span>}
      />
    </div>
  );
}
