import { useEffect, useRef, useState } from "react";
import { FormattedMessage, useIntl } from "react-intl";

function PrivacyPolicy() {
  const intl = useIntl();
  const topRef = useRef(null);
  const [navbarBg, setNavbarBg] = useState(false); 
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

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

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 48 && scrollTop < document.getElementById("contento").offsetHeight ) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  return (
    <>
      <div className="relative bg-[#F5F5F5] mt-[40px] mb-[77px] w-screen -left-[calc(50vw-50%)] text-[#35363B] font-light">
      <div ref={topRef} className={`fixed inset-[-1] right-6 bottom-6 p-1 cursor-pointer z-50 flex justify-center items-center ${navbarBg ? "" : "hidden"}`}>
        <div className="text-[#000] text-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
          <g id="Group_7875" data-name="Group 7875" transform="translate(1098.6 403.6) rotate(180)">
            <rect id="Rectangle_5582" data-name="Rectangle 5582" width="64" height="64" rx="32" transform="translate(1034.6 339.6)" fill="#006cff" opacity="0.16"/>
            <path id="Icon_ionic-ios-arrow-up" data-name="Icon ionic-ios-arrow-up" d="M14.16,4.877l10.7,10.708a2.023,2.023,0,1,0,2.857-2.864L15.593.589A2.02,2.02,0,0,0,12.8.53L.59,12.712a2.023,2.023,0,0,0,2.857,2.864Z" transform="translate(1080.601 379.6) rotate(180)" fill="#006cff"/>
          </g>
        </svg>
        </div>
    </div>
        <div className="container mx-auto px-[16px] pt-[80px] pb-[241px] max-w-[1232px]">
          <div className="font-light text-[14px] mb-[80px] text-[#3973C5]"><a href='/#'><FormattedMessage id="terms_breadcrumbs_1"/></a> &gt; <FormattedMessage id="terms_breadcrumbs_2"/>  &gt; <FormattedMessage id="terms_breadcrumbs_3"/></div>
          <div className="font-bold text-[32px] mb-[24px]" dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "privacypolicy_title"}) }} />
          <span id="contento" className="richcontent" dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "privacypolicy_content"}) }} />
        </div>
      </div>
    </>
  );
}

export default PrivacyPolicy;