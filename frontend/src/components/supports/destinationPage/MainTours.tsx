import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getAllTravelPagination, getDestinationCategory } from '@/utils/fetchDestinationData';
import { DestinationCategoryItem } from '@/types/destinationCategoryTypes';
import { Window } from '@/components/icons/destinationPage';
import { HamBurger } from '@/components/icons/destinationPage';
import { Card } from './Card';
import { ListCard } from './ListCard';
import { Pagination } from '@mui/material';
import Stack from '@mui/material/Stack';

export const MainTours = () => {

  const [searchInput, setSearchInput]= useState("")
  const [travelData, setTravelData] = useState([])
  const [skip, setSkip]= useState(0)
  const [allDestination, setAllDestination]= useState(true)
  const [destinationCategory, setDestinationCategory]= useState([])
  const [pageNumber, setPageNumber]= useState()
  type filterType = {
    "destination": string[],
    "travelType": string[]
  }
  const [filter, setFilter] =useState<filterType>({"destination": [], "travelType": []})
  const [viewByList, setViewByList]=useState(false)

  useEffect(()=>{
    getDestinationCategory(setDestinationCategory);
    getAllTravelPagination( setTravelData, setPageNumber, {"limit": 6, "skip": skip })
  },[])

  const filterTourByDestination = (id: string)=>{
    if(filter.destination.includes(id)){
        const destinationArray = filter.destination.filter((categoryId)=> categoryId !== id)
        const removedDestination = { "destination": destinationArray}
        setFilter({...filter, ...removedDestination})
    } else {
        const destinationArray = filter.destination
        destinationArray.push(id)
        const addedDestination = {"destination": destinationArray}
        setFilter({...filter, ...addedDestination})
        setAllDestination(false)
    }
  }

  const selectAllDestination=()=>{
    if (filter.destination.length > 0) {
        const allDestination ={destination: []}
        setFilter({...filter, ...allDestination})
        setAllDestination(true)
        getAllTravelPagination( setTravelData, setPageNumber,  {"limit": 6, "skip": skip })
    } else { setAllDestination(true)}
  }

  return (
    <div className='flex w-full items-start justify-center h-full'>
        <div className='mt-10 max-w-[1520px] w-[90%]  h-full flex flex-col justify-center gap-6'>
            <div className='flex justify-between items-center'>
                <h1 className="font-oswald font-bold md:text-[40px] md:leading-[50px] uppercase">Main destinations</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" onChange={(e)=>setSearchInput(e.target.value)} value={searchInput} />
                    <SearchIcon/>
                </label>
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex justify-start gap-2 items-center'>
                    <div className={`p-3 rounded-lg ${(allDestination) ? "bg-blue text-white" : "bg-gray-100 " } text-lg  px-3`} onClick={selectAllDestination}>All</div>

                    {destinationCategory.map((category: DestinationCategoryItem)=><div className={`p-3 rounded-lg text-lg capitalize ${filter.destination.includes(category._id) ? "bg-blue text-white" : "bg-gray-100 " } `} onClick={()=>filterTourByDestination(category._id)} >{category.english}</div>)}
                </div>
                <div className='flex gap-3'>
                    <button
                    onClick={()=>setViewByList(false)}
                    className={`${
                        viewByList  ? "bg-gray-100" : "bg-blue text-white"
                    } flex items-center justify-center gap-3 md:py-3 md:px-8 py-2 px-4 rounded-lg`}
                    >
                        {viewByList ? (
                            <Window color="black" />
                        ) : (
                            <Window color="white" />
                        )}
                        <p>Grid view</p>
                    </button>
                    <button
                     onClick={()=>setViewByList(true)}
                     className={`${
                         !viewByList  ? "bg-gray-100" : "bg-blue text-white"
                     } flex items-center justify-center gap-3 md:py-3 md:px-8 py-2 px-4 rounded-lg`}
                     >
                        { !viewByList? (
                            <HamBurger color="black" />
                        ) : (
                            <HamBurger color="white" />
                        )}
                        <p>List view</p>
                    </button>
                </div>
            </div>
            <div className='w-full flex gap-3'>
                <div className='w-full flex'>
                    { viewByList ? (
                        <div className=" flex flex-col w-full py-20 gap-12 ">
                           {travelData.map((travel)=> <ListCard travelData={travel}/>)}
                        </div>
                        
                    ) : (
                        <div className=" md:grid  md:grid-cols-3 w-full pt-20 gap-[30px] ">
                            {travelData.map((travel)=> <Card travelData={travel}/>)}
                        </div>
                    ) }
                </div>
            </div>
            <div className='flex justify-center items-center mb-10'>
                <Stack spacing={2} >
                    <Pagination count={pageNumber} size="large" />
                </Stack>
            </div>

        </div>
      
    </div>
  )
}

