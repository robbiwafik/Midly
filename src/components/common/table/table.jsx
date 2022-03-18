import React, { Component } from 'react';
import TableHead from './tableHead';
import TableBody from './tableBody';


class Table extends Component {
    render() {
        const { data, columns } = this.props;

        return (
            <table className='table'>
                <TableHead columns={columns} />
                <TableBody data={data} columns={columns} />
            </table>
        );
    }
}

export default Table;