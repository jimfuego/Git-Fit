import React, { Component } from 'react';
import Navbar from "../layout/Navbar";
import Table from 'react-bootstrap/Table'
//import ReactDOM from 'react-dom';
import axios from 'axios';



export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      StartCals: "",
      CurrentCals: "",
      StartWeight: "",
      CurrentWeight: "",
      StartBMI: "",
      CurrentBMI: "",
      errors: {}
    };
  }


/*componentDidMount() {
    axios.get("/getBMI/{this.props.Avgcaloriesperday}")
      .then(res => {
        const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ posts });
      });
  }*/

  componentDidMount(){
    axios
    .get("/api/index/getUserInfo")
    .then(res => {
        this.setState({StartBMI: parseInt(res.data.Height)/parseInt(res.data.StartWeight),
                      CurrentBMI: parseInt(res.data.Height)/parseInt(res.data.CurrentWeight),
                      StartAvgcaloriesperday: parseInt(res.data.StartAvgcaloriesperday),
                      CurrentAvgcaloriesperday: parseInt(res.data.CurrentAvgcaloriesperday),
                      StartWeight:parseInt(res.data.StartWeight),
                      CurrentWeight: parseInt(res.data.CurrentWeight)});
});

}



  render() {
    return (


      <div className="profile-new">
      <Navbar/>
      <Table responsive striped bordered hover variant="dark">
  <thead>
    <tr>
      <th></th>
      <th>Start</th>
      <th>Current</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Avg Calories/Day</td>
      <td>{this.state.StartCals}</td>
      <td>{this.state.CurrentCals}</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>{this.state.StartWeight}</td>
      <td>{this.state.CurrentWeight}</td>
    </tr>
    <tr>
      <td>BMI</td>
      <td>{this.state.StartBMI}</td>
      <td>{this.state.CurrentBMI}</td>
    </tr>
  </tbody>
</Table>

</div>
    );
  }
}
