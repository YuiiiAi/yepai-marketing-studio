import svgPaths from "./svg-alfulb8jpx";
import imgImage from "figma:asset/bbc80f32135111fa6335d57a7fef99231aaca6ce.png";

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

function Text() {
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
          <Text />
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Navigation">
      <SidebarItemsSidebar10 />
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

function Comment01() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="comment-01">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="comment-01">
          <path d={svgPaths.p1a70d380} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p5fa2560} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="css-ymduxs font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.084px] whitespace-pre">Feedback</p>
    </div>
  );
}

function SidebarItemsSidebar11() {
  return (
    <div className="h-[40px] relative rounded-[14px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[12px] py-[8px] relative w-full">
          <Comment01 />
          <Text1 />
        </div>
      </div>
    </div>
  );
}

function AddTeam() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="add-team">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="add-team">
          <path d={svgPaths.p3d161bc0} id="Vector" stroke="var(--stroke-0, black)" strokeWidth="1.25" />
          <path d={svgPaths.p153212e0} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.25" />
          <path d={svgPaths.p1631d00} id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.p3d12d980} id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Message() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="message">
        <path d={svgPaths.p19726d80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d="M10.6643 7.33333H10.6703" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M7.99699 7.33333H8.00298" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5.32967 7.33333H5.33566" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <g id="Vector_5" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearMessage() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/message">
      <Message />
    </div>
  );
}

function VuesaxLinearMessage1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/message">
      <VuesaxLinearMessage />
    </div>
  );
}

function Frame43() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[15px] relative shrink-0">
      <VuesaxLinearMessage1 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-[21px] justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-slate-600 w-[237px]">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Crypto Lending App</p>
      </div>
    </div>
  );
}

function Message1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="message">
        <path d={svgPaths.p19726d80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d="M10.6643 7.33333H10.6703" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M7.99699 7.33333H8.00298" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5.32967 7.33333H5.33566" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <g id="Vector_5" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearMessage2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/message">
      <Message1 />
    </div>
  );
}

function VuesaxLinearMessage3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/message">
      <VuesaxLinearMessage2 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[15px] relative shrink-0">
      <VuesaxLinearMessage3 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-600">
        <p className="leading-[24px] whitespace-pre">Operator Grammar Types</p>
      </div>
    </div>
  );
}

function Message2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="message">
        <path d={svgPaths.p19726d80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d="M10.6643 7.33333H10.6703" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M7.99699 7.33333H8.00298" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5.32967 7.33333H5.33566" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <g id="Vector_5" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearMessage4() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/message">
      <Message2 />
    </div>
  );
}

function VuesaxLinearMessage5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/message">
      <VuesaxLinearMessage4 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[15px] relative shrink-0">
      <VuesaxLinearMessage5 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-600">
        <p className="leading-[24px] whitespace-pre">Min States For Binary DFA</p>
      </div>
    </div>
  );
}

function Message3() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="message">
        <path d={svgPaths.p19726d80} id="Vector" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d="M10.6643 7.33333H10.6703" id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M7.99699 7.33333H8.00298" id="Vector_3" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5.32967 7.33333H5.33566" id="Vector_4" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <g id="Vector_5" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearMessage6() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/message">
      <Message3 />
    </div>
  );
}

function VuesaxLinearMessage7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/message">
      <VuesaxLinearMessage6 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[15px] relative shrink-0">
      <VuesaxLinearMessage7 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-600">
        <p className="leading-[24px] whitespace-pre">Lorem POS system</p>
      </div>
    </div>
  );
}

function Frame1437252708() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] items-start left-[-47px] top-[-402px]">
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <div className="absolute bg-gradient-to-b from-[34.375%] from-[rgba(255,255,255,0)] h-[395px] left-[-18px] to-[#ffffff] to-[34.472%] top-[175px] w-[324px]" />
    </div>
  );
}

function Text2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="css-ymduxs font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.084px] whitespace-pre">Invite People</p>
      <Frame1437252708 />
    </div>
  );
}

function SidebarItemsSidebar12() {
  return (
    <div className="h-[40px] relative rounded-[14px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[12px] py-[8px] relative w-full">
          <AddTeam />
          <Text2 />
        </div>
      </div>
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

function Text3() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
      <p className="css-ymduxs font-['Inter:Regular',_sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[14px] text-black text-nowrap tracking-[-0.084px] whitespace-pre">Settings</p>
    </div>
  );
}

function SidebarItemsSidebar13() {
  return (
    <div className="h-[40px] relative rounded-[14px] shrink-0 w-full" data-name="Sidebar Items [Sidebar] [1.0]">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[8px] h-[40px] items-center px-[12px] py-[8px] relative w-full">
          <Settings02 />
          <Text3 />
        </div>
      </div>
    </div>
  );
}

function Navigation1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Navigation">
      <SidebarItemsSidebar11 />
      <SidebarItemsSidebar12 />
      <SidebarItemsSidebar13 />
    </div>
  );
}

function BottomStatus10() {
  return (
    <div className="absolute bottom-0 left-[70%] right-[-15%] top-[55%]" data-name="Bottom Status [1.0]">
      <div className="absolute bottom-[-14.58%] left-[-3.47%] right-[-3.47%] top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 21">
          <g filter="url(#filter0_d_4_23927)" id="Bottom Status [1.0]">
            <path d={svgPaths.p24c9df00} fill="var(--fill-0, white)" id="Stroke" />
            <path d={svgPaths.pcbf5000} fill="var(--fill-0, #82C43C)" id="Ellipse" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26" id="filter0_d_4_23927" width="26" x="-3" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.04 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_23927" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_23927" mode="normal" result="shape" />
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

function Text4() {
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
      <Text4 />
    </div>
  );
}

function ArrowRightSLine() {
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
      <ArrowRightSLine />
    </div>
  );
}

function UserProfileCardSidebar10() {
  return (
    <div className="basis-0 box-border content-stretch flex gap-[12px] grow items-center min-h-px min-w-px overflow-clip px-0 py-[12px] relative rounded-[10px] shrink-0" data-name="User Profile Card [Sidebar] [1.0]">
      <Frame2147224191 />
      <CompactButton10 />
    </div>
  );
}

function SidebarFooterSidebar10() {
  return (
    <div className="relative shrink-0 w-full" data-name="Sidebar Footer [Sidebar] [1.0]">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex gap-[12px] items-center px-[12px] py-0 relative w-full">
          <UserProfileCardSidebar10 />
          <div className="absolute h-0 left-[20px] right-[20px] top-px" data-name="Divider">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 1">
                <line id="Divider" stroke="var(--stroke-0, #F3F3F3)" x2="180" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2147224194() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0 w-full">
      <Navigation1 />
      <SidebarFooterSidebar10 />
    </div>
  );
}

function ProfileSettings() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[37px] items-start left-[20px] top-[837px] w-[220px]" data-name="Profile&Settings">
      <Frame2147224194 />
    </div>
  );
}

function Group1437252743() {
  return (
    <div className="absolute contents left-[17px] top-0">
      <div className="absolute bg-[#c8e6ff] h-[50px] left-[17px] rounded-[57px] top-0 w-[370px]" />
      <div className="absolute bg-[#459aff] h-[50px] left-[203px] rounded-[57px] top-0 w-[120px]" />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[17px] top-0" data-name="Mask group">
      <Group1437252743 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute h-[50px] left-[-12px] top-[358px] w-[253px]">
      <MaskGroup />
    </div>
  );
}

function Message4() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="message">
        <path d={svgPaths.p19726d80} id="Vector" stroke="var(--stroke-0, #02489B)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d="M10.6643 7.33333H10.6703" id="Vector_2" stroke="var(--stroke-0, #02489B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M7.99699 7.33333H8.00298" id="Vector_3" stroke="var(--stroke-0, #02489B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5.32967 7.33333H5.33566" id="Vector_4" stroke="var(--stroke-0, #02489B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <g id="Vector_5" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearMessage8() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/message">
      <Message4 />
    </div>
  );
}

function VuesaxLinearMessage9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/message">
      <VuesaxLinearMessage8 />
    </div>
  );
}

function Frame48() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0">
      <VuesaxLinearMessage9 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#1b59a3] text-[16px] text-nowrap">
        <p className="leading-[24px] whitespace-pre">Peeeeta Project...</p>
      </div>
    </div>
  );
}

