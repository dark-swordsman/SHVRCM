import Link from "next/link";

export default function NavbarLink({ children = "null", href = "/" }: { children: React.ReactNode, href: string }) {
  return (
    <Link href={href} className="px-6 hover:bg-slate-700 cursor-pointer flex items-center">
      {children}
    </Link>
  );
}