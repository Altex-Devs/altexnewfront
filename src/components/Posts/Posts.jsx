import { Link, useParams } from "react-router-dom";
import PostsMore from "./PostsMore";
import { useEffect, useState } from "react";
import { collection, endBefore, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";
import { db } from "../../firebase";

function Posts() {
  const [posts, setPosts] = useState([]);
  const {type} = useParams();
  const [cursorAtEnd, setCursorAtEnd] = useState(false);
  const [cursorAtStart, setCursorAtStart] = useState(true);
  const paginateBy = 7;

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
      <div className="bg-[#F5F5F5] relative w-screen -left-[calc(50vw-50%)] mt-[40px] pt-[80px] pb-[240px]">
        <div className="container mx-auto pt-[48px] max-w-[996px]">
          <div className="font-light text-[14px] mb-[80px] text-[#3973C5]">Нүүр &gt; Академи &gt; Крипто мэдлэг</div>

          {type === "basics" && <>
            <div className="flex w-full pb-[16px] border-b-[1px] border-b-[#CDCDCE] text-[18px] font-medium gap-[40px] mb-[24px]">
              <div className="relative text-[#35363B]">
                КРИПТО МЭДЛЭГ
                <div className="absolute h-[2px] w-full bg-[#13A9FD] bottom-[-17px]"></div>
              </div>
              <Link to="/cryptoterms" className="relative text-[#CDCDCE]">
                НЭР ТОМЬЁОНЫ ТАЙЛБАР
              </Link>
            </div>
          </>}

          {posts.length && <>
            <div className="bg-white rounded flex flex-col lg:flex-row gap-[24px] mb-[24px] h-[369px]">
              <div className="basis-2/3  aspect-video bg-cover rounded-l" style={{backgroundImage: `url(${posts[0].image})`}} ></div>
              <div className="basis-1/3 p-[24px] pl-0 flex flex-col justify-between">
                <div className="">
                  {cursorAtStart && <>
                    <div className="inline-block text-[12px] font-light rounded bg-[#FDAE13] py-[4px] px-[8px] mb-[23px]">Хамгийн сүүлийн</div>
                  </>}
                  <div className="text-[#03040A] text-[32px] font-bold">{posts[0].title}​</div>
                </div>
                <div className="flex justify-between items-center ">
                  <div className="text-[#707070] font-light">{posts[0].date}</div>
                  <Link className="text-[14px] text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]" to={`/posts/${type}/${posts[0].id}`}>Цааш үзэх</Link>
                </div>
              </div>
            </div>

            <PostsMore posts={posts.slice(1)} type={type} />

            <div className="mt-[15px]">
              <button className="rounded-full bg-[#006cff] p-[10px] px-[15px] disabled:opacity-50" onClick={() => getPosts("prev")} disabled={cursorAtStart}>Prev</button>
              <button className="rounded-full bg-[#006cff] p-[10px] px-[15px] disabled:opacity-50 float-right" onClick={() => getPosts("next")} disabled={cursorAtEnd}>Next</button>
            </div>
          </>}

        </div>
      </div>
    </>
  );
}

export default Posts;