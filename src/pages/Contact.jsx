import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [apiKey, setApiKey] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const response = await fetch('https://35.77.176.155:3000/');
        const data = await response.json();
        setApiKey(data.apiKey);
      } catch (error) {
        console.error('Failed to fetch API key:', error);
        setMessage('APIキーの取得に失敗しました。');
      }
    };

    fetchApiKey();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    const formData = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey
      },
      body: JSON.stringify(formData)
    };

    try {
      const response = await fetch('https://rwz02vl9w1.execute-api.ap-northeast-1.amazonaws.com/default/sendContactMe', requestOptions);
      const data = await response.json();
      console.log('Response:', data);
      setMessage('送信が完了しました。');
    } catch (error) {
      console.error('Error:', error);
      setMessage('送信に失敗しました。');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container noto-serif-jp-weight200">
      <h2 className='noto-serif-jp-weight900'>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group noto-serif-jp-weight200">
          <label htmlFor="name">お名前</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group noto-serif-jp-weight200">
          <label htmlFor="email">メールアドレス</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group noto-serif-jp-weight200">
          <label htmlFor="message">メッセージ</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit" className="submit-button" disabled={isLoading}>送信</button>
      </form>
      {message && <p className="response-message">{message}</p>}
    </div>
  );
};

export default Contact;
