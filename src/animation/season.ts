import { gsap } from "gsap";

export const setAnimation = () => {
  gsap.registerPlugin();
  gsap.to("#main", {
    // アニメーション内容
    backgroundImage: "linear-gradient(to top, #fad0c4 0%, #ffd1ff 100%)",
    duration: 1,
    scrollTrigger: {
      trigger: "#spring",
      start: "top 40%", //開始時のトリガー条件
      end: "bottom 40%", //終了時のトリガー条件
      toggleActions: "restart none restart none", //デフォルトの指定
      onEnter: (_el) => {
        console.log("enter spring");
      }, //スクロールイン時
      onEnterBack: () => {
        console.log("enter back spring");
      }, //スクロールバック時
      markers: true, // マーカー表示
    },
  });

  gsap.to("#main", {
    // アニメーション内容
    backgroundImage: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
    duration: 1,
    scrollTrigger: {
      trigger: "#summer",
      start: "top 40%", //開始時のトリガー条件
      end: "bottom 40%", //終了時のトリガー条件
      toggleActions: "restart none restart none", //デフォルトの指定
      onEnter: () => {
        console.log("enter summer");
      }, //スクロールイン時
      onEnterBack: () => {
        console.log("enter back summer");
      }, //スクロールバック時
      markers: true, // マーカー表示
    },
  });

  gsap.to("#main", {
    // アニメーション内容
    backgroundImage: "linear-gradient(to right, #f9d423 0%, #ff4e50 100%)",
    duration: 1,
    scrollTrigger: {
      trigger: "#autumn",
      start: "top 40%", //開始時のトリガー条件
      end: "bottom 40%", //終了時のトリガー条件
      toggleActions: "restart none restart none", //デフォルトの指定
      onEnter: () => {
        console.log("enter autumn");
      }, //スクロールイン時
      onEnterBack: () => {
        console.log("enter back autumn");
      }, //スクロールバック時
      markers: true, // マーカー表示
    },
  });

  gsap.to("#main", {
    // アニメーション内容
    backgroundImage: "linear-gradient(to right, #92fe9d 0%, #00c9ff 100%)",
    duration: 1,
    scrollTrigger: {
      trigger: "#winter",
      start: "top 40%", //開始時のトリガー条件
      end: "bottom 40%", //終了時のトリガー条件
      toggleActions: "restart none restart none", //デフォルトの指定
      onEnter: () => {
        console.log("enter autumn");
      }, //スクロールイン時
      onEnterBack: () => {
        console.log("enter back autumn");
      }, //スクロールバック時
      markers: true, // マーカー表示
    },
  });
};
