/* eslint-disable jsx-a11y/alt-text */
import HomeComponents from "./HomeComponents";
// import Trend from "./Trend";
import {FormattedMessage} from "react-intl";

function Home() {
  return (
    <>
  <div className="absolute top-[48px] w-screen left-0 h-[1200px] bg-gradient-radial md:bg-gradient-radial-md from-[rgba(0,108,255,0.36)] to-[rgba(19,169,253,0)] pointer-events-none touch-none"></div>

  <div className="md:relative mb-[80px] md:mb-[178px]">
  <div
    style={{ backgroundImage: 'url("/images/hero-pic.svg")' }}
    className="absolute w-screen md:w-[1151px] h-[620px] top-0 left-0 md:left-auto md:right-[-450px] lg:right-[-300px] bg-[length:600px] md:bg-auto bg-center bg-no-repeat pointer-events-none"
  ></div>
  <div className="flex items-center md:h-[600px] relative mt-[366px] md:mt-auto">
    <div className="md:w-[60%] drop-shadow">
      <div id="jumbo_head" className="font-bold text-[28px] md:text-[40px] mb-[24px] leading-[3.25rem]">
        <FormattedMessage id="jumbo_head" defaultMessage="Дижитал санхүүг хялбараар" />
      </div>
      <div id="jumbo_desc" className="text text-[24px] mb-[40px] font-light">
        <FormattedMessage id="jumbo_desc" defaultMessage="Дижитал хөрөнгө оруулалт хийх хамгийн найдвартай платформыг санал болгож байна." />
      </div>
      <a
        href="https://trade.altex.mn/"
        target="_blank"
        id="jumbo_button"
        className="rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b from-[#13A9FD] to-[#006CFF] leading-[18px] hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]"
        rel="noreferrer"
      >
        <FormattedMessage id="jumbo_button" defaultMessage="Арилжаанд оролцох" />
      </a>
    </div>
  </div>
</div>

  {/* <Trend /> */}

  <HomeComponents />
</>
  );
}

export default Home;