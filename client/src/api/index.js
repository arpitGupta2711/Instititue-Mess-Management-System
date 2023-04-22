import axios from 'axios'
const API = axios.create({baseURL:'http://localhost:8000'})
// const url = "http://localhost:5000/posts";
// API.interceptors.request.use((req)=>{
//     if(localStorage.getItem('profile')){
//         console.log("token in header" ,JSON.parse(localStorage.getItem('profile')).token);
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }
//     return req

// })
// export const comment = (value,id)=>API.post(`/posts/${id}/commentPost`,{value})
// export const fetchPost = (id)=>API.get(`/posts/${id}`)
// export const fetchPosts = (page)=>API.get(`/posts?page=${page}`)
// export const fetchPostBySearch = (searchQuery)=>API.get(`/posts/search?searchQuery=${searchQuery.search||'none'}&tags=${searchQuery.tags}`)
// export const createPost = (newPost) =>API.post('/posts',newPost)
// export const updatedPost =(id,updatedPost)=>API.patch(`/posts/${id}`,updatedPost)
// export const deletePost = (id)=>API.delete(`/posts/${id}`)
// export const likePost = (id)=>API.patch(`/posts/${id}/likePost`)


// export const signin = (formData)=>API.post('/user/signin',formData);
// export const signup = (formData)=>API.post('/user/signup',formData);

export const fetchMenu = ()=>API.get('/');
export const scanQr = (data)=>API.post('/scan',data);
export const viewTokens = (data)=>API.post('/get-tokens',data);