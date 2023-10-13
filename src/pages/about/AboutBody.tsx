import { FormattedMessage } from "react-intl";

export const AboutBody = () => {
  return (
    <div className="border-b-[0.5px] border-[#13A9FD]">
      <ul
        className="relative space-y-[40px] py-[80px] ml-[28px] list-outside marker:absolute marker:top-[10px] z-10 text-[24px] font-extralight list-disc leading-[34px] [&_p]::before"
        style={{ listStyleImage: "url(/images/li-marker.png)" }}
      >
        <li className="font-extralight text-[24px] text-[#B4B7C3] relative">
          <p className="relative top-[-8px]">
            <FormattedMessage id="about_us_content" />
          </p>
        </li>
        <li className="font-extralight text-[24px] text-[#B4B7C3] relative">
          <p className="relative top-[-8px]">
            <FormattedMessage id="about_us_content_second" />
          </p>
        </li>
        <li className="font-extralight text-[24px] text-[#B4B7C3] relative">
          <p className="relative top-[-8px]">
            <FormattedMessage id="about_us_content_third" />
          </p>
        </li>
      </ul>
    </div>
  );
};
