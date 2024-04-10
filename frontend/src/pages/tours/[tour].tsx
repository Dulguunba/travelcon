import TourDetailHero, { getServerSideProps } from '@/components/supports/travelDetail/TourDetailHero'
import React from 'react'
// import { Footer } from '@/components/Footer'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FetchDataProps } from '@/types/fetchDataProps';
import { useLoading } from '@/functions/UseLoading';
import { Loading } from '@/components/supports/Loading';


const TourDetail = ({ toursData, travelDatas, destinationDatas, categoryDatas }: FetchDataProps) => {
    const isLoading = useLoading([travelDatas, , toursData, destinationDatas, categoryDatas])

    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            <TourDetailHero destinationDatas={destinationDatas} categoryDatas={categoryDatas} travelDatas={travelDatas} toursData={toursData} />
            {/* <Footer /> */}
        </div>
    )
}

export { getServerSideProps };

export default TourDetail;