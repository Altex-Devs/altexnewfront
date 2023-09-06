import { useEffect, useState } from 'react';
import { auth } from '../firebase';
import { sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css'

const Auth = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const [showPassword] = useState(false);

  useEffect(() => {
    if (user) {
      navigate('/admin');
    }

    const timeout = setTimeout(() => {
      setError('');
      setSuccess('');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [user, navigate, error, success]);

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
  const handleResetPassword = () => {
    setSending(true);
    setError('');
    setSuccess('');
  
    sendPasswordResetEmail(auth, email)
      .then(() => {
        setSending(false);
        setSuccess('Password reset email sent. Please check your inbox.');
      })
      .catch((error) => {
        console.error(error);
        setSending(false);
        setError('Failed to send password reset email. Please try again.');
      });
  };

  return (
    <body className="flex h-screen bg-indigo-700">
      <div className="w-full max-w-xs m-auto bg-indigo-100 rounded p-5">
        <header>
          <div className="w-20 mx-auto mb-5">
          <svg xmlns="http://www.w3.org/2000/svg" width="116" height="40" viewBox="0 0 116 40">
            <g id="Group_6354" data-name="Group 6354" transform="translate(0 -0.001)">
              <path id="Path_4936" data-name="Path 4936" d="M0,100.638V115.9l.123.071,2.9,1.676.124.071.123.071.124.071,2.9,1.676.123.071.123.071.123.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676.123.071.123.071.124.071,2.9,1.676V110.512l-2.9,1.676-.124.071v7.7l-.123-.071-.123-.071-.123-.071-2.9-1.676L9.695,118l-.123-.071-.123-.071-2.9-1.676-.123-.071-.123-.071-.123-.071-2.9-1.676-.123-.071-.123-.071V102.527l.123.071.123.071.123.071,2.9,1.676.123.071.124.071.123.071,2.9,1.676.123.071.123-.071,2.9-1.676-2.9-1.676-.123-.071-.124-.071-.123-.071-2.9-1.676-.123-.071-.124-.071-.123-.071-2.9-1.676L3.15,99.1l-.124-.071L2.9,98.962,0,97.285Z" transform="translate(0 -85.201)" fill="indigo-100"/>
              <path id="Path_4937" data-name="Path 4937" d="M29.129,0l-.123.071L26.1,1.748l-.123.071-.123.071-.124.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676-.124.071-.123.071-.124.071-2.9,1.676,2.9,1.676.124.071.123.071.124.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676V13.156l-.123-.071-2.9-1.676-.123-.071-.124-.071-.123-.071-2.9-1.676-.123-.071-.123-.071-.123-.071.123-.071.123-.071.123-.071,2.9-1.676.123-.071.124-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.124.071.123.071,2.9,1.676.123.071.123.071.123.071,2.9,1.676.124.071.123.071.123.071,2.9,1.676.123.071.123.071.123.071-.123.071-.123.071-.123.071-2.9,1.676-.123.071-.123.071-.124.071-2.9,1.676-.123.071V16.65l2.9-1.676.123-.071.124-.071.123-.071,2.9-1.676.123-.071.123-.071.124-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676-2.9-1.676-.123-.071L42.1,7.487l-.123-.071L39.07,5.74l-.123-.071L38.824,5.6,38.7,5.527,35.8,3.851l-.123-.071-.124-.071-.123-.071-2.9-1.676L32.4,1.89l-.123-.071-.123-.071L29.252.072Z" transform="translate(-11.409)" fill="indigo-100"/>
              <path id="Path_4938" data-name="Path 4938" d="M170.073,98.964l-.123.071-.123.071-.123.071-2.9,1.676-.123.071-.124.071-.123.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676,2.9,1.676.123.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071v11.621l-.123.071-.124.071-2.9,1.676-.123.071-.123.071-.123.071-2.9,1.676-.124.071-.123.071-.123.071-2.9,1.676-.123.071-.123.071-.123.071v-7.7l-.123-.071-2.9-1.676V125.2l2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071.123-.071.123-.071,2.9-1.676.123-.071V97.288Z" transform="translate(-137.379 -85.203)" fill="indigo-100"/>
              <rect id="Rectangle_5040" data-name="Rectangle 5040" width="8.235" height="2.516" transform="translate(92.395 15.801)" fill="indigo-100"/>
              <path id="Path_4939" data-name="Path 4939" d="M619.465,129.905h3.19v7.975H625.4v-7.975h3.189v-2.747h-9.128Z" transform="translate(-542.574 -111.44)" fill="indigo-100"/>
              <path id="Path_4940" data-name="Path 4940" d="M746.238,163.514v-1.308h5.582v-2.679h-8.33v6.735h8.33v-2.679h-5.582Z" transform="translate(-651.094 -139.816)" fill="indigo-100"/>
              <path id="Path_4941" data-name="Path 4941" d="M851.245,185.323h3.107l1.181-1.8L854,181.267Z" transform="translate(-745.576 -158.875)" fill="indigo-100"/>
              <path id="Path_4942" data-name="Path 4942" d="M851.386,127.157l7.294,10.722h3.02l-5.188-7.657h0l-.186-.262-1.894-2.8Z" transform="translate(-745.699 -111.439)" fill="indigo-100"/>
              <path id="Path_4943" data-name="Path 4943" d="M905.206,127.927h-2.863l-1.139,1.665,1.455,2.144Z" transform="translate(-789.381 -112.124)" fill="indigo-100"/>
              <path id="Path_4944" data-name="Path 4944" d="M383,127.157l-4.188,10.722h2.94l2.823-7.652,1.779,4.841h-1.85l-1.023,2.811h6.855l-4.188-10.722Z" transform="translate(-331.786 -111.439)" fill="indigo-100"/>
              <path id="Path_4945" data-name="Path 4945" d="M526.67,135.135h-.893v0h-3.19v-7.975h-2.748v10.722h7.745Z" transform="translate(-455.32 -111.439)" fill="indigo-100"/>
            </g>
          </svg>
          </div>
        </header>
        <form>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="username">
              Username
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type="text"
              name="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={handleKeyDownOnPassword}
            />
          </div>
          <div>
            <label className="block mb-2 text-indigo-500" htmlFor="password">
              Password
            </label>
            <input
              className="w-full p-2 mb-6 text-indigo-700 border-b-2 border-indigo-500 outline-none focus:bg-gray-300"
              type={showPassword ? 'text' : 'password'}
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyDown={handleKeyDownOnPassword}
            />
          </div>
          <div>
             <button
             className="w-full bg-indigo-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded"
             type="button"
             onClick={signInWithEmail}
             disabled={sending}
           >
             {sending ? 'Signing In...' : 'Sign In'}
           </button>
            {success && <p className="text-green-600 text-sm mt-2">{success}</p>}
          </div>
        </form>
        <div className='mt-2'>
        <footer>
          <Link className="text-indigo-700 hover:text-pink-700 text-sm float-left" href="#" onClick={handleResetPassword}>Forgot Password?</Link>
        </footer>
        <div className='w-full inline-block'>
        {error && <p className="text-red-600 text-sm mt-2">Нэвтрэх нэр/нууц үг тохирохгүй байна! Та шалгаад дахин оролдоно уу.</p>}
        </div>
        </div>
        <div>
        </div>
      </div>
    </body>
  );
}

export default Auth;