
import { FormattedMessage } from "react-intl";
import { app } from "../firebase"
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const db = getFirestore(app);


function Feedback() {
  const hidePromoNotif = (e) => {
    e.target.closest(".notif").classList.add("hidden");
  }
  const handleSubmit = async (e) => {
    e.preventDefault();   
    
  try {
    const form = e.target; 
    const name = form.elements.name.value;
    const phone = form.elements.phone.value;
    const email = form.elements.email.value;
    const title = form.elements.title.value;
    const message = form.elements.message.value;

      const feedbackData = {
        name,
        phone,
        email,
        title,
        message,
        timestamp: new Date().toISOString(),
      };
      console.log(feedbackData)
      const feedbacksCollection = collection(db, 'feedbacks');
      await addDoc(feedbacksCollection, feedbackData);

      form.reset();
      document.querySelector("#promoSuccess").classList.remove("hidden");

  } catch (error) {
    console.error('Error saving feedback:', error);
    document.querySelector("#promoFail").classList.remove("hidden");

  }
  };
  return (
    <>
      <div id="promoSuccess" className="notif backdrop-blur fixed hidden w-[calc(100%-100px)] box-border font-bold top-[60px] right-[50px] max-w-[512px] bg-[rgba(67,210,76,.5)] px-[24px] py-[30px] rounded-[8px] z-50">
        <div className="relative flex items-center gap-[16px]">
          <img src="/images/correct.svg" alt='correct'/>
          <span id="notif_success">
            <FormattedMessage id="feedback_success_message" defaultMessage="Таны мэдээллийг хүлээж авлаа." />
          </span>
          <img className="absolute top-[-14px] right-[-8px] cursor-pointer" onClick={(event) => hidePromoNotif(event)} src="/images/close.svg" alt='close'/>
        </div>
      </div>

      <div id="promoFail" className="notif backdrop-blur fixed hidden w-[calc(100%-100px)] box-border font-bold top-[50px] right-[50px] max-w-[512px] bg-[rgba(255,0,61,.32)] px-[24px] py-[30px] rounded-[8px] z-50">
        <div className="relative flex items-center gap-[16px]">
          <img src="/images/error.svg" alt='error'/>
          <span id="notif_fail">
            <FormattedMessage id="feedback_failed_message" defaultMessage="Алдаа гарлаа, та дахин оролдоно уу!" />
          </span>
          <img className="absolute top-[-14px] right-[-8px] cursor-pointer" onClick={(event) => hidePromoNotif(event)} src="/images/close.svg" alt='close'/>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="container mx-auto bg-[#101C47] max-w-[600px] px-[40px] mb-[80px] mt-[80px]">
          <div className="text-[#13A9FD] font-medium text-[24px] pt-[24px] mb-[16px]">
            <FormattedMessage id="feedback_title" defaultMessage="Санал хүсэлт илгээх" />
          </div>
          <p className="italic text-[16px] text-[#E6E7EB] mb-[24px]">
            <FormattedMessage id="feedback_details" defaultMessage="Та өөрийн илгээх санал хүсэлтээ доорх хуудсанд бөглөж оруулна уу. Бид таны хүсэлтийг хүлээн авч шийдвэрлэхдээ таатай байх болно. Танд баярлалаа." />
          </p>
          <div className="mb-[8px]">
            <FormattedMessage id="feedback_name" defaultMessage="Нэр" />
          </div>
          <input type="text"  name="name" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[24px] p-[10px] px-[16px] outline-none font-extralight" />
          <div className="mb-[8px]">
            <FormattedMessage id="feedback_phone" defaultMessage="Утас" />
          </div>
          <input type="number"  name="phone" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[24px] p-[10px] px-[16px] outline-none font-extralight" />
          <div className="mb-[8px]">
            <FormattedMessage id="feedback_email" defaultMessage="И-мэйл" />
          </div>
          <input type="email"  name="email" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[24px] p-[10px] px-[16px] outline-none font-extralight" />
          <div className="mb-[8px]">
            <FormattedMessage id="feedback_subject" defaultMessage="Гарчиг" />
          </div>
          <input type="text"  name="title" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[24px] p-[10px] px-[16px] outline-none font-extralight" />
          <div className="mb-[8px]">
            <FormattedMessage id="feedback_message" defaultMessage="Санал хүсэлт" />
          </div>
          <input type="text"  name="message" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[40px] p-[10px] px-[16px] outline-none font-extralight" />
          <div className="flex justify-end pt-[4px] pb-[24px]">
            <button type="sumbit" className="inline-block rounded-[4px] font-bold text-[14px] w-[100px] h-[48px] justify-center content-center bg-gradient-to-b from-[#13A9FD] to-[#006CFF] ">
              <FormattedMessage id="feedback_submit" defaultMessage="Илгээх" />
            </button>
          </div>

        </div>
      </form>
    </>
  );
}

export default Feedback;