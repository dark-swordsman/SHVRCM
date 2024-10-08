import "./globals.css";
import Navbar from "../components/Navbar/Navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800 text-blue-100">
        <Navbar />
        <div className="container mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
}