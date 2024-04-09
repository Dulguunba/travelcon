import Image from "next/image";
import { Poppins } from "next/font/google";
import { Process } from "@/components/supports/homePage/Process";
import { Value } from "@/components/supports/homePage/Value";
import { Questions } from "@/components/supports/homePage/Questions";
import { MainFooter } from "@/components/supports/homePage/MainFooter";
import Hero from "@/components/supports/homePage/Hero";
import Gallery from "@/components/supports/homePage/Gallery";
import PopularDestinations from "@/components/supports/homePage/PopularDestinations";
<<<<<<< HEAD
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import { Props } from "@/types/fetchDataProps";
=======
import { Tours } from "@/types/toursTypes";
import { Travel } from "@/types/travelTypes";
import { Footer } from "@/components/supports/destinationPage/Footer";
import { Destination } from "@/types/destinationTypes";
import { DestinationCategory } from "@/types/destinationCategoryTypes";
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import { FetchDataProps } from "@/types/fetchDataProps";
import { Loading } from "@/components/supports/Loading";
>>>>>>> main

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

function Home({ travelDatas, toursData, destinationDatas, categoryDatas }: FetchDataProps) {
  return (
    <div>
      <Hero travelDatas={travelDatas} destinationDatas={destinationDatas} categoryDatas={categoryDatas} toursData={toursData} />
      <PopularDestinations travelDatas={travelDatas} destinationDatas={destinationDatas} />
      <Process />
      <Gallery travelDatas={travelDatas} />
      <Value text="VALUES" miniText="OUR VALUES" margin="mb-20" padding="pt-20" />
      <Questions />
      <MainFooter />
<<<<<<< HEAD
=======
      <Footer />
>>>>>>> main
    </div>
  );
}

export { getServerSideProps }

export default Home;
