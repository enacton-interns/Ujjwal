type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
export default function Button(props: ButtonProps) {
  return (
    <button
      onClick={(event) => props.handleClick(event, 1)}
      className="w-48 bg-blue-500 text-white rounded cursor-pointer"
    >
      Click
    </button>
  );
}
