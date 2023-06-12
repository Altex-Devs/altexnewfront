import { Link, useParams } from "react-router-dom";
import PostsMore from "./PostsMore";
import { useEffect, useState } from "react";
import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { db } from "../../firebase";

function Posts() {
  const [posts, setPosts] = useState([]);
  const {type} = useParams();

  useEffect(() => {
    const q = query(collection(db, "posts"), where("type", "==", type), orderBy("date", "desc"), limit(4));

    getDocs(q).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}))
      setPosts(data);
    });
  }, [type]);

  return (
    <>
      <div className="bg-[#F5F5F5] relative w-screen -left-[calc(50vw-50%)] mt-[40px] pt-[80px] pb-[240px]">
        <div className="container mx-auto pt-[48px] max-w-[1200px] px-[15px]">
          <div className="font-light text-[14px] mb-[80px] text-[#3973C5]">Нүүр &gt; Академи &gt; Крипто мэдлэг</div>

          {posts.length && <>
            <div className="bg-white rounded flex flex-col lg:flex-row gap-[24px] mb-[24px]">
              <div className="basis-2/3 aspect-video bg-cover rounded-l" style={{backgroundImage: `url(${posts[0].image})`}} ></div>
              <div className="basis-1/3 p-[24px] pl-0 flex flex-col justify-between">
                <div className="">
                  <div className="inline-block text-[12px] font-light rounded bg-[#FDAE13] py-[4px] px-[8px] mb-[23px]">Хамгийн сүүлийн</div>
                  <div className="text-[#03040A] text-[32px] font-bold">{posts[0].title}​</div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-[#707070] font-light">{posts[0].date}</div>
                  <Link className="text-[14px] text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]" to={`/news/${posts[0].id}`}>Цааш үзэх</Link>
                </div>
              </div>
            </div>

            <PostsMore posts={posts.slice(-3)} type={type} />
          </>}

        </div>
      </div>
    </>
  );
}

export default Posts;