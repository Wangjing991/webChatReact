import React from "react";
import {connect} from "react-redux";
import {Link, withRouter} from "react-router-dom";
import {IPageRoute} from "../shared";
import {IGlobal} from "../../store/global";
import {IStoreState} from "../../store/shared";
import Input from "../../components/Input";
import Button from "../../components/Button";
import {userLogin} from "../../services/login";
import {UpdateUserId, updateUserId} from "../../store/global";
import styles from "./style.module.scss";

interface IProps extends IPageRoute<any> {
  global: IGlobal;
  updateUserId: UpdateUserId;
}

interface FormData {
  username: string;
  password: string;
}

class Login extends React.Component<IProps> {
  data: any = {}
  onClick = async () => {

    console.log(this.props, 'location')
    const res: any = await userLogin(this.data)
    if (res.status === 200) {
      this.props.updateUserId(res.user_info.id, res.user_info.name)
      this.props.history.push('/')
    }
    alert(res && res.message)
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
        <Link to="/register" style={{float: 'left'}}>立即注册</Link>
        <div className={styles.btn}>
          <Button type="primary" size="small" onClick={this.onClick}>登录</Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: IStoreState) => ({
  global: state.global,
  ...state.homePage
});

const mapDispatchToProps = {
  updateUserId
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
