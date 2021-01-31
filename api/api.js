import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:8000/api-auth/',
    headers:{

    }
});
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
export const MovieApi = {
    getMovie() {
        return instance.get(`movie`)
            .then(response => {
                return response.data;
            });
    },
    getGenres(){
        return instance.get(`genres`)
            .then((response) => {
                return response.data
            })
    },
    getDetailMovie(pk){
        return instance.get(`movie/${pk}`)
            .then((response)=>{
                return response.data
            })
    },
    getRating(pk){
        return instance.get(`rating/get/${pk}`)
            .then((response)=>{
                return response.data
            })
    },
    setRating(star, movie){
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
    searchMovie(text){
        return instance.get(`m?search=${text}`)
            .then((res)=>{
                return res.data
            })
    },
    GenreMovie(number){
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
    CreateReviews(text, movie, name){
       return axios({
            method: "POST",
            url: `http://localhost:8000/api-auth/reviews`,
            headers: {
                "Content-Type": "application/json"
            },
           data: {
                text: String(text),
                movie: Number(movie),
                name: String(name)

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
    getReviews(movieid){

        return instance.get(`reviews/${movieid}`)
            .then((res)=>{
                return res.data
            })

    }
}

