import React, { useEffect, useState } from "react";
import { getData } from '../services/api';
import ReactTable from './react-table'
import { deleteUser } from "../services/api";
import './table.css';
export default function ParentComponent() {
  const [tableData, setTableData] = useState([]);
  const fields = [
    {
      key: 'first_name',
      sortable: false
    },
    {
      key: 'last_name',
      sortable: true
    },

    {
      key: 'age',
      label: 'Person age',
      sortable: true,
      // Variant applies to the whole column, including the header and footer
      variant: 'danger'
    }
  ]
  

  useEffect(() => {
    getData().then((res) => {
      setTableData(res);
    });
  
  }, []);

  const handleDelete = (id) => {
    deleteUser(id).then((res) => {
      console.log(res);
        setTableData(tableData.filter((item => item.id !== id)))
    })
  }

  return (
    <>  

      {/* {tableData.filter((item) => item.id !== props.id)} */}
      <ReactTable items={tableData} fields={fields} handleDelete={handleDelete}>
      </ReactTable>
    </>
  );
}
