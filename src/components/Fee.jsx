import { useState } from "react";

const json = [
  {
    name:'BTC',
    pat:<svg className="inline-block mr-[8px]" width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32.521 19.871C31.756 22.9419 30.0974 25.7169 27.7551 27.8451C25.4128 29.9733 22.492 31.359 19.362 31.8271C16.2321 32.2952 13.0336 31.8245 10.1712 30.4747C7.30878 29.1248 4.91094 26.9564 3.28097 24.2437C1.65099 21.531 0.862102 18.3959 1.01407 15.2348C1.16603 12.0737 2.25203 9.02865 4.1347 6.48481C6.01738 3.94096 8.61216 2.01258 11.5909 0.943543C14.5696 -0.125494 17.7984 -0.28716 20.869 0.478991C24.9853 1.50605 28.5252 4.12588 30.7103 7.76239C32.8953 11.3989 33.5466 15.7543 32.521 19.871Z" fill="url(#paint0_linear_2_1819)" />
    <path d="M24.3821 13.755C24.7131 11.676 23.0271 10.555 20.7201 9.81296L21.4681 6.99696L19.6421 6.56996L18.9141 9.31196C18.4341 9.19996 17.9411 9.09396 17.4501 8.98896L18.1831 6.22696L16.3581 5.80096L15.6091 8.61596C15.2091 8.53096 14.8211 8.44696 14.4421 8.35896V8.34996L11.9231 7.75996L11.4391 9.59096C11.4391 9.59096 12.7941 9.88196 12.7661 9.90096C13.5061 10.074 13.6401 10.534 13.6171 10.901L12.7651 14.106C12.8296 14.121 12.893 14.14 12.9551 14.163L12.7621 14.118L11.5671 18.612C11.5073 18.7749 11.3867 18.9083 11.2306 18.9842C11.0746 19.0601 10.8952 19.0725 10.7301 19.019C10.7481 19.044 9.40212 18.708 9.40212 18.708L8.49512 20.67L10.8721 21.226C11.3141 21.326 11.7481 21.439 12.1721 21.541L11.4161 24.389L13.2411 24.816L13.9901 21.998C14.4901 22.125 14.9721 22.242 15.4461 22.352L14.7001 25.152L16.5271 25.579L17.2831 22.736C20.3981 23.289 22.7411 23.066 23.7261 20.422C23.9223 20.0447 24.0344 19.6295 24.0549 19.2048C24.0753 18.78 24.0035 18.3559 23.8444 17.9616C23.6854 17.5673 23.4428 17.2121 23.1334 16.9204C22.824 16.6287 22.4551 16.4075 22.0521 16.272C22.6646 16.1701 23.2258 15.8676 23.6476 15.412C24.0694 14.9564 24.3278 14.3735 24.3821 13.755ZM20.2081 19.247C19.6431 21.376 15.8241 20.225 14.5861 19.936L15.5861 16.162C16.8281 16.453 20.7991 17.027 20.2081 19.247ZM20.7741 13.727C20.2591 15.663 17.0801 14.68 16.0491 14.438L16.9581 11.016C17.9891 11.254 21.3101 11.704 20.7741 13.727Z" fill="white" />
    <defs>
      <linearGradient id="paint0_linear_2_1819" x1="0.995605" y1="0.00305176" x2="0.995605" y2="32.0031" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9AA4B" />
        <stop offset="1" stopColor="#F7931A" />
      </linearGradient>
    </defs>
  </svg>,
    fee:'0.001',
    feeLower:'0.005',
    proof:'0.3',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'ETH',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#627EEA" />
    <path d="M16.5 4V12.87L24 16.22L16.5 4Z" fill="white" fillOpacity="0.6" />
    <path d="M16.5 4L9 16.22L16.5 12.87V4Z" fill="white" />
    <path d="M16.5 21.968V28L24 17.616L16.5 21.968Z" fill="white" fillOpacity="0.6" />
    <path d="M16.5 28V21.967L9 17.616L16.5 28Z" fill="white" />
    <path d="M16.5 20.573L24 16.22L16.5 12.872V20.573Z" fill="white" fillOpacity="0.2" />
    <path d="M9 16.22L16.5 20.573V12.873L9 16.22Z" fill="white" fillOpacity="0.6" />
  </svg>,
    fee:'0.01',
    feeLower:'0.01',
    proof:'4',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'LTC',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 16C32 19.1645 31.0616 22.2579 29.3035 24.8891C27.5454 27.5203 25.0466 29.5711 22.1229 30.7821C19.1993 31.9931 15.9823 32.3099 12.8786 31.6926C9.77487 31.0752 6.92394 29.5513 4.6863 27.3137C2.44866 25.0761 0.924806 22.2251 0.307443 19.1214C-0.309921 16.0177 0.0069325 12.8007 1.21793 9.87706C2.42894 6.95345 4.4797 4.45459 7.11088 2.69649C9.74207 0.938384 12.8355 0 16 0C20.2435 0 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16Z" fill="#3167A3" />
    <path d="M15.0629 20.29L16.1049 16.365L18.5729 15.465L19.1869 13.159L19.1659 13.102L16.7369 13.989L18.4869 7.39899H13.5229L11.2339 15.999L9.32289 16.699L8.69189 19.077L10.6009 18.377L9.25189 23.445H22.4609L23.3079 20.291L15.0629 20.29Z" fill="white" />
  </svg>,
    fee:'0.002',
    feeLower:'0.1',
    proof:'110',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'BCH',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
    <circle cx="16" cy="16" fill="#8dc351" r="16"/>
    <path d="M21.207 10.534c-.776-1.972-2.722-2.15-4.988-1.71l-.807-2.813-1.712.491.786 2.74c-.45.128-.908.27-1.363.41l-.79-2.758-1.711.49.805 2.813c-.368.114-.73.226-1.085.328l-.003-.01-2.362.677.525 1.83s1.258-.388 1.243-.358c.694-.199 1.035.139 1.2.468l.92 3.204c.047-.013.11-.029.184-.04l-.181.052 1.287 4.49c.032.227.004.612-.48.752.027.013-1.246.356-1.246.356l.247 2.143 2.228-.64c.415-.117.825-.227 1.226-.34l.817 2.845 1.71-.49-.807-2.815a65.74 65.74 0 001.372-.38l.802 2.803 1.713-.491-.814-2.84c2.831-.991 4.638-2.294 4.113-5.07-.422-2.234-1.724-2.912-3.471-2.836.848-.79 1.213-1.858.642-3.3zm-.65 6.77c.61 2.127-3.1 2.929-4.26 3.263l-1.081-3.77c1.16-.333 4.704-1.71 5.34.508zm-2.322-5.09c.554 1.935-2.547 2.58-3.514 2.857l-.98-3.419c.966-.277 3.915-1.455 4.494.563z" fill="#ffffff" fill-rule="nonzero"/>
    </g>
    </svg>,
    fee:'0.002',
    feeLower:'0.01',
    proof:'58',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'USDT',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
    <circle cx="16" cy="16" r="16" fill="#26A17B"/>
    <path fill="#FFF" d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117"/>
    </g>
    </svg> ,
    fee:'16',
    feeLower:'5',
    proof:'7,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'UNI',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
    <circle fill="#FF007A" fill-rule="nonzero" cx="16" cy="16" r="16"/>
    <g fill="#FFF">
    <path d="M12.261 5.767c-.285-.044-.297-.05-.163-.07.257-.04.865.015 1.284.114.977.233 1.866.828 2.816 1.885l.252.28.36-.057c1.52-.245 3.067-.05 4.36.547.356.164.917.491.987.576.023.026.064.199.091.383.096.637.048 1.125-.146 1.49-.106.198-.112.26-.041.43a.416.416 0 00.372.236c.322 0 .668-.52.828-1.243l.064-.287.126.143c.692.784 1.235 1.853 1.328 2.613l.025.199-.117-.18c-.2-.31-.4-.522-.658-.693-.464-.307-.955-.411-2.255-.48-1.174-.062-1.839-.162-2.497-.377-1.121-.365-1.686-.852-3.018-2.599-.591-.776-.957-1.205-1.32-1.55-.827-.786-1.639-1.198-2.678-1.36z" fill-rule="nonzero"/>
    <path d="M22.422 7.5c.03-.52.1-.863.242-1.176.056-.124.109-.226.117-.226a.773.773 0 01-.055.204c-.103.304-.12.72-.049 1.203.09.614.142.702.79 1.365.305.311.659.703.787.872l.233.306-.233-.219c-.285-.267-.941-.79-1.086-.864-.097-.05-.112-.049-.172.01-.055.056-.067.138-.074.529-.012.608-.095 1-.296 1.39-.108.21-.125.166-.027-.073.073-.178.08-.256.08-.845 0-1.184-.141-1.468-.966-1.956a9.046 9.046 0 00-.764-.396 2.916 2.916 0 01-.374-.182c.023-.023.827.211 1.15.336.482.185.561.209.62.186.039-.015.058-.129.077-.464zm-9.607 2.025c-.579-.797-.937-2.02-.86-2.934l.024-.283.132.024c.248.045.675.204.875.326.548.333.786.772 1.027 1.898.071.33.164.703.207.83.068.203.328.678.54.987.152.222.05.327-.286.297-.514-.047-1.21-.527-1.659-1.145zm8.905 5.935c-2.707-1.09-3.66-2.036-3.66-3.632 0-.235.008-.427.017-.427.01 0 .115.077.233.172.549.44 1.164.628 2.865.876 1.001.147 1.565.265 2.085.437 1.652.548 2.674 1.66 2.918 3.174.07.44.029 1.265-.086 1.7-.09.344-.367.963-.44.987-.02.006-.04-.071-.046-.178-.028-.568-.315-1.122-.798-1.537-.549-.471-1.286-.847-3.089-1.572zm-1.9.452a4.808 4.808 0 00-.131-.572l-.07-.206.129.144c.177.2.318.454.436.794.091.259.101.336.1.757 0 .414-.011.5-.095.734a2.32 2.32 0 01-.571.908c-.495.504-1.13.782-2.048.898-.16.02-.624.054-1.033.075-1.03.054-1.707.164-2.316.378a.488.488 0 01-.174.042c-.024-.025.39-.272.733-.437.483-.233.963-.36 2.04-.539.532-.089 1.082-.196 1.221-.239 1.318-.404 1.995-1.446 1.778-2.737z" fill-rule="nonzero"/>
    <path d="M21.06 18.116c-.36-.773-.442-1.52-.245-2.216.021-.074.055-.135.075-.135a.73.73 0 01.189.102c.166.112.498.3 1.383.782 1.105.603 1.735 1.07 2.164 1.602.375.467.607.999.719 1.647.063.367.026 1.25-.068 1.62-.297 1.166-.988 2.082-1.972 2.616a2.53 2.53 0 01-.288.143c-.014 0 .038-.133.117-.297.33-.692.369-1.366.118-2.116-.153-.459-.466-1.02-1.097-1.966-.734-1.1-.914-1.394-1.095-1.782zm-10.167 4.171c1.005-.848 2.254-1.45 3.393-1.635.49-.08 1.308-.048 1.762.068.728.186 1.38.604 1.719 1.101.33.486.473.91.62 1.852.06.372.123.745.142.83.11.488.327.879.595 1.075.425.311 1.158.33 1.878.05a.981.981 0 01.236-.074c.026.026-.336.269-.592.397a2.014 2.014 0 01-.983.238c-.66 0-1.208-.335-1.665-1.02-.09-.135-.292-.538-.45-.897-.482-1.1-.72-1.436-1.28-1.803-.489-.32-1.118-.377-1.591-.145-.622.305-.795 1.1-.35 1.603.177.2.507.373.777.406a.83.83 0 00.939-.83c0-.332-.128-.52-.448-.665-.437-.197-.907.033-.905.444.001.175.077.285.253.365.113.05.115.055.023.036-.401-.084-.495-.567-.172-.888.387-.386 1.188-.216 1.463.31.116.221.129.662.028.928-.225.595-.883.907-1.55.737-.454-.116-.639-.241-1.186-.805-.951-.98-1.32-1.17-2.692-1.384l-.263-.041.3-.253z" fill-rule="nonzero"/>
    <path d="M6.196 3.35l.096.117c3.708 4.54 5.624 6.896 5.746 7.064.2.278.125.527-.219.723-.191.109-.585.219-.781.219-.223 0-.474-.107-.657-.28-.129-.123-.65-.901-1.853-2.768a188.53 188.53 0 00-1.712-2.633c-.049-.046-.048-.045 1.618 2.936 1.046 1.872 1.4 2.533 1.4 2.622 0 .18-.05.274-.272.522-.37.413-.535.877-.655 1.837-.134 1.077-.51 1.837-1.554 3.138-.61.762-.71.902-.865 1.209-.194.386-.247.603-.269 1.091-.023.516.022.85.18 1.343.138.432.282.718.65 1.288.318.493.501.859.501 1.002 0 .114.022.114.515.003 1.179-.266 2.136-.735 2.675-1.309.333-.355.411-.551.414-1.038.001-.318-.01-.385-.096-.568-.14-.298-.395-.546-.957-.93-.737-.504-1.051-.91-1.138-1.467-.072-.457.011-.78.419-1.634.421-.884.526-1.26.597-2.151.045-.576.108-.803.274-.985.172-.19.328-.255.755-.313.696-.095 1.139-.275 1.503-.61.316-.292.448-.573.468-.995l.016-.32-.177-.206c-.254-.296-2.355-2.614-6.304-6.956l-.106-.115-.212.165zM7.91 19.732a.566.566 0 00-.174-.746c-.228-.152-.583-.08-.583.118 0 .06.033.104.108.143.127.065.136.139.037.288-.101.152-.093.286.023.377.186.146.45.065.59-.18zm5.524-7.176c-.327.1-.644.447-.743.81-.06.221-.026.61.064.73.145.194.286.245.666.242.744-.005 1.39-.324 1.466-.723.062-.327-.223-.78-.614-.98-.202-.102-.631-.143-.839-.079zm.87.68c.115-.163.064-.34-.13-.458-.372-.227-.934-.04-.934.312 0 .174.293.365.561.365.18 0 .424-.107.503-.219z"/>
    </g>
    </g>
    </svg>,
    fee:'0.75',
    feeLower:'1.8',
    proof:'1,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'COMP',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#fdae13"/>
        <stop offset="1" stop-color="#fe6703"/>
      </linearGradient>
      <clipPath id="clip-COMP">
        <rect width="48" height="48"/>
      </clipPath>
    </defs>
    <g id="COMP" clip-path="url(#clip-COMP)">
      <g id="Rectangle_5195" data-name="Rectangle 5195" fill="none" stroke="#13a9fd" stroke-width="1">
        <rect width="48" height="48" rx="10" stroke="none"/>
        <rect x="0.5" y="0.5" width="47" height="47" rx="9.5" fill="none"/>
      </g>
      <path id="Path_5264" data-name="Path 5264" d="M530.474,417.945a2.007,2.007,0,0,1-.974-1.714v-3.9a.843.843,0,0,1,.851-.837.861.861,0,0,1,.426.114l8.91,5.137a1.672,1.672,0,0,1,.843,1.449v4.044a1.009,1.009,0,0,1-1.014,1.007,1.04,1.04,0,0,1-.534-.148Zm13.281-7.411a1.679,1.679,0,0,1,.843,1.449v8.209a.666.666,0,0,1-.346.583l-1.95,1.085a.342.342,0,0,1-.079.032v-4.558a1.676,1.676,0,0,0-.826-1.441l-7.825-4.628V406.12a.843.843,0,0,1,.851-.837.861.861,0,0,1,.426.114Zm3.9-6.063a1.673,1.673,0,0,1,.845,1.451v11.989a.678.678,0,0,1-.358.59l-1.849.987v-8.347a1.677,1.677,0,0,0-.822-1.439l-8-4.744v-4.88a.843.843,0,0,1,1.273-.725Z" transform="translate(-514.5 -387.24)" fill-rule="evenodd" fill="url(#linear-gradient)"/>
    </g>
  </svg>
    ,
    fee:'0.2',
    feeLower:'0.2',
    proof:'135',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'AAVE',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g fill="none"> <circle fill="#2EBAC6" cx="16" cy="16" r="16"></circle> <path d="M22.934 21.574l-5.35-13.532C17.28 7.342 16.834 7 16.243 7h-.473c-.592 0-1.039.343-1.341 1.042l-2.327 5.896h-1.761c-.528.002-.956.448-.96 1v.014c.004.553.432.999.96 1.001h.946l-2.221 5.621a1.235 1.235 0 00-.066.384c0 .315.092.562.263.754.17.192.407.288.71.288a.933.933 0 00.552-.192c.17-.123.289-.302.38-.507l2.446-6.348h1.696c.527-.002.955-.449.96-1.001v-.027c-.005-.553-.433-1-.96-1.001h-.907l1.866-4.867L21.093 22.3c.092.205.21.384.381.507.161.122.354.19.553.192.302 0 .539-.096.71-.288.17-.192.262-.439.262-.754a.944.944 0 00-.065-.384z" fill="#FFF"></path> </g> </g></svg>,
    fee:'0.25',
    feeLower:'0.2',
    proof:'80',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'LINK',
    image:'https://altex.mn/images/USDT-TABLE.svg',
    pat: <svg width="32" height="32" viewBox="0 0 48 48">    
    <defs>
      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#fdae13"/>
        <stop offset="1" stop-color="#fe6703"/>
      </linearGradient>
      <clipPath id="clip-LINK">
        <rect width="48" height="48"/>
      </clipPath>
    </defs>
    <g id="LINK" clip-path="url(#clip-LINK)">
      <g id="Layer_2" data-name="Layer 2" transform="translate(14 12)">
        <g id="Layer_1" data-name="Layer 1">
          <path id="Path_5192" data-name="Path 5192" d="M10.5,0,8.278,1.266,2.222,4.734,0,6V18l2.222,1.266,6.111,3.468L10.556,24l2.222-1.266,6-3.468L21,18V6L18.778,4.734,12.722,1.266ZM4.444,15.468V8.532L10.5,5.064l6.056,3.468v6.936L10.5,18.936Z" fill="url(#linear-gradient)"/>
        </g>
      </g>
    </g>
  </svg>,
    fee:'0.6',
    feeLower:'1.7',
    proof:'850',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'BAT',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none">
    <circle cx="16" cy="16" r="16" fill="#FF5000"/>
    <path fill="#FFF" d="M6 23.5l10.051-17L26 23.477 6 23.5zm10.027-10.12l-4.108 6.786h8.235l-4.127-6.786z"/>
    </g>
    </svg>,
    fee:'23',
    feeLower:'55.6',
    proof:'23,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'ENJ',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none">
    <circle cx="16" cy="16" fill="#624dbf" r="16"/>
    <path d="M22.313 9c.494.057.994.088 1.482.176.967.183 1.283.643 1.119 1.576-.066.378-.31.611-.698.674a5.12 5.12 0 01-.698.05c-3.173.007-6.353.013-9.526.026-.48 0-.955.044-1.422.12-1.574.246-2.166.87-2.298 2.388-.06.713-.06.713.685.713h13.028c.205.006.402.044.573.15.58.354.435.908.402 1.419-.026.41-.283.636-.724.718a3.341 3.341 0 01-.56.038h-12.99c-.48 0-.473 0-.434.454.033.416.06.826.165 1.229.197.75.678 1.216 1.455 1.424.862.233 1.751.284 2.64.29 3.1.019 6.195.013 9.296.013.395 0 .763.05.994.397.448.668.099 1.6-.685 1.84-.671.208-1.376.258-2.074.265-2.91.05-5.82.057-8.73 0a15.91 15.91 0 01-2.672-.296c-2.074-.41-3.108-1.418-3.457-3.41-.079-.46-.125-.926-.184-1.387v-3.636c.04-.36.072-.718.119-1.071.276-2.257 1.33-3.366 3.647-3.857.823-.177 1.665-.215 2.495-.297C16.27 9 19.29 9 22.313 9z" fill="#ffffff"/>
    </g>
    </svg>,
    fee:'23',
    feeLower:'31.3',
    proof:'14,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'GRT',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
    <filter color-interpolation-filters="auto" id="a">
    <feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/>
    </filter>
    </defs>
    <g fill="none" fill-rule="evenodd">
    <circle fill="#5942CC" fill-rule="nonzero" cx="16" cy="16" r="16"/>
    <g filter="url(#a)">
    <path d="M20.707 19.543a1 1 0 010 1.414l-4 4a1 1 0 11-1.414-1.414l4-4a1 1 0 011.414 0zM15 7.25a6 6 0 110 12 6 6 0 010-12zm0 2a4 4 0 100 8 4 4 0 000-8zm7-2a1 1 0 110 2 1 1 0 010-2z" fill="#000000" fill-rule="nonzero"/>
    </g>
    </g>
    </svg>,
    fee:'55',
    feeLower:'55.6',
    proof:'70,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'MANA',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
    <filter id="a">
    <feColorMatrix in="SourceGraphic" values="0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 0 1.000000 0 0 0 1.000000 0"/>
    </filter>
    </defs>
    <g fill="none" fill-rule="evenodd">
    <circle fill="#FF2D55" fill-rule="nonzero" cx="16" cy="16" r="16"/>
    <g filter="url(#a)">
    <path d="M12.793 11.534l-7.045 8.454A10.912 10.912 0 015 16C5 9.923 9.923 5 16 5c6.078 0 11 4.923 11 11 0 3.36-1.507 6.369-3.883 8.387H8.883A11.511 11.511 0 017.2 22.6h12.562v-4.763l3.965 4.763H24.8l-5.043-6.05-1.392 1.672-5.571-6.688zM19.758 9.4a2.751 2.751 0 000 5.5 2.751 2.751 0 000-5.5zm-6.963-1.991a1.376 1.376 0 100 2.751 1.376 1.376 0 000-2.751zM9.989 25.212h12.023A10.97 10.97 0 0116 27a10.97 10.97 0 01-6.011-1.788zm7.843-6.346l-2.426 2.909H6.639a11.056 11.056 0 01-.891-1.787h7.046V12.82l5.038 6.045z" fill="#16141A" fill-rule="nonzero"/>
    </g>
    </g>
    </svg>,
    fee:'10',
    feeLower:'20',
    proof:'10,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'SUSHI',
    pat: <svg width="32" height="32" viewBox="0 0 48 48">    
    <defs>
      <linearGradient id="linear-gradient" x1="0.299" x2="0.387" y2="0.69" gradientUnits="objectBoundingBox">
        <stop offset="0" stop-color="#03b8ff"/>
        <stop offset="1" stop-color="#fa52a0"/>
      </linearGradient>
    </defs>
    <g id="sushi" transform="translate(-2140 -6476)">
      <circle id="Ellipse_19" data-name="Ellipse 19" cx="18" cy="18" r="18" transform="translate(2140 6476)" fill="#0e0e23"/>
      <g id="Group_980" data-name="Group 980" transform="translate(-0.499 -42.5)">
        <path id="Union_85" data-name="Union 85" d="M6.285,16.837C1.675,13.607-.979,9.5.336,7.279L.313,7.263l4.217-6.1.01-.015c1.47-2.1,6.431-1.276,11.117,2.007,4.778,3.1,7.351,7.478,5.973,9.575l-4.227,6.2-.044-.03A3.4,3.4,0,0,1,14.527,20C12.3,20,9.237,18.905,6.285,16.837Z" transform="translate(2147.5 6526.5)" fill="#fff"/>
        <g id="Group_979" data-name="Group 979" transform="translate(2148.219 6527.051)">
          <path id="Union_84" data-name="Union 84" d="M5.875,15.856c-4.309-3.041-6.789-6.914-5.56-9L.292,6.839l3.95-5.754C5.617-.89,10.254-.117,14.634,2.975c4.465,2.92,6.87,7.042,5.582,9.017h0l-3.95,5.839-.041-.028a3.162,3.162,0,0,1-2.647,1.028A14.539,14.539,0,0,1,5.875,15.856Z" transform="translate(0 0)" fill="url(#linear-gradient)"/>
          <path id="Path_448" data-name="Path 448" d="M20.846,14.512h0l-3.95,5.84h0c-1.374,1.975-5.939,1.111-10.319-1.895a26.362,26.362,0,0,1-2.387-1.962,3.3,3.3,0,0,0,2.057-1.209c1.374-1.46,2.061-1.8,2.662-1.718.6,0,1.288.6,2.4,2.061s2.662,1.889,3.607,1.116c.086-.086.172-.086.258-.172.773-.6,1.031-.859,2.49-3.607a2.7,2.7,0,0,1,3.177-1.288A3.255,3.255,0,0,1,20.846,14.512Z" transform="translate(-0.63 -2.52)" fill="#0e0f23"/>
          <path id="Path_449" data-name="Path 449" d="M20.42,12.788c-1.2,1.718-5.41.859-9.447-1.975C6.851,7.979,4.447,4.372,5.649,2.655S11.059,1.8,15.1,4.63,21.536,11.071,20.42,12.788Zm-3.779-2.576c-.6.859-2.662.429-4.723-.945C9.943,7.893,8.741,6.09,9.342,5.231S12,4.8,14.065,6.176C16.04,7.55,17.242,9.353,16.641,10.212Z" transform="translate(-0.805 -1.14)" fill="#fff" fill-rule="evenodd"/>
          <path id="Path_450" data-name="Path 450" d="M4.544,4.58c0-.086-.086-.172-.172-.086S4.2,4.58,4.2,4.666a2.185,2.185,0,0,1,.172.6c0,.086.086.172.172.086.086,0,.172-.086.086-.172A1.677,1.677,0,0,0,4.544,4.58Z" transform="translate(-0.644 -1.519)" fill="#fff"/>
          <path id="Path_451" data-name="Path 451" d="M5.058,6.18c0-.086-.086-.172-.172-.086S4.8,6.18,4.8,6.266a15.372,15.372,0,0,0,5.5,6.183c.086.086.172,0,.258,0,.086-.086,0-.172,0-.258A14.932,14.932,0,0,1,5.058,6.18Z" transform="translate(-0.729 -1.745)" fill="#fff"/>
          <path id="Path_452" data-name="Path 452" d="M17.172,16c-.086,0-.172,0-.172.086s0,.172.086.172c.258.086.6.172.859.258.086,0,.172,0,.172-.086s0-.172-.086-.172C17.773,16.172,17.429,16.086,17.172,16Z" transform="translate(-2.452 -3.149)" fill="#fff"/>
          <path id="Path_453" data-name="Path 453" d="M18.972,16.4a.172.172,0,1,0,0,.344,8.464,8.464,0,0,0,2.061.086.172.172,0,1,0,0-.344A8.3,8.3,0,0,1,18.972,16.4Z" transform="translate(-2.706 -3.206)" fill="#fff"/>
        </g>
      </g>
    </g>
  </svg>,
    fee:'5',
    feeLower:'2',
    proof:'3,800',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'MATIC',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none">
    <circle fill="#6F41D8" cx="16" cy="16" r="16"/>
    <path d="M21.092 12.693c-.369-.215-.848-.215-1.254 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0l-4.244 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409z" fill="#FFF"/>
    </g>
    </svg>,
    fee:'15',
    feeLower:'0.4',
    proof:'7,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'BAND',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none">
    <circle fill="#516AFF" cx="16" cy="16" r="16"/>
    <g fill="#FFF">
    <path d="M18.286 12.479l2.2 1.257V7.45l-4.4-2.2L9.25 9.1v13.671l6.836 3.929 6.757-4.007v-6.757l-6.522-3.929-2.2 1.1 6.522 3.85.078 4.636-4.635 2.593-4.715-2.672V10.2l4.715-2.593 2.2 1.179v3.693z"/>
    <path d="M15.85 16.25l1.493-.786 1.65 1.022-4.872 2.75v-5.657L15.85 14.6"/>
    </g>
    </g>
    </svg>,
    fee:'4',
    feeLower:'5',
    proof:'3,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
    
  },
  {
    name:'YFI',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none">
    <circle fill="#006AE3" cx="16" cy="16" r="16"/>
    <g fill="#FFF">
    <path d="M15.21 22.36V9.754h1.372V22.36z"/>
    <path d="M22.197 13.954l-4.24 1.124-.945-4.4 1.26-.284.498 2.084s1.145-1.878-.382-3.824c-.9-1-1.327-1.042-2.336-1.2-.888-.127-2.952.173-3.567 2.582-.26 1.552.033 2.7 2.033 4.203l-.112 1.673s-2.233-1.573-2.809-2.676c-.445-.873-1.21-2.597.17-4.997.742-1.2 2.206-2.351 4.785-2.23 1.296.054 4.463 1.64 3.972 5.342-.085.694-.445 1.618-.445 1.618l1.74-.387.378 1.372zm-2.421 9.864c-.776 1.179-2.27 2.29-4.843 2.103-1.297-.088-4.418-1.758-3.83-5.446.103-.69.488-1.603.488-1.603l-1.749.34-.342-1.379 4.27-1.012.83 4.424-1.27.252-.442-2.1s-1.194 1.845.279 3.833c.872 1.024 1.297 1.076 2.306 1.26.882.152 2.954-.096 3.633-2.487.3-1.543.036-2.7-1.921-4.258l.157-1.67s2.191 1.63 2.737 2.749c.418.888 1.136 2.633-.303 4.994z"/>
    </g>
    </g>
    </svg>,
    fee:'0.002',
    feeLower:'0.04',
    proof:'0.8',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'DAI',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd">
    <circle fill="#F4B731" fill-rule="nonzero" cx="16" cy="16" r="16"/>
    <path d="M9.277 8h6.552c3.985 0 7.006 2.116 8.13 5.194H26v1.861h-1.611c.031.294.047.594.047.898v.046c0 .342-.02.68-.06 1.01H26v1.86h-2.08C22.767 21.905 19.77 24 15.83 24H9.277v-5.131H7v-1.86h2.277v-1.954H7v-1.86h2.277V8zm1.831 10.869v3.462h4.72c2.914 0 5.078-1.387 6.085-3.462H11.108zm11.366-1.86H11.108v-1.954h11.37c.041.307.063.622.063.944v.045c0 .329-.023.65-.067.964zM15.83 9.665c2.926 0 5.097 1.424 6.098 3.528h-10.82V9.666h4.72z" fill="#FFF"/>
    </g>
    </svg>,
    fee:'30',
    feeLower:'10',
    proof:'7,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'SNX',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g fill="none">
    <circle fill="#5FCDF9" cx="16" cy="16" r="16"/>
    <path d="M11.092 12.264a.617.617 0 00-.493-.24h-3.98a.13.13 0 01-.086-.035.11.11 0 01-.033-.077v-2.8a.11.11 0 01.033-.077.097.097 0 01.086-.034h4.206c1.06 0 1.975.454 2.747 1.359l1.023 1.303-1.992 2.534-1.511-1.933zm7.351-1.917c.768-.896 1.688-1.346 2.76-1.346h4.193a.102.102 0 01.078.026.1.1 0 01.025.085v2.8c0 .03-.008.056-.025.077a.084.084 0 01-.078.034h-3.98a.617.617 0 00-.492.24L17.99 15.99l2.945 3.752c.12.141.296.227.477.223h3.98a.09.09 0 01.077.034.14.14 0 01.025.09v2.8a.12.12 0 01-.025.077.084.084 0 01-.078.034h-4.189c-1.072 0-1.984-.454-2.748-1.359l-2.44-3.108-2.439 3.108c-.768.905-1.688 1.36-2.76 1.36H6.62a.09.09 0 01-.078-.035.121.121 0 01-.025-.09v-2.8c0-.03.009-.056.025-.077a.084.084 0 01.078-.034h3.98c.189 0 .37-.09.493-.24l2.879-3.67 4.472-5.707z" fill="#FFF"/>
    </g>
    </svg>,
    fee:'3',
    feeLower:'6',
    proof:'2,800',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'OGN',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Layer_1" data-name="Layer 1">
    <path id="SVGID" d="M18,0A18,18,0,1,1,0,18,18,18,0,0,1,18,0Z" fill="#1a82ff"/>
    <path id="SVGID-2" data-name="SVGID" d="M899.488,769.677a8.981,8.981,0,0,1-13.15,0,12.9,12.9,0,0,1,0-14.812,8.978,8.978,0,0,1,13.15,0,12.9,12.9,0,0,1,0,14.812Z" transform="translate(-874.907 -744.265)" fill="#fff"/>
    <path id="SVGID-3" data-name="SVGID" d="M1468.2,1529.837a3,3,0,0,0,1.9-.608,3.4,3.4,0,0,0,1.131-1.649,11.818,11.818,0,0,0,.494-2,13.5,13.5,0,0,0,.143-2.025,15.69,15.69,0,0,0-.159-2.359l-6.407,6.677A3,3,0,0,0,1468.2,1529.837Z" transform="translate(-1450.228 -1505.553)" fill="#1a82ff"/>
    <path id="SVGID-4" data-name="SVGID" d="M1400.964,1140.1a3,3,0,0,0-1.9.608,3.4,3.4,0,0,0-1.131,1.649,11.57,11.57,0,0,0-.494,2,13.5,13.5,0,0,0-.143,2.025q0,.7.045,1.331l6.111-6.367A2.891,2.891,0,0,0,1400.964,1140.1Z" transform="translate(-1382.927 -1128.373)" fill="#1a82ff"/>
    <path id="SVGID-5" data-name="SVGID" d="M856.687,1073.665l-.787-.755,5.967-6.22.787.755Zm11.242-6.49-.787-.755,5.967-6.22.787.755Z" transform="translate(-847.096 -1049.295)" fill="#1a82ff"/>
  </g>
</svg>,
    fee:'30',
    feeLower:'70',
    proof:'35,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  }
]

function Fee() {
  const [show, setShow] = useState('button2')
  const toggle = (buttonId) =>{
    if(buttonId !== show){
      setShow(buttonId)
    }
  }

  return (
    <>
      <div className="flex w-full pb-[16px] border-b-[1px] border-b-[#1E274A] text-[18px] font-medium gap-[40px] mt-[80px] mb-[40px]">
      <div onClick={() => toggle("button1")} className={`relative ${show === "button1" ? "text-white cursor-pointer active" : "text-[#626880] cursor-pointer"}`}>
    ОРЛОГЫН ШИМТГЭЛ
    <div className={`absolute h-[2px] w-full ${show === "button1" ? "bg-[#13A9FD] bottom-[-17px] active" : ""}`}></div>

  </div>
  <div onClick={() => toggle("button2")} className={`relative ${show === "button2" ? "text-white cursor-pointer active" : "text-[#626880] cursor-pointer"}`}>
    ЗАРЛАГЫН ШИМТГЭЛ
    <div className={`absolute h-[2px] w-full ${show === "button2" ? "bg-[#13A9FD] bottom-[-17px] active" : ""}`}></div>
  </div>
  <div onClick={() => toggle("button3")} className={`relative ${show === "button3" ? "text-white cursor-pointer active" : "text-[#626880] cursor-pointer"}`}>
    АРИЛЖААНЫ ШИМТГЭЛ
    <div className={`absolute h-[2px] w-full ${show === "button3" ? "bg-[#13A9FD] bottom-[-17px] active" : ""}`}></div>

  </div>
      </div>
      {show === "button1" && (
        <div className="w-full min-w-[700px] overflow-x-auto">
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
          <svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
            <circle cx="16" cy="16" fill="#6cde07" r="16"/>
            <path d="M22.5 19.154c0 2.57-2.086 4.276-5.166 4.533V26h-2.11v-2.336A11.495 11.495 0 019.5 21.35l1.552-2.126c1.383 1.075 2.692 1.776 4.269 2.01v-4.58c-3.541-.888-5.19-2.173-5.19-4.813 0-2.523 2.061-4.252 5.093-4.486V6h2.11v1.402a9.49 9.49 0 014.56 1.776l-1.359 2.196c-1.067-.771-2.158-1.262-3.298-1.495v4.439c3.687.888 5.263 2.313 5.263 4.836zm-7.18-5.327V9.715c-1.527.117-2.327.935-2.327 1.963 0 .98.46 1.612 2.328 2.15zm4.318 5.49c0-1.05-.51-1.681-2.401-2.219v4.23c1.528-.118 2.401-.889 2.401-2.01z" fill="#ffffff"/>
            </g>
           </svg>
            USD
          </div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">Шимтгэлгүй</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">$3.0</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">-</div>

          <div className="border-b border-[#283359] text-center grid content-center">-</div>
          <div className="border-b border-[#283359] text-center grid content-center">-</div>

          {json.map((data)=>{
            return (
             <>
               <div className="border-b border-[#283359] font-bold flex pl-14 text-[18px]  py-[16px]">
                <div className="flex justify-center items-center">{data.pat}</div>
                <div className="flex justify-center items-center">{data.name}</div>
              </div>
              <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">{data.feeSize}</div>
              <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">
                {data.feeSizeLower = "0" ? '-' : data.feeSizeLower}
              </div>
              <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">
              {data.feeSizeLower = "0" ? '-' : data.feeSizeLower}
              </div>
              <div className="text-center grid content-center border-b border-[#283359]">-</div>
              <div className="text-center grid content-center border-b border-[#283359]">-</div>
              
             </>
            )
          })}
        </div>
      </div>
        </div>
      )}
      {show === "button2" && (
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
          <svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
            <circle cx="16" cy="16" fill="#6cde07" r="16"/>
            <path d="M22.5 19.154c0 2.57-2.086 4.276-5.166 4.533V26h-2.11v-2.336A11.495 11.495 0 019.5 21.35l1.552-2.126c1.383 1.075 2.692 1.776 4.269 2.01v-4.58c-3.541-.888-5.19-2.173-5.19-4.813 0-2.523 2.061-4.252 5.093-4.486V6h2.11v1.402a9.49 9.49 0 014.56 1.776l-1.359 2.196c-1.067-.771-2.158-1.262-3.298-1.495v4.439c3.687.888 5.263 2.313 5.263 4.836zm-7.18-5.327V9.715c-1.527.117-2.327.935-2.327 1.963 0 .98.46 1.612 2.328 2.15zm4.318 5.49c0-1.05-.51-1.681-2.401-2.219v4.23c1.528-.118 2.401-.889 2.401-2.01z" fill="#ffffff"/>
            </g>
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
          {json.map((data)=>{
            return (
             <>
               <div className="border-b border-[#283359] font-bold flex pl-14 text-[18px]  py-[16px]">
                <div className="flex justify-center items-center">{data.pat}</div>
                <div className="flex justify-center items-center">{data.name}</div>
              </div>
              <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">{data.fee} {data.name}</div>
              <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">{data.feeLower} {data.name}</div>
              <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">{data.proof} {data.name}</div>
             </>
            )
          })}
        </div>
      </div>
      )}
      {show === "button3" && (
        <div className="w-full grid grid-cols-2 gap-[8px] min-w-[700px] overflow-x-auto">
          <div className="relative">
            <div className="text-center  h-[40px] bg-[#101C47] grid content-center ">
            Maker
            <div className="absolute right-[16px] top-[8px] ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#ffffff"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.64103C12.4248 7.64103 12.7692 7.98542 12.7692 8.41026V12.5128C12.7692 12.9377 12.4248 13.2821 12 13.2821C11.5752 13.2821 11.2308 12.9377 11.2308 12.5128V8.41026C11.2308 7.98542 11.5752 7.64103 12 7.64103Z" fill="#ffffff"/> <path d="M13.0256 15.5897C13.0256 16.1562 12.5664 16.6154 12 16.6154C11.4336 16.6154 10.9744 16.1562 10.9744 15.5897C10.9744 15.0233 11.4336 14.5641 12 14.5641C12.5664 14.5641 13.0256 15.0233 13.0256 15.5897Z" fill="#ffffff"/> </g>
              </svg>
              </div>
            </div>
            <div className="grid text-center h-[40px mt-[24px] content-center mb-[256px]">0.25%</div>
          </div>
          <div className="relative">
            <div className="text-center h-[40px] bg-[#101C47] grid content-center">
              Taker
              <div className="absolute right-[16px] top-[8px] ">
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none">
                <g id="SVGRepo_bgCarrier" stroke-width="0"/>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
                <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#ffffff"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.64103C12.4248 7.64103 12.7692 7.98542 12.7692 8.41026V12.5128C12.7692 12.9377 12.4248 13.2821 12 13.2821C11.5752 13.2821 11.2308 12.9377 11.2308 12.5128V8.41026C11.2308 7.98542 11.5752 7.64103 12 7.64103Z" fill="#ffffff"/> <path d="M13.0256 15.5897C13.0256 16.1562 12.5664 16.6154 12 16.6154C11.4336 16.6154 10.9744 16.1562 10.9744 15.5897C10.9744 15.0233 11.4336 14.5641 12 14.5641C12.5664 14.5641 13.0256 15.0233 13.0256 15.5897Z" fill="#ffffff"/> </g>
              </svg>
              </div>
            </div>
            <div className="grid text-center h-[40px] mt-[24px] content-center mb-[256px]">0.35%</div>
          </div>
        </div>
      )}
    </>
  );
}

export default Fee;