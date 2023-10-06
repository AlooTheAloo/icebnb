import { RecordModel } from "pocketbase";
import { getAuthEmail, getAuthPassword, pb } from "../connect";

const COLLECTION_NAME = "post";

type post = RecordModel & {
    Image:Buffer,
    Name:string,
    Description:string,
    Price:number,
}

export async function getPostByID(id:string){
    const result = await pb.collection('posts').getOne<post>(id).catch(x => {
        return undefined;
    });

    return result;

}