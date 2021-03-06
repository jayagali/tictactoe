
import React from 'react';
import { Component } from 'react';

class CreateBiz extends Component {
 
	constructor(props) {
    
    super(props);
    console.log('CreateBiz: hello, CreateBiz Here');
  
    console.log('CreateBiz: inside CreateBiz');
    console.debug('CreateBiz: inside CreateBiz');
		this.state = {
      isLoaded: false,
      gotResp: 1,
			items: {},
		};
  }

 
  async componentDidMount() {
    console.log('CreateBiz: ComponentDidMount got called');

    const accountInfo = {
        email: 'Farmers@farmers.com',
        bizname:"Farmers",
        fname: 'Brian',
        lname: 'Landon',
        addr1: '',
        addr2: '',
        city: '',
        state: '',
        zip: '',
        country: 'USA',
        phone: '408-299-9000',
        biz_status: 'New',
    }

    console.log("CreateBiz: account Info stringified: "+ JSON.stringify(accountInfo));

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
 
      const response = await fetch('https://erjqi053p8.execute-api.us-west-1.amazonaws.com/DevStaging/createbiz', requestOptions);
     
      if (!response.ok) {
        console.log('CreateBiz: response Error:'+response.json);
        throw Error(response.statusText);
      }
      const json = await response.json();
      console.log('CreateBiz: Post call successful. Before calling setState to set to true');

      this.setState({ 
        isloaded: true,
        gotResp: 2,
        items: json,
       });
       console.log('CreateBiz: After calling setState to set to true once');
       

    } catch (error) {
      console.log(error);
    }

    console.log('CreateBiz: after setting items to true, twice')
    
    console.log('CreateBiz: state isLoaded:', this.state.isloaded)
    console.log('CreateBiz: gotResp Value:', this.state.gotResp);
    console.log('CreateBiz: Item Values:', this.state.items);
   // this.forceUpdate();
  }



	render() {
    
    console.log('CreateBiz: Inside Render:', this.state.isLoaded)
    console.log('CreateBiz: Inside Render:', this.state.gotResp);
    console.log('CreateBiz: Inside Render:', this.state.items)
    var {isLoaded, items}= this.state;

    //	let { items } = this.state;
        let insertID = "";
		if (this.state.gotResp == 2)  {
            return (
                <div> Loaded successfully...
                <h1> {this.state.isLoaded} </h1>
              
                {/* console.log ('item:'+items) */ }
                {console.log('CreateBiz: Ran successfully. statusCode:'+ this.state.items['statusCode']) }
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
} //end of CreateBiz()

export default CreateBiz;
