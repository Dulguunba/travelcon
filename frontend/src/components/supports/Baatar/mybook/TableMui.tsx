import React, { useMemo, useState } from 'react'
import { Avatar, Box , Typography} from "@mui/material"
import { instance } from '@/functions/TravelUtilities'
import { DataGrid } from "@mui/x-data-grid"

type travelInfoType = {
    additionalInfo: String;
    calendar: [
      {
        endDay: String;
        endTime: String;
        startDay: String;
        startTime: String;
      }
    ];
    categoryType: String[];
    createdAt: Date;
    duration: 14;
    food: {
      IsIncludeFoodCheck: Boolean;
      IsIncludeFoodPriceCheck: Boolean;
      foodNumber: Number;
      foodPrice: Number;
    };
    image: {
      mainImage: String;
      supportImage: String;
    };
    name: String;
    price: { adultPrice: String; childPrice: String };
    route: String[];
    touristType: [];
    traffic: {
      trafficPrice: Number;
      IsIncludeTrafficCheck: Boolean;
      IsIncludeTrafficPriceCheck: Boolean;
    };
    travelCompany: String;
    updatedAt: String;
    __v: Number;
    _id: String;
  };
  type row = {
    name:String;
    image:String;
    price:String;
    date:String;
    id:String;
  }
export const TableMui = () => {
    const [ getData, setGetData ] =useState<row[]>([])
    const get = async()=>{
        try {
            const get = (await instance.get("/travel/get")).data.result;
            const column =  get.map((e:travelInfoType)=> ({
                    name: e.name,
                    image:e.image.mainImage,
                    price:e.price.childPrice,
                    date:e.duration,
                    id:e._id
                }))
            setGetData(column)
            console.log(get)
        } catch (error) {
            console.log(error)
        }
    }
    useMemo(()=>{
        get();
    },[])
    const columns = useMemo(()=>[
        { field:"image", headerName:"Image", width:200, renderCell:params=><Avatar src={params.row.image}/>  },
        { field:"name", headerName:"Name", width:200 },
        { field:"price", headerName:"Price", width:200 },
        { field:"date", headerName:"Days", width:100 },
    ],[]
)
    
  return (
    <div>
        <Box 
        sx={{
            height:400,
            width:800
        }}>
            <Typography>

            </Typography>
            <DataGrid 
            columns={columns}
            rows={getData}
            getRowId={(row:row ) =>row.id}
            />
        </Box>
    </div>
  )
}
