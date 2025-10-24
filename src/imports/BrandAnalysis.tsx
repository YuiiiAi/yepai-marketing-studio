import svgPaths from "./svg-s1vbtqgg9g";
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
          <g filter="url(#filter0_d_4_23751)" id="Bottom Status [1.0]">
            <path d={svgPaths.p24c9df00} fill="var(--fill-0, white)" id="Stroke" />
            <path d={svgPaths.pcbf5000} fill="var(--fill-0, #82C43C)" id="Ellipse" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="26" id="filter0_d_4_23751" width="26" x="-3" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.04 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_23751" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_23751" mode="normal" result="shape" />
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
          <path d={svgPaths.p3b45e100} fill="var(--fill-0, #F8FAFC)" id="Union" />
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
    <div className="absolute h-[50px] left-[26px] top-[124px] w-[238px]" data-name="Component 2">
      <Group2607611 />
      <Group1437252737 />
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
          <p className="css-pqx3jr font-['Inter:Regular',_sans-serif] font-normal leading-[1.5] not-italic relative shrink-0 text-[#99a0ae] text-[16px] text-nowrap tracking-[-0.176px] whitespace-pre">
            {`If I want to create an Instagram ad for a pet product, `}
            <br aria-hidden="true" />
            what does the content look like?
          </p>
          <Frame2147224315 />
          <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[256px] top-[37px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "20", "--transform-inner-height": "0" } as React.CSSProperties}>
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

function CopyLikeDislike() {
  return (
    <div className="absolute bottom-[14px] h-[18px] right-[-16px] w-[28px]" data-name="⏲ copy like dislike">
      <div className="size-full">
        <div className="h-[18px] w-[28px]" />
      </div>
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
          <path clipRule="evenodd" d={svgPaths.p1da35780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
          <path d={svgPaths.p6e5e400} fill="var(--fill-0, white)" id="Vector_3" />
          <rect fill="var(--fill-0, #162550)" height="5.5618" id="Rectangle 17" rx="2.7809" width="15.573" x="8.34289" y="6.92138" />
          <ellipse cx="20.4239" cy="9.67142" fill="var(--fill-0, #04FED1)" id="Ellipse 18" rx="1.01966" ry="1.01966" />
          <ellipse cx="16.0979" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 19" rx="1.01966" ry="1.01966" />
          <ellipse cx="12.0199" cy="9.67142" fill="var(--fill-0, #04FED1)" id="Ellipse 20" rx="1.01966" ry="1.01966" />
          <ellipse cx="12.0199" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 21" rx="1.01966" ry="1.01966" />
          <ellipse cx="20.1771" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 22" rx="1.01966" ry="1.01966" />
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
    <div className="absolute bottom-[58px] left-[-11px] rounded-[80px] size-[48px]" data-name="logo">
      <BrandColor />
      <Logo />
    </div>
  );
}

function YepAiMessage() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7px] h-[89px] items-start justify-end left-[44px] pb-[20px] pt-0 px-[20px] top-[235px] w-[74px]" data-name="YepAI Message">
      <CopyLikeDislike />
      <Logo1 />
    </div>
  );
}

function Messages() {
  return (
    <div className="absolute content-stretch flex gap-[10px] items-end justify-end left-[13px] top-[10px] w-[366px]" data-name="✏️ Messages">
      <p className="font-['Inter:Regular',_sans-serif] font-normal h-[56px] leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-[353px]">Understood. Your brand tone is calm, nature-inspiredand confident. Shall l align the copy with your greencolor palette?</p>
    </div>
  );
}

function Frame31() {
  return <div className="absolute bottom-[-17px] h-[7px] left-[13px] w-[20px]" />;
}

function BubbleSender() {
  return (
    <div className="absolute bg-[#7b53eb] h-[76px] left-[69px] rounded-[12px] shadow-[0px_2px_1px_0px_rgba(0,0,0,0.05)] top-[149px] w-[393px]" data-name="👨‍💻 Bubble Sender">
      <Messages />
      <Frame31 />
    </div>
  );
}

