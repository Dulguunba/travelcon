import { FetchDataProps } from "@/types/fetchDataProps";
import { Footer } from "@/components/supports/destinationPage/Footer";
import { About } from "@/components/supports/destinationPage/About";
import { TravelBlog } from "@/components/supports/destinationPage/TravelBlog";
import React from "react";
const blog = ({ travelDatas, toursData, destinationDatas, categoryDatas }: FetchDataProps) => {
    return (
        <>
            {/* <Header travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} toursData={toursData} /> */}
            <About home="TOUR BLOG" destination="Blog" />
            <TravelBlog />
            <Footer />
        </>
    )
}
export default blog;
