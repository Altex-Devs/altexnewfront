import { FormattedMessage, useIntl } from "react-intl";

function TermsOfUse() {
  const intl = useIntl();

  return (
    <>
      <div className="relative bg-[#F5F5F5] mt-[40px] mb-[77px] w-screen -left-[calc(50vw-50%)] text-[#35363B] font-light">
        <div className="container mx-auto px-[16px] pt-[80px] pb-[240px] max-w-[1232px]">
          <div className="font-light text-[14px] mb-[80px] text-[#3973C5]"><a href='/#'><FormattedMessage id="terms_breadcrumbs_1"/></a> &gt; <FormattedMessage id="terms_breadcrumbs_2"/>  &gt; <FormattedMessage id="terms_breadcrumbs_3"/></div>
          <div className="font-bold text-[32px] mb-[24px]">
            <FormattedMessage id="terms_title"/>
          </div>
          <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "terms_para"}) }} />
        </div>
        <div>
        </div>
      </div>
    </>
  );
}

export default TermsOfUse;