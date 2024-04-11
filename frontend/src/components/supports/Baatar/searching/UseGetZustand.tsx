import { create } from"zustand"

type travelInfo = {
    destination:{}[]
}

export const getTravelZustand = create<travelInfo>((set)=>({
    destination:[]
}))