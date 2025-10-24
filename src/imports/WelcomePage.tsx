import svgPaths from "./svg-cmr60mjepv";
import imgImage from "figma:asset/bbc80f32135111fa6335d57a7fef99231aaca6ce.png";
import imgProfile from "figma:asset/8868d4b500ca2890d6d529536c2acf13c791efe8.png";
import imgPic from "figma:asset/46c00a3c994caee062ad3006d1ef43df11d3ad1a.png";
import imgPic1 from "figma:asset/f2bf5e0716f724c459cb0d37ccb366f884021d6a.png";
import imgPic2 from "figma:asset/3f5af3628ba3a6f115aae60c6af04549f5dcde01.png";
import imgPic3 from "figma:asset/c4bf3b0f0e92c182e18f9a697e03aacb57d40ec4.png";
import imgPic4 from "figma:asset/5052693b8c1683ec27464b99f7e3b479101c7c4c.png";

function Text() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative w-full">
          <div className="css-h909gc flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-50 tracking-[-0.084px]">
            <p className="leading-[20px] whitespace-pre">Final Result</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FinalResultButton() {
  return (
    <div className="absolute bg-[#7b53eb] bottom-0 box-border content-stretch flex gap-[10px] h-[44px] items-start overflow-clip px-[17px] py-[12px] right-0 rounded-[34px] w-[118px]" data-name="Final Result Button">
      <Text />
    </div>
  );
}

function ProcessBar() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-end overflow-clip p-[10px] right-[129px] top-1/2 translate-y-[-50%]" data-name="Process bar">
      <div className="bg-[#7b53eb] h-[18px] rounded-[20px] shrink-0 w-[124px]" />
      <div className="bg-[#d9d9d9] h-[18px] rounded-[20px] shrink-0 w-[124px]" />
      <div className="bg-[#d9d9d9] h-[18px] rounded-[20px] shrink-0 w-[124px]" />
      <div className="bg-[#d9d9d9] h-[18px] rounded-[20px] shrink-0 w-[124px]" />
      <div className="bg-[#d9d9d9] h-[18px] rounded-[20px] shrink-0 w-[124px]" />
    </div>
  );
}

function Process() {
  return (
    <div className="absolute h-[44px] left-[10px] top-[1019px] w-[822px]" data-name="Process">
      <FinalResultButton />
      <ProcessBar />
    </div>
  );
}

function WappGptLogo() {
  return (
    <div className="absolute bottom-0 left-[1.42%] right-[-1.42%] top-0" data-name="WappGPT - logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 72">
        <g id="WappGPT - logo">
          <path clipRule="evenodd" d={svgPaths.p38ce6400} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
          <path d={svgPaths.p14406e00} fill="var(--fill-0, white)" id="Vector_3" />
          <rect fill="var(--fill-0, #162550)" height="12.1348" id="Rectangle 17" rx="6.06741" width="34.7944" x="18.6407" y="15.1012" />
          <ellipse cx="45.633" cy="21.1013" fill="var(--fill-0, #04FED1)" id="Ellipse 18" rx="2.27821" ry="2.22472" />
          <ellipse cx="35.9674" cy="51.0336" fill="var(--fill-0, #162550)" id="Ellipse 19" rx="2.27821" ry="2.22472" />
          <ellipse cx="26.8561" cy="21.1013" fill="var(--fill-0, #04FED1)" id="Ellipse 20" rx="2.27821" ry="2.22472" />
          <ellipse cx="26.8561" cy="51.0336" fill="var(--fill-0, #162550)" id="Ellipse 21" rx="2.27821" ry="2.22472" />
          <ellipse cx="45.0815" cy="51.0336" fill="var(--fill-0, #162550)" id="Ellipse 22" rx="2.27821" ry="2.22472" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute left-1/2 size-[72px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Logo">
      <WappGptLogo />
    </div>
  );
}

function Frame2147224320() {
  return (
    <div className="absolute left-0 size-[144px] top-0">
      <div className="absolute left-1/2 size-[144px] top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 144">
          <circle cx="72" cy="72" fill="var(--fill-0, #D6DCF3)" id="Ellipse 23" r="72" />
        </svg>
      </div>
      <Logo />
    </div>
  );
}

function Frame2147224319() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[20px] items-start justify-center left-[-24px] top-[151px] w-[192px]">
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-500 tracking-[-0.096px]">
        <p className="leading-[20px] whitespace-pre">Generating your Results...</p>
      </div>
    </div>
  );
}

