/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { FormattedMessage } from "react-intl";

const Layout = ({ locale, setLocale }) => {
  useEffect(() => {
    if (!localStorage.getItem("newsletter")) {
      document.querySelector("#newsletter").classList.remove("hidden");
      document.querySelector("#newsletter").classList.add("flex");
    }
  }, []);

  function submitNewsletter() {
    const emailInput = document.querySelector("#newsletteremail");

    document.querySelector("#promoSuccess").classList.add("hidden");
    document.querySelector("#promoFail").classList.add("hidden");
    document.querySelector("#promoAlert").classList.add("hidden");

    if (
      emailInput.value &&
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(emailInput.value).toLowerCase()
      )
    ) {
      fetch("https://api.apispreadsheets.com/data/OWPAwsuyZCsvWlWa/", {
        method: "POST",
        body: JSON.stringify({
          data: [
            {
              popup_email_id: emailInput.value,
            },
          ],
        }),
      }).then((res) => {
        if (res.status === 201) {
          document.querySelector("#promoSuccess").classList.remove("hidden");
          document.querySelector("#newsletter").classList.add("hidden");
          document.querySelector("#newsletter").classList.remove("flex");
          emailInput.value = "";
          localStorage.setItem("newsletter", "submited");
        } else {
          document.querySelector("#promoFail").classList.remove("hidden");
          document.querySelector("#promoAlert").classList.add("flex");
        }
      });
    } else {
      document.querySelector("#promoAlert").classList.remove("hidden");
      document.querySelector("#promoAlert").classList.add("flex");

      if (!emailInput.value) {
        emailInput.classList.add("border-[#FF003D]");
        emailInput.classList.remove("border-[#43D24C]");
      }
    }
  }

  function hideNewsletter() {
    document.querySelector("#newsletter").classList.add("hidden");
    localStorage.setItem("newsletter", "closed");
  }

  function validateNewsletterEmail(e) {
    if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        String(e.target.value).toLowerCase()
      )
    ) {
      e.target.classList.add("border-[#43D24C]");
      e.target.classList.remove("border-[#FF003D]");
    } else {
      e.target.classList.remove("border-[#43D24C]");
      e.target.classList.add("border-[#FF003D]");
    }
  }

  return (
    <>
      <div
        id="newsletter"
        className="fixed hidden justify-center items-center backdrop-blur-sm top-0 l-0 w-full h-screen z-50"
      >
        <div className="relative w-[600px] max-w-[100%] bg-[#0E1A43] px-[25px] py-[50px] sm:p-[100px] sm:py-[70px] rounded-[8px] m-[15px]">
          <div
            id="newsletter_title"
            className="text-[#13A9FD] text-[24px] font-medium mb-[20px]"
          >
            <FormattedMessage id="newsletter_title" />
          </div>
          <p id="newsletter_desc" className="font-extralight mb-[20px]">
            <FormattedMessage id="newsletter_desc" />
          </p>
          <input
            type="email"
            id="newsletteremail"
            className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[16px] p-[10px] px-[16px] outline-none font-extralight"
            placeholder="И-мэйл"
            onChange={(event) => validateNewsletterEmail(event)}
          />
          <button
            id="newsletter_send"
            onClick={submitNewsletter}
            className="rounded-[4px] w-full font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b leading-[18px] from-[#13A9FD] to-[#006CFF] hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]"
          >
            Илгээх
          </button>
          <img
            className="absolute top-[16px] right-[16px] cursor-pointer"
            onClick={hideNewsletter}
            src="/images/close.svg"
          />
        </div>
      </div>

      <div>
        <Navbar locale={locale} setLocale={setLocale} />
        <div className="lg:px-[205px] w-full">
          <Outlet />
        </div>
        <Footer locale={locale} setLocale={setLocale} />
      </div>
    </>
  );
};

export default Layout;
