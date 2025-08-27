export type ProfileProps = {
  name: string;
};
export default function ({ name }: ProfileProps) {
  return (
    <div>
      <h1>Hello from {name}</h1>
    </div>
  );
}
