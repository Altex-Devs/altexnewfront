import { Link } from "react-router-dom";

function NewsMore() {
  return (
    <>
      <div className="grid lg:grid-cols-3 gap-[24px]">

        <div className="bg-white rounded flex flex-col">
          <div className="aspect-video bg-cover rounded-t" style={{backgroundImage: 'url("/images/team.png")'}}></div>
          <div className="pt-[18px] px-[16px] pb-[24px] flex flex-col justify-between grow">
            <div className="text-[#03040A] text-[18px] font-bold mb-[40px]">Зөвхөн таны авсан койн л унаад байгаа юм шиг санагдаж байна уу?​</div>
            <div className="flex justify-between items-center">
              <div className="text-[#707070] font-light">02/01/2022</div>
              <Link className="text-[14px] text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]" to="/news/badma">Цааш үзэх</Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded flex flex-col">
          <div className="aspect-video bg-cover rounded-t" style={{backgroundImage: 'url("/images/team.png")'}}></div>
          <div className="pt-[18px] px-[16px] pb-[24px] flex flex-col justify-between grow">
            <div className="text-[#03040A] text-[18px] font-bold mb-[40px]">Зөвхөн таны авсан койн л унаад байгаа юм шиг санагдаж байна уу?​ Зөвхөн таны авсан койн л унаад байгаа юм шиг санагдаж байна уу?​</div>
            <div className="flex justify-between items-center">
              <div className="text-[#707070] font-light">02/01/2022</div>
              <Link className="text-[14px] text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]" to="/news/badma">Цааш үзэх</Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded flex flex-col">
          <div className="aspect-video bg-cover rounded-t" style={{backgroundImage: 'url("/images/team.png")'}}></div>
          <div className="pt-[18px] px-[16px] pb-[24px] flex flex-col justify-between grow">
            <div className="text-[#03040A] text-[18px] font-bold mb-[40px]">Зөвхөн таны авсан койн л унаад байгаа юм шиг санагдаж байна уу?​</div>
            <div className="flex justify-between items-center">
              <div className="text-[#707070] font-light">02/01/2022</div>
              <Link className="text-[14px] text-white font-light bg-[#006CFF] rounded py-[8px] px-[16px]" to="/news/badma">Цааш үзэх</Link>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default NewsMore;