/**
 * Display Not Found container which contains the 404 page error for unknown route
 */

import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { push } from 'connected-react-router'
import { translate } from 'react-i18next'
import { Typography, Grid } from '@material-ui/core'
import * as React from 'react'
import Button from '@material-ui/core/Button'

import i18n from '../../i18n'
import styles from './styles'

/**
 * All props required by the container
 */
type Props = {
  dispatch: Dispatch<any>
}

export class NotFound extends React.Component<Props> {

  /**
   * Render NotFound container
   */
  public render() {
    const { dispatch } = this.props
    return (
      <Grid style={styles.container as any}>
        <Typography
          variant='display1'
          component='h1'
          color='textPrimary'
          style={styles.errorLabel}
        >
          {i18n.t('notFound.errorLabel')}
        </Typography>
        <Typography
          variant='body1'
          component='h1'
          color='textPrimary'
          style={styles.noPage}
        >
          {i18n.t('notFound.noPage')}
        </Typography>
        <Button
          id='backHomeButton'
          variant='outlined'
          size='large'
          component='button'
          onClick={() => dispatch(push('/'))}
        >
          {i18n.t('notFound.homeLabel')}
        </Button>
      </Grid >
    )
  }
}

const ConnectedNotFound = connect()(NotFound)

export default translate('translations')(ConnectedNotFound)
