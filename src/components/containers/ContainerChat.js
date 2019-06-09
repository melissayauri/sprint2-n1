import React from 'react';
import  '../styles/containerchat.css';

import CirclePerson from './CirclePerson';

import NamePerson from './NamePerson';
import MessageContainer from './MessageContainer';
import InputField from './InputField';
import Summary from './Summary';
import QuickReplies from './QuickReplies'
import iconDragDrop from '../../assets/img/icono-drag-and-drop.png';
class ContainerChat extends React.Component{
    constructor(props) {
		super(props);
		this.state = {
			messages: [{
				text: '',
				type: '',
			
			}]
		}
		this.handleNewMessage = this.handleNewMessage.bind(this);
	}

	handleNewMessage(inputText, type) {
		this.setState((prevState, props) => ({
			messages: [...prevState.messages, {text: inputText, type: type}]
        }));
        
        /*setTimeout(() => {*/
       /*}, 100)*/
	}
   
    //Inicializando estados
  /*constructor(){
      super()
    this.message = []
    this.state ={ 
        showdata: this.message,
        input:'',
    }
    this.appendData = this.appendData.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
*/
    /*appendData(){
    this.message.push(<p>{this.state.input}</p>)
    this.setState({
        showdata:this.message,
        input:''
    })
}
    // Método para ingresar texto
    handleChange=(event)=>{
        let value = event.target.value;
        //console.log({value:e.target.value});
        this.setState({
            //messageAgent: e.target.value,
            //[e.target.name]:e.target.value,
        input:value
        })
    }
    handleReverse =(event)=>{
        event.preventDefault();
        let text = this.state.input;
        this.setState({
            reversedText: text
        })
    }
   /* keyPress(e){
        if(e.keyCode == 13){
            let message = e.target.value;
           console.log('value', e.target.value);
           // put the login here
        }
       
     }*/
    /*handleMessage=(e)=>{
        let message = e.target.querySelectorAll('input')[0].value;
        console.log(message)
        e.preventDefault();
    }*/
    // Método para enviar texto
    /*handleClick=(e)=>{
        e.preventDefault()
        console.log("enviar");
        console.log(this.state)
    }*/
    render(){
    return(
        <div className="container-chat">
            <div className="header-chat">
                <div>
                    <CirclePerson/>
                    <NamePerson/>
                </div>
              
            </div>
            <div className="container-flex">
            <div className="body">    
            <MessageContainer  messages={this.state.messages} />
            <InputField handleNewMessage={this.handleNewMessage}/>
            </div>

            <div className="container-quick-replies">
  <div>
    <img src={iconDragDrop} alt="icon-drag-drop"  className="responsive-img" ></img>
    <span>Respuesta rápidas</span>
  </div>
  <QuickReplies/>
              <QuickReplies/>
      </div>  
        
            
 
 
 
            </div>
        </div>
          
         
           

     
    )
}



}

export default ContainerChat;