function RobotLogo() {
  return (
    <div className="absolute left-1/2 opacity-60 size-[144px] top-[calc(50%-137.5px)] translate-x-[-50%] translate-y-[-50%]" data-name="Robot Logo">
      <Frame2147224320 />
      <Frame2147224319 />
    </div>
  );
}

function Canva() {
  return (
    <div className="absolute bg-white h-[999px] left-[10px] rounded-[20px] top-[10px] w-[822px]" data-name="Canva">
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <RobotLogo />
    </div>
  );
}

function PreviewSection() {
  return (
    <div className="absolute bg-slate-50 h-[1073px] left-[864px] overflow-clip rounded-[24px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)] top-1/2 translate-y-[-50%] w-[842px]" data-name="Preview Section">
      <Process />
      <Canva />
    </div>
  );
}

function ChatGpt() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="chat-gpt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="chat-gpt">
          <path d={svgPaths.p19f3780} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.pff2c600} fill="var(--fill-0, black)" id="Vector_2" />
          <path d={svgPaths.p17223e20} fill="var(--fill-0, black)" id="Vector_3" />
          <path d={svgPaths.p10ffe880} fill="var(--fill-0, black)" id="Vector_4" />
          <path d={svgPaths.p181e3680} fill="var(--fill-0, black)" id="Vector_5" />
          <path d={svgPaths.pa27ef80} fill="var(--fill-0, black)" id="Vector_6" />
          <path d={svgPaths.p1c1cf200} fill="var(--fill-0, black)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="css-ymduxs font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.084px] whitespace-pre">YepAI Studio</p>
    </div>
  );
}

function SidebarItemsSidebar10() {
  return (
    <div className="bg-white h-[40px] relative rounded-[14px] shadow-[0px_0px_3px_0px_rgba(255,255,255,0.16)] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[12px] py-[8px] relative w-full">
          <ChatGpt />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function Archive() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="archive">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="archive">
          <path d={svgPaths.p38d61180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.25" />
          <path d="M17.5 10H2.5" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.25" />
          <path d="M12.5 5.83333H7.5" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.25" />
          <path d="M12.5 14.1667H7.5" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="css-ymduxs font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.084px] whitespace-pre">Folders</p>
    </div>
  );
}

function ArrowRightSLine() {
  return (
    <div className="relative size-[20px]" data-name="arrow-right-s-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-s-line">
          <path d={svgPaths.p2a044f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function SidebarItemsSidebar11() {
  return (
    <div className="h-[40px] relative rounded-[14px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[12px] py-[8px] relative w-full">
          <Archive />
          <Text2 />
          <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "20" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <ArrowRightSLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2147224188() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full">
      <SidebarItemsSidebar11 />
    </div>
  );
}

function DocumentAttachment() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="document-attachment">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="document-attachment">
          <path d={svgPaths.p3200d500} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M6.25 5.83333H13.75" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M6.25 10H11.25" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3c999c00} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="css-ymduxs font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.084px] whitespace-pre">Programs</p>
    </div>
  );
}

function SidebarItemsSidebar12() {
  return (
    <div className="h-[40px] relative rounded-[14px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[12px] py-[8px] relative w-full">
          <DocumentAttachment />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Share01() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="share-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="share-01">
          <path d={svgPaths.pc374600} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3d90f580} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="css-ymduxs font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.084px] whitespace-pre">Shared With Me</p>
    </div>
  );
}

