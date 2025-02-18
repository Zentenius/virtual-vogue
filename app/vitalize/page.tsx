import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import Spline from '@splinetool/react-spline'
import { Minus, Plus, ShoppingCart } from 'lucide-react'
import React from 'react'

const Vitalize = () => {

    // This would typically come from a database or API
const furnitureItems = [
    { id: 1, name: "Modern Sofa", company: "CozyHome", price: 999 },
    { id: 2, name: "Coffee Table", company: "WoodWorks", price: 299 },
    { id: 3, name: "Floor Lamp", company: "LightItUp", price: 129 },
    { id: 4, name: "Area Rug", company: "SoftStep", price: 199 },
    { id: 5, name: "Bookshelf", company: "WoodWorks", price: 349 },
    { id: 6, name: "Armchair", company: "CozyHome", price: 599 },
  ]
    
  return (
    <div className='min-h-screen mx-auto bg-[#f9f0f2]'>
        <h1 className='text-4xl font-bold pl-14 pt-14'>Vitalize</h1>
        <Separator className='w-1/2 mt-4 ml-14' />
        <main className='p-14 flex flex-row h-[calc(100vh-2rem)] items-center gap-4'>
            <div className='w-[35%] h-full bg-[#f9f9f9ea] rounded-xl p-5'>

            <div className="flex flex-col h-full">
            <h2 className="text-2xl font-semibold mb-4">Furniture List</h2>
            <ScrollArea className="flex-grow h-full">
              <div className="space-y-4 pr-4">
                {furnitureItems.map((item) => (
                  <Card key={item.id}>
                    <CardHeader>
                      <CardTitle>{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">From {item.company}</p>
                      <p className="font-bold mt-2">${item.price}</p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="icon">
                        <Minus className="h-4 w-4" />
                        <span className="sr-only">Remove item</span>
                      </Button>
                      <Button variant="outline" size="icon">
                        <Plus className="h-4 w-4" />
                        <span className="sr-only">Add item</span>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              </ScrollArea>
              <Separator className="my-3" />
            <div className="flex justify-between items-center">
              <p className="text-xl font-bold">Total: $2,574</p>
              <Button>
                <ShoppingCart className="mr-2 h-4 w-4" /> Checkout
              </Button>
            </div>
            </div>
            </div>
            <div className='w-[80%] h-full bg-[#f9f9f9ea] rounded-xl'>
                <div className='p-10 h-full w-full relative'>
                    <div className='absolute inset-0'>
                        <Spline
                            scene="https://prod.spline.design/erQZF8ngbVcYCFme/scene.splinecode"
                            style={{ width: '100%', height: '100%'}}
                        />
                    </div>
                </div>
            </div>
        </main>
    </div>
  )
}
export default Vitalize
