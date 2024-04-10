import { TravelGuide } from "@/components/supports/destinationPage/TravelGuide";
import { FetchDataProps } from "@/types/fetchDataProps";
import { Footer } from "@/components/supports/destinationPage/Footer";
import { About } from "@/components/supports/destinationPage/About";

export default function guide({ travelDatas, toursData, destinationDatas, categoryDatas }: FetchDataProps) {
    return (
        <>
            {/* <Header travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} toursData={toursData} /> */}
            <About home="TOUR GUIDE" destination="Guide" />
            <TravelGuide />
            <Footer />
        </>
    );
}
