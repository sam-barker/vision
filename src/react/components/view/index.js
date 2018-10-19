import React from 'react'
import PropTypes from 'prop-types'
import { Paper, withStyles } from '@material-ui/core'
import styles from './styles'

function View ({ classes, children }) {
  return (
    <Paper className={classes.root} elevation={1}>
      {children}
    </Paper>
  )
}

View.propTypes = {
  classes: PropTypes.object.isRequired
}

export { View as UnstyledView }
export default withStyles(styles)(View)
