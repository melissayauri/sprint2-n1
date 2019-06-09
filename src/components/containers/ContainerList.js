import React from 'react';
import BoxRequest from './BoxRequest';
import ItemChat from './ItemChat';
import  '../styles/listchats.scss';
class ContainerList extends React.Component{
    constructor () {
		super();
        this.state = {
            conversations: []
        };
    }
    onAddChild (conversations) {
        this.setState({
            conversations: conversations
        });
    }
    render(){
        const children = [];
        const conversations = this.state.conversations;
        
        conversations.forEach(function(element) {
            children.push(<ItemChat conversation={element} />);
          });

    

        return (
            <BoxRequest addChild={this.onAddChild.bind(this)}>
                {children}
            </BoxRequest>
        );
        
    
}
}
export default  ContainerList;