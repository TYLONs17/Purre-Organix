


import Image from "next/image"
import Link from "next/link"


export default function Categories() {

    return (
        <section>
            <div className="flex justify-center items-center">
                <div className="2xl:mx-auto 2xl:container py-4 px-4 sm:px-6 xl:px-20 2xl:px-0 w-full">
                    <div className="flex flex-col jusitfy-center items-center space-y-10">
                        <div className="flex flex-col justify-center items-center ">
                            <h1 className="text-3xl xl:text-4xl font-semibold leading-7 xl:leading-9 text-gray-800 dark:text-white">Shop By Category</h1>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-x-8 w-full">
                            <Link href="/shop/categories">
                                <div className="cursor-pointer relative group flex justify-center items-center h-full w-full hover:bg-green-800 hover:dark:bg-green-300 hover:bg-opacity-20 rounded-2xl shadow-lg transition-all ease-in-out duration-500">
                                    <Image className="rounded-full transform transition-transform duration-500 group-hover:scale-110" height={1400} width={1000} objectFit="cover" objectPosition="center" src="/images/skin-n-beauty-2.webp" alt="skin and beauty" />
                                    <button className="dark:bg-green-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white rounded-2xl transition-transform transform group-hover:translate-y-2">Skin & Beauty</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-green-600 bg-opacity-50 rounded-2xl"></div>
                                </div>
                            </Link>

                            <div className="flex flex-col space-y-4 md:space-y-8 mt-4 md:mt-0">
                                <Link href="/shop/categories">
                                    <div className="cursor-pointer relative group flex justify-center items-center h-full w-full hover:bg-green-800 hover:dark:bg-green-300 hover:bg-opacity-20 rounded-2xl shadow-lg  transition-all ease-in-out duration-500">
                                        <Image className="rounded-full transform transition-transform duration-500 group-hover:scale-110" height={1000} width={1000} objectFit="cover" objectPosition="center" src="/images/food-pantry.jpeg" alt="Food Pantry" />
                                        <button className="dark:bg-green-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white rounded-2xl transition-transform transform group-hover:translate-y-2">Food Pantry</button>
                                        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-green-600 bg-opacity-50 rounded-2xl"></div>
                                    </div>
                                </Link>

                                <Link href="/shop/categories">
                                    <div className="cursor-pointer relative group flex justify-center items-center h-full w-full hover:bg-green-800 hover:dark:bg-green-300 hover:bg-opacity-20 rounded-2xl shadow-lg transition-all ease-in-out duration-500">
                                        <Image className="rounded-full transform transition-transform duration-500 group-hover:scale-110" height={1000} width={1000} objectFit="cover" objectPosition="center" src="/images/health-organic.jpeg" alt="Health" />
                                        <button className="dark:bg-green-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white rounded-2xl transition-transform transform group-hover:translate-y-2">Health</button>
                                        <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-green-600 bg-opacity-50 rounded-2xl"></div>
                                    </div>
                                </Link>
                            </div>

                            <Link href="/shop/categories">
                                <div className="cursor-pointer relative group justify-center items-center h-full w-full hidden lg:flex hover:bg-green-800 hover:dark:bg-green-300 hover:bg-opacity-20 shadow-lg rounded-2xl  transition-all ease-in-out duration-500">
                                    <Image className="rounded-full transform transition-transform duration-500 group-hover:scale-110" height={1000} width={1000} objectFit="cover" objectPosition="center" src="/images/snacks-organic.jpg" alt="snacks" />
                                    <button className="dark:bg-green-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white rounded-2xl transition-transform transform group-hover:translate-y-2">Snacks</button>
                                    <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-green-600 bg-opacity-50 rounded-2xl"></div>
                                </div>
                            </Link>
                            
                            <div className="cursor-pointer relative group flex justify-center items-center h-full w-full mt-4 md:hidden md:mt-8 lg:hidden">
                                <div className="h-full w-full hidden md:block">
                                    <Image className="rounded-full transform transition-transform duration-500 group-hover:scale-110" height={1000} width={1000} objectFit="cover" objectPosition="center"  src="/images/skin-n-beauty-2.webp" alt="skin and beauty" />
                                </div>
                                <div className="h-full w-full md:hidden">
                                    <Image className="rounded-full transform transition-transform duration-500 group-hover:scale-110" height={1000} width={1000} objectFit="cover" objectPosition="center"  src="/images/olive-t.jpg" alt="olive-tatiane" />
                                </div>
                                
                                <button className="dark:bg-green-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white rounded-2xl transition-transform transform group-hover:translate-y-2">Drinks</button>
                                <div className="absolute opacity-0 group-hover:opacity-100 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-green-600 bg-opacity-50 rounded-2xl"></div>
                            </div>
                        </div>
                        <div className="relative group hidden md:flex justify-center items-center h-full w-full mt-4 md:mt-8 lg:hidden">
                            <div className="h-full w-full hidden md:block">
                                <Image className="rounded-full transform transition-transform duration-500 group-hover:scale-110" height={1000} width={1000} objectFit="cover" objectPosition="center"  src="/images/Matcha-Latte-coco-drinks.jpg" alt="organic drinks" />
                            </div>
                            <div className="h-full w-full sm:hidden">
                                <Image className="rounded-full transform transition-transform duration-500 group-hover:scale-110" height={1000} width={1000} objectFit="cover" objectPosition="center"  src="/images/organic-super-foods.webp" alt="olive-tatiane" />
                            </div>
                            
                            <button className="dark:bg-green-950 dark:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 bottom-4 z-10 absolute text-base font-medium leading-none text-gray-800 py-3 w-36 bg-white rounded-2xl transition-transform transform group-hover:translate-y-2">Super Foods</button>
                            <div className="absolute opacity-0 group-hover:opacity-50 transition duration-500 bottom-3 py-6 z-0 px-20 w-36 bg-green-600 bg-opacity-50 rounded-2xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}