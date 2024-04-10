import { Poppins } from "next/font/google";
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import { FetchDataProps } from "@/types/fetchDataProps";

// const poppins = Poppins({
//   weight: "400",
//   subsets: ["latin"],
// });

function Home({ travelDatas, toursData, destinationDatas, categoryDatas }: FetchDataProps) {
  return (
    <div>
      {/* <Hero travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} toursData={toursData} />
      <PopularDestinations travelDatas={travelDatas} destinationDatas={destinationDatas} />
      <Process />
      <Gallery travelDatas={travelDatas} />
      <Value text="VALUES" miniText="OUR VALUES" margin="mb-20" padding="pt-20" />
      <Questions />
      <MainFooter />
      <Footer /> */}
    </div>
  );
}

export { getServerSideProps }

export default Home;
