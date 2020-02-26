import React, {Component} from 'react'
import ClassNames from 'classnames'
import styles from './index.module.scss'

function fixControlledValue(value: any) {
  // if (typeof value === 'undefined' || value === null) {
  //   return ''
  // }
  return value
}

interface IProps {
  type?: string,
  defaultValue?: string,
  value?: string,
  prefix?: any,
  suffix?: any,
  cls?: string,
  style?: object,
  placeholder?: string,
  onPressEnter?: (e: any) => any,
  onKeyDown?: (e: any) => any,
  onChange?: (e: any) => any,
}

class Input extends Component<IProps, any> {
  input: any;

  constructor(props: any) {
    super(props)

    this.keyDownHandler = this.keyDownHandler.bind(this)
  }

  keyDownHandler(ev: any) {
    const {onPressEnter, onKeyDown} = this.props as any;
    if (ev.keyCode === 13 && onPressEnter) {
      onPressEnter(ev)
    }

    if (onKeyDown) {
      onKeyDown(ev)
    }
  }

  focus() {
    this.input.focus()
  }

  blur() {
    this.input.blur()
  }

  saveInput = (node: any) => {
    this.input = node
  }

  renderAffixInput(props: any) {
    const {prefix, suffix, cls} = this.props as any;
    const clazz = ClassNames({
      [styles.affix_input]: true,
      [styles.prefix_input]: prefix,
      [styles.suffix_input]: suffix
    })

    return (
      <span className={clazz}>
        {prefix ? <span className={styles.prefix}>{prefix}</span> : null}
        <input ref={this.saveInput} className={ClassNames(styles.input, cls)} {...props} />
        {suffix ? <span className={styles.suffix}>{suffix}</span> : null}
      </span>
    )
  }

  render() {
    const {cls, prefix, suffix, ...rest} = this.props as any;

    if ('value' in this.props) {
      rest.value = fixControlledValue(this.props.value)
      delete rest.defaultValue
    }

    if (prefix || suffix) {
      return this.renderAffixInput(rest)
    }

    return (
      <input ref={this.saveInput} className={ClassNames(styles.input, cls)}
             {...rest} onKeyDown={this.keyDownHandler}/>
    )
  }
}



export default Input
