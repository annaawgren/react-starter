import React from "react"
import Child from "./child"

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      clickedIndex: null
    }
  }

  savedLastClicked = index => {
    this.setState({ clickedIndex: index })
  }

  render() {
    return (
      <div>
        <div>
          Last clicked: {this.state.clickedIndex}
        </div>
        <Child
          callback={this.savedLastClicked}
          color="blue"
          index={0} />
        <Child
          callback={this.savedLastClicked}
          color="red"
          index={1} />
        <Child
          callback={this.savedLastClicked}
          color="orange"
          index={2} />
        <Child
          callback={this.savedLastClicked}
          color="pink"
          index={3} />
      </div>
    )
  }

}

export default App
