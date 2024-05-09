import './index.css'

const DestinationItem = props => {
  const {destinationsList} = props
  const {name, imgUrl} = destinationsList
  return (
    <li className="list">
      <img src={imgUrl} alt="name" className="image" />
      <p className="para"> {name} </p>
    </li>
  )
}

export default DestinationItem
