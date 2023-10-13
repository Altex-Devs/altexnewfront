import { FormattedMessage } from "react-intl";
import { CEO, TeamMembers } from "../team";

export const Team = () => {
  return (
    <div className="w-full">
      <div className="text-[64px] font-bold pt-[183px] uppercase">
        <FormattedMessage id="our_team" />
      </div>
      <CEO />
      <TeamMembers />
    </div>
  );
};