function SidebarItemsSidebar13() {
  return (
    <div className="h-[40px] relative rounded-[14px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[12px] py-[8px] relative w-full">
          <Share01 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Clock04() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="clock-04">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="clock-04">
          <path d={svgPaths.p1454f180} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.pff20780} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p2b680dc0} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="css-ymduxs font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.084px] whitespace-pre">History</p>
    </div>
  );
}

function SidebarItemsSidebar14() {
  return (
    <div className="h-[40px] relative rounded-[14px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[12px] py-[8px] relative w-full">
          <Clock04 />
          <Text5 />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Navigation">
      <SidebarItemsSidebar10 />
      <Frame2147224188 />
      <SidebarItemsSidebar12 />
      <SidebarItemsSidebar13 />
      <SidebarItemsSidebar14 />
    </div>
  );
}

function DocumentsManagement() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[20px] top-[20px] w-[220px]" data-name="Documents Management">
      <Navigation />
    </div>
  );
}

function Settings02() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="settings-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="settings-02">
          <path d={svgPaths.p145ef80} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.25" />
          <path d={svgPaths.p27456000} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="css-ymduxs font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.084px] whitespace-pre">Settings</p>
    </div>
  );
}

function SidebarItemsSidebar15() {
  return (
    <div className="h-[40px] relative rounded-[14px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[12px] py-[8px] relative w-full">
          <Settings02 />
          <Text6 />
        </div>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Navigation">
      <SidebarItemsSidebar15 />
    </div>
  );
}

function Frame2147224194() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Navigation1 />
    </div>
  );
}

function ProfileSettings() {
  return (
    <div className="absolute bottom-[74px] content-stretch flex flex-col gap-[37px] items-start left-[20px] w-[220px]" data-name="Profile&Settings">
      <Frame2147224194 />
    </div>
  );
}

function BottomStatus10() {
  return (
    <div className="absolute bottom-0 left-[70%] right-[-15%] top-[55%]" data-name="Bottom Status [1.0]">
      <div className="absolute bottom-[-14.58%] left-[-3.47%] right-[-3.47%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
          <g filter="url(#filter0_d_4_23627)" id="Bottom Status [1.0]">
            <path d={svgPaths.p24c9df00} fill="var(--fill-0, white)" id="Stroke" />
            <path d={svgPaths.pcbf5000} fill="var(--fill-0, #82C43C)" id="Ellipse" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26" id="filter0_d_4_23627" width="26" x="-3" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.04 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_23627" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_23627" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Avatar10() {
  return (
    <div className="relative rounded-[999px] shrink-0 size-[40px]" data-name="Avatar [1.0]">
      <div className="absolute inset-0 rounded-[110px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[110px] size-full" src={imgImage} />
      </div>
      <BottomStatus10 />
    </div>
  );
}

function Name() {
  return (
    <div className="box-border content-stretch flex gap-[2px] items-start mb-[-1px] relative shrink-0 w-full" data-name="Name">
      <p className="css-ymduxs font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.084px] whitespace-pre">Natalie Chen</p>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-[40px] items-start min-h-px min-w-px pb-px pt-0 px-0 relative shrink-0" data-name="Text">
      <Name />
      <p className="css-y48ncv font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[12px] text-black tracking-[-0.072px] w-full">create@YepAI.com</p>
    </div>
  );
}

function Frame2147224191() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0">
      <Avatar10 />
      <Text7 />
    </div>
  );
}

