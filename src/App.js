import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import GetCustomerByEmail from './GetCustomerByEmail';
import CreateCustomer from './CreateCustomer';
import UpdateCustomer from './UpdateCustomer';
import GetBizByUsername from './GetBizByUsername';
import UpdateBiz from './UpdateBiz';
import CreateBiz from './CreateBiz';
import GetVenues from './GetVenues';
//import UpdateVenues from './UpdateVenues';
import CreateVenues from './CreateVenues';


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
     // const response = await fetch('https://4mryiu5jw5.execute-api.us-west-1.amazonaws.com/Alpha-Dev/alljots?userid=628f634a-0fc8-4ae6-ba7e-eeb3ecb96f0c');
     const response = await fetch('https://5rbc6bh8f3.execute-api.us-west-1.amazonaws.com/TestStage/getacct?email=cust_finale@finale.com');
      if (!response.ok) {
        console.log('Jotter: response info Error:'+response.data)
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('Jotter: response info success:'+response.data)
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
        {console.log ('item:'+items) }
        { items.map(item => (
						<div key={item.userid}>
							<li>{item.body}</li>
							<li>{item.title}</li>
							<li>{item.jotid}</li>
						</div>
        ))
       
        }
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
     // const response = await fetch('https://st9ohl4b0d.execute-api.us-west-1.amazonaws.com/DBTest/dbwidget?id=3');
      const response = await fetch('https://5rbc6bh8f3.execute-api.us-west-1.amazonaws.com/TestStage/getacct?email=cust_finale@finale.com');
 
     
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


class Account extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('hello, Account Here');
  
    console.log('inside Account');
    console.debug('inside Account');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('ComponentDidMount got called - in Account Component');

    //fetch('https://api.npms.io/v2/search?q=react')
    //const response =[]

    try {
     //  const response = await fetch('https://phvk9xwk03.execute-api.us-west-1.amazonaws.com/TestStage//widgetbyid?id=HelloWorld!');
     // const response = await fetch('https://st9ohl4b0d.execute-api.us-west-1.amazonaws.com/DBTest/dbwidget?id=3');
      //const response = await fetch('https://5rbc6bh8f3.execute-api.us-west-1.amazonaws.com/TestStage/getacct?email=galija@yahoo.com');
      const response = await fetch('https://5xymucgx95.execute-api.us-west-1.amazonaws.com/DevStaging/getcustomer?email=galija@yahoo.com');
     
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('Account: Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('Account: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('Account: after setting items to true, twice')
    
    console.log('Account: state isLoaded:', this.state.isloaded)
    console.log('Account: gotResp Value:', this.state.gotResp);
    console.log('Account: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('Account: Inside Render:', this.state.isLoaded)
    console.log('Account: Inside Render:', this.state.gotResp);
    console.log('Account: Inside Render:', this.state.items)
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
        {console.log('Account: Inside loaded successfully')}
        <h1> {this.state.isLoaded} </h1>
        { 
          <div key={items.id}>
            <li> Customer Email: </li>{items.email}
            <li> Customer Last name: </li>{items.lname}
            <li> Customer First name: </li>{items.fname}
            <li> Customer Phone: </li>{items.phone}
            <li> Customer Address: </li>{items.address}
            <li> Customer Country: </li>{items.country}
            <li> Customer Zip: </li>{items.zip}
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
} //end of Account()



class CreateAcct extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('CreateAcct: hello, CreateAcct Here');
  
    console.log('CreateAcct: inside CreateAcct');
    console.debug('CreateAcct: inside CreateAcct');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('CreateAcct: ComponentDidMount got called');

    const accountInfo = {
      email: 'cool@cool.com',
      accountType : 'cust_',
      phone: '650-111-2222',
      category: 'test'
    }

    console.log("CreateAcct: account Info stringified: "+ JSON.stringify(accountInfo));

    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
   //   body: JSON.stringify({ title: 'React POST Request Example' })
      body: JSON.stringify(accountInfo)
    };
    /*
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
    */

    try {
     //  const response = await fetch('https://phvk9xwk03.execute-api.us-west-1.amazonaws.com/TestStage//widgetbyid?id=HelloWorld!');
     // const response = await fetch('https://st9ohl4b0d.execute-api.us-west-1.amazonaws.com/DBTest/dbwidget?id=3');
     // const response = await fetch('https://5rbc6bh8f3.execute-api.us-west-1.amazonaws.com/TestStage/getacct?email=cust_finale@finale.com');
      const response = await fetch(' https://5rbc6bh8f3.execute-api.us-west-1.amazonaws.com/TestStage/createacct', requestOptions);
     
      if (!response.ok) {
        console.log('CreateAcct: response Error:'+response.json);
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('CreateAcct: Post call successful. Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('CreateAcct: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('CreateAcct: after setting items to true, twice')
    
    console.log('CreateAcct: state isLoaded:', this.state.isloaded)
    console.log('CreateAcct: gotResp Value:', this.state.gotResp);
    console.log('CreateAcct: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('CreateAcct: Inside Render:', this.state.isLoaded)
    console.log('CreateAcct: Inside Render:', this.state.gotResp);
    console.log('CreateAcct: Inside Render:', this.state.items)
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
        {console.log('CreateAcct: Inside loaded successfully')}
        <h1> {this.state.isLoaded} </h1>
        { 
          <div key={items.id}>
            <li> Customer Email: </li>{items.email}
            <li> Customer Last name: </li>{items.lname}
            <li> Customer First name: </li>{items.fname}
            <li> Customer Phone: </li>{items.phone}
            <li> Customer Address: </li>{items.address}
            <li> Customer Country: </li>{items.country}
            <li> Customer Zip: </li>{items.zip}
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
            console.log('CreateAcct: Inside Else, unsuccessfully')
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
} //end of CreateAcct()


class UpdateAcct extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('UpdateAcct: hello, UpdateAcct Here');
  
    console.log('UpdateAcct: inside UpdateAcct');
    console.debug('UpdateAcct: inside UpdateAcct');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('UpdateAcct: ComponentDidMount got called');

    const accountInfo = {
      email: 'cool@cool.com',
      accountType : 'cust_',
      phone: '650-555-5555',
      category: 'test',
      address: '22 Minnesota road',
      country: 'US',
      zip: '94455',
      lname: 'Hi',
    fname: 'Fi',
    description: 'Updated Data',
    image: ''

    }

    
    console.log("UpdateAcct: account Info stringified: "+ JSON.stringify(accountInfo));

    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
   //   body: JSON.stringify({ title: 'React POST Request Example' })
      body: JSON.stringify(accountInfo)
    };
    /*
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
    */

    try {
     //  const response = await fetch('https://phvk9xwk03.execute-api.us-west-1.amazonaws.com/TestStage//widgetbyid?id=HelloWorld!');
     // const response = await fetch('https://st9ohl4b0d.execute-api.us-west-1.amazonaws.com/DBTest/dbwidget?id=3');
     // const response = await fetch('https://5rbc6bh8f3.execute-api.us-west-1.amazonaws.com/TestStage/getacct?email=cust_finale@finale.com');
      const response = await fetch(' https://5rbc6bh8f3.execute-api.us-west-1.amazonaws.com/TestStage/updateaccount', requestOptions);
     
      if (!response.ok) {
        console.log('UpdateAcct: response Error:'+response.json);
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('UpdateAcct: Post call successful. Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('UpdateAcct: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('UpdateAcct: after setting items to true, twice')
    
    console.log('UpdateAcct: state isLoaded:', this.state.isloaded)
    console.log('UpdateAcct: gotResp Value:', this.state.gotResp);
    console.log('UpdateAcct: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('UpdateAcct: Inside Render:', this.state.isLoaded)
    console.log('UpdateAcct: Inside Render:', this.state.gotResp);
    console.log('UpdateAcct: Inside Render:', this.state.items)
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
        {console.log('UpdateAcct: Inside loaded successfully')}
        <h1> {this.state.isLoaded} </h1>
        { 
          <div key={items.id}>
            <li> Customer Email: </li>{items.email}
            <li> Customer Last name: </li>{items.lname}
            <li> Customer First name: </li>{items.fname}
            <li> Customer Phone: </li>{items.phone}
            <li> Customer Address: </li>{items.address}
            <li> Customer Country: </li>{items.country}
            <li> Customer Zip: </li>{items.zip}
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
            console.log('UpdateAcct: Inside Else, unsuccessfully')
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
} //end of UpdateAcct()



  
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
        
       { /* 
        
         <GetCustomerByEmail /> 
         <UpdateCustomer />
         <CreateBiz />
         <GetBizByUsername />
         <UpdateBiz />
          <CreateCustomer />
        <CreateVenues />
          */
      }
        <GetVenues />
  
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