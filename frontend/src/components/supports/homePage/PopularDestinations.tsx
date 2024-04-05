import { LocationIcon } from '@/components/icons/homePage';
import { getServerSideProps } from '@/utils/fetchTravelDatas'
import { Travel } from '@/types/travelTypes';
import CarouselCard from './CarouselCard';
import { Destination } from '@/types/destinationTypes';

const PopularDestinations = ({ travelDatas, destinationDatas }: { travelDatas: Travel, destinationDatas: Destination }) => {
    const slicedData = travelDatas.result.slice(0, 3);
    return (
        <div className='flex justify-center items-center'>
            <div className='lg:max-w-[1520px] w-full lg:w-[90%] mt-20 p-2'>
                <div className='flex lg:h-[769px] flex-col lg:gap-10 items-center '>
                    <div className='text-center flex gap-4 flex-col'>
                        <h1 className='font-oswald font-bold text-2xl lg:text-4xl'>POPULAR DESTINATIONS</h1>
                        <p className='font-primary'>Explore our top destinations right from our beloved clients’ reviews.</p>
                    </div>
                    <div className="w-full mt-10 justify-center flex lg:flex-row flex-col gap-5">
                        {slicedData.map((data) => <CarouselCard responsiveTitle={data.route[0].endPoint} responsivePackage={data.duration} image={data.image.supportImage} title={data.route[0].endPoint} icon={<LocationIcon />} miniTitle={data.travelCompany} description={data.travelCompany} />)}
                    </div>
                </div>
            </div>
        </div>
    );

};

export { getServerSideProps };

export default PopularDestinations;
