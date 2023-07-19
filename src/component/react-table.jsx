import { Button, Table } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { memo } from "react";

import './tableSize.css';

const ReactTable = (props) => {
  const navigate = useNavigate();

  //  props.items.sort((a,b)=> { return  a.id - b.id});
  return (
    <>

      <Button type='button' onClick={() => navigate("/add")}>Add</Button>
      <h1>table-for-users</h1>
      <Table  className='table-for-users'>
        <thead>
          <tr>
            <th className='th-SRO'>UserId</th>
            <th className='th-SRO'>FirstName</th>
            <th className='th-SRO'>lastName</th>
            <th>Action</th>

           </tr>
          {props.items.map((user, index) =>

          (<tr key={index}>
            <td>{user.id}</td>
            <td>{user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)}</td>
            <td>{user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1)}</td>
            <td><Button  variant="danger" onClick={() => {
              props.handleDelete(user.id);
            }}
            >Delete</Button> { }
              <Button type="button"
                onClick={() => {
                  navigate(`/update/${user.id}`)
                  // navigate('/edit');
                }}>Edit</Button></td>{ }
          </tr>)
          )}
        </thead>



      </Table>
    </>)
}

export default memo(ReactTable);
