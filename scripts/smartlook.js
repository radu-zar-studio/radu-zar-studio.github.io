export const initializeSmartlook = async () => {
  if (window.smartlook) return;

  window.smartlook = (e) => {
    if (e) smartlook.api.push(e);
    return "loading";
  };

  const head = document.getElementsByTagName("head")[0];
  const script = document.createElement("script");
  smartlook.api = [];

  script.async = true;
  script.type = "text/javascript";
  script.src = "https://web-sdk.smartlook.com/recorder.js";

  const scriptLoaded = new Promise((resolve, reject) => {
    script.onload = resolve;
    script.onerror = reject;
  });

  head.appendChild(script);

  const start = async () => {
    const result = await smartlook(
      "init",
      "02094e1224428d380fd28fe19357d2b43dd0000f",
      {
        region: "eu",
      }
    );

    if (result === "loading") setTimeout(async () => await start(), 1000);
    else console.log("Smartlook tracking started. ");
  };

  try {
    await scriptLoaded;
    console.log("Smartlook script loaded successfully. ");

    await start();
  } catch (error) {
    console.error("Failed to load Smartlook script:", error);
  }
};
