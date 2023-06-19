import { Link } from "react-router-dom";

function Admin() {
  return (
    <>
      <div className="text-[25px]">Admin panel</div>
      <Link to="/admin/posts/news">Manage News</Link><br />
      <Link to="/admin/posts/basics">Manage Crypto Basics</Link><br />
      <Link to="/admin/posts/projects">Manage Projects</Link><br />
      <Link to="/admin/posts/AdminFeedback">Feedback</Link>
    </>
  );
}

export default Admin;