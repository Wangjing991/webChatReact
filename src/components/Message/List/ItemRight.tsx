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
    const {src, cls, uid, name, msg, time} = this.props as any

    return (
      <div className={styles.item_right}>
        <div className={styles.right}>
          <p className={styles.time}>{time}</p>
          {msg}
        </div>
        <Avatar cls={styles.left} name={name}/>
      </div>
    )
  }
}

export default Item
