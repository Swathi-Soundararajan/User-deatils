import React from 'react';
import logo from './logo.svg';
import './App.css';
import firebaseConfig from './config/firebaseconfig';
// SemanticUI
import {Table, Header, Segment, Message} from 'semantic-ui-react'
class App extends React.Component {

  loadData(userObj){
    var data = []
    if(userObj != null || userObj != undefined){
      Object.keys(userObj).forEach(key => {
        if(key != ''){
          var temp = userObj[key]
          if(temp != ''){
            temp.key = key
            data.push(temp)
          }
        }
      })
      this.setState({rows : data})
    }
    
  }
  
  componentDidMount(){
    
    var dbRef = firebaseConfig.database().ref('/profiles')
    dbRef.on('value',(snapshot)=>{
      this.loadData(snapshot.val())
    })
  }
  constructor(props){
    super(props);
    this.state = {
      rows:[],
    }
  }
  render(){
    
    return(
      <Segment inverted raised className="customTable">
        <Header as="h2" inverted>Profile Records</Header>
        {this.state.rows.length == 0 && <Message color='red'>
            <Message.Header>Wow! Such empty</Message.Header>
            <Message.Content>Go ahead and run the python script to add records to database</Message.Content>
        </Message>}
        {this.state.rows.length > 0 && <Table celled inverted selectable>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>FirstName</Table.HeaderCell>
              <Table.HeaderCell>LastName</Table.HeaderCell>
              <Table.HeaderCell>Dob</Table.HeaderCell>
              <Table.HeaderCell>Gender</Table.HeaderCell>
              <Table.HeaderCell>FatherName</Table.HeaderCell>
              <Table.HeaderCell>Email</Table.HeaderCell>
              <Table.HeaderCell>Phone</Table.HeaderCell>
              <Table.HeaderCell>Education</Table.HeaderCell>
              <Table.HeaderCell>College</Table.HeaderCell>
              <Table.HeaderCell>District</Table.HeaderCell>
              <Table.HeaderCell>State</Table.HeaderCell>
              <Table.HeaderCell>Pincode</Table.HeaderCell>
              <Table.HeaderCell>Aadhar</Table.HeaderCell>
              <Table.HeaderCell>Skills</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {this.state.rows.map(row => (
              <Table.Row key={row.key}>
                <Table.Cell align="left">{row.firstname}</Table.Cell>
                <Table.Cell align="left">{row.lastname}</Table.Cell>
                <Table.Cell align="left">{row.dob}</Table.Cell>
                <Table.Cell align="left">{row.gender}</Table.Cell>
                <Table.Cell align="left">{row.father}</Table.Cell>
                <Table.Cell align="left">{row.email}</Table.Cell>
                <Table.Cell align="left">{row.phone}</Table.Cell>
                <Table.Cell align="left">{row.education}</Table.Cell>
                <Table.Cell align="left">{row.college}</Table.Cell>
                <Table.Cell align="left">{row.district}</Table.Cell>
                <Table.Cell align="left">{row.state}</Table.Cell>
                <Table.Cell align="left">{row.pincode}</Table.Cell>
                <Table.Cell align="left">{row.aadhar}</Table.Cell>
                <Table.Cell align="left">{row.skills}</Table.Cell>
              </Table.Row>
            ))} 
          </Table.Body>
        </Table>}
      </Segment>
    )
  }
}

export default App;
