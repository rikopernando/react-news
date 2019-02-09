console.log('app.js is running!')

// JSX = JavaScript XML
const template = ( 
  <div>
    <h1>Hello Indonesia</h1>
    <p>Indecisionn App by Riko Pernando</p>
  </div>
)

const todos = [
  'Write Code', 'Learn Code', 'Deploy React On Server', 'Breakfast'
] 

const templateTwo = (
  <div>
    <h1> My Todo todayssss </h1>
    <ol>
    {
      todos.map((todo, key) => <li key={key}>{todo}</li>)
    }
    </ol>
  </div>
)


// events & attribute
let count = 0

const addCount = () => {
  count++
  console.log('addCount',count)
  reactCounterApp()
}

const minCount = () => {
  count--
  console.log('minCount')
  reactCounterApp()
}

const resetCount = () => {
  count = 0
  console.log('resetCount')
  reactCounterApp()
}

const reactCounterApp = () => {

  const templateThree = (
    <div>
      <h1> Count : { count } </h1>
      <button onClick={addCount}>+1</button>
      <button onClick={minCount}>-1</button>
      <button onClick={resetCount}>reset</button>
    </div>
  )


}

//reactCounterApp()
//

class CounterApp extends React.Component {

  constructor() {
    super()
    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)
    this.state = {
      count : 0 
    }
  }

  handleAddOne () {
    this.setState((prevState) => {
      console.log(prevState)
      return {
        count : prevState.count + 1 
      } 
    })
  }

  handleMinusOne() {
    this.setState((prevState) => {
      console.log(prevState)
      return {
        count : prevState.count - 1 
      } 
    })
    console.log('handleMinusOne') 
  }

  handleReset () {
    console.log('handleReset') 
  }

  render() {
    const { count } = this.state
    return(
      <div>
        <h1> Counter : {count} </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    ) 
  }
}

ReactDOM.render(<CounterApp />, document.getElementById('app'))
