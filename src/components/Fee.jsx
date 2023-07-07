import { useState } from "react";
import { useIntl } from "react-intl";
import Mana from '../SVG/altex.mn-fee-coin-icons/decentraland-mana-logo.svg'
import Link from '../SVG/altex.mn-fee-coin-icons/Link-coin.svg'
import Sushi from '../SVG/altex.mn-fee-coin-icons/Sushi-coin.svg'
import Snx from '../SVG/altex.mn-fee-coin-icons/Snx-coin.svg'
import Ogn from '../SVG/altex.mn-fee-coin-icons/Ogn-coin.svg'
import Comp from '../SVG/altex.mn-fee-coin-icons/Comp-coin.svg'
import Aave from '../SVG/altex.mn-fee-coin-icons/aave-coin.svg'
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
    proof:'1.1',
    feeSize: "Шимтгэлгүй",
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
    proof:'16',
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
    proof:'250',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'BCH',
    pat:<svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="bitcoin-cash-bch-logo" transform="translate(-0.4 -0.4)">
      <circle id="Ellipse_1680" data-name="Ellipse 1680" cx="16" cy="16" r="16" transform="translate(0.4 0.4)" fill="#0ac18e"/>
      <path id="symbol_1_" d="M205.741,151.777c-.808-1.833-2.665-2.224-4.939-1.845l-.731-2.833-1.722.445.718,2.824c-.453.114-.918.212-1.38.343l-.718-2.808-1.722.445.731,2.833c-.371.106-3.477.9-3.477.9l.473,1.845s1.265-.355,1.253-.327a.916.916,0,0,1,1.188.5l2.008,7.763a.637.637,0,0,1-.5.739c.029.016-1.253.322-1.253.322l.188,2.151s3.077-.788,3.482-.89l.739,2.865,1.722-.445-.739-2.886q.71-.165,1.384-.343l.735,2.869,1.722-.445-.739-2.861c2.653-.645,4.526-2.318,4.143-4.877a3.979,3.979,0,0,0-3.331-2.951,2.845,2.845,0,0,0,.763-3.335Zm-.829,6.755c.343,2.535-3.18,2.845-4.343,3.151l-1.012-3.792C200.724,157.585,204.332,156.3,204.912,158.532Zm-2.122-5.163c.363,2.253-2.649,2.514-3.62,2.763l-.922-3.441C199.222,152.451,202.051,151.284,202.79,153.369Z" transform="translate(-184.285 -140.738)" fill="#fff"/>
    </g>
  </svg>,
    fee:'0.001',
    feeLower:'0.01',
    proof:'260',
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
    proof:'30,000',
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
    proof:'6,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'COMP',
    pat: <img className="w-[32px] h-[32px] inline-block mr-[8px]" src={Comp} alt="Your SVG" />,
    fee:'0.2',
    feeLower:'0.2',
    proof:'850',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'AAVE',
    pat: <img className="w-[32px] h-[32px] inline-block mr-[8px]" src={Aave} alt="Your SVG" />,
    fee:'0.25',
    feeLower:'0.2',
    proof:'460',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'LINK',
    pat: <img className="w-[32px] h-[32px] inline-block mr-[8px]" src={Link} alt="Your SVG" />,
    fee:'0.6',
    feeLower:'1.7',
    proof:'4200',
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
    proof:'100,000',
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
    fee:'22',
    feeLower:'31.3',
    proof:'75,000',
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
    proof:'150,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'MANA',
    pat: <img className="w-[32px] h-[32px] inline-block mr-[8px]" src={Mana} alt="Your SVG" />,
    fee:'10',
    feeLower:'20',
    proof:'15,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'SUSHI',
    pat: <img className="w-[32px] h-[32px] inline-block mr-[8px]" src={Sushi} alt="Your SVG" />,
    fee:'5',
    feeLower:'2',
    proof:'30,000',
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
    proof:'30,000',
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
    proof:'15,000',
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
    proof:'4',
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
    proof:'30,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'SNX',
    pat: <img className="w-[32px] h-[32px] inline-block mr-[8px]" src={Snx} alt="Your SVG" />,
    fee:'3',
    feeLower:'6',
    proof:'10,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  },
  {
    name:'OGN',
    pat: <img className="w-[32px] h-[32px] inline-block mr-[8px]" src={Ogn} alt="Your SVG" />,
    fee:'30',
    feeLower:'70',
    proof:'300,000',
    feeSize:"Шимтгэлгүй",
    feeSizeLower:'0'
  }
]

