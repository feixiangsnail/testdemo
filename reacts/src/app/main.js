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