// import React, { useEffect, useState } from "react";
// import { HamBurger, Search, Window } from "@/components/icons/destinationPage";
// import { ListCard } from "./ListCard";
// import { Card } from "./Card";
// import { FetchDataProps } from "@/types/fetchDataProps";
 
// export const Hero = ({ travelDatas, toursData, destinationDatas, categoryDatas, }: FetchDataProps) => {
//     const [selectedCategory, setSelectedCategory] = useState("All");
 
//     const [toggle, setToggle] = useState("toggle");
//     const [grid, setGrid] = useState("grid");
//     const [search, setSearch] = useState('')
//     const toggleFunction = () => {
//         setToggle("toggle");
//         setGrid("grid");
//     };
//     const toggleGrid = () => {
//         setGrid("list");
//         setToggle("");
//     };
//     type CategoryType = "All" | "6607a52440c6b7a39f2ef5b9" | "6607a51640c6b7a39f2ef5b7" | "6607a4db40c6b7a39f2ef5b3" | "6607a4ff40c6b7a39f2ef5b5" | "6607a4cf40c6b7a39f2ef5b1";
//     const selectCategory = (category: CategoryType) => {
//         setSelectedCategory(category);
//     }; useEffect(() => {
//         if (search.length > 0) {
//             setSelectedCategory("All")
//         }
//     },);
 
//     return (
//         <>
//             <div className="flex flex-col items-center justify-center bg-[white]">
//                 <div className="flex max-w-[1520px] w-[90%] py-5 flex-col">
//                     <div className="flex justify-between w-full items-center flex-wrap">
//                         <div className="md:flex justify-between w-full">
//                             <h1 className="font-oswald font-bold md:text-[40px] md:leading-[50px] ">
//                                 POPULAR DESTINATION
//                             </h1>
//                             <div className="flex justify-between  items-center flex-wrap">
//                                 <div className="flex items-center border-b-2 py-4">
//                                     <input
//                                         onChange={(e) => setSearch(e.target.value)}
//                                         className="outline-0"
//                                         type="search"
//                                         value={search}
//                                         placeholder="Search"
//                                     />
//                                     <Search />
//                                 </div>
//                             </div>
//                         </div>
//                         <div className={`pt-16 flex justify-between gap-4 items-center flex-wrap w-full z-1 ${toggle ? "pb-[120px]" : "pb-[1px]"} md:pb-1`}>
//                             <div className="flex md:gap-10 gap-4 flex-wrap">
//                                 <button onClick={() => selectCategory("All")} className={`hover:bg-blue hover:text-white hover:duration-500 md:py-3 md:px-8 py-2 px-4  font-medium text-xl  rounded-[10px] ${selectedCategory === "All" ? "text-white bg-blue" : "text-black bg-[#F6F6F6]"} `}>    All</button>
//                                 <button onClick={() => selectCategory("6607a52440c6b7a39f2ef5b9")} className={`hover:bg-blue hover:text-white hover:duration-500 md:py-3 md:px-8 py-2 px-4 font-medium text-xl  rounded-[10px] ${selectedCategory === "6607a52440c6b7a39f2ef5b9" ? "text-white bg-blue" : "text-black bg-[#F6F6F6]"} `}>Southern</button>
//                                 <button onClick={() => selectCategory("6607a51640c6b7a39f2ef5b7")} className={`hover:bg-blue hover:text-white hover:duration-500 md:py-3 md:px-8 py-2 px-4 font-medium text-xl  rounded-[10px] ${selectedCategory === "6607a51640c6b7a39f2ef5b7" ? "text-white bg-blue" : "text-black bg-[#F6F6F6]"} `}>   Eastern</button>
//                                 <button onClick={() => selectCategory("6607a4db40c6b7a39f2ef5b3")} className={`hover:bg-blue hover:text-white hover:duration-500 md:py-3 md:px-8 py-2 px-4 font-medium text-xl  rounded-[10px] ${selectedCategory === "6607a4db40c6b7a39f2ef5b3" ? "text-white bg-blue" : "text-black bg-[#F6F6F6]"} `}>Central</button>
//                                 <button onClick={() => selectCategory("6607a4ff40c6b7a39f2ef5b5")} className={`hover:bg-blue hover:text-white hover:duration-500 md:py-3 md:px-8 py-2 px-4 font-medium text-xl  rounded-[10px] ${selectedCategory === "6607a4ff40c6b7a39f2ef5b5" ? "text-white bg-blue" : "text-black bg-[#F6F6F6]"}`}>Northern</button>
//                                 <button onClick={() => selectCategory("6607a4cf40c6b7a39f2ef5b1")} className={`hover:bg-blue hover:text-white hover:duration-500 md:py-3 md:px-8 py-2 px-4 font-medium text-xl  rounded-[10px] ${selectedCategory === "6607a4cf40c6b7a39f2ef5b1" ? "text-white bg-blue" : "text-black bg-[#F6F6F6]"}`}>  Western</button>
//                             </div>
//                             <div className="flex items-center gap-4">
//                                 <button onClick={toggleFunction} className={`bg-${grid == "list" ? "[#F6F6F6]" : "blue"} flex items-center gap-3 md:py-3 md:px-8 py-2 px-4 rounded-[10px]  text-${grid == "list" ? "#222222" : "white"}`}>
//                                     {grid === "list" ? (<Window color="black" />) : (<Window color="white" />)}
//                                     <p>Grid view</p>
//                                 </button>
//                                 <button onClick={toggleGrid} className={`${toggle == "toggle" ? "bg-[#F6F6F6] text-[#222222]" : "bg-blue text-white"} flex items-center gap-3  rounded-[10px]  md:py-3 md:px-8 py-2 px-4`}>
//                                     {toggle === "toggle" ? (<HamBurger color="black" />) : (<HamBurger color="white" />)}
//                                     <p>List view</p>
//                                 </button>
//                             </div>
//                         </div>
//                         {grid == "grid" ? (
//                             <div className=" md:grid md:grid-cols-3  md:grid-max-rows-4 md:h-full flex flex-col  w-full pt-20 gap-[30px] ">
//                                 {/* {travelDatas?.map((travel)=> <Card traveldata={travel}/>)} */}
//                                 <Card travelDatas={travelDatas} toursData={toursData} destinationDatas={destinationDatas} categoryDatas={categoryDatas} state={selectedCategory} search={search}
//                                 />
//                             </div>
//                         ) : (
//                             <div className=" flex flex-col w-full py-20 gap-12 ">
//                                 <ListCard travelDatas={travelDatas} toursData={toursData} destinationDatas={destinationDatas} categoryDatas={categoryDatas} state={selectedCategory} search={search}
//                                 />
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };
 