import * as React from "react";
const MeSVG = (props) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    viewBox='0 0 350 350'
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{isolation:isolate;}.cls-2,.cls-43,.cls-72,.cls-80{fill:#fff;}.cls-3,.cls-38{fill:#e7ecff;}.cls-14,.cls-4{fill:#262626;}.cls-11,.cls-12,.cls-16,.cls-18,.cls-19,.cls-20,.cls-22,.cls-23,.cls-26,.cls-27,.cls-28,.cls-29,.cls-30,.cls-31,.cls-34,.cls-35,.cls-36,.cls-39,.cls-4,.cls-40,.cls-44,.cls-45,.cls-46,.cls-47,.cls-52,.cls-53,.cls-54,.cls-55,.cls-56,.cls-57,.cls-58,.cls-59,.cls-60,.cls-61,.cls-62,.cls-63,.cls-64,.cls-68,.cls-69,.cls-74,.cls-75,.cls-76,.cls-77,.cls-78,.cls-79,.cls-8,.cls-81,.cls-82,.cls-83,.cls-84,.cls-85,.cls-86{mix-blend-mode:multiply;}.cls-5{fill:#8e8e8e;}.cls-6{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_148);}.cls-7{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_26);}.cls-8{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200);}.cls-9{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_26-2);}.cls-10{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_26-3);}.cls-11{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-2);}.cls-12{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-3);}.cls-13{fill:url(#linear-gradient);}.cls-15{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_198);}.cls-16{fill:#feb1c8;}.cls-17{fill:#3b2213;}.cls-18{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-4);}.cls-19{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183);}.cls-20{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-2);}.cls-21{fill:#ffe4ec;}.cls-22{fill:#d1a1c8;}.cls-23{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-3);}.cls-24{fill:#7f6186;}.cls-25{fill:#6c2a51;}.cls-26{fill:#bf7988;}.cls-27{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-5);}.cls-28{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-6);}.cls-29{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_44);}.cls-30{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_44-2);}.cls-31{fill:#e392ad;}.cls-32{fill:url(#linear-gradient-2);}.cls-33{fill:url(#linear-gradient-3);}.cls-34{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_53);}.cls-35{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207);}.cls-36{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-2);}.cls-37{fill:#492312;}.cls-38,.cls-42,.cls-43,.cls-72,.cls-80{mix-blend-mode:soft-light;}.cls-39{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_58);}.cls-40{fill:#ffb8cb;}.cls-41{fill:#3f3e3d;}.cls-42{fill:#5cf1ff;}.cls-44{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-7);}.cls-45{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_82);}.cls-46{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_82-2);}.cls-47{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_98);}.cls-48{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_89);}.cls-49{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_88);}.cls-50{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_85);}.cls-51{fill:#ffe4db;}.cls-52{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-4);}.cls-53{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-5);}.cls-54,.cls-72,.cls-77,.cls-78,.cls-79{opacity:0.5;}.cls-54{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_100);}.cls-55,.cls-56,.cls-57,.cls-58,.cls-59,.cls-60,.cls-61,.cls-62,.cls-63{opacity:0.8;}.cls-55{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-3);}.cls-56{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_101);}.cls-57{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-4);}.cls-58{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_101-2);}.cls-59{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_114);}.cls-60{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-5);}.cls-61{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-6);}.cls-62{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-7);}.cls-63{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-8);}.cls-64{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-9);}.cls-65{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_26-4);}.cls-66{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_198-2);}.cls-67{fill:#7f7973;}.cls-68{fill:#595356;}.cls-69{fill:#bfa1bc;}.cls-70{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_198-3);}.cls-71{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_113);}.cls-73{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_133);}.cls-74{fill:#ebc2d4;}.cls-75{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-6);}.cls-76{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-7);}.cls-77{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_114-2);}.cls-78{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_114-3);}.cls-79{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-8);}.cls-80{opacity:0.2;}.cls-81{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_115);}.cls-82{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_115-2);}.cls-83{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_116);}.cls-84{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_116-2);}.cls-85{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_98-2);}.cls-86{fill:url(#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_98-3);}"
        }
      </style>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_148'
        x1={192.81}
        y1={177.66}
        x2={192.81}
        y2={89.93}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0} stopColor='#ffb595' />
        <stop offset={0.98} stopColor='#ffc2a9' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_26'
        x1={198.34}
        y1={229.74}
        x2={198.34}
        y2={170.26}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.02} stopColor='#ffa67f' />
        <stop offset={1} stopColor='#ff8b7c' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200'
        x1={194.13}
        y1={122.18}
        x2={194.13}
        y2={92.58}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.02} stopColor='#fff' />
        <stop offset={0.99} stopColor='#f29dc8' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_26-2'
        x1={227.91}
        y1={151.44}
        x2={227.91}
        y2={127.24}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_26'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_26-3'
        x1={162.73}
        y1={155.39}
        x2={162.73}
        y2={133.43}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_26'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-2'
        x1={227.86}
        y1={146.47}
        x2={227.86}
        y2={131.87}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-3'
        x1={162.84}
        y1={150.73}
        x2={162.84}
        y2={137.89}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200'
      />
      <linearGradient
        id='linear-gradient'
        x1={154.21}
        y1={104.54}
        x2={229.42}
        y2={104.54}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.6} stopColor='#3b2213' />
        <stop offset={0.61} stopColor='#3b2213' />
        <stop offset={1} stopColor='#331c11' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_198'
        x1={106.92}
        y1={237.1}
        x2={106.92}
        y2={132.6}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.02} stopColor='#ffc2a0' />
        <stop offset={1} stopColor='#ffa195' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-4'
        x1={191.59}
        y1={139.6}
        x2={191.59}
        y2={112.16}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183'
        x1={169.11}
        y1={127.57}
        x2={182.47}
        y2={127.57}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.02} stopColor='#fff' />
        <stop offset={0.99} stopColor='#ea9dc8' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-2'
        x1={200.25}
        y1={123.69}
        x2={213.44}
        y2={123.69}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-3'
        x1={197.2}
        y1={139.97}
        x2={202.24}
        y2={139.97}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-5'
        x1={205.22}
        y1={148.82}
        x2={211.02}
        y2={148.82}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-6'
        x1={196.22}
        y1={163.13}
        x2={196.22}
        y2={158.28}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_44'
        x1={207.1}
        y1={129.29}
        x2={207.1}
        y2={124.2}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.02} stopColor='#e0b3d1' />
        <stop offset={0.99} stopColor='#c2798b' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_44-2'
        x1={176.41}
        y1={133.8}
        x2={176.41}
        y2={128.7}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_44'
      />
      <linearGradient
        id='linear-gradient-2'
        x1={196.69}
        y1={110.73}
        x2={216.71}
        y2={110.73}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.62} stopColor='#492919' />
        <stop offset={0.65} stopColor='#442717' />
        <stop offset={0.76} stopColor='#3d2314' />
        <stop offset={1} stopColor='#3b2213' />
      </linearGradient>
      <linearGradient
        id='linear-gradient-3'
        x1={166.01}
        y1={114.11}
        x2={182.2}
        y2={114.11}
        xlinkHref='#linear-gradient-2'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_53'
        x1={214.9}
        y1={110.31}
        x2={228.49}
        y2={110.31}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.02} stopColor='#fff' />
        <stop offset={0.99} stopColor='#c2798b' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207'
        x1={158.27}
        y1={113.03}
        x2={171.16}
        y2={113.03}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.01} stopColor='#c2798b' />
        <stop offset={0.98} stopColor='#fff' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-2'
        x1={157.47}
        y1={103.03}
        x2={172.35}
        y2={103.03}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_58'
        x1={184.77}
        y1={143.97}
        x2={190.35}
        y2={143.97}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.02} stopColor='#fff' />
        <stop offset={0.99} stopColor='#d172a6' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-7'
        x1={189.17}
        y1={213.61}
        x2={189.17}
        y2={173.57}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_82'
        x1={186.57}
        y1={261.13}
        x2={186.57}
        y2={206.31}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.02} stopColor='#fff' />
        <stop offset={0.99} stopColor='#ea8cc1' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_82-2'
        x1={211.32}
        y1={249.48}
        x2={211.32}
        y2={209.63}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_82'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_98'
        x1={98.07}
        y1={198.59}
        x2={98.07}
        y2={147.85}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.01} stopColor='#ea9dc8' />
        <stop offset={0.98} stopColor='#ffdbd6' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_89'
        x1={105.15}
        y1={156.85}
        x2={105.15}
        y2={142.85}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0} stopColor='#ffb595' />
        <stop offset={0.98} stopColor='#ffc290' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_88'
        x1={95.3}
        y1={165.58}
        x2={95.3}
        y2={152.5}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_89'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_85'
        x1={89.23}
        y1={171.44}
        x2={89.23}
        y2={164.53}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_89'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-4'
        x1={109.54}
        y1={216.42}
        x2={109.54}
        y2={200}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-5'
        x1={104.69}
        y1={198.86}
        x2={104.69}
        y2={182.83}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_100'
        x1={115.72}
        y1={190.02}
        x2={115.72}
        y2={173.57}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.01} stopColor='#ea9dc8' />
        <stop offset={0.98} stopColor='#fff' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-3'
        x1={135.4}
        y1={247.95}
        x2={147.53}
        y2={247.95}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_101'
        x1={123.94}
        y1={295.17}
        x2={123.94}
        y2={261.13}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_53'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-4'
        x1={82.06}
        y1={274.81}
        x2={108.52}
        y2={274.81}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_101-2'
        x1={117.1}
        y1={310.9}
        x2={117.1}
        y2={247.24}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_53'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_114'
        x1={257.17}
        y1={237.16}
        x2={271.54}
        y2={237.16}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_53'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-5'
        x1={260.74}
        y1={274.05}
        x2={266.29}
        y2={274.05}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-6'
        x1={241.6}
        y1={295.1}
        x2={257.17}
        y2={295.1}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-7'
        x1={263.76}
        y1={294.72}
        x2={303.37}
        y2={294.72}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-8'
        x1={270.9}
        y1={295.48}
        x2={302.86}
        y2={295.48}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207-9'
        x1={259.34}
        y1={295.48}
        x2={259.34}
        y2={243.45}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_207'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_26-4'
        x1={281.34}
        y1={312.42}
        x2={281.34}
        y2={299.15}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_26'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_198-2'
        x1={262.15}
        y1={324.55}
        x2={262.15}
        y2={312.39}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_198'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_198-3'
        x1={286.06}
        y1={322.34}
        x2={286.06}
        y2={295.49}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_198'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_113'
        x1={194.82}
        y1={325.32}
        x2={194.82}
        y2={243.91}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0} stopColor='#c9b6e9' />
        <stop offset={1} stopColor='#bbabd1' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_133'
        x1={194.82}
        y1={250.33}
        x2={194.82}
        y2={241.67}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0} stopColor='#d8caef' />
        <stop offset={1} stopColor='#eadef4' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-6'
        x1={293.38}
        y1={310.86}
        x2={293.38}
        y2={303.26}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183-7'
        x1={299.99}
        y1={317.09}
        x2={299.99}
        y2={311.66}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_183'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_114-2'
        x1={237}
        y1={220.62}
        x2={237}
        y2={196.65}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_53'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_114-3'
        x1={164.44}
        y1={223.36}
        x2={164.44}
        y2={192.34}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_53'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200-8'
        x1={99.59}
        y1={199.19}
        x2={99.59}
        y2={177.5}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_115'
        x1={199.82}
        y1={110.53}
        x2={211.07}
        y2={110.53}
        gradientUnits='userSpaceOnUse'
      >
        <stop offset={0.01} stopColor='#f29dc8' />
        <stop offset={0.98} stopColor='#fff' />
      </linearGradient>
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_115-2'
        x1={201.9}
        y1={111.55}
        x2={214.38}
        y2={111.55}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_115'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_116'
        x1={174.16}
        y1={112.97}
        x2={181.72}
        y2={112.97}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_116-2'
        x1={169.94}
        y1={113.94}
        x2={180.53}
        y2={113.94}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_200'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_98-2'
        x1={103}
        y1={156.55}
        x2={103}
        y2={152.5}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_98'
      />
      <linearGradient
        id='\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_98-3'
        x1={91.68}
        y1={165.3}
        x2={91.68}
        y2={164.44}
        xlinkHref='#\xC1\xE5\xE7\xFB\xEC\xFF\xED\xED\xFB\xE9_\xE3\xF0\xE0\xE4\xE8\xE5\xED\xF2_98'
      />
    </defs>
    <g className='cls-1'>
      <g id='background'>
        <rect className='cls-2' width={350} height={350} />
      </g>
      <g id='illustration'>
        <path
          className='cls-3'
          d='M187,64.55C109.65,83.38,97,142.24,85.27,195.67s-55.73,103.38,33,124.64S338.78,312.66,360.76,228s-62.28-76.24-122.28-102.8S221.23,56.21,187,64.55Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-3'
          d='M217.86,93.81C208.11,99,202.67,69.89,214,58.48s31.21-17.23,39.15-7.28S242.85,77,232.63,82.7,221.5,91.87,217.86,93.81Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-3'
          d='M100.63,119.52c.28-20.3-45.58-2-59.2,35.57S40.24,220,58.76,221.26s21.09-19.83,26.73-49.12S100.47,130.93,100.63,119.52Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-3'
          d='M327.35,341.15c7.33-13.73,19-18.2,27.12-16.29s.19,27.89-11.23,28.91S322.88,349.51,327.35,341.15Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-4'
          d='M95,246.86l2.4,28.42s-7.39,6.06-13.07,6.06C84.34,281.34,82.57,269.6,95,246.86Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-5'
          d='M318.69,325.32a104.5,104.5,0,0,1-27.59-1.5,100.58,100.58,0,0,1-24.3-8.56l-1.91-11.95s13.92-15.86,30.33-8.59S318.69,325.32,318.69,325.32Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-6'
          d='M187.6,90.35c-17.33,2.75-25.77,17-26.15,24.65S167,151.93,169,159.8s16.8,16.07,22,17.33a22.22,22.22,0,0,0,14.65-1.9c4.3-2,14.53-10.77,16.68-18.52s2.77-43.75,0-52.71S201.81,88.1,187.6,90.35Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-7'
          d='M181.79,172.85l.88,33.46s3.82,22.65,15.67,23.4c14.84.95,16.54-25.31,16.54-25.31l-2.33-34.14s-8.61,7.39-16.46,7.39S181.79,172.85,181.79,172.85Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-8'
          d='M163.83,115s3.46-15.09,23.73-16.26,28.18,5.57,30.86,10.38,6.05,13.06,6.05,13.06l-.93-23-12.78-6s-26.78-2.45-36.5,2.32S163.57,106.91,163.83,115Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-9'
          d='M224.19,130a9.47,9.47,0,0,1,6.8-2.77s2.84,2.33,1,8.3c-1.59,5.26-5.59,12.13-6.35,13.83a3.78,3.78,0,0,1-2.48,2.07S224.24,137.17,224.19,130Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-10'
          d='M163.84,134.52a5.29,5.29,0,0,0-6.37,0,50.47,50.47,0,0,0,3.18,10.69c2.51,6.06,3.83,10.22,7.34,10.18Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-11'
          d='M224.19,136.68s4.13-4.35,6.28-4.78.6,5.71-.71,8.91-1.47,3.5-1.47,3.5,2.65-7.77,1.85-9.52-2.17-1-2.23-.29,1.42,4.5-.62,8.24-2.27,4.69-2.84,2.75,1.19-5.12,1.23-7S224.19,136.68,224.19,136.68Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-12'
          d='M164.92,140s-3.46-2.64-4.79-1.94.31,7.16,3.28,12.41c0,0-3.07-7.2-2-8.91s3.52,1.26,2.39,1.39c-3.44.4-1.63,5.31,1.1,7.26s-.44-1.51-.94-4.61,1.32-3,1.32-3Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-13'
          d='M176.15,92.18s6.46-16.45,21-19.14c0,0-5.38,1.73-11.34,7.56-2.05,2-6.6,9.32-6.6,9.32s15.25-16.24,25.39-15.39,10.42,15.63,15.06,18.1a12.82,12.82,0,0,1,5.91,7.58s4,4.92,3.79,10.1-5.22,23.12-5.22,23.12,1.3-16.68-3.24-23.37c0,0-1.52-9.19-8.06-12.89a109.34,109.34,0,0,1-22.45-.64c-13.64-1.61-18.09,1.59-18.09,1.59s-8.44,6.73-8.34,15.07c0,0-3.18,6.2.13,22.84,0,0-7.62-17-7.49-24s7.26-13.77,7.26-13.77-5.9,3.18-9.28,7.39c0,0-4.69-8.68,17.34-10.8A6.76,6.76,0,0,0,176.15,92.18Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-5'
          d='M182.36,194.44s-11,12.44-19.63,17.93a117.82,117.82,0,0,1-15.11,8.25s-2,68.49,7.14,104.3H245s7.58-85.48,2.84-107.63c0,0-23.8-10.34-33.69-23.45l.44,11.9s-3.92,18.87-16.26,19.8c-11.4.86-15.74-22.06-15.74-22.06Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-14'
          d='M182.25,190.31l-4.31-1a83.1,83.1,0,0,1-16.51,19.33c-7.62,6.32-14.19,4.83-26,11.94,0,0,13,34.71,12,65.52,0,0,2.07,20,5.3,38.78l96.67-.57s6.27-24,6.65-47c0,0,5.05-43.62,15.48-60.09-13.84-6.62-24.07-6.24-35.82-11.74s-19.7-19.2-19.7-19.2l-2.37,1.11.51,6.38s8,9.07,11.33,17.65c4,10.48-7.58,113.43-7.58,113.43l-36.75-.57s-9.67-102.31-8.34-112,9.54-17.93,9.54-17.93Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-14'
          d='M135.4,225.44V232a1.22,1.22,0,0,1-.18.65L118.7,259.9a1.25,1.25,0,0,1-2.25-.25c-1.25-3.82-3.46-10.72-3.6-12.41s-.07-4.67,0-5.92a1.24,1.24,0,0,0-.47-1h0a1.25,1.25,0,0,0-2,1.11l.14,1.23v.09c.06,1.15.81,24.52-24.06,36.17a1.25,1.25,0,0,1-1.77-1.32c.81-5.23,3.43-18.68,10.13-30.33a1.21,1.21,0,0,0,.14-.85L94.63,245s-9.48,13.67-12.46,36.8a1.28,1.28,0,0,0,.72,1.3l7.2,3.36a1.24,1.24,0,0,1,.66.74c1.11,3.5,7.88,24,18,36.74a1.16,1.16,0,0,0,.28.26l2.1,1.45.19.11a12.13,12.13,0,0,0,11.42-.4h0S141.4,309,149.85,283.68a1.22,1.22,0,0,0,.06-.26c.26-2.15,3.15-29.4-12.15-58.55A1.25,1.25,0,0,0,135.4,225.44Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-15'
          d='M132.53,162.86s-9.47,14.4-11.24,19.71-.38,15.16-1.9,17.43c0,0-9.72,8.46-10.86,11.12s0,16.42,0,16.42c-3.85,7.29-13,9.56-13,9.56s-.85-23.58-1.14-24.15-5.7-4-5.7-4a74.25,74.25,0,0,1-3.34-10.07c-1-4-1.79-7.9-2.29-11.09h0c-.73-4.56-1-7.69-1-7.69l-.76-9.38c1.32-6.06,4.86-5.11,4.86-5.11a60,60,0,0,0,2,10.74l.57-.38a93.22,93.22,0,0,1-1.39-11.69c1.77-5.11,6.13-3.72,6.13-3.72C94.57,166.72,96,173,96,173c-1.2-8-.38-20.53-.38-20.53,1.64,3.73,6.38,4.3,6.38,4.3-.95,4.35,0,13.53,0,13.53l1-.59c.35-4.43,1-9.18,1.8-13.72a167.52,167.52,0,0,1,5-21.7c1.27-3.29,4.55-.67,4.55-.67,1.34,6.26,2,10.93,1.3,14.26h0c-1.08,5.11-4.24,7.12-4.24,7.12s-2.27,11.93-2.08,13.92,1.23,15.16,1.23,15.16c5.21-2.84,6.63-6.82,6.63-6.82.1-8.53,3.79-13.17,8.53-15.16S132.53,162.86,132.53,162.86Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-16'
          d='M168.73,133.79l-.36,1.23s7.55,1.93,14.1-2.4Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-5'
          d='M95.29,231.05s-3.82,4.12-4.32,7.41c0,0,2.46,6.13,4,8.4l1,26.06s15-10.71,14.43-30.23c0,0-1-13.17,0-16.86l-2.16-.93.18,2.63s-6.37,8.06-13,9.57Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-14'
          d='M271.54,217.29v10.43s33.69,52.87,44.35,85.71l2.8,11.89S299,296.5,283.66,298s-16.86,10.61-16.86,10.61l1.14,4.73-1.14,1.9-3.22-14.4h-2.84v-2.27l-5.24-10.45S253.16,240.14,271.54,217.29Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-17'
          d='M196.6,112.34s.71-5.21,2.84-6.44Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-16'
          d='M201.2,130.32a25.06,25.06,0,0,0,14.58-1.7l-1-1.18S211.81,130.44,201.2,130.32Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-18'
          d='M166,119.53c-5.18,4.07.49,19.64.49,19.64s12.57,2.69,19.49-5.38v-9.91s2-3.14,9.16-2.91c0,0,2.57,9.57,4.4,13.83,0,0,12.93,3.29,19.75-5.23,0,0,.57-9.46-2.59-14s-20.11-3.21-20.11-3.21-4,3.21-14.4,2.46C182.2,114.8,169.39,116.88,166,119.53Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-19'
          d='M182.47,131.25s-1.71-7.08-7.05-7.36-6.31,7.36-6.31,7.36Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-20'
          d='M200.25,128.62s-.15-8.23,5.35-9.66,7.84,5.12,7.84,5.12Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-21'
          d='M214.41,128.63a9,9,0,0,1-3.34,1.06,48.82,48.82,0,0,1-7.29.74c-1.9,0-3.33-.1-3.48-.47-.57-1.42,1.13-7,6.41-8.06S216.12,127.21,214.41,128.63Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-21'
          d='M182.71,132.34c-.07.29-.73.64-1.74,1a33.27,33.27,0,0,1-8.21,1.48,12.44,12.44,0,0,1-3-.16c-2.68-.58-.74-6.43,4.19-7.69a6,6,0,0,1,1.91-.18,0,0,0,0,0,0,0,7.88,7.88,0,0,1,4.21,1.71.12.12,0,0,1,0,.05C181.87,129.87,182.89,131.61,182.71,132.34Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-16'
          d='M188.26,146.47s-3.79.25-4.92-1.17.85-2.07,4-4.49,6.35-1.67,9.29-.44,5.3,1.41,5.64,2.48-3.7,2.36-4.79,2.31-1.51-.38-2.6.28a7.81,7.81,0,0,1-4.5.81A3.46,3.46,0,0,0,188.26,146.47Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-22'
          d='M194.85,145.44a2.05,2.05,0,0,1,1.94-1.13c1.32.14,2.76.42,2.76.42A7.21,7.21,0,0,1,194.85,145.44Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-22'
          d='M190.09,146.21a2.46,2.46,0,0,0-2-1.26c-1.37-.08-2.13,1.44-2.13,1.44a5.54,5.54,0,0,0,2.27.08A5.92,5.92,0,0,1,190.09,146.21Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-23'
          d='M197.2,137.09s5.21-.54,5,5.76A6.28,6.28,0,0,0,197.2,137.09Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-24'
          d='M212,126.89a4.77,4.77,0,0,1-.9,2.8,48.82,48.82,0,0,1-7.29.74,4.86,4.86,0,1,1,8.19-3.54Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-24'
          d='M181.28,131.62a4.79,4.79,0,0,1-.31,1.7,33.27,33.27,0,0,1-8.21,1.48,4.74,4.74,0,0,1-1.21-3.18,4.88,4.88,0,0,1,4.33-4.85,0,0,0,0,0,0,0l.5,0a4.81,4.81,0,0,1,3.71,1.73.12.12,0,0,1,0,.05A4.77,4.77,0,0,1,181.28,131.62Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-25'
          d='M200.25,128.62s1.58-5.94,6.91-6.48a7.4,7.4,0,0,1,7.22,4s-1.33-4.87-5.88-5.12S201.08,124.7,200.25,128.62Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-25'
          d='M182.29,130.9s-3.36-4.66-8.18-3.55a7.19,7.19,0,0,0-5.55,5.47s.46-5.1,5.12-6.52C178.79,124.74,182.29,130.9,182.29,130.9Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-26'
          d='M181.28,154.92s3.29,1.33,12.26.47a21.16,21.16,0,0,0,14-7.56s-6.64,9.13-12.12,9.76-7.74-.93-10.49-1.68Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-21'
          d='M189.68,156a7.6,7.6,0,0,0,5.83,1.27,10.87,10.87,0,0,0,5.11-3.5A30.51,30.51,0,0,1,189.68,156Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-27'
          d='M205.22,147.2a6.23,6.23,0,0,1,5.78,3.53S211.66,145.68,205.22,147.2Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-28'
          d='M191.82,159.87a14.22,14.22,0,0,0,8.8-1.59s-1.25,4.55-4.19,4.83S191.82,159.87,191.82,159.87Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-29'
          d='M209.65,126.75a2.55,2.55,0,1,1-2.55-2.55A2.55,2.55,0,0,1,209.65,126.75Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-30'
          d='M179,131.25a2.55,2.55,0,1,1-2.55-2.55A2.55,2.55,0,0,1,179,131.25Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-2'
          d='M209.2,126.22s2.28-1.08,3.74.66Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-2'
          d='M178,130.73a4,4,0,0,1,3.74.27Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M168.37,157.06c3.16,7.36,9.09,13.91,17.62,16.54,5.16,1.58,17.68-.13,23.66-3.34a26.46,26.46,0,0,0,13.26-16.52s.7,6.24-10.36,16.52l.39,14.59s-11.9,8.2-17.3,10.35-13.55-11-13.55-11l-.3-11.36S171.24,167.67,168.37,157.06Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-32'
          d='M196.69,112.33s2-6.29,7.46-6.43l-6.32,5.49s5.62-4.43,10.93-3.48a14.07,14.07,0,0,1,8,7.64A47.59,47.59,0,0,0,196.69,112.33Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-33'
          d='M182.2,114.8s-.48-4.52-3.57-6.11l2.79,4.92s-2.49-2.75-4.15-3.17-8.05,2-11.26,9.09A79.53,79.53,0,0,1,182.2,114.8Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M180.53,96.16c4.54-.75,14-16.42,23.49-17.68s12.13,14.69,10.36,17-12.13,2-12.13,2-12.59-.67-16.45-1.28S180.53,96.16,180.53,96.16Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-34'
          d='M214.9,98.6s7.18,2.89,10.85,7.3,2.6,10.84,2.6,10.84L227.14,122S229.19,105.71,214.9,98.6Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-35'
          d='M171.16,99.18s-15.53,7.42-12.5,22.6l1.77,5.1S157.13,110.14,171.16,99.18Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-36'
          d='M172.35,98.12s-9.89,1.76-14.88,9.82A17,17,0,0,1,172.35,98.12Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-17'
          d='M181.72,95.7s7.54-8.22,18.9-6.87,13.76,9.77,13.76,9.77-1.24-12.35-12.14-14.31S181.72,95.7,181.72,95.7Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-37'
          d='M219.88,93.21s10.13,3.17,10.57,11.93C230.45,105.14,233.27,95.42,219.88,93.21Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-38'
          d='M186.75,138.48c-1,1.56,3.5-.26,6.82,0s3,.68,3.12,0-2.46-3.83-5.4-3.36A6.25,6.25,0,0,0,186.75,138.48Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-39'
          d='M190.35,146.25a7.25,7.25,0,0,1-3.74-4.55l-1.84.94A7.63,7.63,0,0,0,190.35,146.25Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-40'
          d='M184.72,122.44c-1.34-2.3-13.66-3.19-21,4.12-3,3.05,0,15,4.48,18.12s13,1.35,15.85-5.3S186.06,124.73,184.72,122.44Zm-12.28,22.24c-6.61-.33-10.95-11.31-7.84-16.32,3.93-6.35,16.82-8.06,18.33-3.93C189.2,141.61,177.64,144.93,172.44,144.68Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-40'
          d='M197,120.05c1-2.54,14.26-7.24,23.14-1.63,3.7,2.34,2.54,15.55-2.06,19.91-4.19,4-13.24,4.12-17.4-1.79S196,122.59,197,120.05Zm16.72,19.19c6.8-1.74,10-14.62,5.87-18.87-5.22-5.39-19.54-3.13-20.37,1.25C195.8,139.83,208.39,140.6,213.74,139.24Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-41'
          d='M184.72,122c-1.34-2.15-13.66-3-21,3.86-3,2.86,0,14,4.48,17s13,1.27,15.85-5S186.06,124.16,184.72,122Zm-12.28,20.83c-6.61-.3-10.95-10.59-7.84-15.28,3.93-5.95,16.82-7.55,18.33-3.69C189.2,140,177.64,143.09,172.44,142.85Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-41'
          d='M197,119.78c1-2.38,14.26-6.78,23.14-1.53,3.7,2.19,2.54,14.57-2.06,18.66-4.19,3.73-13.24,3.86-17.4-1.68S196,122.16,197,119.78Zm16.72,18c6.8-1.63,10-13.7,5.87-17.68-5.22-5-19.54-2.93-20.37,1.17C195.8,138.32,208.39,139,213.74,137.76Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-41'
          d='M185.47,125.36s6.6-2.65,12-.56l-.36-2.78a15.11,15.11,0,0,0-11.89,1.23Z'
          transform='translate(-25 -25)'
        />
        <polygon
          className='cls-41'
          points='198.53 98.88 200.46 103.7 202.86 102.76 199.64 93.96 198.53 98.88'
        />
        <polygon
          className='cls-41'
          points='137.73 103.62 135.22 104.43 135.98 107.32 137.84 107.82 137.73 103.62'
        />
        <polygon
          className='cls-41'
          points='199.88 98.69 197.35 99.12 196.19 94.31 199.64 93.96 199.88 98.69'
        />
        <path
          className='cls-42'
          d='M199.55,125.88s-.9,7.55,6.14,11.2a17.36,17.36,0,0,0,9.11-.4l-4.09-11.32Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-42'
          d='M164.94,130.48s-.73,7.54,5,11.2a11.72,11.72,0,0,0,7.45-.4L174.08,130Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-16'
          d='M186,129.48A10.85,10.85,0,0,1,197,128l-.64-2.09A10.46,10.46,0,0,0,185.86,127Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-16'
          d='M223.49,147.2s1.75.41,2.21,1.62-2.5,2.62-2.5,2.62Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-16'
          d='M167.12,151.44s-2,2.19-1.7,3,2.57,1,2.57,1Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-17'
          d='M181.72,95.7a28,28,0,0,1,15,0c8.64,2.2,3.92,7.13,3.92,7.13S198,92.83,181.72,95.7Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-43'
          d='M202.25,74.53a3,3,0,0,1,1.39,4,6.67,6.67,0,0,1,5.43,1.11,6.28,6.28,0,0,0-2.65-2.15c-1.48-.47-1.61-3-1.61-3A5.77,5.77,0,0,0,202.25,74.53Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-43'
          d='M202.64,84.37c.92.87-1.62,4.51-1.62,4.51l4.31,1s-1.53-1.48-1.39-2.77,1.72-1.79,1.72-1.79Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M177.94,200s1.95,29.79,20.08,30.94c20.24,1.29,21.32-23.87,18.8-34,3.75,15.23.43,34.33-18.39,34.74C179.12,232.12,177.94,200,177.94,200Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M182.36,194.44s-.57,28.27,16.29,27.73c16.24-.52,15.76-21.69,15.76-21.69l.19,5.26s-4.72,21.74-17.4,19.81S181.8,202.15,182.36,194.44Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-44'
          d='M183,173.57s9.66,37.88,11.84,40S191,177.13,191,177.13Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M213.65,187.46l1.25-1.11s8.7,14.73,11.73,23.41-6.49,115.16-6.49,115.16l-10.56-.33s11.32-62.74,13.34-87.49a80.53,80.53,0,0,0-8.76-43.26Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M189.17,324.71s-15-98.48-14.08-111.19,7.27-19.08,7.27-19.08l-.11-4.13-4.31-1s-5.88,15.82-6.83,24.26,6.83,111.1,6.83,111.1Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-14'
          d='M163.83,206.31s-9.58,10.74-17.16,17.81c0,0,1.9,4.8,12,6.57l-8.38,9.47s8.51,52.3,19.12,84.89l8.53-.34s-7.58-98.88-6.83-111.1,6.83-24.26,6.83-24.26S171.6,197.89,163.83,206.31Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-14'
          d='M216,186.35s10.78,17,22.91,20.58l13.47,16.94s-.09,5.68-14.68,8.6l9.25,11s-6.07,48-19.74,81l-7.09.44s10.33-98,6.83-113.36A72,72,0,0,0,216,186.35Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-45'
          d='M178,206.31s-.54,33.85,17.17,54.82Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-46'
          d='M221.19,209.63s4,24.65-20,39.85C201.2,249.48,217.39,232.4,221.19,209.63Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M91,253.87l2.76,20.81s16.44-8.75,16.75-32c0,0-2.21,15.66-14.08,23.12L95,246.86l-.78-1.29Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M95.51,237.1l-3.79.85a15.9,15.9,0,0,1,3.6-5.87Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-47'
          d='M114.83,147.85c-1.08,5.11-3.4,7.12-3.4,7.12s-2.27,11.93-2.08,13.92c-8.9,1.74-21.28,8.25-23.94,11.78-2.44,3.25-.45,15.9-.12,17.92l-2.24-10.82h0c-.73-4.56-1-7.69-1-7.69l-.76-9.38c1.32-6.06,4.86-5.11,4.86-5.11a60,60,0,0,0,2,10.74l.57-.38a93.22,93.22,0,0,1-1.39-11.69c1.77-5.11,6.13-3.72,6.13-3.72C94.57,166.72,96,173,96,173c-1.2-8-.38-20.53-.38-20.53,1.64,3.73,6.38,4.3,6.38,4.3-.95,4.35,0,13.53,0,13.53l1-.59c.35-4.43,1-9.18,1.8-13.72C111.66,154.55,114.65,148.24,114.83,147.85Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-48'
          d='M95.58,152.44l18.12-9.59s6.15,11.68-11.74,13.88C102,156.73,96.4,158,95.58,152.44Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-49'
          d='M89.37,161l12.49-8.48s2.85,4,.35,7.76c-2.16,3.21-9.19,6.28-14.76,5C87.45,165.3,86.74,163.05,89.37,161Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-50'
          d='M85.81,165.39l11-.86s.43,6-5.26,6.73a18.45,18.45,0,0,1-10-1.19A4.17,4.17,0,0,1,85.81,165.39Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-51'
          d='M107.28,146.25c-2.53,1.34,1.54.95,3.53,0a8.26,8.26,0,0,1,2.89-3.4Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-51'
          d='M101.86,152.5s-3.63,2.36-4.2,4.64c0,0-4.8,2.47-3.54.86s7.74-5.5,7.74-5.5Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-51'
          d='M96.86,164.53s-2.29-.31-4.09,2.39c0,0-4.31.27-3.54-1.11S96.86,164.53,96.86,164.53Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-52'
          d='M119.39,200s-12.76,7.7-15.92,11.49a42.73,42.73,0,0,0-3.79,4.93l8.84-5.31S112.19,207,119.39,200Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-53'
          d='M110.58,184.05S99.43,186,98.8,198.86c0,0-.06-18.32,11.7-15.79Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-54'
          d='M117.21,177.23c.79,2.3,8.66-3.66,8.66-3.66s-6.11,8.3-5.57,16.45c0,0-1.7-5.12-6.1-5.69a15.65,15.65,0,0,0-8.62,1.84,20.57,20.57,0,0,1,5-2.12S115.53,181.17,117.21,177.23Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-16'
          d='M95.39,234.23a24.21,24.21,0,0,0,13.13-6.7s-5.17,7.27-13,9.57Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-55'
          d='M135.4,232.33s9.41,20.4,12,42.95c0,0,1.88-33.92-12-54.66Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-56'
          d='M117.3,262.21s12.13,15.15,12.89,33c0,0,3.79-27.09-12.24-34Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-57'
          d='M82.06,282.67S98.61,280.4,108.52,263c0,0-2.4,20.09-17.93,23.69Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-58'
          d='M112.85,247.24s3.89,24.44,6.54,42.82,1.51,20.84,1.51,20.84,1.31-10.12-.56-28.63A179.69,179.69,0,0,0,112.85,247.24Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M147.44,286.14l-.77-17.6s5.56,43.25,16.17,56.32l3.41-2.21s-5-24.8-9.38-47.37l12.54,49.77-16.67-.13S148.72,298,147.44,286.14Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-59'
          d='M271.54,217.29S258.9,235.18,257.17,257c0,0,4.7-19.46,14.37-29.31Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-60'
          d='M265.66,247.24s1.9,34.29-2.08,53.62h-2.84S268.5,275.09,265.66,247.24Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-61'
          d='M255.5,288.14l1.67-22.33s-6.1,44.43-15.57,58.59l7.81,0S254.72,304.58,255.5,288.14Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-62'
          d='M264.35,304.32s5-10.38,13.56-12.19,25.46,3,25.46,3a16.72,16.72,0,0,0-17.62-9.84c-13.14,1.51-15.16,8-17.75,11.94s-4.24,4.48-4.24,4.48Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-63'
          d='M270.9,297s6.51-5,17.94-3.35,14,4,14,4S285.37,291.2,270.9,297Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-64'
          d='M259.18,295.48s6.91-27.21,2.62-52c0,0-6.62,6.2-6.3,44.69Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M231,324.4s12-40.67,11.89-74.92c0,0-3.88,42.92-15.65,75Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-65'
          d='M274.19,300.86l1.32,9.95s12.76,1.84,12.92,1.58,0-13.24,0-13.24Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-14'
          d='M288.52,296c-17.81-2.78-24,9.09-24,9.09l2.28,10.17c21.18,13.11,51.89,10.06,51.89,10.06S306.34,298.77,288.52,296Zm-20.58,17.36-.76-6.25s1.95-10.54,19.7-9c13.9,1.19,28.14,24.64,28.14,24.64C287.46,327.33,267.94,313.36,267.94,313.36Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-66'
          d='M268.65,312.39s-11.1,5.14-13.25,7a7.57,7.57,0,0,0,0,3.84c.6,1.56,4.86,1.56,7.42.7s6.35-7.86,6.35-7.86Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-67'
          d='M262.48,325.43s3.31-15,14-19.67,24.9,9.18,25.53,19.92Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-68'
          d='M267.17,320.78h7.41a2.14,2.14,0,0,0,2.09-1.7,65.76,65.76,0,0,1,3-10.38,2.13,2.13,0,0,0-2.65-2.83c-3.45,1.26-8.2,4.33-11.79,11.87A2.13,2.13,0,0,0,267.17,320.78Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-69'
          d='M269.08,311.66a22,22,0,0,1,12.26-.38c7,1.69,17.19,12.06,18.06,12.51a10.55,10.55,0,0,0,2.42.69s-2.8-14.88-14.36-18.79S269.08,311.66,269.08,311.66Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-68'
          d='M280,317.88a63.23,63.23,0,0,1,1.77-9.89,2.66,2.66,0,0,1,3.15-1.85,25.68,25.68,0,0,1,5.69,1.93,2.68,2.68,0,0,1,1.44,2.54l-.45,7.87a2.69,2.69,0,0,1-2.74,2.52l-6.27-.15A2.67,2.67,0,0,1,280,317.88Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-70'
          d='M303.88,314.38c.05,2.59-1.44,6-2.06,7.33v0l-.26.53h0c-3.85.57-4.56-2.22-4.56-2.22l.94-2,0,0a3.31,3.31,0,0,1-3.42,0c-1.9-1.09-3.38-4.5-3.38-4.5l.69-2.7a10.37,10.37,0,0,1-.82,1,3,3,0,0,1-.79.65c-.69.31-6.25-1.14-6.82-2.31a10.68,10.68,0,0,1-.17-3.48v0c.11-2.19.38-4.55.38-4.55l-2.11-.38a24.64,24.64,0,0,1-3.08,5.07v0a3.76,3.76,0,0,1-.32.28,51.85,51.85,0,0,1-6.51,3.06c-3.15-1.15-3.44-3.4-3.24-4.87a5.49,5.49,0,0,1,.38-1.43c2.53-3.54,2.74-8.55,6.79-8.45s5.67,2.54,5.67,2.54a7.06,7.06,0,0,0,2.43.43,11.4,11.4,0,0,1,6,.1c2.86,1,4.59,4.7,4.59,4.7s4.61,2.53,5.43,3.73.57,4.67.57,4.67C302.05,312,303.88,314.38,303.88,314.38Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M237.72,232.47l-10.05-6.17A31.85,31.85,0,0,1,237.72,232.47Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M158.67,230.69s7.9-6.95,12.55-8A93.59,93.59,0,0,0,158.67,230.69Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-71'
          d='M143,325.32s-10.15-42.83-13.1-75c0,0,74.25-10.58,129.84-4.57,0,0-2.4,42.72-8.62,79.56Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-72'
          d='M201.2,245.83,143,325.32h47.35l52.53-79.49S218.2,243.9,201.2,245.83Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-73'
          d='M129.9,250.33l2.24-3.34s63-9.21,124-3.4l3.57,2.17S187.81,242.48,129.9,250.33Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-2'
          d='M181.55,291.54s8.34-14,22.17-15.56C203.72,276,202.39,285.21,181.55,291.54Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-2'
          d='M237.72,242.27v3l-21.7-.15v-3.43S232.12,242,237.72,242.27Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-2'
          d='M138.91,246.11v3.06l15.94-1.53.73-3.28S143.27,245.57,138.91,246.11Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-74'
          d='M141.46,318.57s8.76,5.11,53.69,5.93,56.71-3.74,56.71-3.74l-.74,4.56H143Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M278.38,306.88v0a3.76,3.76,0,0,1-.32.28,51.85,51.85,0,0,1-6.51,3.06c-3.15-1.15-3.44-3.4-3.24-4.87,1.53.8,9.11-.92,9.87-.54S278.38,306.88,278.38,306.88Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M291.79,309.43a6.18,6.18,0,0,1-.83,2.47,3,3,0,0,1-.79.65c-.69.31-6.25-1.14-6.82-2.31a10.68,10.68,0,0,1-.17-3.48v0s3-2,5.3-1.05S291.79,308,291.79,309.43Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M298.87,315.55a4.45,4.45,0,0,1-.95,2.51l0,0a3.31,3.31,0,0,1-3.42,0c-1.9-1.09-3.38-4.5-3.38-4.5.32-1.26,2-1.85,4-.95A12.72,12.72,0,0,1,298.87,315.55Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M301.82,321.71v0a.75.75,0,0,1-.26.53h0c-3.85.57-4.56-2.22-4.56-2.22.46-1,2.55-1.09,3.69-.38A2.32,2.32,0,0,1,301.82,321.71Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M255.4,323.27a6.49,6.49,0,0,0,5.86.28c3.45-1.38.89-7.82.89-7.82l6.19-3.11s-4.53,6.95-5.52,11.35C262.82,324,256.74,325.69,255.4,323.27Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-51'
          d='M269.17,304.24a14,14,0,0,1,7.17-.73s-1-2.95-3.59-2.65S269.17,304.24,269.17,304.24Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-51'
          d='M286.6,304.77s4.07-.17,5.45,2c0,0-1.24-3.65-2.94-3.51A3.4,3.4,0,0,0,286.6,304.77Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-51'
          d='M295,311.42s3.08.9,3.89,2.94c0,0,0-3.79-1.42-4.12S295,311.42,295,311.42Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-51'
          d='M299.4,318.47s1.91.41,2.42,1.24c0,0,.79-2.6-.44-2.94S299.4,318.47,299.4,318.47Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-75'
          d='M294.15,303.26a40.23,40.23,0,0,1-2.37,7.6,11.88,11.88,0,0,0,3.2-7.13Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-76'
          d='M300.15,311.66l-1.64,5.43s3.47-1.62,2.9-4.92Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M279.47,305.44l1.67-7.41.7.21-.38,3.57,2.11.38L283.3,305S280.4,304.8,279.47,305.44Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M237.72,232.47s10.32-3.17,14.68-8.6c0,0-1.94,9.27-13.05,10.54Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-31'
          d='M146.67,224.12s-.8,6.55,9.83,9l3.3-3.4A31.24,31.24,0,0,1,146.67,224.12Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-77'
          d='M224.19,196.65s5.85,13.33,10,17.68,15.6,6.29,15.6,6.29l-10.88-13.69S231.06,205,224.19,196.65Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-78'
          d='M175.65,192.34s-4.44,11.32-7.28,20.6-15.14,10.42-15.14,10.42S166.54,202.15,175.65,192.34Z'
          transform='translate(-25 -25)'
        />
        <polygon
          className='cls-16'
          points='63.23 182.85 71.86 187.75 69.38 187.95 63.67 183.93 63.23 182.85'
        />
        <path
          className='cls-79'
          d='M90.21,187.24c1.86-4.8,14-10.65,16.71-9.62s1.93,7.23,1.93,7.23-7.35.74-10,12.11c0,0-3.48,3.63-5.89,1.63S90.21,187.24,90.21,187.24Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-80'
          d='M271.54,227.72a218.64,218.64,0,0,0,10.73,33.41C290,280.28,309.4,296.8,309.4,296.8S287.42,251.21,271.54,227.72Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-80'
          d='M242.88,208.63a37.56,37.56,0,0,0,7.46,8.24c4.17,3.15,16.8,7,16.8,7l4.4-6.58a113,113,0,0,0-16.14-5.65C247.41,209.63,242.88,208.63,242.88,208.63Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-80'
          d='M135.4,220.62a86.74,86.74,0,0,1,4.48,8.52s5.62-5.45,9.16-9.12a27.18,27.18,0,0,0,5-7.07C148.29,214.9,138.56,217.8,135.4,220.62Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-81'
          d='M199.82,112.16A14.92,14.92,0,0,1,211.07,109,36.28,36.28,0,0,0,199.82,112.16Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-82'
          d='M201.9,112.16s7.79-2.52,12.48-.29A25.49,25.49,0,0,0,201.9,112.16Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-83'
          d='M181.72,114.87s-3.91-4.24-7.56-3.77Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-84'
          d='M180.53,115.09s-5.76-4.29-10.59-1.14C169.94,114,174.16,111.94,180.53,115.09Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-85'
          d='M103.23,156.55a6.51,6.51,0,0,0-1.37-4.05,5.1,5.1,0,0,1,2.27,3.9Z'
          transform='translate(-25 -25)'
        />
        <path
          className='cls-86'
          d='M95.9,164.52l-8.45.78S90.22,164.14,95.9,164.52Z'
          transform='translate(-25 -25)'
        />
      </g>
    </g>
  </svg>
);
export default MeSVG;
