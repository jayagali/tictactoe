import React from 'react';
import { Component } from 'react';


class GetVenues extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('hello, GetVenues Here');
  
    console.log('inside GetVenues');
    console.debug('inside GetVenues');
		this.state = {
            isLoaded: false,
            gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('ComponentDidMount got called - in GetVenues Component');

    //fetch('https://api.npms.io/v2/search?q=react')
    //const response =[]

    try {
        // The URL Can be called in two formats: 
        // https://998lmeo6xi.execute-api.us-west-1.amazonaws.com/DevStaging/getvenues?bizid=1 ( returns all venues for bizid=1)
        // https://998lmeo6xi.execute-api.us-west-1.amazonaws.com/DevStaging/getvenues?bizid=1&zip=60457 ( returns venues for bizid=1 & Zip = 60457)
        
      const response = await fetch('https://998lmeo6xi.execute-api.us-west-1.amazonaws.com/DevStaging/getvenues?bizid=1&zip=60457');
     
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('GetVenues: Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('GetVenues: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('GetVenues: after setting items to true, twice')
    
    console.log('GetVenues: state isLoaded:', this.state.isloaded)
    console.log('GetVenues: gotResp Value:', this.state.gotResp);
    console.log('GetVenues: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
        // const personLoc = Object.keys).map((content, idx) => {
        //     const items = this.state.person.loc[content].map((item, i) => (
        //         <p key={i}>{item.text}</p>
        //     ))
        
        //     return <div key={idx}>{items}</div>
        // })
    console.log('GetVenues: Inside Render:', this.state.isLoaded)
    console.log('GetVenues: Inside Render:', this.state.gotResp);
    console.log('GetVenues: Inside Render:', this.state.items)
    // console.log('GetVenues: keys:', Object.keys(bodyJSON)) 
    var {isLoaded, items}= this.state;
        //	let { items } = this.state;
		if (this.state.gotResp == 2) {
            return (
                <div> Loaded successfully...
                <h1> {this.state.isLoaded} </h1>
              
                {/* console.log ('item:'+items) */ }
                {console.log('GetVenues: Inside loaded successfully. Item:'+ this.state.items) }
                <h1> {this.state.isLoaded} </h1>
                <h3> Venues: </h3>
                {
                    JSON.stringify(items)
                }
            
                { /*items['body'].map(item => (
                    <div key={item.bizid}>
                    <li> Biz ID: {item.bizid}</li>
                    <li> Biz Email: {item.email}</li>
                    <li> Biz Name: {item.bizname}</li>
                    <li> Biz Last name: {item.lname}</li>
                    <li> Biz First name: {item.fname}</li>
                    <li> Biz Phone: {item.phone}</li>
                    <li> Biz Address: {item.address}</li>
                    <li> Biz Country: {item.country}</li>
                    <li> Biz Zip: {item.zip}</li>
                    <li> Biz Status: {item.biz_status}</li>
                    <h4> End of message</h4>
                    </div> 
                )
            ) // end of return
                */ } // end of code block
         
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
} //end of GetVenues()

export default GetVenues;
