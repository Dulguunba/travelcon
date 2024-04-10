import { DestinationCategory } from "./destinationCategoryTypes";
import { Destination } from "./destinationTypes";
import { Review } from "./reviewTypes";
import { Tours } from "./toursTypes";
import { Travel } from "./travelTypes";

export interface FetchDataProps {
  toursData: Tours;
  travelDatas: Travel;
  destinationDatas: Destination;
  categoryDatas: DestinationCategory;
  state?: string;
  reviewDatas?: Review;
}
