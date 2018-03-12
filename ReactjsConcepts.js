// Jsfiddle HTML
<div id="app" class="appex">
    <!-- This element's contents will be replaced with your component. -->
</div>


// Jsfiddle CSS
#app {
  background-color: orange
}

.appex {
 background-color: red
}


// Jsfiddle React JS
class App extends React.Component {
   constructor(props) {
      super(props);
		
      this.state = {
         data: 'Enter Here..'
      }
      this.updateState = this.updateState.bind(this);
      this.clearInput = this.clearInput.bind(this);
   };
   updateState(e) {
      this.setState({data: e.target.value});
   }
   clearInput() {
       alert(this.refs.myInput.value);
      this.setState({data: ''});
      ReactDOM.findDOMNode(this.refs.myInput).focus();
   }
   render() {
      return (
         <div>
         <h1>{this.props.headerProp}</h1>
            <input value = {this.state.data} onChange = {this.updateState} 
               ref = "myInput"></input>
            <button onClick = {this.clearInput}>CLEAR</button>
            <h4>{this.state.data}</h4>
         </div>
      );
   }
}
ReactDOM.render(<App headerProp = "I am Props"/>, document.getElementById('app'));


// KEYS -optional in Jsfiddle
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);
