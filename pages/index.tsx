import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="space-y-10">
      <h1>hello</h1>
      <p>this is my first para</p>
      <p>this is my second para</p>
      <p>this is my third para</p>
    </div>
  );
}
