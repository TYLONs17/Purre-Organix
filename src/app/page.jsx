import Image from "next/image"
import ToggleDarkMode from "@/components/layout/ToggleDarkMode"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <h1 className="text-6xl font-bold">Welcome to Pure Organix</h1>
        <Image
          src="/images/organic-products.jpg"
          alt="Organic products"
          width={800}
          height={400}
        />

        <ToggleDarkMode />
      </section>
    </main>
  )
}
