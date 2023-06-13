import HomeComponents from "./HomeComponents";
import Trend from "./Trend";

const Corporate = () => {
  return (
    <>
      <div className="relative top-[-100px]">
        <div className="relative flex flex-col justify-center h-[688px] z-10 justify-items-start items-start gap-[24px]">
          <div className="text-[40px] font-bold">
            Дижитал хөрөнгө оруулалтыг хялбараар
          </div>
          <p className="max-w-[800px] text-[24px] font-light leading-[30px]">Байгууллагад зориулсан дижитал хөрөнгө оруулалтын хамгийн найдвартай платформыг санал болгож байна.</p>
          <button className="rounded-[4px] mt-[16px] font-bold text-[14px] px-[24px] py-[15px] bg-gradient-to-b leading-[18px] from-[#13A9FD] to-[#006CFF] hover:to-[rgba(0,108,255,.64)] hover:from-[rgba(19,169,253,.64)]">Арилжаанд оролцох</button>
        </div>
        <div style={{backgroundImage: 'url("/images/dan-2.png")'}} className="absolute bg-cover w-screen h-full top-0 -left-[calc(50vw-50%)] pointer-events-none touch-none"></div>
      </div>

      {/* <div className="relative">
        <div className="absolute w-screen h-[500px] top-[-100px] left-[calc((100vw-100%)/-2)] bg-gradient-radial-left from-[rgba(0,108,255,0.26)] to-[rgba(19,169,253,0)] pointer-events-none touch-none"></div>
      </div> */}

      <Trend />

     


     <div className="mx-[-180px] bg-[#0B163F] h-[682px] mb-[180px]">
     <div className="mx-[180px] py-[80px]">
     <div className="text-[#13A9FD] text-[24px] mb-[24px] ">
        Байгууллагын үйлчилгээ
      </div>

      <p className="font-light text-[18px] mb-[40px]">Дижитал хөрөнгө нь хөгжлийнхөө 4-р шат руу орж, олон улсын томоохон байгууллагуудын хөрөнгө оруулалтын чиг хандлага дижитал буюу крипто зах зээл рүү аль хэдийн шилжээд эхэлсэн нь түүний өсөн нэмэгдэж буй үнэ цэн, цаг үеийг мэдэрсэн ухаалаг хөрөнгө оруулалт болж байна.</p>

      <p className="font-light text-[18px]">Бид хөрөнгө оруулагчид болон байгууллагуудад зориулсан уян хатан <span className="font-bold">виртуал хөрөнгө оруулалтын</span> үйлчилгээг анх удаа дотоодын зах зээлд нэвтрүүлсэн бөгөөд та бүхэнд <span className="font-bold">дараах боломжийг</span> олгож байна.</p>
      
      <div className="grid grid-cols-3 md:flex-row gap-[24px] mt-[64px] mb-[240px] font-light">
        <div className="rounded-[8px] w-[384px] border-[#13A9FD] border px-[48px] py-[40px]">
          <img src="/images/Group 7818.svg" alt="" className="mb-[16px]"/>
          <div className="text-[#13A9FD] font-bold mb-[8px]">Хөрөнгийн удирдлага</div>
          <p className="text-[14px]">Хугацаа, эрсдэл, өгөөж зэргийг тооцон богино, дунд, урт хугацааны хөрөнгө оруулалтын багц бүрдүүлэх үйлчилгээ</p>
        </div>
        <div className="rounded-[8px] w-[384px] border-[#13A9FD] border px-[48px] py-[40px]">
          <img src="/images/Union 57.svg" alt="" className="mb-[16px]"/>
          <div className="text-[#13A9FD] font-bold mb-[8px]">Арбитраж</div>
          <p className="text-[14px]">Бирж хоорондын ханшийн зөрүүг ашиглан эрсдэлгүй ашиг хийх боломж</p>
        </div>
        <div className="rounded-[8px] w-[384px] border-[#13A9FD] border px-[48px] py-[40px]">
          <img src="/images/Union 58.svg" alt="" className="mb-[16px]"/>
          <div className="text-[#13A9FD] font-bold mb-[8px]">Спот арилжаа</div>
          <p className="text-[14px]">Эрсдэлгүй урт болон богино хугацаанд арилжаа хийх боломж</p>
        </div>
      </div>
     </div>
     </div>
    
     

      <HomeComponents />
    </>
  );
}

export default Corporate;