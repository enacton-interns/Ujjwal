import Button from "./components/Button";
import Container from "./components/Container";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import ListProvider from "./generics/ListProvider";
import Counter from "./hooks+typescript/Counter";

import TSUseState from "./hooks+typescript/TSUseState";
import MutableRef from "./ref/MutableRef";
import UseRef from "./ref/UseRef";

export default function App() {
  const person = {
    first: "Ujjwal",
    last: "Laad",
  };
  const list = [
    {
      first: "ujjwal",
      last: "laad",
    },
    {
      first: "Anshul",
      last: "laad",
    },
    {
      first: "Satyam",
      last: "laad",
    },
  ];

  return (
    <div>
      <Greet name="Ujjwal" messageCount={10} isLoggedIn={true} />
      <Person {...person} />
      <PersonList names={list} />
      <Status status={"error"} />
      <Oscar>
        <Heading>Ujjwal</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => console.log("button clicked", event, id)}
      ></Button>
      <Input
        handleChange={(event) => console.log("changes", event)}
        value={5}
      />
      <Container
        style={{
          padding: "1rem",
          border: "1px solid blue",
          maxWidth: "720px",
          marginInline: "auto",
        }}
      />{" "}
      <TSUseState />
      <Counter />
      <UseRef />
      <MutableRef />
      <ListProvider />
    </div>
  );
}
