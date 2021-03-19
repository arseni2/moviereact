import axios, {AxiosResponse} from "axios";
import {string} from "prop-types";
import {currentMovieType, movieType} from "../redux/HomeReducer";
import {dataTokenType} from "../type/types";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api-auth/',
    headers:{

    }
});
export type isUserType = {
    isUser: boolean
}
function getCookie(name: string) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

/*String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}*/

export const MovieApi = {
    getMovie() {
        return instance.get(`movie`)
            .then((response:AxiosResponse<movieType>) => {
                return response.data;
            });
    },
    getGenres(){
        return instance.get(`genres`)
            .then((response) => {
                return response.data
            })
    },
    getDetailMovie(pk:number){
        return instance.get(`movie/${pk}`)
            .then((response:AxiosResponse<currentMovieType>)=>{
                return response.data
            })
    },
    getRating(pk:number){
        return instance.get(`rating/get/${pk}`)
            .then((response)=>{
                return response.data
            })
    },
    setRating(star: number, movie: number){
        debugger
       return axios({
            method: "POST",
            url: "http://localhost:8000/api-auth/rating",
            headers: {
                "Content-Type": "application/json"
            },
            data: {
                star: star,
                movie: movie

            }
        })
            .then(res => {

               return res.data

            })

    },
    searchMovie(text:string){
        return instance.get(`m?search=${text}`)
            .then((res)=>{
                return res.data
            })
    },
    GenreMovie(number: any){
        /*тут приходит по одному элементу мб тут сдклать один обьект*/
        console.log(number)
        let arr = Object.values(number)
        console.log(arr)
        window.url = 'moviefilter?'
        if(arr.length){
            let str = `${number[Object.keys(number)[0]]}`
            window.url += `${number[Object.keys(number)[0]]}`.substring(1)
            console.log(number[Object.keys(number)[0]])
        }
        for(let item in number){
            window.url += number[item]
        }let url = window.url//.replaceAt(11-1, "?")
        console.log(url)
        return instance.get(`${url}`)
            .then((res)=>{
                return res.data
            })

    },
    CreateReviews(text:string, movie:number | string){
       return axios({
            method: "POST",
            url: `http://localhost:8000/api-auth/reviews`,
            headers: {
                "Content-Type": "application/json"
            },
           data: {
                text: String(text),
                movie: Number(movie),
                name: String(localStorage.getItem("name")),
                user: Number(localStorage.getItem("userId"))
            }
        })

            .then(res => {

                return res.data

            })
       /* return instance.get(`reviews/${movie}`)
            .then((res)=>{
                return res.data
            })*/

    },
    getReviews(movieid:number){

        return instance.get(`reviews/${movieid}`)
            .then((res)=>{
                return res.data
            })

    },
    Login(name: string | null, password: string, email: string, file: any){
        const csrftoken = getCookie('csrftoken');

        let formData = new FormData()
        formData.append('userPhotos', file)
        formData.append('password', password)
        formData.append('email', email)
        // @ts-ignore
        formData.append('name', name)

        return axios({
            withCredentials: true,
            url: 'http://localhost:8000/auth/users/',
            method: 'POST',
            data: formData,
            headers:{
                'X-CSRFToken': csrftoken
            }
        }).then((res)=>{
            return res.data
        })


    },
    Token(password: string, email: string){
        const csrftoken = getCookie('csrftoken');

        let formData = new FormData()
        formData.append('password', password)
        formData.append('email', email)

        return axios({
            withCredentials: true,
            url: 'http://localhost:8000/auth/jwt/create',
            method: 'POST',
            data: formData,
            headers:{
                'X-CSRFToken': csrftoken
            }
        }).then((res:AxiosResponse<dataTokenType>)=>{
            return res.data
        })

    },
    userProfile(){
        // http://localhost:8000/auth/users/me/
        return axios({
            withCredentials: true,
            url: 'http://localhost:8000/auth/users/me/',
            method: 'GET',
            data: localStorage.getItem("name"),
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res)=>{
            return res.data
        })
            .catch((err)=>{
                return err
            })
    },

    tokenRefresh(){
        // http://localhost:8000/auth/users/me/
        return axios({
            withCredentials: true,
            url: 'http://localhost:8000/auth/jwt/refresh', //http://localhost:8000/auth/jwt/refresh
            method: 'POST',
            data: {refresh: localStorage.getItem('tokenRefresh')},
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((res:AxiosResponse<dataTokenType>)=>{
            localStorage.removeItem('token')
            localStorage.setItem('token', res.data.access)
            console.log(res.data.access)
            return res.data
        })
            .catch((err)=>{
                return err
            })
    },
    logIn(email:string){
        return axios({
            withCredentials: true,
            url: `http://localhost:8000/api-auth/loginuser?email=${email}`,
            method: 'GET',
        }).then((res)=>{
            console.log(res.data)
            return res.data
        })
            .catch((err)=>{
                return err
            })
    },
    userId(email:string){
        return axios({
            withCredentials: true,
            url: `http://localhost:8000/home/?email=${email}`,
            method: 'GET',
        }).then((res)=>{
            console.log(res.data)
            return res.data
        })
            .catch((err)=>{
                return err
            })
    },
    isUser(){
        return axios({
            withCredentials: true,
            url: `http://localhost:8000/api-auth/user/`,
            method: 'GET',
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then((res:AxiosResponse<isUserType>)=>{
                return res.data
            })
    },
}
//setInterval(()=>{MovieApi.tokenRefresh()},150000)


