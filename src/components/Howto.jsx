import { useState } from "react";
import { FormattedMessage } from "react-intl";

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
    window.scrollTo({
      top: 100,
      behavior: 'smooth',
    })
    if (activeIndex === index) {
      setactiveIndex('');
    } else {
      setactiveIndex(index);
      setArrowRotation(arrowRotation === 0 ? 180 : 0);
    }
  };
  
  const jsonD = [
    {
      title:<FormattedMessage id="howto_Registration"/>,
      video:'w4NH8b8FXrg',
      info:[
        {
          desc:<FormattedMessage id="desktop_reg_1"/>,
          img:'images/desktop/burtgel-uusgeh/Intersection.png'
        },
        {
          desc:<FormattedMessage id="desktop_reg_2"/>,
          img:'images/desktop/burtgel-uusgeh/2.png'
        },
        {
          desc:<FormattedMessage id="desktop_reg_3"/>,
          img:'images/desktop/burtgel-uusgeh/3.png'
        },
        {
          desc:<FormattedMessage id="desktop_reg_4"/>,
          img:'images/desktop/burtgel-uusgeh/4.png'
        }
      ]
    },
    {
      title:<FormattedMessage id="howto_2fa"/>,
      video:'O50k6SlV34M',
      info:[
        {
          desc:<FormattedMessage id="desktop_2fa_1"/>,
          img1:'images/android.svg',
          imgR:'images/desktop/2fa/Allitems-02.svg',
          img2:'images/ios.svg'
        },
        {
          desc:<FormattedMessage id="desktop_2fa_2"/>,
          img:'images/desktop/2fa/1.png'
        },
        {
          desc:<FormattedMessage id="desktop_2fa_3"/>,
          img:'images/desktop/2fa/2.png'
        },
        {
          desc:<FormattedMessage id="desktop_2fa_4"/>,
          img:'images/desktop/2fa/3.png'
        },
        {
          desc:<FormattedMessage id="desktop_2fa_5"/>,
          img:'images/desktop/2fa/4.png'
        }
      ]
    },
    {
      title:<FormattedMessage id="howto_verify"/>,
      video:'naolvuvD3yg',
      info:[
        {
          desc:<FormattedMessage id="desktop_ver_1"/>,
          img:'images/desktop/burtgel-batalgaajuulah/1.png'
        },
        {
          desc:<FormattedMessage id="desktop_ver_2"/>,
          img:'images/desktop/burtgel-batalgaajuulah/2.png'        },
        {
          desc:<FormattedMessage id="desktop_ver_3"/>,
          img:'images/desktop/burtgel-batalgaajuulah/3.png'        },
        {
          desc:<FormattedMessage id="desktop_ver_4"/>,
          img:'images/desktop/burtgel-batalgaajuulah/4.png'        },
        {
          desc:<FormattedMessage id="desktop_ver_5"/>,
          img:'images/desktop/burtgel-batalgaajuulah/5.png' 
         },
        {
          desc:<FormattedMessage id="desktop_ver_6"/>,
          img:'images/desktop/burtgel-batalgaajuulah/6.png'
        },
        {
          desc:<FormattedMessage id="desktop_ver_7"/>,
          img:'images/desktop/burtgel-batalgaajuulah/7.png'
        },
        {
          desc:<FormattedMessage id="desktop_ver_8"/>,
          img:'images/desktop/burtgel-batalgaajuulah/8.png'
        },
        {
          desc:<FormattedMessage id="desktop_ver_9"/>,
          img:'images/desktop/burtgel-batalgaajuulah/9.png'
        },
        {
          desc:<FormattedMessage id="desktop_ver_10"/>,
          img:'images/desktop/burtgel-batalgaajuulah/10.png'
        },
        {
          desc:<FormattedMessage id="desktop_ver_11"/>,
          img:'images/desktop/burtgel-batalgaajuulah/11.png'
        },
        {
          desc:<FormattedMessage id="desktop_ver_12"/>,
          img:'images/desktop/burtgel-batalgaajuulah/12.png'
        }
      ]
    },
    {
      title:<FormattedMessage id="howto_deposit"/>,
      video:'CJk6q5LEA_4',
      info:[
        {
          desc:<FormattedMessage id="desktop_depo_1"/>,
          img:'images/desktop/dansaa-tsenegleh/1.png'
        },
        {
          desc:<FormattedMessage id="desktop_depo_2"/>,
          img:'images/desktop/dansaa-tsenegleh/2.png'
        },
        {
          desc:<FormattedMessage id="desktop_depo_3"/>,
          img:'images/desktop/dansaa-tsenegleh/3.png'
        },
        {
          desc:<FormattedMessage id="desktop_depo_4"/>,
          img:'images/desktop/dansaa-tsenegleh/4.png'
        },
        {
          dans:<FormattedMessage id="desktop_depo_dans"/>,
          imgDans1:'images/mobile/dansaa-tsenegleh/7.png',
          imgDans2:'images/mobile/dansaa-tsenegleh/8.png',
          imgDans3:'images/mobile/dansaa-tsenegleh/9.png',
          alert:<FormattedMessage id="desktop_depo_alert"/>,
        }
      ]
    },
    {
      title:<FormattedMessage id="howto_withdraw"/>,
      video:'B5-lDOcNYF0',
      info:[
        {
          desc:<FormattedMessage id="desktop_with_1"/>,
          img:'images/desktop/withdraw/1.png'
        },
        {
          desc:<FormattedMessage id="desktop_with_2"/>,
          img:'images/desktop/withdraw/2.png'
        },
        {
          desc:<FormattedMessage id="desktop_with_3"/>,
          img:'images/desktop/withdraw/3.png'
        },
        {
          desc:<FormattedMessage id="desktop_with_4"/>,
          img:'images/desktop/withdraw/4.png'
        },
        {
          desc:<FormattedMessage id="desktop_with_5"/>,
          img:'images/desktop/withdraw/5.png'
        },
        {
          desc:<FormattedMessage id="desktop_with_6"/>,
          img:'images/desktop/withdraw/6.png'
        },
        {
          desc:<FormattedMessage id="desktop_with_7"/>,
          img:'images/desktop/withdraw/7.png'
        },
        {
          desc:<FormattedMessage id="desktop_with_8"/>,
          img:'images/desktop/withdraw/8.png'
        },
        {
          desc:<FormattedMessage id="desktop_with_9"/>,
          img:'images/desktop/withdraw/9.png'
        }
      ]
    }
  ]

  const jsonM = [
    {
      title:<FormattedMessage id="howto_Registration"/>,
      video:'C5G2j_vqmQQ',
      info:[
        {
          desc:<FormattedMessage id="mobile_req_1"/>,
          img:'images/mobile/burtgel-uusgeh/1.svg'
        },
        {
          desc:<FormattedMessage id="mobile_req_2"/>,
          img:'images/mobile/burtgel-uusgeh/2.svg'
        },
        {
          desc:<FormattedMessage id="mobile_req_3"/>,
          img:'images/mobile/burtgel-uusgeh/3.svg'
        },
        {
          desc:<FormattedMessage id="mobile_req_4"/>,
          img:'images/mobile/burtgel-uusgeh/4.svg'
        },
        {
          desc:<FormattedMessage id="mobile_req_5"/>,
          img:'images/mobile/burtgel-uusgeh/5.svg'
        }
      ]
    },
    {
      title:<FormattedMessage id="howto_2fa"/>,
      video:'NHadPMjKnqg',
      info:[
        {
          desc:<FormattedMessage id="mobile_2fa_1"/>,
          img:'images/desktop/2fa/Allitems-02.svg',
          img1:'images/android.svg',
          img2:'images/ios.svg'
        },
        {
          desc:<FormattedMessage id="mobile_2fa_2"/>,
          img:'images/mobile/2fa/3.svg'
        },
        {
          desc:<FormattedMessage id="mobile_2fa_3"/>,
          img:'images/mobile/2fa/4.svg'
        },
        {
          desc:<FormattedMessage id="mobile_2fa_4"/>,
          img:'images/mobile/2fa/5.svg'
        },
        {
          desc:<FormattedMessage id="mobile_2fa_5"/>,
          img:'images/mobile/2fa/6.svg'
        }
      ]
    },
    {
      title:<FormattedMessage id="howto_verify"/>,
      video:'D2MleEugODQ',
      info:[
        {
          desc:<FormattedMessage id="desktop_ver_1"/>,
          img:'images/mobile/burtgel-batalgaajulah/1.svg'
        },
        {
          desc:<FormattedMessage id="desktop_ver_2"/>,
          img:'images/mobile/burtgel-batalgaajulah/2.svg'        },
        {
          desc:<FormattedMessage id="mobile_depo_3"/>,
          img:'images/mobile/burtgel-batalgaajulah/3.svg'        },
        {
          desc:<FormattedMessage id="desktop_ver_4"/>,
          img:'images/mobile/burtgel-batalgaajulah/4.svg'        },
        {
          desc:<FormattedMessage id="desktop_ver_5"/>,
          img:'images/mobile/burtgel-batalgaajulah/5.svg' 
         },
        {
          desc:<FormattedMessage id="desktop_ver_6"/>,
          img:'images/mobile/burtgel-batalgaajulah/6.svg'
        },
        {
          desc:<FormattedMessage id="desktop_ver_7"/>,
          img:'images/mobile/burtgel-batalgaajulah/7.svg'
        },
        {
          desc:<FormattedMessage id="desktop_ver_8"/>,
          img:'images/mobile/burtgel-batalgaajulah/8.svg'
        },
        {
          desc:<FormattedMessage id="desktop_ver_9"/>,
          img:'images/mobile/burtgel-batalgaajulah/9.svg'
        },
        {
          desc:<FormattedMessage id="desktop_ver_10"/>,
          img:'images/mobile/burtgel-batalgaajulah/10.svg'
        },
        {
          desc:<FormattedMessage id="desktop_ver_11"/>,
          img:'images/mobile/burtgel-batalgaajulah/11.svg'
        },
        {
          desc:<FormattedMessage id="desktop_ver_12"/>,
          img:'images/mobile/burtgel-batalgaajulah/12.svg'
        }
      ]
    },
    {
      title:<FormattedMessage id="howto_deposit"/>,
      video:'vK8YBXMSHMs',
      info:[
        {
          desc:<FormattedMessage id="mobile_depo_1"/>,
          img:'images/mobile/dansaa-tsenegleh/1.svg'
        },
        {
          desc:<FormattedMessage id="mobile_depo_2"/>,
          img:'images/mobile/dansaa-tsenegleh/2.svg'
        },
        {
          desc:<FormattedMessage id="mobile_depo_3"/>,
          img:'images/mobile/dansaa-tsenegleh/3.svg'
        },
        {
          desc:<FormattedMessage id="mobile_depo_4"/>,
          img:'images/mobile/dansaa-tsenegleh/4.svg'
        },
        {
          desc:<FormattedMessage id="mobile_depo_5"/>,
          img:'images/mobile/dansaa-tsenegleh/5.svg'
        },
        {
          desc:<FormattedMessage id="mobile_depo_6"/>,
          img:'images/mobile/dansaa-tsenegleh/6.svg'
        },
        {
          dans:<FormattedMessage id="desktop_depo_dans"/>,
          imgDans1:'images/mobile/dansaa-tsenegleh/7.png',
          imgDans2:'images/mobile/dansaa-tsenegleh/8.png',
          imgDans3:'images/mobile/dansaa-tsenegleh/9.png',
          alert:<FormattedMessage id="desktop_depo_alert"/>,
        }
      ]
    },
    {
      title:<FormattedMessage id="howto_withdraw"/>,
      video:'ditTRh3jBR8',
      info:[
        {
          desc:<FormattedMessage id="mobile_with_1"/>,
          img:'images/mobile/munguu-tataj-avah/1.svg'
        },
        {
          desc:<FormattedMessage id="mobile_with_2"/>,
          img:'images/mobile/munguu-tataj-avah/2.svg'
        },
        {
          desc:<FormattedMessage id="mobile_with_3"/>,
          img:'images/mobile/munguu-tataj-avah/3.svg'
        },
        {
          desc:<FormattedMessage id="mobile_with_4"/>,
          img:'images/mobile/munguu-tataj-avah/4.svg'
        },
        {
          desc:<FormattedMessage id="mobile_with_5"/>,
          img:'images/mobile/munguu-tataj-avah/5.svg'
        },
        {
          desc:<FormattedMessage id="mobile_with_6"/>,
          img:'images/mobile/munguu-tataj-avah/6.svg'
        },
        {
          desc:<FormattedMessage id="mobile_with_7"/>,
          img:'images/mobile/munguu-tataj-avah/7.svg'
        },
        {
          desc:<FormattedMessage id="mobile_with_8"/>,
          img:'images/mobile/munguu-tataj-avah/8.svg'
        },
        {
          desc:<FormattedMessage id="mobile_with_9"/>,
          img:'images/mobile/munguu-tataj-avah/9.svg'
        },
        {
          desc:<FormattedMessage id="mobile_with_10"/>,
          img:'images/mobile/munguu-tataj-avah/10.svg'
        },
        {
          desc:<FormattedMessage id="mobile_with_11"/>,
          img:'images/mobile/munguu-tataj-avah/11.svg'
        }
      ]
    }
  ]

  return (
    <>
      <div className="max-w-[800px] mx-auto mt-[80px] mb-[80px] transition-all delay-150 duration-300 ease-in-out">
        <div className="flex w-full pb-[16px] border-b-[1px] border-b-[#1E274A] text-[18px] font-medium gap-[40px] mb-[24px]">
        
        <div
            className={`cursor-pointer relative flex ${activeSection === 'КОМПЬЮТЕР' ? 'text-[##626880]' : 'text-[#626880]'}`}
            onClick={() => handleSectionClick('КОМПЬЮТЕР')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" className="mt-1 mr-[8px]" height="20px" viewBox="0 0 24 24" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 4.34315 3.34315 3 5 3H19C20.6569 3 22 4.34315 22 6V15C22 16.6569 20.6569 18 19 18H13V19H15C15.5523 19 16 19.4477 16 20C16 20.5523 15.5523 21 15 21H9C8.44772 21 8 20.5523 8 20C8 19.4477 8.44772 19 9 19H11V18H5C3.34315 18 2 16.6569 2 15V6ZM5 5C4.44772 5 4 5.44772 4 6V15C4 15.5523 4.44772 16 5 16H19C19.5523 16 20 15.5523 20 15V6C20 5.44772 19.5523 5 19 5H5Z" fill={activeSection === 'КОМПЬЮТЕР' ? '#fff' : '#626880'}/>
          </svg>
            <FormattedMessage id="howto_desktop"/>
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
            <FormattedMessage id="howto_mobile"/>
            {activeSection === 'ГАР УТАС' && (
              <div className="absolute h-[2px] w-full bg-[#13A9FD] bottom-[-17px]"></div>
            )}
          </div>
        </div>

        <div className="rounded-[8px] text-[16px] bg-[#101C47] text-[#E6E7EB] pt-[14px]">
        
        {activeSection === 'КОМПЬЮТЕР' && (
          <div className="max-w-[800px] mx-auto">
          {jsonD.map((item, index) => (
          <div key={index} className="rounded-[8px] bg-[#101C47] text-[#E6E7EB] py-[8px] pb-[16px] px-[24px]">
            <div onClick={() => handleTitleClick(index)} className="cursor-pointer flex pb-[18px] justify-between border-b-[1px] border-b-[#283359] gap-[16px]">
            <div className={`text-[16px] ${activeIndex === index ? 'text-[#13A9FD]' : 'text-[#E6E7EB]'}`}>{item.title}</div>
              <div className="min-w-[24px] min-h-[24px] rounded-[2px] bg-[rgba(0,108,255,0.16)] transform transition-transform duration-300" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[20px] ml-[5px]"  xmlnsXxlink="http://www.w3.org/1999/xlink" width="14px" height="20px" viewBox="0 -4.5 20 20" version="1.1">
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
            <div className="flex md:float-right h-max w-[170px] mt-[24px]">
              <div className="cursor-pointer font-bold border rounded border-[#006CFF] text-[#13A9FD]" onClick={handleVideoTextClick}>
                <div className="py-[7px] text-[9px] flex pl-[12px] pr-[16px] items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="rounded-full mr-[10px]" width="30px" height="30px" viewBox="0 0 192 192" fill="none" strokeWidth="12">
                    <path stroke="#006CFF29" strokeLinecap="round" strokeLinejoin="round" d="M96 170c40.869 0 74-33.131 74-74 0-40.87-33.131-74-74-74-40.87 0-74 33.13-74 74 0 40.869 33.13 74 74 74Z" />
                    <path stroke="#006CFF" strokeLinecap="round" strokeLinejoin="round" d="M80 124V68l48 28-48 28Z" />
                  </svg>
                  <FormattedMessage id="watchVideo" />
                </div>
              </div>
              <div>
                {showVideoModal && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="absolute inset-0 bg-black opacity-75"></div>
                    <div className="relative z-10">
                    <iframe height="315px" width="640px" src={`https://www.youtube.com/embed/${item.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                <div className="max-w-[800px] mx-auto mt-[24px] md:mt-[100px] mb-[22px]">
                  {item.info.map((data, innerIndex) => (
                    <div className="mb-[24px]" key={innerIndex}>
                      <div className="pb-[16px] px-6 xl:mr-[120px] xl:ml-[30px] xl:mb-[16px] lg:mr-[120px] lg:ml-[30px] lg:mb-[16px] md:mr-[120px] md:ml-[30px] md:mb-[16px]">{data.desc}</div>
                      <div className="w-[284px] 3xl:w-[584px] 2xl:w-[584px] xl:w-[584px] lg:w-[384px] md:w-[284px] md:max-w-3xl h-[max] flex mx-auto justify-center">
                        {data.img && <img className="w-max h-[160px] sm:h-max" src={data.img} alt="Burtgel uusgeh" />}
                        {data.imgR && <img className="w-max h-[70px] flex items-center" src={data.imgR} alt="2fa"/>}
                        {data.img1 && <a  className="flex items-center pb-4 sm:pb-10 ml-[10px]" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&pli=1"><img className="inline-block mt-4" src={data.img1} alt="Burtgel uusgeh" /></a>}
                        {data.img2 && <a  className="flex items-center pb-4 sm:pb-10 ml-[10px]" href="https://apps.apple.com/us/app/google-authenticator/id388497605"><img className="mt-4" src={data.img2} alt="Burtgel uusgeh" /></a>}
                      </div>
                      {data.dans && <div className="sm:text-[14px] text-[10px] ml-[1.4rem] sm:ml-[3rem] mb-[16px] text-[#E7E8ED]">{data.dans}</div>}
                      <div className=" gap-[24px] grid grid-cols-3 px-4">
                        {data.imgDans1 && <img className="" src={data.imgDans1} alt="Burtgel uusgeh" />}
                        {data.imgDans2 && <img className="" src={data.imgDans2} alt="Burtgel uusgeh" />}
                        {data.imgDans3 && <img className="" src={data.imgDans3} alt="Burtgel uusgeh" />}
                      </div>
                      {data.alert && (
                        <div className="flex items-center py-2 mx-2 sm:text-[#E7E8ED] sm:border-none md:mx-6 text-[10px] md:text-[0.7rem] text-[#E7E8ED] max-w-[800px] mt-4 bg-[#0E1940]">
                          {data.alert && (
                            <svg
                              className="mr-1 w-8 h-8 md:mr-2  ml-1 md:ml-3 sm:w-3 sm:h-3"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                            >
                              <g id="Group_7638" data-name="Group 7638" transform="translate(-459 -256)">
                                <rect id="Rectangle_5298" data-name="Rectangle 5298" width="48" height="48" rx="24" transform="translate(459 256)" fill="#fff" />
                                <rect id="Rectangle_5564" data-name="Rectangle 5564" width="4.849" height="17.092" rx="2.424" transform="translate(485.424 294.546) rotate(180)" fill="#000" />
                                <rect id="Rectangle_5565" data-name="Rectangle 5565" width="4.849" height="5.092" rx="2.424" transform="translate(485.424 271.546) rotate(180)" fill="#000" />
                              </g>
                            </svg>
                          )}
                          {data.alert && <div className=" md:pr-4 text-[8px] sm:text-[0.7rem]">{data.alert}</div>}
                        </div>
                      )}
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
            <div className="max-w-[800px] mx-auto ">
            {jsonM.map((item, index) => (
              <div key={index} className="rounded-[8px] bg-[#101C47] text-[#E6E7EB] py-[8px] pb-[16px] px-[24px]">
              <div onClick={() => handleTitleClick(index)} className="cursor-pointer flex pb-[18px] justify-between border-b-[1px] border-b-[#283359]">
                <div className={`text-[16px] ${activeIndex === index ? 'text-[#13A9FD]' : 'text-[#E6E7EB]'}`}>{item.title}</div>
                <div className="min-w-[24px] min-h-[24px] rounded-[2px] bg-[rgba(0,108,255,0.16)] transform transition-transform duration-300" style={{ transform: activeIndex === index ? 'rotate(180deg)' : 'rotate(0)' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-[14px] h-[20px] ml-[5px]" xmlnsXxlink="http://www.w3.org/1999/xlink" width="14px" height="20px" viewBox="0 -4.5 20 20" version="1.1">
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
              <div className="flex md:float-right h-max w-[170px] mt-[24px]">
                <div className="cursor-pointer font-bold border rounded border-[#006CFF] text-[#13A9FD]" onClick={handleVideoTextClick}>
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
                      <iframe height="515px" width='290px' src={`https://www.youtube.com/embed/${item.video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
                <div className="max-w-[800px] mx-auto mt-[24px] md:mt-[100px] mb-[22px]">
                  {item.info.map((data, innerIndex) => (
                    <div className="mb-[24px]" key={innerIndex}>
                      <div className="pb-[16px] px-6 xl:mr-[120px] xl:ml-[30px] xl:mb-[16px] lg:mr-[120px] lg:ml-[30px] lg:mb-[16px] md:mr-[120px] md:ml-[30px] md:mb-[16px]">{data.desc}</div>
                      <div className="w-[284px] 3xl:w-[584px] 2xl:w-[584px] xl:w-[584px] lg:w-[384px] md:w-[284px] md:max-w-3xl h-[max] flex mx-auto justify-center">
                        {data.img && <img className="w-max h-max" src={data.img} alt="Burtgel uusgeh" />}
                        {data.img1 && <a  className="inline-block ml-[10px]" href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2&hl=en_US&pli=1"><img className="inline-block mt-4" src={data.img1} alt="Burtgel uusgeh" /></a>}
                        {data.img2 && <a  className="inline-block ml-[10px]" href="https://apps.apple.com/us/app/google-authenticator/id388497605"><img className="mt-4" src={data.img2} alt="Burtgel uusgeh" /></a>}
                      </div>
                      {data.dans && <div className="sm:text-[14px] text-[10px] ml-[1.4rem] sm:ml-[3rem] mb-[16px] text-[#E7E8ED]">{data.dans}</div>}
                      <div className=" gap-[24px] grid grid-cols-3 px-4">
                        {data.imgDans1 && <img className="" src={data.imgDans1} alt="Burtgel uusgeh" />}
                        {data.imgDans2 && <img className="" src={data.imgDans2} alt="Burtgel uusgeh" />}
                        {data.imgDans3 && <img className="" src={data.imgDans3} alt="Burtgel uusgeh" />}
                      </div>
                        {data.alert && (
                        <div className="flex items-center py-2 mx-2 sm:text-[#E7E8ED] sm:border-none md:mx-6 text-[10px] md:text-[0.7rem] text-[#E7E8ED] max-w-[800px] mt-4 bg-[#0E1940]">
                          {data.alert && (
                            <svg
                              className="mr-1 w-8 h-8 md:mr-2  ml-1 md:ml-3 sm:w-3 sm:h-3"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 48 48"
                            >
                              <g id="Group_7638" data-name="Group 7638" transform="translate(-459 -256)">
                                <rect id="Rectangle_5298" data-name="Rectangle 5298" width="48" height="48" rx="24" transform="translate(459 256)" fill="#fff" />
                                <rect id="Rectangle_5564" data-name="Rectangle 5564" width="4.849" height="17.092" rx="2.424" transform="translate(485.424 294.546) rotate(180)" fill="#000" />
                                <rect id="Rectangle_5565" data-name="Rectangle 5565" width="4.849" height="5.092" rx="2.424" transform="translate(485.424 271.546) rotate(180)" fill="#000" />
                              </g>
                            </svg>
                          )}
                          {data.alert && <div className=" md:pr-4 text-[8px] sm:text-[0.7rem]">{data.alert}</div>}
                        </div>
                      )}
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