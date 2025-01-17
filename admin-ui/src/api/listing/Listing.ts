import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { WishList } from "../wishList/WishList";

export type Listing = {
  createdAt: Date;
  discription: string;
  id: string;
  listingCreatedBy?: User;
  locationtype: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmeneties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  title: string;
  trips?: Array<Trip>;
  updatedAt: Date;
  wishLists?: Array<WishList>;
};
