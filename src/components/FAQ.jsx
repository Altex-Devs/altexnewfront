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
      <div className="bg-[#F5F5F5] relative w-screen -left-[calc(50vw-50%)] mt-[40px] pt-[80px] pb-[240px]">
        <div className="container mx-auto pt-[48px] p-4 max-w-[1200px]">
          <div className="flex w-full pb-[16px] border-b-[1px] border-b-[#CDCDCE] text-[18px] font-medium gap-[40px] mb-[24px]">
            <div className={`relative cursor-pointer w-[120px] text-[15px] sm:w-max sm:text-[18px] ${show === "button1" ? "active text-[#35363B]" : "text-[#CDCDCE]"}`} onClick={() => toggle("button1")}>
              <FormattedMessage id="faq_title_customer_service" />
              <div className={`absolute h-[2px] w-full bg-[#13A9FD] bottom-[-17px] ${show === "button1" ? "visible" : "hidden"}`}></div>            
            </div>
            <div className={`relative cursor-pointer w-[120px] text-[15px] sm:w-max sm:text-[18px] ${show === "button2" ? "active text-[#35363B]" : "text-[#CDCDCE]"}`} onClick={() => toggle("button2")}>
              <FormattedMessage id="faq_title_settlement" />
              <div className={`absolute h-[2px] w-full bg-[#13A9FD] bottom-[-17px] ${show === "button2" ? "visible" : "hidden"}`}></div>            
            </div>
          </div>
          {show === "button1" && (
            <div className="Харилцагчийн бүртгэл">
              <Item title="1. Хэрхэн бүртгэлээ баталгаажуулах вэ?">
                <div dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "faq_a1"}) }} />
              </Item>

              <Item title="2. Хэрхэн бүртгэлээ устгах вэ?">
                <ul className="list-disc leading-2 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li>Та Алтекс дижитал бирж дээрх бүртгэлтэй хаягаа устгахыг хүсвэл хүсэлтээ өөрийн бүртгэлтэй имэйл хаягаас бичиг баримтаа хажуудаа барьсан сельфи зургийн хамт <a className="underline text-[#0000EE]" href="mailto:contact@altex.mn">contact@altex.mn</a> хаягаар бичиж илгээнэ үү.</li>
                  <li>Таны хаягийг устгахаас өмнө аюулгүй байдлын үүднээс тантай холбогдож баталгаажуулах үйлдэл хийгдэнэ.</li>
                </ul>
              </Item>

              <Item title="3. Хувийн мэдээллээ хэрхэн шинэчлэх вэ?">
                <ul className="list-disc leading-2 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li>Та Алтекс дижитал бирж дээрх бүртгэлтэй хувийн мэдээллээ өөрчлөхийг хүсвэл хүсэлтээ өөрийн бүртгэлтэй имэйл хаягаас бичиг баримтаа хажуудаа барьсан сельфи зургийн хамт <a className="underline text-[#0000EE]" href="mailto:contact@altex.mn">contact@altex.mn</a> хаягаар бичиж илгээнэ үү.</li>
                  <li>Таны мэдээллийг өөрчлөхөөс өмнө аюулгүй байдлын үүднээс таныг таньж баталгаажуулах үйлдэл хийгдэнэ.</li>
                </ul>
              </Item>

              <Item title="4. Нууц үгээ хэрхэн шинэчлэх вэ?">
                <ul className="list-disc leading-2 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li><span className="font-bold">www.altex.mn</span> хуудсанд өөрийн үүсгэсэн <span>бүртгэлээрээ нэвтэрч орно</span>.</li>
                  <li><span className="font-bold">Тохиргоо</span> цэсрүү орж <span className="font-bold">Password</span> товчин дээр дарснаар хуучин нууц үгээ 1 удаа, шинэ нууц үгээ 2 удаа бичиж оруулах талбар гарч ирнэ.</li>
                  <li>Дээрх талбарыг бөглөн <span className="font-bold">Save</span> товчийг дарснаар таны шинэ нууц үг хадгалагдана.</li>
                </ul>
              </Item>

              <Item title="5. 2FA хамгаалалтыг хэрхэн идэвхжүүлэх вэ?">
                <ul className="list-disc leading-2 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li><span className="font-bold">Google Authenticator app</span>-ыг өөрийн утасны Playstore болон Appstore-с татаж авна.</li>
                  <li>www.altex.mn хуудсанд өөрийн үүсгэсэн <span className="font-bold">бүртгэлээрээ нэвтэрч орно</span>.</li>
                  <li><span className="font-bold">Settings</span> цэсрүү орж <span className="font-bold">Security</span> хэсэгт байрлах Google Authenticator <span className="font-bold">Add new</span> товч дээр дарж <span className="font-bold">QR код</span> үүсгэнэ.</li>
                  <li>Үүссэн <span className="font-bold">QR кодыг</span> өөрийн утасны Google Authenticator app-руу нэвтрэн орж <span className="font-bold">Scan code</span> товчийг дарснаар уншуулж идэвхжүүлнэ.</li>
                  <li>Google Authenticator app дээр гарч ирэх <span className="font-bold">6 оронтой кодыг</span> платформ дээрээ оруулснаар таны холболт амжилттай хийгдэнэ.</li>
                </ul>
              </Item>

              <Item title="6. 2FA хамгаалалтаа хэрхэн салгах вэ?">
                <ul className="list-disc leading-2 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li>Алтекс дижитал бирж дээрх 2FA хамгаалалтаа салгуулахыг хүсвэл хүсэлтээ өөрийн бүртгэлтэй имэйл хаягаас бичиг баримтаа хажуудаа барьсан селфи зургийн хамт <a className="underline text-[#0000EE]" href="mailto:contact@altex.mn">contact@altex.mn</a>  хаягаар бичиж илгээнэ үү.</li>
                  <li>Таны мэдээллийг өөрчлөхөөс өмнө аюулгүй байдлын үүднээс таныг таньж баталгаажуулах үйлдэл хийгдэнэ.</li>
                </ul>
                <div className="text-[0.7rem] sm:text-[0.9rem] font-montserrat mt-10">
                  Санамж: 2FA холболтоо шинээр дахин хийгээгүй тохиолдолд крипто арилжаа, орлого зарлага хийх боломжгүй гэдгийг анхаарна уу.</div>
              </Item>

              <Item title="7. Хэрхэн хаягийн баталгаажуулалт хийх вэ?">
                <div className="text-[0.7rem] sm:text-[0.9rem] font-montserrat">Иргэний үнэмлэхийн арын хэсгийн зургийг тод гаргацтай авч илгээснээр хаягийг баталгаажуулах боломжтой.</div>
              </Item>

              <Item title="8. Иргэний үнэмлэхгүй бол хэрхэн хаягийн баталгаажуулалт хийх вэ?">
                <ul className="list-disc leading-2 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li>Иргэний үнэмлэхгүй тохиолдолд Монгол улсын иргэн E-mongolia-гаас Хаягийн бүртгэлийн лавлагааг авч илгээнэ.</li>
                  <li>Гадаад улсад оршин суудаг бол хэрэглээний болон үйлчилгээний төлбөр төлсөн баримтыг хавсарган илгээнэ. </li>
                </ul>
                <div className="text-[0.7rem] sm:text-[0.9rem] font-montserrat mt-10">
                  Санамж: Баримт бичиг нь Монгол эсвэл Англи хэл дээр биш бол албан ёсны баталгаат орчуулгаар орчуулан баталгаа гаргасан байхыг анхаарна уу.</div>

              </Item>

              <Item title="9. Хэрхэн Итгэмжит харилцагч болох вэ?">
                <ul className="list-disc leading-6 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li className="mb-3">Харилцагчийн зарлагын дээд хэмжээг нэмэгдүүлэн Итгэмжит харилцагч болох хүсэлтийг өөрийн Алтекс дижитал биржид бүртгэлтэй имэйл хаягаас компанийн <a className="underline text-[#0000EE]" href="mailto:contact@altex.mn">contact@altex.mn</a>  хаяг, эсхүл бүртгэлтэй дугаараас албан ёсны телеграм болон фейсбүүк хуудсанд ирүүлнэ.</li>
                  <li className="mb-3">Баталгаажсан харилцагч нь өөрийн хэрэгцээ шаардлагаас хамааран өдөрт хийгдэх зарлагын хэмжээг нэмэгдүүлэн Итгэмжит харилцагч болох хүсэлт гаргасан тохиолдолд Итгэмжит харилцагчийн зарлагын дээд хэмжээний 1%-тай тэнцэхүйц шимтгэлийг 1 удаа төлнө.</li>
                  <li>Харилцагчийн бүртгэл хариуцсан ажилтан болон Эрсдэл хариуцсан ажилтан нь харилцагчийн хүсэлтийг ажлын 1 хоногт багтаан шийдвэрлэж энэ тухай харилцагчид имэйл эсхүл утсаар хариу мэдэгдэнэ.</li>
                </ul>
              </Item>

              <Item title="10. Компанийн хаяг нээхэд ямар бичиг баримтууд шаардлагатай вэ?">
                <ul className="list-disc leading-2 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li className="mb-3">Харилцагчийн зарлагын дээд хэмжээг нэмэгдүүлэн Түнш харилцагч болох хүсэлтийг өөрийн Алтекс дижитал биржид бүртгэлтэй имэйл хаягаас компанийн <a className="underline text-[#0000EE]" href="mailto:contact@altex.mn">contact@altex.mn</a>  хаяг, эсхүл бүртгэлтэй дугаараас албан ёсны телеграм болон фейсбүүк хуудсанд ирүүлнэ.</li>
                  <li className="mb-3">Баталгаажсан харилцагч нь өөрийн хэрэгцээ шаардлагаас хамааран өдөрт хийгдэх зарлагын хэмжээг нэмэгдүүлэн Түнш харилцагч болох хүсэлт гаргасан тохиолдолд Түнш харилцагчийн зарлагын дээд хэмжээний 1%-тай тэнцэхүйц шимтгэлийг 1 удаа төлнө.</li>
                  <li>Харилцагчийн бүртгэл хариуцсан ажилтан болон Эрсдэл хариуцсан ажилтан нь харилцагчийн хүсэлтийг ажлын 1 хоногт багтаан шийдвэрлэж энэ тухай харилцагчид имэйл эсхүл утсаар хариу мэдэгдэнэ. </li>
                </ul>
              </Item>

              <Item title="11. Хувь хүний бүртгэл баталгаажуулахад ямар бичиг баримтууд шаардлагатай вэ?">
                <ul className="list-disc leading-2 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li>Таны хүчинтэй бичиг баримт (Иргэний үнэмлэх эсхүл Гадаад паспорт)</li>
                  <li>Бичиг баримтыг барьж авхуулсан селфи зураг</li>
                  <li>Хаягийн баталгаа
                    <ul className="list-disc px-6 list-inside">
                      <li>Иргэний үнэмлэхийн арын хэсгийн зургийг тод гаргацтай авч илгээснээр хаягийг баталгаажуулах боломжтой. </li>
                      <li>Иргэний үнэмлэхгүй тохиолдолд Монгол улсын иргэн E-mongolia-аас Хаягийн бүртгэлийн лавлагааг авч илгээснээр хаягийг баталгаажуулах боломжтой.</li>
                      <li>Гадаад улсад оршин суудаг бол хэрэглээний болон үйлчилгээний төлбөр төлсөн баримтыг хавсарган илгээнэ. </li>
                    </ul>
                  </li>
                </ul>
                <div className="text-[0.9rem] font-montserrat mt-10">
                  Санамж: Баримт бичиг нь Монгол эсвэл Англи хэл дээр биш бол албан ёсны баталгаат орчуулгаар орчуулан баталгаа гаргасан байхыг анхаарна уу.
                </div>
              </Item>

              <Item title="12. Хувь хүний бүртгэл хэдий хугацаанд баталгаажих вэ?">
                <ul className="list-disc leading-2 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li>Хувь хүний бүртгэл баталгаажуулах хүсэлтийг ажлын 1 өдөрт багтаан шийдвэрлэнэ. </li>
                  <li>Харилцагчийн бүртгэлийн мэргэжилтэн шаардлагатай гэж үзвэл тантай холбогдон нэмэлт тодруулга авч хамтран ажиллах болно. </li>
                </ul>
              </Item>

              <Item title="13. Байгууллагын бүртгэл баталгаажуулахад ямар бичиг баримтууд шаардлагатай вэ?">
                <ul className="list-disc leading-2 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li>CORPORATE STRUCTURE CHART - Компанийн бүтэц зохион байгуулалтын зураглал </li>
                  <li>COMPANY PROOF OF ADDRESS ISSUED - Компанийн төв салбарын хаягийн мэдээлэл</li>
                  <li>CERIFICATE OF INCORPORATION - Байгууллагын улсын бүртгэлийн гэрчилгээ ард, урд талаас авсан зураг</li>
                  <li>MEMORANDIUM AND ARTICLES OF ASSOCIATION - Байгууллагын дүрэм</li>
                  <li>CERTIFICATE OF INCUMBENCY - Тусгай зөвшөөрлийн дагуу үйл ажиллагаа явуулдаг бол үйл ажиллагааны чиглэлийн дагуу тусгай зөвшөөрөл</li>
                  <li>PASSPORT OF ALL DIRECTORS AND SHAREHOLDERS WITH 25% OR MORE SHAREHOLDING - Байгууллагын гүйцэтгэх захирал болон байгууллагын 25-аас дээш хувь эзэмшигчдийн бичиг баримт (Иргэний үнэмлэх эсвэл Гадаад паспорт)</li>
                  <li>PERSONAL PROOF OF ADDRESS OF ALL - Гүйцэтгэх захирал болон хувь эзэмшигчдийн байнгын оршин суугаа хаягийн баталгаа
                    <ul className="list-disc px-6 list-inside list-inside">
                      <li> Иргэний үнэмлэхийн арын хэсгийн зургийг тод гаргацтай авч илгээнэ.</li>
                      <li>Иргэний үнэмлэхгүй тохиолдолд Монгол улсын иргэн E-mongolia-аас Хаягийн бүртгэлийн лавлагааг авч илгээнэ.</li>
                      <li>Гадаад улсад оршин суудаг бол хэрэглээний болон үйлчилгээний төлбөр төлсөн баримтыг хавсарган илгээнэ.</li>
                    </ul>
                  </li>
                  <li>PASSPORT OF THE APPLICANT OR AUTHORIZED PERSONS - Алтекс дижитал бирж дээрх дансыг захиран зарцуулах эрхтэй томилогдсон байгууллагын итгэмжлэгдсэн төлөөлөгчийн бичиг баримт (Иргэний үнэмлэх эсвэл Гадаад пасспорт),</li>
                  <li>PERSONAL PROOF OF ADDRESS - Итгэмжлэгдсэн төлөөлөгчийн байнгын оршин суугаа хаягийн баталгаа.</li>
                </ul>
                <div className="text-[0.7rem] sm:text-[0.9rem] font-montserrat mt-10">
                  <div>Санамж: Дээр дурдсан бичиг баримтууд нь заавал шаардагдах бичиг баримтууд бөгөөд Монгол эсвэл Англи хэл дээр биш бол албан ёсны баталгаат орчуулгаар орчуулан баталгаа гаргасан байхыг анхаарна уу.</div>
                  <div>Хэрэв нэмэлт материал шаардлагатай гэж үзвэл харилцагчийн бүртгэлийн ажилтан холбогдох болно.</div>
                </div>
              </Item>
              <Item title="14. Байгууллагын бүртгэлийн хүсэлт хичнээн хугацааны дараа баталгаажих вэ?">
                <ul className="list-disc leading-2 px-6 list-inside text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li>Байгууллагын хүсэлт шаардлагатай бүх материалыг хавсаргаснаас хойш ажлын 5 хоногт бүрэн шалгагдаж дуусна.</li>
                  <li>Таны бүртгэлийг баталгаажуулах явцад манай харилцагчийн бүртгэлийн мэргэжилтэн таньтай хамтарч ажиллах болно.</li>
                </ul>
              </Item>
            </div>

          )}

          {show === "button2" && (
            <div className="ТӨЛБӨР ТООЦОО">
              <Item title="1. Хэрхэн фиат орлого хийх вэ?">
                <ul className="list-disc leading-6 px-6 text-[0.7rem] sm:text-[0.9rem] font-montserrat overflow-y-auto">
                  <li><span className="font-bold">www.altex.mn</span> хуудсанд өөрийн үүсгэсэн <span className="font-bold">бүртгэлээрээ нэвтэрч орно</span>.</li>
                  <li><span className="font-bold">Данс</span> цэс рүү орж <span className="font-bold">Орлого</span> гэсэн хэсэгт дарна.</li>
                  <li><span className="font-bold">Fiat currencies</span> жагсаалтаас валютаа сонгож, <span className="font-bold">Банкны гүйлгээ</span> товчин дээр дарна. </li>
                  <li>Дансандаа орлого хийх дүнгээ ам.доллараар бичиж оруулан <span className="font-bold">Орлого</span> товчин дээр дарна.</li>
                  <li>
                    <div>Үүссэн <span className="font-bold">Reference code</span>-ийг банкны шилжүүлэг хийхдээ <span className="font-bold">Гүйлгээний утга</span> хэсэгт бичиж оруулна.</div>
                    <div>Ингэснээр таны хүсэлтийг оператор хүлээн авч баталгаажуулахад хялбар байх болно.  </div>
                  </li>
                  <li>
                    <div>Алтекс дижитал бирж - Дансны мэдээлэл</div>
                    <div>Хаан банк: 5111667508</div>
                    <div>Голомт банк: 3005148881</div>
                    <div>ХХБ: 404266849</div>
                    <div>Хүлээн авагчийн нэр: Чойжин Алтекс ХХК</div>
                  </li>
                  <li>Хэрэглэгч та <span className="font-bold">бүртгэлээ баталгаажуулаагүй тохиолдолд</span> Орлого хийх хүсэлт гаргах боломжгүйг анхаарна уу.</li>
                </ul>
                <div className="text-[0.7rem] sm:text-[0.9rem] font-montserrat mt-10">
                  <div>Санамж: Баталгаажсан харилцагч нь фиат орлого хийхдээ Алтекс дижитал биржийн зарласан тухайн өдрийн ам.долларын орлогын ханшаар тооцож төгрөгийн орлого хийнэ. </div>
                  <div>Ханшийн мэдээллийг Харилцагчийн үйлчилгээний 7505-7775 дугаараар болон <a className="underline text-[#0000EE]" href="https://t.me/altexmn">https://t.me/altexmn</a> (Алтекс дижитал биржийн албан ёсны телеграм групп)-ээс авах боломжтой.</div>
                </div>
              </Item>

              <Item title="2. Хэрхэн фиат зарлага хийх вэ?">
                <ul className="list-disc leading-2 px-6 text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li><span className="font-bold">Данс</span> цэс рүү орж <span className="font-bold">Зарлага</span> гэсэн хэсэгт дарна.</li>
                  <li><span className="font-bold">Fiat currencies</span> жагсаалтаас валютаа сонгож, <span className="font-bold">Bank transfer</span> товчин дээр дарна. </li>
                  <li><span className="font-bold">Add bank</span> товчин дээр дарж хүлээн авах банкны мэдээллээ оруулах цонх руу шилжинэ.</li>
                  <li>Гарч ирсэн цонхонд <span className="font-bold">Банкны нэр, Дансны дугаар, Хүлээн авагчийн нэр, Банкны нэрийг</span> дахин бичиж <span className="font-bold">Submit</span> товчин дээр дарна.</li>
                  <li>Утасныхаа <span className="font-bold">Google Authenticator аппликэйшний баталгаажуулах 6 оронтой тоог</span> бичиж оруулснаар таны хүлээн авах банкны мэдээлэл хадгалагдана. (Ингэснээр та дараагийн удаад зарлага хийхдээ банкны мэдээллээ шинээр оруулах шаардлагагүй болно.)</li>
                  <li>Дараах цонхноос хадгалсан <span className="font-bold">банкны мэдээллийг сонгож</span>, дараа нь <span className="font-bold">Continue</span> товчийг дарж үргэлжлүүлнэ.</li>
                  <li>Зарлага хийх дүнгээ бичиж оруулаад <span className="font-bold">Зарлага</span> товчийг дарна. </li>
                  <li>Таны хүсэлтээ баталгаажуулах үүднээс <span className="font-bold">Google Authenticator 6 оронтой тоог дахин бичиж оруулах</span> шаардлагатай.</li>
                  <li>Таны зарлагын хүсэлтийг <span className="font-bold">Даваа-Баасан</span> гарагийн <span className="font-bold">9:00-18:00</span> хооронд хянан шийдвэрлэдэг болохыг анхаарна уу.</li>
                </ul>
              </Item>

              <Item title="3. Арилжааны шимтгэл хэд вэ?">
                <ul className="list-disc leading-2 px-6 text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li>Maker - 0.25%</li>
                  <li>Taker - 0.35%</li>
                </ul>
              </Item>

              <Item title="4. Криптовалютын сүлжээний шимтгэл хэд вэ?">
                <ul className="list-disc leading-2 text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <div>Криптовалютын сүлжээний шимтгэлийн хэмжээ криптовалютаас хамааран өөр өөр тул та дараах холбоосоор орж дэлгэрэнгүй танилцана уу.</div>
                  <a className="underline text-[#0000EE]" href="/fee">https://altex.mn/fee</a>
                </ul>
              </Item>

              <Item title="5. Крипто зарлага хийхэд яагаад заримдаа уддаг вэ?">
                <ul className="list-disc leading-2 text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <div>Харилцагч нь өндөр дүнтэй крипто гүйлгээ хийх хүсэлт гаргасан тохиолдолд харилцагчийн аюулгүй байдлын үүднээс Cold wallet-д байгаа криптог Hot wallet руу шилжүүлэх үйл явц хүлээлдэх тохиолдол гардаг.</div>
                </ul>
              </Item>

              <Item title="6. Флоат данс гэж юу вэ?">
                <div className="font-montserrat text-[0.7rem] sm:text-[0.9rem]">
                  <div>Алтекс дижитал бирж дээр зөвхөн бүртгэлтэй харилцагчид хоорондоо арилжаа хийхээс гадна олон улсын нэгдсэн хөрвөх сантай арилжаа хийж болдог. Тухайн арилжаанд оролцохын тулд Алтекс дижитал бирж нь олон улсын дансанд мөнгө байршуулдаг ба биржийн харилцагчид хөрвөх сангаас токен худалдаж авсан тохиолдолд дансанд байршуулсан мөнгө багасч эсрэгээр бирж дээр токен зарсан тохиолдолд ихсэх зарчмаар арилжаа явагддаг. </div>
                  <div className="py-6">Энэхүү мөнгө байршуулдаг дансыг Флоат гэж нэрлэдэг. </div>
                </div>
              </Item>

              <Item title="7. Гуравдагч этгээд болон хамтран эзэмшигчтэй дансаар гүйлгээ хийх боломжтой юу?">
                <ul className="list-disc leading-2 px-6 text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li>Бид гуравдагч этгээдийн гүйлгээг хүлээн авдаггүй бөгөөд гуравдагч этгээдээс ирсэн бүх мөнгийг буцаадаг.</li>
                  <li>Хамтран эзэмшигчтэй данснаас гүйлгээ хийх тохиолдолд тухайн дансны бүх эзэмшигчид Know-Your-Customer (KYC)/ Know-Your-Business (KYB) баталгаажуулалтыг хийсний үндсэн дээр дансаараа Орлого/Зарлага хийх боломжтой болно.</li>
                </ul>
              </Item>

              <Item title="8. Банкны мэдээллээ хэрхэн нэмэх вэ?">
                <ul className="list-disc leading-2 px-6 text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <li><span className="font-bold">Данс</span> цэс рүү орж <span className="font-bold">Зарлага</span> гэсэн хэсэгт дарна.</li>
                  <li><span className="font-bold">Fiat currencies</span> жагсаалтаас валютаа сонгож, <span className="font-bold">Bank transfer</span> товчин дээр дарна. </li>
                  <li><span className="font-bold">Add bank</span> товчин дээр дарж хүлээн авах банкны мэдээллээ оруулах цонх руу шилжинэ.</li>
                  <li>Гарч ирсэн цонхонд <span className="font-bold">Банкны нэр, Дансны дугаар, Хүлээн авагчийн нэр, Банкны нэрийг</span> дахин бичиж <span className="font-bold">Submit</span> товчин дээр дарна.</li>
                  <li>Утасныхаа <span className="font-bold">Google Authenticator аппликэйшний баталгаажуулах 6 оронтой тоог</span> бичиж оруулснаар таны хүлээн авах банкны мэдээлэл хадгалагдана. (Ингэснээр та дараагийн удаад зарлага хийхдээ банкны мэдээллээ шинээр оруулах шаардлагагүй болно.)</li>
                </ul>

              </Item>

              <Item title="9. Фиат орлогын шимтгэлтэй юу?">
                <div className="text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <div>Байхгүй.</div>
                  <div className="mt-5">Баталгаажсан харилцагч нь фиат орлого хийхдээ Алтекс дижитал биржийн зарласан тухайн өдрийн ам.долларын орлогын ханшаар тооцож төгрөгийн орлого хийнэ. </div>
                  <div>Ханшийн мэдээллийг Харилцагчийн үйлчилгээний 7505-7775 дугаараар болон <a className="underline text-[#0000EE]" href="https://t.me/altexmn">https://t.me/altexmn</a> (Алтекс дижитал биржийн албан ёсны телеграм групп)-ээс авах боломжтой.</div>

                </div>
              </Item>

              <Item title="10. Фиат зарлагын шимтгэлтэй юу?">
                <div className="text-[0.7rem] sm:text-[0.9rem] font-montserrat">
                  <div>Байхгүй.</div>
                  <div className="mt-5">Баталгаажсан харилцагч нь фиат орлого хийхдээ Алтекс дижитал биржийн зарласан тухайн өдрийн ам.долларын орлогын ханшаар тооцож төгрөгийн орлого хийнэ. </div>
                  <div>Ханшийн мэдээллийг Харилцагчийн үйлчилгээний 7505-7775 дугаараар болон <a className="underline text-[#0000EE]" href="https://t.me/altexmn">https://t.me/altexmn</a> (Алтекс дижитал биржийн албан ёсны телеграм групп)-ээс авах боломжтой.</div>
                </div>
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
        className={`cursor-pointer p-[24px] rounded-[8px] bg-[#FFFFFF]  text-[#35363B] px-[18px] overflow-hidden transition-[max-height] duration-500 drop-shadow-[6px_6px_18px_rgba(0,108,255,0.04)] ${expandedItems.includes(title) ? "max-h-[800px] mb-0 rounded-b-[0px] pb-0" : "mb-[24px]"}`}
        onClick={handleClick}
      >
        <div className="flex sm:pt-0 justify-between items-center font-bold">
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
        <div className="transition-transform duration-200 text-[8px] smooth bg-white text-gray-700 mb-4 p-4 rounded-b-md mt-[0px]">
          {children}
        </div>
      )}
    </div>
  );
};

export default FAQ;