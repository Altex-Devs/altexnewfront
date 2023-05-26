import { Link } from "react-router-dom";

function News() {
  return (
    <>
      <div className="bg-[#F5F5F5] relative w-screen -left-[calc(50vw-50%)] mt-[40px] pt-[80px] pb-[240px]">
        <div className="container mx-auto pt-[48px] max-w-[1200px]">
          <div className="font-light text-[14px] mb-[80px] text-[#3973C5]">Нүүр &gt; Академи &gt; Крипто мэдлэг</div>

          <div className="bg-white rounded flex gap-[24px]">
            <div className="basis-2/3 aspect-video bg-cover rounded-l" style={{backgroundImage: 'url("/images/team.png")'}} ></div>
            <div className="basis-1/3 p-[24px] pl-0">
              <div className="inline-block text-[12px] font-light rounded bg-[#FDAE13] py-[4px] px-[8px] mb-[23px]">Хамгийн сүүлийн</div>
              <div className="text-[#03040A] text-[32px] font-bold">Зөвхөн таны авсан койн л унаад байгаа юм шиг санагдаж байна уу?​</div>
              <div className="flex justify-between content-center self-end">
                <div className="text-[#707070] font-light">02/01/2022</div>
                <Link className="text-[14px] text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]" to="/news/badma">Цааш үзэх</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;