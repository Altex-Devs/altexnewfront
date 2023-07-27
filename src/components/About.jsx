import { FormattedMessage, useIntl } from "react-intl";
import { useEffect, useState } from "react";
import { getDocs } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Link } from "react-router-dom";

function About() {
  const [posts, setPosts] = useState([]);
  const intl = useIntl();
  console.log('post:', posts);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const q = query(
        collection(db, "posts"),
        where("type", "==", "report")
      );
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(data); // Update the 'posts' state with the fetched data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  return (
    <>
      <div className="relative border-b-[0.5px] border-[#13A9FD] pt-[360px] pb-[80px] z-10">
        <div className="relative text-[32px] max-w-[800px] font-extralight">
          <FormattedMessage id="about_us_header_title"/>
        </div>
      </div>

      <div style={{backgroundImage: 'url("/images/Group 7821.svg")'}} className="absolute bg-no-repeat bg-[right_-230px_bottom_-480px] w-screen h-[930px] top-0 -left-[calc(50vw-50%)] pointer-events-none touch-none"></div>

      <ul className="relative space-y-[40px] mt-[80px] ml-[28px] list-outside marker:text-[#13A9FD] marker:text-[34px] marker:left-[-46px] marker:absolute z-10 text-[24px] font-extralight list-disc leading-[34px] [&_p]::before">
        <li>
          <FormattedMessage id="about_us_content"/>
        </li>
        <li>
          <FormattedMessage id="about_us_content_second"/>
        </li>
      </ul>
      <div className="flex flex-col sm:flex-row mt-[160px] mb-[80px] gap-[24px] justify-items-stretch text-[14px] font-extralight text-[#E6E7EB]">
        <div className="basis-1/2 rounded-[24px] bg-[#101C47] p-[40px]">
          <div className="text-[16px] text-[#13A9FD] font-bold mb-[8px]">
            <FormattedMessage id="about_us_tech_header"/>
          </div>
            <FormattedMessage id="about_us_tech_content"/>
          <div className="text-center mt-[40px]">
            <img src="/images/Group 7372.svg" alt="aws" className="inline"/>
          </div>
        </div>
        <div className="basis-1/2 rounded-[24px] bg-[#101C47] p-[40px]">
          <div className="text-[16px] text-[#13A9FD] font-bold mb-[8px]">
            <FormattedMessage id="about_us_ser_header"/>
          </div>
            <FormattedMessage id="about_us_ser_content"/>
          <div className="text-center mt-[40px]">
            <img src="/images/CallPro-new-tsenher-logo-texttei.svg" alt="aws" className="inline"/>
          </div>
        </div>
      </div>
      <div className="mt-[160px]">
        <h2 className="w-[335px] text-[32px] mb-[42px]">Тайлан гүйцэтгэл</h2>
        <div className="grid justify-center sm:grid-cols-2 sm:justify-center lg:grid-cols-3 gap-[24px] ">
        {posts.map((post) => <div key={post.id}>
          <div className=" rounded flex flex-col w-full">
              <div className="border border-[#1B337B] w-[380px] h-[210px]">
                <div className="aspect-video bg-cover w-full h-full inline-block h-1/2 rounded-t" style={{backgroundImage: `url("${post.image}")`}}></div>
                <div className="pt-[18px] px-[16px] pb-[24px] flex flex-col justify-between grow">
              </div>
              </div>
                <div className="justify-between items-center">
                  <div className="text-[#E6E7EB] font-light border-t pt-[12px] mb-[24px] border-[#1B337B]">{post.createdAt ? post.date : (new Date(parseInt(post.date) * 1000)).toJSON().slice(0, 10)}</div>
                  <Link to={post.pdf} donwload="Example-PDF-document" className="text-[14px] text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]" dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "posts_readmore"}) }} />
                </div>
              </div>
            </div>
        )}
      </div>
      </div>
    </>
  );
}

export default About;