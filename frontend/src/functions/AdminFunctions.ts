import { RouterEvent } from "next/router";
import { create } from "zustand";

type StatePage = {
  page: number;
};

type PageActions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
  updatePage: (qty: number) => void;
};

export const usePageStore = create<StatePage & PageActions>((set) => ({
  page: 1,
  increment: (qty: number) => set((state) => ({ page: state.page + qty })),
  decrement: (qty: number) => set((state) => ({ page: state.page - qty })),
  updatePage: (qty: number) => set((state) => ({ page: qty })),
}));

type StateTravel = {
  travel: object;
};

type TravelActions = {
  updateTravel: (qty: object) => void;
};

export const useTravelStore = create<StateTravel & TravelActions>((set) => ({
  travel: {},
  updateTravel: (qty: object) =>
    set((state) => ({ travel: { ...state.travel, ...qty } })),
}));

export type RouteType = {
  startPoint: string;
  endPoint: string;
  sectionDuration: number;
  vehicle: string;
  place: string;
  activity: string;
  sectionImage: string;
};

type StateRoute = {
  travelRoutesZustand: RouteType[];
};

type TravelRouteActions = {
  updateTravelRouteZustand: (route: RouteType) => void;
  deleteTravelRouteZustand: (deleteRoute: RouteType) => void;
};

export const useTravelRouteStore = create<StateRoute & TravelRouteActions>(
  (set) => ({
    travelRoutesZustand: [],
    updateTravelRouteZustand: (route: RouteType) =>
      set((state) => ({
        travelRoutesZustand: [...state.travelRoutesZustand, route as RouteType],
      })),
    deleteTravelRouteZustand: (deleteRoute: RouteType) =>
      set((state) => ({
        travelRoutesZustand: state.travelRoutesZustand.filter(
          (route) =>
            !(
              route.startPoint === deleteRoute.startPoint &&
              route.endPoint === deleteRoute.endPoint
            )
        ),
      })),
  })
);

export type CalendarType = {
  startDay: string;
  endDay: string;
  startTime: string;
  endTime: string;
};

type StateCalendar = {
  travelCalendarsZustand: CalendarType[];
};

type TravelCalendarActions = {
  updateTravelCalendarZustand: (Calendar: CalendarType) => void;
  deleteTravelCalendarZustand: (deleteCalendar: CalendarType) => void;
};

export const useTravelCalendarStore = create<
  StateCalendar & TravelCalendarActions
>((set) => ({
  travelCalendarsZustand: [],
  updateTravelCalendarZustand: (Calendar: CalendarType) =>
    set((state) => ({
      travelCalendarsZustand: [
        ...state.travelCalendarsZustand,
        Calendar as CalendarType,
      ],
    })),
  deleteTravelCalendarZustand: (deleteCalendar: CalendarType) =>
    set((state) => ({
      travelCalendarsZustand: state.travelCalendarsZustand.filter(
        (Calendar) =>
          !(
            Calendar.startDay === deleteCalendar.startDay &&
            Calendar.endDay === deleteCalendar.endDay &&
            Calendar.startTime === deleteCalendar.startTime &&
            Calendar.endTime === deleteCalendar.endTime
          )
      ),
    })),
}));

type CartTravel = {
  travelId: string;
};

type CartAction = {
  updateTravel: (qty: string) => void;
  removeTravel: () => void;
};

export const useTravelCartStore = create<CartTravel & CartAction>((set) => ({
  travelId: "",
  updateTravel: (qty: string) => set((state) => ({ travelId: qty })),
  removeTravel: () => set((state) => ({ travelId: "" })),
}));

type OrderId = {
  OrderId: string;
};

type OrderIdAction = {
  updateOrderId: (qty: string) => void;
  removeOrderId: () => void;
};

export const useOrderIDStore = create<OrderId & OrderIdAction>((set) => ({
  OrderId: "",
  updateOrderId: (qty: string) => set((state) => ({ OrderId: qty })),
  removeOrderId: () => set((state) => ({ OrderId: "" })),
}));
