import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../components/Rendigital.css';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from '@mui/material';
import {
  AccountCircle,
  Person,
  AlternateEmail,
  LocationOn,
  Business,
  MailOutline,
} from '@mui/icons-material';

function Rendigital() {
  const [userData, setUserData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  function getIconByColumnName(columnName) {
    switch (columnName) {
      case 'Name':
        return <Person />;
      case 'Username':
        return <AccountCircle />;
      case 'Email':
        return <AlternateEmail />;
      case 'Street':
        return <LocationOn />;
      case 'Suite':
        return <Business />;
      case 'City':
        return <LocationOn />;
      case 'Zipcode':
        return <MailOutline />;
      default:
        return null;
    }
  }

  const handleTableRowClick = (user) => {
    setSelectedUser(user);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <TableContainer component={Paper} className="container">
        <Table className="table">
          <TableHead>
            <TableRow>
              <TableCell className="header-cell"> ID</TableCell>
              <TableCell className="header-cell"> Name</TableCell>
              <TableCell className="header-cell"> Username</TableCell>
              <TableCell className="header-cell"> Email</TableCell>
              <TableCell className="header-cell"> Street</TableCell>
              <TableCell className="header-cell"> Suite</TableCell>
              <TableCell className="header-cell"> City</TableCell>
              <TableCell className="header-cell"> Zipcode</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user) => (
              <TableRow key={user.id} className="row" onClick={() => handleTableRowClick(user)}>
                <TableCell className="cell"> {user.id}</TableCell>
                <TableCell className="cell">{getIconByColumnName('Name')} {user.name}</TableCell>
                <TableCell className="cell">{getIconByColumnName('Username')} {user.username}</TableCell>
                <TableCell className="cell">{getIconByColumnName('Email')} {user.email}</TableCell>
                <TableCell className="cell">{getIconByColumnName('Street')} {user.address.street}</TableCell>
                <TableCell className="cell">{getIconByColumnName('Suite')} {user.address.suite}</TableCell>
                <TableCell className="cell">{getIconByColumnName('City')} {user.address.city}</TableCell>
                <TableCell className="cell">{getIconByColumnName('Zipcode')} {user.address.zipcode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>User Details</DialogTitle>
        <DialogContent>
          {selectedUser && (
            <>
              <div>Name: {selectedUser.name}</div>
              <div>Username: {selectedUser.username}</div>
              <div>Email: {selectedUser.email}</div>
              <div>Street: {selectedUser.address.street}</div>
              <div>Suite: {selectedUser.address.suite}</div>
              <div>City: {selectedUser.address.city}</div>
              <div>Zipcode: {selectedUser.address.zipcode}</div>
            </>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Rendigital;
