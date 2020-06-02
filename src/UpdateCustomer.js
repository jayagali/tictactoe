import React from 'react';
import { Component } from 'react';

class UpdateCustomer extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('UpdateCustomer: hello, UpdateCustomer Here');
  
    console.log('UpdateCustomer: inside UpdateCustomer');
    console.debug('UpdateCustomer: inside UpdateCustomer');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('UpdateCustomer: ComponentDidMount got called');

    const accountInfo = {
      fname: 'Tropical',
      lname: 'ocean',
      addr1: '',
      addr2: '',
      city: 'San Mateo',
      state: 'CA',
      zip: '94404',
      country: 'USA',
      phone: '415-111-1111',
      cust_status: 'Active',
      custid: 4
    }

    console.log("UpdateCustomer: account Info stringified: "+ JSON.stringify(accountInfo));

    // POST request using fetch with async/await
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(accountInfo)
    };
    /*
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
    */

    try {
 
      const response = await fetch('https://5xymucgx95.execute-api.us-west-1.amazonaws.com/DevStaging/updatecustomer', requestOptions);
     
      if (!response.ok) {
        console.log('UpdateCustomer: response Error:'+response.json);
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('UpdateCustomer: Post call successful. Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('UpdateCustomer: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('UpdateCustomer: after setting items to true, twice')
    
    console.log('UpdateCustomer: state isLoaded:', this.state.isloaded)
    console.log('UpdateCustomer: gotResp Value:', this.state.gotResp);
    console.log('UpdateCustomer: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('UpdateCustomer: Inside Render:', this.state.isLoaded)
    console.log('UpdateCustomer: Inside Render:', this.state.gotResp);
    console.log('UpdateCustomer: Inside Render:', this.state.items)
    var {isLoaded, items}= this.state;

    //	let { items } = this.state;
        let insertID = "";
		if (this.state.gotResp == 2)  {
            return (
                <div> Loaded successfully...
                <h1> {this.state.isLoaded} </h1>
              
                {/* console.log ('item:'+items) */ }
                {console.log('UpdateCustomer: Ran successfully. statusCode:'+ this.state.items['statusCode']) }
                <h1> {this.state.isLoaded} </h1>
            
                { /*items['body'].map(item => (
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
                    )) // 
                */ } // end of items loop 
         
                </div> 
        ) // end of return
    } // end of IF
    else {
			return (
				<div>
          <h1> Loading...</h1>
          {
            console.log('CreateAccount: Inside Else, unsuccessfully')
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
} //end of UpdateCustomer()

export default UpdateCustomer;
