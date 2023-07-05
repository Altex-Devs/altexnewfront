import { FormattedMessage } from "react-intl";

function About() {
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

      <div className="flex flex-col sm:flex-row mt-[160px] mb-[240px] gap-[24px] justify-items-stretch text-[14px] font-extralight text-[#E6E7EB]">
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
    </>
  );
}

export default About;