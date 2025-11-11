import Link from "next/link";

export default function notFound() {
  return (
    // <div Name="flex justify-center items-center h-screen text-4xl font-bold">
    //   404- Not Found 🔭🧐
    // </div>
    <main Name="bsod container">
      <h1 Name="neg title">
        <span Name="bg">Error - 404</span>
      </h1>
      <p>An error has occured, to continue:</p>
      <p>
        * Return to our homepage.
        <br />* Send us an e-mail about this error and try later.
      </p>
      <nav Name="nav">
        <Link href="/" Name="link">
          index
        </Link>
        &nbsp;|&nbsp;
        <Link href="/products" Name="link">
          products
        </Link>
      </nav>
    </main>
  );
}
