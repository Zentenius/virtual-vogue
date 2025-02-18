"use client"

import { useState, useEffect, useRef } from "react"
import Webcam from "react-webcam"
import { Canvas} from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Spline from '@splinetool/react-spline';
import { Carousel } from "@/components/ui/carousel";


export default function CameraPage() {
  const [hasPermission, setHasPermission] = useState(false)
  const webcamRef = useRef<Webcam>(null)
  const pageImages = [
    { src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Page 1" },
    { src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Page 2" },
    { src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Page 3" },
    { src: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Page 4" },
    { src: "https://images.pexels.com/photos/1648776/pexels-photo-1648776.jpeg?auto=compress&cs=tinysrgb&w=600", alt: "Page 5" },
  ];
  const slideData = [
    {
      title: "Modern Minimalist",
      button: "Proceed",
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Contemporary Living",
      button: "Proceed",
      src: "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Scandinavian Style",
      button: "Proceed",
      src: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      title: "Industrial Chic",
      button: "Proceed",
      src: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];    useEffect(() => {
    async function getPermission() {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true })
        setHasPermission(true)
      } catch (err) {
        console.error("Error accessing webcam:", err)
      }
    }
    getPermission()
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow relative">
        {hasPermission ? (
          <>
            <Webcam
              ref={webcamRef}
              audio={false}
              screenshotFormat="image/jpeg"
              videoConstraints={{ facingMode: "user" }}
              className="w-screen h-screen object-cover"
            />
            <div className="absolute inset-0 pointer-events-none w-[65vw] h-3/4 flex top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Spline
        scene="https://prod.spline.design/erQZF8ngbVcYCFme/scene.splinecode" 
      />
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p>Please allow camera access to use this feature.</p>
          </div>
        )}
      </main>
      <div className="absolute -top-24 py-[35rem] overflow-hidden w-full h-full ">
      <Carousel slides={slideData} />
    </div>
    {/* 
      <footer className="bg-gray-800 text-white p-4 text-center absolute bottom-0 w-full">

        <div className="flex justify-between gap-4 px-14 items-center">
          <div className="flex flex-row space-x-8">

        {pageImages.map((image, index) => (
            <Link key={index} href={`/visualize/${index + 1}`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-16 h-16 object-cover rounded-md"
              />
            </Link>
          ))}
        </div>
        <Link href='/vitalize' passHref>
        <Button className="bg-white text-black font-semibold py-2 px-4 rounded">Proceed to Checkout</Button>
        </Link>
        </div>
        <p>&copy; 2025 WebcamAR. All rights reserved.</p>
      </footer>
      */}
    </div>
  )
}


