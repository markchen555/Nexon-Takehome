import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import MapleStoryImgEng from '../assets/logo-maplestoryM.png';
import MapleStoryImgTw from '../assets/logo-maplestoryM-tw.png';
import MapleStoryImgKr from '../assets/logo-maplestoryM-kr.png';

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        "Home": "Home",
        "About": "About",
        "Language": "Language",
        "FOLLOWUS": "FOLLOW US",
        "MapleStory-Img": MapleStoryImgEng,
        "MapleStoryM1": "The rebirth of MapleStory Online! Experience the real MMORPG through your mobile device!",
        "MapleStoryM2": "The MapleStory Universe in your mobile device! New character classes and contents!",
        "MapleStoryM3": "Decorate your unique character through Character Customization!",
        "AboutTitle": "OUR MISSION IS SIMPLY TO MAKE GREAT ONLINE GAMES!",
        "AboutContent": "Nexon is a world leader in online games with over 4,600 employees in over 20 studio and publishing locations around the planet. We thrive on global creativity and our diverse portfolio of live games around the world includes titles such as MapleStory, Dungeon Fighter Online, FIFA Online 3, Vindictus and Mabinogi."
      }
    },
    tw: {
      translations: {
        "Home": "首頁",
        "About": "關於",
        "Language": "語言",
        "FOLLOWUS": "關注我們",
        "MapleStory-Img": MapleStoryImgTw,
        "MapleStoryM1": "從今天開始楓之谷M和你形影不離！",
        "MapleStoryM2": "遼闊廣大又生動的楓之谷世界， 將在各位玩家的手機上嶄新誕生！",
        "MapleStoryM3": "各種新角色職業與探險故事都準備好了， 再次精心打扮自己的角色，前進楓之谷冒險吧！",
        "AboutTitle": "我們的使命很簡單，可以製作出色的在線遊戲!",
        "AboutContent": "Nexon是全球領先的在線遊戲公司，在全球20多個工作室和出版地點擁有超過4,600名員工。我們在全球創造力上茁壯成長，我們在世界各地的各種現場遊戲組合包括MapleStory，Dungeon Fighter Online，FIFA Online 3，Vindictus和Mabinogi等遊戲."
      }
    },
    kr: {
      translations: {
        "Home": " 홈페이지",
        "About": "회사 소개",
        "Language": "언어",
        "MapleStory-Img": MapleStoryImgKr,
        "FOLLOWUS": "연락하기",
        "MapleStoryM1": "메이플 스토리 온라인의 부활! 모바일 장치를 통해 실제 MMORPG를 경험하십시오!",
        "MapleStoryM2": "모바일 장치의 MapleStory Universe! 새로운 캐릭터 수업 및 내용!",
        "MapleStoryM3": "캐릭터 사용자 정의를 통해 고유 한 캐릭터 꾸미기！",
        "AboutTitle": "우리의 사명은 위대한 온라인 게임을 만들기위한 것입니다!",
        "AboutContent": "넥슨은 지구상의 20 개가 넘는 스튜디오 및 퍼블리싱 장소에서 4,600 명이 넘는 직원이 참여하는 온라인 게임 분야의 세계적인 선두 업체입니다. 세계적인 창의력으로 번성하며 전 세계의 다양한 라이브 게임 포트폴리오에는 메이플 스토리 (MapleStory), 던전 파이터 온라인 (Dungeon Fighter Online), FIFA 온라인 3, 빈디 커스 (Vindictus) 및 마비노기 (Mabinogi)."
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;