function Fee() {
  const intl = useIntl();
  const [show, setShow] = useState('button1')
  const toggle = (buttonId) =>{
    if(buttonId !== show){
      setShow(buttonId)
    }
  }

  return (
    <div className="">
      <div className="flex w-full pb-[16px] border-b-[1px] border-b-[#1E274A] text-[17px] sm:text-[18px] font-medium gap-[40px] mt-[80px] mb-[40px]">
        <div onClick={() => toggle("button1")} className={`relative ${show === "button1" ? "text-white cursor-pointer active" : "text-[#626880] cursor-pointer"}`}>
          <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_deposit_title" }) }} />
          <div className={`absolute h-[2px] w-full ${show === "button1" ? "bg-[#13A9FD] bottom-[-17px] active" : ""}`}></div>
        </div>
        <div onClick={() => toggle("button2")} className={`relative ${show === "button2" ? "text-white cursor-pointer active" : "text-[#626880] cursor-pointer"}`}>
          <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_withdraw_title" }) }} />
          <div className={`absolute h-[2px] w-full ${show === "button2" ? "bg-[#13A9FD] bottom-[-17px] active" : ""}`}></div>
        </div>
        <div onClick={() => toggle("button3")} className={`relative ${show === "button3" ? "text-white cursor-pointer active" : "text-[#626880] cursor-pointer"}`}>
          <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_trade_title" }) }} />
          <div className={`absolute h-[2px] w-full ${show === "button3" ? "bg-[#13A9FD] bottom-[-17px] active" : ""}`}></div>
        </div>
      </div>
      <div className="overflow-x-auto">
      {show === "button1" && (
        <div className="flex w-full min-w-[1000px]">
        <div className="inline-grid grid-cols-6 text-center font-light mb-[62px] w-full">
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center row-span-2">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_currency" }) }} />
          </div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center row-span-2">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_percent" }) }} />
          </div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center row-span-2">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_min" }) }} />
          </div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center col-span-3">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_max" }) }} />
          </div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_verified" }) }} />
          </div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_trusted" }) }} />
          </div>
          <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_partner" }) }} />
          </div>

          <div className="font-bold text-[18px] border-b border-[#283359] flex pl-11 items-center py-[16px]">
            <svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle cx="16" cy="16" fill="#6cde07" r="16" />
                <path d="M22.5 19.154c0 2.57-2.086 4.276-5.166 4.533V26h-2.11v-2.336A11.495 11.495 0 019.5 21.35l1.552-2.126c1.383 1.075 2.692 1.776 4.269 2.01v-4.58c-3.541-.888-5.19-2.173-5.19-4.813 0-2.523 2.061-4.252 5.093-4.486V6h2.11v1.402a9.49 9.49 0 014.56 1.776l-1.359 2.196c-1.067-.771-2.158-1.262-3.298-1.495v4.439c3.687.888 5.263 2.313 5.263 4.836zm-7.18-5.327V9.715c-1.527.117-2.327.935-2.327 1.963 0 .98.46 1.612 2.328 2.15zm4.318 5.49c0-1.05-.51-1.681-2.401-2.219v4.23c1.528-.118 2.401-.889 2.401-2.01z" fill="#ffffff" />
              </g>
            </svg>
            USD
          </div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">0.25%</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">$3.0</div>
          <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">-</div>

          <div className="border-b border-[#283359] text-center grid content-center">-</div>
          <div className="border-b border-[#283359] text-center grid content-center">-</div>

          
          {json.map((data) => {
            return (
              <>
                <div className="border-b border-[#283359] font-bold pl-11 flex text-[18px] py-[16px]">
                  <div className="flex justify-center items-center">{data.pat}</div>
                  <div className="flex justify-center items-center">{data.name}</div>
                </div>
                <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">{data.feeSize !== "Шимтгэлгүй" ? data.feeSize : intl.formatMessage({id: "fee_nofee"})}</div>
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
      )}
      {show === "button2" && (
        <div className="flex w-full min-w-[1000px]">
          <div className="inline-grid grid-cols-6 text-center font-light mb-[62px]">
            <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center row-span-2">
              <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_currency" }) }} />
            </div>
            <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center row-span-2">
              <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_percent" }) }} />
            </div>
            <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center row-span-2">
              <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_min" }) }} />
            </div>
            <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center col-span-3">
              <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_max" }) }} />
            </div>
            <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center">
              <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_verified" }) }} />
            </div>
            <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center">
              <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_trusted" }) }} />
            </div>
            <div className="p-[10px] bg-[#101C47] border-[4px] border-[#050F36] flex justify-center items-center">
              <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_partner" }) }} />
            </div>

           
           <div className="font-bold text-[18px] border-b border-[#283359] flex pl-11 items-center py-[16px]">
              <svg className="inline-block mr-[8px]" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fill-rule="evenodd">
                  <circle cx="16" cy="16" fill="#6cde07" r="16" />
                  <path d="M22.5 19.154c0 2.57-2.086 4.276-5.166 4.533V26h-2.11v-2.336A11.495 11.495 0 019.5 21.35l1.552-2.126c1.383 1.075 2.692 1.776 4.269 2.01v-4.58c-3.541-.888-5.19-2.173-5.19-4.813 0-2.523 2.061-4.252 5.093-4.486V6h2.11v1.402a9.49 9.49 0 014.56 1.776l-1.359 2.196c-1.067-.771-2.158-1.262-3.298-1.495v4.439c3.687.888 5.263 2.313 5.263 4.836zm-7.18-5.327V9.715c-1.527.117-2.327.935-2.327 1.963 0 .98.46 1.612 2.328 2.15zm4.318 5.49c0-1.05-.51-1.681-2.401-2.219v4.23c1.528-.118 2.401-.889 2.401-2.01z" fill="#ffffff" />
                </g>
              </svg>
              USD
            </div>
            <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">0%</div>
            <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">$3.0</div>
            <div className="border-b border-[#283359] flex justify-center items-center py-[16px]">$30,000.0</div>

            <div className="col-span-2 row-[span_21] flex mt-[248px] p-[100px]">
              <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_increase_message" }) }} />
            </div>
            {json.map((data) => {
              return (
                <>
                  <div className="border-b border-[#283359] font-bold pl-11 flex text-[18px] py-[16px] ">
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
        <div className="w-full grid grid-cols-2 gap-[8px] max-w-[1400px] overflow-x-auto">
          <div className="relative">
            <div className="text-center  h-[40px] bg-[#101C47] grid content-center ">
              Maker
              <div className="group">
                <div className="absolute right-[16px] top-[8px] ">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#ffffff" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.64103C12.4248 7.64103 12.7692 7.98542 12.7692 8.41026V12.5128C12.7692 12.9377 12.4248 13.2821 12 13.2821C11.5752 13.2821 11.2308 12.9377 11.2308 12.5128V8.41026C11.2308 7.98542 11.5752 7.64103 12 7.64103Z" fill="#ffffff" /> <path d="M13.0256 15.5897C13.0256 16.1562 12.5664 16.6154 12 16.6154C11.4336 16.6154 10.9744 16.1562 10.9744 15.5897C10.9744 15.0233 11.4336 14.5641 12 14.5641C12.5664 14.5641 13.0256 15.0233 13.0256 15.5897Z" fill="#ffffff" /> </g>
                  </svg>
                </div>
                <div className="absolute right-[-55px] sm:right-[-115px] z-10">
                  <div class="w-16 hidden group-hover:block overflow-hidden absolute top-[-6px] left-[115px]">
                    <div class=" h-[8px] bg-white w-[10px] rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <span className="sm:w-[258px] w-[200px] text-left rounded sm:h-[78px] h-[56px] p-[8px] border bg-white font-normal sm:text-[10px] text-[7px] text-[#000000] hidden group-hover:block" dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_maker_info" }) }} />
                </div>
              </div>
            </div>
            <div className="grid text-center h-[40px] mt-[24px] content-center mb-[256px]">0.25%</div>
          </div>
          <div className="relative">
            <div className="text-center h-[40px] bg-[#101C47] grid content-center">
              Taker
              <div className="group">
                <div className="absolute right-[16px] top-[8px] group-hover">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" viewBox="0 0 24 24" fill="none">
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" />
                    <g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 3.53846C7.32682 3.53846 3.53846 7.32682 3.53846 12C3.53846 16.6732 7.32682 20.4615 12 20.4615C16.6732 20.4615 20.4615 16.6732 20.4615 12C20.4615 7.32682 16.6732 3.53846 12 3.53846ZM2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" fill="#ffffff" /> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.64103C12.4248 7.64103 12.7692 7.98542 12.7692 8.41026V12.5128C12.7692 12.9377 12.4248 13.2821 12 13.2821C11.5752 13.2821 11.2308 12.9377 11.2308 12.5128V8.41026C11.2308 7.98542 11.5752 7.64103 12 7.64103Z" fill="#ffffff" /> <path d="M13.0256 15.5897C13.0256 16.1562 12.5664 16.6154 12 16.6154C11.4336 16.6154 10.9744 16.1562 10.9744 15.5897C10.9744 15.0233 11.4336 14.5641 12 14.5641C12.5664 14.5641 13.0256 15.0233 13.0256 15.5897Z" fill="#ffffff" /> </g>
                  </svg>
                </div>
                
                <div className="absolute right-3">
                  <div class=" hidden group-hover:block overflow-hidden absolute top-[-6px] left-[220px] float-right">
                    <div class=" h-[8px] bg-white w-[10px] rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <span className="w-[150px] md:w-[240px] text-left rounded h-[46px] sm:h-[50px] p-[8px] border bg-white font-normal md:text-[10px] text-[7px] text-[#000000] hidden  group-hover:block" dangerouslySetInnerHTML={{ __html: intl.formatMessage({ id: "fee_taker_info" }) }} />
                </div>
                </div>
            </div>
            <div className="grid text-center h-[40px] mt-[24px] content-center mb-[256px]">0.35%</div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}

export default Fee;