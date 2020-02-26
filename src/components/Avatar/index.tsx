import React from 'react'
import classnames from 'classnames'

import styles from './index.module.scss'


interface IProps {
  uid?: number;
  name?: string;
  src?: string;
  cls?: number | string;
}

class Avatar extends React.Component<IProps, {}> {

  loadAvatar = (uid: any) => {
    return uid
  }

  render() {
    const {src, cls, uid = 1, name} = this.props as any
    let {doNotUseDefault} = this.props as any
    const url = src || this.loadAvatar(uid)
    src && (doNotUseDefault = true)
    // 根据uid随机生成1-5
    const i = (uid % 5) + 1
    return (
      <div className={classnames(styles.avatar, cls)}>
        {!doNotUseDefault ?
          (<div className={classnames(styles.default, `bg-r${i}`)}>{name && name.slice(-2)}</div>) :
          null
        }
        {/*{src !== false ?*/}
        {/*<div className={styles.bg} style={{background: `url(${url})`, backgroundSize: 'cover'}}/> :*/}
        {/*null*/}
        {/*}*/}
      </div>
    )
  }
}

export default Avatar
