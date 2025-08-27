type personList = {
  names: { first: string; last: string }[];
};
export default function PersonList(props: personList) {
  return (
    <div>
      <ul className="p-4">
        {props.names.map((name, index) => (
          <li key={index}>
            {name.first}
            {name.last}
          </li>
        ))}
      </ul>
    </div>
  );
}
