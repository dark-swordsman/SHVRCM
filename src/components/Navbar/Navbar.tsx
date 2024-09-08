import NavbarLink from "./NavbarLink";

export default function Navbar() {
  return (
    <div className="bg-sky-900 w-100 h-12">
      <div className="container mx-auto h-full">
        <div className="flex h-full">
          <NavbarLink href="/">Home</NavbarLink>
          <NavbarLink href="/products">Products</NavbarLink>
        </div>
      </div>
    </div>
  );
}