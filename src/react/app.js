import React from 'react'
import { Bar, View } from './components'
import Typography from '@material-ui/core/Typography'

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      enabled: true
    }

    this.bindHandlers()
  }

  bindHandlers () {
    this.toggleEnabled = this.toggleEnabled.bind(this)
  }

  toggleEnabled () {
    this.setState({ enabled: !this.state.enabled })
  }

  renderOnView () {
    return (
      <div>
        <Typography variant='h3' component='h3'>
          Vision is on!
        </Typography>
      </div>
    )
  }

  renderOffView () {
    return (
      <div>
        <Typography variant='h3' component='h3'>
          Vision is disabled!
        </Typography>
      </div>
    )
  }

  render () {
    const { enabled } = this.state
    return (
      <div>
        <Bar
          enabled={enabled}
          title={'Vision'}
          toggleEnabled={this.toggleEnabled}
        />
        <View>
          {enabled ? this.renderOnView() : this.renderOffView() }
        </View>
      </div>
    )
  }
}
