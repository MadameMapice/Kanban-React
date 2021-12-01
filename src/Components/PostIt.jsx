function PostIt(props) {

    return (

        <div className='postit'>

            <p>{props.obj.titre}</p>

            <p>{props.obj.content}</p>

            <div className='flech'>
                <p>&lang;</p>
                <p>&rang;</p>
            </div>

        </div>

    )

}

export default PostIt