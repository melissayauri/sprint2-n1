import React from 'react';
import CirclePerson from './CirclePerson';
import NamePerson from './NamePerson';
import  '../styles/listchats.scss';
class ItemChat extends React.Component{

render(){
    return(
      
        <li className="box-chat">
            <CirclePerson/>
            <div className="personal-information " >
                   < NamePerson fullName={ this.props.conversation.user.user_first_name + ' ' +this.props.conversation.user.user_last_name}/>
                    <p>hola, tengo un problem ccon sh</p>
                </div>
                <div className="extra-information">
                    <span className="time">11:30</span>
                    <div className="message"> { this.props.conversation.user.number}</div>
                </div>
            </li>
    )
}



}

export default ItemChat;