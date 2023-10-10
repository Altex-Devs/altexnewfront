import { FormattedMessage } from "react-intl";

export const AboutBody = () => {
  return (
    <div>
      <ul className="relative space-y-[40px] border-b-[0.5px] border-[#13A9FD] py-[80px] ml-[28px] list-outside marker:text-[#13A9FD] marker:text-[34px] marker:left-[-46px] marker:absolute z-10 text-[24px] font-extralight list-disc leading-[34px] [&_p]::before">
        <li className="font-extralight text-[24px] text-[#B4B7C3]">
          <FormattedMessage id="about_us_content" />
        </li>
        <li className="font-extralight text-[24px] text-[#B4B7C3]">
          <FormattedMessage id="about_us_content_second" />
        </li>
        <li className="font-extralight text-[24px] text-[#B4B7C3]">
          <FormattedMessage id="about_us_content_third" />
        </li>
      </ul>
    </div>
  );
};
