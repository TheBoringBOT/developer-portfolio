import TawkTo from "tawkto-react";

const liveChat = () => {
  console.log("clicked");
  let tawkLoaded = false;
  let tawk;
  if (!tawkLoaded) {
    tawk = new TawkTo(process.env.tawkPropertyId, process.env.tawkKeyId);

    tawk.onLoad(() => {
      tawkLoaded = true;
      tawk.maximize();
    });
  } else {
    tawk.toggle();
  }

  //when tawk is loaded maximize the widget
  tawk.onLoad(() => {
    tawkLoaded = true;
    tawk.maximize();
  });
  // if ta
  if (!tawkLoaded) {
    tawk.showWidget();
  }
};

export default liveChat;
