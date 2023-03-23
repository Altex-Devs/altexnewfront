import { useEffect } from "react";
import { FormattedMessage } from 'react-intl';

/* eslint-disable jsx-a11y/alt-text */
const Navbar = (props) => {
  useEffect(() => {
    document.addEventListener("click", hideMenus);
  }, []);
  
  const changeLocale = (locale) => {
    props.setLocale(locale);
    localStorage.setItem('language_local', locale);
  };

  function hideMenu() {
    document.getElementById('menu').classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  function toggleMenu(e) {
    e.stopPropagation();
    const parent = e.target.parentElement;
    const icon = parent.querySelector(".icon");
    const expander = parent.querySelector(".expander");
    icon.classList.toggle("rotate-180");
    expander.classList.toggle("max-h-[140px]");
  }

  function toggleMobileMenu(e) {
    e.stopPropagation();
    const parent = e.target.parentElement;
    const icon = parent.querySelector(".icon");
    const expander = parent.querySelector(".expander");
    icon.classList.toggle("rotate-180");
    expander.classList.toggle("max-h-[140px]");
  }

  function showMenu() {
    document.getElementById('menu').classList.remove("hidden");
    document.body.classList.add("overflow-hidden");
  }

  // Hide all menu
  function hideMenus (e) {
    if (!e.target.closest(".menu") || !e.target.closest(".mobile_menu")) {
      const mobileMenuExpanders = document.querySelectorAll("#mobile_menu .expander");
      mobileMenuExpanders.forEach((mobileMenuExpander) => {
        mobileMenuExpander.classList.remove("max-h-[140px]");
      });

      const menuExpanders = document.querySelectorAll("#main_menu .expander");
      menuExpanders.forEach((menuExpander) => {
        menuExpander.classList.remove("max-h-[140px]");
      });

      const menuIcons = document.querySelectorAll(".icon");
      menuIcons.forEach((menuIcon) => {
        menuIcon.classList.remove("rotate-180");
      });
    }
  }

  return (
    <>
      <div id="menu" className="fixed top-0 left-0 w-screen h-screen bg-[#050F36] z-20 hidden lg:hidden p-[25px] py-[92px]">
        <div className="flex justify-between items-center mb-[40px]">
          <img src="/images/header-logo.svg" />
          <svg id="SVGDoc" onClick={hideMenu} width="16" height="16" version="1.1" viewBox="0 0 16 16"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Icon ionic-md-close</title><path d="M16,1.59989v0l-1.59989,-1.59989v0l-6.40011,6.40011v0l-6.40011,-6.40011v0l-1.59989,1.59989v0l6.40011,6.40011v0l-6.40011,6.40011v0l1.59989,1.59989v0l6.40011,-6.40011v0l6.40011,6.40011v0l1.59989,-1.59989v0l-6.40011,-6.40011v0z" fill="#ffffff" fillOpacity="1"></path></g></g></svg>
        </div>
        <div id="mobile_menu" className="flex flex-col gap-[15px] mb-[40px]">
          <a id="mobile_menu_trade" className="pb-[10px]" href="https://trade.altex.mn/">
            <FormattedMessage id="mobile_menu_trade" />
          </a>
          <div>
            <span id="mobile_menu_about_us" className="mobile_menu" onClick={(event) => toggleMobileMenu(event)}>Бидний тухай</span>
            <img className="inline-block relative left-[5px] icon" src="/images/menu_arrow.svg" />
            <div className="expander flex-col max-h-0 gap-[10px] pt-[10px] overflow-hidden transition-[max-height] duration-700 pl-[15px]">
              <a id="mobile_menu_about_exchange" className="block" href="/about">Биржийн тухай</a>
              <a id="mobile_menu_team" className="block" href="/team">Баг хамт олон</a>
            </div>
          </div>
          <div>
            <span id="mobile_menu_academy" className="mobile_menu" onClick={(event) => toggleMobileMenu(event)}>Академи</span>
            <img className="icon inline-block relative left-[5px]" src="/images/menu_arrow.svg" />
            <div className="expander flex-col max-h-0 gap-[10px] pt-[10px] overflow-hidden transition-[max-height] duration-700 pl-[15px]">
              <a id="mobile_menu_market_news" className="block" href="https://altex.mn/market_news.php">Зах зээлийн мэдээ</a>
              <a id="mobile_menu_crypto_knowledge" className="block" href="https://altex.mn/crypto-basic.php">Крипто мэдлэг</a>
              <a id="mobile_menu_projects" className="block" href="https://altex.mn/projects.php">Төслүүд</a>
            </div>
          </div>
        </div>
        <a id="mobile_menu_register" className="inline-block rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b from-[#13A9FD] to-[#006CFF] mr-[42px] mb-[32px]" href="https://trade.altex.mn/register">Бүртгүүлэх</a>
        <a id="mobile_menu_login" className="inline-block rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] border-solid border-[1px] border-[#13A9FD] text-[#13A9FD]" href="https://trade.altex.mn/signin">Нэвтрэх</a>
      </div>

      <div className="flex items-center bg-[#0A1540] h-[48px] w-full absolute left-0 top-0 text-[#696F86] text-[14px]">
        <div className="container mx-auto text-right px-[16px] max-w-[1232px] overflow-auto font-light text-[#E6E7EB]">
          <span id="translate_lang" className="px-[24px] cursor-pointer border-x-[1px] border-[#3B4466]" onClick={() => {changeLocale('en')}}>Eng</span>
          <a href="/corporate" id="industry_select" className="ml-[24px]">Байгууллага</a>
        </div>
      </div>

      <div className="flex items-center justify-between pt-[40px] relative z-10">
        <div className="flex items-center">
          <a href="/" className="py-[10px]">
            <img src="/images/header-logo.svg" />
          </a>
        </div>
        <div className="lg:hidden">
          <button className="text-white rounded-full p-2" onClick={showMenu}>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div id="main_menu" className="items-center gap-[40px] text-[16px] hidden lg:flex">
          <a id="menu_trade" href="https://trade.altex.mn/">Арилжаа</a>
          <div className="relative cursor-pointer" onClick={(event) => toggleMenu(event)}>
            <span id="menu_about_us" className="menu">Бидний тухай</span>
            <img className="icon inline-block relative ml-[5px]" src="/images/menu_arrow.svg" />
            <div className="expander absolute w-max max-h-0 left-[50%] translate-x-[-50%] transition-[max-height] duration-700 overflow-hidden">
              <div className="absolute left-[50%] translate-x-[-50%] border-x-[8px] border-b-[10px] border-transparent border-b-[rgba(3,4,10,.12)]"></div>
              <div className="backdrop-blur-sm flex flex-col mt-[10px] gap-[16px] bg-[rgba(3,4,10,.12)] p-[16px] rounded-[4px] text-[14px]">
                <a id="menu_about_exchange" className="hover:text-[#13A9FD]" href="/about">Биржийн тухай</a>
                <a id="menu_team" className="hover:text-[#13A9FD]" href="/team">Баг хамт олон</a>
              </div>
            </div>
          </div>
          <div className="relative cursor-pointer" onClick={(event) => toggleMenu(event)}>
            <span id="menu_academy" className="menu">Академи</span>
            <img className="icon inline-block relative ml-[5px]" src="/images/menu_arrow.svg" />
            <div className="expander absolute w-max max-h-0 left-[50%] translate-x-[-50%] transition-[max-height] duration-700 overflow-hidden">
              <div className="absolute left-[50%] translate-x-[-50%] border-x-[8px] border-b-[10px] border-transparent border-b-[rgba(3,4,10,.12)]"></div>
              <div className="backdrop-blur-sm flex flex-col mt-[10px] gap-[16px] bg-[rgba(3,4,10,.12)] p-[16px] rounded-[4px] text-[14px]">
                <a id="menu_market_news" className="hover:text-[#13A9FD]" href="https://altex.mn/market_news.php">Зах зээлийн мэдээ</a>
                <a id="menu_crypto_knowledge" className="hover:text-[#13A9FD]" href="https://altex.mn/crypto-basic.php">Крипто мэдлэг</a>
                <a id="menu_projects" className="hover:text-[#13A9FD]" href="https://altex.mn/projects.php">Төслүүд</a>
              </div>
            </div>
          </div>
          <a id="menu_register" href="https://trade.altex.mn/register" target="_blank" className="rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b from-[#13A9FD] to-[#006CFF] leading-[18px] hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]" rel="noreferrer">Бүртгүүлэх</a>
          <a id="menu_login" href="https://trade.altex.mn/signin" target="_blank" className="rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] border-solid border-[1px] border-[#13A9FD] text-[#13A9FD] leading-[18px] hover:bg-[rgba(19,169,253,.16)]" rel="noreferrer">Нэвтрэх</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;