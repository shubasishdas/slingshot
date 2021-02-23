import React from 'react';
import PropTypes from 'prop-types';

class AddFishForm extends React.Component{
    nameRef = React.createRef();
    priceRef = React.createRef();
    statusRef = React.createRef();
    descRef = React.createRef();
    imageRef = React.createRef();

    static propTypes ={
        addFish: PropTypes.func
    }
    
    createFish = event => {
        // 1. stop th form from submitting
        event.preventDefault();
        // console.log("Make a Fish"); 
        // console.log(this);
        // console.log(this.nameRef);
        // console.log(this.nameRef.current); 
        // console.log(this.nameRef.current.value); 

        const fish = {
            name : this.nameRef.current.value,
            price : parseFloat(this.priceRef.current.value),
            status : this.statusRef.current.value,
            desc : this.descRef.current.value,
            image : this.imageRef.current.value
   }

        // console.log(fish);
        this.props.addFish(fish);
        // Refresh the form
        // console.log(event);
        // console.log(event.target);
        // console.log(event.currentTarget); // target and currentTarget are same here because for onSubmit , could be different if we use onClick
        event.currentTarget.reset();

    } 
    render(){
        return (
            <form className="fish-edit" onSubmit={this.createFish}>
                {/* <p>It works!!</p> */}
                <input name = "name" ref = {this.nameRef} type = "text" placeholder = "Name" />
                <input name = "price" ref = {this.priceRef} type = "text" placeholder = "Price" />
                <select name = "status" ref = {this.statusRef} >
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold out!</option>

                </select>
                <textarea name = "desc
                " ref = {this.descRef} placeholder = "Desc" />
                <input name = "image" ref = {this.imageRef} type = "text" placeholder = "Image" />
                <button type="submit">+ Add Fish</button>
            </form>
        );
    }
}

export default AddFishForm;