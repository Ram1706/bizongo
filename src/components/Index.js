import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class Index extends Component {

  constructor(props) {
      super(props);
      this.state = {serverports: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4000/serverport')
      .then(response => {
        console.log("response.data"+response.data);
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.serverports.map(function(object,index, i){
            return <TableRow obj={object} key={i}  index={index}/>;
        });
    }

    render() {
      return (
        <div>
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>S.NO</td>
                  <td>Rank</td>
                  <td>Grade</td>
                  <td>Channel name</td>
                  <td>Video Uploads</td>
                  <td>Subscribers</td>
                  <td>Video views</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
        </div>
      );
    }
  }