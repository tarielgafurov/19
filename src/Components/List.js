import React from "react"
import './List.css'

class List extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    {this.props.items.map((item , index) => (
                    <li className="list" key={index} >
                        {item}
                        <button onClick={this.props.deleteTask.bind(this,index)}>🧺</button>
                        </li>
                       ))}
                </ul>
            </div>
        )
    }
}

export default List