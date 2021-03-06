import React, { useState, useEffect } from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import myAvatar from '../assets/images/my-avatar.svg';
import '../styles/SimpleChatBot.scss';

export default function SimpleChatBot() {
  const [botWidth, setBotWidth] = useState('100px');
  const [appearBot, setAppearBot] = useState(true);
  const changeBotSize = () => {
    if (window.innerWidth >= '600') {
      setAppearBot(true);
      setBotWidth('40%');
    } else if (window.innerWidth < '600') {
      setAppearBot(false);
    } else {
      setBotWidth('300px');
      setAppearBot(true);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', changeBotSize);
    window.addEventListener('load', changeBotSize);
  }, []);

  return (
    <div className="simple-chat-bot">
      <div className="simple-chat-bot_content">
        {appearBot
          ? (
            <ThemeProvider theme={theme}>
              <ChatBot
                steps={steps}
                headerTitle="Chat Bot"
                botAvatar={myAvatar}
                userDelay="500"
                height="70%"
                width={botWidth}
                floating
              />
            </ThemeProvider>
          )
          : null }
      </div>
    </div>
  );
}

const steps = [
  {
    id: '0',
    message: 'Can I help you?',
    trigger: '3',
  },
  {
    id: '2',
    message: 'Alright, goodbye!',
    end: true,
  },
  {
    id: '3',
    options: [
      { value: 1, label: 'What is this?', trigger: '4' },
      { value: 2, label: 'How can I text you?', trigger: '5' },
      { value: 3, label: 'How is your day?', trigger: '6' },
      { value: 4, label: 'No', trigger: '2' },
    ],
  },
  {
    id: '4',
    message: 'This is small self-presentation project with a list of skills and my main steps in the sphere.',
    trigger: '0',
  },
  {
    id: '5',
    message: 'Use the links which are available at the page.',
    trigger: '0',
  },
  {
    id: '6',
    message: 'My day is fine, perhaps even better then yours!',
    trigger: '0',
  },
];

const theme = {
  background: '#fdfdfd',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#1284B5',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#1284B5',
  botFontColor: '#fff',
  userBubbleColor: '#1284B5',
  userFontColor: '#fdfdfd',
};
