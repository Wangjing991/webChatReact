import React from "react";
import {connect} from "react-redux";
import {IPageRoute} from "../shared";
import {IGlobal} from "../../store/global";
import {IStoreState} from "../../store/shared";
import Avatar from "../../components/Avatar";
import MessageList from "../../components/Message/List";
import MessageEditor from "../../components/Message/Editor";
import Button from "../../components/Button";
import {
  IHomePage,
  UpdateMsgList,
  AsyncUpdateCount,
  updateMsgList,
  asyncUpdateCount
} from "./flow";
import io from "socket.io-client";
import styles from "./style.module.scss";

interface IProps extends IPageRoute<any>, IHomePage {
  global: IGlobal;
  updateMsgList: UpdateMsgList;
  asyncUpdateCount: AsyncUpdateCount;
}

const url = process.env.REACT_APP_API_URL || 'localhost:8003'

const socket = io(url)

class Home extends React.Component<IProps, any> {


  state = {
    message: ''
  }

  componentDidMount() {
    socket.on('chat', (data: any) => {
      console.log(data, 'socket-chat')
      this.props.updateMsgList(data)
      this.setState({
        message: ''
      })

    });
    if (!this.props.global.userId) {
      window.location.href = '#/login'
    }
  }

  handleChange = (value: string) => {
    this.setState({
      message: value
    })
  }
  sendMsg = () => {
    const msg = this.state.message
    socket.emit('chat', {user_id: this.props.global.userId, content: msg});
  }


  render() {
    const {msgList, global} = this.props
    return (
      <div className={styles.container}>
        <MessageList msgList={msgList} userId={global.userId}/>
        <MessageEditor onChange={this.handleChange} value={this.state.message}/>
        <div className={styles.btn}>
          <Button type="primary" size="small" onClick={this.sendMsg}>发送</Button>
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
  updateMsgList,
  asyncUpdateCount
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
