import Editor from './Editor';
import { useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp, doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db, storage } from '../../firebase';
import { useNavigate, useParams } from 'react-router-dom';
import { ref, uploadBytesResumable } from 'firebase/storage';

const PostEdit =  () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState("");
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
      navigate(`/${type}/${docRef.id}`);
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
    <div className="text-black">
      <h2>Using CKEditor 5 build in React</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.currentTarget.value)} />
      <input type="file" onChange={upload} />
      {percent && percent < 100 && <>
        <div className="rounded bg-white w-full h-[50px]">
          <div className={`rounded bg-green-400 w-[${percent}%] h-[50px]`}>{Math.floor(percent)}%</div>
        </div>
      </>}
      {image && <>
        <img src={image} alt="post_image" />
      </>}
      <input type="date" value={date} onChange={(e) => setDate(e.currentTarget.value)} />
      <Editor content={content} setContent={setContent} />
      <button onClick={save}>Save</button>
    </div>
  </>;
}

export default PostEdit;