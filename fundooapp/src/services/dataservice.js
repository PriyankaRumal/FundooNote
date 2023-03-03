import axios from "axios";
const headerConfig={
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
}
const BaseUrl="https://localhost:44335/api/Note"
export const CreateNoteApi=(data)=>{
    console.log(data)
    const response=axios.post(`${BaseUrl}/CreateNote `,data,headerConfig)
    return response
}
export const GetAllNoteApi=()=>{
    const response=axios.get(`${BaseUrl}/RetriveAll`,headerConfig)
    return response
}
export const ArchiveOrNotApi=(noteId)=>{
    const response=axios.put(`${BaseUrl}/ArchieveNote?noteId=${noteId}`,noteId,headerConfig)
    return response
}
export const ColorApi=(data)=>{
    const response=axios.put(`${BaseUrl}/ColorNote`,data,headerConfig)
    return response
}
export const UpdateNoteApi=(id,data)=>{
    const response=axios.put(`${BaseUrl}/UpdateApi?noteId=${id}`,data,headerConfig)
    return response
}
