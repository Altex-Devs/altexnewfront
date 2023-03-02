function App() {
  return (
    <>
      <div id="promoSuccess" className="notif backdrop-blur fixed hidden w-[calc(100%-100px)] box-border font-bold top-[50px] right-[50px] max-w-[512px] bg-[rgba(67,210,76,.5)] px-[24px] py-[30px] rounded-[8px] z-30">
        <div className="relative flex items-center gap-[16px]">
          <img src="/images/correct.svg" />
          <span id="notif_success">Таны мэдээллийг хүлээж авлаа.</span>
          <img className="absolute top-[-14px] right-[-8px] cursor-pointer" onclick="hidePromoNotif(event)" src="/images/close.svg" />
        </div>
      </div>

      <div id="promoFail" className="notif backdrop-blur fixed hidden w-[calc(100%-100px)] box-border font-bold top-[50px] right-[50px] max-w-[512px] bg-[rgba(255,0,61,.32)] px-[24px] py-[30px] rounded-[8px] z-30">
        <div className="relative flex items-center gap-[16px]">
          <img src="/images/error.svg" />
          <span id="notif_fail">Алдаа гарлаа, та дахин оролдоно уу!</span>
          <img className="absolute top-[-14px] right-[-8px] cursor-pointer" onclick="hidePromoNotif(event)" src="/images/close.svg" />
        </div>
      </div>

      <div id="promoAlert" className="notif backdrop-blur fixed hidden w-[calc(100%-100px)] box-border font-bold top-[50px] right-[50px] max-w-[512px] bg-[rgba(254,103,3,.32)] px-[24px] py-[30px] rounded-[8px] z-30">
        <div className="relative flex items-center gap-[16px]">
          <img src="/images/warning.svg" />
          <span id="notif_alert">И-мэйл, промо кодоо зөв оруулна уу!</span>
          <img className="absolute top-[-14px] right-[-8px] cursor-pointer" onclick="hidePromoNotif(event)" src="/images/close.svg" />
        </div>
      </div>

      <div id="newsletter" className="fixed hidden flex justify-center items-center backdrop-blur-sm top-0 l-0 w-full h-screen z-20">
        <div className="relative w-[600px] max-w-[100%] bg-[#0E1A43] px-[25px] py-[50px] sm:p-[100px] sm:py-[70px] rounded-[8px] m-[15px]">
          <div id="newsletter_title" className="text-[#13A9FD] text-[24px] font-medium mb-[20px]">Цахим сонинд бүртгүүлэх</div>
          <p id="newsletter_desc" className="font-extralight mb-[20px]">Та манайд бүртгүүлж хамгийн сүүлийн үеийн мэдээллийг тогтмол аваарай.</p>
          <input type="email" id="newsletteremail" className="rounded-[4px] w-full border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[16px] p-[10px] px-[16px] outline-none font-extralight" placeholder="И-мэйл" onchange="validateNewsletterEmail(event)" />
          <button id="newsletter_send" onclick="submitNewsletter()" className="rounded-[4px] w-full font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b leading-[18px] from-[#13A9FD] to-[#006CFF] hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]">Илгээх</button>
          <img className="absolute top-[16px] right-[16px] cursor-pointer" onclick="hideNewsletter()" src="/images/close.svg" />
        </div>
      </div>

      <div id="menu" className="fixed top-0 l-0 w-full h-screen bg-[#050F36] z-20 hidden lg:hidden p-[25px] py-[92px]">
        <div className="flex justify-between items-center mb-[40px]">
          <img src="/images/header-logo.svg" />
          <svg id="SVGDoc" onClick="hideMenu()" width="16" height="16" version="1.1" viewBox="0 0 16 16"><defs></defs><desc>Generated with Avocode.</desc><g><g><title>Icon ionic-md-close</title><path d="M16,1.59989v0l-1.59989,-1.59989v0l-6.40011,6.40011v0l-6.40011,-6.40011v0l-1.59989,1.59989v0l6.40011,6.40011v0l-6.40011,6.40011v0l1.59989,1.59989v0l6.40011,-6.40011v0l6.40011,6.40011v0l1.59989,-1.59989v0l-6.40011,-6.40011v0z" fill="#ffffff" fillOpacity="1"></path></g></g></svg>
        </div>
        <div id="mobile_menu" className="flex flex-col gap-[15px] mb-[40px]">
          <a id="mobile_menu_trade" className="pb-[10px]" href="https://trade.altex.mn/">Арилжаа</a>
          <div>
            <span id="mobile_menu_about_us" className="mobile_menu" onclick="toggleMobileMenu(event)">Бидний тухай</span>
            <img className="inline-block relative left-[5px] icon" src="/images/menu_arrow.svg" />
            <div className="expander flex-col max-h-0 gap-[10px] pt-[10px] overflow-hidden transition-[max-height] duration-700 pl-[15px]">
              <a id="mobile_menu_about_exchange" className="block" href="https://altex.mn/second.html">Биржийн тухай</a>
              <a id="mobile_menu_team" className="block" href="https://altex.mn/our_team.html">Баг хамт олон</a>
            </div>
          </div>
          <div>
            <span id="mobile_menu_academy" className="mobile_menu" onclick="toggleMobileMenu(event)">Академи</span>
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

      <div className="bg-[#050F36] w-full">
        <div className="container mx-auto pt-[48px] px-[16px] max-w-[1232px]">
          <div className="flex items-center bg-[#0A1540] h-[48px] w-full absolute left-0 top-0 text-[#696F86] text-[14px]">
            <div className="container mx-auto text-right px-[16px] max-w-[1232px] overflow-auto font-light text-[#E6E7EB]">
              <span id="translate-lang" className="px-[24px] cursor-pointer border-x-[1px] border-[#3B4466]" onclick="change_lang()">Eng</span>
              <a href="https://altex.mn/corporate.php" id="industry-select" className="ml-[24px]">Байгууллага</a>
            </div>
          </div>

          <div className="absolute w-screen left-0 h-[1200px] bg-gradient-radial md:bg-gradient-radial-md from-[rgba(0,108,255,0.36)] to-[rgba(19,169,253,0)] pointer-events-none touch-none"></div>

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

          <div className="md:relative mb-[80px] md:mb-[28px]">
            <div style={{'background-image': 'url("/images/hero-pic.svg")'}} className="absolute w-screen md:w-[1151px] h-[620px] top-0 left-0 md:left-auto md:right-[-450px] lg:right-[-300px] bg-[length:600px] md:bg-auto bg-center bg-no-repeat pointer-events-none"></div>
            <div className="flex items-center md:h-[600px] relative mt-[400px] md:mt-auto">
              <div className="md:w-[60%] drop-shadow">
                <div id="jumbo_head" className="font-bold text-[28px] md:text-[40px] mb-[24px] leading-[3.25rem]">Дижитал санхүүг хялбараар</div>
                <div id="jumbo_desc" className="text text-[24px] mb-[40px] font-light">Дижитал хөрөнгө оруулалт хийх хамгийн найдвартай платформыг санал болгож байна.</div>
                <a href="https://trade.altex.mn/" target="_blank" id="jumbo_button" className="rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b from-[#13A9FD] to-[#006CFF] leading-[18px] hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]">Арилжаанд оролцох</a>
              </div>
            </div>
          </div>

          <div id="market_trend" className="text-[24px] text-[#13A9FD] font-medium mb-[40px]">Зах зээлийн тренд</div>
          <div className="overflow-hidden relative mb-[160px]">
            <div id="prices" className="flex flex-nowrap gap-[24px] duration-1000 scroll-smooth snap-x overflow-x-scroll">
              <div className="animate-spin rounded-full border-4 border-[#07184b] border-t-[#006CFF] w-[24px] h-[24px] mx-auto"></div>
            </div>
            <div className="absolute top-0 w-[100px] h-[180px] bg-gradient-to-r from-[rgba(5,15,54,1)] to-[rgba(5,15,54,0)] flex items-center cursor-pointer" onclick="scrollPrices('right')">
              <img className="rotate-180" src="/images/coin-arrow.svg" />
            </div>
            <div className="absolute top-0 right-0 w-[100px] h-[180px] bg-gradient-to-l from-[rgba(5,15,54,1)] to-[rgba(5,15,54,0)] flex items-center cursor-pointer" onclick="scrollPrices('left')">
              <img className="absolute right-0" src="/images/coin-arrow.svg" />
            </div>
          </div>

          <div className="relative">
            <div className="absolute w-screen h-[800px] top-[-100px] left-[calc((100vw-100%)/-2)] bg-gradient-radial-left from-[rgba(0,108,255,0.26)] to-[rgba(19,169,253,0)] pointer-events-none touch-none"></div>
            <div className="flex justify-between flex-col sm:flex-row flex-col-reverse">
              <div className="flex flex-col gap-[56px] max-w-[400px]">
                <div className="flex items-start gap-[24px] h-[64px]">
                  <div className="relative">
                    <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-[#13A9FD] to-[#0073C6] rounded-full z-10 top-[3px] left-[3px]"></div>
                    <img className="relative min-w-[64px] z-20 backdrop-blur-lg rounded-[8px]" src="/images/adv-1.svg" />
                  </div>
                  <div className="flex flex-col">
                    <div id="feature_1_head" className="text-[#13A9FD] font-light mt-[-2px] mb-[8px]">Нэгдсэн хөрвөх сан</div>
                    <div id="feature_1_desc" className="text-[#ffffff] font-light mb-[-2px] text-[14px] leading-[18px]">Санхүүгийн байгууллагууд, маркет мэйкрүүдийн оролцоотой нэгдсэн хөрвөх сан</div>
                  </div>
                </div>
                <div className="flex items-start gap-[24px] h-[64px]">
                  <div className="relative">
                    <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-[#13A9FD] to-[#0073C6] rounded-full z-10 top-[3px] left-[3px]"></div>
                    <img className="relative min-w-[64px] z-20 backdrop-blur-lg rounded-[8px]" src="/images/adv-2.svg" />
                  </div>
                  <div className="flex flex-col">
                    <div id="feature_2_head" className="text-[#13A9FD] font-light mt-[-2px] mb-[8px]">Байгууллагын үйлчилгээ</div>
                    <div id="feature_2_desc" className="text-[#ffffff] font-light mb-[-2px] text-[14px] leading-[18px]">Спот арилжаа, Брокер (OTC), Хөрөнгө оруулалтын багцийн үйлчилгээ</div>
                  </div>
                </div>
                <div className="flex items-start gap-[24px] h-[64px]">
                  <div className="relative">
                    <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-[#13A9FD] to-[#0073C6] rounded-full z-10 top-[3px] left-[3px]"></div>
                    <img className="relative min-w-[64px] z-20 backdrop-blur-lg rounded-[8px]" src="/images/adv-3.svg" />
                  </div>
                  <div className="flex flex-col">
                    <div id="feature_3_head" className="text-[#13A9FD] font-light mt-[-2px] mb-[8px]">Зах зээлийн өрсөлдөхүйц үнэ</div>
                    <div id="feature_3_desc" className="text-[#ffffff] font-light mb-[-2px] text-[14px] leading-[18px]">Дижитал хөрөнгийг зах зээлд хамгийн өрсөлдөхүйц үнээр худалдаж авах, зарах боломж</div>
                  </div>
                </div>
                <div className="flex items-start gap-[24px] h-[64px]">
                  <div className="relative">
                    <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-[#13A9FD] to-[#0073C6] rounded-full z-10 top-[3px] left-[3px]"></div>
                    <img className="relative min-w-[64px] z-20 backdrop-blur-lg rounded-[8px]" src="/images/adv-4.svg" />
                  </div>
                  <div className="flex flex-col">
                    <div id="feature_4_head" className="text-[#13A9FD] font-light mt-[-2px] mb-[8px]">Зарлагын лимит</div>
                    <div id="feature_4_desc" className="text-[#ffffff] font-light mb-[-2px] text-[14px] leading-[18px]">Крипто болон фиат валютын зарлага $7,000 - $100,000</div>
                  </div>
                </div>
                <div className="flex items-start gap-[24px] h-[64px]">
                  <div className="relative">
                    <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-[#13A9FD] to-[#0073C6] rounded-full z-10 top-[3px] left-[3px]"></div>
                    <img className="relative min-w-[64px] z-20 backdrop-blur-lg rounded-[8px]" src="/images/adv-5.svg" />
                  </div>
                  <div className="flex flex-col">
                    <div id="feature_5_head" className="text-[#13A9FD] font-light mt-[-2px] mb-[8px]">Хямд сүлжээний шимтгэл</div>
                    <div id="feature_5_desc" className="text-[#ffffff] font-light mb-[-2px] text-[14px] leading-[18px]">Криптовалютын гүйлгээг хамгийн хямдаар хийх боломж</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <img className="w-[800px] relative rigth-auto sm:right-[-50px]" src="/images/Group 7632.png" />
              </div>
            </div>
          </div>

          <div className="flex items-center flex-col sm:flex-row gap-[40px] mt-[80px] md:mt-[240px] mb-[64px] md:mb-[160px]">
            <div className="w-full sm:basis-1/2">
              <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/6_XMPt_1rDg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <div className="w-full sm:basis-1/2">
              <div id="referal_code_head" className="text-[#13A9FD] text-[24px] mb-[16px]">Реферал код оруулах</div>
              <div className="flex flex-row items-center mb-[24px] gap-[24px]">
                <div className="basis-[75%]">
                  <div id="referal_code_desc" className="text-[#E6E7EB] text-[14px] font-extralight">Та бүртгэлээ баталгаажуулсан имэйл хаяг, промо кодоо илгээгээд урамшуулалд хамрагдаарай.</div>
                </div>
                <div className="basis-[25%] max-h-[42px] flex items-center">
                  <img src="/images/gift.svg" />
                </div>
              </div>
              <div className="flex flex-row gap-[24px] items-end flex-col sm:flex-row justify-items-stretch">
                <div className="w-full sm:basis-[75%]">
                  <div id="referal_code_email" className="text-[#E6E7EB] mb-[8px]">Бүртгэлтэй и-мэйл</div>
                  <input type="text" id="email" onchange="validatePromoEmail(event)" className="rounded-[4px] w-full border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[16px] p-[10px] px-[16px] outline-none font-extralight" />
                  <div id="referal_code_promo" className="text-[#E6E7EB] mb-[8px]">Промо код</div>
                  <input type="text" id="promo" onchange="validatePromoCode(event)" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] invalid:border-[#FF003D] bg-[rgba(0,0,0,0)] w-full h-[48px] p-[10px] px-[16px] outline-none font-extralight" />
                </div>
                <div className="w-full sm:basis-[25%] flex justify-center">
                  <button onclick="submitPromo()" id="referal_code_send" className="rounded-[4px] w-auto md:w-full font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b leading-[18px] from-[#13A9FD] to-[#006CFF] sm:w-auto hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]">Илгээх</button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[40px] md:gap-0 sm:flex-row items-center justify-items-stretch px-[24px] py-[40px] sm:p-[35px] sm:pl-[83px] rounded-[8px] bg-gradient-to-b from-[rgba(0,108,255,.4)] to-[rgba(27,51,123,.4)] overflow-hidden">
            <div className="basis-[45%]">
              <div id="app_head" className="text-[#13A9FD] text-[24px] mb-[24px] leading-[1.55]">
                Гар утасны аппликэйшн<br />
                <span className="font-bold">ТУН УДАХГҮЙ</span>
              </div>
              <div id="app_desc" className="text-[#fff] font-extralight mb-[40px]">Арилжаанд оролцох, хэтэвчээ удирдах хамгийн хялбар замыг санал болгож байна.</div>
              <div className="flex flex-wrap justify-center sm:justify-start gap-[14px] md:gap-[24px]">
                <img className="object-cover w-[133px]" src="/images/android.svg" />
                <img className="object-cover w-[133px]" src="/images/ios.svg" />
              </div>
            </div>
            <div style={{'background-image': 'url("/images/Group%207634.png")'}} className="basis-auto md:basis-[55%] w-screen h-[300px] bg-cover bg-center"></div>
          </div>

          <div className="pt-[160px] relative mb-[240px]">
            <div className="absolute top-0 w-[800px] h-[800px] top-[-30px] right-[-90px] bg-gradient-radial-bottom from-[rgba(0,108,255,0.26)] to-[rgba(19,169,253,0)] pointer-events-none touch-none"></div>
            <div id="start_trade_head" className="text-[#13A9FD] text-[24px] mb-[24px] lg:mb-[40px] font-medium">
              Арилжаагаа эхлүүлэх
              <span className="whitespace-nowrap">4 алхам</span>
            </div>
            <div id="start_trade_desc" className="font-light mb-[24px] lg:hidden">Та бүртгэлээ үүсгээд арилжаагаа эхлүүлээрэй!</div>
            <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[70px]">
              <div className="flex flex-row flex-wrap gap-y-[24px] gap-x-[50px]">
                <div className="relative w-[130px] h-[160px]">
                  <div className="absolute lg:left-[-10px] top-[30px] lg:top-[34px] text-[100px] opacity-70 bg-clip-text text-transparent font-black leading-[72px] bg-gradient-to-b from-[rgba(19,169,253,1)] via-[rgba(0,108,255,0.64)] to-[rgba(5,15,54,0)]">1</div>
                  <img className="absolute top-0 left-[10px]" src="/images/Path 5936.svg" />
                  <div id="start_trade_1" className="absolute w-full left-[50%] translate-x-[-60%] top-[40px] text-center font-light">Бүртгэл<br />үүсгэх</div>
                </div>
                <div className="relative w-[130px] h-[160px]">
                  <div className="absolute lg:left-[-10px] top-[30px] lg:top-[34px] text-[100px] opacity-70 bg-clip-text text-transparent font-black leading-[72px] bg-gradient-to-b from-[rgba(19,169,253,1)] via-[rgba(0,108,255,0.64)] to-[rgba(5,15,54,0)]">2</div>
                  <img className="absolute top-0 left-[10px]" src="/images/Path 5936.svg" />
                  <div id="start_trade_2" className="absolute w-full left-[50%] translate-x-[-60%] top-[40px] text-center font-light">Бүртгэл<br />баталгаажуулах</div>
                </div>
                <div className="relative w-[130px] h-[160px]">
                  <div className="absolute lg:left-[-10px] top-[30px] lg:top-[34px] text-[100px] opacity-70 bg-clip-text text-transparent font-black leading-[72px] bg-gradient-to-b from-[rgba(19,169,253,1)] via-[rgba(0,108,255,0.64)] to-[rgba(5,15,54,0)]">3</div>
                  <img className="absolute top-0 left-[10px]" src="/images/Path 5936.svg" />
                  <div id="start_trade_3" className="absolute w-full left-[50%] translate-x-[-60%] top-[40px] text-center font-light">Дансаа<br />цэнэглэх</div>
                </div>
                <div className="relative w-[130px] h-[160px]">
                  <div className="absolute lg:left-[-10px] top-[30px] lg:top-[34px] text-[100px] opacity-70 bg-clip-text text-transparent font-black leading-[72px] bg-gradient-to-b from-[rgba(19,169,253,1)] via-[rgba(0,108,255,0.64)] to-[rgba(5,15,54,0)]">4</div>
                  <img className="absolute top-0 left-[10px]" src="/images/Path 5936.svg" />
                  <div id="start_trade_4" className="absolute w-full left-[50%] translate-x-[-60%] top-[40px] text-center font-light">Арилжаа<br />хийх</div>
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div id="start_trade_desc_bottom" className="font-light max-w-[210px] mb-[24px] hidden lg:block">Та бүртгэлээ үүсгээд арилжаагаа эхлүүлээрэй!</div>
                <a href="https://trade.altex.mn/register" target="_blank" id="start_trade_button" className="inline-block rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b from-[#13A9FD] to-[#006CFF] leading-[18px] hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]">Бүртгүүлэх</a>
              </div>
            </div>
          </div>

          <div className="flex flex-row flex-wrap mb-[50px]">
            <div className="basis-full min-[310px]:basis-1/2 md:basis-1/3 lg:basis-1/5 mb-[30px]">
              <div id="footer_about_us" className="text-[rgba(19,169,253,1)] mb-[32px]">Бидний тухай</div>
              <a id="footer_about_exchange" className="block mb-[16px]" href="https://altex.mn/second.html" target="_blank">Биржийн тухай</a>
              <a id="footer_team" className="block mb-[16px]" href="https://altex.mn/our_team.html" target="_blank">Баг, хамт олон</a>
            </div>
            <div className="basis-full min-[310px]:basis-1/2 md:basis-1/3 lg:basis-1/5 mb-[30px]">
              <div id="footer_academy" className="text-[rgba(19,169,253,1)] mb-[32px]">Академи</div>
              <a id="footer_market_news" href="https://altex.mn/index.php#:~:text=%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8-,%D0%97%D0%B0%D1%85%20%D0%B7%D1%8D%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD%20%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D,-%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%BE%20%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3" target="_blank" className="block mb-[16px]">Зах зээлийн мэдээ</a>
              <a id="footer_crypto_knowledge" href="https://altex.mn/crypto-basic.php" target="_blank" className="block mb-[16px]">Крипто мэдлэг</a>
              <a id="footer_projects" href="https://altex.mn/projects.php" target="_blank" className="block mb-[16px]">Төслүүд</a>
            </div>
            <div className="basis-full min-[310px]:basis-1/2 md:basis-1/3 lg:basis-1/5 mb-[30px]">
              <div id="footer_service" className="text-[rgba(19,169,253,1)] mb-[32px]">Үйлчилгээ</div>
              <a id="footer_terms_of_service" href="https://altex.mn/terms_service.html" target="_blank" className="block mb-[16px]">Үйлчилгээний нөхцөл</a>
              <a id="footer_privacy_policy" href="https://altex.mn/privacy_policy.html" target="_blank" className="block mb-[16px]">Нууцлалын бодлого</a>
              <a id="footer_fee" href="https://altex.mn/fees.html" target="_blank" className="block mb-[16px]">Шимтгэл</a>
            </div>
            <div className="basis-full min-[310px]:basis-1/2 md:basis-1/3 lg:basis-1/5 mb-[30px]">
              <div id="footer_help" className="text-[rgba(19,169,253,1)] mb-[32px]">Тусламж</div>
              <a id="footer_faq" href="https://altex.mn/faq.html" target="_blank" className="block mb-[16px]">Түгээмэл асуултууд</a>
              <a id="footer_feedback" href="https://altex.mn/feedback.html" target="_blank" className="block mb-[16px]">Санал хүсэлт</a>
            </div>
            <div className="basis-full min-[310px]:basis-full md:basis-2/3 lg:basis-1/5 mb-[30px]">
              <div id="footer_contact" className="text-[rgba(19,169,253,1)] mb-[32px]">Холбоо барих</div>
              <div className="mb-[16px] flex">
                <div className="mr-[16px] flex-none w-[20px] flex place-content-center">
                  <img className="object-center" src="/images/Icon metro-phone.svg" />
                </div>
                <span>7505 7775</span>
              </div>
              <div className="mb-[16px] flex">
                <div className="mr-[16px] flex-none w-[20px] flex place-content-center">
                  <img src="/images/mail.svg" />
                </div>
                <span>contact@altex.mn</span>
              </div>
              <div className="mb-[16px] flex">
                <div className="mr-[16px] flex-none w-[20px]">
                  <img src="/images/Icon material-location-on.svg" />
                </div>
                <span id="footer_address">Сүхбаатар дүүрэг 1-р хороо, Жамъян Гүний гудамж-5, Хаан Даатгал компанийн байр</span>
              </div>
            </div>
          </div>

          <div className="border-solid border-t-[1px] border-[#006cff] py-[40px]">
            <div className="mb-[20px]">
              <div className="flex justify-between items-center mb-[40px] md:mb-[24px]">
                <div className="">
                  <img src="/images/altex-footer-logo.svg" />
                </div>
                <div className="relative w-[100px]">
                  <img className="sm:absolute object-cover" src="/images/iso.svg" />
                </div>
              </div>
              <div className="flex justify-between sm:justify-start sm:flex-wrap sm:gap-[30px]">
                <a href="https://www.facebook.com/altex.mn" target="_blank">
                  <img src="/images/fb.svg" />
                </a>
                <a href="https://twitter.com/altex_mn" target="_blank">
                  <img src="/images/tw.svg" />
                </a>
                <a href="https://www.instagram.com/accounts/login/?next=/altex.mn/" target="_blank">
                  <img src="/images/ins.svg" />
                </a>
                <a href="https://t.me/altexmn" target="_blank">
                  <img src="/images/tel.svg" />
                </a>
                <a href="https://www.youtube.com/channel/UC0cP-OEOj_b2LJaSW8vxjHA" target="_blank">
                  <img src="/images/tube.svg" />
                </a>
                <a href="https://www.linkedin.com/company/altex-digital-exchange/" target="_blank">
                  <img src="/images/linkedin.svg" />
                </a>
              </div>
            </div>
          </div>

          <div className="absolute w-full left-0 h-[48px] bg-[#0A1540] flex items-center">
            <div id="bottom" className="text-[#CDCDCE] leading-1 inline-block text-center w-full text-[12px]">Зохиогчийн эрх © 2023 Бүх эрх хуулиар хамгаалагдсан</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
