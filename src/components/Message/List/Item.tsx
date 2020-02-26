import React from 'react'
import classnames from 'classnames'
import Avatar from '../../Avatar'
import styles from './index.module.scss'

interface IProps {
  uid?: number;
  name?: string;
  src?: string;
  cls?: number | string;
  msg: string;
  time: string;
}

class Item extends React.Component<IProps, {}> {

  render() {
    const {src, cls, uid, name, msg, time} = this.props

    return (
      <div className={styles.item}>
        <Avatar cls={styles.left} name={name}/>
        <div className={styles.right}>
          <p className={styles.time}>{time}</p>
          {msg}
        </div>
      </div>
    )
  }
}

export default Item
