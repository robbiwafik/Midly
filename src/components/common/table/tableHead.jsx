import React from 'react';


const TableHead = ({ columns }) => {
    return (
        <thead>
            <tr>
            {columns.map(column => (
                <th key={column.path || column.key} scope='col'>{column.title}</th>
            ))}
            </tr>
        </thead>
    );
}

export default TableHead;