import React from 'react';
import ReactDom from 'react-dom';
// class ShoppingList extends React.Component {
//     render() {
//       return (
//         <div className="shopping-list">
//           <h1>222</h1>
//           <ul>
//             <li>Instagram</li>
//             <li>WhatsApp</li>
//             <li>Oculus</li>
//           </ul>
//         </div>
//       );
//     }
//   }
   
class Square extends React.Component {
    constructor() {
      super();
      this.state = {
        value: 2,
      };
    }
  
    render() {
      return (
        <button className="square" onClick={() => this.setState({value: 'X'})}>
          {this.state.value}
        </button>
      );
    }
  }


  ReactDom.render(
    <Square />,
    document.getElementById('app')
)







//----------------------
import React from "react"
import ReactDom from "react-dom"
class Life extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      opacity: 1
    }
    this.distroyComponent = this.distroyComponent.bind(this)
  }
  distroyComponent(){
    console.log("abcdestroied")
    ReactDom.unmountComponentAtNode(document.getElementById('app'))
  }
  componentDidMount(){
    let temp = 0.08;
    this.intervalId = setInterval(()=>{
      let {opacity} = this.state
      opacity-=temp;
      if (opacity<=0 ||opacity>=1){
        temp = -temp;
      }
      
      this.setState({opacity})

    },200)
   
  }
  componentWillMount(){
    console.log(this.state)
    console.log("willmounted")
  }
 componentWillUnmount(){
   clearInterval(this.intervalId)
 }
  render() {
    const { opacity } = this.state
    return (
      <div>
        <h2 id="example" style={{opacity:opacity}}>
            {this.props.msg}
        </h2>
        <button onClick={this.distroyComponent}>dianji</button>
      </div>
    )
  }
}

ReactDom.render(<Life msg="tainanle"/>,document.getElementById("app"))




