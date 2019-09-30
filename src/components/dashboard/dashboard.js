import React, {useEffect} from 'react';
import { inject, observer } from 'mobx-react'
import { Spinner, ListGroup } from "react-bootstrap";
import EditDelete from './../buttons/edit-delete'
// @inject('dashboardStore')
// @observer
// class Dashboard extends React.Component{
//     constructor(props){
//         super(props)
//     }

//     componentWillMount(){
//         this.props.dashboardStore.setUser()

//     }   

//     componentDidUpdate(prevProps){
//         console.log(this.props.dashboardStore.userData)

//     }

//     render(){
//         return(
//             <div>
//                 <h2>Dashboard</h2>
//             </div>
//         )
//     }
// }

const Dashboard = inject('dashboardStore','authStore')(observer((props) => {
    

    useEffect(() => {
        console.log(props.authStore.loginData)
        props.dashboardStore.setUser()
        
    },[]);

    const redirectToDetails = id =>{
        props.history.push(`/details/${id}`)
    }

    let displayData = () => (
        props.dashboardStore.userData.length > 0 ? props.dashboardStore.userData.map((data, i) => (
                <ListGroup.Item key={data.id} >
                 <span onClick={() => redirectToDetails(data.id)}>{data.email}</span>
                <EditDelete data = {data}/>
                </ListGroup.Item>
            
        ))
        :
        <Spinner animation="grow"></Spinner>
    )

    return (
        <div className="container">
            {displayData()}
        </div>
    )
}))

export default Dashboard