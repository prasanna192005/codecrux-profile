import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CRUXProfile',
  description: 'codeCRUX profile',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
      <nav className="shadow-md p-4 flex justify-between items-center bg-black text-white">
  <div className="text-xl font-bold">CodeCrux</div>
  <ul className="hidden md:flex space-x-6">
    <li><a href="https://codecrux-hero.vercel.app/" className="hover:text-gray-600">Home</a></li>
    <li><a href="https://coderuxx-pbg3.vercel.app/" className="hover:text-gray-600">Play</a></li>
    <li><a href="http://localhost:3000/AlgorithmVisualizer/AlgorithmVisualizer" className="hover:text-gray-600">Visualize</a></li>
    <li><a href="https://codecrux-community.vercel.app/" className="hover:text-gray-600">Community</a></li>
  </ul>
  <button className="md:hidden text-gray-600">☰</button>
</nav>
{children}

      </body>
    </html>
  )
}
