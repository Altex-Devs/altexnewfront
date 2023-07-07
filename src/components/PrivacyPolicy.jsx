import { useEffect, useRef } from "react";
import { FormattedMessage, useIntl } from "react-intl";

function PrivacyPolicy() {
  const intl = useIntl();
  const topRef = useRef(null);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth' 
      });
    };

    const currentTopRef = topRef.current;
    currentTopRef.addEventListener('click', scrollToTop);
    return () => {
      currentTopRef.removeEventListener('click', scrollToTop);
    };
  }, []);

  return (
    <>
      <div className="relative bg-[#F5F5F5] mt-[40px] mb-[77px] w-screen -left-[calc(50vw-50%)] text-[#35363B] font-light">
      <div ref={topRef} className="fixed inset-[-1] right-10 bottom-10 border rounded-full p-2 border-[#050F36] cursor-pointer bg-[#050F36] z-50 flex justify-center items-center">
        <div className="text-[#000] text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
        <title/>
        <g id="Complete">
        <g id="arrow-up">
        <g>
        <polyline data-name="Right" fill="none" id="Right-2" points="7 7.5 12 2.5 17 7.5" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
        <line fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" x1="12" x2="12" y1="21.3" y2="4.8"/>
        </g>
        </g>
        </g>
        </svg>
        </div>
    </div>
        <div className="container mx-auto px-[16px] pt-[80px] pb-[241px] max-w-[1232px]">
          <div className="font-light text-[14px] mb-[80px] text-[#3973C5]"><a href='/#'><FormattedMessage id="terms_breadcrumbs_1"/></a> &gt; <FormattedMessage id="terms_breadcrumbs_2"/>  &gt; <FormattedMessage id="terms_breadcrumbs_3"/></div>

          <div className="font-bold text-[32px] mb-[24px]" dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "privacypolicy_title"}) }} />
          <span className="richcontent" dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "privacypolicy_content"}) }} />
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;