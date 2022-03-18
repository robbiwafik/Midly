import React, { Component } from 'react';


class ListGroup extends Component {
    getItemClass = (item) => {
        const baseItemClass = 'clickable list-group-item ';
        return this.props.currentItem._id === item._id ? baseItemClass + 'active' : baseItemClass;
    }

    render() {
        const { items, onPageFilter } = this.props;

        return (
            <div className='list-group'>
            {items.map(item => 
                <a key={item._id} className={this.getItemClass(item)} onClick={() => onPageFilter(item)}>{item.name}</a>
            )}
            </div>
        );
    }
}

export default ListGroup;