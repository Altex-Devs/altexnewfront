/* eslint-disable jsx-a11y/alt-text */
import { FormattedMessage, useIntl } from 'react-intl';
import React, { useEffect, useState } from 'react';


function HomeComponents() {
  const intl = useIntl();
  const [blurred, setBlurred] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setBlurred(true);
    }, 0);
  }, []);

  const submitPromo = () => {
    const emailInput = document.getElementById("email");
    const promoInput = document.getElementById("promo");

    document.querySelector("#promoSuccess").classList.add("hidden");
    document.querySelector("#promoFail").classList.add("hidden");
    document.querySelector("#promoAlert").classList.add("hidden");

    if (emailInput.value && /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(emailInput.value).toLowerCase()) && promoInput.value) {
      fetch("https://api.apispreadsheets.com/data/vxBygpXBbUpgVQXe/", {
        method: "POST",
        body: JSON.stringify({"data": [{
          "E-mail": emailInput.value,
          "Referral code": promoInput.value
        }]}),
      }).then((res) => {
        if (res.status === 201) {
          document.querySelector("#promoSuccess").classList.remove("hidden");
          emailInput.value = "";
          promoInput.value = "";
        } else {
          document.querySelector("#promoFail").classList.remove("hidden");
        }
      });
    } else {
      document.querySelector("#promoAlert").classList.remove("hidden");

      if (!emailInput.value) {
        emailInput.classList.add("border-[#FF003D]");
        emailInput.classList.remove("border-[#43D24C]");
      }

      if (!promoInput.value) {
        promoInput.classList.add("border-[#FF003D]");
        promoInput.classList.remove("border-[#43D24C]");
      }
    }
  }

  const hidePromoNotif = (e) => {
    e.target.closest(".notif").classList.add("hidden");
  }

  function validatePromoEmail(e) {
    if (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e.target.value).toLowerCase())) {
      e.target.classList.add("border-[#43D24C]");
      e.target.classList.remove("border-[#FF003D]");
    } else {
      e.target.classList.remove("border-[#43D24C]");
      e.target.classList.add("border-[#FF003D]");
    }
  }

  function validatePromoCode(e) {
    if (e.target.value) {
      e.target.classList.add("border-[#43D24C]");
      e.target.classList.remove("border-[#FF003D]");
    } else {
      e.target.classList.remove("border-[#43D24C]");
      e.target.classList.add("border-[#FF003D]");
    }
  }
  


  return (
    <>
      <div id="promoSuccess" className="notif backdrop-blur fixed hidden w-[calc(100%-100px)] box-border font-bold top-[60px] right-[50px] max-w-[512px] bg-[rgba(67,210,76,.5)] px-[24px] py-[30px] rounded-[8px] z-50">
        <div className="relative flex items-center gap-[16px]">
          <img src="/images/correct.svg" />
          <span id="notif_success">Таны мэдээллийг хүлээж авлаа.</span>
          <img className="absolute top-[-14px] right-[-8px] cursor-pointer" onClick={(event) => hidePromoNotif(event)} src="/images/close.svg" />
        </div>
      </div>

      <div id="promoFail" className="notif backdrop-blur fixed hidden w-[calc(100%-100px)] box-border font-bold top-[50px] right-[50px] max-w-[512px] bg-[rgba(255,0,61,.32)] px-[24px] py-[30px] rounded-[8px] z-50">
        <div className="relative flex items-center gap-[16px]">
          <img src="/images/error.svg" />
          <span id="notif_fail">Алдаа гарлаа, та дахин оролдоно уу!</span>
          <img className="absolute top-[-14px] right-[-8px] cursor-pointer" onClick={(event) => hidePromoNotif(event)} src="/images/close.svg" />
        </div>
      </div>

      <div id="promoAlert" className="notif backdrop-blur fixed hidden w-[calc(100%-100px)] box-border font-bold top-[50px] right-[50px] max-w-[512px] bg-[rgba(254,103,3,.32)] px-[24px] py-[30px] rounded-[8px] z-50">
        <div className="relative flex items-center gap-[16px]">
          <img src="/images/warning.svg" />
          <span id="notif_alert">И-мэйл, промо кодоо зөв оруулна уу!</span>
          <img className="absolute top-[-14px] right-[-8px] cursor-pointer" onClick={(event) => hidePromoNotif(event)} src="/images/close.svg" />
        </div>
      </div>

      <div className="relative">
        <div className="absolute w-screen h-[800px] top-[-100px] left-[calc((100vw-100%)/-2)] bg-gradient-radial-left from-[rgba(0,108,255,0.26)] to-[rgba(19,169,253,0)] pointer-events-none touch-none"></div>
        <div className="flex justify-between md:flex-row flex-col-reverse">
          <div className="flex flex-col gap-[56px] max-w-[400px]">
            <div className="flex items-start gap-[24px] h-[64px]">
              <div className="relative">
                <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-[#13A9FD] to-[#0073C6] rounded-full z-10 top-[3px] left-[3px]"></div>
                <img className={`relative min-w-[64px] z-20 ${blurred ? "backdropp" : ""} rounded-[8px]`} src="/images/adv-1.svg" />
              </div>
              <div className="flex flex-col">
                <div id="feature_1_head" className="text-[#13A9FD] font-light mt-[-2px] mb-[8px]">
                  <FormattedMessage id="mobile_menu_trade" />
                </div>
                <div id="feature_1_desc" className="text-[#ffffff] font-light mb-[-2px] text-[14px] leading-[18px]">
                  <FormattedMessage id="feature_1_desc"/>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[24px] h-[64px]">
              <div className="relative">
                <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-[#13A9FD] to-[#0073C6] rounded-full z-10 top-[3px] left-[3px]"></div>
                <img className={`relative min-w-[64px] z-20 ${blurred ? "backdropp" : ""} rounded-[8px]`} src="/images/adv-2.svg" />
              </div>
              <div className="flex flex-col">
                <div id="feature_2_head" className="text-[#13A9FD] font-light mt-[-2px] mb-[8px]">
                  <FormattedMessage id='feature_2_head' />
                </div>
                <div id="feature_2_desc" className="text-[#ffffff] font-light mb-[-2px] text-[14px] leading-[18px]">
                  <FormattedMessage id="feature_2_desc"/>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[24px] h-[64px]">
              <div className="relative">
                <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-[#13A9FD] to-[#0073C6] rounded-full z-10 top-[3px] left-[3px]"></div>
                <img className={`relative min-w-[64px] z-20 ${blurred ? "backdropp" : ""} rounded-[8px]`} src="/images/adv-3.svg" />
              </div>
              <div className="flex flex-col">
                <div id="feature_3_head" className="text-[#13A9FD] font-light mt-[-2px] mb-[8px]">
                  <FormattedMessage id='feature_3_head' />
                </div>
                <div id="feature_3_desc" className="text-[#ffffff] font-light mb-[-2px] text-[14px] leading-[18px]">
                  <FormattedMessage id='feature_3_desc'/>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-[24px] h-[64px]">
              <div className="relative">
                <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-[#13A9FD] to-[#0073C6] rounded-full z-10 top-[3px] left-[3px]"></div>
                <img className={`relative min-w-[64px] z-20 ${blurred ? "backdropp" : ""} rounded-[8px]`} src="/images/adv-4.svg" />
              </div>
              <div className="flex flex-col">
                <div id="feature_4_head" className="text-[#13A9FD] font-light mt-[-2px] mb-[8px]">
                  <FormattedMessage id='feature_4_head'/>
                </div>
                <div id="feature_4_desc" className="text-[#ffffff] font-light mb-[-2px] text-[14px] leading-[18px]" dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "feature_4_desc"}) }} />
              </div>
            </div>
            <div className="flex items-start gap-[24px] h-[64px]">
              <div className="relative">
                <div className="absolute w-[40px] h-[40px] bg-gradient-to-b from-[#13A9FD] to-[#0073C6] rounded-full z-10 top-[3px] left-[3px]"></div>
                <img className={`relative min-w-[64px] z-20 ${blurred ? "backdropp" : ""} rounded-[8px]`} src="/images/adv-5.svg" />
              </div>
              <div className="flex flex-col">
                <div id="feature_5_head" className="text-[#13A9FD] font-light mt-[-2px] mb-[8px]">
                  <FormattedMessage id='feature_5_head' />
                </div>
                <div id="feature_5_desc" className="text-[#ffffff] font-light mb-[-2px] text-[14px] leading-[18px]">
                  <FormattedMessage id='feature_5_desc' />
                </div>
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
          <iframe className="w-full aspect-video" src="https://www.youtube.com/embed/6_XMPt_1rDg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div className="w-full sm:basis-1/2">
          <div id="referal_code_head" className="text-[#13A9FD] text-[24px] mb-[16px]">
            <FormattedMessage id='referal_code_head'/>
          </div>
          <div className="flex flex-row items-center mb-[24px] gap-[24px]">
            <div className="basis-[75%]">
              <div id="referal_code_desc" className="text-[#E6E7EB] text-[14px] font-extralight">
                <FormattedMessage id='referal_code_desc' />
              </div>
            </div>
            <div className="basis-[25%] max-h-[42px] flex items-center">
              <img src="/images/gift.svg" />
            </div>
          </div>
          <div className="lg:flex xl:flex flex-row gap-[24px] items-end sm:flex-row justify-items-stretch ">
            <div className="w-full sm:basis-[75%]">
              <div id="referal_code_email" className="text-[#E6E7EB] mb-[8px]">
                <FormattedMessage id='referal_code_email'/>
              </div>
              <input type="text" id="email" onChange={(event) => validatePromoEmail(event)} className="rounded-[4px] border-solid border-[.5px]  focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[16px] p-[10px] px-[16px] outline-none font-extralight" autoComplete="off"/>
              <div id="referal_code_promo" className="text-[#E6E7EB] mb-[8px]">
                <FormattedMessage id='referal_code_promo'/>
              </div>
              <input type="text" id="promo" onChange={(event) => validatePromoCode(event)} className="rounded-[4px] border-solid border-[.5px] mb-[24px] lg:mb-[0px] xl:mb-[0px]  focus-visible:border-[#006CFF] invalid:border-[#FF003D] bg-[rgba(0,0,0,0)] w-full h-[48px] p-[10px] px-[16px] outline-none font-extralight" />
            </div>
            <div className="w-full sm:basis-[25%] flex justify-center">
              <button onClick={submitPromo} id="referal_code_send" className="rounded-[4px] w-auto md:w-full font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b leading-[18px] from-[#13A9FD] to-[#006CFF] sm:w-auto hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]">
                <FormattedMessage id='referal_code_send' />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-[40px] md:gap-0 sm:flex-row items-center justify-items-stretch px-[24px] py-[40px] sm:p-[35px] sm:pl-[83px] rounded-[8px] bg-gradient-to-b from-[rgba(0,108,255,.4)] to-[rgba(27,51,123,.4)] overflow-hidden">
        <div className="basis-[45%]">
          <div id="app_head" className="text-[#13A9FD] text-[24px] mb-[24px] leading-[1.55]">
            <FormattedMessage id='app_head'/><br/> 
            <FormattedMessage id='app_heading'/>
          </div>
          <div id="app_desc" className="text-[#fff] font-extralight mb-[40px]">
            <FormattedMessage id='app_desc' />
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-[14px] md:gap-[24px]">
            <img className="object-cover w-[133px]" src="/images/android.svg" />
            <img className="object-cover w-[133px]" src="/images/ios.svg" />
          </div>
        </div>
        <div style={{backgroundImage: 'url("/images/Group%207634.png")'}} className="basis-auto md:basis-[55%] w-screen h-[300px] bg-cover bg-center"></div>
      </div>

      <div className="pt-[160px] relative mb-[40px] xl:mb-[80px]">
        <div className="absolute left-[-15px]  lg:left-[100px] xl:left-[100px] xl:right-[112px] lg:right-[112px] w-screen h-[800px] top-[-80px]  bg-gradient-radial-bottom from-[rgba(0,108,255,0.26)] to-[rgba(19,169,253,0)] pointer-events-none touch-none"></div>
        <div id="start_trade_head" className="text-[#13A9FD] text-[24px] mb-[24px] lg:mb-[40px] font-medium">
       
        <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "start_trade_head"}) }} />
        
        </div>
        <div id="start_trade_desc" className="font-light mb-[24px] lg:hidden" >
        </div>
        <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[70px]">
          <div className="flex flex-row flex-wrap gap-y-[24px] gap-x-[50px]">
            <div className="relative w-[130px] h-[160px]">
              <div className="absolute lg:left-[-10px] top-[30px] lg:top-[34px] text-[100px] opacity-70 bg-clip-text text-transparent font-black leading-[72px] bg-gradient-to-b from-[rgba(19,169,253,1)] via-[rgba(0,108,255,0.64)] to-[rgba(5,15,54,0)]">1</div>
              <img className="absolute top-0 left-[10px]" src="/images/Path 5936.svg" />
              <div id="start_trade_1" className="absolute w-full left-[50%] translate-x-[-60%] top-[40px] text-center font-light">
              <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "start_trade_1"}) }} />
              </div>
            </div>
            <div className="relative w-[130px] h-[160px]">
              <div className="absolute lg:left-[-10px] top-[30px] lg:top-[34px] text-[100px] opacity-70 bg-clip-text text-transparent font-black leading-[72px] bg-gradient-to-b from-[rgba(19,169,253,1)] via-[rgba(0,108,255,0.64)] to-[rgba(5,15,54,0)]">2</div>
              <img className="absolute top-0 left-[10px]" src="/images/Path 5936.svg" />
              <div id="start_trade_2" className="absolute w-full left-[50%] translate-x-[-60%] top-[40px] text-center font-light">
              <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "start_trade_2"}) }} />
              </div>
            </div>
            <div className="relative w-[130px] h-[160px]">
              <div className="absolute lg:left-[-10px] top-[30px] lg:top-[34px] text-[100px] opacity-70 bg-clip-text text-transparent font-black leading-[72px] bg-gradient-to-b from-[rgba(19,169,253,1)] via-[rgba(0,108,255,0.64)] to-[rgba(5,15,54,0)]">3</div>
              <img className="absolute top-0 left-[10px]" src="/images/Path 5936.svg" />
              <div id="start_trade_3" className="absolute w-full left-[50%] translate-x-[-60%] top-[40px] text-center font-light">
              <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "start_trade_3"}) }} />
              </div>
            </div>
            <div className="relative w-[130px] h-[160px]">
              <div className="absolute lg:left-[-10px] top-[30px] lg:top-[34px] text-[100px] opacity-70 bg-clip-text text-transparent font-black leading-[72px] bg-gradient-to-b from-[rgba(19,169,253,1)] via-[rgba(0,108,255,0.64)] to-[rgba(5,15,54,0)]">4</div>
              <img className="absolute top-0 left-[10px]" src="/images/Path 5936.svg" />
              <div id="start_trade_4" className="absolute w-full left-[50%] translate-x-[-60%] top-[40px] text-center font-light">
              <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "start_trade_4"}) }} />
              </div>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <div id="start_trade_desc_bottom" className="font-light max-w-[210px] mb-[24px] hidden lg:block">
              <FormattedMessage id='start_trade_desc_bottom'/>
            </div>
            <a href="https://trade.altex.mn/register" target="_blank" id="start_trade_button" className="inline-block rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b from-[#13A9FD] to-[#006CFF] leading-[18px] hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]" rel="noreferrer">
              <FormattedMessage id='start_trade_button'/>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeComponents;