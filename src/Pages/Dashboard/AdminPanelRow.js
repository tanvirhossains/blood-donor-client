import React from 'react';

const AdminPanelRow = ({ adminUserData, index }) => {
    const { name, bldGroup, gender, role } = adminUserData;


    return (
        <tr>
            < th > {index + 1}</th>
            <td>{name}</td>
            <td>{bldGroup}</td>
            <td>{gender}</td>
        </tr >
    );
};

export default AdminPanelRow;