function CopyLikeDislike1() {
  return (
    <div className="absolute bottom-[14px] h-[18px] right-[-16px] w-[28px]" data-name="⏲ copy like dislike">
      <div className="size-full">
        <div className="h-[18px] w-[28px]" />
      </div>
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
          <path clipRule="evenodd" d={svgPaths.p1da35780} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
          <g id="Vector_2"></g>
          <path d={svgPaths.p6e5e400} fill="var(--fill-0, white)" id="Vector_3" />
          <rect fill="var(--fill-0, #162550)" height="5.5618" id="Rectangle 17" rx="2.7809" width="15.573" x="8.34289" y="6.92138" />
          <ellipse cx="20.4239" cy="9.67142" fill="var(--fill-0, #04FED1)" id="Ellipse 18" rx="1.01966" ry="1.01966" />
          <ellipse cx="16.0979" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 19" rx="1.01966" ry="1.01966" />
          <ellipse cx="12.0199" cy="9.67142" fill="var(--fill-0, #04FED1)" id="Ellipse 20" rx="1.01966" ry="1.01966" />
          <ellipse cx="12.0199" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 21" rx="1.01966" ry="1.01966" />
          <ellipse cx="20.1771" cy="23.3904" fill="var(--fill-0, #162550)" id="Ellipse 22" rx="1.01966" ry="1.01966" />
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
    <div className="absolute bottom-[57px] left-[-11px] rounded-[80px] size-[48px]" data-name="logo">
      <BrandColor1 />
      <Logo2 />
    </div>
  );
}

function YepAiMessage1() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7px] h-[89px] items-start justify-end left-[49px] pb-[20px] pt-0 px-[20px] top-[423px] w-[74px]" data-name="YepAI Message">
      <CopyLikeDislike1 />
      <Logo3 />
    </div>
  );
}

function Messages1() {
  return (
    <div className="absolute content-stretch flex gap-[10px] h-[129px] items-end justify-end left-[calc(50%+0.5px)] top-1/2 translate-x-[-50%] translate-y-[-50%] w-[366px]" data-name="✏️ Messages">
      <div className="font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal h-[119px] leading-[normal] not-italic relative shrink-0 text-[16px] text-white w-[356px]">
        <p className="mb-0">{`Brand Analyss: Parses brand tone& visual style (e.g, calm, pastel, elegant) `}</p>
        <p className="mb-0">{`Copywriter: Generatesad captions & social copy in brtone `}</p>
        <p>{`Market insight: Analyzes engagmenttrend & keyword preference`}</p>
      </div>
    </div>
  );
}

function Frame32() {
  return <div className="absolute bottom-[-17px] h-[7px] left-[13px] w-[20px]" />;
}

function BubbleSender1() {
  return (
    <div className="absolute bg-[#7b53eb] h-[129px] left-[73px] rounded-[12px] shadow-[0px_2px_1px_0px_rgba(0,0,0,0.05)] top-[285px] w-[393px]" data-name="👨‍💻 Bubble Sender">
      <Messages1 />
      <Frame32 />
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
    <div className="absolute bg-[#459aff] box-border content-stretch flex gap-[8px] items-start left-[418px] p-[4px] rounded-[8px] top-[211px]" data-name="3 icons">
      <VuesaxOutlineClipboardText1 />
      <VuesaxLinearLike1 />
      <VuesaxLinearDislike1 />
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
    <div className="absolute bg-[#459aff] box-border content-stretch flex gap-[8px] items-start left-[415px] p-[4px] rounded-[8px] top-[397px]" data-name="3 icons">
      <VuesaxOutlineClipboardText3 />
      <VuesaxLinearLike3 />
      <VuesaxLinearDislike3 />
    </div>
  );
}

function Messages2() {
  return (
    <div className="basis-0 content-stretch flex gap-[10px] grow h-[46px] items-end justify-end min-h-px min-w-px relative shrink-0" data-name="✏️ Messages">
      <p className="font-['Inter:Regular',_sans-serif] font-normal h-[46px] leading-[normal] not-italic relative shrink-0 text-[16px] text-black w-[331px]">I need captions for our new eco-friendly tote bags.</p>
    </div>
  );
}

function BubbleSender2() {
  return (
    <div className="absolute bg-[#d6dcf3] box-border content-stretch flex gap-[10px] h-[70px] items-start justify-end left-[99px] pb-[32px] pl-[20px] pr-[16px] pt-[16px] rounded-[12px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.2)] top-[29px] w-[367px]" data-name="👨‍💻 Bubble Sender">
      <Messages2 />
    </div>
  );
}

