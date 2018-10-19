import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import Grid from '@material-ui/core/Grid'
import styles from './styles'

/**
 * Renders the bar title
 * @param {string} text The title text
 * @returns {Typography} The title to render
 */
function renderTitle (text) {
  return (
    <Typography variant='h6' color='inherit'>
      {text}
    </Typography>
  )
}

/**
 * Renders the bar's switch
 * @param {boolean} enabled Whether or not the app is enabled
 * @param {function} onChange The function to execute on switch change
 * @returns {JSX.Element.Switch} The switch to render
 */
function renderSwitch (enabled, onChange) {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      aria-label='OnOffSwitch'
    />
  )
}

/**
 * Renders the form group that the switch is contained within
 * @param {boolean} enabled Whether or not the app is enabled
 * @param {function} onChange The function to execute on switch click
 * @returns {JSX.Element.FormGroup} The form group to render
 */
function renderSwitchFormGroup (enabled, onChange) {
  return (
    <FormGroup>
      <FormControlLabel
        control={renderSwitch(enabled, onChange)}
        label={enabled ? 'Enabled' : 'Disabled'}
      />
    </FormGroup>
  )
}

/**
 * Bar component
 * @param {object} obj The component props
 * @param {object} obj.classes The classes created from styles object
 * @param {string} obj.title The title to show in the bar
 * @param {boolean} obj.enabled Whether or not the app is enabled
 * @param {function} obj.toggleEnabled The function to toggle the app on and off
 * @returns {JSX.Element.Bar} The rendered Bar
 */
function Bar ({
  classes,
  title,
  enabled,
  toggleEnabled
}) {
  return (
    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <Toolbar>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'
          >
            <Grid item>
              {renderTitle(title)}
            </Grid>
            <Grid item>
              {renderSwitchFormGroup(enabled, toggleEnabled)}
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Bar.propTypes = {
  classes: PropTypes.object.isRequired,
  toggleEnabled: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  enabled: PropTypes.bool
}

Bar.defaultProps = {
  enabled: true
}

export { Bar as UnstyledBar }
export default withStyles(styles)(Bar)
