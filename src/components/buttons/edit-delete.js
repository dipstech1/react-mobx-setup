import React, {useEffect} from 'react'
import { observer, inject, PropTypes } from 'mobx-react'


const EditDeleteButton = inject('dashboardStore')(observer((props) => {

    useEffect(() => {

    })

    let onDelete = (e) => {
        console.log(props.data.id)
        props.dashboardStore.removeUser(props.data.id);
    }

    return (
        <React.Fragment>
             <span style={{ float: "right" }} onClick = {onDelete}>
            <i className="fa fa-fw fa-trash"></i>
        </span>
        <span style={{ float: "right", paddingRight: "10px" }}>
            <i className="fa fa-fw fa-pencil"></i>
        </span>
        </React.Fragment>
       
    )
}))

export default EditDeleteButton