function Trash() {
  return (
    <div className="[grid-area:1_/_1] ml-0 mt-0 relative size-[16px]" data-name="trash">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="trash">
          <path d={svgPaths.pbe7b0c0} id="Icon" stroke="var(--stroke-0, #F8FAFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Edit() {
  return (
    <div className="absolute bottom-0 left-[-250%] right-[250%] top-0" data-name="edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="edit">
          <path d={svgPaths.pb6c6800} fill="var(--fill-0, #F8FAFC)" id="Union" />
          <g id="Vector" opacity="0"></g>
        </g>
      </svg>
    </div>
  );
}

function VuesaxLinearEdit() {
  return (
    <div className="absolute bottom-0 contents left-[-250%] right-[250%] top-0" data-name="vuesax/linear/edit">
      <Edit />
    </div>
  );
}

function VuesaxLinearEdit1() {
  return (
    <div className="[grid-area:1_/_1] ml-[67px] mt-0 relative size-[16px]" data-name="vuesax/linear/edit">
      <VuesaxLinearEdit />
    </div>
  );
}

function Group1437252739() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Trash />
      <VuesaxLinearEdit1 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[14px] top-[371px] w-[278px]">
      <Frame48 />
      <Group1437252739 />
    </div>
  );
}

function Message5() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="message">
        <path d={svgPaths.p19726d80} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d="M10.6643 7.33333H10.6703" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M7.99699 7.33333H8.00298" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5.32967 7.33333H5.33566" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <g id="Vector_5" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearMessage10() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/message">
      <Message5 />
    </div>
  );
}

function VuesaxLinearMessage11() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/message">
      <VuesaxLinearMessage10 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[15px] relative shrink-0">
      <VuesaxLinearMessage11 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[16px] text-nowrap text-slate-600 w-[174px]">
        <p className="[white-space-collapse:collapse] leading-[24px] overflow-ellipsis overflow-hidden">Ins Marketing</p>
      </div>
    </div>
  );
}

function Message6() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="message">
        <path d={svgPaths.p19726d80} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="1.5" />
        <path d="M10.6643 7.33333H10.6703" id="Vector_2" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M7.99699 7.33333H8.00298" id="Vector_3" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <path d="M5.32967 7.33333H5.33566" id="Vector_4" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        <g id="Vector_5" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearMessage12() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/message">
      <Message6 />
    </div>
  );
}

function VuesaxLinearMessage13() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/message">
      <VuesaxLinearMessage12 />
    </div>
  );
}

function Frame50() {
  return (
    <div className="box-border content-stretch flex gap-[10px] items-center px-0 py-[15px] relative shrink-0">
      <VuesaxLinearMessage13 />
      <div className="flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-slate-600">
        <p className="leading-[24px] whitespace-pre">Lorem Ipsum Project</p>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0">
      <Frame47 />
      <Frame50 />
    </div>
  );
}

function Frame1437252709() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[66px] items-start left-[10px] top-[240px]">
      <Frame52 />
    </div>
  );
}

function Frame1437252699() {
  return <div className="absolute h-[20px] left-0 top-[453px] w-[348px]" />;
}

function Group1437252838() {
  return (
    <div className="absolute contents left-0 top-[433px]">
      <div className="absolute h-0 left-0 top-[433px] w-[260px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 2">
            <path d="M0 1L260 1" id="Vector 10" stroke="var(--stroke-0, #D6DCF3)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[30px] not-italic text-[#6a6969] text-[16px] top-[463px] translate-y-[-50%] w-[213px]">
        <p className="leading-[20px]">Last 7 Days</p>
      </div>
      <div className="absolute h-0 left-0 top-[493px] w-[260px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 2">
            <path d="M0 1H260" id="Vector 16" stroke="var(--stroke-0, #D6DCF3)" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Group2607611() {
  return (
    <div className="absolute contents inset-[-42%_20.59%_42%_5.04%]">
      <div className="absolute bg-gradient-to-r from-[#459aff] inset-[-42%_20.59%_42%_5.04%] rounded-[69px] to-[#7b53eb]" />
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal inset-[-14%_33.19%_66%_19.33%] leading-[24px] not-italic text-[20px] text-nowrap text-white whitespace-pre">+ New Chat</p>
    </div>
  );
}

function SearchNormal() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
      <g id="search-normal">
        <path d={svgPaths.pb7a9780} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <path d={svgPaths.pdfbc880} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearSearchNormal() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/search-normal">
      <SearchNormal />
    </div>
  );
}

function VuesaxLinearSearchNormal1() {
  return (
    <div className="absolute inset-[-5.76%_3.83%_76.24%_89.97%]" data-name="vuesax/linear/search-normal">
      <VuesaxLinearSearchNormal />
    </div>
  );
}

function Group1437252737() {
  return (
    <div className="absolute bottom-1/2 contents left-[84.45%] right-[-1.68%] top-[-32%]">
      <div className="absolute bg-[#7b53eb] bottom-1/2 left-[84.45%] right-[-1.68%] rounded-[69px] top-[-32%]" />
      <VuesaxLinearSearchNormal1 />
    </div>
  );
}

function Component2() {
  return (
    <div className="absolute h-[50px] left-[6px] top-[104px] w-[238px]" data-name="Component 2">
      <Group2607611 />
      <Group1437252737 />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-slate-50 h-[1073px] left-[20px] overflow-clip rounded-[24px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)] top-[20px] w-[260px]" data-name="Sidebar">
      <DocumentsManagement />
      <ProfileSettings />
      <Frame20 />
      <Frame49 />
      <Frame1437252709 />
      <Frame1437252699 />
      <Group1437252838 />
      <Component2 />
      <div className="absolute h-0 left-0 top-[173px] w-[260px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 2">
            <path d="M0 1H260" id="Vector 10" stroke="var(--stroke-0, #D6DCF3)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[22px] not-italic text-[#585353] text-[16px] top-[203px] translate-y-[-50%] w-[158px]">
        <p className="leading-[24px]">Your conversations</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] left-[194.5px] not-italic text-[#7b53eb] text-[14px] text-nowrap top-[203px] tracking-[-0.28px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Clear All</p>
      </div>
      <div className="absolute h-0 left-0 top-[234px] w-[260px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 2">
            <path d="M0 1H260" id="Vector 16" stroke="var(--stroke-0, #D6DCF3)" />
          </svg>
        </div>
      </div>
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

function Image02() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="image-02">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="image-02">
          <path d={svgPaths.p36d32e00} id="Vector" stroke="var(--stroke-0, #99A0AE)" strokeWidth="1.25" />
          <path d={svgPaths.pee274f0} id="Vector_2" stroke="var(--stroke-0, #99A0AE)" strokeWidth="1.25" />
          <path d={svgPaths.p2a7bca80} id="Vector_3" stroke="var(--stroke-0, #99A0AE)" strokeLinejoin="round" strokeWidth="1.25" />
          <path d={svgPaths.pdbd88c0} id="Vector_4" stroke="var(--stroke-0, #99A0AE)" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Voice() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="voice">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="voice">
          <path d={svgPaths.p36d32e00} id="Vector" stroke="var(--stroke-0, #99A0AE)" strokeWidth="1.25" />
          <path d="M10 6.66667V13.3333" id="Vector_2" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M7.5 8.33333V11.6667" id="Vector_3" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M5 9.16667V10.8333" id="Vector_4" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M12.5 8.33333V11.6667" id="Vector_5" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
          <path d="M15 9.16667V10.8333" id="Vector_6" stroke="var(--stroke-0, #99A0AE)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" />
        </g>
      </svg>
    </div>
  );
}

function Sent() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="sent">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="sent">
          <path d={svgPaths.p5c62e00} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame4862() {
  return (
    <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0">
      <Image02 />
      <Voice />
      <div className="flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center relative shrink-0 w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-0 relative w-[20px]">
            <div className="absolute bottom-0 left-0 right-0 top-[-1px]" style={{ "--stroke-0": "rgba(243, 243, 243, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 1">
                <line id="Line 44" stroke="var(--stroke-0, #F3F3F3)" x2="20" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Sent />
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
          <p className="css-pqx3jr font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#99a0ae] text-[16px] text-nowrap tracking-[-0.176px] whitespace-pre">I need captions for our new eco-friendly tote bags.</p>
          <Frame2147224315 />
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[388px] top-[12px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "0" } as React.CSSProperties}>
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
    <div className="absolute bg-white content-stretch flex flex-col h-[113px] items-start justify-between left-[10px] rounded-[20px] top-[892px] w-[524px]" data-name="Input Box">
      <div aria-hidden="true" className="absolute border border-[#f3f3f3] border-solid inset-0 pointer-events-none rounded-[20px]" />
      <Frame2147224318 />
    </div>
  );
}

function Messages() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="✏️ Messages">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
        <p className="mb-0">{`User Analysis: `}</p>
        <p>{`Initiating audience analysis. We'll extract key traits from recent sales records, customer behavior data, and product preferences.`}</p>
      </div>
    </div>
  );
}

