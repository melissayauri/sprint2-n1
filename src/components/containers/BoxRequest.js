import React from 'react';
import  '../styles/boxrequest.scss'
import axios from 'axios';
import ItemChat from './ItemChat';
import ContainerList from './ContainerList'
import openSocket from 'socket.io-client';

const SERVER_URL = 'http://chatwebsocket-env.iwmw83ztd9.us-east-2.elasticbeanstalk.com/Websocketbotohmega/2';
const conversations = []
const socket = openSocket(SERVER_URL);
const baseUrl = "http://canviabot-env.jrrd9t8itz.us-east-2.elasticbeanstalk.com/api";
class BoxRequest extends React.Component{

    constructor(props) {
        super(props);   
        this.handleAttend = this.handleAttend.bind(this)
        this.state = { conversation: {},
        conversations : [],
        agentId : 'AGNT00001'
        }
      

      }

      

      componentWillMount(){     

        this.getConversationInfo()
        this.getConversations()
      }

      componentDidMount() 
      {
        var state_current = this;
        socket.on('conversationInfo', function (data) 
        {
            state_current.setState(state_current.state.conversation = data);
        });
       }

      handleAttend(e) {
          e.preventDefault();
          this.setConvertationStatus()
          
    }

    setConvertationStatus()
    {
        const params = {agentId: this.state.agentId};
        axios.post(baseUrl + '/setConvertationStatus', params)
        .then(res => this.getConversations());
        
      
    }

    
    getConversationInfo()
    {
        axios.get(baseUrl + '/getConvertationInfo')
        .then(response => {
          this.setState(this.state.conversation = response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    getConversations()
    {
        axios.get(baseUrl + '/getConvertations' + '/'+this.state.agentId )
        .then(response => {         
          this.props.addChild(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }

render(){
    return(
        <div>
        <div className="container-request">
            <div className="container-time">
                <div className="">
                    <p className="mb-0  title-time">Más antiguo</p>
                    <span className="last-time">3 h</span>
                </div>
                <div className="">
                    
                        <span>{this.state.conversation.count_conversations}</span>
                 
                </div>
                <div className="">
                    <p className="mb-0  title-time">Reciente</p>
                    <span className="first-time">4 min</span>
                </div>
            </div>
            <p className=" mb-0 mt-0">Solicitudes nuevas</p>
            <a onClick={this.handleAttend} className="waves-effect waves-light btn btn-request"> <p>atender solicitud</p></a>
   
            </div>
                     <div className="container-listchat">
                     {this.props.children}
                 </div>
                 </div>
                 
    
    )
}



}

export default BoxRequest;