import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import {   signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);

  const signInWithEmail = () => {
    setSending(true);
    setError('');
    setSuccess('');
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setSending(false);
        setSuccess('Successfully signed in with email!');
      })
      .catch((error) => {
        console.log(error);
        setSending(false);
        setError(error.code);
      });
  }

  const handleKeyDownOnPassword = (event) => {
    if (event.key === 'Enter') {
      signInWithEmail();
    }
  }

  return (
    <div className='min-w-screen min-h-screen flex items-center justify-center'>
      <div className='p-8 bg-white shadow-lg rounded-lg relative'>
        <div className='text-4xl font-semibold mb-6 text-center text-gray-800'>
          <i className='fas fa-user-circle fa-3x mb-4 text-blue-600'></i>
          Login
        </div>
        <div className=''>
          <div className='relative mb-4'>
            <input
              type='text'
              className='input px-4 text-[#000] py-2 border rounded-md border-gray-300'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDownOnPassword}
            />
          </div>
          <div className='relative mb-4'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='input text-[#000] px-4 py-2 border rounded-md border-gray-300'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDownOnPassword}
            />
            <span
              className={`absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer ${
                showPassword ? 'text-blue-500' : 'text-gray-500'
              }`}
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <i className='fas fa-eye'></i> : <i className='fas fa-eye-slash'></i>}
            </span>
          </div>
          <button
            type='button'
            className='button w-full text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 transition-colors duration-300'
            onClick={signInWithEmail}
            disabled={sending}
          >
            {sending ? 'Signing In...' : 'Sign In'}
          </button>
          {success && <div className='mt-4 text-sm text-green-600'>{success}</div>}
          {error && <div className='mt-4 text-sm text-red-600'>{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default Auth;