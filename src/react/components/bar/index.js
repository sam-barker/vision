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

function renderTitle (text) {
  return (
    <Typography variant='h6' color='inherit'>
      {text}
    </Typography>
  )
}

function renderSwitch (enabled, onChange) {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      aria-label='OnOffSwitch'
    />
  )
}

function renderSwitchFormGroup (enabled, onChange) {
  return (
    <Grid item>
      <FormGroup>
        <FormControlLabel
          control={renderSwitch(enabled, onChange)}
          label={enabled ? 'Enabled' : 'Disabled'}
        />
      </FormGroup>
    </Grid>
  )
}

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