function BubbleSender() {
  return (
    <div className="bg-[#7b53eb] box-border content-stretch flex gap-[10px] items-end pb-[32px] pl-[20px] pr-[16px] pt-[16px] relative rounded-[12px] shadow-[0px_2px_1px_0px_rgba(0,0,0,0.05)] shrink-0 w-[393px]" data-name="👨‍💻 Bubble Sender">
      <Messages />
    </div>
  );
}

function ClipboardText() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="clipboard-text">
        <path d={svgPaths.p3493d270} fill="var(--fill-0, white)" id="Vector" />
        <path d={svgPaths.p33072a00} fill="var(--fill-0, white)" id="Vector_2" />
        <path d={svgPaths.p6a54a80} fill="var(--fill-0, white)" id="Vector_3" />
        <path d={svgPaths.p2c865900} fill="var(--fill-0, white)" id="Vector_4" />
        <g id="Vector_5" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxOutlineClipboardText() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/clipboard-text">
      <ClipboardText />
    </div>
  );
}

function VuesaxOutlineClipboardText1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/outline/clipboard-text">
      <VuesaxOutlineClipboardText />
    </div>
  );
}

function Like() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="like">
        <path d={svgPaths.p2a552c80} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" />
        <path d={svgPaths.p2cac8d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearLike() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/like">
      <Like />
    </div>
  );
}

function VuesaxLinearLike1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/like">
      <VuesaxLinearLike />
    </div>
  );
}

function Dislike() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="dislike">
        <path d={svgPaths.p194d0500} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" />
        <path d={svgPaths.p1bab7400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearDislike() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/dislike">
      <Dislike />
    </div>
  );
}

function VuesaxLinearDislike1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/dislike">
      <VuesaxLinearDislike />
    </div>
  );
}

function Component3Icons() {
  return (
    <div className="bg-[#459aff] box-border content-stretch flex gap-[8px] items-start p-[4px] relative rounded-[8px] shrink-0" data-name="3 icons">
      <VuesaxOutlineClipboardText1 />
      <VuesaxLinearLike1 />
      <VuesaxLinearDislike1 />
    </div>
  );
}

function CopyLikeDislike() {
  return (
    <div className="absolute bottom-[8px] box-border content-stretch flex gap-[7px] items-start px-[20px] py-0 right-[-106px]" data-name="⏲ copy like dislike">
      <Component3Icons />
    </div>
  );
}

function BrandColor() {
  return <div className="absolute bg-[#7b53eb] inset-0 rounded-[100px]" data-name="brand color" />;
}

function WappGptLogo() {
  return (
    <div className="absolute bottom-0 left-[1.42%] right-[-1.42%] top-0" data-name="WappGPT - logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="WappGPT - logo">
          <path clipRule="evenodd" d={svgPaths.p14df4a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
          <path d={svgPaths.p3a3e4b80} fill="var(--fill-0, white)" id="Vector_3" />
          <rect fill="var(--fill-0, #162550)" height="5.5618" id="Rectangle 17" rx="2.7809" width="15.573" x="8.34313" y="6.92138" />
          <ellipse cx="20.4242" cy="9.67142" fill="var(--fill-0, #04FED1)" id="Ellipse 18" rx="1.01966" ry="1.01966" />
          <ellipse cx="16.0981" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 19" rx="1.01966" ry="1.01966" />
          <ellipse cx="12.0201" cy="9.67142" fill="var(--fill-0, #04FED1)" id="Ellipse 20" rx="1.01966" ry="1.01966" />
          <ellipse cx="12.0201" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 21" rx="1.01966" ry="1.01966" />
          <ellipse cx="20.1773" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 22" rx="1.01966" ry="1.01966" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="absolute h-[33px] left-[calc(50%+0.113px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[32.225px]" data-name="Logo">
      <WappGptLogo />
    </div>
  );
}

function Logo1() {
  return (
    <div className="absolute bottom-[-34.5px] left-0 rounded-[80px] size-[48px]" data-name="logo">
      <BrandColor />
      <Logo />
    </div>
  );
}

function YepAiMessage() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7px] items-start justify-end left-[27px] pb-[20px] pt-0 px-[20px] top-[104px] w-[352px]" data-name="YepAI Message">
      <BubbleSender />
      <CopyLikeDislike />
      <Logo1 />
    </div>
  );
}

function Messages1() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="✏️ Messages">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
        <p className="mb-0">We’ve pulled data from Shopify and Instagram stores, including:</p>
        <p className="mb-0">- Product purchase frequency</p>
        <p className="mb-0">- Customer titles and industries (from sign-up or public profiles)</p>
        <p>- Comment keywords and interaction patterns</p>
      </div>
    </div>
  );
}

function Frame31() {
  return <div className="absolute bottom-[-18px] h-[7px] left-[32px] w-[20px]" />;
}

function BubbleSender1() {
  return (
    <div className="bg-[#7b53eb] box-border content-stretch flex gap-[10px] items-end pb-[32px] pl-[20px] pr-[16px] pt-[16px] relative rounded-[12px] shadow-[0px_2px_1px_0px_rgba(0,0,0,0.05)] shrink-0 w-[397px]" data-name="👨‍💻 Bubble Sender">
      <Messages1 />
      <Frame31 />
    </div>
  );
}

function ClipboardText1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="clipboard-text">
        <path d={svgPaths.p3493d270} fill="var(--fill-0, white)" id="Vector" />
        <path d={svgPaths.p33072a00} fill="var(--fill-0, white)" id="Vector_2" />
        <path d={svgPaths.p6a54a80} fill="var(--fill-0, white)" id="Vector_3" />
        <path d={svgPaths.p2c865900} fill="var(--fill-0, white)" id="Vector_4" />
        <g id="Vector_5" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxOutlineClipboardText2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/clipboard-text">
      <ClipboardText1 />
    </div>
  );
}

function VuesaxOutlineClipboardText3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/outline/clipboard-text">
      <VuesaxOutlineClipboardText2 />
    </div>
  );
}

function Like1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="like">
        <path d={svgPaths.p2a552c80} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" />
        <path d={svgPaths.p2cac8d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearLike2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/like">
      <Like1 />
    </div>
  );
}

function VuesaxLinearLike3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/like">
      <VuesaxLinearLike2 />
    </div>
  );
}

function Dislike1() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="dislike">
        <path d={svgPaths.p194d0500} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" />
        <path d={svgPaths.p1bab7400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearDislike2() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/dislike">
      <Dislike1 />
    </div>
  );
}

function VuesaxLinearDislike3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/dislike">
      <VuesaxLinearDislike2 />
    </div>
  );
}

function Component3Icons1() {
  return (
    <div className="bg-[#459aff] box-border content-stretch flex gap-[8px] items-start p-[4px] relative rounded-[8px] shrink-0" data-name="3 icons">
      <VuesaxOutlineClipboardText3 />
      <VuesaxLinearLike3 />
      <VuesaxLinearDislike3 />
    </div>
  );
}

function CopyLikeDislike1() {
  return (
    <div className="absolute bottom-[8px] box-border content-stretch flex gap-[7px] items-start px-[20px] py-0 right-[-105px]" data-name="⏲ copy like dislike">
      <Component3Icons1 />
    </div>
  );
}

function BrandColor1() {
  return <div className="absolute bg-[#7b53eb] inset-0 rounded-[100px]" data-name="brand color" />;
}

