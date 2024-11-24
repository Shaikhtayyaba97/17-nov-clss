export default function Grid(){ 
    return(
        <div>
            <h1 className="font-semibold text-center text-base sm:text-lg md:text-xl lg:text-2xl m-1 ">This is Grid</h1>
          
        <div className="grid grid-rows-[100px_200px_200px_100px] grid-cols-3 p-1 gap-3 m-2">
            <div className="bg-yellow-500 col-span-3 ">1</div>
            <div className="bg-orange-600 row-span-2">2</div>
            <div className="bg-red-800 col-span-2">2</div>
            <div className="bg-pink-800 col-span-1">4</div>
            <div className="bg-pink-800 col-span-1">5</div>
            <div className="bg-yellow-600 col-span-3 ">6</div>
        </div></div>
    )
}