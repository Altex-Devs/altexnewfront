import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, endBefore, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";
import { db } from "../../firebase";
import PostsAdminItem from "./PostsAdminItem";

function PostsAdmin() {
  const [posts, setPosts] = useState([]);
  const {type} = useParams();
  const paginateBy = 2;

  useEffect(() => {
    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPosts = (direction) => {
    let q;
    if (direction === "next") {
      console.log(posts[posts.length-1].ref);
      q = query(collection(db, "posts"), where("type", "==", type), orderBy("date", "desc"), startAfter(posts[posts.length-1].ref), limit(paginateBy));
    } if (direction === "prev") {
      q = query(collection(db, "posts"), where("type", "==", type), orderBy("date", "desc"), endBefore(posts[0]), limit(paginateBy));
    } else {
      q = query(collection(db, "posts"), where("type", "==", type), orderBy("date", "desc"), endBefore(null), limit(paginateBy));
    }

    getDocs(q).then((querySnapshot) => {
      console.log(querySnapshot.docs[querySnapshot.docs.length-1]);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ref: doc,
        ...doc.data()
      }));
      setPosts(data);
    });
  }

  return (
    <>
      <Link to={`/admin/${type}/create`}>Create</Link>
      <br />
      {posts.map((post) => <PostsAdminItem key={post.id} post={post} getPosts={getPosts} />)}
      <br />
      <button onClick={() => getPosts("prev")}>Prev</button>
      <button onClick={() => getPosts("next")}>Next</button>
    </>
  );
}

export default PostsAdmin;