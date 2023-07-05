import { FormattedMessage, useIntl } from "react-intl";

function Team() {
  const intl = useIntl();

  return (
    <>
      <div className="flex  flex-col md:flex-row gap-[24px] pb-[160px] mt-[160px] items-center border-b-[0.5px] border-b-[#13A9FD] leading-[35px]">
        <img src="/images/ceo.png" alt="team" className="w-[283px]" />
        <div className="grow font-extralight">
          <div className="font-bold text-[32px] mb-[16px]">
            <FormattedMessage id="our_team_ceo_name"/>
          </div>
          <div className="text-[24px] mb-[40px]">
            <FormattedMessage id="our_team_ceo"/>
          </div>
          <div className="text-[16px] z-10">
          <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "our_team_ceo_background"}) }} />
          </div>
        </div>
      </div>
      <div className="absolute  w-[1500px] h-[1500px] bottom-[-600px] left-[600px] bg-gradient-radial-bottom from-[rgba(0,108,255,0.26)] to-[rgba(19,169,253,0)] " ></div>
      <div className="absolute w-[1500px] h-[1500px] top-[500px] right-[400px] bg-gradient-radial-bottom from-[rgba(0,108,255,0.26)] to-[rgba(19,169,253,0)] " ></div>

      <div className="flex flex-col lg:flex-row gap-[24px] pb-[160px] mt-[160px] items-center border-b-[0.5px] border-b-[#13A9FD] leading-[35px] ">
        <div className="grow font-extralight ">
          <div className="font-bold text-[32px] mb-[16px]">
            <FormattedMessage id="our_team_header"/>
          </div>
          <div className="text-[16px] z-10">
          <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "our_team_content"}) }} />
          </div>
        </div>
        <img src="/images/team.png" alt="team" className="w-[800px]" />
      </div>
      
      <div className="flex flex-col sm:flex-row  gap-[85px] mt-[160px] pb-[240px] items-center top-[-500px] ]">
    
      <svg className="max-w-[150px] invisible sm:visible hidden sm:block md:block xl:block md:visible xl:visible " viewBox="0 0 190 353" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.596 93.7129L49.338 88.4449C52.621 91.3969 55.864 95.7039 60.129 95.7039C65.291 95.7039 68.129 93.4939 68.129 90.1189C68.129 86.5589 65.169 85.4189 61.002 83.7529L54.732 81.1849C50.214 79.4109 45.458 76.0369 45.458 69.7099C45.458 62.8099 51.911 57.5099 60.858 57.5099C66.216 57.5099 70.876 61.0829 74.467 64.5099L70.286 69.3799C67.369 67.0369 64.786 64.1799 60.858 64.1799C56.51 64.1799 53.675 66.0989 53.675 69.2619C53.675 72.6619 57.168 73.9199 60.97 75.3899L67.157 77.8379C72.614 79.9819 76.43 83.2379 76.43 89.5109C76.43 96.5259 70.257 102.375 59.96 102.375C53.76 102.375 48.944 97.7509 44.595 93.7139" fill="white" />
          <path d="M21.463 57.5879C9.612 57.5879 0 67.6409 0 80.0379C0 92.4349 9.612 102.488 21.463 102.488C33.314 102.488 42.939 92.4359 42.939 80.0379C42.939 67.6399 33.327 57.5879 21.463 57.5879ZM21.463 95.5579C13.263 95.5579 6.616 88.6159 6.616 80.0379C6.616 71.4599 13.267 64.5059 21.463 64.5059C29.659 64.5059 36.322 71.4599 36.322 80.0379C36.322 88.6159 29.67 95.5579 21.463 95.5579Z" fill="white" />
          <path d="M105.762 95.4759V102.487H80.073V57.2159H87.061V95.4759H105.762Z" fill="white" />
          <path d="M20.2949 -0.00012207V53.7569H23.0459V2.75088H177.246V156.942H23.0469V105.936H20.2949V159.7H179.995V-0.00012207H20.2949Z" fill="white" />
          <path d="M56.579 250.034L48.629 253.182L37.229 247.482L56.579 239.538L97.96 260.454L87.46 265.701L56.579 250.034Z" fill="white" />
          <path d="M30.715 249.884L9.99902 260.229V290.89L14.899 293.364L25.019 288.264L20.358 285.789V265.701L30.716 260.454L41.136 265.701V280.016L51.482 274.769V260.154L30.715 249.884Z" fill="white" />
          <path d="M51.481 280.469L10 301.309V331.896L30.741 342.691L51.481 332.196V301.834L46.608 299.06L36.637 304.16L41.137 306.634V326.723L30.742 332.046L20.371 326.946V306.408L51.482 291.264L51.481 280.469Z" fill="white" />
          <path d="M48.7078 338.943L37.1628 344.943L56.6548 352.743L97.8119 332.276L87.3119 326.876L56.3509 342.319L48.7078 338.943Z" fill="white" />
          <path d="M86.5901 311.427C86.5901 304.5 91.2411 300.381 97.2101 300.381C98.4608 300.359 99.7035 300.585 100.867 301.045C102.03 301.505 103.091 302.19 103.988 303.062L101.864 305.488C101.272 304.893 100.566 304.423 99.788 304.107C99.0102 303.791 98.1765 303.635 97.3371 303.649C93.3581 303.649 90.6821 306.563 90.6821 311.315C90.6821 316.145 93.0561 319.071 97.5561 319.071C98.696 319.118 99.82 318.79 100.756 318.138V313.568H96.5241V310.486H104.318V319.821C102.326 321.519 99.7727 322.415 97.1561 322.334C91.1051 322.335 86.5901 318.437 86.5901 311.427ZM116.474 313.667H113.055V321.941H109.076V300.774H116.636C121.301 300.774 124.896 302.329 124.896 307.054C124.954 308.426 124.541 309.777 123.725 310.881C122.908 311.985 121.738 312.776 120.409 313.123L125.774 321.945H121.301L116.474 313.667ZM116.224 310.667C119.298 310.667 120.972 309.467 120.972 307.054C120.972 304.62 119.298 303.778 116.224 303.778H113.055V310.667H116.224ZM127.964 311.276C127.964 304.426 132.012 300.386 137.856 300.386C143.7 300.386 147.749 304.446 147.749 311.276C147.749 318.126 143.701 322.335 137.856 322.335C132.011 322.335 127.964 318.127 127.964 311.276ZM143.664 311.276C143.664 306.524 141.386 303.649 137.864 303.649C134.342 303.649 132.064 306.524 132.064 311.276C132.064 316.028 134.341 319.076 137.864 319.076C141.387 319.076 143.664 316.027 143.664 311.276ZM151.921 312.662V300.774H155.9V312.946C155.9 317.556 157.724 319.071 160.441 319.071C163.185 319.071 165.078 317.556 165.078 312.946V300.774H168.906V312.662C168.906 319.615 165.641 322.335 160.441 322.335C155.241 322.335 151.921 319.615 151.921 312.662ZM174.264 300.774H181.33C186.311 300.774 190.001 302.406 190.001 307.3C190.001 312.02 186.301 314.163 181.467 314.163H178.242V321.946H174.264V300.774ZM181.138 311.159C184.486 311.159 186.077 309.904 186.077 307.3C186.077 304.671 184.335 303.778 181 303.778H178.242V311.159H181.138Z" fill="white" />
          <g id="Group_7856"  data-name="Group 7856" transform="translate(-114 -2018)">
              <g id="Group_7855" data-name="Group 7855" transform="translate(0 -10)">
                <path id="Path_6237" data-name="Path 6237" d="M149.44,65.946a6.269,6.269,0,0,1,2.6,5.6,6.173,6.173,0,0,1-5.47,5.74c-3.275.135-6.559.042-9.84.045a.949.949,0,0,1-.239-.082V56.085c.3-.016.572-.044.848-.045,2.443,0,4.885.012,7.327-.006a5.978,5.978,0,0,1,5.009,9.558c-.068.1-.131.2-.233.353m-9.728,2.031c0,1.983-.008,3.891.018,5.8,0,.126.263.358.4.358,2.055-.01,4.116.039,6.162-.114a3.239,3.239,0,0,0,2.573-3.273A2.86,2.86,0,0,0,146.078,68c-2.076-.076-4.157-.019-6.366-.019m.039-3.269c1.737,0,3.426.012,5.115,0a2.673,2.673,0,0,0,2.786-2.729A2.617,2.617,0,0,0,144.9,59.3c-1.53-.018-3.058-.006-4.588,0a4.529,4.529,0,0,0-.562.072Z" transform="translate(65.993 2244.186)" fill="#fff"/>
                <path id="Path_6243" data-name="Path 6243" d="M184.1,71.506l2.243,1.978a9.88,9.88,0,0,1-8.956,3.9c-4.213-.378-7.362-3.405-8.218-8.127a13.92,13.92,0,0,1,.8-8.161c1.686-3.908,5.124-5.664,9.24-5.41a9.809,9.809,0,0,1,6.835,3.5c.094.1.168.225.277.371l-2.338,2.065c-.273-.286-.51-.553-.764-.8a6.434,6.434,0,0,0-6.423-1.663,5.8,5.8,0,0,0-4.241,4.528,10.032,10.032,0,0,0,.484,7.014,6.2,6.2,0,0,0,9.922,1.777c.347-.325.725-.618,1.14-.971" transform="translate(52.218 2244.346)" fill="#fff"/>
              </g>
            </g>
        </svg>
        <div className="absolute  w-[1500px] h-[1500px] bottom-[-100] left-[500px] right-0 bg-gradient-radial-bottom from-[rgba(0,108,255,0.26)] to-[rgba(19,169,253,0)] " ></div>
        <div className="grow  font-extralight z-10">
          <div className="">
          <div className="font-bold text-[32px] mb-[10px]">
            <FormattedMessage id="our_team_partner"/>
          </div>
          <div className="flex gap-[40px] sm:hidden">
          <svg className="w-[calc(70%/2)]  " viewBox="0 -100 190 353" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M44.596 93.7129L49.338 88.4449C52.621 91.3969 55.864 95.7039 60.129 95.7039C65.291 95.7039 68.129 93.4939 68.129 90.1189C68.129 86.5589 65.169 85.4189 61.002 83.7529L54.732 81.1849C50.214 79.4109 45.458 76.0369 45.458 69.7099C45.458 62.8099 51.911 57.5099 60.858 57.5099C66.216 57.5099 70.876 61.0829 74.467 64.5099L70.286 69.3799C67.369 67.0369 64.786 64.1799 60.858 64.1799C56.51 64.1799 53.675 66.0989 53.675 69.2619C53.675 72.6619 57.168 73.9199 60.97 75.3899L67.157 77.8379C72.614 79.9819 76.43 83.2379 76.43 89.5109C76.43 96.5259 70.257 102.375 59.96 102.375C53.76 102.375 48.944 97.7509 44.595 93.7139" fill="white" />
          <path d="M21.463 57.5879C9.612 57.5879 0 67.6409 0 80.0379C0 92.4349 9.612 102.488 21.463 102.488C33.314 102.488 42.939 92.4359 42.939 80.0379C42.939 67.6399 33.327 57.5879 21.463 57.5879ZM21.463 95.5579C13.263 95.5579 6.616 88.6159 6.616 80.0379C6.616 71.4599 13.267 64.5059 21.463 64.5059C29.659 64.5059 36.322 71.4599 36.322 80.0379C36.322 88.6159 29.67 95.5579 21.463 95.5579Z" fill="white" />
          <path d="M105.762 95.4759V102.487H80.073V57.2159H87.061V95.4759H105.762Z" fill="white" />
          <path d="M20.2949 -0.00012207V53.7569H23.0459V2.75088H177.246V156.942H23.0469V105.936H20.2949V159.7H179.995V-0.00012207H20.2949Z" fill="white" />
        </svg>
        <svg className="w-[calc(70%/2)]" viewBox="0 120 190 353" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M56.579 250.034L48.629 253.182L37.229 247.482L56.579 239.538L97.96 260.454L87.46 265.701L56.579 250.034Z" fill="white" />
          <path d="M30.715 249.884L9.99902 260.229V290.89L14.899 293.364L25.019 288.264L20.358 285.789V265.701L30.716 260.454L41.136 265.701V280.016L51.482 274.769V260.154L30.715 249.884Z" fill="white" />
          <path d="M51.481 280.469L10 301.309V331.896L30.741 342.691L51.481 332.196V301.834L46.608 299.06L36.637 304.16L41.137 306.634V326.723L30.742 332.046L20.371 326.946V306.408L51.482 291.264L51.481 280.469Z" fill="white" />
          <path d="M48.7078 338.943L37.1628 344.943L56.6548 352.743L97.8119 332.276L87.3119 326.876L56.3509 342.319L48.7078 338.943Z" fill="white" />
          <path d="M86.5901 311.427C86.5901 304.5 91.2411 300.381 97.2101 300.381C98.4608 300.359 99.7035 300.585 100.867 301.045C102.03 301.505 103.091 302.19 103.988 303.062L101.864 305.488C101.272 304.893 100.566 304.423 99.788 304.107C99.0102 303.791 98.1765 303.635 97.3371 303.649C93.3581 303.649 90.6821 306.563 90.6821 311.315C90.6821 316.145 93.0561 319.071 97.5561 319.071C98.696 319.118 99.82 318.79 100.756 318.138V313.568H96.5241V310.486H104.318V319.821C102.326 321.519 99.7727 322.415 97.1561 322.334C91.1051 322.335 86.5901 318.437 86.5901 311.427ZM116.474 313.667H113.055V321.941H109.076V300.774H116.636C121.301 300.774 124.896 302.329 124.896 307.054C124.954 308.426 124.541 309.777 123.725 310.881C122.908 311.985 121.738 312.776 120.409 313.123L125.774 321.945H121.301L116.474 313.667ZM116.224 310.667C119.298 310.667 120.972 309.467 120.972 307.054C120.972 304.62 119.298 303.778 116.224 303.778H113.055V310.667H116.224ZM127.964 311.276C127.964 304.426 132.012 300.386 137.856 300.386C143.7 300.386 147.749 304.446 147.749 311.276C147.749 318.126 143.701 322.335 137.856 322.335C132.011 322.335 127.964 318.127 127.964 311.276ZM143.664 311.276C143.664 306.524 141.386 303.649 137.864 303.649C134.342 303.649 132.064 306.524 132.064 311.276C132.064 316.028 134.341 319.076 137.864 319.076C141.387 319.076 143.664 316.027 143.664 311.276ZM151.921 312.662V300.774H155.9V312.946C155.9 317.556 157.724 319.071 160.441 319.071C163.185 319.071 165.078 317.556 165.078 312.946V300.774H168.906V312.662C168.906 319.615 165.641 322.335 160.441 322.335C155.241 322.335 151.921 319.615 151.921 312.662ZM174.264 300.774H181.33C186.311 300.774 190.001 302.406 190.001 307.3C190.001 312.02 186.301 314.163 181.467 314.163H178.242V321.946H174.264V300.774ZM181.138 311.159C184.486 311.159 186.077 309.904 186.077 307.3C186.077 304.671 184.335 303.778 181 303.778H178.242V311.159H181.138Z" fill="white" />
          <g id="Group_7856"  data-name="Group 7856" transform="translate(-114 -2018)">
              <g id="Group_7855" data-name="Group 7855" transform="translate(0 -10)">
                <path id="Path_6237" data-name="Path 6237" d="M149.44,65.946a6.269,6.269,0,0,1,2.6,5.6,6.173,6.173,0,0,1-5.47,5.74c-3.275.135-6.559.042-9.84.045a.949.949,0,0,1-.239-.082V56.085c.3-.016.572-.044.848-.045,2.443,0,4.885.012,7.327-.006a5.978,5.978,0,0,1,5.009,9.558c-.068.1-.131.2-.233.353m-9.728,2.031c0,1.983-.008,3.891.018,5.8,0,.126.263.358.4.358,2.055-.01,4.116.039,6.162-.114a3.239,3.239,0,0,0,2.573-3.273A2.86,2.86,0,0,0,146.078,68c-2.076-.076-4.157-.019-6.366-.019m.039-3.269c1.737,0,3.426.012,5.115,0a2.673,2.673,0,0,0,2.786-2.729A2.617,2.617,0,0,0,144.9,59.3c-1.53-.018-3.058-.006-4.588,0a4.529,4.529,0,0,0-.562.072Z" transform="translate(65.993 2244.186)" fill="#fff"/>
                <path id="Path_6243" data-name="Path 6243" d="M184.1,71.506l2.243,1.978a9.88,9.88,0,0,1-8.956,3.9c-4.213-.378-7.362-3.405-8.218-8.127a13.92,13.92,0,0,1,.8-8.161c1.686-3.908,5.124-5.664,9.24-5.41a9.809,9.809,0,0,1,6.835,3.5c.094.1.168.225.277.371l-2.338,2.065c-.273-.286-.51-.553-.764-.8a6.434,6.434,0,0,0-6.423-1.663,5.8,5.8,0,0,0-4.241,4.528,10.032,10.032,0,0,0,.484,7.014,6.2,6.2,0,0,0,9.922,1.777c.347-.325.725-.618,1.14-.971" transform="translate(52.218 2244.346)" fill="#fff"/>
              </g>
            </g>
        </svg>
          
          </div>
          </div>
          <div className="mb-[25px]">
          <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "our_team_partner_content_first"}) }} />
          </div>
          <div className="mb-[25px]">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "our_team_partner_content_second"}) }} />
          </div>
          <div className="mb-[25px]">
          <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "our_team_partner_content_third"}) }} />
          </div>
          <div className="mb-[25px]">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "our_team_partner_content_fourth"}) }} />
          </div>
          <div className="mb-[25px]">
            <span dangerouslySetInnerHTML={{ __html: intl.formatMessage({id: "our_team_partner_content_footer"}) }} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;