document.querySelectorAll(".js-scroll-fade").forEach((el) => {
  gsap.fromTo(
    el,
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      duration: 1,
      // スクロールトリガーの登録
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        ease: "expo",
      },
    }
  );
});
