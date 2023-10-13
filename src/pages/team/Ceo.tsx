import { FormattedMessage, useIntl } from "react-intl";

export const CEO = () => {
  const intl = useIntl();

  return (
    <div className="relative flex flex-col md:flex-row gap-[40px] pb-[160px] mt-[80px] sm:mt-[120px] items-center border-b-[0.5px] border-b-[#13A9FD] leading-[35px]">
      <div
        className="absolute w-[1618px] h-[1618px] left-[-400px]"
        style={{
          backgroundImage: "url(/images/layer-light.png)",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        }}
      />
      <img
        src="/images/ceo-new.png"
        alt="ceo"
        className="max-w-[350px] h-full sm:mb-0 mr-[40px] z-10"
      />
      <div className="grow font-extralight z-10">
        <div className="font-bold text-[32px] mb-[16px] text-[#E6E7EB]">
          <FormattedMessage id="our_team_ceo_name" />
        </div>
        <div className="text-[24px] mb-[40px] text-[#B4B7C3]">
          <FormattedMessage id="our_team_ceo" />
        </div>
        <div className="text-[24px] z-10">
          <span
            className="text-[#B4B7C3] leading-[32px]"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "our_team_ceo_background" }),
            }}
          />
        </div>
      </div>
    </div>
  );
};
