type person = {
  first: string;
  last: string;
};
export default function Person(props: person) {
  return (
    <div>
      <ul className="flex gap-2 p-4">
        <li className=""> {props.first.toUpperCase()}</li>
        <li> {props.last.toUpperCase()}</li>
      </ul>
    </div>
  );
}
