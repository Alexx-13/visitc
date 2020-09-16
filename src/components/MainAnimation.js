import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from 'react-i18next';

import "../styles/MainAnimtion.scss";

import rss from "../assets/images/rss-logo.svg";
import html from "../assets/images/html-5-logo.svg";
import css from "../assets/images/css-logo.svg";
import scss from "../assets/images/sass-logo.svg";
import js from "../assets/images/js-logo.svg";

import rssReact from "../assets/images/rss-react-logo.svg";
import react from "../assets/images/react-logo.png"; //
import reactHooks from "../assets/images/react-hooks-logo.svg";
import reactRedux from "../assets/images/redux-logo.svg";
import figma from "../assets/images/figma-logo.svg";

import junior from "../assets/images/junior-logo.svg";
import webpack from "../assets/images/webpack-logo.svg";
import svg from "../assets/images/svg-logo.svg";
import jest from "../assets/images/jest-logo.svg";
import english from "../assets/images/english-flag-logo.svg";

import elang from "../assets/images/elang-logo.svg";

import senior from "../assets/images/senior-logo.svg";
import myAvatart from "../assets/images/my-avatar.svg";
import arrowDown from "../assets/images/arrows/arrow-down.svg";




export default function MainAnimtion(){
  const { t, i18n } = useTranslation();

  const [appearFirstSkills, setAppearFirstSkills] = useState(false);
  const [appearSecondSkills, setAppearSecondSkills] = useState(false);
  const [appearThirdSkills, setAppearThirdSkills] = useState(false);

  const rssLink = "https://rs.school/js/";
  const rssLinkReact = "https://rs.school/react/";
  const elangLink = "https://easylang.app/";

  return(
    <div className="main-animation">
      <div className="main-animation_container">
      
          <div className="main-animation_container_a">
            <TextBlock 
              heading={t('AnimationHeadingA')}
              text={t('AnimationParagraphA')}
              descriptionAppear={appearFirstSkills}
              paragraphA={t('AnimationBlockA1')}
              paragraphB={t('AnimationBlockA2')}
              paragraphC={t('AnimationBlockA3')}
              linkIcon={rss}
              link={rssLink}
              nextDiv={document.querySelector(".main-animation_container_b")}
            />
            <CirclesBlock
              id="first-info-circles-block"
              center={rss}
              satelliteA={html}
              satelliteB={css}
              satelliteC={scss}
              satelliteD={js}
            />
          </div>
   
  
          <div className="main-animation_container_b">
            <TextBlock 
              heading={t('AnimationHeadingB')}
              text={t('AnimationParagraphB')}
              descriptionAppear={appearSecondSkills}
              paragraphA={t('AnimationBlockB1')}
              paragraphB={t('AnimationBlockB2')}
              paragraphC={t('AnimationBlockB3')}
              linkIcon={rssReact}
              link={rssLinkReact}
              nextDiv={document.querySelector(".main-animation_container_c")}
            />
            <CirclesBlock
              id="second-info-circles-block"
              center={rssReact}
              satelliteA={react}
              satelliteB={reactHooks}
              satelliteC={reactRedux}
              satelliteD={figma}
            />
          </div>


          <div className="main-animation_container_c">
            <TextBlock 
              heading={t('AnimationHeadingC')}
              text={t('AnimationParagraphC')}
              descriptionAppear={appearThirdSkills}
              paragraphA={t('AnimationBlockC1')}
              paragraphB={t('AnimationBlockC2')}
              paragraphC={t('AnimationBlockC3')}
              linkIcon={elang}
              link={elangLink}
              nextDiv={document.querySelector(".main-animation_container_d")}
            />
            <CirclesBlock
              id="third-info-circles-block"
              center={junior}
              satelliteA={webpack}
              satelliteB={jest}
              satelliteC={svg}
              satelliteD={english}
            />
          </div>

          <div className="main-animation_container_d">
          <CirclesBlock
              id="fourth-info-circles-block"
              center={senior}
            />
            <img src={myAvatart} id="avatar"></img>
          </div>

      </div>
    </div>
  )
};

const CirclesBlock = (parameters) => {
  return(
    <div className="circles-block" id={parameters.id}>
      <div className="circles-block_central-object">
        <img src={parameters.center}></img>
      </div>
      <div className="circles-block_orbit">
        <div className="circles-block_orbit_group" id="orbit-group-a">
          <div className="circles-block_orbit_group_satellite" id="satellite-a">
            <img src={parameters.satelliteA}></img>
          </div>
          <div className="circles-block_orbit_group_satellite" id="satellite-b">
          <img src={parameters.satelliteB}></img>
          </div>
        </div>
        <div className="circles-block_orbit_group" id="orbit-group-b">
          <div className="circles-block_orbit_group_satellite" id="satellite-c">
          <img src={parameters.satelliteC}></img>
          </div>
          <div className="circles-block_orbit_group_satellite" id="satellite-d">
          <img src={parameters.satelliteD}></img>
          </div>
        </div>
      </div>
    </div>
  )
};

const TextBlock = (parameters) => {
  const { t, i18n } = useTranslation();
  const [appearSkills, setAppearSkills] = useState(parameters.descriptionAppear);
  const [btnText, setBtnText] = useState(true);

  const scrollToADiv = (currentDiv) => {
    currentDiv.scrollIntoView({block: "center", behavior: "smooth"});
  }

  return(
    <div className="text-block">
        <div className="text-block_container">
          <h2>{parameters.heading}
          {parameters.link && parameters.linkIcon ?
            <a href={parameters.link} target="_blank"><img src={parameters.linkIcon} /></a>
          : null}
          </h2>
          <p>{parameters.text}</p>
          <div className="text-block_container_btn">
            <button onClick={() => {
              setAppearSkills(!appearSkills)
              setBtnText(!btnText)
            }}>
              {btnText ? t('AnimationBtnUnactive') : t('AnimationBtnActive')}
            </button>
          </div>
         
          {appearSkills ? 
            <ul>
              <li>{parameters.paragraphA}</li>
              <li>{parameters.paragraphB}</li>
              <li>{parameters.paragraphC}</li>
            </ul>
          : null}
        </div>
        <button className="down-btn" onClick={() => {
          scrollToADiv(parameters.nextDiv)
        }}>
          <img src={arrowDown} />
        </button>
    </div>
  )
};