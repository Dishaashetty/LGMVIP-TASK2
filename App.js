import Users from "./Components/cards";
import "./App.css";
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    // Set initial state
    this.state = { users_data: [], loading: false };

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState({ loading: true });

    setTimeout(
      async function () {
        const response = await fetch("https://reqres.in/api/users?page=1");
        const jsonresponse = await response.json();
        console.log(jsonresponse);
        this.setState({ users_data: jsonresponse["data"], loading: false });
      }.bind(this),
      2000
    );
  }

  render() {
    return (
      <>
              <div class="header">
            <div class="heading">
                LetsGrowMore
            </div>
            <div ><button class='nav_butt' onClick={this.updateState}>Get Users</button></div>
        </div>
    

        <div className="userdatacontainer">
          <Users loading={this.state.loading} users={this.state.users_data} />
        </div>

        <img className="img" src="https://www.pexels.com/photo/fresh-flowers-decorating-work-desk-with-laptop-and-notepad-6177677"></img>
        
        <footer className="footer">
        <b><i>Made by Disha Shetty</i></b>
        </footer> 
      </>
    );
  }
}

export default App;