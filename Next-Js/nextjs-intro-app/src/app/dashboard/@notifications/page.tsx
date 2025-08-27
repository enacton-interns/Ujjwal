import Card from "@/components/Card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <div>
        <h1>Notification</h1>
      </div>
      <div>
        <Link href="/dashboard/archieved">Archieved Text</Link>
      </div>
    </Card>
  );
}
