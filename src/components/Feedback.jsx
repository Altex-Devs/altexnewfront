function Feedback() {
  return (
    <>
      <div className="container mx-auto bg-[#101C47] max-w-[600px] px-[40px] py-[24px] mb-[239px] mt-[80px]">
        <div className="text-[#13A9FD] font-medium text-[24px]">Санал хүсэлт илгээх</div>
        <p className="italic text-[#E6E7EB] mb-[23px]">Та өөрийн илгээх санал хүсэлтээ доорх хуудсанд бөглөж оруулна уу. Бид таны хүсэлтийг хүлээн авч шийдвэрлэхдээ таатай байх болно. Танд баярлалаа.</p>
        <div className="mb-[8px]">Нэр</div>
        <input type="text" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[23px] p-[10px] px-[16px] outline-none font-extralight" />
        <div className="mb-[8px]">Утас</div>
        <input type="text" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[23px] p-[10px] px-[16px] outline-none font-extralight" />
        <div className="mb-[8px]">И-мэйл</div>
        <input type="text" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[23px] p-[10px] px-[16px] outline-none font-extralight" />
        <div className="mb-[8px]">Гарчиг</div>
        <input type="text" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[23px] p-[10px] px-[16px] outline-none font-extralight" />
        <div className="mb-[8px]">Санал хүсэлт</div>
        <input type="text" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[23px] p-[10px] px-[16px] outline-none font-extralight" />
        <div className="flex justify-end">
          <div className="inline-block rounded-[4px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b from-[#13A9FD] to-[#006CFF] mb-[32px]">Илгээх</div>
        </div>
      </div>
    </>
  );
}

export default Feedback;