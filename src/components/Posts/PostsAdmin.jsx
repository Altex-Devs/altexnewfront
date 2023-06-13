import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { collection, endBefore, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";
import { db } from "../../firebase";
import PostsAdminItem from "./PostsAdminItem";

function PostsAdmin() {
  const [posts, setPosts] = useState([]);
  const {type} = useParams();
  const [cursorAtEnd, setCursorAtEnd] = useState(false);
  const [cursorAtStart, setCursorAtStart] = useState(true);
  const paginateBy = 10;

  useEffect(() => {
    getPosts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPosts = (direction) => {
    let q;
    if (direction === "next") {
      q = query(collection(db, "posts"), where("type", "==", type), orderBy("date", "desc"), startAfter(posts[posts.length-1].ref), limit(paginateBy));
    } else if (direction === "prev") {
      q = query(collection(db, "posts"), where("type", "==", type), orderBy("date", "desc"), endBefore(posts[0].ref), limit(paginateBy));
    } else {
      q = query(collection(db, "posts"), where("type", "==", type), orderBy("date", "desc"), limit(paginateBy));
    }

    getDocs(q).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ref: doc,
        ...doc.data()
      }));

      if (data.length) {
        setPosts(data);

        if (direction === "next") {
          setCursorAtStart(false);
        } else if (direction === "prev") {
          setCursorAtEnd(false);
        }
      } else {
        if (direction === "next") {
          setCursorAtEnd(true);
        } else if (direction === "prev") {
          setCursorAtStart(true);
        }
      }
    });
  }

  return (
    <>
      <Link to="/admin">Back to Admin</Link><br />
      <Link to={`/admin/posts/${type}/create`}>Create</Link>
      <br />
      {posts.map((post) => <PostsAdminItem key={post.id} post={post} getPosts={getPosts} />)}
      <br />
      <button className="disabled:opacity-50" onClick={() => getPosts("prev")} disabled={cursorAtStart}>Prev</button>
      <button className="disabled:opacity-50 float-right" onClick={() => getPosts("next")} disabled={cursorAtEnd}>Next</button>
    </>
  );
}

export default PostsAdmin;