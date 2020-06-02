import React from 'react';
import { Component } from 'react';


class GetCustomerByEmail extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('hello, GetCustomerByEmail Here');
  
    console.log('inside GetCustomerByEmail');
    console.debug('inside GetCustomerByEmail');
		this.state = {
            isLoaded: false,
            gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('ComponentDidMount got called - in GetCustomerByEmail Component');

    //fetch('https://api.npms.io/v2/search?q=react')
    //const response =[]

    try {
     //  const response = await fetch('https://phvk9xwk03.execute-api.us-west-1.amazonaws.com/TestStage//widgetbyid?id=HelloWorld!');
     // const response = await fetch('https://st9ohl4b0d.execute-api.us-west-1.amazonaws.com/DBTest/dbwidget?id=3');
      //const response = await fetch('https://5rbc6bh8f3.execute-api.us-west-1.amazonaws.com/TestStage/getacct?email=galija@yahoo.com');
      const response = await fetch('https://5xymucgx95.execute-api.us-west-1.amazonaws.com/DevStaging/getcustomer?email=True@love.com');
     
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('GetCustomerByEmail: Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('GetCustomerByEmail: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('GetCustomerByEmail: after setting items to true, twice')
    
    console.log('GetCustomerByEmail: state isLoaded:', this.state.isloaded)
    console.log('GetCustomerByEmail: gotResp Value:', this.state.gotResp);
    console.log('GetCustomerByEmail: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
        // const personLoc = Object.keys).map((content, idx) => {
        //     const items = this.state.person.loc[content].map((item, i) => (
        //         <p key={i}>{item.text}</p>
        //     ))
        
        //     return <div key={idx}>{items}</div>
        // })
    console.log('GetCustomerByEmail: Inside Render:', this.state.isLoaded)
    console.log('GetCustomerByEmail: Inside Render:', this.state.gotResp);
    console.log('GetCustomerByEmail: Inside Render:', this.state.items)
    // console.log('GetCustomerByEmail: keys:', Object.keys(bodyJSON)) 
    var {isLoaded, items}= this.state;
        //	let { items } = this.state;
		if (this.state.gotResp == 2) {
            return (
                <div> Loaded successfully...
                <h1> {this.state.isLoaded} </h1>
              
                {/* console.log ('item:'+items) */ }
                {console.log('GetCustomerByEmail: Inside loaded successfully. Item:'+ this.state.items) }
                <h1> {this.state.isLoaded} </h1>
            
                { items['body'].map(item => (
                    <div key={item.custid}>
                    <li> Customer Email: {item.email}</li>
                    <li> Customer Last name: {item.lname}</li>
                    <li> Customer First name: {item.fname}</li>
                    <li> Customer Phone: {item.phone}</li>
                    <li> Customer Address: {item.address}</li>
                    <li> Customer Country: {item.country}</li>
                    <li> Customer Zip: {item.zip}</li>
                    <li> Customer Status: {item.cust_status}</li>
                    <h4> End of message</h4>
                    </div> 
                )
            ) // end of return
        } // end of IF
         
        </div> )
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
} //end of GetCustomerByEmail()

export default GetCustomerByEmail;
