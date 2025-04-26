import './globals.css'

export const metadata = {
  title: 'Anthropic - AI research and products that put safety at the frontier',
  description: 'AI research and products that put safety at the frontier',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