function ArrowRightSLine1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="arrow-right-s-line">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="arrow-right-s-line">
          <path d={svgPaths.p2a044f00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CompactButton10() {
  return (
    <div className="box-border content-stretch flex gap-[2px] items-center justify-center overflow-clip p-[2px] relative rounded-[6px] shrink-0" data-name="Compact Button [1.0]">
      <ArrowRightSLine1 />
    </div>
  );
}

function UserProfileCardSidebar10() {
  return (
    <div className="absolute box-border content-stretch flex gap-[12px] items-center left-[12px] overflow-clip px-0 py-[12px] rounded-[10px] top-0 w-[196px]" data-name="User Profile Card [Sidebar] [1.0]">
      <Frame2147224191 />
      <CompactButton10 />
    </div>
  );
}

function SidebarFooterSidebar10() {
  return (
    <div className="absolute bottom-[10px] h-[64px] left-[20px] overflow-clip w-[220px]" data-name="Sidebar Footer [Sidebar] [1.0]">
      <UserProfileCardSidebar10 />
      <div className="absolute h-0 left-[20px] right-[20px] top-px" data-name="Divider">
        <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
            <line id="Divider" stroke="var(--stroke-0, #F3F3F3)" x2="180" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-slate-50 h-[1073px] left-[20px] overflow-clip rounded-[24px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)] top-[20px] w-[260px]" data-name="Sidebar">
      <DocumentsManagement />
      <ProfileSettings />
      <SidebarFooterSidebar10 />
    </div>
  );
}

function Zsh() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="zsh">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="zsh">
          <path d={svgPaths.p135a5200} id="Vector" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p15147200} id="Vector_2" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Link01() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="link-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="link-01">
          <path d={svgPaths.p261cf100} id="Vector" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeWidth="1.25" />
          <path d={svgPaths.p663c740} id="Vector_2" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function AiSearch02() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="ai-search-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="ai-search-02">
          <path d={svgPaths.p3e0f1000} id="Vector" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p2fb79b80} id="Vector_2" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p1e990000} id="Vector_3" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Frame4861() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Zsh />
      <Link01 />
      <AiSearch02 />
    </div>
  );
}

function Frame4862() {
  return (
    <div className="h-[20px] relative shrink-0 w-[90px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 90 20">
        <g id="Frame 4862">
          <g id="image-02">
            <path d={svgPaths.p36d32e00} id="Vector" stroke="var(--stroke-0, #99A0AE)" strokeWidth="1.25" />
            <path d={svgPaths.pee274f0} id="Vector_2" stroke="var(--stroke-0, #99A0AE)" strokeWidth="1.25" />
            <path d={svgPaths.p2a7bca80} id="Vector_3" stroke="var(--stroke-0, #99A0AE)" strokeLinejoin="round" strokeWidth="1.25" />
            <path d={svgPaths.pdbd88c0} id="Vector_4" stroke="var(--stroke-0, #99A0AE)" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
          <g id="voice">
            <path d={svgPaths.p98b9900} id="Vector_5" stroke="var(--stroke-0, #99A0AE)" strokeWidth="1.25" />
            <path d="M40 6.66667V13.3333" id="Vector_6" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d="M37.5 8.33333V11.6667" id="Vector_7" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d="M35 9.16667V10.8333" id="Vector_8" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d="M42.5 8.33333V11.6667" id="Vector_9" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
            <path d="M45 9.16667V10.8333" id="Vector_10" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          </g>
          <line id="Line 44" stroke="var(--stroke-0, #F3F3F3)" x1="60.5" x2="60.5" y1="-2.18557e-08" y2="20" />
          <g id="sent">
            <path d={svgPaths.p3d535e80} fill="var(--fill-0, black)" id="Vector_11" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2147224315() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Frame4861 />
      <Frame4862 />
    </div>
  );
}

