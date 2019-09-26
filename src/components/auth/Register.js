import React from 'react'

class Register extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <form>
                    <div>
                        <input type="text" placeholder="email"/>
                    </div>

                    <div>
                        <input type="text" placeholder="email"/>
                    </div>
                </form>
            </div>
        )
    }
}