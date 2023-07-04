import { Link } from "react-router-dom";

function PostsMore({posts, type}) {
  return (
    <>
      <div className="grid justify-center sm:grid-cols-2 sm:justify-center lg:grid-cols-3 gap-[24px] ">

        {posts.map((post) => <div key={post.id}>
          <div className="bg-white rounded flex flex-col w-[316px] h-[340px]">
            <div className="aspect-video bg-cover inline-block h-1/2 rounded-t" style={{backgroundImage: `url("${post.image}")`}}></div>
            <div className="pt-[18px] px-[16px] pb-[24px] flex flex-col justify-between grow">
            <div className="text-[#03040A] text-[18px] font-bold mb-[40px] overflow-hidden" style={{ maxHeight: "3em", lineClamp: 3 }}>
              {post.title}
            </div>
              <div className="flex justify-between items-center">
                <div className="text-[#707070] font-light">{post.date}</div>
                <Link className="text-[14px] text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]" to={`/posts/${type}/${post.id}`}>Цааш үзэх</Link>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </>
  );
}

export default PostsMore;