function Conversation() {
  return (
    <div className="absolute bg-slate-50 h-[1015px] left-0 overflow-clip rounded-[24px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)] top-[29px] w-[544px]" data-name="Conversation">
      <InputBox />
      <YepAiMessage />
      <BubbleSender />
      <YepAiMessage1 />
      <BubbleSender1 />
      <Component3Icons />
      <Component3Icons1 />
      <BubbleSender2 />
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
    <div className="absolute h-[44px] left-0 top-[-22px] w-[544px]" data-name="Top Bar">
      <ChatWithYepAi />
      <Buttons />
    </div>
  );
}

function Frame33() {
  return <div className="absolute bottom-[20px] h-[7px] left-[437px] w-[20px]" />;
}

function CustomerMessage() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[7px] items-end justify-end left-[-7px] pb-[40px] pl-[20px] pr-[12px] pt-0 top-[77px] w-[485px]" data-name="Customer Message">
      <Frame33 />
    </div>
  );
}

function BottomStatus11() {
  return (
    <div className="absolute bottom-0 left-[70%] right-[-15%] top-[55%]" data-name="Bottom Status [1.0]">
      <div className="absolute bottom-[-4.52%] left-0 right-0 top-0">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 27">
          <g filter="url(#filter0_d_4_23688)" id="Bottom Status [1.0]">
            <path d={svgPaths.p12448400} fill="var(--fill-0, white)" id="Stroke" />
            <path d={svgPaths.p2d9fb080} fill="var(--fill-0, #82C43C)" id="Ellipse" />
          </g>
          <defs>
            <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="33.7878" id="filter0_d_4_23688" width="33.4514" x="-4" y="-2">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.105882 0 0 0 0 0.109804 0 0 0 0 0.113725 0 0 0 0.04 0" />
              <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_4_23688" />
              <feBlend in="SourceGraphic" in2="effect1_dropShadow_4_23688" mode="normal" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function Avatar11() {
  return (
    <div className="absolute h-[57.306px] left-[446.44px] rounded-[999px] top-[127.69px] w-[56.559px]" data-name="Avatar [1.0]">
      <div className="absolute inset-[-13.43%_-13.36%_13.43%_13.36%] rounded-[110px]" data-name="image">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[110px] size-full" src={imgImage} />
      </div>
      <BottomStatus11 />
    </div>
  );
}

function Group1437252837() {
  return (
    <div className="absolute contents left-[-7px] top-[77px]">
      <CustomerMessage />
      <Avatar11 />
    </div>
  );
}

function ConversationSection() {
  return (
    <div className="absolute h-[1073px] left-[295px] top-[35px] w-[544px]" data-name="Conversation Section">
      <Conversation />
      <TopBar />
      <Group1437252837 />
    </div>
  );
}

function YepAiMessage2() {
  return <div className="absolute h-[144px] left-[27px] top-[104px] w-[352px]" data-name="YepAI Message" />;
}

function ChatSection() {
  return (
    <div className="absolute bg-[#d6dcf3] h-[1113px] left-0 overflow-clip top-0 w-[864px]" data-name="Chat Section">
      <Sidebar />
      <Component2 />
      <div className="absolute h-0 left-[20px] top-[193px] w-[260px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 2">
            <path d="M0 1H260" id="Vector 10" stroke="var(--stroke-0, #D6DCF3)" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',_sans-serif] font-normal justify-center leading-[0] left-[42px] not-italic text-[#585353] text-[16px] top-[223px] translate-y-[-50%] w-[158px]">
        <p className="leading-[24px]">Your conversations</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',_sans-serif] font-semibold justify-center leading-[0] left-[214.5px] not-italic text-[#7b53eb] text-[14px] text-nowrap top-[223px] tracking-[-0.28px] translate-y-[-50%]">
        <p className="leading-[20px] whitespace-pre">Clear All</p>
      </div>
      <div className="absolute h-0 left-[20px] top-[254px] w-[260px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 2">
            <path d="M0 1H260" id="Vector 16" stroke="var(--stroke-0, #D6DCF3)" />
          </svg>
        </div>
      </div>
      <ConversationSection />
      <YepAiMessage2 />
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
      <div className="bg-[#d9d9d9] h-[18px] rounded-[20px] shrink-0 w-[124px]" />
      <div className="bg-[#7b53eb] h-[18px] rounded-[20px] shrink-0 w-[124px]" />
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

function Frame2147224319() {
  return <div className="absolute h-[91px] left-[353px] top-[454px] w-[117px]" />;
}

function Canva() {
  return (
    <div className="absolute h-[999px] left-[10px] top-[10px] w-[822px]" data-name="Canva">
      <Frame2147224319 />
    </div>
  );
}

function ConDes() {
  return (
    <div className="absolute bg-[#7b53eb] h-[100px] left-[354px] rounded-[20px] top-[723px] w-[400px]" data-name="con des">
      <div className="h-[100px] overflow-clip relative rounded-[inherit] w-[400px]">
        <div className="absolute font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal leading-[normal] left-[calc(50%-184px)] not-italic text-[20px] text-white top-[calc(50%-36px)] w-[369px]">
          <p className="mb-0">{`“Tone alignment: 85% match.” `}</p>
          <p>“Headline too strong; soften verbs for authenticity.”</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[20px]" />
    </div>
  );
}

function Con() {
  return (
    <div className="absolute bg-[#7b53eb] h-[100px] left-[130px] overflow-clip rounded-[20px] top-[730px] w-[198px]" data-name="Con">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[calc(50%+0.5px)] not-italic text-[20px] text-center text-nowrap text-white top-[calc(50%-24px)] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">{`Consistency `}</p>
        <p>Feedback</p>
      </div>
    </div>
  );
}

function AuDes() {
  return (
    <div className="absolute bg-[#7b53eb] h-[100px] left-[354px] overflow-clip rounded-[20px] top-[587px] w-[400px]" data-name="au des">
      <div className="absolute font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal leading-[normal] left-[calc(50%-186px)] not-italic text-[16px] text-white top-[calc(50%-38px)] w-[372px]">
        <p className="mb-0">{`“Appeals to eco-conscious female shoppers aged 25–40.” `}</p>
        <p>“Instagram: use lifestyle tone; LinkedIn: highlight sustainability.”</p>
      </div>
    </div>
  );
}

function Au() {
  return (
    <div className="absolute bg-[#7b53eb] h-[100px] left-[129px] overflow-clip rounded-[20px] top-[589px] w-[198px]" data-name="Au">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-1/2 not-italic text-[20px] text-center text-nowrap text-white top-[calc(50%-24px)] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">Audience Fit</p>
        <p>{` Insights`}</p>
      </div>
    </div>
  );
}

function LanDes() {
  return (
    <div className="absolute bg-[#7b53eb] h-[100px] left-[356px] overflow-clip rounded-[20px] top-[451px] w-[400px]" data-name="lan des">
      <div className="absolute font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal leading-[0] left-[calc(50%-173px)] not-italic text-[16px] text-white top-[calc(50%-38px)] w-[347px]">
        <p className="leading-[normal] mb-0">{`“Use simple emotional language.” `}</p>
        <p className="leading-[normal] mb-0">{`“Avoid exaggerated marketing claims.” `}</p>
        <p className="leading-[normal]">
          <span>{`“Template: `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">Product</span>
          <span>{` helps you `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid underline">achieve feeling</span>
          <span>{` naturally.”`}</span>
        </p>
      </div>
    </div>
  );
}

function Language() {
  return (
    <div className="absolute bg-[#7b53eb] h-[100px] left-[129px] overflow-clip rounded-[20px] top-[453px] w-[198px]" data-name="Language">
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[calc(50%+0.5px)] not-italic text-[20px] text-center text-nowrap text-white top-[calc(50%-24px)] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">{`Language `}</p>
        <p>Blueprint</p>
      </div>
    </div>
  );
}

function VisualDes() {
  return (
    <div className="absolute bg-[#7b53eb] h-[100px] left-[356px] overflow-clip rounded-[20px] top-[315px] w-[400px]" data-name="visual des">
      <div className="absolute font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal leading-[normal] left-[calc(50%-168px)] not-italic text-[16px] text-white top-[calc(50%-29px)] w-[336px]">
        <p className="mb-0">{`“Color palette: pastel beige, sage green.” `}</p>
        <p>“Visual direction: cozy minimalism with soft natural lighting.”</p>
      </div>
    </div>
  );
}

function Visual() {
  return (
    <div className="absolute bg-[#7b53eb] h-[100px] left-[129px] overflow-clip rounded-[20px] top-[315px] w-[198px]" data-name="visual">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[calc(50%-55px)] not-italic text-[20px] text-nowrap text-white top-[calc(50%-12px)] whitespace-pre">Visual Style</p>
    </div>
  );
}

function ToneDes() {
  return (
    <div className="absolute bg-[#7b53eb] h-[100px] left-[356px] overflow-clip rounded-[20px] top-[179px] w-[400px]" data-name="tone des">
      <div className="absolute font-['Inter:Regular',_'Noto_Sans:Regular',_sans-serif] font-normal h-[68px] leading-[normal] left-[calc(50%-179px)] not-italic text-[16px] text-white top-[calc(50%-29px)] w-[358px]">
        <p className="mb-0">{`“Tone: calm, authentic, elegant.” `}</p>
        <p>“Creates trust and emotional comfort for lifestyle audiences.”</p>
      </div>
    </div>
  );
}

function Tone() {
  return (
    <div className="absolute bg-[#7b53eb] h-[100px] left-[129px] overflow-clip rounded-[20px] top-[184px] w-[198px]" data-name="Tone">
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[calc(50%-64px)] not-italic text-[20px] text-nowrap text-white top-[calc(50%-12px)] whitespace-pre">Tone of Voice</p>
    </div>
  );
}

function Title() {
  return (
    <div className="absolute bg-white h-[69px] left-[calc(50%+0.5px)] overflow-clip rounded-[20px] top-[46px] translate-x-[-50%] w-[607px]" data-name="title">
      <div className="absolute font-['Inter:Bold',_'Noto_Sans:Bold',_sans-serif] font-bold h-[29px] leading-[normal] left-[calc(50%-303.5px)] not-italic text-[24px] text-black top-[calc(50%-14.5px)] w-[611px]">
        <p className="mb-0">{`Analyzing your brand tone and marketing context... `}</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[58px] left-[45px] top-[205px] w-[48px]">
      <div className="h-[58px] overflow-clip relative rounded-[inherit] w-[48px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[23.5px] not-italic text-[20px] text-black text-center text-nowrap top-[17px] translate-x-[-50%] whitespace-pre">√</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[58px] left-[45px] top-[336px] w-[48px]">
      <div className="h-[58px] overflow-clip relative rounded-[inherit] w-[48px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[23.5px] not-italic text-[20px] text-black text-center text-nowrap top-[17px] translate-x-[-50%] whitespace-pre">√</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[58px] left-[45px] top-[474px] w-[48px]">
      <div className="h-[58px] overflow-clip relative rounded-[inherit] w-[48px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[23.5px] not-italic text-[20px] text-black text-center text-nowrap top-[17px] translate-x-[-50%] whitespace-pre">√</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[58px] left-[45px] top-[604px] w-[48px]">
      <div className="h-[58px] overflow-clip relative rounded-[inherit] w-[48px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[23.5px] not-italic text-[20px] text-black text-center text-nowrap top-[17px] translate-x-[-50%] whitespace-pre">√</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[58px] left-[45px] top-[744px] w-[48px]">
      <div className="h-[58px] overflow-clip relative rounded-[inherit] w-[48px]">
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[23.5px] not-italic text-[20px] text-black text-center text-nowrap top-[17px] translate-x-[-50%] whitespace-pre">√</p>
      </div>
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function FrameGrey() {
  return (
    <div className="absolute bg-white h-[903px] left-[16px] rounded-[20px] top-[24px] w-[808px]" data-name="frame grey">
      <ConDes />
      <Con />
      <AuDes />
      <Au />
      <LanDes />
      <Language />
      <VisualDes />
      <Visual />
      <ToneDes />
      <Tone />
      <Title />
      <Frame8 />
      <Frame9 />
      <Frame10 />
      <Frame11 />
      <Frame12 />
    </div>
  );
}

function PreviewSection() {
  return (
    <div className="absolute bg-slate-50 h-[1073px] left-[864px] overflow-clip rounded-[24px] shadow-[0px_0px_20px_0px_rgba(0,0,0,0.03)] top-1/2 translate-y-[-50%] w-[842px]" data-name="Preview Section">
      <Process />
      <Canva />
      <FrameGrey />
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
      <p className="font-['Roboto:Regular',_sans-serif] font-normal leading-[24px] relative shrink-0 text-[#1d1b20] text-[16px] text-nowrap tracking-[0.5px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
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

export default function BrandAnalysis() {
  return (
    <div className="relative size-full" data-name="Brand Analysis">
      <CostumerAnalysisPage />
      <ChromeBrowserBar />
    </div>
  );
}