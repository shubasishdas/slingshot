import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import '../css/style.css';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }
  myInput = React.createRef();

  // constructor(){
  //     super();
  //     this.goToStore  = this.goToStore.bind(this);
  // }

  // goToStore(event){
  //     // 1. Stop the form from submitting
  //     event.preventDefault();
  //     // 2. Get the text from from that input
  //     console.log(this);
  //     // 3. Change the page to /store/whatever-they-entered
  // }

  goToStore = (event) => {
    // 1. Stop the form from submitting

    event.preventDefault();
    // 2. Get the text from from that input
    // console.log(this.myInput);
    // console.log(this.myInput.current);
    // console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;
    // 3. Change the page to /store/whatever-they-entered
    this.props.history.push(`/store/${storeName}`);
  };

  // componentDidMount(){
  //     console.log("Mounted");
  // }
  // handleClick(){
  //     alert('hey');
  // }
  render() {
    console.log(this);
    return (
      <>
        {/* commenting out */}
        {/* <h1>what's up!</h1> */}
        <form className="store-selector" onSubmit={this.goToStore}>
          {/* <p>Fish!</p> */}
          {/* <button  onClick={this.handleClick}>Click me</button> */}
          <h2>Please Enter A Store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </>
    );
  }
}

export default StorePicker;
