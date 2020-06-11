import React from 'react';
import { Component } from 'react';

class CreateServices extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('CreateServices: hello, CreateServices Here');
  
    console.log('CreateServices: inside CreateServices');
    console.debug('CreateServices: inside CreateServices');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('CreateServices: ComponentDidMount got called');

    const serviceInfo = {
        venueid: 37,
        services: [
            {
                servicename: 'Hi Service',
                description: 'I am a new service',
                service_status: 'New'
            },
            {
                servicename: 'Grocery Service',
                description: 'This is grocery service',
                service_status: 'New'
            },
            {
                servicename: 'Orientation',
                description: 'New entrants orientation',
                service_status: 'New'
            }
        ]
    }

    console.log("CreateServices: serviceInfo  stringified: "+ JSON.stringify(serviceInfo));

    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(serviceInfo)
    };
    /*
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
    */

    try {
 
      const response = await fetch('https://mrfbxpia8d.execute-api.us-west-1.amazonaws.com/DevStaging/createservices', requestOptions);
     
      if (!response.ok) {
        console.log('CreateServices: response Error:'+response.json);
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('CreateServices: Post call successful. Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('CreateServices: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('CreateServices: after setting items to true, twice')
    
    console.log('CreateServices: state isLoaded:', this.state.isloaded)
    console.log('CreateServices: gotResp Value:', this.state.gotResp);
    console.log('CreateServices: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('CreateServices: Inside Render:', this.state.isLoaded)
    console.log('CreateServices: Inside Render:', this.state.gotResp);
    console.log('CreateServices: Inside Render:', this.state.items)
    var {isLoaded, items}= this.state;

    //	let { items } = this.state;

		if (this.state.gotResp == 2)  {
            return (
                <div> Loaded successfully...
                <h1> {this.state.isLoaded} </h1>
              
                {/* console.log ('item:'+items) */ }
                {
                    console.log('CreateServices: Ran successfully. statusCode:'+ this.state.items['statusCode']) 
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
} //end of CreateServices()

export default CreateServices;
