import { useEffect, useState } from "react";
import { FormattedMessage } from "react-intl";
// import { Link } from "react-router-dom";

/* eslint-disable jsx-a11y/alt-text */
const Navbar = ({ locale, setLocale }) => {
  const [navbarBg, setNavbarBg] = useState(false);
  // const [isHuunHidden, setIsHuunHidden] = useState(true);
  // const [isBayguulagHidden, setIsBayguulagHidden] = useState(false);

  useEffect(() => {
    document.addEventListener("click", hideMenus);
  }, []);

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const changeLocale = () => {
    const to = locale === "en" ? "mn" : "en";
    setLocale(to);
    localStorage.setItem("language_local", to);
  };

  function hideMenu() {
    document.getElementById("menu").classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  // function showMenu() {
  //   document.getElementById("menu").classList.remove("hidden");
  //   document.body.classList.add("overflow-hidden");
  // }

  // function toggleMenu(e, section) {
  //   e.stopPropagation();
  //   const parent = e.target.parentElement;
  //   const icon = parent.querySelector(".icon");
  //   const expander = parent.querySelector(".expander");
  //   icon.classList.toggle("rotate-180");
  //   const isExpanded = expander.classList.contains("max-h-[180px]");
  //   const allExpanders = document.querySelectorAll(".expander");
  //   const allIcons = document.querySelectorAll(".icon");

  //   allExpanders.forEach((exp) => {
  //     exp.classList.remove("max-h-[180px]");
  //   });
  //   allIcons.forEach((icn) => {
  //     icn.classList.remove("rotate-180");
  //   });
  //   if (!isExpanded) {
  //     expander.classList.add("max-h-[180px]");
  //     icon.classList.add("rotate-180");
  //   } else {
  //     expander.classList.remove("max-h-[180px]");
  //     icon.classList.remove("rotate-180");
  //   }
  // }

  function toggleMobileMenu(e) {
    e.stopPropagation();
    const parent = e.target.parentElement;
    const icon = parent.querySelector(".icon");
    const expander = parent.querySelector(".expander");
    icon.classList.toggle("rotate-180");
    expander.classList.toggle("max-h-[180px]");
  }

  // Hide all menu
  function hideMenus(e) {
    if (!e.target.closest(".menu") || !e.target.closest(".mobile_menu")) {
      const mobileMenuExpanders = document.querySelectorAll(
        "#mobile_menu .expander"
      );
      mobileMenuExpanders.forEach((mobileMenuExpander) => {
        mobileMenuExpander.classList.remove("max-h-[180px]");
      });

      const menuExpanders = document.querySelectorAll("#main_menu .expander");
      menuExpanders.forEach((menuExpander) => {
        menuExpander.classList.remove("max-h-[180px]");
      });

      const menuIcons = document.querySelectorAll(".icon");
      menuIcons.forEach((menuIcon) => {
        menuIcon.classList.remove("rotate-180");
      });
    }
  }

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 48) {
      setNavbarBg(true);
    } else {
      setNavbarBg(false);
    }
  };

  // const handleHuunClick = () => {
  //   setIsHuunHidden(true);
  //   setIsBayguulagHidden(false);
  // };

  // const handleBayguulagClick = () => {
  //   setIsHuunHidden(false);
  //   setIsBayguulagHidden(true);
  // };

  return (
    <>
      <div
        id="menu"
        className={`fixed top-0 w-full left-0 h-screen bg-[#050F36] z-50 hidden lg:hidden p-[20px] ${
          navbarBg ? "bg-[#050F36]" : ""
        }  py-[92px]`}
      >
        <div className="flex justify-between items-center mb-[40px] mt-[-3px]">
          <img src="/images/header-logo.svg" />
          {/* <img src="/images/naadam-logo-10-05-05.svg" /> */}
          <svg
            id="SVGDoc"
            className="mr-[10px]"
            onClick={hideMenu}
            width="16"
            height="16"
            version="1.1"
            viewBox="0 0 16 16"
          >
            <defs></defs>
            <desc>Generated with Avocode.</desc>
            <g>
              <g>
                <title>Icon ionic-md-close</title>
                <path
                  d="M16,1.59989v0l-1.59989,-1.59989v0l-6.40011,6.40011v0l-6.40011,-6.40011v0l-1.59989,1.59989v0l6.40011,6.40011v0l-6.40011,6.40011v0l1.59989,1.59989v0l6.40011,-6.40011v0l6.40011,6.40011v0l1.59989,-1.59989v0l-6.40011,-6.40011v0z"
                  fill="#ffffff"
                  fillOpacity="1"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="flex items-center  bg-[#0A1540] h-[48px] w-full absolute left-0 top-0 text-[#696F86] text-[14px]">
          <div className="container fixed mx-auto text-right px-[34px] max-w-[1232px] overflow-auto font-light text-[#E6E7EB]">
            <span
              id="translate_lang"
              className="px-[24px]  cursor-pointer border-x-[1px] border-[#3B4466]"
              onClick={() => {
                changeLocale();
              }}
            >
              {locale === "en" ? "Mn" : "En"}
            </span>
          </div>
        </div>
        <div id="mobile_menu" className="flex flex-col gap-[15px] mb-[40px]">
          <a
            id="mobile_menu_trade"
            className="pb-[10px]"
            href="https://trade.altex.mn/"
          >
            <FormattedMessage id="mobile_menu_trade" />
          </a>
          <div>
            <span
              id="mobile_menu_about_us"
              className="mobile_menu"
              onClick={(event) => toggleMobileMenu(event)}
            >
              <FormattedMessage id="mobile_menu_about_us" />
            </span>
            <img
              className="inline-block relative left-[5px] icon"
              src="/images/menu_arrow.svg"
            />
            <div className="expander flex-col max-h-0 gap-[10px] pt-[10px] overflow-hidden space-y-4 transition-[max-height] duration-700 pl-[15px]">
              <a
                id="mobile_menu_about_exchange"
                className="block"
                href="/about"
              >
                <FormattedMessage id="mobile_menu_about_exchange" />
              </a>
              <a id="mobile_menu_team" className="block" href="/team">
                <FormattedMessage id="mobile_menu_team" />
              </a>
            </div>
          </div>
          <div>
            <span
              id="mobile_menu_academy"
              className="mobile_menu"
              onClick={(event) => toggleMobileMenu(event)}
            >
              <FormattedMessage id="mobile_menu_academy" />
            </span>
            <img
              className="icon inline-block relative left-[5px]"
              src="/images/menu_arrow.svg"
            />
            <div className="expander flex-col max-h-0 gap-[10px] pt-[10px] overflow-hidden space-y-4 transition-[max-height] duration-700 pl-[15px]">
              <a
                id="mobile_menu_market_news"
                className="block"
                href="/posts/news"
              >
                <FormattedMessage id="mobile_menu_market_news" />
              </a>
              <a
                id="mobile_menu_crypto_knowledge"
                className="block"
                href="/posts/basics"
              >
                <FormattedMessage id="mobile_menu_crypto_knowledge" />
              </a>
              <a
                id="mobile_menu_projects"
                className="block"
                href="/posts/projects"
              >
                <FormattedMessage id="mobile_menu_projects" />
              </a>
              <a id="menu_release" className="block" href="/posts/release">
                <FormattedMessage id="menu_release" />
              </a>
            </div>
          </div>
        </div>
        <a
          id="mobile_menu_register"
          className="inline-block rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b from-[#13A9FD] to-[#006CFF] mr-[42px] mb-[32px]"
          href="https://trade.altex.mn/register"
        >
          <FormattedMessage id="mobile_menu_register" />
        </a>
        <a
          id="mobile_menu_login"
          className="inline-block rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] border-solid border-[1px] border-[#13A9FD] text-[#13A9FD]"
          href="https://trade.altex.mn/signin"
        >
          <FormattedMessage id="mobile_menu_login" />
        </a>
      </div>

      <div
        className={`flex items-center z-50 h-[85px] sticky w-full left-0 top-0 text-[#696F86] text-[14px]`}
      >
        <div
          className={`mx-auto text-right px-[34px] py-[24px] w-full overflow-auto font-light text-[#E6E7EB] flex justify-between items-center ${
            navbarBg ? "bg-[#050F36] top-[48px]" : "top-[48px]"
          }`}
        >
          <a href="https://www.altex.mn/" className="py-[1px]">
            <div
              className="w-[106px] h-[37px]"
              style={{
                backgroundImage: "url(/images/header-logo-small.svg)",
                backgroundPosition: "center",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            />
            {/* <img src="/images/naadam-logo-10-05-05.svg" /> */}
          </a>
          <span
            id="translate_lang"
            className="px-[24px] cursor-pointer flex items-center"
            onClick={() => {
              changeLocale();
            }}
          >
            <img
              className="inline-block icon mr-[5px]"
              src="/images/language-icon.svg"
            />
            {locale === "en" ? "Mn" : "En"}
          </span>
        </div>
      </div>
      {/* <div
        className={`sticky transition-[5000] ease-in-out delay-10 scroll-smooth z-40 ${
          navbarBg ? "bg-[#050F36] top-[48px]" : "top-[48px]"
        }`}
      >
        <div
          className={`flex container mx-auto py-[40px] max-w-[1490px] px-[34px] items-center justify-between relative z-20`}
        >
          <div className="flex items-center">
            <a href="/" className="py-[1px]">
              <img src="/images/header-logo.svg" />
            </a>
          </div>
          <div className="lg:hidden">
            <button className="text-white rounded-full p-2" onClick={showMenu}>
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 6H21M3 12H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div
            id="main_menu"
            className="items-center gap-[40px] text-[16px] hidden lg:flex"
          >
            <a
              id="menu_trade"
              className="cursor-pointer"
              href="https://trade.altex.mn/"
            >
              <FormattedMessage id="menu_trade" />
            </a>
            <div
              className="relative cursor-pointer"
              onClick={(event) => toggleMenu(event, "Бидний тухай")}
            >
              <span id="menu_about_us" className="menu">
                <FormattedMessage id="menu_about_us" />
              </span>
              <img
                className="icon inline-block relative ml-[5px]"
                src="/images/menu_arrow.svg"
              />
              <div className="expander absolute w-max max-h-0 left-[50%] translate-x-[-50%] transition-[max-height] duration-700 overflow-hidden">
                <div className="absolute left-[50%] translate-x-[-50%] border-x-[8px] border-b-[10px] border-transparent border-b-[rgba(3,4,10,.12)]"></div>
                <div className="backdrop-blur-sm flex flex-col mt-[10px] gap-[16px] bg-[rgba(3,4,10,.12)] p-[16px] rounded-[4px] text-[14px]">
                  <a
                    id="menu_about_exchange"
                    className="hover:text-[#13A9FD] cursor-pointer"
                    href="/about"
                  >
                    <FormattedMessage id="menu_about_exchange" />
                  </a>
                  <a
                    id="menu_team"
                    className="hover:text-[#13A9FD] cursor-pointer"
                    href="/team"
                  >
                    <FormattedMessage id="menu_team" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="relative cursor-pointer"
              onClick={(event) => toggleMenu(event, "Академи")}
            >
              <div>
                <span id="menu_academy" className="menu">
                  <FormattedMessage id="menu_academy" value="Академи" />
                  <img
                    className="icon inline-block relative ml-[5px]"
                    src="/images/menu_arrow.svg"
                  />
                  <div className="expander absolute w-max max-h-0 left-[50%] translate-x-[-50%] transition-[max-height] duration-700 overflow-hidden">
                    <div className="absolute left-[50%] translate-x-[-50%] border-x-[8px] border-b-[10px] border-transparent border-b-[rgba(3,4,10,.12)]"></div>
                    <div className="backdrop-blur-sm flex flex-col mt-[10px] gap-[16px] bg-[rgba(3,4,10,.12)] p-[16px] rounded-[4px] text-[14px]">
                      <a
                        id="menu_market_news"
                        className="hover:text-[#13A9FD] cursor-pointer"
                        href="/posts/news"
                      >
                        <FormattedMessage id="menu_market_news" />
                      </a>
                      <a
                        id="menu_crypto_knowledge"
                        className="hover:text-[#13A9FD] cursor-pointer"
                        href="/posts/basics"
                      >
                        <FormattedMessage id="menu_crypto_knowledge" />
                      </a>
                      <a
                        id="menu_projects"
                        className="hover:text-[#13A9FD] cursor-pointer"
                        href="/posts/projects"
                      >
                        <FormattedMessage id="menu_projects" />
                      </a>
                      <a
                        id="menu_release"
                        className="hover:text-[#13A9FD] cursor-pointer"
                        href="/posts/release"
                      >
                        <FormattedMessage id="menu_release" />
                      </a>
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <a
              id="menu_register"
              href="https://trade.altex.mn/register"
              target="_blank"
              className="rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b from-[#13A9FD] to-[#006CFF] leading-[18px] hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]"
              rel="noreferrer"
            >
              <FormattedMessage id="menu_register" />
            </a>
            <a
              id="menu_login"
              href="https://trade.altex.mn/signin"
              target="_blank"
              className="rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] border-solid border-[1px] border-[#13A9FD] text-[#13A9FD] leading-[18px] hover:bg-[rgba(19,169,253,.16)]"
              rel="noreferrer"
            >
              <FormattedMessage id="menu_login" />
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Navbar;
