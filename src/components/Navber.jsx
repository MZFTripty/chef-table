import { IoIosSearch } from "react-icons/io";

export default function Navber() {
    return (
        <div className="flex justify-between items-center mb-5">
            <h3 className="text-2xl font-bold">Recipe Calories</h3>
            <div className="flex items-center justify-center gap-10">
                <p>Home</p>
                <p>Recipes</p>
                <p>About</p>
                <p>Search</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex gap-20">
                    <input type="text" placeholder="search" className="relative border-none bg-slate-200 rounded-full px-8 py-2" /><IoIosSearch className="absolute mt-4 ml-3 text-gray-600" />
                </div>
                <img src="https://i.ibb.co.com/bQvMDs1/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-wi.jpghttps://i.ibb.co.com/cTZZDGx/horizontal-portrait-smiling-happy-young-pleasant-looking-female-wears-denim-shirt-stylish-glasses-wi.jpg" alt="" className="w-12 h-12 rounded-full" />
            </div>
        </div>
    )
}
