import Editor from './Editor';
import { useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp, doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db, storage } from '../../firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { ref, uploadBytesResumable } from 'firebase/storage';

const PostEdit =  () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState((new Date()).toJSON().slice(0, 10));
  const [image, setImage] = useState("");
  const [percent, setPercent] = useState(0);
  const navigate = useNavigate();
  const {type, postId} = useParams();

  useEffect(() => {
    if (postId) {
      const docRef = doc(db, "posts", postId);
      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          setTitle(data.title);
          setContent(data.content);
          setDate(data.date);
          setImage(data.image);
        } else {
          console.log("No such document!");
        }
      });
    }
  }, [postId]);

  const save = async () => {
    if (postId) {
      await updateDoc(doc(db, "posts", postId), {
        title: title,
        content: content,
        image: image,
        date: date,
        updatedAt: serverTimestamp(),
        type: type,
      });
      navigate(`/${type}/${postId}`);
    } else {
      const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        content: content,
        image: image,
        date: date,
        createdAt: serverTimestamp(),
        type: type,
      });
      navigate(`/posts/${type}/${docRef.id}`);
    }
  }

  const upload = (e) => {
    let file = e.target.files[0];
    if (file) {
      let name = `${Date.now()}.${file.type.split('/')[1]}`;
      const storageRef = ref(storage, name)
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.then(() => {
        setImage(`https://firebasestorage.googleapis.com/v0/b/altexmn.appspot.com/o/${name}?alt=media`)
      });

      uploadTask.on('state_changed', (snapshot) => {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(progress);
      });
    }
  }

  return <>
 <div className='bg-gradient-to-r from-blue-400 to-purple-500 text-[#000] min-h-screen flex items-center justify-center'>
      <div className='w-full max-w-lg bg-white rounded-lg shadow-lg p-8'>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <h2 className='text-2xl font-bold mb-2'>Title</h2>
            <input
              type='text'
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              className='border border-gray-300 rounded px-4 py-2 w-full'
            />
          </div>
          <div>
            <h2 className='text-2xl font-bold mb-2'>Date</h2>
            <input
              type='date'
              value={date}
              onChange={(e) => setDate(e.currentTarget.value)}
              className='border border-gray-300 rounded px-4 py-2 w-full'
            />
          </div>
        </div>
        <div className='mt-8'>
          <h2 className='text-2xl font-bold mb-2'>Thumbnail</h2>
          <input type='file' onChange={upload} className='mb-4' />
          {percent > 0 && percent < 100 && (
            <div className='w-full h-4 bg-gray-200 rounded'>
              <div
                className={`w-${percent} bg-green-400 h-full rounded`}
              ></div>
            </div>
          )}
          {image && (
            <img className='w-[200px] mt-4' src={image} alt='post_image' />
          )}
        </div>
        <div className='mt-8'>
          <h2 className='text-2xl font-bold mb-2'>Content</h2>
          <div>
            <Editor content={content} setContent={setContent} />
          </div>
        </div>
        <div className='flex justify-between mt-8'>
          <button
            className='bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded'
            onClick={save}
          >
            Save
          </button>
          <button
            className='bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded'
            onClick={() => window.history.go(-1)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  </>;
}

export default PostEdit;