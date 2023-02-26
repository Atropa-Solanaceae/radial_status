// ==UserScript==
// @name          Radial Status
// @namespace     https://www.artemive.tk/ashore
// @icon          https://s1.qwant.com/thumbr/0x380/9/7/9818042abd0c8c4319604458db0915ebff26c483497d6f79160cd8fb9c002f/Discord_icon-1-e1594299821864.png?u=https%3A%2F%2Fi2.wp.com%2Ftctgaming.com%2Fwp-content%2Fuploads%2F2020%2F07%2FDiscord_icon-1-e1594299821864.png%3Ffit%3D1484%252C1484%26ssl%3D1&q=0&b=1&p=0&a=0
// @description   Changes the status icon to wrap around the avatar
// @author        Solanaceae
// @version       1.0
// @match         https://discord.com/*
// @run-at        document-start
// ==/UserScript==

(function () {
  "use strict";
  var css = `
    :root {
      --rs-version: "2.0.8";
    }
    
    #app-mount .wrapper-1VLyxH {
      border-radius: var(--rs-avatar-shape);
    }
    #app-mount .wrapper-1VLyxH svg:not(:root) {
      overflow: visible;
    }
    #app-mount .wrapper-1VLyxH foreignObject {
      -webkit-mask: none;
      mask: none;
    }
    #app-mount .wrapper-1VLyxH .dots-1BwzZQ circle {
      cy: -8 !important;
    }
    #app-mount .wrapper-1VLyxH .dots-1BwzZQ circle:nth-child(1) {
      cx: -8.5 !important;
    }
    #app-mount .wrapper-1VLyxH .dots-1BwzZQ circle:nth-child(2) {
      cx: -2.25 !important;
    }
    #app-mount .wrapper-1VLyxH .dots-1BwzZQ circle:nth-child(3) {
      cx: 4 !important;
    }
    #app-mount .wrapper-1VLyxH .mask-1FEkla > rect[x="22"] {
      x: 0;
      y: 0;
    }
    #app-mount .wrapper-1VLyxH .pointerEvents-9SZWKj[x="14.5"] {
      fill: rgba(0, 0, 0, 0.5) !important;
      width: 30px;
      height: 30px;
      x: 1;
      y: 1;
    }
    #app-mount .wrapper-1VLyxH img,
    #app-mount .wrapper-1VLyxH.avatar-AvHqJA {
      border-radius: var(--rs-avatar-shape);
    }
    #app-mount .wrapper-1VLyxH svg[width="25"][height="15"] > rect {
      rx: calc(var(--rs-avatar-shape) * 2) !important;
      ry: calc(var(--rs-avatar-shape) * 2) !important;
    }
    #app-mount .wrapper-1VLyxH[style*="80px"] svg.cursorDefault--wfhy5 rect,
    #app-mount .wrapper-1VLyxH[style*="120px"] svg.cursorDefault--wfhy5 rect {
      ry: calc(var(--rs-avatar-shape) * 3.3);
      rx: calc(var(--rs-avatar-shape) * 3.3);
    }
    #app-mount .wrapper-1VLyxH rect {
      x: 0;
      y: 0;
      width: 100%;
      height: 100%;
      -webkit-mask: none;
      mask: none;
      display: block;
      rx: var(--rs-avatar-shape);
      ry: var(--rs-avatar-shape);
      fill: transparent !important;
      stroke-width: var(--rs-small-width);
    }
    #app-mount .wrapper-1VLyxH rect[fill="#43b581"],
    #app-mount .wrapper-1VLyxH rect[fill="#3ba55c"],
    #app-mount .wrapper-1VLyxH rect[fill="rgba(67, 181, 129, 1)"],
    #app-mount .wrapper-1VLyxH rect[mask*="online"],
    #app-mount .wrapper-1VLyxH rect[fill*="hsl(139"] {
      stroke: var(--rs-online-color);
    }
    #app-mount .wrapper-1VLyxH rect[fill="#faa61a"],
    #app-mount .wrapper-1VLyxH rect[fill="rgba(250, 166, 26, 1)"],
    #app-mount .wrapper-1VLyxH rect[mask*="idle"],
    #app-mount .wrapper-1VLyxH rect[fill*="hsl(38"] {
      stroke: var(--rs-idle-color);
    }
    #app-mount .wrapper-1VLyxH rect[fill="#f04747"],
    #app-mount .wrapper-1VLyxH rect[fill="rgba(240, 71, 71, 1)"],
    #app-mount .wrapper-1VLyxH rect[fill="#ed4245"],
    #app-mount .wrapper-1VLyxH rect[mask*="dnd"],
    #app-mount .wrapper-1VLyxH rect[fill*="hsl(359"] {
      stroke: var(--rs-dnd-color);
    }
    #app-mount .wrapper-1VLyxH rect[fill="#593695"],
    #app-mount .wrapper-1VLyxH rect[mask*="streaming"] {
      stroke: var(--rs-streaming-color);
    }
    #app-mount .wrapper-1VLyxH rect[fill="#747f8d"],
    #app-mount .wrapper-1VLyxH rect[mask*="offline"],
    #app-mount .wrapper-1VLyxH rect[fill="NaN"] {
      stroke: var(--rs-offline-color);
    }
    #app-mount .wrapper-1VLyxH rect[fill="#747f8d"],
    #app-mount .wrapper-1VLyxH rect[mask*="invisible"],
    #app-mount .wrapper-1VLyxH rect[fill="rgba(116, 127, 141, 1)"],
    #app-mount .wrapper-1VLyxH rect[fill*="hsl(214"] {
      stroke: var(--rs-invisible-color);
    }
    #app-mount .wrapper-1VLyxH rect[x="16"] {
      width: 24px;
      height: 24px;
    }
    #app-mount .wrapper-1VLyxH rect[x="28"] {
      width: 40px;
      height: 40px;
      overflow: visible;
    }
    #app-mount .wrapper-1VLyxH[style*="32px"] rect {
      width: 32px;
      height: 32px;
      x: -14.5;
      y: -17;
      position: relative;
      z-index: 0;
    }
    #app-mount .wrapper-1VLyxH[style*="40px"] > svg > svg rect {
      width: 40px;
      height: 40px;
      x: -19;
      y: -20;
      ry: calc(var(--rs-avatar-shape) * 3.3);
      rx: calc(var(--rs-avatar-shape) * 3.3);
    }
    #app-mount .wrapper-1VLyxH[style*="40px"] foreignObject[mask*="mobile"] img {
      width: calc(100% - 12px);
    }
    #app-mount .wrapper-1VLyxH[style*="80px"] svg.cursorDefault--wfhy5 rect {
      x: -48;
      y: -52;
    }
    #app-mount .wrapper-1VLyxH[style*="80px"] rect {
      width: 80px;
      height: 80px;
      stroke-width: var(--rs-medium-width);
    }
    #app-mount .wrapper-1VLyxH[style*="80px"] img {
      -webkit-clip-path: inset(
        calc(var(--rs-medium-spacing) + 1px) calc(var(--rs-medium-spacing) + 1px)
          round var(--rs-avatar-shape)
      );
      clip-path: inset(
        calc(var(--rs-medium-spacing) + 1px) calc(var(--rs-medium-spacing) + 1px)
          round var(--rs-avatar-shape)
      );
    }
    #app-mount .wrapper-1VLyxH[style*="120px"] svg.cursorDefault--wfhy5 rect {
      x: -70;
      y: -76;
    }
    #app-mount .wrapper-1VLyxH[style*="120px"] rect {
      width: 120px;
      height: 120px;
      stroke-width: var(--rs-large-width);
    }
    #app-mount .wrapper-1VLyxH[style*="120px"] img {
      -webkit-clip-path: inset(
        calc(var(--rs-large-spacing) + 1px) calc(var(--rs-large-spacing) + 1px)
          round var(--rs-avatar-shape)
      );
      clip-path: inset(
        calc(var(--rs-large-spacing) + 1px) calc(var(--rs-large-spacing) + 1px)
          round var(--rs-avatar-shape)
      );
    }
    #app-mount
      .wrapper-1VLyxH:not([style*="80px;"]):not([style*="120px;"]):not(
        [style*="16px"]
      )
      > svg
      > foreignObject:not(:only-child)
      img {
      -webkit-clip-path: inset(
        calc(var(--rs-small-spacing) + 1px) calc(var(--rs-small-spacing) + 1px)
          round var(--rs-avatar-shape)
      );
      clip-path: inset(
        calc(var(--rs-small-spacing) + 1px) calc(var(--rs-small-spacing) + 1px)
          round var(--rs-avatar-shape)
      );
    }
    #app-mount .wrapper-1VLyxH[style="width: 16px; height: 16px;"] rect {
      display: none;
    }
    #app-mount .wrapper-1VLyxH[style="width: 16px; height: 16px;"] img {
      -webkit-clip-path: none;
      clip-path: none;
    }
    #app-mount .wrapper-1VLyxH foreignObject[mask*="mobile"] {
      width: calc(100% + 4px);
    }
    #app-mount .wrapper-1VLyxH foreignObject[mask*="mobile"][width="32"] img {
      width: calc(100% - 12px);
    }
    #app-mount .wrapper-1VLyxH foreignObject[mask*="mobile"][width="80"] img {
      width: calc(100% - 16px);
    }
    #app-mount .wrapper-1VLyxH foreignObject[mask*="mobile"][width="80"]:after {
      width: 14px;
      height: 18px;
      top: 75%;
    }
    #app-mount .wrapper-1VLyxH foreignObject[mask*="mobile"][width="120"] img {
      width: calc(100% - 22px);
    }
    #app-mount .wrapper-1VLyxH foreignObject[mask*="mobile"][width="120"]:after {
      width: 24px;
      height: 20px;
      top: 75%;
    }
    #app-mount .wrapper-1VLyxH foreignObject[mask*="mobile"]:after {
      content: "";
      display: var(--rs-phone-visible, block);
      -webkit-mask: url('data:image/svg+xml; utf-8,<svg aria-hidden="true" focusable="false" data-prefix="fas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>')
        center no-repeat;
      mask: url('data:image/svg+xml; utf-8,<svg aria-hidden="true" focusable="false" data-prefix="fas" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg>')
        center no-repeat;
      position: absolute;
      width: 10px;
      height: 14px;
      top: 50%;
      transform: translateY(-50%);
      right: 0;
      background: var(--rs-phone-color, var(--rs-online-color));
      z-index: 1;
    }
    #app-mount .wrapper-1VLyxH foreignObject[mask*="mobile"] + rect {
      stroke: var(--rs-phone-color, var(--rs-online-color));
    }
    #app-mount .avatarStack-3vfSFa {
      position: relative;
    }
    #app-mount .avatarSpeaking-33RRJU {
      position: absolute;
      top: 2px;
      left: 2px;
      width: calc(100% - 4px);
      height: calc(100% - 4px);
      border-radius: var(--rs-avatar-shape);
      box-shadow: inset 0 0 0 2px var(--rs-self-speaking-color, #57d39b),
        inset 0 0 0 3px var(--background-secondary);
    }
    #app-mount .message-2CShn3 .wrapper-1VLyxH foreignObject[mask*="mobile"] {
      width: calc(100% + 3px);
    }
    #app-mount .message-2CShn3 .wrapper-1VLyxH rect[mask*="typing"] {
      width: calc(100% - 9px);
    }
    #app-mount .avatarHint-k7pYop foreignObject {
      -webkit-mask: none;
      mask: none;
    }
    #app-mount .avatarHintInner-2HUAWj {
      border-radius: var(--rs-avatar-shape) !important;
      padding-top: 0;
      width: calc(100% - var(--rs-medium-width) - var(--rs-medium-spacing) + 2px);
      height: calc(100% - var(--rs-medium-width) - var(--rs-medium-spacing) + 2px);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      position: relative;
    }
    #app-mount .memberOffline-2lN7gt img {
      -webkit-clip-path: none !important;
      clip-path: none !important;
    }
    #app-mount .offline-22aM7E img {
      -webkit-clip-path: none !important;
      clip-path: none !important;
    }
    #app-mount .avatarWrapperNonUserBot-3fzpUZ .wrapper-1VLyxH img {
      -webkit-clip-path: none !important;
      clip-path: none !important;
    }
    #app-mount .userInfo-2WpsYG .wrapper-1VLyxH {
      margin-top: 1px;
      margin-left: 1px;
    }
    #app-mount .info-3pQQBb .line-18uChy:last-child:after {
      content: "RadialStatus " var(--rs-version);
      display: block;
    }
    
    :root {
      --rs-small-spacing: 2px; /* Gap between avatar and status for members list/dms | MUST end in px */
      --rs-medium-spacing: 3px; /* Gap between avatar and status for User popout | MUST end in px */
      --rs-large-spacing: 4px; /* Gap between avatar and status for User profiles | MUST end in px */
    
      --rs-small-width: 2px; /* Thickness of status border for members list/dms | MUST end in px */
      --rs-medium-width: 3px; /* Thickness of status border for User popout | MUST end in px */
      --rs-large-width: 4px; /* Thickness of status border for User profile | MUST end in px */
    
      --rs-avatar-shape: 50%; /* 50% for round - 0% for square */
    
      --rs-online-color: #43b581; /* color for online status */
      --rs-idle-color: #faa61a; /* color for idle status */
      --rs-dnd-color: #f04747; /* color for dnd status */
      --rs-offline-color: #636b75; /* color for offline status */
      --rs-streaming-color: #643da7; /* color for streaming status */
      --rs-invisible-color: #747f8d; /* color for invisible status - Note: this will only show for your own invisibility */
      --rs-phone-color: var(
        --rs-online-color
      ); /* Color of the ring and phone icon when a user is on their phone |  */
    
      --rs-phone-visible: block; | block = visible | none = hidden */
    }
    
  `,
    head = document.head || document.getElementsByTagName("head")[0],
    style = document.createElement("style");

  head.appendChild(style);

  style.type = "text/css";
  if (style.styleSheet) {
    // This is required for IE8 and below.
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
})();
