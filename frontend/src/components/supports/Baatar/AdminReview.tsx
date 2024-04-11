import { FindToAverage } from '@/utils/AvrageFuntion';
import { instance } from '@/utils/functions/TravelUtilities'
import React, { useMemo, useState } from 'react'
import { DataGrid, GridRowId } from "@mui/x-data-grid"
import { Box, Rating, Typography } from '@mui/material';

type reviewsType={
    comment:String;
    createAt:String;
    phoneNumber:number;
    stars:number;
    travelId:String;
    updateAt:String;
    _id:GridRowId;
}

export const AdminReview = () => {
    const [Reviews, SetReviews] =useState([])
    const [reviewData, SetReviewData] = useState({
        average:0,
    })
    const get = async()=>{
        try {
            const get = (await instance.get("/review/get")).data.result
            const reviewStars= get.map((e:reviewsType)=>({
            star:e.stars
            }))
            const averageData:number = FindToAverage(reviewStars)
            SetReviewData({...reviewData, average:averageData})
            SetReviews(get)
        } catch (error) {
            console.log(error);
        }
    }
    useMemo(()=>{
        get();
    },[])
    const column = useMemo(()=>[
        { field:"comment", headerName:"Comment", width:200},
        { field:"phoneNumber", headerName:"PhoneNumber", width:200},
        { field:"stars", headerName:"Star", width:200},
        { field:"_id", headerName:"Id", width:200},
    ],[]) 
    console.log(Reviews)
  return (
    <div>
        <div className=' flex gap-14 justify-center'>
            <div className=' rounded-lg bg-white p-3 w-fit'>
                <h1 className=' text-xl text-black mb-3'>Total Reviews Travel</h1>
                <div className=' flex justify-center rounded-lg border border-gray-200 mt-1 h-fit p-1'>
                    <h1 className=' text-xl text-black'>{Reviews.length}</h1>
                </div>
            </div>
            <div className=' rounded-lg bg-white p-3 w-fit '>
                <h1 className=' text-xl text-black mb-3'>Total Reviews Average</h1>
                <div className=' flex flex-col rounded-lg border border-gray-200 mt-1 h-fit p-1'>
                    <div className='flex justify-center'>
                       <h1 className=' text-xl text-black'>{reviewData.average}</h1>
                    </div>
                    <div className=' flex justify-center'>
                      <p><Rating value={reviewData.average}/></p>
                    </div>
                </div>
            </div>
        </div>
        <div className=' max-w-full overflow-x-auto'>
        <Box 
        sx={{
            height:400,
            width:1200
        }}>
            <Typography
            variant='h3'
            component='h3'
            sx={{textAlign: 'center', mt:3, mb:3}}
            >
            </Typography>
            <DataGrid 
            columns={column}
            rows={Reviews}
            getRowId={(row: reviewsType) => row._id}
            pageSizeOptions={[5, 10, 25]}
            className=' rounded-lg bg-white w-full p-5 border-none my-5'
            />
        </Box>
        </div>
    </div>
  )
}
