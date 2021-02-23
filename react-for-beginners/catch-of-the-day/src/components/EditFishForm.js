import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component{
    static propTypes = {
        fish: PropTypes.shape({
            image : PropTypes.string,
            name : PropTypes.string,
            desc : PropTypes.string,
            status : PropTypes.string,
            price : PropTypes.number 
        }),
        updateFish: PropTypes.func,
        index: PropTypes.string,
        deleteFish: PropTypes.func
    }

    handleChange = event => {
        // console.log(event);
        // console.log(event.currentTarget);
        // console.log(event.currentTarget.value);
        // console.log(event.currentTarget.name);

        // update that fish\
        // 1. Take a copy of the current fish
        // console.log(this.props.fish);
        const updatedFish = {
            ...this.props.fish, [event.currentTarget.name]:event.currentTarget.value
        };
        // console.log(updatedFish);
        this.props.updateFish(this.props.index,updatedFish);
    };
    render(){
        return(
            // <p>Edit Fish</p>
            <div className="fish-edit">
                <input name = "name"  type = "text" onChange={this.handleChange} value={this.props.fish.name}  />
                <input name = "price"  type = "text" onChange={this.handleChange} value={this.props.fish.price} />
                <select name = "status" type = "text" onChange={this.handleChange} value={this.props.fish.status} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>

                </select>
                <textarea name = "desc" onChange={this.handleChange} value={this.props.fish.desc} />
                <input name = "image"  type = "text" onChange={this.handleChange} value={this.props.fish.image} />
                <button onClick={() => this.props.deleteFish(this.props.index)}>Remove Fish</button>
            </div>
        )
    }
}

export default EditFishForm;
