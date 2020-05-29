import React, { Component } from "react";
import { setInterval, clearInterval } from "timers";

export class Clock extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       dateTime: new Date(),
  //     };
  //   }

  // Shrtcut for setting a property on 'this' during
  // constructor call.

  // We can use this syntax in a class-based component to initialize
  // its 'state'
  state = {
    dateTime: new Date(),
  };

  componentDidMount() {
    // This method is called the first time the component is
    // rendered to the page. Use it to fetch, add some event listeners,
    // connect to as socket etc.
    console.log("Clock is mounted");
    this.intervalId = setInterval(() => {
      this.setState({
        dateTime: new Date(),
      });
    }, 1000);
  }

  componentWillUnmount() {
    // This method is called before the component is removed from
    // the DOM. Use it to clean up setInterval, setTimeouts, event
    // listeners, etc
    console.log("Clock in unmounted");
    clearInterval(this.intervalId);
  }

  render() {
    // console.log("component rendered to the page");
    return (
      <div className="ui top right attached brown large label">
        {this.state.dateTime.toLocaleTimeString()}
      </div>
    );
  }
}
