import React from 'react';
import MessageAgent from './MessageAgent';
import Summary from './Summary';
import userSeparator from '../../assets/img/user-separator.png'
class MessageContainer extends React.Component{

render(){
  let messages = [];
  this.props.messages.forEach((message) => {
    messages.push(<MessageAgent message={message.text} direction={message.type} />)
  });
    return(
      
      <div className="body-chat">
             <Summary/>
             <div className="separacionchat">
              
               <img src={userSeparator} alt="person" className="" ></img>
            
             </div>
        	{messages}
      </div>
    )
}



}

export default MessageContainer;
