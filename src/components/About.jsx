function About() {
  return (
    <>
      <div className="relative border-b-[0.5px] border-[#13A9FD] pt-[360px] pb-[80px] z-10">
        <div className="relative text-[32px] max-w-[800px] font-extralight">
          Хэрэглэгч таныг дэлхийн цахим хөрөнгө оруулалтын боломжуудад хямд үнэ, өргөн цар хүрээгээр хүргэх нь бидний <span className="text-[#13A9FD] font-medium">эрхэм зорилго.</span>
        </div>
      </div>

      <div style={{backgroundImage: 'url("/images/Group 7821.svg")'}} className="absolute bg-no-repeat bg-[right_-230px_bottom_-480px] w-screen h-[930px] top-0 -left-[calc(50vw-50%)] pointer-events-none touch-none"></div>

      <ul className="relative space-y-[40px] mt-[80px] ml-[28px] list-outside marker:text-[#13A9FD] marker:text-[34px] marker:left-[-46px] marker:absolute z-10 text-[24px] font-extralight list-disc leading-[34px] [&_p]::before">
        <li>
          <b>Манай бирж нь</b> олон улсын технологийн болон кибер аюулгүй байдлын протоколд нийцсэн олон төрлийн криптовалют, токены сонголтууд дээр нэгдсэн хөрвөх сантай, дижитал хөрөнгө арилжааны мэргэжлийн үйлчилгээ үзүүлэгч юм.
        </li>
        <li>
          Бид дэлхийн жишигт нийцсэн технологийн шийдэл болон <b>хэрэглэгч төвтэй түргэн шуурхай</b> үйлчилгээг хослуулан үйл ажиллагаагаа хэрэглэгчдийн хэрэгцээ шаардлагад дээд зэргээр нийцүүлэн уян хатан ажиллахыг зорьж байна.
        </li>
      </ul>

      <div className="flex flex-col sm:flex-row mt-[160px] mb-[240px] gap-[24px] justify-items-stretch text-[14px] font-extralight text-[#E6E7EB]">
        <div className="basis-1/2 rounded-[24px] bg-[#101C47] p-[40px]">
          <div className="text-[16px] text-[#13A9FD] font-bold mb-[8px]">
            Технологи, аюулгүй байдал
          </div>
          Алтекс дижитал бирж нь технологийн хувьд AWS, Equinix зэрэг олон улсын өндөр хурдны серверүүд дээр байршсан, бодит цаг хугацаанд эрсдлийн үнэлгээ хийгддэг олон давтамжит аюулгүйн хамгаалалттай, анхлан суралцагчдаас эхлээд мэргэжлийн арилжаачдадзориулагдсан уян хатан интерфэйстэй зэрэг олон давуу талуудтай.
          <div className="text-center mt-[40px]">
            <img src="/images/Group 7372.svg" alt="aws" className="inline"/>
          </div>
        </div>
        <div className="basis-1/2 rounded-[24px] bg-[#101C47] p-[40px]">
          <div className="text-[16px] text-[#13A9FD] font-bold mb-[8px]">
            Харилцагчийн 24/7 онлайн зөвлөх үйлчилгээ
          </div>
          Хэрэглэгчдийнхээ хэрэгцээ шаардлагад нийцүүлэн харилцагчийн 24/7 онлайн зөвлөх үйлчилгээг нэвтрүүлсэн бөгөөд үйлчилгээтэй холбоотой асуулт, санал хүсэлтийг түргэн шуурхай шийдвэрлэн ажилладаг. Мөн анхлан сонирхогчоос эхлээд мэргэжлийн ажилжаачдад зориулсан сургалт, зөвлөгөөг бэлтгэн хүргэж, бусад нэмэлт үйлчилгээг нэвтрүүлэхээр зорин ажиллаж байна.
          <div className="text-center mt-[40px]">
            <img src="/images/CallPro-new-tsenher-logo-texttei.svg" alt="aws" className="inline"/>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;