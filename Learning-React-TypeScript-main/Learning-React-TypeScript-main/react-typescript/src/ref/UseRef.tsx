import { useEffect, useRef } from "react";

export default function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div>
      <input type="text" ref={inputRef} className="p-1 border rounded outline-blue-500"/>
    </div>
  );
}
