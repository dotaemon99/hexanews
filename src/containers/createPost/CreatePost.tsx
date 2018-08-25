import * as React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { History } from 'history'

import styles from './styles'

type Props = {
  post: Post,
  history: History,
}

type Post = {
  title: string,
  description: string
}

interface ComponentState {
  title: string
  description: string
}

class CreatePost extends React.Component<Props, ComponentState> {

  constructor(props: Props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
  }

  handleTitleChange = (event: any) => {
    this.setState({ title: event.target.value })
  }

  handleDescriptionChange = (event: any) => {
    this.setState({ description: event.target.value })
  }

  public render() {
    const { history } = this.props
    const { title } = this.state
    const { description } = this.state
    return (
      <div style={styles.container}>
        <div style={styles.profileContainer}>
          <Avatar style={styles.avatar}>HC</Avatar>
          <div style={styles.profile as any}>
            <Typography variant='subheading' style={styles.title}>
              {'Hillary Clinton'}
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              {'A politician, writer and philanthropist.'}
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              {'Draft'}
            </Typography>
          </div>
        </div>

        <div>
          <form>
            <TextField
              id='title'
              label='Title'
              value={title}
              onChange={this.handleTitleChange}
              style={styles.textField}
              margin='normal'
            />
            <TextField
              id='multiline-flexible'
              label='Description'
              multiline
              rowsMax='20'
              style={styles.textField}
              value={description}
              onChange={this.handleDescriptionChange}
              margin='normal'
            />
          </form>
        </div>
        <div>
          <Button variant='contained' component='button' style={styles.button}
            onClick={() => history.push('/postDetail')}>
            Publish
          </Button>
          <Button variant='contained' component='button' style={styles.button}
            onClick={() => history.push('/')}>
            Cancel
          </Button>
        </div>
      </div>
    )
  }
}

export default CreatePost