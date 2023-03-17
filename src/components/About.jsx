function About() {
  return (
    <>
      <div className="relative border-b-[0.5px] border-[#13A9FD] pt-[360px] pb-[80px] z-10">
        <div className="relative text-[32px] max-w-[800px] font-light">
          Хэрэглэгч таныг дэлхийн цахим хөрөнгө оруулалтын боломжуудад хямд үнэ, өргөн цар хүрээгээр хүргэх нь бидний <span className="text-[#13A9FD] font-medium">эрхэм зорилго.</span>
        </div>
      </div>
      <div style={{backgroundImage: 'url("/images/Group 7821.svg")'}} className="absolute bg-no-repeat bg-[right_-230px_bottom_-480px] w-screen h-[930px] top-0 -left-[calc(50vw-50%)] pointer-events-none touch-none"></div>
      <ul className="relative font z-10 text-[24px] font-light list-disc list-inside leading-[32px] [&_p]::before">
        <li>
          <b>Манай бирж нь</b> олон улсын технологийн болон кибер аюулгүй байдлын протоколд нийцсэн олон төрлийн криптовалют, токены сонголтууд дээр нэгдсэн хөрвөх сантай, дижитал хөрөнгө арилжааны мэргэжлийн үйлчилгээ үзүүлэгч юм.
        </li>
        <li>
          Бид дэлхийн жишигт нийцсэн технологийн шийдэл болон <b>хэрэглэгч төвтэй түргэн шуурхай</b> үйлчилгээг хослуулан үйл ажиллагаагаа хэрэглэгчдийн хэрэгцээ шаардлагад дээд зэргээр нийцүүлэн уян хатан ажиллахыг зорьж байна.
        </li>
      </ul>
    </>
  );
}

export default About;