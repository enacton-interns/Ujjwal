type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};
export default function Greet(props: GreetProps) {
  const { messageCount = 0 } = props;
  return (
    <div className="container mx-auto ">
      {props.isLoggedIn && (
        <h2 className="font-bold text-center text-xl">
          Wellcome {props.name}! You have {messageCount} unread messages.
        </h2>
      )}
    </div>
  );
}
