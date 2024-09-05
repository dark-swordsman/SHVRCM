import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-blue-100">
        <Navbar />
        {children}
      </body>
    </html>
  )
}