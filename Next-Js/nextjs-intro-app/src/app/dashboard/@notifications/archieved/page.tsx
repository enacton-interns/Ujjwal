import Card from "@/components/Card";
import Link from "next/link";
import React from "react";

export default function ArchievedPage() {
  return (
    <Card>
      <div>
        <h1>
          Archieved Text -- "Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perferendis, quae minima."
        </h1>{" "}
        <button>
          {" "}
          <Link href="/dashboard">Default</Link>
        </button>
      </div>
    </Card>
  );
}
