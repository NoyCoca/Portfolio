import React, { Component } from "react";
import { Launcher } from "react-chat-window";

class Chat extends Component {
  constructor() {
    super();
    this.state = {
      messageList: [],
    };
    // this._sendMessage = this._sendMessage.bind(this);
  }

  _onMessageWasSent(message) {
    this.setState({
      messageList: [...this.state.messageList, message],
    });
    if (message.data.text === "hey") {
      this.setState({
        messageList: [
          ...this.state.messageList,
          { author: "them", data: { text: "hey you" }, type: "text" },
        ],
      });
    }
    debugger;
  }
    _sendMessage(text) {
      if (text.length > 0) {
        this.setState({
          messageList: [
            ...this.state.messageList,
            {
              author: "them",
              type: "text",
              data: { text },
            },
          ],
        });
        console.log(text);
      }
          debugger;
    }

  render() {
    return (
      <div>
        {/* <div onMessage={this._sendMessage.bind(this)}> grtfgbvrtgvrgrt</div> */}
        <Launcher
          agentProfile={{
            teamName: "react-chat-window",
            imageUrl:
              "https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png",
          }}
          //   onMessage={this._sendMessage.bind(this)}
          onMessageWasSent={this._onMessageWasSent.bind(this)}
          //   handleClick=
          //   onMessageWasSent={_sendMe)}
          messageList={this.state.messageList}
          showEmoji
        />
      </div>
    );
  }
}

export default Chat;
