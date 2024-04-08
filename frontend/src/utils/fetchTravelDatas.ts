import axios from "axios";
import { GetServerSideProps } from "next";
import { Tours } from "@/types/toursTypes";
import { Travel } from "@/types/travelTypes";
import { DestinationCategory } from "@/types/destinationCategoryTypes";
import { Destination } from "@/types/destinationTypes";

export const getServerSideProps: GetServerSideProps = async () => {
    try {
        const travelRes = await axios.get("http://localhost:8800/travel/get");
        const travelDatas: Travel = travelRes.data;

        const toursRes = await axios.get("http://localhost:8800/tourist/get");
        const toursData: Tours = toursRes.data;

        const categoryRes = await axios.get("http://localhost:8800/destinationcategory/get");
        const categoryDatas: DestinationCategory = categoryRes.data;

        const destinationRes = await axios.get("http://localhost:8800/destination/get");
        const destinationDatas: Destination = destinationRes.data;

        return {
            props: {
                travelDatas,
                toursData,
                categoryDatas,
                destinationDatas,

            }
        }
    } catch (error) {
        console.error("Error fetching data:", error);
        return {
            props: {
                travelDatas: [],
                toursData: [],
                categoryDatas: [],
                destinationDatas: [],

            }
        };
    }
}