function Frame2147224318() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[20px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start justify-between p-[12px] relative size-full">
          <p className="css-pqx3jr font-['Inter:Regular',_sans-serif] font-normal h-[108px] leading-[1.5] not-italic relative shrink-0 text-[#99a0ae] text-[16px] tracking-[-0.176px] w-[500px]">
            Create an engaging Instagram post for [brand_name] about [topic or campaign_goal], targeting [audience].
            <br aria-hidden="true" />
            Use a [tone_style] tone and [visual_style] aesthetic, ending with a clear [call_to_action].
          </p>
          <Frame2147224315 />
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[172px] top-[85px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "0" } as React.CSSProperties}>
            <div className="flex-none rotate-[90deg]">
              <div className="h-0 relative w-[20px]">
                <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                    <line id="Line 44" stroke="var(--stroke-0, black)" x2="20" y1="0.5" y2="0.5" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputBox() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[143px] items-start justify-between left-[10px] rounded-[20px] top-[862px] w-[524px]" data-name="Input Box">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame2147224318 />
    </div>
  );
}

function Profile() {
  return (
    <div className="opacity-80 overflow-clip relative size-[75.477px]" data-name="Profile">
      <img alt="" className="block max-w-none size-full" height="75.477" src={imgProfile} width="75.477" />
    </div>
  );
}

function Welcome() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal gap-[12px] items-start not-italic relative shrink-0 text-black text-center w-full" data-name="Welcome">
      <p className="css-fpz2nc leading-[48px] relative shrink-0 text-[40px] tracking-[-0.4px] w-full">Welcome, Natalie</p>
      <p className="css-bprebw leading-[1.5] relative shrink-0 text-[16px] tracking-[-0.24px] w-full">
        Start by describing what you need, let the Studio bring it to life.
        <br aria-hidden="true" />
        {` Not sure where to begin?`}
      </p>
    </div>
  );
}

function Welcome1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Welcome">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <Profile />
        </div>
      </div>
      <Welcome />
    </div>
  );
}

function Pic() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[144px]" data-name="PIC">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgPic} />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="css-fpfa1z font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">Branding Kit</p>
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Pic />
      <Text8 />
    </div>
  );
}

function BrandingKit() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[20px] self-stretch shrink-0" data-name="Branding Kit">
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between p-[12px] relative size-full">
          <Content />
        </div>
      </div>
    </div>
  );
}

function Pic1() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[144px]" data-name="PIC">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgPic1} />
    </div>
  );
}

function Text9() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="css-fpfa1z font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">Blog Post</p>
    </div>
  );
}

function Content1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Pic1 />
      <Text9 />
    </div>
  );
}

function BlogPost() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[20px] self-stretch shrink-0" data-name="Blog Post">
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between p-[12px] relative size-full">
          <Content1 />
        </div>
      </div>
    </div>
  );
}

function Pic2() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[144px]" data-name="PIC">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgPic2} />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="css-fpfa1z font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">Instagram Post</p>
    </div>
  );
}

function Content2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Pic2 />
      <Text10 />
    </div>
  );
}

function InstagramPost() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[20px] self-stretch shrink-0" data-name="Instagram Post">
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between p-[12px] relative size-full">
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function UpperLine() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Upper Line">
      <BrandingKit />
      <BlogPost />
      <InstagramPost />
    </div>
  );
}

function Pic3() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[144px]" data-name="PIC">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgPic3} />
    </div>
  );
}

function Text11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="css-fpfa1z font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">Product Images</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Pic3 />
      <Text11 />
    </div>
  );
}

function ProductImages() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[20px] self-stretch shrink-0" data-name="Product Images">
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between p-[12px] relative size-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function Pic4() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[144px]" data-name="PIC">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[10px] size-full" src={imgPic4} />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="css-fpfa1z font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">Promotional Banner</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Pic4 />
      <Text12 />
    </div>
  );
}

function PromotionalBanner() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[20px] self-stretch shrink-0" data-name="Promotional Banner">
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between p-[12px] relative size-full">
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function Pic5() {
  return (
    <div className="relative shrink-0 size-[144px]" data-name="PIC">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 144 144">
        <g id="PIC">
          <rect fill="var(--fill-0, #D6DCF3)" height="144" rx="10" width="144" />
          <path d="M72 58V86M58 72H86" id="Icon" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0 w-full" data-name="Text">
      <p className="css-fpfa1z font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[20px] text-black tracking-[-0.3px] w-full">Custom</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start justify-center min-h-px min-w-px relative shrink-0" data-name="Content">
      <Pic5 />
      <Text13 />
    </div>
  );
}

