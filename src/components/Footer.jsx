import { FormattedMessage } from "react-intl";

/* eslint-disable jsx-a11y/alt-text */
const Footer = ({ locale, setLocale }) => {
  const changeLocale = () => {
    const to = locale === "en" ? "mn" : "en";
    setLocale(to);
    localStorage.setItem("language_local", to);
  };

  return (
    <>
      <div className="bg-[#050F36] w-full px-16">
        <div className="flex flex-row flex-wrap lg:flex-nowrap mb-[50px] pt-[40px]">
          <div className="basis-full min-[310px]:basis-1/2 md:basis-1/2 lg:basis-1/4 pr-[15px]">
            <div
              id="footer_about_us"
              className="text-[rgba(19,169,253,1)] mb-[32px]"
            >
              <FormattedMessage id="footer_about_us" />
            </div>
            <a
              id="footer_about_exchange"
              className="block mb-[16px] text-[#B4B7C3]"
              href="/about"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="footer_about_exchange" />
            </a>
            <a
              id="footer_team"
              className="block text-[#B4B7C3]"
              href="/team"
              target="_blank"
              rel="noreferrer"
            >
              <FormattedMessage id="footer_team" />
            </a>
          </div>
          <div className="basis-full min-[310px]:basis-1/2 md:basis-1/2 lg:basis-1/4 pr-[15px] z-20">
            <div
              id="footer_academy"
              className="text-[rgba(19,169,253,1)] mb-[32px]"
            >
              <FormattedMessage id="footer_academy" />
            </div>
            <a
              id="footer_market_news"
              // href="/posts/news"
              className="block mb-[16px] text-[#B4B7C3]"
            >
              <FormattedMessage id="footer_market_news" />
            </a>
            <a
              id="footer_crypto_knowledge"
              // href="/posts/basics"
              className="block mb-[16px] text-[#B4B7C3]"
            >
              <FormattedMessage id="footer_crypto_knowledge" />
            </a>
            <a
              id="footer_projects"
              // href="/posts/projects"
              target="_blank"
              className="block mb-[16px] text-[#B4B7C3]"
              rel="noreferrer"
            >
              <FormattedMessage id="footer_projects" />
            </a>
            <a
              id="menu_release"
              // href="/posts/release"
              target="_blank"
              className="block text-[#B4B7C3]"
              rel="noreferrer"
            >
              <FormattedMessage id="menu_release" />
            </a>
          </div>
          <div className="basis-full min-[310px]:basis-1/2 md:basis-1/2 lg:basis-1/4 pr-[15px] z-20">
            <div
              id="footer_service"
              className="text-[rgba(19,169,253,1)] mb-[32px]"
            >
              <FormattedMessage id="footer_service" />
            </div>
            <a
              id="footer_terms_of_service"
              // href="/termsofuse"
              className="block mb-[16px] text-[#B4B7C3]"
            >
              <FormattedMessage id="footer_terms_of_service" />
            </a>
            <a
              // href="/privacypolicy"
              id="footer_privacy_policy"
              className="block text-[#B4B7C3]"
            >
              <FormattedMessage id="footer_privacy_policy" />
            </a>
            {/* <a id="footer_fee" href="/isp" className="block mb-[16px] text-[#B4B7C3]">
              <FormattedMessage id="footer_isp" />
            </a>
            <a id="footer_fee" href="/fee" className="block mb-[16px] text-[#B4B7C3]">
              <FormattedMessage id="footer_fee" />
            </a> */}
          </div>
          <div className="basis-full min-[310px]:basis-1/2 md:basis-1/2 lg:basis-1/4 pr-[15px] z-20">
            <div
              id="footer_help"
              className="text-[rgba(19,169,253,1)] mb-[32px]"
            >
              <FormattedMessage id="footer_help" />
            </div>
            <a
              id="footer_faq"
              // href="/faq"
              className="block mb-[16px] text-[#B4B7C3]"
            >
              <FormattedMessage id="footer_faq" />
            </a>
            {/* <a
              id="footer_feedback"
              href="/feedback"
              className="block mb-[16px] text-[#B4B7C3]"
            >
              <FormattedMessage id="footer_feedback" />
            </a> */}
            <a
              id="howto"
              // href="/howto"
              className="block text-[#B4B7C3]"
            >
              <FormattedMessage id="howto" />
            </a>
          </div>
          {/* <div className="basis-full min-[310px]:basis-1/2 md:basis-1/2 lg:basis-1/4 pr-[15px]">
            <div
              id="footer_contact"
              className="text-[rgba(19,169,253,1)] mb-[32px]"
            >
              <FormattedMessage id="footer_contact" />
            </div>
            <div className="mb-[16px] flex">
              <div className="mr-[16px] flex-none w-[20px] flex place-content-center">
                <img
                  className="object-center"
                  src="/images/Icon metro-phone.svg"
                />
              </div>
              <span>7505 7775</span>
            </div>
            <div className="mb-[16px] flex">
              <div className="mr-[16px] flex-none w-[20px] flex place-content-center">
                <img src="/images/mail.svg" />
              </div>
              <span>contact@altex.mn</span>
            </div>
            <div className="mb-[16px] flex relative pl-[36px]">
              <div className="w-[20px] absolute left-0">
                <img src="/images/Icon material-location-on.svg" />
              </div>
              <FormattedMessage id="footer_address" />
            </div>
          </div> */}
        </div>

        <div className="border-solid border-t-[1px] border-[#006cff] py-[40px]">
          <div>
            <div className="flex justify-between items-center mb-[40px] md:mb-[24px]">
              <div className="">
                <img src="/images/header-logo-small.svg" />
              </div>
              <div className="relative w-[100px]">
                <img
                  className="sm:absolute object-cover"
                  src="/images/iso.svg"
                />
              </div>
            </div>
            <div className="flex justify-between sm:justify-start sm:flex-wrap sm:gap-[30px]">
              <a
                // href="https://www.facebook.com/altex.mn"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/fb.svg" />
              </a>
              <a
                // href="https://twitter.com/altex_mn"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/tw.svg" />
              </a>
              <a
                // href="https://www.instagram.com/accounts/login/?next=/altex.mn/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/ins.svg" />
              </a>
              <a
                // href="https://t.me/altexmn"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/tel.svg" />
              </a>
              <a
                // href="https://www.youtube.com/channel/UC0cP-OEOj_b2LJaSW8vxjHA"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/tube.svg" />
              </a>
              <a
                // href="https://www.linkedin.com/company/altex-digital-exchange/"
                target="_blank"
                rel="noreferrer"
              >
                <img src="/images/linkedin.svg" />
              </a>
            </div>
          </div>
        </div>

        <div className="absolute w-full left-0 h-[48px] bg-[#0A1540] flex items-between justify-center px-16">
          <div
            id="bottom"
            className="text-[#CDCDCE] leading-1 inline-block w-full text-[14px] flex items-center"
          >
            <FormattedMessage id="bottom" />
          </div>
          <span
            id="translate_lang"
            className="cursor-pointer text-[16px] flex items-center"
            onClick={() => {
              changeLocale();
            }}
          >
            <img
              className="inline-block icon mr-[5px]"
              src="/images/language-icon.svg"
            />
            <span className="text-[#B4B7C3]">
              {locale === "en" ? "Mon" : "En"}
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
