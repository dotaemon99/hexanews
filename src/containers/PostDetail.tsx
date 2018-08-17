import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'

import placeholder from '../assets/placeholder.png'

type Props = {
  post: Post
}

type Post = {
  title: string,
  description: string
}

const styles = {
  avatar: {
    margin: 10,
    width: 50,
    height: 50,
    backgroundColor: 'green',
    alignSelf: 'center'
  },
  container: {
    marginLeft: '25%',
    marginRight: '25%',
    marginTop: '4%',
    paddingBottom: '5%'
  },
  description: {
    fontFamily: 'Helvetica',
    fontStyle: 'normal',
    fontSize: 18,
    marginTop: 24,
    lineHeight: 1.75,
  },
  placeholderImage: {
    width: '100%',
    height: '80%',
    marginTop: '4%',
  },
  profileContainer: {
    display: 'flex',
    marginBottom: '3%',
  }
}

class PostDetail extends React.Component<Props> {

  renderMultilineText = () => {
    // tslint:disable:max-line-length
    const text = `Also for this tutorial I din’t put accent on CSS I assume that you already created a sidebar which you need to make draggable. For my example the structure is pretty simple, the class attributes are used only for CSS purposes. The #sidebarIdentifier is a property decorator that I will use to get the current width of the sidebar and the [style.width.px] is the Angular property that I will use to bind the new width.
    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that`
    return text.split('\n').map((item, i) => {
      return <Typography style={styles.description}>{item}</Typography>
    })
  }

  public render() {

    return (
      <div style={styles.container}>
        <div style={styles.profileContainer}>
          <Avatar style={styles.avatar}>HC</Avatar>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant='subheading' style={{ marginTop: 12}}>
              {'Henry Connor'}
            </Typography>
            <Typography variant='body1' color='textSecondary'>
              {'20 August 2018'}
            </Typography>
          </div>
        </div>
        <Typography variant='display1' component='h1'>
            { 'Adjustable sidebar using Angular' }
        </Typography>
        <img src={placeholder} style={styles.placeholderImage}/>
        {this.renderMultilineText()}
        <Divider style={{ marginTop: 32}}/>
      </div>
    )
  }
}

export default PostDetail
