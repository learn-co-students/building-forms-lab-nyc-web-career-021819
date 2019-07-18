import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import { connect } from 'react-redux'



class BandsContainer extends Component {
  renderBands = () => {
    let bandList = this.props.bands.map((band)=> {
      return <li key={Math.random()}>{band.name}</li>
    })
    return bandList
  }
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.renderBands()}
      </div>
    )
  }
}

const mapStateToProps = ({ bands }) => ({
  bands: bands
}

)

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
