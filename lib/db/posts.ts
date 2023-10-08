import { RecordModel } from "pocketbase";
import { pb } from "../connect";

const COLLECTION_NAME = "posts";


export type Post = RecordModel & {
    Image:string,
    ImageURL:string,
    Name:string,
    Description:string,
    Price:number,
    ItemState:string,
    user:string
}

export async function getPostByID(id:string){
    const result = await pb.collection(COLLECTION_NAME).getOne<Post>(id).catch(x => {
        return undefined;
    });
    
    if(result == undefined) return undefined;

    result.ImageURL = pb.files.getUrl(result , result.Image);
    console.log(JSON.stringify(result));
    return result;
}

const POSTS_PER_PAGE = 20;
export async function getPosts(page:number){

    const result = await pb.collection(COLLECTION_NAME).getList<Post>(page, POSTS_PER_PAGE).catch(x => {
        return undefined;
    });

    if(result == undefined) return undefined;

    console.log(result.items.length)

    result.items.forEach((element, index) => {
        result.items[index].ImageURL = pb.files.getUrl(element, element.Image);
    });
    return result;
}

export async function getPageCount(){
    const len = (await pb.collection(COLLECTION_NAME).getList(1, 1)).totalItems;
    return Math.ceil(len / POSTS_PER_PAGE);
}