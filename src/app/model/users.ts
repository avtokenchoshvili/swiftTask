
import { Friends} from "./friends";

export interface Users {
  id: number;
  firstName: string;
  lastName: string;
  description: string;
  profilePic: string;
  friendList: Friends[];
}