function WappGptLogo1() {
  return (
    <div className="absolute bottom-0 left-[1.42%] right-[-1.42%] top-0" data-name="WappGPT - logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="WappGPT - logo">
          <path clipRule="evenodd" d={svgPaths.p14df4a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
          <path d={svgPaths.p3a3e4b80} fill="var(--fill-0, white)" id="Vector_3" />
          <rect fill="var(--fill-0, #162550)" height="5.5618" id="Rectangle 17" rx="2.7809" width="15.573" x="8.34313" y="6.92138" />
          <ellipse cx="20.4242" cy="9.67142" fill="var(--fill-0, #04FED1)" id="Ellipse 18" rx="1.01966" ry="1.01966" />
          <ellipse cx="16.0981" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 19" rx="1.01966" ry="1.01966" />
          <ellipse cx="12.0201" cy="9.67142" fill="var(--fill-0, #04FED1)" id="Ellipse 20" rx="1.01966" ry="1.01966" />
          <ellipse cx="12.0201" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 21" rx="1.01966" ry="1.01966" />
          <ellipse cx="20.1773" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 22" rx="1.01966" ry="1.01966" />
        </g>
      </svg>
    </div>
  );
}

function Logo2() {
  return (
    <div className="absolute h-[33px] left-[calc(50%+0.113px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[32.225px]" data-name="Logo">
      <WappGptLogo1 />
    </div>
  );
}

function Logo3() {
  return (
    <div className="absolute bottom-[-34.5px] left-0 rounded-[80px] size-[48px]" data-name="logo">
      <BrandColor1 />
      <Logo2 />
    </div>
  );
}

function YepAiMessage1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7px] items-start justify-end left-[25px] pb-[20px] pt-0 px-[20px] top-[297px] w-[352px]" data-name="YepAI Message">
      <BubbleSender1 />
      <CopyLikeDislike1 />
      <Logo3 />
    </div>
  );
}

function Messages2() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="✏️ Messages">
      <div className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white">
        <p className="mb-0">✅ Analysis Complete.</p>
        <p className="mb-0">Based on user behavior and sales data, this campaign is best targeted to:</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">• Women aged 25–34</p>
        <p className="mb-0">• Preference for eco-friendly, emotionally engaging content</p>
        <p className="mb-0">• Active on Instagram and Redbook</p>
        <p className="mb-0">• Common industries: content creators, e-commerce, culinary</p>
        <p className="mb-0">&nbsp;</p>
        <p>We’ll now proceed to Brand Tone and Platform Preference Analysis.</p>
      </div>
    </div>
  );
}

function BubbleSender2() {
  return (
    <div className="bg-[#7b53eb] box-border content-stretch flex gap-[10px] items-end pb-[32px] pl-[20px] pr-[16px] pt-[16px] relative rounded-[12px] shadow-[0px_2px_1px_0px_rgba(0,0,0,0.05)] shrink-0 w-[400px]" data-name="👨‍💻 Bubble Sender">
      <Messages2 />
    </div>
  );
}

function BrandColor2() {
  return <div className="absolute bg-[#7b53eb] inset-0 rounded-[100px]" data-name="brand color" />;
}

function WappGptLogo2() {
  return (
    <div className="absolute bottom-0 left-[1.42%] right-[-1.42%] top-0" data-name="WappGPT - logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33 33">
        <g id="WappGPT - logo">
          <path clipRule="evenodd" d={svgPaths.p14df4a00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
          <path d={svgPaths.p3a3e4b80} fill="var(--fill-0, white)" id="Vector_3" />
          <rect fill="var(--fill-0, #162550)" height="5.5618" id="Rectangle 17" rx="2.7809" width="15.573" x="8.34313" y="6.92138" />
          <ellipse cx="20.4242" cy="9.67142" fill="var(--fill-0, #04FED1)" id="Ellipse 18" rx="1.01966" ry="1.01966" />
          <ellipse cx="16.0981" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 19" rx="1.01966" ry="1.01966" />
          <ellipse cx="12.0201" cy="9.67142" fill="var(--fill-0, #04FED1)" id="Ellipse 20" rx="1.01966" ry="1.01966" />
          <ellipse cx="12.0201" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 21" rx="1.01966" ry="1.01966" />
          <ellipse cx="20.1773" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 22" rx="1.01966" ry="1.01966" />
        </g>
      </svg>
    </div>
  );
}

function Logo4() {
  return (
    <div className="absolute h-[33px] left-[calc(50%+0.113px)] top-[calc(50%-0.5px)] translate-x-[-50%] translate-y-[-50%] w-[32.225px]" data-name="Logo">
      <WappGptLogo2 />
    </div>
  );
}

function Logo5() {
  return (
    <div className="absolute bottom-[-34.5px] left-0 rounded-[80px] size-[48px]" data-name="logo">
      <BrandColor2 />
      <Logo4 />
    </div>
  );
}

function YepAiMessage2() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7px] items-start justify-end left-[27px] pb-[20px] pt-0 px-[20px] top-[523px] w-[352px]" data-name="YepAI Message">
      <BubbleSender2 />
      <Logo5 />
    </div>
  );
}

function ClipboardText2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="clipboard-text">
        <path d={svgPaths.p3493d270} fill="var(--fill-0, white)" id="Vector" />
        <path d={svgPaths.p33072a00} fill="var(--fill-0, white)" id="Vector_2" />
        <path d={svgPaths.p6a54a80} fill="var(--fill-0, white)" id="Vector_3" />
        <path d={svgPaths.p2c865900} fill="var(--fill-0, white)" id="Vector_4" />
        <g id="Vector_5" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxOutlineClipboardText4() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/outline/clipboard-text">
      <ClipboardText2 />
    </div>
  );
}

function VuesaxOutlineClipboardText5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/outline/clipboard-text">
      <VuesaxOutlineClipboardText4 />
    </div>
  );
}

function Like2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="like">
        <path d={svgPaths.p2a552c80} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" />
        <path d={svgPaths.p2cac8d00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearLike4() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/like">
      <Like2 />
    </div>
  );
}

function VuesaxLinearLike5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/like">
      <VuesaxLinearLike4 />
    </div>
  );
}

function Dislike2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
      <g id="dislike">
        <path d={svgPaths.p194d0500} id="Vector" stroke="var(--stroke-0, white)" strokeMiterlimit="10" />
        <path d={svgPaths.p1bab7400} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
        <g id="Vector_3" opacity="0"></g>
      </g>
    </svg>
  );
}

function VuesaxLinearDislike4() {
  return (
    <div className="absolute contents inset-0" data-name="vuesax/linear/dislike">
      <Dislike2 />
    </div>
  );
}

function VuesaxLinearDislike5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="vuesax/linear/dislike">
      <VuesaxLinearDislike4 />
    </div>
  );
}

function Component3Icons2() {
  return (
    <div className="bg-[#459aff] box-border content-stretch flex gap-[8px] items-start p-[4px] relative rounded-[8px] shrink-0" data-name="3 icons">
      <VuesaxOutlineClipboardText5 />
      <VuesaxLinearLike5 />
      <VuesaxLinearDislike5 />
    </div>
  );
}

function CopyLikeDislike2() {
  return (
    <div className="absolute bottom-[185px] box-border content-stretch flex gap-[7px] items-start px-[20px] py-0 right-[59px]" data-name="⏲ copy like dislike">
      <Component3Icons2 />
    </div>
  );
}

function Conversation() {
  return (
    <div className="absolute bg-slate-50 h-[1015px] left-0 overflow-clip rounded-[24px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)] top-[58px] w-[544px]" data-name="Conversation">
      <InputBox />
      <YepAiMessage />
      <YepAiMessage1 />
      <YepAiMessage2 />
      <CopyLikeDislike2 />
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

function Text5() {
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
      <Text5 />
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

function Messages3() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow items-end justify-end min-h-px min-w-px relative shrink-0" data-name="✏️ Messages">
      <p className="basis-0 font-['Inter:Regular',_sans-serif] font-normal grow h-[48px] leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[#0c0c0c] text-[16px]">Customer analysis Please~</p>
    </div>
  );
}

function BubbleSender3() {
  return (
    <div className="bg-[#d6dcf3] h-[47px] relative rounded-[12px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.2)] shrink-0 w-[254px]" data-name="👨‍💻 Bubble Sender">
      <div className="flex flex-row justify-end size-full">
        <div className="box-border content-stretch flex gap-[10px] h-[47px] items-start justify-end pb-[32px] pl-[20px] pr-[16px] pt-[16px] relative w-[254px]">
          <Messages3 />
        </div>
      </div>
    </div>
  );
}

function Frame32() {
  return <div className="absolute bottom-[24px] h-[7px] left-[284px] w-[20px]" />;
}

function CustomerMessage() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7px] h-[87px] items-end justify-end left-[163px] pb-[40px] pl-[20px] pr-[12px] pt-0 top-[79px] w-[344px]" data-name="Customer Message">
      <BubbleSender3 />
      <Frame32 />
    </div>
  );
}

