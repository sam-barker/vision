import React from 'react'
import PropTypes from 'prop-types'
import { Paper, withStyles } from '@material-ui/core'
import styles from './styles'

/**
 * Renders the main view of the app
 * @param {object} obj The component props
 * @param {object} obj.classes The classes created from the styles object
 * @param {JSX.Element} obj.children Any child component to render
 */
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
