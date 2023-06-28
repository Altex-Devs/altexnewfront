import { Link, useParams } from "react-router-dom";
import PostsMore from "./PostsMore";
import { useEffect, useState } from "react";
import { collection, endBefore, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";
import { db } from "../../firebase";

function Posts() {
  const [posts, setPosts] = useState([]);
  const { type } = useParams();
  const [cursorAtEnd, setCursorAtEnd] = useState(false);
  const [cursorAtStart, setCursorAtStart] = useState(true);
  const [totalPosts, setTotalPosts] = useState(0);
  const [startIdx, setStartIdx] = useState(0);
  const paginateBy = 7;

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPosts = (direction) => {
    let q;
    if (direction === "next") {
      q = query(
        collection(db, "posts"),
        where("type", "==", type),
        orderBy("date", "desc"),
        startAfter(posts[posts.length - 1]?.ref),
        limit(paginateBy)
      );
    } else if (direction === "prev") {
      q = query(
        collection(db, "posts"),
        where("type", "==", type),
        orderBy("date", "desc"),
        endBefore(posts[0]?.ref),
        limit(paginateBy)
      );
    } else {
      q = query(collection(db, "posts"), where("type", "==", type), orderBy("date", "desc"));
    }

    getDocs(q)
      .then((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ref: doc,
          ...doc.data()
        }));

        if (data.length) {
          setPosts(data);
          setTotalPosts(querySnapshot.size);

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
      })
      .catch((error) => {
        console.error("Error getting posts:", error);
      });
  };

 

  const totalPages = Math.ceil(totalPosts / paginateBy);

  const handleNextPage = () => {
    if (startIdx + 6 < totalPosts) {
      setStartIdx(startIdx + 6);
    }
  };
  
  const handlePreviousPage = () => {
    if (startIdx - 6 >= 0) {
      setStartIdx(startIdx - 6);
    }
  };

  const handlePageClick = (index) => {
    const newStartIdx = index * 6;
    setStartIdx(newStartIdx);
  };

  return (
    <>
      <div className="bg-[#F5F5F5] relative w-screen -left-[calc(50vw-50%)] mt-[40px] pt-[80px] pb-[240px]">
        <div className="container mx-auto pt-[48px] max-w-[996px]">
          <div className="font-light text-[14px] mb-[80px] text-[#3973C5]">
            Нүүр &gt; Академи &gt; Крипто мэдлэг
          </div>

          {type === "basics" && (
            <div className="flex w-full pb-[16px] border-b-[1px] border-b-[#CDCDCE] text-[18px] font-medium gap-[40px] mb-[24px]">
              <div className="relative text-[#35363B]">
                КРИПТО МЭДЛЭГ
                <div className="absolute h-[2px] w-full bg-[#13A9FD] bottom-[-17px]"></div>
              </div>
              <Link to="/cryptoterms" className="relative text-[#CDCDCE]">
                НЭР ТОМЬЁОНЫ ТАЙЛБАР
              </Link>
            </div>
          )}

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

              <PostsMore posts={posts.slice(startIdx, startIdx + 6)} type={type} />


              <div className="mt-[15px] flex justify-center mt-[60px] w-full">
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <button
                    onClick={handlePreviousPage}
                    disabled={startIdx === 0}
                    className="relative inline-flex items-center rounded-l-md px-1 py-1 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Previous</span>
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  <div className="flex">
                    {Array.from({ length: totalPages }, (_, index) => {
                      if (index < 3 || index === totalPages - 1) {
                        return (
                          <button
                            key={index}
                            className={`relative mx-1 flex justify-center z-10 inline-flex items-center border text-[10px] text-[#000] w-[32px] h-[32px] rounded p-[10px] ${
                              startIdx === index * 6 ? "border-[#006CFF] text-[#006CFF]" : "border-[#C2C2C2] bg-white"
                            }`}
                            onClick={() => handlePageClick(index)}
                          >
                            {index + 1}
                          </button>
                        );
                      } else if (index === 3 && totalPages > 4) {
                        return (
                          <span key={index} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
                            ...
                          </span>
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                  <button
                    onClick={handleNextPage}
                    disabled={cursorAtEnd}
                    className="relative inline-flex items-center rounded-r-md px-1 py-1 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    <span className="sr-only">Next</span>
                    <svg className="h-5 w-5 " viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06l4.468-4.22L7.232 5.82a.75.75 0 011.038-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            </>
            }
        </div>
      </div>
    </>
  );
}

export default Posts;