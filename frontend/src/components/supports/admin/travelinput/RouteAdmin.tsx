import React from "react";
import { instance } from "@/functions/TravelUtilities";
import { usePageStore, useTravelCalendarStore, useTravelStore , useTravelRouteStore, CalendarType} from "@/functions/AdminFunctions";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { RouteAdd } from "./RouteAdd";
import DeleteIcon from '@mui/icons-material/Delete';
import { RouteType } from "@/functions/AdminFunctions";

export const RouteAdmin = () => {
  const {
    travelRoutesZustand,
    updateTravelRouteZustand,
    deleteTravelRouteZustand,
  } = useTravelRouteStore();
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();

  const decreasePageNumber = () => {
    decrement(1);
  };

  const deleteRoute = (data: RouteType) => {
    deleteTravelRouteZustand(data);
  };

  const submitTravelRoute = () => {
    console.log("route", travelRoutesZustand);

    updateTravel({ route: travelRoutesZustand });
    increment(1);
    console.log("travel", travel);
  };

  return (
    <div
      className={`   w-full h-full min-h-screen ${
        page == 5 ? "flex" : "hidden"
      } gap-7  flex-col justify-start items-start`}
    >
      <a className="w-full flex gap-7 items-center bg-white" href="/">
        <ArrowBackIosIcon />
        <h1>Аялал нэмэх</h1>
      </a>
      <ul className="w-full justify-center steps steps-vertical lg:steps-horizontal mt-5">
        <li className="step step-primary ">General information</li>
        <li className="step step-primary">Food & Traffic</li>
        <li className="step step-primary">Category</li>
        <li className="step step-primary">Picture</li>
        <li className="step font-semibold step-primary">Routes</li>
        <li className="step">Calendar</li>
      </ul>
      <div className="p-10 flex gap-5 w-full items-center justify-center h-full">
        <div className="flex flex-col w-[95%]  bg-white rounded-lg p-5">
          <div className="w-full flex gap-3">
            <div className="w-1/3">
              <RouteAdd />
            </div>
            <div className="w-2/3">
              <table className="table bg-white">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Эхлэх цэг</th>
                    <th>Дуусах цэг</th>
                    <th>Үргэлжлэх хугцаа</th>
                    <th>Тээврийн хэрэгсэл</th>
                    <th>Байрлах газар</th>
                    <th>Зураг</th>
                    <th>Устгах</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {travelRoutesZustand.map((RouteInfo: RouteType, index) => {
                    return (
                      <tr>
                        <th>{index + 1}</th>
                        <td>{RouteInfo?.startPoint}</td>
                        <td>{RouteInfo?.endPoint}</td>
                        <td>{RouteInfo?.sectionDuration}</td>
                        <td>{RouteInfo?.vehicle}</td>
                        <td>{RouteInfo?.place}</td>
                        <td>{RouteInfo.sectionImage ? "Yes" : "No"}</td>
                        <td>
                          <button onClick={() => deleteRoute(RouteInfo)}>
                            <DeleteIcon />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex justify-between items-center mt-2">
            <a
              onClick={decreasePageNumber}
              className="bg-primary p-2 rounded text-white"
            >
              Буцах
            </a>
            <button
              onClick={submitTravelRoute}
              className="bg-primary p-2 rounded text-white"
            >
              Дараах
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
