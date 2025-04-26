import './globals.css'

export const metadata = {
  title: 'Anthropic Clone',
  description: 'A clone of the Anthropic website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
