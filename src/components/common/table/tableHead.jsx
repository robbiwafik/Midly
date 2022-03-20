import React, { Component } from 'react';


class TableHead extends Component {
    getSortIcon = (path) => {
        const { sortColumn } = this.props;
        if (sortColumn.path === path)
            return <i className={'m-2 fa fa-sort-' + sortColumn.order} aria-hidden='true' />
        
        return ' ';
    }

    render() {
        const { columns, onSort } = this.props;

        return (
            <thead>
                <tr>
                {columns.map(column => (
                    <th key={column.path || column.key} scope='col' onClick={() => onSort(column)} >
                        {column.title}
                        {this.getSortIcon(column.path)}
                    </th>
                ))}
                </tr>
            </thead>
        );
    }
}

export default TableHead;