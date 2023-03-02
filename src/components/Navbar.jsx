const Navbar = () => {
  return (
    <>
      <div className="flex items-center bg-[#0A1540] h-[48px] w-full absolute left-0 top-0 text-[#696F86] text-[14px]">
        <div className="container mx-auto text-right px-[16px] max-w-[1232px] overflow-auto font-light text-[#E6E7EB]">
          <span id="translate-lang" className="px-[24px] cursor-pointer border-x-[1px] border-[#3B4466]" onclick="change_lang()">Eng</span>
          <a href="https://altex.mn/corporate.php" id="industry-select" className="ml-[24px]">Байгууллага</a>
        </div>
      </div>

      <div className="flex items-center justify-between pt-[40px] relative z-10">
        <div className="flex items-center">
          <div className="py-[10px]">
            <img src="/images/header-logo.svg" />
          </div>
        </div>
        <div className="lg:hidden">
          <button className="text-white rounded-full p-2" onClick="showMenu()">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
              <path d="M3 6H21M3 12H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div id="main_menu" className="items-center gap-[40px] text-[16px] hidden lg:flex">
          <a id="menu_trade" href="https://trade.altex.mn/">Арилжаа</a>
          <div className="relative cursor-pointer" onclick="toggleMenu(event)">
            <span id="menu_about_us" className="menu">Бидний тухай</span>
            <img className="icon inline-block relative ml-[5px]" src="/images/menu_arrow.svg" />
            <div className="expander absolute w-max max-h-0 left-[50%] translate-x-[-50%] transition-[max-height] duration-700 overflow-hidden">
              <div className="absolute left-[50%] translate-x-[-50%] border-x-[8px] border-b-[10px] border-transparent border-b-[rgba(3,4,10,.12)]"></div>
              <div className="backdrop-blur-sm flex flex-col mt-[10px] gap-[16px] bg-[rgba(3,4,10,.12)] p-[16px] rounded-[4px] text-[14px]">
                <a id="menu_about_exchange" className="hover:text-[#13A9FD]" href="https://altex.mn/second.html">Биржийн тухай</a>
                <a id="menu_team" className="hover:text-[#13A9FD]" href="https://altex.mn/our_team.html">Баг хамт олон</a>
              </div>
            </div>
          </div>
          <div className="relative cursor-pointer" onclick="toggleMenu(event)">
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
          <a id="menu_register" href="https://trade.altex.mn/register" target="_blank" className="rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b from-[#13A9FD] to-[#006CFF] leading-[18px] hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]">Бүртгүүлэх</a>
          <a id="menu_login" href="https://trade.altex.mn/signin" target="_blank" className="rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] border-solid border-[1px] border-[#13A9FD] text-[#13A9FD] leading-[18px] hover:bg-[rgba(19,169,253,.16)]">Нэвтрэх</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;