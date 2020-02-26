import React from 'react'
import classnames from 'classnames'
import styles from './index.module.scss'
import Item from './Item'
import ItemRight from './ItemRight'


interface IProps {
  uid?: number;
  name?: string;
  userId?: number;
  msgList: string[];
}

class Editor extends React.Component<IProps, {}> {
  node: any;

  componentDidUpdate() {
    this.node && this.node.scrollIntoView && this.node.scrollIntoView()
  }

  render() {
    const {src, cls, uid, name} = this.props as any
    let {msgList, userId} = this.props as any
    const len = msgList.length
    return (
      <div className={styles.container}>
        {
          len ? msgList.map((it: any = {}) => {
            return userId == it.user_id ?
              <ItemRight time={it.time} name={it.username} uid={it.id} ref={r => this.node = r} key={it.id}
                         msg={it.content}/> :
              <Item time={it.time} name={it.username} uid={it.id} ref={r => this.node = r} key={it.id}
                    msg={it.content}/>
          }) : null
        }
      </div>
    )
  }
}

export default Editor
