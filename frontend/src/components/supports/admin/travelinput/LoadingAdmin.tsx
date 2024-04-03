import React, { useEffect, useState } from "react";
import { createTravelInfo } from "@/functions/TravelUtilities";
import { usePageStore, useTravelCalendarStore, useTravelStore , useTravelRouteStore, CalendarType} from "@/functions/AdminFunctions";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
export const LoadingAdmin = () => {
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();

  const submitTravel = () => {
    if (travel) {
      createTravelInfo(travel);
      increment(1);
    } else {
      return false;
    }
  };

  return (
    <div
      className={`   w-full h-full min-h-screen ${
        page == 7 ? "flex" : "hidden"
      } gap-7  flex-col justify-start items-start relative`}
    >
      <a className="w-full flex gap-7 items-center bg-white" href="/">
        <ArrowBackIosIcon />
        <h1>Аялал нэмэх</h1>
      </a>
      <div className="p-10 flex flex-col gap-5 w-full items-center justify-center h-full">
        <div>Ачлалын мэдээллүүд орж ирнэ. Тун уудахгүй засварлах болно.</div>
        <button
          className="p-3 rounded-lg bg-primary text-white"
          onClick={submitTravel}
        >
          Аялал нэмэх
        </button>
      </div>
    </div>
  );
};
