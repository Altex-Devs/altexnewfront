import { Link } from "react-router-dom";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

function PostsAdminItem({post, getPosts}) {
  const remove = () => {
    if (window.confirm("Устгахдаа итгэлтэй байна уу?")) {
      deleteDoc(doc(db, "posts", post.id)).then(() => {
        getPosts();
      });
    }
  }

  return (
    <div>
      {post.title}
      [<Link to={`/admin/posts/${post.type}/edit/${post.id}`}>Edit</Link>]
      [<button onClick={remove}>Remove</button>]
    </div>
  );
}

export default PostsAdminItem;