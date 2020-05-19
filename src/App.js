import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';



// ==================================================


// Tic-tac-toe- works well

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{// status 
          }</div>
          <ol>{// TODO 
          }</ol>
        </div>
      </div>
    );
  }
}

// ========================================
/* This was used by Tic-tac-toe to call the Game and render
ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
*/


class Jotter extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('hello');
  
    console.log('inside jotter');
    console.debug('inside jotter');
		this.state = {
			isLoaded: false,
			items: [],
		};
  }

  /*
  componentDidMount() {
    console.log('I got called');

    //fetch('https://api.npms.io/v2/search?q=react')
    fetch('https://4mryiu5jw5.execute-api.us-west-1.amazonaws.com/Alpha-Dev/alljots?userid=628f634a-0fc8-4ae6-ba7e-eeb3ecb96f0c')
          .then(res => res.json())
          .then(json => {
            console.log('Before calling setState to set to true');
            this.setState({
              isloaded: true,
              items: json,
            })
            console.log('after setting items to true')
          });
          
    }
    */

  async componentDidMount() {
    console.log('ComponentDidMount got called');

    //fetch('https://api.npms.io/v2/search?q=react')
    //const response =[]

    try {
      const response = await fetch('https://4mryiu5jw5.execute-api.us-west-1.amazonaws.com/Alpha-Dev/alljots?userid=628f634a-0fc8-4ae6-ba7e-eeb3ecb96f0c');
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        items: json,
       });

    } catch (error) {
      console.log(error);
    }

    console.log('after setting items to true')
          
  }



	render() {
    
    console.log('Inside Render')
    var {isLoaded, items}= this.state;

    /* THIS WORKS
    return <div className="Jotter">
        <h1> Inside Render of Jotter </h1>;
      </div>;

      return <h1> Testing hello </h1>;
  } 
   
}*/
   
	//	let { items } = this.state;
		if (isLoaded) {
			return <div> Loaded successfully...
        {console.log('Inside loaded successfully')}
        <h1> {this.state.isLoaded} </h1>
        { items.map(item => (
						<div key={item.userid}>
							<li>{item.body}</li>
							<li>{item.title}</li>
							<li>{item.jotid}</li>
						</div>
					)) }
      </div>;
    } 
    else {
			return (
				<div>
          <h1> Loading...</h1>
          {console.log('Inside Else, unsuccessfully')}
          <h1> {this.state.isLoaded} </h1>
          { items.map(item => (
						<div key={item.userid}>
							<li>{item.body}</li>
							<li>{item.title}</li>
							<li>{item.jotid}</li>
						</div>
					)) }
          
				</div>
			);
		}
  } // end of render()
} //end of Jotter()



class Widget extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('hello, Widget Here');
  
    console.log('inside Widget');
    console.debug('inside Widget');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

  /*
  componentDidMount() {
    console.log('I got called');

    //fetch('https://api.npms.io/v2/search?q=react')
    fetch('https://4mryiu5jw5.execute-api.us-west-1.amazonaws.com/Alpha-Dev/alljots?userid=628f634a-0fc8-4ae6-ba7e-eeb3ecb96f0c')
          .then(res => res.json())
          .then(json => {
            console.log('Before calling setState to set to true');
            this.setState({
              isloaded: true,
              items: json,
            })
            console.log('after setting items to true')
          });
          
    }
    */

  async componentDidMount() {
    console.log('ComponentDidMount got called - in Widget Component');

    //fetch('https://api.npms.io/v2/search?q=react')
    //const response =[]

    try {
     //  const response = await fetch('https://phvk9xwk03.execute-api.us-west-1.amazonaws.com/TestStage//widgetbyid?id=HelloWorld!');
      const response = await fetch('https://st9ohl4b0d.execute-api.us-west-1.amazonaws.com/DBTest/dbwidget?id=3');
     
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('Widget: Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('Widget: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('Widget: after setting items to true, twice')
    
    console.log('Widget: state isLoaded:', this.state.isloaded)
    console.log('Widget: gotResp Value:', this.state.gotResp);
    console.log('Widget: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('Widget: Inside Render:', this.state.isLoaded)
    console.log('Widget: Inside Render:', this.state.gotResp);
    console.log('Widget: Inside Render:', this.state.items)
    var {isLoaded, items}= this.state;

    /* THIS WORKS
    return <div className="Jotter">
        <h1> Inside Render of Jotter </h1>;
      </div>;

      return <h1> Testing hello </h1>;
  } 
   
}*/
   
	//	let { items } = this.state;
		if (this.state.gotResp == 2) {
			return <div> Loaded successfully...
        {console.log('Widget: Inside loaded successfully')}
        <h1> {this.state.isLoaded} </h1>
        { 
          <div key={items.id}>
            <h3> Item id: </h3>{items.id}
            <h3> item Name: </h3>{items.name}
            <h4> End of message</h4>
          </div>
        /*items.map(item => (
						<div key={item.id}>
							<li>{item.name}</li>
						</div>
        ))*/ }
        </div>;
    } 
    else {
			return (
				<div>
          <h1> Loading...</h1>
          {
            console.log('Widget: Inside Else, unsuccessfully')
          }
          <h1> {this.state.isLoaded} </h1>
          {/* items.map(item => 
            (
              <div key={item.id}>
                 <li>{item.id}</li>
                 <li>{item.widget}</li>
              </div>
            )
            )*/
          } 
				</div>
			);
		}
  } // end of render()
} //end of Widget()





  
// Code that came with original create project 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
        <Game />
        
        <Widget />

      </header>
    </div>
  );
}

export default App;






/*
Original code that came with the install 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/