import { FormattedMessage, useIntl } from "react-intl";
import { BgEarth } from "../../SVG/altex.mn-fee-coin-icons/bg-earth";

export const AboutHeader = () => {
  const intl = useIntl();

  return (
    <div>
      <div className="relative border-b-[0.5px] border-[#13A9FD] pt-[183px] pb-[80px] z-10">
        <div className="text-[64px] font-bold mb-[120px] uppercase">
          <FormattedMessage id="about_us_header_title" />
        </div>
        <div className="relative text-[32px] max-w-[800px] font-extralight text-[#B4B7C3]">
          <span
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "about_us_header_sub_title" }),
            }}
          />
          {/* <FormattedMessage id="about_us_header_sub_title" />
          {lang === "mn" ? (
            <>
              <span className="text-[#13A9FD]">эрхэм зорилго</span>
              <span>.</span>
            </>
          ) : (
            <></>
          )} */}
        </div>
      </div>
      <div
        className="absolute top-0 right-0"
      >
        <BgEarth />
      </div>
    </div>
  );
};
