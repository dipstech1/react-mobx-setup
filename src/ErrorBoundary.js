import React, { Component } from 'react'
import Error from './components/error/Error';

class ErrorBoundary extends Component {

    constructor(props){
        super(props)

        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError : true
        }
    }

    componentDidCatch(error, info){
        console.log("Error ", this.props);
        console.log("Info ", info);
       if(error){
        // //    this.props.history.push("/err")
        //    this.context.router.history.push("/err")
        
       }
    }

    render() {
        if(this.state.hasError){
            return <Error/>
        }
        return this.props.children
    }
}

export default ErrorBoundary