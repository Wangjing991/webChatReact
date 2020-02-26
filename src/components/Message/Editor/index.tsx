import React from 'react'
import Input from '../../Input'
import styles from './index.module.scss'

interface IProps {
  value?: string | undefined;
  onChange: (s: string) => void ;
}

class Editor extends React.Component<IProps, {}> {

  handleChange = (e: any) => {
    const {onChange} = this.props;
    onChange && onChange(e.target.value)
  }

  render() {

    return (
      <div className={styles.container}>
        <Input onChange={this.handleChange} value={this.props.value}/>
      </div>
    )
  }
}

export default Editor
