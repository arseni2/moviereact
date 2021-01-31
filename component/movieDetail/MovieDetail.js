import 'bootstrap/dist/css/bootstrap.min.css';
import '../../style/style.css'
import '../../style/styleDetail.css'
import React, {useState} from "react";
import Footer from "../Footer/Footer";
import {FaStar} from "react-icons/fa";
//import { FaBeer } from 'react-icons/fa';
import FormReviews from "./FormReviews";


let MovieDetail = (props) => {
    console.log(" rerender MovieDetail")
    const onSubmit = (formData) => {
        console.log(formData);

    }

    let arr = [1,2,3,4,5]
    console.log(props)
    let star = props.star

    React.useEffect(() => {
       props.MovieId(props.currentMovie.id)
    })


        if (!props.currentMovie.actors) {
            // eslint-disable-next-line no-sequences

            return props.currentMovie.actors = []
        }
        if (!props.currentMovie.reviews) {
            return props.currentMovie.reviews = []
        }

    console.log(props.currentMovie.reviews)

    //
    //console.log(star)
    return (<>


            <div style={{marginTop: 70 + 'px'}}> </div>
            <img style={{paddingLeft: 30 + 'px', paddingTop: 20 + 'px'}} width={430 + 'px'} height={500 + 'px'}
                 src={props.currentMovie.url}/>
            <div className={"cont"}>
                <strong>title: </strong><p>{props.currentMovie.title}</p><br/>
                <strong>description: </strong><p>{props.currentMovie.description}</p><br/>
                <strong>rating: </strong><p>{arr.map((s, i)=>{
                    let ratingValue = i+1
                   return <>
                       <label>
                           <input type="radio" name="rating" onClick={() => {

                               console.log(Number(ratingValue))
                               props.setRating(Number(ratingValue),props.movieId)

                              // props.getRating(props.pk)

                           }}/>
                       <FaStar
                        className={"star"}
                        color={ (ratingValue<Number(star)+1) ?"#eac424":"grey"}
                    size={20}
                    />
                       </label>
                    </>
            })}</p>
                <strong>year: </strong><p>{props.currentMovie.year}</p>
                <strong>бюджет: </strong><p>{props.currentMovie.budget}$</p>
                <strong>category: </strong><p>{props.currentMovie.category}</p>
            </div>


            <div style={{paddingLeft: 30 + 'px'}}>
                <h1>actors and directors</h1>

                {props.isFetching == false ? props.currentMovie.actors.map((a, i) => {
                    return <div key={i+1 ?? 1}>
                        <img width={200 + 'px'} height={200 + 'px'} style={{borderRadius: 50 + '%'}} src={a.image}
                             key={i}/>
                        <p key={i}>{a.name}</p>


                    </div>
                }) : <div>loading...</div>}
            </div>
            <h1>Reviews</h1>
            <FormReviews  isFetching={props.isFetching}
                          setReviews={props.setReviews} pk={props.pk}/>
            {props.isFetching == false ? Array.from(props.reviews).map((r, i) => {

                return <div key={i}>
                    {console.log(props.reviews[0])}
                    <div className="actionBox">
                        <ul className="commentList">
                            <li>
                                <div className="commenterImage">
                                    <img className={"avtar"} width={50 + 'px'} height={50 + 'px'}
                                         src="https://www.elmechtechnology.com/sites/all/themes/aganhost/demos/no-avatar.jpg"/>
                                </div>
                                <div className="commentText">
                                    <strong>{r.name}</strong> <p className="" style={{wordBreak: "break-all"}}>{r.text}</p>

                                </div>
                            </li>
                        </ul>
                    </div>
                </div>


            }) : <div>loading...</div>}{/**/}

            <Footer/>


        </>
    )
}

export default MovieDetail