function BottomStatus11() {
  return (
    <div className="absolute bottom-0 left-[70%] right-[-15%] top-[55%]" data-name="Bottom Status [1.0]">
      <div className="absolute bottom-[-6.89%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23 26">
          <g filter="url(#filter0_d_4_23824)" id="Bottom Status [1.0]">
            <path d={svgPaths.p3d370e00} fill="var(--fill-0, white)" id="Stroke" />
            <path d={svgPaths.pdac3200} fill="var(--fill-0, #82C43C)" id="Ellipse" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="31.4" id="filter0_d_4_23824" width="30.95" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.04 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_23824" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_23824" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Avatar11() {
  return (
    <div className="absolute h-[52px] left-[479px] rounded-[999px] top-[125px] w-[51px]" data-name="Avatar [1.0]">
      <div className="absolute inset-0 rounded-[110px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[110px] size-full" src={imgImage} />
      </div>
      <BottomStatus11 />
    </div>
  );
}

function Group1437252837() {
  return (
    <div className="absolute contents left-[163px] top-[79px]">
      <CustomerMessage />
      <Avatar11 />
    </div>
  );
}

function ConversationSection() {
  return (
    <div className="absolute h-[1073px] left-[300px] top-[20px] w-[544px]" data-name="Conversation Section">
      <Conversation />
      <TopBar />
      <Group1437252837 />
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

function Text6() {
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
      <Text6 />
    </div>
  );
}

function ProcessBar() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-end overflow-clip p-[10px] right-[129px] top-1/2 translate-y-[-50%]" data-name="Process bar">
      <div className="bg-[#d9d9d9] h-[18px] rounded-[20px] shrink-0 w-[124px]" />
      <div className="bg-[#7b53eb] h-[18px] rounded-[20px] shrink-0 w-[124px]" />
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

function Cloud() {
  return (
    <div className="absolute h-[15px] left-[2px] top-[6px] w-[20px]" data-name="Cloud">
      <div className="absolute inset-[-5%_-3.75%_-3.62%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 17">
          <g id="Cloud">
            <path d={svgPaths.p31a76d80} id="Union" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            <g id="Down">
              <path d={svgPaths.p1cf88b80} id="Vector 140" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
              <path d="M11 15L11 9" id="Vector 141" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconexLightCloudDownload() {
  return (
    <div className="absolute left-[299px] size-[24px] top-[735px]" data-name="Iconex/Light/Cloud download">
      <Cloud />
    </div>
  );
}

function Canva() {
  return (
    <div className="absolute h-[999px] left-[10px] top-[10px] w-[822px]" data-name="Canva">
      <p className="absolute font-['Inter:Bold',_sans-serif] font-bold leading-[34px] left-[21px] not-italic text-[28px] text-slate-600 top-[691px] tracking-[-0.56px] w-[734px]">
        <span className="text-[#459aff]">“YepAI Insight”</span>
        <span>{` – AI-driven Audience Profiling for Precision Marketing`}</span>
      </p>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[22px] left-[22px] not-italic text-[18px] text-slate-600 top-[769px] w-[801px]">
        <p className="mb-0">Based on the latest 30-day sales and engagement data, YepAI’s User Analysis Agent has identified key audience segments to guide personalized content generation. This insight combines behavioral trends, platform usage, and purchase patterns to build a clear target profile for your next campaign.</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">The recommended audience segment includes users who:</p>
        <p className="mb-0 whitespace-pre-wrap">{`	  ✅ Are females aged 25–34, with a strong preference for emotionally resonant content`}</p>
        <p className="mb-0 whitespace-pre-wrap">{`	  ✅ Frequently shop via Instagram and Redbook, primarily on iOS devices`}</p>
        <p className="mb-0 whitespace-pre-wrap">{`	  ✅ Show recurring interest in eco-friendly, aesthetic, and minimalist products`}</p>
        <p className="whitespace-pre-wrap">{`	  ✅ Work in creative industries such as design, lifestyle blogging, or boutique retail`}</p>
      </div>
      <IconexLightCloudDownload />
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

function CostumerAnalysisPage() {
  return (
    <div className="absolute bg-[#d6dcf3] h-[1113px] left-0 top-[64px] w-[1728px]" data-name="Costumer Analysis Page">
      <ChatSection />
      <PreviewSection />
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
    <div className="absolute bg-[rgba(123,83,235,0.35)] box-border content-stretch flex gap-[16px] h-[64px] items-center left-0 p-[16px] right-0 shadow-[0px_0.594px_0px_0px_rgba(0,0,0,0.15)] top-0" data-name="Chrome browser bar">
      <Icons />
      <AddressBar />
      <Avatar />
      <More />
      <div className="absolute inset-0 pointer-events-none shadow-[0px_-0.594px_0px_0px_inset_rgba(0,0,0,0.05)]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[24px] rounded-[12px] top-[24px] w-[182px]" data-name="Text">
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full">Views</p>
    </div>
  );
}

function Number() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
      <div className="absolute css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] text-nowrap top-[-252px] whitespace-pre">
        <p className="mb-0">0</p>
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p>0</p>
      </div>
    </div>
  );
}

function Number1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number />
    </div>
  );
}

function RollNumbers() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number1 />
    </div>
  );
}

function Number2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <p className="css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#1c1c1c] text-[24px] text-nowrap whitespace-pre">,</p>
    </div>
  );
}

function RollNumbers1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number2 />
    </div>
  );
}

function Number3() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
      <div className="absolute css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] text-nowrap top-[-72px] whitespace-pre">
        <p className="mb-0">0</p>
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p>0</p>
      </div>
    </div>
  );
}

function Number4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number3 />
    </div>
  );
}

function RollNumbers2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number4 />
    </div>
  );
}

function Number5() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
      <div className="absolute css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] text-nowrap top-[-216px] whitespace-pre">
        <p className="mb-0">0</p>
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p>0</p>
      </div>
    </div>
  );
}

function Number6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number5 />
    </div>
  );
}

function RollNumbers3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number6 />
    </div>
  );
}

function Number7() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
      <div className="absolute css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] text-nowrap top-[-180px] whitespace-pre">
        <p className="mb-0">0</p>
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p>0</p>
      </div>
    </div>
  );
}

function Number8() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number7 />
    </div>
  );
}

function RollNumbers4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number8 />
    </div>
  );
}

function RollingNumber() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Rolling number">
      <RollNumbers />
      <RollNumbers1 />
      <RollNumbers2 />
      <RollNumbers3 />
      <RollNumbers4 />
    </div>
  );
}

function Text8() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0" data-name="Text">
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full">+11.01%</p>
    </div>
  );
}

function ArrowRise() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ArrowRise">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ArrowRise">
          <path clipRule="evenodd" d={svgPaths.pb846800} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <ArrowRise />
    </div>
  );
}

function IconText() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center justify-end min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Icon & Text">
      <Text8 />
      <Icon />
    </div>
  );
}

function Content() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[8px] h-[36px] items-center justify-between left-[24px] rounded-[8px] top-[52px] w-[182px]" data-name="Content">
      <RollingNumber />
      <IconText />
    </div>
  );
}

function Cloud1() {
  return (
    <div className="absolute h-[15px] left-[2px] top-[6px] w-[20px]" data-name="Cloud">
      <div className="absolute inset-[-5%_-3.75%_-3.62%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 17">
          <g id="Cloud">
            <path d={svgPaths.p31a76d80} id="Union" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            <g id="Down">
              <path d={svgPaths.p1cf88b80} id="Vector 140" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
              <path d="M11 15L11 9" id="Vector 141" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconexLightCloudDownload1() {
  return (
    <div className="absolute left-[77px] size-[24px] top-[20px]" data-name="Iconex/Light/Cloud download">
      <Cloud1 />
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-[#edeefc] h-[112px] left-0 rounded-[20px] top-0 w-[230px]" data-name="Card">
      <Text7 />
      <Content />
      <IconexLightCloudDownload1 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[24px] rounded-[12px] top-[24px] w-[182px]" data-name="Text">
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full">Buy</p>
    </div>
  );
}

function Number9() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
      <div className="absolute css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] text-nowrap top-[-108px] whitespace-pre">
        <p className="mb-0">0</p>
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p>0</p>
      </div>
    </div>
  );
}

function Number10() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number9 />
    </div>
  );
}

