function Feedback() {
  return (
    <>
      <div className="container mx-auto bg-[#101C47] max-w-[600px] px-[40px]  mb-[240px] mt-[80px]">
        <div className="text-[#13A9FD] font-medium text-[24px] pt-[24px] mb-[16px]">Санал хүсэлт илгээх</div>
        <p className="italic text-[16px] text-[#E6E7EB] mb-[24px]">Та өөрийн илгээх санал хүсэлтээ доорх хуудсанд бөглөж оруулна уу. Бид таны хүсэлтийг хүлээн авч шийдвэрлэхдээ таатай байх болно. Танд баярлалаа.</p>
        <div className="mb-[8px]">Нэр</div>
        <input type="text" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[24px] p-[10px] px-[16px] outline-none font-extralight" />
        <div className="mb-[8px]">Утас</div>
        <input type="text" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[24px] p-[10px] px-[16px] outline-none font-extralight" />
        <div className="mb-[8px]">И-мэйл</div>
        <input type="text" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[24px] p-[10px] px-[16px] outline-none font-extralight" />
        <div className="mb-[8px]">Гарчиг</div>
        <input type="text" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[24px] p-[10px] px-[16px] outline-none font-extralight" />
        <div className="mb-[8px]">Санал хүсэлт</div>
        <input type="text" className="rounded-[4px] border-solid border-[.5px] border-[#E6E7EB] focus-visible:border-[#006CFF] bg-[rgba(0,0,0,0)] w-full h-[48px] mb-[40px] p-[10px] px-[16px] outline-none font-extralight" />
        <div className="flex justify-end pb-[24px]">
          <div className="inline-block rounded-[4px] font-bold text-[14px] w-[100px] h-[48px]  grid justify-center content-center bg-gradient-to-b from-[#13A9FD] to-[#006CFF] ">Илгээх</div>
        </div>
      </div>
    </>
  );
}

export default Feedback;