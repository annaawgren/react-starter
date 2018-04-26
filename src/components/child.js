import React from "react"
import "./child.css"

class Child extends React.Component {

  handleClick = () => {
    const { callback, index } = this.props
    callback(index)
    // instead of writing two lines of const
  }

  render() {
    const { index } = this.props

    const myClass = (index % 2 === 0) ? "myButton" : "myButton2"

    // const styleObject = {
    //   fontsize: "20px",
    //   color: "white",
    //   outline: "none"
    // }

    return (
      <div>
        <button
          className={myClass}
          onClick={this.handleClick}>Button
        </button>
      </div>
    )
  }
}

export default Child
