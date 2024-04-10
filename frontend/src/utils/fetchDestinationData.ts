import { instance } from "@/functions/TravelUtilities"
import { DestinationCategory } from "@/types/destinationCategoryTypes"
import { isInteger } from "formik"

export const getDestinationCategory= async( set: Function)=>{
    try {
        const destinationCategoryRes = await instance.get("/destinationcategory/get")
        const destinationCategory: DestinationCategory = destinationCategoryRes.data
        set(destinationCategory.result)
    } catch (error) {
        alert('fail to get destination category')
    }
}

export const getTravelDataByFilter = async(set: Function, data: {})=>{
    try {
        const travelDataByFilterRes =await instance.post("/travel/filter", data);
        const travelDataByFilter = travelDataByFilterRes.data;
        set(travelDataByFilter.result)
    } catch (error) {
        alert('fail to filter travel data')
    }
}

export const getAllTravelPagination =  async(set: Function, setNumber: Function ,data: {})=>{
    try {
        const travelDataPaginationRes =  await instance.post("/travel/pagination", data)
        const travelDataPagination = travelDataPaginationRes.data
        set(travelDataPagination.result)
        setNumber((travelDataPagination.number/6))
        
    } catch (error) {
        alert('fail to filter travel data')
    }
}