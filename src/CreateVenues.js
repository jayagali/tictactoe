import React from 'react';
import { Component } from 'react';

class CreateVenues extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('CreateVenues: hello, CreateVenues Here');
  
    console.log('CreateVenues: inside CreateVenues');
    console.debug('CreateVenues: inside CreateVenues');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('CreateVenues: ComponentDidMount got called');

    const venueInfo = {
        bizid: 1,
        venues: [
            {
                venuename: 'Hi Venue',
                addr1: 'Falls',
                addr2: 'Land',
                city: 'whatever',
                state: 'CA',
                zip: '96666',
                country: 'USA',
                phone: '415-999-0000',
                venue_status: 'New'
            },
            {
                venuename: 'Hello',
                addr1: 'there',
                addr2: 'My God',
                city: 'whatever',
                state: 'CA',
                zip: '96667',
                country: 'USA',
                phone: '415-999-0001',
                venue_status: 'New'
            },
            {
                venuename: 'Venue_man',
                addr1: 'Jackson Ave',
                addr2: '',
                city: 'Santa',
                state: 'CA',
                zip: '96668',
                country: 'USA',
                phone: '415-999-0002',
                venue_status: 'New'
            }
        ]
    }

    console.log("CreateVenues: account Info stringified: "+ JSON.stringify(venueInfo));

    // POST request using fetch with async/await
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(venueInfo)
    };
    /*
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
    */

    try {
 
      const response = await fetch('https://998lmeo6xi.execute-api.us-west-1.amazonaws.com/DevStaging/createvenues', requestOptions);
     
      if (!response.ok) {
        console.log('CreateVenues: response Error:'+response.json);
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('CreateVenues: Post call successful. Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('CreateVenues: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('CreateVenues: after setting items to true, twice')
    
    console.log('CreateVenues: state isLoaded:', this.state.isloaded)
    console.log('CreateVenues: gotResp Value:', this.state.gotResp);
    console.log('CreateVenues: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('CreateVenues: Inside Render:', this.state.isLoaded)
    console.log('CreateVenues: Inside Render:', this.state.gotResp);
    console.log('CreateVenues: Inside Render:', this.state.items)
    var {isLoaded, items}= this.state;

    //	let { items } = this.state;

		if (this.state.gotResp == 2)  {
            return (
                <div> Loaded successfully...
                <h1> {this.state.isLoaded} </h1>
              
                {/* console.log ('item:'+items) */ }
                {
                    console.log('CreateVenues: Ran successfully. statusCode:'+ this.state.items['statusCode']) 
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
} //end of CreateVenues()

export default CreateVenues;
