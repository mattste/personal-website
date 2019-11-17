import Link from "next/link";

const Header = ({ className = "" }) => (
  <div className="flex-initial flex items-center justify-end py-5">
    <nav>
      <Link href="/">
        <a className="mr-6">Home</a>
      </Link>
      <Link href="/about">
        <a className="mr-6">About</a>
      </Link>
      <Link href="/knowledge-base">
        <a className="mr-6">KB</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </nav>
  </div>
);

export default Header;
