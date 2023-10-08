import { RecordModel } from "pocketbase"
import { pb } from "../connect"

export type UserModel = { 
    username:string
}

export type User = RecordModel & UserModel;

const COLLECTION_NAME = "users";

export async function getUserIDByUsername(username:String){
    const result = await pb.collection(COLLECTION_NAME).getFirstListItem<User>(`username = '${username}'`, {
        username: username
    }).catch(x => {
        return null;
    });

    return result;
}

export async function getUserByID(id:string){
    const result = await pb.collection(COLLECTION_NAME).getOne<User>(id).catch(x => {
        return undefined;
    });
    console.log(result);
    if(result == undefined) return undefined;
    return result;
}

export async function createUserByUsername(username:string){ 
    const userId = await getUserIDByUsername(username);
    if(userId != null) return null; // Already is a user with this uname
    const user:UserModel = { username:username }
    const rec:User = await pb.collection(COLLECTION_NAME).create(user)
    return rec.id;

} 