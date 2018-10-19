import React from 'react'
import { Bar, View } from './components'
import Typography from '@material-ui/core/Typography'

/**
 * Main app component
 */
export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      enabled: true
    }

    this.bindHandlers()
  }

  /**
   * Binds all handlers to `this`
   */
  bindHandlers () {
    this.toggleEnabled = this.toggleEnabled.bind(this)
  }

  /**
   * Inverses the state value `enabled`
   */
  toggleEnabled () {
    this.setState({ enabled: !this.state.enabled })
  }

  /**
   * Renders the enabled view
   * @returns {JSX.Element.Typography} The title component in the view
   */
  renderEnabledView () {
    return (
      <Typography variant='h3' component='h3'>
        Vision is on!
      </Typography>
    )
  }

  /**
   * Renders the disabled view
   * @returns {JSX.Element.Typography} The title component in the view
   */
  renderDisabledView () {
    return (
      <Typography variant='h3' component='h3'>
        Vision is disabled!
      </Typography>
    )
  }

  /**
   * Renders the component
   * @returns {JSX.Element.App} The rendered app
   */
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
          {enabled ? this.renderEnabledView() : this.renderDisabledView() }
        </View>
      </div>
    )
  }
}
