import React, { useState } from "react";
import { usePageStore, useTravelCalendarStore, useTravelStore , useTravelRouteStore, CalendarType} from "@/functions/AdminFunctions";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteIcon from '@mui/icons-material/Delete';
import { CalendarAdd } from "./CalendarAdd";

export const CalendarAdmin = () => {
  const {
    travelCalendarsZustand,
    updateTravelCalendarZustand,
    deleteTravelCalendarZustand,
  } = useTravelCalendarStore();
  const { page, increment, decrement } = usePageStore();
  const { travel, updateTravel } = useTravelStore();

  const decreasePageNumber = () => {
    decrement(1);
  };

  const deleteCalendar = (data: CalendarType) => {
    deleteTravelCalendarZustand(data);
  };

  const submitTravelCalendar = () => {
    console.log("calendar", travelCalendarsZustand);
    updateTravel({ calendar: travelCalendarsZustand });
    console.log("travel ", travel);
    increment(1);
  };

  return (
    <div
      className={`   w-full h-full min-h-screen ${
        page == 6 ? "flex" : "hidden"
      } gap-7  flex-col justify-start items-start relative`}
    >
      <a className="w-full flex gap-7 items-center bg-white" href="/">
        <ArrowBackIosIcon/>
        <h1>Аялал нэмэх</h1>
      </a>
      <ul className="w-full justify-center steps steps-vertical lg:steps-horizontal mt-5">
        <li className="step step-primary ">General information</li>
        <li className="step step-primary">Food & Traffic</li>
        <li className="step step-primary">Category</li>
        <li className="step step-primary">Picture</li>
        <li className="step step-primary">Routes</li>
        <li className="step font-semibold step-primary">Calendar</li>
      </ul>
      <div className="p-10 flex gap-5 w-full items-center justify-center h-full">
        <div className="flex flex-col w-2/3  bg-white rounded-lg p-5">
          <div className="w-full flex gap-3">
            <div className="w-1/3">
              <CalendarAdd />
            </div>
            <div className="w-2/3">
              <table className="table bg-white">
                {/* head */}
                <thead>
                  <tr>
                    <th></th>
                    <th>Эхлэх өдөр</th>
                    <th>Эхлэх цаг</th>
                    <th>Дуусах өдөр</th>
                    <th>Дуусах цаг</th>
                    <th>Устгах</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {travelCalendarsZustand.map(
                    (calendarInfo: CalendarType, index) => {
                      return (
                        <tr>
                          <th>{index + 1}</th>
                          <td>{calendarInfo?.startDay}</td>
                          <td>{calendarInfo?.startTime}</td>
                          <td>{calendarInfo?.endDay}</td>
                          <td>{calendarInfo?.endTime}</td>
                          <td>
                            <button
                              onClick={() => deleteCalendar(calendarInfo)}
                            >
                              <DeleteIcon/>
                            </button>
                          </td>
                        </tr>
                      );
                    }
                  )}
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
              onClick={submitTravelCalendar}
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
