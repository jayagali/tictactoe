import React from 'react';
import { Component } from 'react';

class UpdateVenues extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('UpdateVenues: hello, UpdateVenues Here');
  
    console.log('UpdateVenues: inside UpdateVenues');
    console.debug('UpdateVenues: inside UpdateVenues');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('UpdateVenues: ComponentDidMount got called');

    const venueInfo = {
      bizid: 1,
      venues: [
          {
              venueid: 31,
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
              venueid: 32,
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
              venueid: 33,
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


    console.log("UpdateVenues: Venues Info stringified: "+ JSON.stringify(venueInfo));

    // POST request using fetch with async/await
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(venueInfo)
    };

    try {
 
      const response = await fetch('https://998lmeo6xi.execute-api.us-west-1.amazonaws.com/DevStaging/updatevenues', requestOptions);
     
      if (!response.ok) {
        console.log('UpdateVenues: response Error:'+response.json);
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('UpdateVenues: Post call successful. Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('UpdateVenues: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('UpdateVenues: after setting items to true, twice')
    
    console.log('UpdateVenues: state isLoaded:', this.state.isloaded)
    console.log('UpdateVenues: gotResp Value:', this.state.gotResp);
    console.log('UpdateVenues: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('UpdateVenues: Inside Render:', this.state.isLoaded)
    console.log('UpdateVenues: Inside Render:', this.state.gotResp);
    console.log('UpdateVenues: Inside Render:', this.state.items)
    var {isLoaded, items}= this.state;

    //	let { items } = this.state;

		if (this.state.gotResp == 2)  {
            return (
                <div> Loaded successfully...
                <h1> {this.state.isLoaded} </h1>
              
                {/* console.log ('item:'+items) */ }
                {console.log('UpdateVenues: Ran successfully. statusCode:'+ this.state.items['statusCode']) }
                <h1> {this.state.isLoaded} </h1>

               {/* console.log ('item:'+items) */ }
               {
                    console.log('UpdateVenues: Ran successfully. statusCode:'+ this.state.items['statusCode']) 
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
} //end of UpdateVenues()

export default UpdateVenues;
