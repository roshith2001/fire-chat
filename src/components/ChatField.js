import React from 'react';


import ChatBubble from './ChatBubble';

const ChatField = ( { message } ) => {


    

    return(
        <>
            <div className='my-14'>
                {message.map((message) => (
                    <ChatBubble key={message.id} message={message}/>
                ))}
            </div>
        </>
    );
}

export default ChatField;