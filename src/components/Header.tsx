import * as React from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import CreateIcon from '@material-ui/icons/Create'

type Props = {
}

const styles = {
  flex: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#DDD',
  },
  titleLink: {
    textDecoration: 'none',
    color: '#333',
    marginLeft: 24,
  },
  profileLink: {
    textDecoration: 'none',
    color: '#333',
    marginRight: 64,
  },
  createLink: {
    textDecoration: 'none',
    color: '#333',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  root: {
    flexGrow: 1,
  },
}

class Header extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
  }

  public render() {
    return (
      <div style={styles.root}>
        <AppBar position='static' style={styles.appBar}>
          <Toolbar>
            <Typography
              variant='title'
              color='inherit'
              style={styles.flex}
            >
              <Link to='/' style={styles.titleLink}>Hexanews</Link>
            </Typography>
            <Typography
              variant='title'
              color='inherit'
            >
              <Link to='/profile' style={styles.profileLink}>Profile</Link>
            </Typography>
            <IconButton
              style={styles.menuButton}
              color='default'
              aria-label='Create'
            >
              <Link to='/createPost' style={styles.createLink}><CreateIcon /></Link>
            </IconButton>
            <IconButton
              style={styles.menuButton}
              color='default'
              aria-label='Menu'
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default Header