function Custom() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[20px] self-stretch shrink-0" data-name="Custom">
      <div aria-hidden="true" className="absolute border border-[#e1e4ea] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between p-[12px] relative size-full">
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function LowerLine() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full" data-name="Lower Line">
      <ProductImages />
      <PromotionalBanner />
      <Custom />
    </div>
  );
}

function GenerateType() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Generate Type">
      <UpperLine />
      <LowerLine />
    </div>
  );
}

function Prompt() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[50px] h-[705px] items-center justify-end left-[10px] top-[147px] w-[524px]" data-name="Prompt">
      <Welcome1 />
      <GenerateType />
    </div>
  );
}

function Conversation() {
  return (
    <div className="absolute bg-slate-50 h-[1015px] left-0 overflow-clip rounded-[24px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)] top-[58px] w-[544px]" data-name="Conversation">
      <InputBox />
      <Prompt />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p13171300} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChatWithYepAi() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-[6px]" data-name="Chat With YepAI">
      <Frame />
      <p className="css-nyhg09 font-['Inter:Medium',_sans-serif] font-medium leading-[32px] not-italic relative shrink-0 text-[24px] text-black text-nowrap tracking-[-0.36px] whitespace-pre">Chat With YepAI</p>
    </div>
  );
}

function Flash() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="flash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="flash">
          <path d={svgPaths.p275af0c0} id="Vector" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="box-border content-stretch flex items-center justify-center px-[4px] py-0 relative shrink-0" data-name="Text">
      <div className="css-h909gc flex flex-col font-['Inter:Medium',_sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-slate-50 tracking-[-0.084px]">
        <p className="leading-[20px] whitespace-pre">Upgrade</p>
      </div>
    </div>
  );
}

function Buttons10() {
  return (
    <div className="bg-[#7b53eb] box-border content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[14px] py-[12px] relative rounded-[34px] shrink-0" data-name="Buttons [1.0]">
      <Flash />
      <Text14 />
    </div>
  );
}

function HelpCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="help-circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="help-circle">
          <path d={svgPaths.pace200} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path d={svgPaths.p7650b00} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M11.992 17H12.001" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TopbarItemButtonTopbar10() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[10px] relative rounded-[100px] shrink-0 w-[44px]" data-name="Topbar Item Button [Topbar] [1.0]">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <HelpCircle />
    </div>
  );
}

function Gift() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="gift">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="gift">
          <path d={svgPaths.p36e848c0} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2404280} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p21989c00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2773a180} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinejoin="round" strokeWidth="1.5" />
          <path d="M12 11V22" id="Vector_5" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function TopbarItemButtonTopbar11() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[10px] relative rounded-[100px] shrink-0 w-[44px]" data-name="Topbar Item Button [Topbar] [1.0]">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Gift />
    </div>
  );
}

function Wrench01() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="wrench-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="wrench-01">
          <path d={svgPaths.p195830f0} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          <path d={svgPaths.p187f6c80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.5" />
          <path d="M5.50896 18.5H5.5" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function TopbarItemButtonTopbar12() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[8px] h-full items-center justify-center p-[10px] relative rounded-[100px] shrink-0 w-[44px]" data-name="Topbar Item Button [Topbar] [1.0]">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[100px]" />
      <Wrench01 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center left-[276px] top-0" data-name="Buttons">
      <Buttons10 />
      <div className="flex flex-row items-center self-stretch">
        <TopbarItemButtonTopbar10 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TopbarItemButtonTopbar11 />
      </div>
      <div className="flex flex-row items-center self-stretch">
        <TopbarItemButtonTopbar12 />
      </div>
    </div>
  );
}