function RollNumbers5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number10 />
    </div>
  );
}

function Number11() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <p className="css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] not-italic relative shrink-0 text-[#1c1c1c] text-[24px] text-nowrap whitespace-pre">,</p>
    </div>
  );
}

function RollNumbers6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number11 />
    </div>
  );
}

function Number12() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
      <div className="absolute css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] text-nowrap top-[-216px] whitespace-pre">
        <p className="mb-0">0</p>
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p>0</p>
      </div>
    </div>
  );
}

function Number13() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number12 />
    </div>
  );
}

function RollNumbers7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number13 />
    </div>
  );
}

function Number14() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
      <div className="absolute css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] text-nowrap top-[-252px] whitespace-pre">
        <p className="mb-0">0</p>
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p>0</p>
      </div>
    </div>
  );
}

function Number15() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number14 />
    </div>
  );
}

function RollNumbers8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number15 />
    </div>
  );
}

function Number16() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
      <div className="absolute css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] text-nowrap top-[-36px] whitespace-pre">
        <p className="mb-0">0</p>
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p>0</p>
      </div>
    </div>
  );
}

function Number17() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number16 />
    </div>
  );
}

function RollNumbers9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number17 />
    </div>
  );
}

function RollingNumber1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Rolling number">
      <RollNumbers5 />
      <RollNumbers6 />
      <RollNumbers7 />
      <RollNumbers8 />
      <RollNumbers9 />
    </div>
  );
}

function Text10() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0" data-name="Text">
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full">-0.03%</p>
    </div>
  );
}

function ArrowFall() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ArrowFall">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ArrowFall">
          <path clipRule="evenodd" d={svgPaths.p1280aaf2} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <ArrowFall />
    </div>
  );
}

function IconText1() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center justify-end min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Icon & Text">
      <Text10 />
      <Icon1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[8px] h-[36px] items-center justify-between left-[24px] rounded-[8px] top-[52px] w-[182px]" data-name="Content">
      <RollingNumber1 />
      <IconText1 />
    </div>
  );
}

function Cloud2() {
  return (
    <div className="absolute h-[15px] left-[2px] top-[6px] w-[20px]" data-name="Cloud">
      <div className="absolute inset-[-5%_-3.75%_-3.62%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 17">
          <g id="Cloud">
            <path d={svgPaths.p31a76d80} id="Union" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            <g id="Down">
              <path d={svgPaths.p1cf88b80} id="Vector 140" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
              <path d="M11 15L11 9" id="Vector 141" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconexLightCloudDownload2() {
  return (
    <div className="absolute left-[63px] size-[24px] top-[20px]" data-name="Iconex/Light/Cloud download">
      <Cloud2 />
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[#e6f1fd] h-[112px] left-[258px] rounded-[20px] top-0 w-[230px]" data-name="Card">
      <Text9 />
      <Content1 />
      <IconexLightCloudDownload2 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[24px] rounded-[12px] top-[24px] w-[182px]" data-name="Text">
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal h-[20px] leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full">New Customers</p>
    </div>
  );
}

function Number18() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
      <div className="absolute css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] text-nowrap top-[-36px] whitespace-pre">
        <p className="mb-0">0</p>
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p>0</p>
      </div>
    </div>
  );
}

function Number19() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number18 />
    </div>
  );
}

function RollNumbers10() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number19 />
    </div>
  );
}

function Number20() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
      <div className="absolute css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] text-nowrap top-[-180px] whitespace-pre">
        <p className="mb-0">0</p>
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p>0</p>
      </div>
    </div>
  );
}

function Number21() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number20 />
    </div>
  );
}

function RollNumbers11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number21 />
    </div>
  );
}

function Number22() {
  return (
    <div className="h-[36px] relative shrink-0 w-[16px]" data-name="Number">
      <div className="absolute css-gv6zft font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[36px] left-0 not-italic text-[#1c1c1c] text-[24px] text-nowrap top-[-216px] whitespace-pre">
        <p className="mb-0">0</p>
        <p className="mb-0">1</p>
        <p className="mb-0">2</p>
        <p className="mb-0">3</p>
        <p className="mb-0">4</p>
        <p className="mb-0">5</p>
        <p className="mb-0">6</p>
        <p className="mb-0">7</p>
        <p className="mb-0">8</p>
        <p className="mb-0">9</p>
        <p>0</p>
      </div>
    </div>
  );
}

function Number23() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[4px] shrink-0" data-name="Number">
      <Number22 />
    </div>
  );
}

function RollNumbers12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Roll numbers">
      <Number23 />
    </div>
  );
}

function RollingNumber2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="Rolling number">
      <RollNumbers10 />
      <RollNumbers11 />
      <RollNumbers12 />
    </div>
  );
}

function Text12() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0" data-name="Text">
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full">+15.03%</p>
    </div>
  );
}

function ArrowRise1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ArrowRise">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ArrowRise">
          <path clipRule="evenodd" d={svgPaths.pb846800} fill="var(--fill-0, black)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[8px] shrink-0" data-name="Icon">
      <ArrowRise1 />
    </div>
  );
}

function IconText2() {
  return (
    <div className="basis-0 content-center flex flex-wrap gap-[8px] grow items-center justify-end min-h-px min-w-px relative rounded-[12px] shrink-0" data-name="Icon & Text">
      <Text12 />
      <Icon2 />
    </div>
  );
}

function Content2() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[8px] h-[36px] items-center justify-between left-[24px] rounded-[8px] top-[52px] w-[182px]" data-name="Content">
      <RollingNumber2 />
      <IconText2 />
    </div>
  );
}

function Cloud3() {
  return (
    <div className="absolute h-[15px] left-[2px] top-[6px] w-[20px]" data-name="Cloud">
      <div className="absolute inset-[-5%_-3.75%_-3.62%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 17">
          <g id="Cloud">
            <path d={svgPaths.p31a76d80} id="Union" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            <g id="Down">
              <path d={svgPaths.p1cf88b80} id="Vector 140" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
              <path d="M11 15L11 9" id="Vector 141" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconexLightCloudDownload3() {
  return (
    <div className="absolute left-[139px] size-[24px] top-[19px]" data-name="Iconex/Light/Cloud download">
      <Cloud3 />
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-[#edeefc] h-[112px] left-[516px] rounded-[20px] top-0 w-[230px]" data-name="Card">
      <Text11 />
      <Content2 />
      <IconexLightCloudDownload3 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[24px] rounded-[12px] top-[24px] w-[698px]" data-name="Text">
      <p className="css-rigxst font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full">Traffic by Platform</p>
    </div>
  );
}

function LeftText() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',_sans-serif] font-normal h-full items-end justify-between leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-right" data-name="Left Text">
      <div className="basis-0 css-cnb4sz flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-full">
        <p className="leading-[16px]">30K</p>
      </div>
      <div className="basis-0 css-cnb4sz flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-full">
        <p className="leading-[16px]">20K</p>
      </div>
      <div className="basis-0 css-cnb4sz flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-full">
        <p className="leading-[16px]">10K</p>
      </div>
      <div className="basis-0 css-cnb4sz flex flex-col grow justify-center min-h-px min-w-px relative shrink-0 w-full">
        <p className="leading-[16px]">0</p>
      </div>
    </div>
  );
}

function HorizontalLine() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Horizontal Line">
      <div className="size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Text14() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0" data-name="Text">
      <p className="css-u0553h font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full">2,000</p>
    </div>
  );
}

function Tooltip() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[4px] items-center left-[calc(50%+0.583px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[52px] translate-x-[-50%]" data-name="Tooltip">
      <Text14 />
    </div>
  );
}

function Component1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="1">
      <div className="basis-0 bg-[#a0bce8] grow max-w-[28px] min-h-px min-w-px opacity-0 rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#a0bce8] grow max-w-[28px] min-h-px min-w-px opacity-0 shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#a0bce8] grow max-w-[28px] min-h-px min-w-px opacity-0 shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#a0bce8] grow max-w-[28px] min-h-px min-w-px opacity-0 shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#a0bce8] grow max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#a0bce8] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#a0bce8] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#a0bce8] grow max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Rectangle" />
      <Tooltip />
    </div>
  );
}

