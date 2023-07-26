import { useState } from "react";
import { useIntl, FormattedMessage } from "react-intl";

function FAQ() {
  const intl = useIntl();
  const [show, setShow] = useState("button1");
  const toggle = (buttonId) => {
    if (buttonId !== show) {
      setShow(buttonId);
    }
  };
  return (
    <>
      <div className="bg-[#F5F5F5] relative w-screen -left-[calc(50vw-50%)]">
        <div className="container mx-auto pt-[48px] p-4 max-w-[1200px]">
          <div className="flex w-full pb-[7px] sm:pb-[16px] border-b-[1px] border-b-[#CDCDCE] text-[18px] font-medium gap-[40px] mb-[24px]">
            <div className={`relative cursor-pointer w-[220px] sm:w-[250px] text-[15px] sm:w-max sm:text-[18px] ${show === "button1" ? "active text-[#35363B]" : "text-[#CDCDCE]"}`} onClick={() => toggle("button1")}>
              <FormattedMessage id="faq_title_customer_service" />
              <div className={`absolute h-[2px] w-full bg-[#13A9FD] bottom-[-8px] sm:bottom-[-18px] ${show === "button1" ? "visible" : "hidden"}`}></div>            
            </div>
            <div className={`relative cursor-pointer w-[220px] sm:w-[250px] text-[16px] sm:w-max sm:text-[18px] ${show === "button2" ? "active text-[#35363B]" : "text-[#CDCDCE]"}`} onClick={() => toggle("button2")}>
              <FormattedMessage id="faq_title_settlement" />
              <div className={`absolute h-[2px] w-full bg-[#13A9FD] bottom-[-8px] sm:bottom-[-18px] ${show === "button2" ? "visible" : "hidden"}`}></div>            
            </div>
          </div>
          {show === "button1" && (
            <div className="Харилцагчийн бүртгэл">
              <Item title={intl.formatMessage({id: "faq_q1"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a1"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q2"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a2"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q3"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a3"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q4"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a4"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q5"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a5"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q6"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a6"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q7"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a7"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q8"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a8"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q9"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a9"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q10"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a10"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q11"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a11"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q12"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a12"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q13"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a13"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q14"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a14"}) }} />
              </Item>
            </div>

          )}

          {show === "button2" && (
            <div className="ТӨЛБӨР ТООЦОО">
              <Item title={intl.formatMessage({id: "faq_q15"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a15"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q16"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a16"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q17"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a17"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q18"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a18"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q19"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a19"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q20"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a20"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q21"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a21"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q22"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a22"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q23"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a23"}) }} />
              </Item>

              <Item title={intl.formatMessage({id: "faq_q24"})}>
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a24"}) }} />
              </Item>

            </div>
          )}

        </div>
      </div>
    </>
  );
}
const Item = ({ title, children }) => {
  const [expandedItems, setExpandedItems] = useState([]);

  const handleClick = () => {
    if (expandedItems.includes(title)) {
      setExpandedItems(prevItems => prevItems.filter(item => item !== title));
    } else {
      setExpandedItems(prevItems => [...prevItems, title]);
    }
  };
  return (
    <div>
      <div
        className={`cursor-pointer p-[24px] rounded-[8px] bg-[#FFFFFF]  text-[#35363B] px-[18px] overflow-hidden transition-[max-height] duration-500 drop-shadow-[6px_6px_18px_rgba(0,108,255,0.04)] ${expandedItems.includes(title) ? "max-h-[800px] mb-0 rounded-b-[0px] pb-0" : "mb-[16px]"}`}
        onClick={handleClick}
      >
        <div className="flex sm:pt-0 justify-between items-center font-bold gap-[16px]">
          <div className="font-montserrat text-[12px] w-[290px] sm:text-[16px] sm:w-max">{title}</div>
          <svg
            className={`bg-[rgba(0,108,255,0.16)] p-1 rounded w-6 h-6 transition-transform duration-200 transform ${expandedItems.includes(title) ? "rotate-180" : ""}`}
            width="17"
            height="9"
            viewBox="0 0 17 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00438 6.28702L14.0544 0.330021C14.2698 0.118282 14.5598 -0.000366211 14.8619 -0.000366211C15.164 -0.000366211 15.4539 0.118282 15.6694 0.330021C15.7746 0.434253 15.8582 0.55831 15.9152 0.695024C15.9722 0.831737 16.0016 0.978395 16.0016 1.12652C16.0016 1.27465 15.9722 1.4213 15.9152 1.55802C15.8582 1.69473 15.7746 1.81879 15.6694 1.92302L8.81338 8.67302C8.60368 8.87741 8.32416 8.99451 8.03139 9.00064C7.73862 9.00677 7.45446 8.90146 7.23638 8.70602L0.336384 1.92902C0.230772 1.82499 0.146904 1.701 0.0896573 1.56426C0.0324108 1.42752 0.00292969 1.28076 0.00292969 1.13252C0.00292969 0.98428 0.0324108 0.83752 0.0896573 0.700779C0.146904 0.564038 0.230772 0.440047 0.336384 0.33602C0.551824 0.124281 0.841811 0.00563335 1.14388 0.00563335C1.44596 0.00563335 1.73594 0.124281 1.95138 0.33602L8.00438 6.28702Z"
              fill="#006CFF"
            />
          </svg>
        </div>
      </div>
      {expandedItems.includes(title) && (
        <div className="transition-transform duration-200 text-[8px] smooth bg-[#FFFFFF] text-gray-700 mb-4 p-4 rounded-b-md mt-[0px]">
          {children}
        </div>
      )}
    </div>
  );
};

export default FAQ;