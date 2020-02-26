import React, {Component} from 'react'
import classNames from 'classnames'
import styles from './index.module.scss'

class Button extends Component<any, any> {
  constructor(props: any) {
    super(props)

    this.clickHandler = this.clickHandler.bind(this)
  }

  clickHandler() {
    const {onClick, disabledWhenLoading, loading} = this.props as any;

    if (loading && disabledWhenLoading) return

    onClick && onClick()
  }

  render() {
    const {type, loading, children, cls, size = 'middle', htmlType, isGroup, ...rest} = this.props as any;
    const className = classNames(styles.btn, [styles[type]], [styles[size]], {
      [styles.loading]: loading,
      [styles.in_group]: isGroup
    }, cls)
    return (
      <button className={className} onClick={this.clickHandler} {...rest}>
        {loading ? <i className={classNames(styles.iconfont, styles['icon-loading'])}/> : null}
        {children}
      </button>
    )
  }
}

// Button.propTypes = {
//   type: PropTypes.string,
//   loading: PropTypes.bool,
//   cls: PropTypes.string,
//   size: PropTypes.string,
//   htmlType: PropTypes.string,
//   onClick: PropTypes.func,
//   disabledWhenLoading: PropTypes.bool
// }
//
// Button.defaultProps = {
//   type: 'normal',
//   loading: false,
//   cls: '',
//   size: 'middle',
//   htmlType: 'button',
//   onClick: noop,
//   disabledWhenLoading: true
// }
//
// Button.Group = Group

export default Button
