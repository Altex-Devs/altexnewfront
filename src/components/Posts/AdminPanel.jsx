import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import { app } from '../../firebase';

const AdminPanel = () => {
  const [userEmail, setUserEmail] = useState('');
  const [createdUserEmail, setCreatedUserEmail] = useState('');
  const [randomPassword, setRandomPassword] = useState('');

  const auth = getAuth(app);

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handleCreateUser = () => {
    const randomPassword = generateRandomPassword()
    createUserWithEmailAndPassword(auth, userEmail, randomPassword)
      .then((userCredential) => {
        // User signed up
        const user = userCredential.user;
        setCreatedUserEmail(user.email);
        setRandomPassword(randomPassword);
        sendPasswordResetEmail(auth, userEmail)
          .then(() => {
            // Password reset email sent
          })
          .catch((err) => {
            console.log('Error sending password reset email:', err.code, err.message);
          });
      })
      .catch((err) => {
        console.log('Error creating user:', err.code, err.message);
      });
  };


  const user = auth.currentUser;

  const generateRandomPassword = () => {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    return password;
  };

  return (
    <div className='h-screen w-[500px] '>
      {user ? (
        <>
          <div className='p-4 bg-[#006cff] rounded-b-xl'>
            <div>
              <h3 className='text-[#fff] text-[28px] p-6'>User's Email</h3>
              <input className='text-[#000] rounded w-[300px]' type="email" value={userEmail} onChange={handleEmailChange} />
            </div>
            <button className='text-[#fff] m-6 border p-2 rounded' onClick={handleCreateUser}>Create New User</button>
            {createdUserEmail && <p>Created User Email: {createdUserEmail}</p>}
            {randomPassword && <p>Random Password: {randomPassword}</p>}
          </div>
        </>
      ) : (
        <div>You must be logged in as an admin to access this page.</div>
      )}
    </div>
  );
};

export default AdminPanel;