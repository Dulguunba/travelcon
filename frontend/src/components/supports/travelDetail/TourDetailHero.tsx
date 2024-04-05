import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/component.json'
import { getServerSideProps } from '../../../utils/fetchTravelDatas'
import Description from './Description';
import Header from '../homePage/Header';
import { FetchDataProps } from '@/types/fetchDataProps';


const TourDetailHero = ({ toursData, travelDatas, destinationDatas, categoryDatas }: FetchDataProps) => {
    const tour = travelDatas.result.filter(travel => travel._id === "66069e7a464834a5e2273c97");
    const widerName = travelDatas.result.map((data) => data.name.length > 28)



    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        autoplaySpeed: 1000,
        focusOnSelect: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                },
            },

        ]
    };

    return (
        <>
            {tour.map((data) => <img src={data.image.mainImage} className='w-full h-[400px] lg:h-[950px]' alt="" />)}
            <div className='absolute top-0 right-0 left-0'>
                <Header toursData={toursData} destinationDatas={destinationDatas} categoryDatas={categoryDatas} travelDatas={travelDatas} />
                <div className=' max-w-[1520px] m-auto w-[90%] h-[600px] flex lg:mt-8 bg justify-center'>
                    <div className={`flex flex-col items-center ${widerName ? 'mt-0' : ' mt-20'}`}>
                        <div className='flex-col items-center drop-shadow-lg'>
                            <div className='z-50 text-white flex justify-center gap-3 lg:text-[20px] lg:leading-[30px] font-primary'>
                                <p className='border-r-2 pr-3'>Home</p>
                                <p className='border-r-2 pr-3'>Tours</p>
                                <p className='capitalize'>{destinationDatas.result[0].english}</p>
                            </div>
                            <h1 className={`uppercase font-oswald lg:mt-0 mt-5 drop-shadow-md font-bold text-4xl ${widerName ? "lg:text-[130px]" : "lg:text-[200px] "} lg:leading-[200px] text-white text-center`}>{tour.map((data) => data.name)}</h1>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className="slider-container mt-10 mb-10 lg:pl-8 lg:pr-8 w-full overflow-hidden">
                <Slider {...settings}>
                    {travelDatas.result.map((item, index) => (
                        <div key={index} className='slide w-full'>
                            <img src={item.image.supportImage} className="lg:w-[832px] w-full h-[250px] lg:h-[500px] rounded-3xl" />
                        </div>
                    ))}
                </Slider>
            </div>
            {/* <SimpleSlider /> */}
            <Description destinationDatas={destinationDatas} categoryDatas={categoryDatas} toursData={toursData} travelDatas={travelDatas} />
        </>
    );
};

export { getServerSideProps };

export default TourDetailHero;
