import { RecordModel } from "pocketbase";
import { pb } from "../connect";
import { Truculenta } from "next/font/google";

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
    return result;
}

const POSTS_PER_PAGE = 6;
export async function getPosts(page:number){

    const result = await pb.collection(COLLECTION_NAME).getList<Post>(page, POSTS_PER_PAGE).catch(x => {
        return undefined;
    });

    if(result == undefined) return undefined;

    result.items.forEach((element, index) => {
        result.items[index].ImageURL = pb.files.getUrl(element, element.Image);
    });
    return result;
}

export async function getPageCount(){
    console.log("Someone is getting page count .. ");
    const len = (await pb.collection(COLLECTION_NAME).getList(1, 1)).totalItems;
    return Math.ceil(len / POSTS_PER_PAGE);
}

export async function deletePost(id:string){
    let retval = true;
    await pb.collection(COLLECTION_NAME).delete(id).catch(x => {
        retval = false;
    });
    return retval;
}

export async function createPost(formData:FormData){
    let retval = true;
    await pb.collection(COLLECTION_NAME).create(formData).catch(x => {
        retval = false;
    });
    return retval;
}

export async function modifyPost(formData:FormData){ 
    const id = formData.get("ID")?.valueOf();
    if(typeof(id) != "string") return false;
    const img = formData.get('Image');
    if(img == null || img == undefined || img == ""){ 
        formData.delete("Image");
    }


    let retval = true;

    await pb.collection(COLLECTION_NAME).update(id, formData).catch(x => {
        retval = false;
    });

    return retval;
    

}