function Text15() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0" data-name="Text">
      <p className="css-u0553h font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full">5,000</p>
    </div>
  );
}

function Tooltip1() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[4px] items-center left-[calc(50%+0.583px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[-8px] translate-x-[-50%]" data-name="Tooltip">
      <Text15 />
    </div>
  );
}

function Component7() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="2">
      <div className="basis-0 bg-[#6be6d3] grow max-w-[28px] min-h-px min-w-px opacity-0 rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#6be6d3] grow max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#6be6d3] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#6be6d3] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#6be6d3] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#6be6d3] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#6be6d3] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#6be6d3] grow max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Rectangle" />
      <Tooltip1 />
    </div>
  );
}

function Text16() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0" data-name="Text">
      <p className="css-u0553h font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full">3,000</p>
    </div>
  );
}

function Tooltip2() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[4px] items-center left-[calc(50%+0.583px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[32px] translate-x-[-50%]" data-name="Tooltip">
      <Text16 />
    </div>
  );
}

function Component3() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="3">
      <div className="basis-0 bg-black grow max-w-[28px] min-h-px min-w-px opacity-0 rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-black grow max-w-[28px] min-h-px min-w-px opacity-0 shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-black grow max-w-[28px] min-h-px min-w-px opacity-0 shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-black grow max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-black grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-black grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-black grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-black grow max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Rectangle" />
      <Tooltip2 />
    </div>
  );
}

function Text17() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0" data-name="Text">
      <p className="css-u0553h font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full">6,000</p>
    </div>
  );
}

function Tooltip3() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[4px] items-center left-[calc(50%+0.083px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[-28px] translate-x-[-50%]" data-name="Tooltip">
      <Text17 />
    </div>
  );
}

function Component4() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col grow h-full items-center justify-end min-h-px min-w-px pb-0 pt-[16px] px-0 relative shrink-0" data-name="4">
      <div className="basis-0 bg-[#7dbbff] grow max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#7dbbff] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#7dbbff] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#7dbbff] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#7dbbff] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#7dbbff] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#7dbbff] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#7dbbff] grow max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Rectangle" />
      <Tooltip3 />
    </div>
  );
}

function Text18() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0" data-name="Text">
      <p className="css-u0553h font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full">1,000</p>
    </div>
  );
}

function Tooltip4() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[4px] items-center left-[calc(50%+0.583px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[72px] translate-x-[-50%]" data-name="Tooltip">
      <Text18 />
    </div>
  );
}

function Component5() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="5">
      <div className="basis-0 bg-[#b899eb] grow max-w-[28px] min-h-px min-w-px opacity-0 rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#b899eb] grow max-w-[28px] min-h-px min-w-px opacity-0 shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#b899eb] grow max-w-[28px] min-h-px min-w-px opacity-0 shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#b899eb] grow max-w-[28px] min-h-px min-w-px opacity-0 shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#b899eb] grow max-w-[28px] min-h-px min-w-px opacity-0 shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#b899eb] grow max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#b899eb] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#b899eb] grow max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Rectangle" />
      <Tooltip4 />
    </div>
  );
}

function Text19() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0" data-name="Text">
      <p className="css-u0553h font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full">4,000</p>
    </div>
  );
}

function Tooltip5() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[4px] items-center left-[calc(50%+0.583px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[12px] translate-x-[-50%]" data-name="Tooltip">
      <Text19 />
    </div>
  );
}

function Component6() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="6">
      <div className="basis-0 bg-[#71dd8c] grow max-w-[28px] min-h-px min-w-px opacity-0 rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#71dd8c] grow max-w-[28px] min-h-px min-w-px opacity-0 shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#71dd8c] grow max-w-[28px] min-h-px min-w-px rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#71dd8c] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#71dd8c] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#71dd8c] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#71dd8c] grow max-w-[28px] min-h-px min-w-px shrink-0 w-full" data-name="Rectangle" />
      <div className="basis-0 bg-[#71dd8c] grow max-w-[28px] min-h-px min-w-px rounded-bl-[8px] rounded-br-[8px] shrink-0 w-full" data-name="Rectangle" />
      <Tooltip5 />
    </div>
  );
}

function VerticalBar() {
  return (
    <div className="box-border content-stretch flex h-[196px] items-end justify-between pb-[28px] pt-0 px-0 relative shrink-0 w-[659px]" data-name="Vertical Bar">
      <Component1 />
      <Component7 />
      <Component3 />
      <Component4 />
      <Component5 />
      <Component6 />
    </div>
  );
}

function BottomText() {
  return (
    <div className="content-stretch flex font-['Inter:Regular',_sans-serif] font-normal items-center leading-[0] not-italic relative shrink-0 text-[12px] text-[rgba(0,0,0,0.4)] text-center w-[659px]" data-name="Bottom Text">
      <div className="basis-0 css-cnb4sz flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[16px]">Tiktok</p>
      </div>
      <div className="basis-0 css-cnb4sz flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[16px]">Instagram</p>
      </div>
      <div className="basis-0 css-cnb4sz flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[16px]">Twitter</p>
      </div>
      <div className="basis-0 css-cnb4sz flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[16px]">Spotify</p>
      </div>
      <div className="basis-0 css-cnb4sz flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[16px]">Facebook</p>
      </div>
      <div className="basis-0 css-cnb4sz flex flex-col grow justify-center min-h-px min-w-px relative shrink-0">
        <p className="leading-[16px]">Other</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="basis-0 content-stretch flex flex-col grow h-full items-start min-h-px min-w-px relative shrink-0" data-name="Frame">
      <HorizontalLine />
      <VerticalBar />
      <BottomText />
    </div>
  );
}

function ChartMotion() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[196px] items-start left-[24px] top-[60px] w-[698px]" data-name="ChartMotion">
      <LeftText />
      <Frame1 />
    </div>
  );
}

function Cloud4() {
  return (
    <div className="absolute h-[15px] left-[2px] top-[6px] w-[20px]" data-name="Cloud">
      <div className="absolute inset-[-5%_-3.75%_-3.62%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 17">
          <g id="Cloud">
            <path d={svgPaths.p31a76d80} id="Union" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            <g id="Down">
              <path d={svgPaths.p1cf88b80} id="Vector 140" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
              <path d="M11 15L11 9" id="Vector 141" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconexLightCloudDownload4() {
  return (
    <div className="absolute left-[167px] size-[24px] top-[20px]" data-name="Iconex/Light/Cloud download">
      <Cloud4 />
    </div>
  );
}

function Block() {
  return (
    <div className="absolute bg-[#f9f9fa] h-[280px] left-0 overflow-clip rounded-[20px] top-[111px] w-[746px]" data-name="Block">
      <Text13 />
      <ChartMotion />
      <IconexLightCloudDownload4 />
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start justify-center left-[24px] rounded-[12px] top-[24px] w-[698px]" data-name="Text">
      <p className="css-rigxst font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[20px] not-italic relative shrink-0 text-[14px] text-black w-full">Traffic by Location</p>
    </div>
  );
}

function Frame2() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 75 120">
      <g id="Frame">
        <mask height="120" id="mask0_4_23809" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="75" x="0" y="0">
          <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="url(#paint0_linear_4_23809)" fillRule="evenodd" id="Subtract" />
        </mask>
        <g mask="url(#mask0_4_23809)">
          <g id="Subtract_2">
            <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="url(#paint1_linear_4_23809)" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3a6cf100} fill="var(--fill-1, black)" fillRule="evenodd" style={{ mixBlendMode: "screen" }} />
          </g>
        </g>
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_23809" x1="74.3004" x2="33.6726" y1="0" y2="43.0674">
          <stop />
          <stop offset="1" />
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_4_23809" x1="37.1502" x2="37.1502" y1="0" y2="119.967">
          <stop />
          <stop offset="1" stopColor="#1C1C1C" stopOpacity="0.6" />
          <stop offset="1" stopOpacity="0.6" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Text21() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0" data-name="Text">
      <p className="css-u0553h font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full">52.1%</p>
    </div>
  );
}

