import type { Metadata } from 'next'
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar'
import Bootstrap from './components/Bootstrap';

export const metadata: Metadata = {
  title: 'Richard Tandean',
  description: 'Made using Next.Js',
}

export default function RootLayout({children,}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </head>
      <body style={{backgroundColor:'#2C3333'}}>
        <Navbar />
        {children}
        <Bootstrap/>
      </body>
    </html>
  )
}
