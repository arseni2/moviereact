import React,{Component} from 'react'

import Carousel from '@brainhubeu/react-carousel'

import '@brainhubeu/react-carousel/lib/style.css'
//import logo from '../Terminator_Genisys.png'
export class OwlDemo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(<><Carousel
                slidesPerPage={3}
                animationSpeed={125}
                offset={-40}
            >
                {this.props.movie.map((m, i)=>{
                   return <img key={i} style={{cursor: "grab", userSelect:"none", marginTop:65+'px'}} height={450+'px'} src={m.url} />



                })}</Carousel></>



        )

    }


}



export default OwlDemo