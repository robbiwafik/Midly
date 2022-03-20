import React, { Component } from 'react';
import _ from 'lodash';


class Pagination extends Component {
    getPageItemClass = (pageNumber) => {
        const { currPageNumber } = this.props;
        return currPageNumber === pageNumber ? 'page-item active' : 'page-item';
    }

    render() {
        const { itemsCount, pageItemsCount, onPageChange } = this.props;
        const pageNumbersCount = Math.ceil(itemsCount / pageItemsCount);
        const pageNumbers = _.range(1, pageNumbersCount + 1);
        if (pageNumbers.length === 1)
            return '';

        return (
            <ul className='pagination'>
            {pageNumbers.map(pageNumber => (
                <li key={pageNumber} className={this.getPageItemClass(pageNumber)}><a className='page-link' onClick={() => onPageChange(pageNumber)}>{pageNumber}</a></li>
            ))}
            </ul>
        );
    }
}

export default Pagination;