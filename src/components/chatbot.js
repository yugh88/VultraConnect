import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
    const [userInput, setUserInput] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const handleSend = async () => {
        if (!userInput.trim()) return;
        
        const newChatHistory = [...chatHistory, { message: userInput, sender: 'user' }];
        setChatHistory(newChatHistory);
        setUserInput('');

        try {
            const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/chatbot`, { message: userInput });
            setChatHistory([...newChatHistory, { message: response.data.response, sender: 'bot' }]);
        } catch (error) {
            console.error("Error with chatbot response:", error);
        }
    };

    return (
        <div className="chatbot">
            <div className="chat-history">
                {chatHistory.map((chat, index) => (
                    <div key={index} className={`chat-message ${chat.sender}`}>
                        {chat.message}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};

export default Chatbot;
