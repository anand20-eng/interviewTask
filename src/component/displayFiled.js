import React, { useEffect, useState } from "react";
import { Button, Table } from 'react-bootstrap'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { getData } from '../services/api';
import { remove } from "./curd";
import './table.css';
export default function Display() {
  const [tableData, setTableData] = useState([]);
  console.log(tableData);

  useEffect(() => {
    getData().then((res) => {
      setTableData(res);
    });
  }, [])

  // const firstName = localStorage.getItem('firstName') || [];
  // console.log(firstName);

  return (
    <>
     
      <BootstrapTable data={tableData} striped={true} hover={true}>
        <TableHeaderColumn dataField="firstName" isKey={true} dataAlign="center" dataSort={true}>firstName</TableHeaderColumn>
        <TableHeaderColumn dataField="lastName" dataSort={true}>LastName</TableHeaderColumn>
        <TableHeaderColumn dataField="employeeId" dataFormat={tableData.employeeId}>EmployeeId</TableHeaderColumn>
        
            </BootstrapTable>,
    </>
  );
}
