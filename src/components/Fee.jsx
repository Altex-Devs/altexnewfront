function Fee() {
  return (
    <>
      <div className="flex w-full pb-[16px] border-b-[1px] border-b-[#1E274A] text-[18px] font-medium gap-[40px] mt-[80px] mb-[40px]">
        <a href="/feedeposit" className="relative text-[#626880]">
          ОРЛОГЫН ШИМТГЭЛ
        </a>
        <div className="relative">
          ЗАРЛАГЫН ШИМТГЭЛ
          <div className="absolute h-[2px] w-full bg-[#13A9FD] bottom-[-17px]"></div>
        </div>
        <a href="/feetrade" className="relative text-[#626880]">
          АРИЛЖААНЫ ШИМТГЭЛ
        </a>
      </div>

      <div className="w-full min-w-[700px] overflow-x-auto">
        <div className="inline-grid grid-cols-6 text-center font-light mb-[262px]">
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center row-span-2">Валют</div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center row-span-2">Шимтгэлийн хэмжээ</div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center row-span-2">Доод хэмжээ</div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center col-span-3">Дээд хэмжээ</div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center">Баталгаат</div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center">Итгэмжит</div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center">Түнш</div>

          <div className="font-bold text-[18px] border-b border-[#283359] flex justify-center items-center py-[16px]">
            <svg className="inline-block mr-[8px]" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.521 19.871C31.756 22.9419 30.0974 25.7169 27.7551 27.8451C25.4128 29.9733 22.492 31.359 19.362 31.8271C16.2321 32.2952 13.0336 31.8245 10.1712 30.4747C7.30878 29.1248 4.91094 26.9564 3.28097 24.2437C1.65099 21.531 0.862102 18.3959 1.01407 15.2348C1.16603 12.0737 2.25203 9.02865 4.1347 6.48481C6.01738 3.94096 8.61216 2.01258 11.5909 0.943543C14.5696 -0.125494 17.7984 -0.28716 20.869 0.478991C24.9853 1.50605 28.5252 4.12588 30.7103 7.76239C32.8953 11.3989 33.5466 15.7543 32.521 19.871Z" fill="url(#paint0_linear_2_1819)" />
              <path d="M24.3821 13.755C24.7131 11.676 23.0271 10.555 20.7201 9.81296L21.4681 6.99696L19.6421 6.56996L18.9141 9.31196C18.4341 9.19996 17.9411 9.09396 17.4501 8.98896L18.1831 6.22696L16.3581 5.80096L15.6091 8.61596C15.2091 8.53096 14.8211 8.44696 14.4421 8.35896V8.34996L11.9231 7.75996L11.4391 9.59096C11.4391 9.59096 12.7941 9.88196 12.7661 9.90096C13.5061 10.074 13.6401 10.534 13.6171 10.901L12.7651 14.106C12.8296 14.121 12.893 14.14 12.9551 14.163L12.7621 14.118L11.5671 18.612C11.5073 18.7749 11.3867 18.9083 11.2306 18.9842C11.0746 19.0601 10.8952 19.0725 10.7301 19.019C10.7481 19.044 9.40212 18.708 9.40212 18.708L8.49512 20.67L10.8721 21.226C11.3141 21.326 11.7481 21.439 12.1721 21.541L11.4161 24.389L13.2411 24.816L13.9901 21.998C14.4901 22.125 14.9721 22.242 15.4461 22.352L14.7001 25.152L16.5271 25.579L17.2831 22.736C20.3981 23.289 22.7411 23.066 23.7261 20.422C23.9223 20.0447 24.0344 19.6295 24.0549 19.2048C24.0753 18.78 24.0035 18.3559 23.8444 17.9616C23.6854 17.5673 23.4428 17.2121 23.1334 16.9204C22.824 16.6287 22.4551 16.4075 22.0521 16.272C22.6646 16.1701 23.2258 15.8676 23.6476 15.412C24.0694 14.9564 24.3278 14.3735 24.3821 13.755ZM20.2081 19.247C19.6431 21.376 15.8241 20.225 14.5861 19.936L15.5861 16.162C16.8281 16.453 20.7991 17.027 20.2081 19.247ZM20.7741 13.727C20.2591 15.663 17.0801 14.68 16.0491 14.438L16.9581 11.016C17.9891 11.254 21.3101 11.704 20.7741 13.727Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_2_1819" x1="0.995605" y1="0.00305176" x2="0.995605" y2="32.0031" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F9AA4B" />
                  <stop offset="1" stopColor="#F7931A" />
                </linearGradient>
              </defs>
            </svg>
            USD
          </div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">1%</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">$3.0</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">$7,000.0</div>

          <div className="col-span-2 row-[span_21] flex justify-center items-center p-[100px]">
            <span>
              Та нэг өдөрт хийх зарлагын дүнг өсгөх хүсэлтэй бол <a href="#_" className="text-[#3973C5] underline">ЭНД</a> дарж хүсэлтээ илгээнэ үү.
            </span>
          </div>

          <div className="font-bold text-[18px] border-b border-[#283359] flex justify-center items-center py-[16px]">
            <svg className="inline-block mr-[8px]" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32.521 19.871C31.756 22.9419 30.0974 25.7169 27.7551 27.8451C25.4128 29.9733 22.492 31.359 19.362 31.8271C16.2321 32.2952 13.0336 31.8245 10.1712 30.4747C7.30878 29.1248 4.91094 26.9564 3.28097 24.2437C1.65099 21.531 0.862102 18.3959 1.01407 15.2348C1.16603 12.0737 2.25203 9.02865 4.1347 6.48481C6.01738 3.94096 8.61216 2.01258 11.5909 0.943543C14.5696 -0.125494 17.7984 -0.28716 20.869 0.478991C24.9853 1.50605 28.5252 4.12588 30.7103 7.76239C32.8953 11.3989 33.5466 15.7543 32.521 19.871Z" fill="url(#paint0_linear_2_1819)" />
              <path d="M24.3821 13.755C24.7131 11.676 23.0271 10.555 20.7201 9.81296L21.4681 6.99696L19.6421 6.56996L18.9141 9.31196C18.4341 9.19996 17.9411 9.09396 17.4501 8.98896L18.1831 6.22696L16.3581 5.80096L15.6091 8.61596C15.2091 8.53096 14.8211 8.44696 14.4421 8.35896V8.34996L11.9231 7.75996L11.4391 9.59096C11.4391 9.59096 12.7941 9.88196 12.7661 9.90096C13.5061 10.074 13.6401 10.534 13.6171 10.901L12.7651 14.106C12.8296 14.121 12.893 14.14 12.9551 14.163L12.7621 14.118L11.5671 18.612C11.5073 18.7749 11.3867 18.9083 11.2306 18.9842C11.0746 19.0601 10.8952 19.0725 10.7301 19.019C10.7481 19.044 9.40212 18.708 9.40212 18.708L8.49512 20.67L10.8721 21.226C11.3141 21.326 11.7481 21.439 12.1721 21.541L11.4161 24.389L13.2411 24.816L13.9901 21.998C14.4901 22.125 14.9721 22.242 15.4461 22.352L14.7001 25.152L16.5271 25.579L17.2831 22.736C20.3981 23.289 22.7411 23.066 23.7261 20.422C23.9223 20.0447 24.0344 19.6295 24.0549 19.2048C24.0753 18.78 24.0035 18.3559 23.8444 17.9616C23.6854 17.5673 23.4428 17.2121 23.1334 16.9204C22.824 16.6287 22.4551 16.4075 22.0521 16.272C22.6646 16.1701 23.2258 15.8676 23.6476 15.412C24.0694 14.9564 24.3278 14.3735 24.3821 13.755ZM20.2081 19.247C19.6431 21.376 15.8241 20.225 14.5861 19.936L15.5861 16.162C16.8281 16.453 20.7991 17.027 20.2081 19.247ZM20.7741 13.727C20.2591 15.663 17.0801 14.68 16.0491 14.438L16.9581 11.016C17.9891 11.254 21.3101 11.704 20.7741 13.727Z" fill="white" />
              <defs>
                <linearGradient id="paint0_linear_2_1819" x1="0.995605" y1="0.00305176" x2="0.995605" y2="32.0031" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F9AA4B" />
                  <stop offset="1" stopColor="#F7931A" />
                </linearGradient>
              </defs>
            </svg>
            BTC
          </div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">0.001 BTC</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">0.005 BTC</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">0.3 BTC</div>

          <div className="border-b border-[#283359] font-bold text-[18px] flex justify-center items-center py-[16px]">
            <svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#627EEA" />
              <path d="M16.5 4V12.87L24 16.22L16.5 4Z" fill="white" fillOpacity="0.6" />
              <path d="M16.5 4L9 16.22L16.5 12.87V4Z" fill="white" />
              <path d="M16.5 21.968V28L24 17.616L16.5 21.968Z" fill="white" fillOpacity="0.6" />
              <path d="M16.5 28V21.967L9 17.616L16.5 28Z" fill="white" />
              <path d="M16.5 20.573L24 16.22L16.5 12.872V20.573Z" fill="white" fillOpacity="0.2" />
              <path d="M9 16.22L16.5 20.573V12.873L9 16.22Z" fill="white" fillOpacity="0.6" />
            </svg>
            ETH
          </div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">0.01 ETH</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">0.01 ETH</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">4 ETH</div>

          <div className="border-b border-[#283359] font-bold text-[18px] flex justify-center items-center py-[16px]">
            <svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M32 16C32 19.1645 31.0616 22.2579 29.3035 24.8891C27.5454 27.5203 25.0466 29.5711 22.1229 30.7821C19.1993 31.9931 15.9823 32.3099 12.8786 31.6926C9.77487 31.0752 6.92394 29.5513 4.6863 27.3137C2.44866 25.0761 0.924806 22.2251 0.307443 19.1214C-0.309921 16.0177 0.0069325 12.8007 1.21793 9.87706C2.42894 6.95345 4.4797 4.45459 7.11088 2.69649C9.74207 0.938384 12.8355 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16Z" fill="#3167A3" />
              <path d="M15.0629 20.29L16.1049 16.365L18.5729 15.465L19.1869 13.159L19.1659 13.102L16.7369 13.989L18.4869 7.39899H13.5229L11.2339 15.999L9.32289 16.699L8.69189 19.077L10.6009 18.377L9.25189 23.445H22.4609L23.3079 20.291L15.0629 20.29Z" fill="white" />
            </svg>
            LTC
          </div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">0.002 LTC</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">0.1 LTC</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">110 LTC</div>
        </div>
      </div>
    </>
  );
}

export default Fee;