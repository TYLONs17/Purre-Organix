import Image from "next/image"
import ToggleDarkMode from "../components/layout/ToggleDarkMode"
import LandingPage from "../components/landingPage"
import Ico1 from "../components/icons/Ico1"

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-between p-8    ">
      
      <LandingPage />
      <Ico1 />

    </main>
  )
}
