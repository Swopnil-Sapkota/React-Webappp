import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1><Link href="/components/users">Users</Link></h1>
      <ProductCard />
    </main>
  );
}
