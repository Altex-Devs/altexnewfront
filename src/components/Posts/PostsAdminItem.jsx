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
    <div className="p-5 bg-[#fff] font-sans w-max text-[#000] shadow">
      <div className="border-b rounded p-1 w-[950px] flex justify-between shadow-lg">
          <div className="flex items-center">
            {post.title}
          </div>
          <div className="flex">
            <Link  to={`/admin/posts/${post.type}/edit/${post.id}`}>
            <div className="mx-2 border rounded shadow-lg p-2 flex justify-center bg-[#84cc16] w-[100px]">
                Edit
            </div>
            </Link>
            <div className="mx-2 border p-2 rounded shadow-lg flex justify-center flex bg-[#ef4444] w-[100px]">
              <button onClick={remove}>Remove</button>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default PostsAdminItem;