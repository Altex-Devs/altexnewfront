import { useState } from "react";


function Howto() {
  const [activeSection, setActiveSection] = useState('КОМПЬЮТЕР');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [activeIndex, setactiveIndex] = useState()
  const [arrowRotation, setArrowRotation] = useState(0);
  const handleSectionClick = (section) => {
    setActiveSection(section);
  };
  const handleVideoTextClick = () => {
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
  };
  const handleTitleClick = (index) => {
    if (activeIndex === index) {
      setactiveIndex('');
    } else {
      setactiveIndex(index);
      setArrowRotation(arrowRotation === 0 ? 180 : 0);
    }
  };
  

  const jsonD = [
    {
      title:'Бүртгэл үүсгэх',
      video:'images/how-to-videos/how-to-register/11.mp4',
      info:[
        {
          desc:'1. www.altex.mn хуудас руу орж "Бүртгүүлэх" товчин дээр дарна.',
          img:'images/desktop/burtgel-uusgeh/Intersection.svg'
        },
        {
          desc:'2. Өөрийн и-мэйл хаяг, утасны дугаараа оруулан бүртгүүлнэ.',
          img:'images/desktop/burtgel-uusgeh/1.svg'
        },
        {
          desc:'3. Таны бүртгүүлсэн и-мэйл хаягт бүртгэл үүссэнийг баталгаажуулах и-мэйл очих бөгөөд баталгаажуулах товчийг дарна.',
          img:'images/desktop/burtgel-uusgeh/2.svg'
        },
        {
          desc:'4. Нууц үг шинээр оруулснаар таньд бүртгэл үүснэ.',
          img:'images/desktop/burtgel-uusgeh/3.svg'
        }
      ]
    },
    {
      title:'2FA хамгаалалтаа идэвхжүүлэх',
      video:'images/how-to-videos/how-to-enable-2fa/1.mp4',
      info:[
        {
          desc:'1. Google Authenticator app-ыг өөрийн утасны Playstore болон Appstore-с татаж авна.',
          img1:'images/android.svg',
          img:'images/desktop/2fa/Allitems-02.svg',
          img2:'images/ios.svg'
        },
        {
          desc:'2. Платформ руу нэвтэрсний дараа Тохиргоо цэс рүү орно.',
          img:'images/desktop/2fa/2.svg'
        },
        {
          desc:'3. Security хэсэгт байрлах Google Authenticator Add new дээр дарна.',
          img:'images/desktop/2fa/3.svg'
        },
        {
          desc:'4. Үүссэн QR кодыг өөрийн утасны Google Authenticator апп руу нэвтрэн орж Scan code товчийг дарснаар уншуулж идэвхжүүлнэ.',
          img:'images/desktop/2fa/4.svg'
        },
        {
          desc:'5. Google Authenticator app дээр гарч ирэх 6 оронтой кодыг платформ дээрээ оруулснаар таны холболт амжилттай хийгдэнэ. Үүний дараа та бүртгэлээ баталгаажуулснаар арилжаагаа эхлэх боломжтой болно :)',
          img:'images/desktop/2fa/5.svg'
        }
      ]
    },
    {
      title:'Бүртгэлээ баталгаажуулах',
      video:'images/how-to-videos/how-to-verify/1.mp4',
      info:[
        {
          desc:'1. Платформ руу нэвтэрсний дараа Тохиргоо цэс рүү орно.',
          img:'images/desktop/burtgel-batalgaajuulah/1.svg'
        },
        {
          desc:'2. Verify хэсэгт байрлах Verify now товчин дээр дарна.',
          img:'images/desktop/burtgel-batalgaajuulah/2.svg'        },
        {
          desc:'3. Гарч ирсэн сонголтоос Хувь хүн буюу Personal сонголтыг сонгоно.',
          img:'images/desktop/burtgel-batalgaajuulah/3.svg'        },
        {
          desc:'4. Бүртгэл баталгаажуулалт 4 алхмаас бүрдэх бөгөөд Үргэлжүүлэх товчийг дарж Алхам 1 рүү шилжинэ.',
          img:'images/desktop/burtgel-batalgaajuulah/4.svg'        },
        {
          desc:'5. Бичиг баримтын төрлөөс Иргэний үнэмлэх эсвэл Гадаад паспортын аль нэгийг сонгоно. Иргэний үнэмлэх сонгосон бол үнэмлэхний урд болон ард талын зургийг оруулаад Үргэлжүүлэх товчийг дарна.',
          img:'images/desktop/burtgel-batalgaajuulah/5.svg' 
         },
        {
          desc:'6. Гадаад паспорт сонгосон бол хувийн мэдээлэл бүхий хуудсын зургийг оруулахаас гадна e-mongolia-аас хаягийн бүртгэлийн лавлагааг авч оруулах шаардлагатайг анхаарна уу.',
          img:'images/desktop/burtgel-batalgaajuulah/6.svg'
        },
        {
          desc:'7. Алхам 2 дээр камерыг нээж дэлгэцний дээр гарах notification цонхонд allow товчийг дарснаар таны видео сельфиг хийж эхэлнэ.',
          img:'images/desktop/burtgel-batalgaajuulah/7.svg'
        },
        {
          desc:'8. Дэлгэцэнд гарах зааврын дагуу дараах 4 үйлдлийг хийж гүйцэтгээд Үргэлжлүүлэх товчийг дарна.',
          img:'images/desktop/burtgel-batalgaajuulah/8.svg'
        },
        {
          desc:'9. Алхам 3 нь хувийн мэдээллийн хэсэг бөгөөд ажил эрхлэлт, холбоо барих болон хаягийн мэдээллийг бичиж оруулаад Үргэлжлүүлэх товчийг дарна уу.',
          img:'images/desktop/burtgel-batalgaajuulah/9.svg'
        },
        {
          desc:'10. Дэлгэцэнд гарах зааврын дагуу дараах 4 үйлдлийг хийж гүйцэтгээд Илгээх товчийг дарна.',
          img:'images/desktop/burtgel-batalgaajuulah/10.svg'
        },
        {
          desc:'11. Таны илгээсэн мэдээллийг бид нягталж үзээд баталгаажуулалт амжилттай болсон эсэх мэдээллийг таны бүртгэлтэй имэйлээр илгээх болно.',
          img:'images/desktop/burtgel-batalgaajuulah/11.svg'
        },
        {
          desc:'12. Бүртгэл баталгаажсанаар та арилжаагаа эхлэхэд ердөө 1 алхам үлдэх бөгөөд дансаа цэнэглээд арилжаагаа эхлүүлээрэй. Амжилт хүсье',
          img:'images/desktop/burtgel-batalgaajuulah/12.svg'
        }
      ]
    },
    {
      title:'Дансаа цэнэглэх',
      video:'images/how-to-videos/deposit/1.mp4',
      info:[
        {
          desc:'1. Данс цэс рүү орж Орлого гэсэн хэсэгт дарна.',
          img:'images/desktop/dansaa-tsenegleh/1.svg'
        },
        {
          desc:'2. Fiat currencies жагсаалтаас валютаа сонгож, Банкны гүйлгээ товчин дээр дарна.',
          img:'images/desktop/dansaa-tsenegleh/2.svg'
        },
        {
          desc:'3. Дансандаа орлого хийх дүнгээ ам.доллараар бичиж оруулан Орлого товчин дээр дарна.',
          img:'images/desktop/dansaa-tsenegleh/3.svg'
        },
        {
          desc:'4. Үүссан Reference code-ыг банкны шилжүүлэг хийхдээ Гүйлгээний утга хэсэгт бичиж оруулна. Ингэснээр таны хүсэлтийг оператор хүлээн авч баталгаажуулахад хялбар байх болно.',
          img:'images/desktop/dansaa-tsenegleh/4.svg'
        },
        {
          dans:'АЛТЕКС Дижитал Биржийн дансны мэдээлэл, Хүлээн авагчийн нэр: Чойжин Алтекс ХХК',
          imgDans1:'images/mobile/dansaa-tsenegleh/7.png',
          imgDans2:'images/mobile/dansaa-tsenegleh/8.png',
          imgDans3:'images/mobile/dansaa-tsenegleh/9.png',
          alert:'Хэрэглэгч та бүртгэлээ баталгаажуулаагүй тохиолдолд Орлого хийх хүсэлт гаргах боломжгүйг анхаарна уу.'
        }
      ]
    },
    {
      title:'Мөнгөө татаж авах',
      video:'images/how-to-videos/withdraw/111.mp4',
      info:[
        {
          desc:'1. Данс цэс рүү орж Зарлага гэсэн хэсэгт дарна.',
          img:'images/desktop/withdraw/1.svg'
        },
        {
          desc:'2. Fiat currencies жагсаалтаас валютаа сонгож, Bank transfer товчин дээр дарна.',
          img:'images/desktop/withdraw/2.svg'
        },
        {
          desc:'3. Add bank дээр дарж хүлээн авах банкны мэдээллээ оруулах цонх руу шилжинэ.',
          img:'images/desktop/withdraw/3.svg'
        },
        {
          desc:'4. Гарч ирсэн цонхонд Банкны нэр, Дансны дугаар, Хүлээн авагчийн нэр, Банкны нэрийг дахин бичиж Submit товчин дээр дарна.',
          img:'images/desktop/withdraw/4.svg'
        },
        {
          desc:'5. Утасныхаа Google Authenticator аппликэйшний баталгаажуулах 6 оронтой тоог бичиж оруулснаар таны хүлээн авах банкны мэдээлэл хадгалагдана. (Ингэснээр та дараагийн удаад зарлага хийхдээ банкны мэдээллээ шинээр оруулах шаардлагагүй болно.)',
          img:'images/desktop/withdraw/5.svg'
        },
        {
          desc:'6. Дараах цонхноос хадгалсан банкны мэдээллийг сонгоно.',
          img:'images/desktop/withdraw/6.svg'
        },
        {
          desc:'7. Continue товчийг дарж үргэлжүүлнэ.',
          img:'images/desktop/withdraw/7.svg'
        },
        {
          desc:'8. Зарлага хийх дүнгээ бичиж оруулаад Зарлага товчийг дарна.',
          img:'images/desktop/withdraw/8.svg'
        },
        {
          desc:'9. Таны хүсэлтийг баталгаажуулах үүднээс Google Authenticator 6 оронтой тоог дахин бичиж оруулах шаардлагатай.',
          img:'images/desktop/withdraw/9.svg'
        }
      ]
    }
  ]

  const jsonM = [
    {
      title:'Бүртгэл үүсгэх',
      video:'images/how-to-videos/how-to-register/2.mp4',
      info:[
        {
          desc:'1. www.altex.mn хуудас руу орж баруун дээд товчин дээр дарна.',
          img:'images/mobile/burtgel-uusgeh/1.svg'
        },
        {
          desc:'2. "Бүртгүүлэх" товчин дээр дарна.',
          img:'images/mobile/burtgel-uusgeh/2.svg'
        },
        {
          desc:'3. Өөрийн и-мэйл хаяг, утасны дугаараа оруулан бүртгүүлнэ.',
          img:'images/mobile/burtgel-uusgeh/3.svg'
        },
        {
          desc:'4. Таны бүртгүүлсэн и-мэйл хаягт бүртгэл үүссэнийг баталгаажуулах и-мэйл очих бөгөөд баталгаажуулах товчийг дарна.',
          img:'images/mobile/burtgel-uusgeh/4.svg'
        },
        {
          desc:'5. Нууц үг шинээр оруулснаар таньд бүртгэл үүснэ.',
          img:'images/mobile/burtgel-uusgeh/5.svg'
        }
      ]
    },
    {
      title:'2FA хамгаалалтаа идэвхжүүлэх',
      video:'images/how-to-videos/how-to-enable-2fa/2.mp4',
      info:[
        {
          desc:'1. Google Authenticator app-ыг өөрийн утасны Playstore болон Appstore-с татаж авна.',
          img:'images/desktop/2fa/Allitems-02.svg',
          img1:'images/android.svg',
          img2:'images/ios.svg'
        },
        {
          desc:'2. Платформ руу нэвтэрсний дараа Тохиргоо цэс рүү орно.',
          img:'images/mobile/2fa/3.svg'
        },
        {
          desc:'3. Security хэсэгт байрлах Google Authenticator Add new дээр дарна.',
          img:'images/mobile/2fa/4.svg'
        },
        {
          desc:'4. Үүссэн Secret key кодыг өөрийн утасны Google Authenticator апп руу нэвтрэн орж Enter a setup key товчийг дарж хуулж идэвхжүүлнэ.',
          img:'images/mobile/2fa/5.svg'
        },
        {
          desc:'5. Google Authenticator app дээр гарч ирэх 6 оронтой кодыг платформ дээрээ оруулснаар таны холболт амжилттай хийгдэнэ. Үүний дараа та бүртгэлээ баталгаажуулснаар арилжаагаа эхлэх боломжтой болно :)',
          img:'images/mobile/2fa/6.svg'
        }
      ]
    },
    {
      title:'Бүртгэлээ баталгаажуулах',
      video:'images/how-to-videos/how-to-verify/2.mp4',
      info:[
        {
          desc:'1. Платформ руу нэвтэрсний дараа Тохиргоо цэс рүү орно.',
          img:'images/mobile/burtgel-batalgaajulah/1.svg'
        },
        {
          desc:'2. Verify хэсэгт байрлах Verify now товчин дээр дарна.',
          img:'images/mobile/burtgel-batalgaajulah/2.svg'        },
        {
          desc:'3. Гарч ирсэн сонголтоос Хувь хүн буюу Personal сонголтыг сонгоно.',
          img:'images/mobile/burtgel-batalgaajulah/3.svg'        },
        {
          desc:'4. Бүртгэл баталгаажуулалт 4 алхмаас бүрдэх бөгөөд Үргэлжүүлэх товчийг дарж Алхам 1 рүү шилжинэ.',
          img:'images/mobile/burtgel-batalgaajulah/4.svg'        },
        {
          desc:'5. Бичиг баримтын төрлөөс Иргэний үнэмлэх эсвэл Гадаад паспортын аль нэгийг сонгоно. Иргэний үнэмлэх сонгосон бол үнэмлэхний урд болон ард талын зургийг оруулаад Үргэлжүүлэх товчийг дарна.',
          img:'images/mobile/burtgel-batalgaajulah/5.svg' 
         },
        {
          desc:'6. Гадаад паспорт сонгосон бол хувийн мэдээлэл бүхий хуудсын зургийг оруулахаас гадна e-mongolia-аас хаягийн бүртгэлийн лавлагааг авч оруулах шаардлагатайг анхаарна уу.',
          img:'images/mobile/burtgel-batalgaajulah/6.svg'
        },
        {
          desc:'7. Алхам 2 дээр камерыг нээж дэлгэцний дээр гарах notification цонхонд allow товчийг дарснаар таны видео сельфиг хийж эхэлнэ.',
          img:'images/mobile/burtgel-batalgaajulah/7.svg'
        },
        {
          desc:'8. Дэлгэцэнд гарах зааврын дагуу дараах 4 үйлдлийг хийж гүйцэтгээд Үргэлжлүүлэх товчийг дарна.',
          img:'images/mobile/burtgel-batalgaajulah/8.svg'
        },
        {
          desc:'9. Алхам 3 нь хувийн мэдээллийн хэсэг бөгөөд ажил эрхлэлт, холбоо барих болон хаягийн мэдээллийг бичиж оруулаад Үргэлжлүүлэх товчийг дарна уу.',
          img:'images/mobile/burtgel-batalgaajulah/9.svg'
        },
        {
          desc:'10. Дэлгэцэнд гарах зааврын дагуу дараах 4 үйлдлийг хийж гүйцэтгээд Үргэлжүүлэх товчийг дарна.',
          img:'images/mobile/burtgel-batalgaajulah/10.svg'
        },
        {
          desc:'11. Таны илгээсэн мэдээллийг бид нягталж үзээд баталгаажуулалт амжилттай болсон эсэх мэдээллийг таны бүртгэлтэй имэйлээр илгээх болно.',
          img:'images/mobile/burtgel-batalgaajulah/11.svg'
        },
        {
          desc:'12. Бүртгэл баталгаажсанаар та арилжаагаа эхлэхэд ердөө 1 алхам үлдэх бөгөөд дансаа цэнэглээд арилжаагаа эхлүүлээрэй. Амжилт хүсье',
          img:'images/mobile/burtgel-batalgaajulah/12.svg'
        }
      ]
    },
    {
      title:'Дансаа цэнэглэх',
      video:'images/how-to-videos/deposit/2.mp4',
      info:[
        {
          desc:'1. Данс цэс рүү орно.',
          img:'images/mobile/dansaa-tsenegleh/1.svg'
        },
        {
          desc:'2. Орлог хэсэг дээр дарна.',
          img:'images/mobile/dansaa-tsenegleh/2.svg'
        },
        {
          desc:'3. Fiat currencies жагсаалтаас валютаа сонгоно.',
          img:'images/mobile/dansaa-tsenegleh/3.svg'
        },
        {
          desc:'4. Банкны гүйлгээ товчин дээр дарна.',
          img:'images/mobile/dansaa-tsenegleh/4.svg'
        },
        {
          desc:'5. Дансандаа орлого хийх дүнгээ ам.доллараар бичиж оруулан Орлого товчин дээр дарна.',
          img:'images/mobile/dansaa-tsenegleh/5.svg'
        },
        {
          desc:'6. Үүссан Reference code-ыг банкны шилжүүлэг хийхдээ Гүйлгээний утга хэсэгт бичиж оруулна. Ингэснээр таны хүсэлтийг оператор хүлээн авч баталгаажуулахад хялбар байх болно.',
          img:'images/mobile/dansaa-tsenegleh/6.svg'
        },
        {
          dans:'АЛТЕКС Дижитал Биржийн дансны мэдээлэл, Хүлээн авагчийн нэр: Чойжин Алтекс ХХК',
          imgDans1:'images/mobile/dansaa-tsenegleh/7.png',
          imgDans2:'images/mobile/dansaa-tsenegleh/8.png',
          imgDans3:'images/mobile/dansaa-tsenegleh/9.png',
          alert:'Хэрэглэгч та бүртгэлээ баталгаажуулаагүй тохиолдолд Орлого хийх хүсэлт гаргах боломжгүйг анхаарна уу.'
        }
      ]
    },
    {
      title:'Мөнгөө татаж авах',
      video:'images/how-to-videos/withdraw/2.mp4',
      info:[
        {
          desc:'1. Данс цэс рүү орно.',
          img:'images/mobile/munguu-tataj-avah/1.svg'
        },
        {
          desc:'2. Зарлага гэсэн хэсэгт дарна.',
          img:'images/mobile/munguu-tataj-avah/2.svg'
        },
        {
          desc:'3. Fiat currencies жагсаалтаас валютаа сонгоно.',
          img:'images/mobile/munguu-tataj-avah/3.svg'
        },
        {
          desc:'4. Bank transfer товчин дээр дарна.',
          img:'images/mobile/munguu-tataj-avah/4.svg'
        },
        {
          desc:'5. Add bank дээр дарж хүлээн авах банкны мэдээллээ оруулах цонх руу шилжинэ.',
          img:'images/mobile/munguu-tataj-avah/5.svg'
        },
        {
          desc:'6. Гарч ирсэн цонхонд Банкны нэр, Дансны дугаар, Хүлээн авагчийн нэр, Банкны нэрийг дахин бичиж Submit товчин дээр дарна.',
          img:'images/mobile/munguu-tataj-avah/6.svg'
        },
        {
          desc:'7. Утасныхаа Google Authenticator аппликэйшний баталгаажуулах 6 оронтой тоог бичиж оруулснаар таны хүлээн авах банкны мэдээлэл хадгалагдана. (Ингэснээр та дараагийн удаад зарлага хийхдээ банкны мэдээллээ шинээр оруулах шаардлагагүй болно.)',
          img:'images/mobile/munguu-tataj-avah/7.svg'
        },
        {
          desc:'8. Дараах цонхноос хадгалсан банкны мэдээллийг сонгоно.',
          img:'images/mobile/munguu-tataj-avah/8.svg'
        },
        {
          desc:'9. Continue товчийг дарж үргэлжүүлнэ.',
          img:'images/mobile/munguu-tataj-avah/9.svg'
        },
        {
          desc:'10. Зарлага хийх дүнгээ бичиж оруулаад Зарлага товчийг дарна.',
          img:'images/mobile/munguu-tataj-avah/10.svg'
        },
        {
          desc:'11. Таны хүсэлтийг баталгаажуулах үүднээс Google Authenticator 6 оронтой тоог дахин бичиж оруулах шаардлагатай.',
          img:'images/mobile/munguu-tataj-avah/11.svg'
        }
      ]
    }
  ]

  return (
    <>
      <div className="max-w-[800px] mx-auto mt-[80px] mb-[240px] transition-all delay-150 duration-300 ease-in-out">
        <div className="flex w-full pb-[16px] border-b-[1px] border-b-[#1E274A] text-[18px] font-medium gap-[40px] mb-[24px]">
        
        <div
            className={`cursor-pointer relative flex ${activeSection === 'КОМПЬЮТЕР' ? 'text-[##626880]' : 'text-[#626880]'}`}
            onClick={() => handleSectionClick('КОМПЬЮТЕР')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="mt-1 mr-[8px]" height="20px" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z" fill={activeSection === 'КОМПЬЮТЕР' ? '#fff' : '#626880'}/>
          </svg>
            КОМПЬЮТЕР
            {activeSection === 'КОМПЬЮТЕР' && (
              <div className="absolute h-[2px] w-full bg-[#13A9FD] bottom-[-17px]"></div>
            )}
          </div>
          <div
            className={`cursor-pointer relative flex ${activeSection === 'ГАР УТАС' ? 'text-[##626880]' : 'text-[#626880]'}`}
            onClick={() => handleSectionClick('ГАР УТАС')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="mt-1 mr-[8px]" height="20px" viewBox="0 0 24 24" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M14.795 2h-5.59c-1.115 0-1.519.116-1.926.334a2.272 2.272 0 0 0-.945.945C6.116 3.686 6 4.09 6 5.205v13.59c0 1.114.116 1.519.334 1.926.218.407.538.727.945.945.407.218.811.334 1.926.334h5.59c1.114 0 1.519-.116 1.926-.334.407-.218.727-.538.945-.945.218-.407.334-.811.334-1.926V5.205c0-1.115-.116-1.519-.334-1.926a2.272 2.272 0 0 0-.945-.945C16.314 2.116 15.91 2 14.795 2zM8 17.995V6.005h8v11.99H8z" fill={activeSection === 'ГАР УТАС' ? '#fff' : '#626880'}/>
            </svg>
            ГАР УТАС
            {activeSection === 'ГАР УТАС' && (
              <div className="absolute h-[2px] w-full bg-[#13A9FD] bottom-[-17px]"></div>
            )}
          </div>
        </div>

        <div className="rounded-[8px] mt-[84px] text-[16px] bg-[#101C47] text-[#E6E7EB]  pt-0">
        
        {activeSection === 'КОМПЬЮТЕР' && (
          <div className="max-w-[800px] mx-auto mt-[80px] mb-[240px]">
          {jsonD.map((item, index) => (
          <div key={index} className="rounded-[8px] bg-[#101C47] text-[#E6E7EB] p-[24px] pt-0 ">
            <div onClick={() => handleTitleClick(index)} className="cursor-pointer flex pb-[17px] pt-[24px] justify-between border-b-[1px] border-b-[#283359]">
            <div className={`text-[16px] ${activeIndex === index ? 'text-[#13A9FD]' : 'text-[#E6E7EB]'}`}>{item.title}</div>
              <div className="w-[24px] h-[24px] rounded-[2px] bg-[rgba(0,108,255,0.16)] transform transition-transform duration-300" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-max h-max ml-[5px]"  xmlnsXxlink="http://www.w3.org/1999/xlink" width="14px" height="20px" viewBox="0 -4.5 20 20" version="1.1">
                      <g id="Page-1"  stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6680.000000)" fill="#006CFF">
                              <g id="icons" transform="translate(56.000000, 160.000000)">
                                  <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" id="arrow_down-[#338]">
                                </path>
                              </g>
                          </g>
                      </g>
                  </svg>
                </div>
            </div>
            {activeIndex === index && (
            <div className="flex float-right h-max w-[170px] mt-[24px]">
              <div className="cursor-pointer text-[#fff] font-bold border rounded border-[#006CFF] text-[#13A9FD]" onClick={handleVideoTextClick}>
                <div className="py-[7px] text-[9px] flex pl-[12px] pr-[16px] items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full mr-[10px]" width="30px" height="30px" viewBox="0 0 192 192" fill="none" strokeWidth="12">
                    <path stroke="#006CFF29" strokeLinecap="round" strokeLinejoin="round" d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Z" />
                    <path stroke="#006CFF" strokeLinecap="round" strokeLinejoin="round" d="M80 124V68l48 28-48 28Z" />
                  </svg>
                  Видео заавар үзэх
                </div>
              </div>
              <div>
                {showVideoModal && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-75"></div>
                    <div className="relative z-10">
                      <video className="h-[480px] w-[640px] rounded-lg" controls>
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <button className="absolute top-4 right-4 text-white" onClick={closeVideoModal}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                        <path id="Union_32" data-name="Union 32" d="M14.593,16.573l-5.61-5.61-5.61,5.61a1.4,1.4,0,0,1-1.979-1.979L7,8.984l-5.61-5.61a1.4,1.4,0,0,1,1.98-1.981L8.984,7l5.61-5.61a1.4,1.4,0,0,1,1.979,1.979l-5.61,5.61,5.611,5.61a1.4,1.4,0,0,1-1.981,1.981Z" transform="translate(-0.983 -0.983)" fill="#fff"/>
                      </svg>
                      </button>
                    </div>
                  </div>
                )}
          </div>
            </div>
            )}
            {
              activeIndex === index && (
                <div className="max-w-[800px] mx-auto mt-[100px] mb-[22px]">
                  {item.info.map((data, innerIndex) => (
                    <div className="mb-[24px]" key={innerIndex}>
                      <div className="mb-[16px] ml-[30px] mr-[120px]">{data.desc}</div>
                      <div className="w-[384px] md:max-w-2xl h-[max] mb-[24px] flex mx-auto">
                        {data.img && <img src={data.img} alt="Burtgel uusgeh" />}
                        {data.img1 && <a  className="inline-block ml-[10px]" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&pli=1"><img className="inline-block mt-4" src={data.img1} alt="Burtgel uusgeh" /></a>}
                        {data.img2 && <a  className="inline-block ml-[10px]" href="https://apps.apple.com/us/app/google-authenticator/id388497605"><img className="mt-4" src={data.img2} alt="Burtgel uusgeh" /></a>}
                      </div>
                      {data.dans && <div className="text-[14px] ml-[3rem] mb-[16px] text-[#E7E8ED]">{data.dans}</div>}
                      <div className="flex gap-[24px] ml-[3rem]">
                        
                        {data.imgDans1 && <img className="w-[212px] h-[98px]" src={data.imgDans1} alt="Burtgel uusgeh" />}
                        {data.imgDans2 && <img className="w-[212px] h-[98px]" src={data.imgDans2} alt="Burtgel uusgeh" />}
                        {data.imgDans3 && <img className="w-[212px] h-[98px]" src={data.imgDans3} alt="Burtgel uusgeh" />}
                        </div>
                        {data.alert && <div className="flex items-center px-2 py-[16px] mx-8 text-[12px] text-[#E7E8ED] w-max mt-[40px]  bg-[#0E1940]">
                        
                        {data.alert && <svg className=" mr-[3px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 48 48">
                          <g id="Group_7638" data-name="Group 7638" transform="translate(-459 -256)">
                            <rect id="Rectangle_5298" data-name="Rectangle 5298" width="48" height="48" rx="24" transform="translate(459 256)" fill="#fff"/>
                            <rect id="Rectangle_5564" data-name="Rectangle 5564" width="4.849" height="17.092" rx="2.424" transform="translate(485.424 294.546) rotate(180)" fill="#000"/>
                            <rect id="Rectangle_5565" data-name="Rectangle 5565" width="4.849" height="5.092" rx="2.424" transform="translate(485.424 271.546) rotate(180)" fill="#000"/>
                          </g>
                        </svg>}
                        {data.alert && <div className="pr-[10px]">{data.alert}</div>}
                        

                        </div>}
                    </div>
                  ))}
                </div>
              )
            }
            </div>
              ))}
            </div>
          )}
          

        {activeSection === 'ГАР УТАС' && (
            <div className="max-w-[800px] mx-auto mt-[80px] mb-[240px]">
            {jsonM.map((item, index) => (
              <div key={index} className="rounded-[8px] bg-[#101C47] text-[#E6E7EB] p-[24px] pt-0 ">
              <div onClick={() => handleTitleClick(index)} className="cursor-pointer flex pb-[17px] pt-[24px] justify-between border-b-[1px] border-b-[#283359]">
                <div className={`text-[16px] ${activeIndex === index ? 'text-[#13A9FD]' : 'text-[#E6E7EB]'}`}>{item.title}</div>
                <div className="w-[24px] h-[24px] rounded-[2px] bg-[rgba(0,108,255,0.16)] transform transition-transform duration-300" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-max h-max ml-[5px]" xmlnsXxlink="http://www.w3.org/1999/xlink" width="14px" height="20px" viewBox="0 -4.5 20 20" version="1.1">
                      <title>arrow_down [#338]</title>
                      <desc>Created with Sketch.</desc>
                      <defs>
                    </defs>
                      <g id="Page-1"  stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="Dribbble-Light-Preview" transform="translate(-220.000000, -6680.000000)" fill="#006CFF">
                              <g id="icons" transform="translate(56.000000, 160.000000)">
                                  <path d="M164.292308,6524.36583 L164.292308,6524.36583 C163.902564,6524.77071 163.902564,6525.42619 164.292308,6525.83004 L172.555873,6534.39267 C173.33636,6535.20244 174.602528,6535.20244 175.383014,6534.39267 L183.70754,6525.76791 C184.093286,6525.36716 184.098283,6524.71997 183.717533,6524.31405 C183.328789,6523.89985 182.68821,6523.89467 182.29347,6524.30266 L174.676479,6532.19636 C174.285736,6532.60124 173.653152,6532.60124 173.262409,6532.19636 L165.705379,6524.36583 C165.315635,6523.96094 164.683051,6523.96094 164.292308,6524.36583" id="arrow_down-[#338]">
                                </path>
                              </g>
                          </g>
                      </g>
                  </svg>
                </div>
              </div>
              {activeIndex === index && (
              <div className="flex float-right h-max w-[170px] mt-[24px]">
                <div className="cursor-pointer text-[#fff] font-bold border rounded border-[#006CFF] text-[#13A9FD]" onClick={handleVideoTextClick}>
                  <div className="py-[7px] text-[9px] flex pl-[12px] pr-[16px] items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full mr-[10px]" width="30px" height="30px" viewBox="0 0 192 192" fill="none" strokeWidth="12">
                      <path stroke="#006CFF29" strokeLinecap="round" strokeLinejoin="round" d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Z" />
                      <path stroke="#006CFF" strokeLinecap="round" strokeLinejoin="round" d="M80 124V68l48 28-48 28Z" />
                    </svg>
                    Видео заавар үзэх
                  </div>
                </div>
                <div>
                  {showVideoModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="absolute inset-0 bg-black opacity-75"></div>
                      <div className="relative z-10">
                        <video className="h-[480px] w-[640px] rounded-lg" controls autoPlay>
                          <source src={item.video} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                        <button className="absolute top-4 right-4 text-white" onClick={closeVideoModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                          <path id="Union_32" data-name="Union 32" d="M14.593,16.573l-5.61-5.61-5.61,5.61a1.4,1.4,0,0,1-1.979-1.979L7,8.984l-5.61-5.61a1.4,1.4,0,0,1,1.98-1.981L8.984,7l5.61-5.61a1.4,1.4,0,0,1,1.979,1.979l-5.61,5.61,5.611,5.61a1.4,1.4,0,0,1-1.981,1.981Z" transform="translate(-0.983 -0.983)" fill="#fff"/>
                        </svg>
                        </button>
                      </div>
                    </div>
                  )}
            </div>
              </div>
              )}
  
            {
              activeIndex === index && (
                <div className="max-w-[800px] mx-auto mt-[100px] mb-[240px]">
                  {item.info.map((data, innerIndex) => (
                    <div className="mb-[24px]" key={innerIndex}>
                      <div className="mb-[16px] ml-[30px] mr-[120px]">{data.desc}</div>
                      <div className="w-[384px] h-[max] mb-[24px] flex items-center mx-auto">
                        {data.img && <img className="inline-block mx-auto" src={data.img} alt="Burtgel uusgeh" />}
                        {data.img1 && <a  className="inline-block ml-[10px] mb-[20px] mx-auto" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&pli=1"><img className="inline-block mt-4" src={data.img1} alt="Burtgel uusgeh" /></a>}
                        {data.img2 && <a  className="inline-block ml-[10px] mb-[20px]" href="https://apps.apple.com/us/app/google-authenticator/id388497605"><img className="mt-4" src={data.img2} alt="Burtgel uusgeh" /></a>}
                        
                      </div>
                      {data.dans && <div className="text-[14px] ml-[3rem] mb-[16px] text-[#E7E8ED]">{data.dans}</div>}
                      <div className="flex gap-[24px] ml-[3rem]">
                        
                        {data.imgDans1 && <img className="w-[212px] h-[98px]" src={data.imgDans1} alt="Burtgel uusgeh" />}
                        {data.imgDans2 && <img className="w-[212px] h-[98px]" src={data.imgDans2} alt="Burtgel uusgeh" />}
                        {data.imgDans3 && <img className="w-[212px] h-[98px]" src={data.imgDans3} alt="Burtgel uusgeh" />}
                        </div>
                        {data.alert && <div className="flex text-[12px] text-[#E7E8ED] w-max mt-[40px] ml-[3rem] items-center py-[16px] bg-[#0E1940]">
                        {data.alert && <svg className="mr-[3px] ml-[2px]" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 48 48">
                          <g id="Group_7638" data-name="Group 7638" transform="translate(-459 -256)">
                            <rect id="Rectangle_5298" data-name="Rectangle 5298" width="48" height="48" rx="24" transform="translate(459 256)" fill="#fff"/>
                            <rect id="Rectangle_5564" data-name="Rectangle 5564" width="4.849" height="17.092" rx="2.424" transform="translate(485.424 294.546) rotate(180)" fill="#000"/>
                            <rect id="Rectangle_5565" data-name="Rectangle 5565" width="4.849" height="5.092" rx="2.424" transform="translate(485.424 271.546) rotate(180)" fill="#000"/>
                          </g>
                        </svg>}
                        {data.alert && <div className="">{data.alert}</div>}

                        </div>}
                    </div>
                    
                  ))}
                </div>
              )
            }
              </div>
            ))}
          </div>
        )}
        
        </div>
      </div>
    </>
  );
}

export default Howto;