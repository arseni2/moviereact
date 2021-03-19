import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/style.css'
import '../../style/styleDetail.css'
import React from "react";
import Footer from "../Footer/Footer";
import {FaStar} from "react-icons/fa";
//import { FaBeer } from 'react-icons/fa';
import FormReviews from "./FormReviews";
import {currentMovieType, movieType} from "../../redux/HomeReducer";

export type reviewsType = {
    name: string
    text: string
    movie: number
    user: number
    id: number
}

export type ActorsDirectors = {
    name: string
    image: string
    age: number
    description: string
}

type propsType = {
    movie: Array<movieType>
    isFetching: boolean
    currentMovie: currentMovieType
    getRating: (pk: number) => Promise<void>
    rating:any
    setReviews:(text:string, pk:number | string)=>void
    reviews: Array<reviewsType>
    pk: number | string
    Name: (name:string)=>void
    Text: (text:string)=>void
    setRating: (star: number, movie: number) => Promise<void>
    star: null | number
    movieId: number
    isAuthorized: boolean | null
    userId: number | null
    ReviewsText: (text:string) => void
    textReviews: string
}

function isBigEnough(value: any) {
    return value == 6;
}

let userRiviewsId: any = []
//@ts-ignore
window.userRiviewsId = userRiviewsId

function MovieDetail(props: propsType): JSX.Element {
    console.log(" rerender MovieDetail")
    const onSubmit = (formData:any) => {
        console.log(formData);

    }

    let arr = [1, 2, 3, 4, 5]
    console.log(props)
    let star = props.star
   /* if (!props.currentMovie.actors) {
        // eslint-disable-next-line no-sequences

        return props.currentMovie.actors = []
    }
    if (!props.currentMovie.reviews) {
        return props.currentMovie.reviews = []
    }*/

    return (<>


            <div style={{marginTop: 70 + 'px'}}></div>
            <img style={{paddingLeft: 30 + 'px', paddingTop: 20 + 'px'}} width={430 + 'px'} height={500 + 'px'}
                 src={`http://localhost:8000${props.currentMovie.poster}`}/>
            <div className={"cont"}>
                <strong>title: </strong><p>{props.currentMovie.title}</p><br/>
                <strong>description: </strong><p>{props.currentMovie.description}</p><br/>
                <strong>rating: </strong><p>{arr.map((s, i) => {
                let ratingValue = i + 1
                return <>
                    <label>
                        <input type="radio" name="rating" onClick={() => {

                            console.log(Number(ratingValue))
                            props.setRating(Number(ratingValue), props.movieId)

                            // props.getRating(props.pk)

                        }}/>
                        <FaStar
                            className={"star"}
                            color={(ratingValue < Number(star) + 1) ? "#eac424" : "grey"}
                            size={20}
                        />
                    </label>
                </>
            })}</p>
                <strong>year: </strong><p>{props.currentMovie.year}</p>
                <strong>бюджет: </strong><p>{props.currentMovie.budget}$</p>
                <strong>category: </strong><p>{props.currentMovie.category}</p>
            </div>


        {/*props.isFetching == false ? <Actors isFetching={props.isFetching} actors={props.currentMovie.actors}/> : console.log("net")*/}
            <h1>Reviews</h1>
            <FormReviews isFetching={props.isFetching}
                         setReviews={props.setReviews} pk={props.pk} textReviews={props.textReviews} ReviewsText={props.ReviewsText}/>

            {props.isFetching == false ? Array.from(props.reviews).map((r, i) => {


                return <div key={i}>

                        <>
                            <div className="actionBox">
                                <ul className="commentList">
                                    <li>
                                        <div className="commenterImage">
                                            <img className={"avtar"} width={50 + 'px'} height={50 + 'px'}
                                                 src="https://www.elmechtechnology.com/sites/all/themes/aganhost/demos/no-avatar.jpg"/>
                                        </div>
                                        <div className="commentText">
                                            <strong className={'dataId'}
                                                    data-id={r.user}>{r.name}</strong> <p
                                            className="" style={{wordBreak: "break-all"}}>{r.text}</p>


                                            {r.user == Number(localStorage.getItem("userId")) ? <><button onClick={()=>{
                                            alert(r.id)
                                            }}>delete</button></> : console.log(r.user)}


                                        </div>
                                    </li>
                                </ul>

                            </div>
                        </>



                </div>


            }) : <div>loading...</div>}
            {/*console.log(uid.current.getAttribute('data-id'))*/}

            <Footer/>


        </>
    )
}

export default MovieDetail