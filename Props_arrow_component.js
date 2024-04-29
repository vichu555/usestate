import React from "react";
class Props_arrow_component extends React.Component{
    render(){
        return(
            <>
            <h6>props arrow example</h6>
            <p>I am pursuing {this.props.course} course in {this.props.institute}</p>
            </>
        )
    }
}
export default Props_arrow_component;