export default function NavbarLink({ children = "null" }: { children: React.ReactNode }) {
  return (
    <div className="px-6 hover:bg-slate-700 cursor-pointer flex items-center">
      {children}
    </div>
  );
}