import { FormattedMessage, useIntl } from "react-intl";

export const TeamMembers = () => {
  const intl = useIntl();

  return (
    <div className="flex flex-col lg:flex-row gap-[40px] pb-[160px] mt-[160px] items-center leading-[35px] relative">
      <div
        className="absolute w-[1618px] h-[1618px] left-[0] z-[-1]"
        style={{
          backgroundImage: "url(/images/layer-light-right.png)",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain"
        }}
      />
      <div className="flex-1 font-light">
        <div className="font-bold text-[32px] mb-[40px] uppercase">
          <FormattedMessage id="our_team_header" />
        </div>
        <div className="text-[16px] 2xl:text-[24px] z-10">
          <span
            className="text-[#B4B7C3] leading-[32px]"
            dangerouslySetInnerHTML={{
              __html: intl.formatMessage({ id: "our_team_content" }),
            }}
          />
        </div>
      </div>
      {/* <div className="grow" style={{backgroundImage: "url(/images/team-small.png)"}}/> */}
      <div className="flex-1">
        <img src="/images/team-small.png" alt="team" />
      </div>
    </div>
  );
};
