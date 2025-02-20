import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const addImageApi = async(reqBody)=>{
    return await commonApi('POST' , `${serverUrl}/images`,reqBody)
}

export const getImageApi = async()=>{
    return await commonApi('GET' , `${serverUrl}/images`,"")
}


export const  removeImageApi = async (id)=>{
    return await commonApi('DELETE',`${serverUrl}/images/${id}`,{})
}