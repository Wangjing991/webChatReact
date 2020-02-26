import React from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {IPageRoute} from "../shared";
import {IGlobal} from "../../store/global";
import {IStoreState} from "../../store/shared";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {userRegister} from "../../services/login";
import styles from "./style.module.scss";

interface IProps extends IPageRoute<any> {
  global: IGlobal;
}

interface FormData {
  username: string;
  password: string;
}

class Home extends React.Component<IProps> {
  data: any = {}
  onClick = async () => {
    let {history} = this.props
    const res: any = await userRegister(this.data)
    if (res.code !== 0) {
      history.push('./login')
    }
    // alert(res && res.message)
  }

  onChange = (key: string, e: any) => {
    this.data[key] = e.target.value
    console.log(e.target.value, 'onChange')
  }


  render() {
    return (
      <div className={styles.container}>
        <Input type="text"
               placeholder="用户名"
               onChange={this.onChange.bind(this, 'username')}
               style={{marginBottom: '10px'}}/>
        <Input type="password"
               placeholder="密码"
               onChange={this.onChange.bind(this, 'password')}
               style={{marginBottom: '10px'}}/>
        <div className={styles.btn}>
          <Button type="primary" size="small" onClick={this.onClick}>注册</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  global: state.global,
  ...state.homePage
});

const mapDispatchToProps = {}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
