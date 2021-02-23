import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { formatPrice } from '../helpers';

class Order extends React.Component{
    static propTypes = {
        fishes: PropTypes.shape({
            image : PropTypes.string,
            name : PropTypes.string,
            desc : PropTypes.string,
            status : PropTypes.string,
            price : PropTypes.number 
        }),
        order: PropTypes.object,
        removeFromOrder: PropTypes.func
    } 
    renderOrder = key => {
        const fish = this.props.fishes[key];
        const count = this.props.order[key];
        const isAvailable = fish && fish.status === "available";
        const transitionOptions = {
            classNames:"order",
            key:key,
            timeout:{enter:500, exit:500}
        };
        // make sure the fish is loaded before we continue to order section
        if(!fish) return null;
        if(!isAvailable){
            return (
                <CSSTransition {...transitionOptions}>
            <li key={key}>
                Sorry {fish ? fish.name :"fish"} is no longer available
            </li>
            </CSSTransition>
            );
        }
        return (
            <CSSTransition {...transitionOptions}>
                <li key={key}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition {...transitionOptions}>
                                <span>{count}</span>
                            </CSSTransition>
                        </TransitionGroup>
                            lbs {fish.name}
                        {formatPrice(count * fish.price)}
                        <button onClick={() => this.props.removeFromOrder(key)}>&times;</button>
            </span>
        </li>
        </CSSTransition>

        );
    }
    render(){
        // console.log(this.props.order);
        const orderIds = Object.keys(this.props.order);
        // console.log(orderIds);
        // const a = Object.keys(orderIds);
        // console.log(a);
        const total = orderIds.reduce((prevTotal , key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === "available";
            if (isAvailable){
                return prevTotal + count * fish.price;
            }
            return prevTotal;
        },0);
        return (
            <div className="order-wrap">
                <h2>Order</h2>
                <TransitionGroup component="ul" className="order">
                    {orderIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className="total">
                    Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>
        )
    }
}

export default Order;