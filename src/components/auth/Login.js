import React, {useEffect} from 'react'

let Login = ({props}) => {

    useEffect(()=>{
        props.testStore.setTest(400)
    },[])


    return(
        <div>
        </div>
    )
}

export default Login