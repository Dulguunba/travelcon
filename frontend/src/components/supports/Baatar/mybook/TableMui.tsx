import React, { useMemo, useState } from 'react'
import { Avatar, Box , Typography} from "@mui/material"
import { instance } from '@/functions/TravelUtilities'
import { DataGrid, GridRowId } from "@mui/x-data-grid"

export type travelInfoType = {
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
    _id:GridRowId;
  }
export const TableMui = () => {
    const [ getData, setGetData ] =useState<row[]>([])
    const [pageSize, setPagesize] = useState(5) 
    const get = async()=>{
        try {
            const get = (await instance.get("/travel/get")).data.result;
            console.log(get)
            const column =  get.map((e:travelInfoType)=> ({
                    name: e.name,
                    image:e.image.mainImage,
                    price:e.price.childPrice,
                    date:e.duration,
                    _id:e._id,
                    startDate:e.calendar[0].startDay,
       
                }))
            setGetData(column)
        } catch (error) {
            console.log(error)
        }
    }
    useMemo(()=>{
        get();
    },[])
    const columns = useMemo(()=>[
        { field:"image", headerName:"Image", width:200, renderCell:(params:any)=><Avatar src={params.row.image}/>  },
        { field:"name", headerName:"Name", width:200 },
        { field:"price", headerName:"Price", width:200 },
        { field:"date", headerName:"Days", width:100 },
        { field:"_id", headerName:"ID", width:200},
        { field:"startDate", headerName:"StartDate", width:200},
    ],[]
)
    
  return (
    <div className=' flex flex-col w-full'>
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
            columns={columns}
            rows={getData}
            getRowId={(row:row ) => row._id}
            pageSizeOptions={[5, 10, 25]}
            className=' rounded-lg bg-white w-full p-5 border-none my-5'
            />
        </Box>
    </div>
  );
};
