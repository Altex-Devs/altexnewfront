import { useEffect, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";
import { Link } from "react-router-dom";
import { getDocs } from "firebase/firestore";
import { collection, query, where } from "firebase/firestore";
import { db } from "../../firebase";

export const AboutReportPerformance = () => {
  const [posts, setPosts] = useState([]);
  const intl = useIntl();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const q = query(collection(db, "posts"), where("type", "==", "report"));
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
    <div>
      <div className="pt-[80px]">
        <h2 className="w-[335px] text-[32px] mb-[42px] w-[500px]">
          <FormattedMessage id="Reporting_performance" />
        </h2>
        <div className="grid justify-center sm:grid-cols-2 sm:justify-center lg:grid-cols-3 gap-[24px] ">
          {posts.map((post) => (
            <div key={post.id}>
              <div className="rounded flex flex-col w-full">
                <div className="border border-[#1B337B] w-full h-[203px]">
                  <div
                    className="aspect-video w-full h-full inline-block h-1/2 rounded-t"
                    style={{
                      backgroundImage: 'url("/images/report/report1.png")',
                      backgroundPosition: "cover",
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div className="border-t border-[#1B337B] mt-[14px]"></div>
                  <div className="pt-[18px] px-[16px] pb-[24px] flex flex-col justify-between grow"></div>
                </div>
                <div className="justify-between items-center">
                  <div className="text-[#B4B7C3] font-light pt-[30px] mb-[24px]">
                    {post.createdAt
                      ? post.date
                      : new Date(parseInt(post.date) * 1000).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "2-digit",
                            day: "2-digit",
                          }
                        )}
                  </div>
                  <a
                    href="https://firebasestorage.googleapis.com/v0/b/altexmn.appspot.com/o/20230727_Altex_digital_exchange_2023Q1_quarterly_report_v15h07%20(1).pdf?alt=media&token=43ee8b73-7e97-4409-a001-4dc8e6b437b7"
                    className="text-[14px] text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]"
                    target="_blank"
                    rel="noopener noreferrer" // Add rel="noopener noreferrer" for maximum security
                    dangerouslySetInnerHTML={{
                      __html: intl.formatMessage({ id: "posts_readmore" }),
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
          <div className=" rounded flex flex-col w-full">
            <div className="border border-[#1B337B] w-full h-[203px]">
              <div
                className="aspect-video bg-cover w-full h-full inline-block h-1/2 rounded-t"
                style={{
                  backgroundImage: 'url("/images/report/report2.png")',
                  backgroundPosition: "cover",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="border-t border-[#1B337B] mt-[14px]"></div>
              <div className="pt-[18px] px-[16px] pb-[24px] flex flex-col justify-between grow"></div>
            </div>
            <div className="justify-between items-center">
              <div className="text-[#B4B7C3] font-light pt-[30px] mb-[24px]">
                --/--/2023
              </div>
              <Link
                to=""
                className="text-[14px] isDisabled text-current cursor-not-allowed opacity-50 no-underline text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]"
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "posts_readmore" }),
                }}
              />
            </div>
          </div>
          <div className=" rounded flex flex-col w-full">
            <div className="border border-[#1B337B] w-full h-[203px]">
              <div
                className="aspect-video bg-cover w-full h-full inline-block h-1/2 rounded-t"
                style={{
                  backgroundImage: 'url("/images/report/report2.png")',
                  backgroundPosition: "cover",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
              <div className="border-t border-[#1B337B] mt-[14px]"></div>
              <div className="pt-[18px] px-[16px] pb-[24px] flex flex-col justify-between grow"></div>
            </div>
            <div className="justify-between items-center">
              <div className="text-[#B4B7C3] font-light pt-[30px] mb-[24px]">
                --/--/2023
              </div>
              <Link
                to=""
                className="text-[14px] isDisabled text-current cursor-not-allowed opacity-50 no-underline text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]"
                dangerouslySetInnerHTML={{
                  __html: intl.formatMessage({ id: "posts_readmore" }),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
