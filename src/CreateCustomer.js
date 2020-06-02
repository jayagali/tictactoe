import React from 'react';
import { Component } from 'react';

class CreateCustomer extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('CreateCustomer: hello, CreateCustomer Here');
  
    console.log('CreateCustomer: inside CreateCustomer');
    console.debug('CreateCustomer: inside CreateCustomer');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('CreateCustomer: ComponentDidMount got called');

    const accountInfo = {
        email: 'True@love.com',
        fname: 'Tropical',
        lname: 'ocean',
        addr1: '',
        addr2: '',
        city: '',
        state: '',
        zip: '',
        country: 'USA',
        phone: '415-222-7777',
        cust_status: 'New',
    }

    console.log("CreateCustomer: account Info stringified: "+ JSON.stringify(accountInfo));

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
 
      const response = await fetch('https://5xymucgx95.execute-api.us-west-1.amazonaws.com/DevStaging/createcustomer', requestOptions);
     
      if (!response.ok) {
        console.log('CreateCustomer: response Error:'+response.json);
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('CreateCustomer: Post call successful. Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('CreateCustomer: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('CreateCustomer: after setting items to true, twice')
    
    console.log('CreateCustomer: state isLoaded:', this.state.isloaded)
    console.log('CreateCustomer: gotResp Value:', this.state.gotResp);
    console.log('CreateCustomer: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('CreateCustomer: Inside Render:', this.state.isLoaded)
    console.log('CreateCustomer: Inside Render:', this.state.gotResp);
    console.log('CreateCustomer: Inside Render:', this.state.items)
    var {isLoaded, items}= this.state;

    //	let { items } = this.state;
        let insertID = "";
		if (this.state.gotResp == 2)  {
            return (
                <div> Loaded successfully...
                <h1> {this.state.isLoaded} </h1>
              
                {/* console.log ('item:'+items) */ }
                {console.log('CreateCustomer: Ran successfully. statusCode:'+ this.state.items['statusCode']) }
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
                )) // end of loop
                */ 
                } // end of Loop
                </div> 
            )
    } // END IF
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
} //end of CreateCustomer()

export default CreateCustomer;
