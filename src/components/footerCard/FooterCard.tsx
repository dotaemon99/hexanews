/**
 * The FooterCard Component for displaying related read article in articleDetail container
 */

import { Dispatch } from 'redux'
import { Grid } from '@material-ui/core'
import { head, startCase } from 'lodash'
import { push } from 'connected-react-router'
import * as moment from 'moment'
import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import { Article } from '../../domain/model/Article'
import { DATE_FORMAT } from '../../constants/config'
import i18n from '../../i18n'
import placeholder from '../../assets/placeholder.png'
import styles from './styles'
import Utils from '../../utils'

/**
 * All props required by the components
 */
type Props = {
  authorName: string,
  dispatch: Dispatch<any>,
  article: Article,
}

/**
 * Render the Footer Card component
 */
const FooterCard: React.StatelessComponent<Props> = ({
  article,
  authorName,
  dispatch,
}) => {
  const initials = head(startCase(authorName))
  const articleImage = Utils.getFeaturedImage(article) ? Utils.getFeaturedImage(article) : placeholder
  return (
    <Grid
      id={`footer-${article._id}`}
      onClick={() => dispatch(push(`${article._id}`))}
      style={styles.root}
    >
      <Card style={styles.card}>
        <CardMedia
          style={styles.media}
          image={articleImage}
        />
        <CardContent style={styles.cardContent}>
          <Typography
            component='h2'
            gutterBottom
            variant='caption'
          >
            {i18n.t('footerCard.relatedRead')}
          </Typography>
          <Typography
            component='h2'
            gutterBottom
            variant='subheading'
          >
            {article.title}
          </Typography>
          <Grid style={styles.profileContainer}>
            <Avatar style={styles.avatar}>
              {initials}
            </Avatar>
            <Grid style={styles.detailContainer as any}>
              <Typography
                variant='body1'
                style={styles.profileName}
              >
                {authorName}
              </Typography>
              <Typography
                variant='body1'
                color='textSecondary'
                style={styles.date}
              >
                {moment(article.createdAt).format(DATE_FORMAT)}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default FooterCard