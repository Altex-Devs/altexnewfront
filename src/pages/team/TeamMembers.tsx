import { FormattedMessage, useIntl } from "react-intl";

export const TeamMembers = () => {
  const intl = useIntl();

  return (
    <div className="flex flex-col lg:flex-row gap-[24px] pb-[160px] mt-[160px] items-center leading-[35px] ">
      <div className="flex-1 font-extralight">
        <div className="font-bold text-[32px] mb-[40px]">
          <FormattedMessage id="our_team_header" />
        </div>
        <div className="text-[16px] z-10">
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
