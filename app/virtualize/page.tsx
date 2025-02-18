'use client'

import { PlaceholdersAndVanishInput } from "@/components/placeholders-and-vanish-input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { useRouter } from "next/navigation";

export default function VirtualizePage() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const placeholders = [
    "Design a cozy living room with Scandinavian style",
    "Create a modern minimalist bedroom layout",
    "Suggest color schemes for a bohemian dining room",
    "Transform my small apartment into an open concept space",
    "Generate a zen-inspired home office design",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");
    setTimeout(() => {
      router.push("/visualize");
    }, 1300);
  };

  useEffect(() => {
    setIsOpen(true)
  }, [])

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Welcome to Virtual Vogue</DialogTitle>
            <DialogDescription>
              Ready to transform your space? Let's start by exploring our virtual interior design tools.
              <h2 className="font-semibold text-md">How It Works</h2>
          <ul className="list-disc pl-5 space-y-2 ">
            <li>
              <strong>Input Processing:</strong> Our AI analyzes your room details and preferences.
            </li>
            <li>
              <strong>Layout Creation:</strong> We generate optimal furniture arrangements based on your inputs.
            </li>
          </ul>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      
      {/* Your main page content here */}
      <div className="bg-[#f9f0f2]">
        {/* Add your page content */}
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="bg-[#f1edee]">
                <div className="h-[40rem] flex flex-col justify-center   items-center px-4">
                    <h2 className="mb-10 sm:mb-20 text-xl text-center font-semibold sm:text-5xl dark:text-white text-black">
                        Ask Vogue Ai to Visualize Anything
                    </h2>
                    <PlaceholdersAndVanishInput
                        placeholders={placeholders}
                        onChange={handleChange}
                        onSubmit={onSubmit}
                    />
                </div>
            </SidebarInset>
        </SidebarProvider>
        
      </div>
    </div>
  )
}
