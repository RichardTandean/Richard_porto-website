import './globals.css'
import LandingPage from './components/LandingPage'
import Education from './components/Education'
import Experience from './components/Experience'
import ContactMe from './components/ContactMe'

export default function Home() {
  return (
    <>
      <LandingPage/>
      <Education />
      <Experience/>
      <ContactMe />
    </>
  )
}
