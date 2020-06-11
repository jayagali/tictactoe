import React from 'react';
import { Component } from 'react';

class UpdateServices extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('UpdateServices: hello, UpdateServices Here');
  
    console.log('UpdateServices: inside UpdateServices');
    console.debug('UpdateServices: inside UpdateServices');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

  async componentDidMount() {
    console.log('UpdateServices: ComponentDidMount got called');

    const serviceInfo = {
        venueid: 37,
        services: [
            {
                serviceid : 29,
                servicename: 'Movie watch1',
                description: 'Watching a movie',
                service_status: 'New'
            },
            {
                serviceid : 30,
                servicename: 'Workout1',
                description: 'Working out together as a group of 6',
                service_status: 'New'
            },
            {
                serviceid : 31,
                servicename: 'Protest1',
                description: 'Protest as a group',
                service_status: 'New'
            }
        ]
    }


    console.log("UpdateServices: Venues Info stringified: "+ JSON.stringify(serviceInfo));

    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serviceInfo)
    };

    try {
 
      const response = await fetch('https://mrfbxpia8d.execute-api.us-west-1.amazonaws.com/DevStaging/updateservices', requestOptions);
     
      if (!response.ok) {
        console.log('UpdateServices: response Error:'+response.json);
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('UpdateServices: Post call successful. Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('UpdateServices: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('UpdateServices: after setting items to true, twice')
    
    console.log('UpdateServices: state isLoaded:', this.state.isloaded)
    console.log('UpdateServices: gotResp Value:', this.state.gotResp);
    console.log('UpdateServices: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('UpdateServices: Inside Render:', this.state.isLoaded)
    console.log('UpdateServices: Inside Render:', this.state.gotResp);
    console.log('UpdateServices: Inside Render:', this.state.items)
    var {isLoaded, items}= this.state;

    //	let { items } = this.state;

		if (this.state.gotResp == 2)  {
            return (
                <div> Loaded successfully...
                <h1> {this.state.isLoaded} </h1>
              
                {/* console.log ('item:'+items) */ }
                {console.log('UpdateServices: Ran successfully. statusCode:'+ this.state.items['statusCode']) }
                <h1> {this.state.isLoaded} </h1>

               {/* console.log ('item:'+items) */ }
               {
                    console.log('UpdateServices: Ran successfully. statusCode:'+ this.state.items['statusCode']) 
                }
                <h1> {this.state.isLoaded} </h1>
                <h3> JSON Response: </h3>
                { 
                    JSON.stringify(items)
                }            
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
} //end of UpdateServices()

export default UpdateServices;
