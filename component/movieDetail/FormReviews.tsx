import React from 'react'

declare global {
    interface Window { name12: any, text: string, email:string, password:string, username: any, avatar:any, url:any, textValue: any}
}

type PropsType = {
    setReviews: (text: string, pk: number | string)=> void
    isFetching: boolean
    pk: number | string
    ReviewsText: (text:string)=>void
    textReviews: string
}

function FormReviews(props: PropsType) {
    let click = (text:string) => {
        props.setReviews(text, props.pk)
        props.ReviewsText('')

    }
    console.log(props.isFetching)

    return (<>
            {localStorage.getItem('userId') != null ?
            <>
                <textarea className={"textarea"} // @ts-ignore
                          name={"text"}

                          placeholder="text" onChange={(e) => {

                    props.ReviewsText(e.target.value)


                }} value={String(props.textReviews)} /> <br/>

                <button onClick={() => {

                    click(props.textReviews)

                }} style={{marginLeft: 230 + 'px'}} disabled={props.isFetching} type={"submit"}>Submit
                </button>
            </>
                : <p> authorization </p>}



        </>

    )
}

export default FormReviews