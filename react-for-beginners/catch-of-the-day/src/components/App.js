import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header.js';
import Order from './Order.js';
import Inventory from './Inventory.js';
import sampleFishes from '../sample-fishes';
import Fish from './Fish.js';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  static propTypes ={
    match: PropTypes.object
  }

  componentDidMount() {
    console.log('mounted');
    const { params } = this.props.match;
    // first reinstate our localStorage
    const localStorageRef = localStorage.getItem(params.storeId);
    // console.log(localStorageRef);
    if(localStorageRef){
      this.setState({order:JSON.parse(localStorageRef)});
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }

  componentDidUpdate(){
    console.log("updated");
    // console.log(this.state.order);
    localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order));
  }

  componentWillUnmount() {
    console.log('Unmounted!!');
    base.removeBinding(this.ref);
  }

  addFish = (fish) => {
    // console.log("Adding a fish!");
    // this.state.fishes.push(fish);

    // 1. Take a copy of the existing state
    const fishes = { ...this.state.fishes }; // copy an object by object spread method
    // 2. Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // 3. Set the new fishes object to state
    this.setState({
      // fishes:fishes
      fishes,
    });
  };

  updateFish = (key, updatedFish) => {
    // 1. Take a copy of the current State
    const fishes = {...this.state.fishes};
    // 2. Update that state
    fishes[key] = updatedFish;
    // 3. Set that to state
    // this.setState({fishes:fishes});
    this.setState({fishes});
  };

  deleteFish = key =>{
    // 1. Take a copy of state
    const fishes = {...this.state.fishes}
    // 2.update the state
    fishes[key]=null;
    // set that to state
    this.setState({fishes});
  };


  loadSampleFishes = () => {
    // alert("Loading Sample");
    // console.log(sampleFishes);
    this.setState({
      fishes: sampleFishes,
    });
  };

  addToOrder = (key) => {
    // 1. Take a copy of state
    const order = { ...this.state.order };
    // 2. Either add to the order or update the number in our order
    //  order.fish1 = order.fish1 + 1 || 1;
    order[key] = order[key] + 1 || 1;
    // 3. call setState to update our state object
    this.setState({ order });
  };

  removeFromOrder = key =>{
      // 1. Take a copy of state
      const order = { ...this.state.order };
      // 2. Remove that item our order
      delete order[key];
      // 3. call setState to update our state object
      this.setState({ order });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        {/* <p>heyyy!</p> */}
        <div className="menu">
          <Header tagline ="Fresh Seafood Market" /> 
          {/* not obvious to put curly brackets for string */}
          {/* <Header tagline="cool"/> */}
          <ul className="fishes">
            {/* <Fish /> */}
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
                index={key}
              />
            ))}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder ={this.removeFromOrder} />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fishes = {this.state.fishes}
          updateFish = {this.updateFish}
          deleteFish = {this.deleteFish}
          storeId = {this.props.match.params.storeId}
        />
      </div>
    );
  }
}

export default App;
