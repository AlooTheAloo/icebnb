import { RecordModel } from "pocketbase"
import { pb } from "../connect"

export type User = RecordModel & {
    username:string
}

const COLLECTION_NAME = "users";

export async function getUserIDByUsername(username:String){
    const result = await pb.collection(COLLECTION_NAME).getFirstListItem<User>(`username = '${username}'`, {
        username: username
    }).catch(x => {
        return null;
    });

    return result;
}