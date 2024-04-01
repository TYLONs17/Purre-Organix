import CategoriesListings from "../../../components/shop/CategoriesListings"
import ProductList from "../../../components/shop/ProductList"
import { FaSprayCanSparkles } from "react-icons/fa6"
import { GiHealing, GiMeal, GiPill } from "react-icons/gi"
import { MdOutlineFastfood } from "react-icons/md"


export default function Categories () {


    return (
        <main className="px-4 py-8 md:px-8 lg:px-16">
            <section className=" bg-green-200 bg-opacity-10 rounded-2xl shadow-md p-8">
                {/*  Title  */}
                <div className="pt-8">
                    <h1 className="text-center text-2xl font-bold">All Products</h1>
                </div>

                {/*  Tab Menu  */}
                <div className="flex flex-wrap items-center  overflow-x-auto overflow-y-hidden py-6 justify-center ">
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-transform duration-400 ease-in-out transform hover:scale-3d hover:scale-110 hover:bg-opacity-30 dark:hover:bg-green-900 hover:bg-green-200 rounded-full hover:shadow-md hover:translateZ-0 ">
                        <FaSprayCanSparkles />
                        <span>Skin & Beauty</span>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-transform duration-400 ease-in-out transform hover:scale-3d hover:scale-110 hover:bg-opacity-30 dark:hover:bg-green-900 hover:bg-green-200 rounded-full hover:shadow-md hover:translateZ-0 ">
                        <GiHealing />
                        <span>Health</span>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-transform duration-400 ease-in-out transform hover:scale-3d hover:scale-110 hover:bg-opacity-30 dark:hover:bg-green-900 hover:bg-green-200 rounded-full hover:shadow-md hover:translateZ-0 ">
                        <MdOutlineFastfood />
                        <span>Snacks & Drinks</span>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-transform duration-400 ease-in-out transform hover:scale-3d hover:scale-110 hover:bg-opacity-30 dark:hover:bg-green-900 hover:bg-green-200 rounded-full hover:shadow-md hover:translateZ-0 ">
                        <GiMeal />
                        <span>Food Pantry</span>
                    </a>
                    <a rel="noopener noreferrer" href="#" className="flex items-center flex-shrink-0 px-5 py-3 space-x-2 transition-transform duration-400 ease-in-out transform hover:scale-3d hover:scale-110 hover:bg-opacity-30 dark:hover:bg-green-900 hover:bg-green-200 rounded-full hover:shadow-md hover:translateZ-0 ">
                        <GiPill />
                        <span>Super Foods</span>
                    </a>
                </div>
                    
                {/*  Categories & Checkout  */}
                <CategoriesListings />
            </section>
        </main>
    )
}