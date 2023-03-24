/* eslint-disable jsx-a11y/alt-text */
const Footer = () => {
  return (
    <>
      <div className="flex flex-row flex-wrap mb-[50px]">
        <div className="basis-full min-[310px]:basis-1/2 md:basis-1/3 lg:basis-1/5 mb-[30px]">
          <div id="footer_about_us" className="text-[rgba(19,169,253,1)] mb-[32px]">Бидний тухай</div>
          <a id="footer_about_exchange" className="block mb-[16px]" href="https://altex.mn/second.html" target="_blank" rel="noreferrer">Биржийн тухай</a>
          <a id="footer_team" className="block mb-[16px]" href="https://altex.mn/our_team.html" target="_blank" rel="noreferrer">Баг, хамт олон</a>
        </div>
        <div className="basis-full min-[310px]:basis-1/2 md:basis-1/3 lg:basis-1/5 mb-[30px]">
          <div id="footer_academy" className="text-[rgba(19,169,253,1)] mb-[32px]">Академи</div>
          <a id="footer_market_news" href="https://altex.mn/index.php#:~:text=%D0%90%D0%BA%D0%B0%D0%B4%D0%B5%D0%BC%D0%B8-,%D0%97%D0%B0%D1%85%20%D0%B7%D1%8D%D1%8D%D0%BB%D0%B8%D0%B9%D0%BD%20%D0%BC%D1%8D%D0%B4%D1%8D%D1%8D,-%D0%9A%D1%80%D0%B8%D0%BF%D1%82%D0%BE%20%D0%BC%D1%8D%D0%B4%D0%BB%D1%8D%D0%B3" target="_blank" className="block mb-[16px]" rel="noreferrer">Зах зээлийн мэдээ</a>
          <a id="footer_crypto_knowledge" href="https://altex.mn/crypto-basic.php" target="_blank" className="block mb-[16px]" rel="noreferrer">Крипто мэдлэг</a>
          <a id="footer_projects" href="https://altex.mn/projects.php" target="_blank" className="block mb-[16px]" rel="noreferrer">Төслүүд</a>
          <a id="howto" href="/howto" className="block mb-[16px]" rel="noreferrer">Гарын авлага</a>
        </div>
        <div className="basis-full min-[310px]:basis-1/2 md:basis-1/3 lg:basis-1/5 mb-[30px]">
          <div id="footer_service" className="text-[rgba(19,169,253,1)] mb-[32px]">Үйлчилгээ</div>
          <a id="footer_terms_of_service" href="/termsofuse" className="block mb-[16px]" rel="noreferrer">Үйлчилгээний нөхцөл</a>
          <a id="footer_privacy_policy" href="https://altex.mn/privacy_policy.html" target="_blank" className="block mb-[16px]" rel="noreferrer">Нууцлалын бодлого</a>
          <a id="footer_fee" href="https://altex.mn/fees.html" target="_blank" className="block mb-[16px]" rel="noreferrer">Шимтгэл</a>
        </div>
        <div className="basis-full min-[310px]:basis-1/2 md:basis-1/3 lg:basis-1/5 mb-[30px]">
          <div id="footer_help" className="text-[rgba(19,169,253,1)] mb-[32px]">Тусламж</div>
          <a id="footer_faq" href="https://altex.mn/faq.html" target="_blank" className="block mb-[16px]" rel="noreferrer">Түгээмэл асуултууд</a>
          <a id="footer_feedback" href="https://altex.mn/feedback.html" target="_blank" className="block mb-[16px]" rel="noreferrer">Санал хүсэлт</a>
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
            <a href="https://www.facebook.com/altex.mn" target="_blank" rel="noreferrer">
              <img src="/images/fb.svg" />
            </a>
            <a href="https://twitter.com/altex_mn" target="_blank" rel="noreferrer">
              <img src="/images/tw.svg" />
            </a>
            <a href="https://www.instagram.com/accounts/login/?next=/altex.mn/" target="_blank" rel="noreferrer">
              <img src="/images/ins.svg" />
            </a>
            <a href="https://t.me/altexmn" target="_blank" rel="noreferrer">
              <img src="/images/tel.svg" />
            </a>
            <a href="https://www.youtube.com/channel/UC0cP-OEOj_b2LJaSW8vxjHA" target="_blank" rel="noreferrer">
              <img src="/images/tube.svg" />
            </a>
            <a href="https://www.linkedin.com/company/altex-digital-exchange/" target="_blank" rel="noreferrer">
              <img src="/images/linkedin.svg" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute w-full left-0 h-[48px] bg-[#0A1540] flex items-center">
        <div id="bottom" className="text-[#CDCDCE] leading-1 inline-block text-center w-full text-[12px]">Зохиогчийн эрх © 2023 Бүх эрх хуулиар хамгаалагдсан</div>
      </div>
    </>
  );
}

export default Footer;