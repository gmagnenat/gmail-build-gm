import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Mail from './components/Mail/index';
import EmailList from './components/EmailList';
import SendMail from './components/SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';
import Sidebar from './components/Sidebar';

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);

  return (
    <Router>
      <div className='app'>
        <Header />
        <div className='app__body'>
          <Sidebar />
          <Routes>
            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<EmailList />} />
          </Routes>
        </div>

        {sendMessageIsOpen && <SendMail />}
      </div>
    </Router>
  );
}

export default App;
