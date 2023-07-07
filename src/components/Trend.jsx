import { useEffect } from "react";
import {FormattedMessage} from "react-intl";


function Trend() {
  useEffect(() => {
    fetch('https://old.altex.mn/ticker.php', {
      mode: "cors",
      // credentials: "include",
    }).then((res) => res.json()).then((res) => {
      const elem = document.getElementById("prices");
      if (res.length) {
        elem.innerHTML = '';
        res.forEach((r) => {
          elem.innerHTML += `
            <div class="snap-center relative rounded-[10px] border-solid border border-[#13A9FD] px-[17px] py-[24px] min-w-[200px]">
              <div class="flex items-stretch">
                <img src="https://old.altex.mn/images/${r.ticker}.svg" />
                <div class="flex flex-col justify-between">
                  <div class="text-[#FD950D] ml-[8px] text-[20px] mt-[-5px]">${r.ticker}</div>
                  <div class="text-[#FFF] ml-[8px] ${r.ticker === 'BAT' ? 'text-[9px]' : 'text-[10px]'} opacity-50">${r.name}</div>
                </div>
              </div>
              <div class="text-[24px] mt-[21px] mb-[5px]">$${parseFloat(r.value).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
              <div class="text-[12px] text-[#${r.temp < 0 ? '13A9FD' : 'FDAE13'}]">
                <span class="mr-[15px] mb-[2px]">( ${r.temp.toFixed(2)}% )</span>
                <img src="https://old.altex.mn/images/bit-${r.temp < 0 ? 'down' : 'up'}.svg" class="inline" />
              </div>
            </div>`;
        });

      } else {
        elem.innerHTML = "Алдаа гарлаа"
      }
    }).catch(console.error);

    const interval = setInterval(() => scrollPrices("right"), 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollPrices = (direction) => {
    const elem = document.getElementById("prices");
    if (direction === 'right' && elem.scrollLeft > elem.scrollWidth - elem.offsetWidth - 100) {
      elem.scrollLeft = 0;
    } else if (direction === 'left' && elem.scrollLeft === 0) {
      elem.scrollLeft = elem.scrollWidth;
    } else {
      elem.scrollBy({
        left: (direction === 'right' ? 1 : -1)*200,
        behavior: "smooth"
      });
    }
  }

  return (
    <>
      <div id="market_trend" className="text-[24px] text-[#13A9FD] font-medium mb-[40px]">
        <FormattedMessage id='market_trend' defaultMessage='Зах зээлийн тренд'/>
      </div>
      <div className="overflow-hidden relative mb-[160px]">
        <div id="prices" className="flex flex-nowrap gap-[24px] duration-1000 scroll-smooth snap-x overflow-x-scroll">
          <div className="animate-spin rounded-full border-4 border-[#07184b] border-t-[#006CFF] w-[24px] h-[24px] mx-auto"></div>
        </div>
        <div className="absolute top-0 w-[100px] h-[180px] bg-gradient-to-r from-[rgba(5,15,54,1)] to-[rgba(5,15,54,0)] flex items-center cursor-pointer" onClick={() => scrollPrices('left')}>
          <img alt="left" className="rotate-180" src="/images/coin-arrow.svg" />
        </div>
        <div className="absolute top-0 right-0 w-[100px] h-[180px] bg-gradient-to-l from-[rgba(5,15,54,1)] to-[rgba(5,15,54,0)] flex items-center cursor-pointer" onClick={() => scrollPrices('right')}>
          <img alt="right" className="absolute right-0" src="/images/coin-arrow.svg" />
        </div>
      </div>
    </>
  )
}

export default Trend;