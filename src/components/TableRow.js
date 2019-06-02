import React, { Component } from 'react';
import  _getValue  from '../../node_modules/lodash/_getValue';

class TableRow extends Component {

  render() {
    return (

        <tr>
           <td>
            {this.props.index}
          </td>
          <td>
            {this.props.obj.Rank}
          </td>
          <td>
            {this.props.obj.Grade}
          </td>
          <td>
                    {_getValue(this.props.obj,"Channel name","")}
          </td>
          <td>
                    {_getValue(this.props.obj,"Video Uploads","")}
          </td>
          <td>
                    {_getValue(this.props.obj,"Subscribers","")}
          </td>
          <td>
                    {_getValue(this.props.obj,"Video views","")}
          </td>
        </tr>
    );
  }
}

export default TableRow;