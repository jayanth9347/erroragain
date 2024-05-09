import DestinationItem from '..//DestinationItem'

import './index.css'

import {Component} from 'react'

class DestinationSearch extends Component {
  render() {
    return (
      <div>
        <li>
          <ul>
            {destinationsList.map(eachUser => (
              <DestinationItem key={eachUser.id} destinationsList={eachUser}/>
            ))}
          </ul>
        </li>
      </div>
    )
  }
}

export default DestinationItem
