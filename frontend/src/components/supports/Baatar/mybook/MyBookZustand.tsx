import { create } from "zustand"

type BookType = {
    count:Number;
}

export const useBooking = create<BookType>((set)=>({
    count:1,
}))