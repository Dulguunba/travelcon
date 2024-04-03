import Image from "next/image";
import { Inter } from "next/font/google";
import { OrderCard } from "@/components/supports/bookingOrderPage/OrderCard";

const inter = Inter({ subsets: ["latin"] });

export default function Bookingorder() {
  const calendars = [
    {
      startDay: "2024-04-06",
      startTime: "18:11",
      endDay: "2024-04-11",
      endTime: "18:12",
    },
  ];

  return (
    <main
      className={`flex min-h-screen max-h-screen h-full flex-col w-1/3 items-start justify-start bg-gray-50 ${inter.className}`}
    >
      <OrderCard calendar={calendars} />
    </main>
  );
}