function TopBar() {
  return (
    <div className="absolute h-[44px] left-0 top-0 w-[544px]" data-name="Top Bar">
      <ChatWithYepAi />
      <Buttons />
    </div>
  );
}

function ConversationSection() {
  return (
    <div className="absolute h-[1073px] left-[300px] top-[20px] w-[544px]" data-name="Conversation Section">
      <Conversation />
      <TopBar />
    </div>
  );
}

function ChatSection() {
  return (
    <div className="absolute bg-[#d6dcf3] h-[1113px] left-0 overflow-clip top-0 w-[864px]" data-name="Chat Section">
      <Sidebar />
      <ConversationSection />
    </div>
  );
}

function WelcomePage() {
  return (
    <div className="absolute bg-[#d6dcf3] h-[1113px] left-0 top-[64px] w-[1728px]" data-name="Welcome Page">
      <PreviewSection />
      <ChatSection />
    </div>
  );
}

function Back() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="back">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="back">
          <path d={svgPaths.p65cce0} fill="var(--fill-0, #79747E)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Forward() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="forward">
          <path d={svgPaths.p3789f200} fill="var(--fill-0, #79747E)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Refresh() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="refresh">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="refresh">
          <path d={svgPaths.pe8e9bc0} fill="var(--fill-0, #79747E)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function Icons() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="Icons">
      <Back />
      <Forward />
      <Refresh />
    </div>
  );
}

function Lock() {
  return (
    <div className="relative shrink-0 size-[15.36px]" data-name="lock">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="lock">
          <path d={svgPaths.p14122200} fill="var(--fill-0, #49454F)" id="icon" opacity="0.65" />
        </g>
      </svg>
    </div>
  );
}

function Url() {
  return (
    <div className="basis-0 content-stretch flex gap-[8px] grow items-center min-h-px min-w-px relative shrink-0" data-name="URL">
      <Lock />
      <p className="basis-0 font-['Roboto:Regular',_sans-serif] font-normal grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#1d1b20] text-[16px] tracking-[0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        https://yepstudio.yepai.io/thinking
      </p>
    </div>
  );
}

function Star() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="star">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="star">
          <path d={svgPaths.p6a66a80} fill="var(--fill-0, #79747E)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function AddressBar() {
  return (
    <div className="basis-0 bg-[#fef7ff] grow min-h-px min-w-px relative rounded-[46.08px] shrink-0" data-name="Address Bar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[6px] relative w-full">
          <Url />
          <Star />
        </div>
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="bg-[#79747e] overflow-clip relative rounded-[109.091px] shrink-0 size-[28px]" data-name="Avatar">
      <div className="absolute flex flex-col font-['Roboto:Regular',_sans-serif] font-normal justify-center leading-[0] left-[calc(50%+0.182px)] text-[16px] text-center text-nowrap text-white top-[calc(50%+0.818px)] tracking-[0.5px] translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[24px] whitespace-pre">M</p>
      </div>
    </div>
  );
}

function More() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="more">
          <path d={svgPaths.p2e1eca00} fill="var(--fill-0, #79747E)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function ChromeBrowserBar() {
  return (
    <div className="absolute bg-[#d0bcff] box-border content-stretch flex gap-[16px] h-[64px] items-center left-0 p-[16px] right-0 shadow-[0px_0.594px_0px_0px_rgba(0,0,0,0.15)] top-0" data-name="Chrome browser bar">
      <Icons />
      <AddressBar />
      <Avatar />
      <More />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.594px_0px_0px_inset_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function WelcomePage01() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Welcome Page 01">
      <WelcomePage />
      <ChromeBrowserBar />
    </div>
  );
}

export default function WelcomePage1() {
  return (
    <div className="relative size-full" data-name="Welcome page">
      <WelcomePage01 />
    </div>
  );
}