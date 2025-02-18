import { ShimmerButton } from "@/components/shimmer-button"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  return (
    <div className="bg-[#f9f0f2]">
      <header className="container mx-auto px-4 py-6 flex items-center justify-between">
        <nav className="flex items-center space-x-8">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Projects
          </Link>
        </nav>

        <div className="flex-1 flex justify-center items-center">
          <Link href="/" className="text-2xl uppercase font-extrabold">
            virutal vogue
          </Link>
        </div>

        <Link
          href="#contact"
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors"
        >
          Contact Us
        </Link>
      </header>
        {/* Hero Section */}
        <main className="container mx-auto px-4 pt-12 pb-20">
        <div className="max-w-[1400px] mx-auto space-y-12">
          {/* Title Section */}
          <div className="text-center space-y-8">
            <h1 className="text-[clamp(2.5rem,8vw,6rem)] leading-[1.1] font-medium tracking-tight">
              <div className="flex flex-col items-center justify-between">
              <div className="flex items-center justify-center gap-4">
                Luxurious Interior
                <Image
                  src={`/interior1.jpg?height=80&width=240`}
                  alt="Interior preview"
                  width={240}
                  height={80}
                  className="rounded-full object-cover  aspect-[16/9]"
                />
              </div>
              <div className="flex items-center space-x-0 justify-center gap-4">
                And
                <Image
                  src={`/interior2.jpg?height=20&width=240`}
                  alt="Interior preview"
                  width={240}
                  height={20}
                  className="rounded-full object-cover  aspect-[16/9]"
                />
                Design Magic              </div>
              </div>
            </h1>
          </div>

          {/* Hero Image Container with Custom Shape */}
          <div className="relative w-full">
            {/* SVG mask for custom shape */}
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="hero-mask" clipPathUnits="objectBoundingBox">
                  <path d="M0,0 H1 V1 H0 V0 M0.4,0 Q0.5,0.05 0.6,0 V0.1 Q0.5,0.15 0.4,0.1 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Main Image with mask applied */}
            <div className="relative w-full aspect-[16/9] overflow-hidden" style={{ clipPath: "url(#hero-mask)" }}>
              <Image
                src="/interior3.jpg?height=800&width=1400"
                alt="Luxurious interior with modern curved seating"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>

            {/* Button */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2">
            <Link href={`/virtualize`} passHref>
            <ShimmerButton className="shadow-2xl">
        <span className="whitespace-pre-wrap px-6 text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
          Get Started
        </span>
      </ShimmerButton>
            </Link>
           
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

