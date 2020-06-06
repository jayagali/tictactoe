import React from 'react';
import { Component } from 'react';

class UpdateBiz extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('UpdateBiz: hello, UpdateBiz Here');
  
    console.log('UpdateBiz: inside UpdateBiz');
    console.debug('UpdateBiz: inside UpdateBiz');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('UpdateBiz: ComponentDidMount got called');

    const accountInfo = {
      bizname: "Farmers LLC",
      fname: '',
      lname: '',
      addr1: '',
      addr2: '',
      city: 'San Mateo',
      state: 'CA',
      zip: '94404',
      country: 'USA',
      phone: '',
      biz_status: 'Active',
      bizid: 8
    }

    console.log("UpdateBiz: account Info stringified: "+ JSON.stringify(accountInfo));

    // POST request using fetch with async/await
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(accountInfo)
    };

    try {
 
      const response = await fetch('https://erjqi053p8.execute-api.us-west-1.amazonaws.com/DevStaging/updatebiz', requestOptions);
     
      if (!response.ok) {
        console.log('UpdateBiz: response Error:'+response.json);
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('UpdateBiz: Post call successful. Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('UpdateBiz: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('UpdateBiz: after setting items to true, twice')
    
    console.log('UpdateBiz: state isLoaded:', this.state.isloaded)
    console.log('UpdateBiz: gotResp Value:', this.state.gotResp);
    console.log('UpdateBiz: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('UpdateBiz: Inside Render:', this.state.isLoaded)
    console.log('UpdateBiz: Inside Render:', this.state.gotResp);
    console.log('UpdateBiz: Inside Render:', this.state.items)
    var {isLoaded, items}= this.state;

    //	let { items } = this.state;
        let insertID = "";
		if (this.state.gotResp == 2)  {
            return (
                <div> Loaded successfully...
                <h1> {this.state.isLoaded} </h1>
              
                {/* console.log ('item:'+items) */ }
                {console.log('UpdateBiz: Ran successfully. statusCode:'+ this.state.items['statusCode']) }
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
} //end of UpdateBiz()

export default UpdateBiz;
