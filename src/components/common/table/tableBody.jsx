import React, { Component } from 'react';
import _ from 'lodash';

class TableBody extends Component {
    getTableData = (column, item) => {
        if (column.key)
            return column.content(item);
        
        return _.get(item, column.path);
    }

    render() {
        const { data, columns } = this.props;

        return (
            <tbody>
            {data.map(item => (
                <tr key={item._id}>
                {columns.map( column => (
                    <td key={column.path || column.key}>{this.getTableData(column, item)}</td>
                ))}
                </tr>
            ))}
            </tbody>
        );
    }
}


export default TableBody;