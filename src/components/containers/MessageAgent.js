import React from 'react';
import  '../styles/message.css';

class MessageAgent extends React.Component{


render(){
    return(
      <div className="message__row">
      <span className={`messages message--${this.props.direction}`}>
        {this.props.message}
      
      </span>
    </div>
 )
}



}

export default MessageAgent;