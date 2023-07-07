import { FormattedMessage, useIntl } from "react-intl";
import HomeComponents from "./HomeComponents";
import Trend from "./Trend";

const Corporate = () => {
  const intl = useIntl();

  return (
    <>
      <div className="relative top-[-130px]">
        <div className="relative flex flex-col justify-center h-[798px] z-10 justify-items-start items-start gap-[24px]">
          <div className="text-[40px] font-bold">
            <FormattedMessage id="corporate_header_title"/>
          </div>
          <p className="max-w-[800px] text-[24px] font-light leading-[30px]">
            <FormattedMessage id="corporate_header_section"/>
          </p>
          <a href="https://trade.altex.mn/" className="rounded-[4px] mt-[16px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b leading-[18px] from-[#13A9FD] to-[#006CFF] hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]"><FormattedMessage id="jumbo_button"/></a>
        </div>
        <div style={{backgroundImage: 'url("/images/dan-2.png")'}} className="absolute bg-cover w-screen h-full top-0 -left-[calc(50vw-50%)] pointer-events-none touch-none"></div>
      </div>

      {/* <div className="relative">
        <div className="absolute w-screen h-[500px] top-[-100px] left-[calc((100vw-100%)/-2)] bg-gradient-radial-left from-[rgba(0,108,255,0.26)] to-[rgba(19,169,253,0)] pointer-events-none touch-none"></div>
      </div> */}

      <Trend />

     


     <div className="mx-[-180px] bg-[#0B163F] sm:h-[682px] mb-[180px]">
     <div className="mx-[180px] py-[80px]">
     <div className="text-[#13A9FD] text-[24px] mb-[24px] ">
        <FormattedMessage id="feature_2_head"/>
      </div>

      <p className="font-light text-[18px] mb-[40px]">
        <FormattedMessage id="corporate_section_title"/>
      </p>

      <p className="font-light text-[18px]">
      <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "corporate_section_title_second"}) }} />
      </p>
      
      <div className="sm:grid sm:grid-cols-3 w-full md:flex-row gap-[24px] inline-block mt-[64px] sm:mb-[240px] font-light">
        <div className="rounded-[8px] flex-wrap mb-[16px] sm:w-[384px] border-[#13A9FD] border px-[30px] py-[25px] sm:px-[48px] sm:py-[40px]">
          <img src="/images/Group 7818.svg" alt="" className="mb-[16px]"/>
          <div className="text-[#13A9FD] font-bold mb-[8px]">
            <FormattedMessage id="corporate_management"/>
          </div>
          <p className="text-[14px]">
            <FormattedMessage id="corporate_management_title"/>
          </p>
        </div>
        <div className="rounded-[8px] flex-wrap mb-[16px] sm:w-[384px] border-[#13A9FD] border px-[30px] py-[25px] sm:px-[48px] sm:py-[40px]">
          <img src="/images/Union 57.svg" alt="" className="mb-[16px]"/>
          <div className="text-[#13A9FD] font-bold mb-[8px]">
            <FormattedMessage id="corporate_arbitrage"/>
          </div>
          <p className="text-[14px]">
            <FormattedMessage id="corporate_arbitrage_title" />
          </p>
        </div>
        <div className="rounded-[8px] flex-wrap mb-[16px] sm:w-[384px] border-[#13A9FD] border px-[30px] py-[25px] sm:px-[48px] sm:py-[40px]">
          <img src="/images/Union 58.svg" alt="" className="mb-[16px]"/>
          <div className="text-[#13A9FD] font-bold mb-[8px]">
            <FormattedMessage id="corporate_trading"/>
          </div>
          <p className="text-[14px]">
            <FormattedMessage id="corporate_trading_title"/>
          </p>
        </div>
      </div>
     </div>
     </div>
    
     

      <HomeComponents />
    </>
  );
}

export default Corporate;