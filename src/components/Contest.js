import React, {Component, PropTypes} from 'react'

class Contest extends Component {
  render() {
    return (
      <div className="Contest">
        {this.props.id}
      </div>
    )
  }
}

Contest.PropTypes = {
  id: PropTypes.number.isRequired,
}

export default Contest
