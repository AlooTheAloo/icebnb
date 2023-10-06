import { RecordModel } from "pocketbase";
import { pb } from "../connect";

const COLLECTION_NAME = "posts";

export type Post = RecordModel & {
    Image:string[],
    Name:string,
    Description:string,
    Price:number,
}

export async function getPostByID(id:string){
    const result = await pb.collection(COLLECTION_NAME).getOne<Post>(id).catch(x => {
        return undefined;
    });
    
    return result;
}

const POSTS_PER_PAGE = 20;
export async function getPosts(page:number){

    const result = await pb.collection(COLLECTION_NAME).getList<Post>(page, POSTS_PER_PAGE).catch(x => {
        return undefined;
    });

    return result;
}

export async function getPageCount(){
    const len = (await pb.collection(COLLECTION_NAME).getList(1, 1)).totalItems;
    return Math.ceil(len / POSTS_PER_PAGE);
}