function Tooltip6() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[4px] items-center left-[calc(50%+19.16px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.017px)] translate-x-[-50%] translate-y-[-50%]" data-name="Tooltip">
      <Text21 />
    </div>
  );
}

function DonutGraph() {
  return (
    <div className="absolute bottom-[0.03%] left-[38.08%] right-[0.01%] top-0" data-name="DonutGraph">
      <Frame2 />
      <Tooltip6 />
    </div>
  );
}

function Frame3() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 74">
      <g id="Frame">
        <mask height="73" id="mask0_4_23868" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="51" x="0" y="0">
          <path clipRule="evenodd" d={svgPaths.p3d6f9400} fill="url(#paint0_linear_4_23868)" fillRule="evenodd" id="Subtract" />
        </mask>
        <g mask="url(#mask0_4_23868)">
          <path clipRule="evenodd" d={svgPaths.p3d6f9400} fill="var(--fill-0, #92BFFF)" fillRule="evenodd" id="Subtract_2" />
        </g>
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_23868" x1="51.5327" x2="27.1317" y1="0" y2="29.4076">
          <stop />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Text22() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0" data-name="Text">
      <p className="css-u0553h font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full">22.8%</p>
    </div>
  );
}

function Tooltip7() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[4px] items-center left-[calc(50%-0.423px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.407px)] translate-x-[-50%] translate-y-[-50%]" data-name="Tooltip">
      <Text22 />
    </div>
  );
}

function DonutGraph1() {
  return (
    <div className="absolute inset-[37.5%_56.92%_1.51%_0.13%]" data-name="DonutGraph">
      <Frame3 />
      <Tooltip7 />
    </div>
  );
}

function Frame4() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 43 43">
      <g id="Frame">
        <mask height="41" id="mask0_4_23805" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="40" x="1" y="1">
          <path clipRule="evenodd" d={svgPaths.p38b2cf00} fill="url(#paint0_linear_4_23805)" fillRule="evenodd" id="Subtract" />
        </mask>
        <g mask="url(#mask0_4_23805)">
          <path clipRule="evenodd" d={svgPaths.p38b2cf00} fill="var(--fill-0, #94E9B8)" fillRule="evenodd" id="Subtract_2" />
        </g>
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_23805" x1="42.268" x2="29.762" y1="0" y2="21.3879">
          <stop />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Text23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0" data-name="Text">
      <p className="css-u0553h font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full">13.9%</p>
    </div>
  );
}

function Tooltip8() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[4px] items-center left-[calc(50%-1.023px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%-0.151px)] translate-x-[-50%] translate-y-[-50%]" data-name="Tooltip">
      <Text23 />
    </div>
  );
}

function DonutGraph2() {
  return (
    <div className="absolute inset-[6.67%_62.37%_58.08%_2.41%]" data-name="DonutGraph">
      <Frame4 />
      <Tooltip8 />
    </div>
  );
}

function Frame5() {
  return (
    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29 34">
      <g id="Frame">
        <mask height="32" id="mask0_4_23801" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="28" x="1" y="0">
          <path clipRule="evenodd" d={svgPaths.p379c5880} fill="url(#paint0_linear_4_23801)" fillRule="evenodd" id="Subtract" />
        </mask>
        <g mask="url(#mask0_4_23801)">
          <path clipRule="evenodd" d={svgPaths.p379c5880} fill="var(--fill-0, #AEC7ED)" fillRule="evenodd" id="Subtract_2" />
        </g>
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_4_23801" x1="28.4489" x2="17.9783" y1="0" y2="15.3713">
          <stop />
          <stop offset="1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function Text24() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative rounded-[8px] shrink-0" data-name="Text">
      <p className="css-u0553h font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-white w-full">11.2%</p>
    </div>
  );
}

function Tooltip9() {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.8)] box-border content-stretch flex gap-[4px] items-center left-[calc(50%+2.336px)] opacity-0 px-[8px] py-[4px] rounded-[8px] top-[calc(50%+0.416px)] translate-x-[-50%] translate-y-[-50%]" data-name="Tooltip">
      <Text24 />
    </div>
  );
}

function DonutGraph3() {
  return (
    <div className="absolute bottom-[72.36%] left-[26.2%] right-[50.09%] top-0" data-name="DonutGraph">
      <Frame5 />
      <Tooltip9 />
    </div>
  );
}

function DonutChart() {
  return (
    <div className="relative shrink-0 size-[120px]" data-name="DonutChart">
      <DonutGraph />
      <DonutGraph1 />
      <DonutGraph2 />
      <DonutGraph3 />
    </div>
  );
}

function Dot() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dot">
          <path d={svgPaths.p10453ef0} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="box-border content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
      <Dot />
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">United States</p>
    </div>
  );
}

function Text25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0" data-name="Text">
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full">52.1%</p>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-center flex flex-wrap gap-[48px] items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <Tag />
      <Text25 />
    </div>
  );
}

function Dot1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dot">
          <path d={svgPaths.p10453ef0} fill="var(--fill-0, #7DBBFF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag1() {
  return (
    <div className="box-border content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
      <Dot1 />
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">Canada</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0" data-name="Text">
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full">22.8%</p>
    </div>
  );
}

function Content4() {
  return (
    <div className="content-center flex flex-wrap gap-[48px] items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <Tag1 />
      <Text26 />
    </div>
  );
}

function Dot2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dot">
          <path d={svgPaths.p10453ef0} fill="var(--fill-0, #71DD8C)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag2() {
  return (
    <div className="box-border content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
      <Dot2 />
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">Mexico</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0" data-name="Text">
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full">13.9%</p>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-center flex flex-wrap gap-[48px] items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <Tag2 />
      <Text27 />
    </div>
  );
}

function Dot3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Dot">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Dot">
          <path d={svgPaths.p10453ef0} fill="var(--fill-0, #A0BCE8)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Tag3() {
  return (
    <div className="box-border content-stretch flex items-center pl-[4px] pr-[8px] py-[2px] relative rounded-[8px] shrink-0" data-name="Tag">
      <Dot3 />
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black text-nowrap whitespace-pre">Other</p>
    </div>
  );
}

function Text28() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative rounded-[12px] shrink-0" data-name="Text">
      <p className="css-rigxst font-['Inter:Regular',_sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[12px] text-black w-full">11.2%</p>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-center flex flex-wrap gap-[48px] items-center justify-between relative rounded-[12px] shrink-0 w-full" data-name="Content">
      <Tag3 />
      <Text28 />
    </div>
  );
}

function Card3() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[12px] grow items-start min-h-px min-w-px relative rounded-[16px] shrink-0" data-name="Card">
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute box-border content-stretch flex gap-[40px] h-[196px] items-center left-[24px] px-[20px] py-0 top-[60px] w-[698px]" data-name="Frame">
      <DonutChart />
      <Card3 />
    </div>
  );
}

function Cloud5() {
  return (
    <div className="absolute h-[15px] left-[2px] top-[6px] w-[20px]" data-name="Cloud">
      <div className="absolute inset-[-5%_-3.75%_-3.62%_-3.75%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 17">
          <g id="Cloud">
            <path d={svgPaths.p31a76d80} id="Union" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            <g id="Down">
              <path d={svgPaths.p1cf88b80} id="Vector 140" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
              <path d="M11 15L11 9" id="Vector 141" stroke="var(--stroke-0, #2B3F6C)" strokeLinecap="round" strokeWidth="1.5" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function IconexLightCloudDownload5() {
  return (
    <div className="absolute left-[167px] size-[24px] top-[21px]" data-name="Iconex/Light/Cloud download">
      <Cloud5 />
    </div>
  );
}

function Block1() {
  return (
    <div className="absolute bg-[#f9f9fa] h-[280px] left-0 overflow-clip rounded-[20px] top-[367px] w-[746px]" data-name="Block">
      <Text20 />
      <Frame6 />
      <IconexLightCloudDownload5 />
    </div>
  );
}

function MarketingChart() {
  return (
    <div className="absolute h-[694px] left-[903px] top-[127px] w-[746px]" data-name="Marketing Chart">
      <Card />
      <Card1 />
      <Card2 />
      <Block />
      <Block1 />
    </div>
  );
}

export default function CustomerAnalysis() {
  return (
    <div className="relative size-full" data-name="Customer analysis">
      <CostumerAnalysisPage />
      <ChromeBrowserBar />
      <MarketingChart />
    </div>
  );
}