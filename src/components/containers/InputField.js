import React from 'react';
import emoji from '../../assets/img/emoji.png';
import clip from '../../assets/img/clip.png';
import send from '../../assets/img/send.png';

class InputField extends React.Component{
constructor(props) {
		super(props);
		
		this.handleNewMessage = this.handleNewMessage.bind(this);
	}
	
	handleNewMessage(e) {
		let message = e.target.querySelectorAll('input')[0].value
		if (message !== '') {
			this.props.handleNewMessage(message, 'out');
			const items = document.querySelectorAll('.message__row');
				const lastItem = items[items.length - 1];
				document.querySelector('.body-chat').scrollTop = lastItem.offsetTop + lastItem.style.height;
		   
            
			setTimeout(()=>{
				this.props.handleNewMessage('Hello there!', 'in');
				this.props.handleNewMessage('Hi!', 'in');
				document.querySelector('.body-chat').scrollTop = lastItem.offsetTop + lastItem.style.height;
		   
            
			}, 1)
		
			// limpiar campos
			e.target.reset();
		
		}
		e.preventDefault();
		
	}
render(){
    return(
      
     <form className="chat-input" onSubmit={this.handleNewMessage}>
     <img src={emoji} alt="emoji" className="responsive-img" ></img>
  
             
<input  placeholder="Escribe un mensaje" type="text" name="message" />
     <img src={send} alt="emoji" className="responsive-img" ></img>
    
 </form>
    )
}



}

export default InputField;