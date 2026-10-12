/* @ds-bundle: {"format":4,"namespace":"DesignSystem_ebeb85","components":[{"name":"ChatBubble","sourcePath":"components/content/ChatBubble.jsx"},{"name":"FeatureCard","sourcePath":"components/content/FeatureCard.jsx"},{"name":"StatCard","sourcePath":"components/content/StatCard.jsx"},{"name":"Testimonial","sourcePath":"components/content/Testimonial.jsx"},{"name":"TypingIndicator","sourcePath":"components/content/TypingIndicator.jsx"},{"name":"CoryMark","sourcePath":"components/core/Avatar.jsx"},{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Chip","sourcePath":"components/core/Chip.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"FeedbackIcon","sourcePath":"components/feedback/Alert.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastRegion","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Toggle","sourcePath":"components/forms/Toggle.jsx"},{"name":"ICONS","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_ALIASES","sourcePath":"components/icons/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/icons/Icon.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"ILLUSTRATION_SCENES","sourcePath":"components/illustrations/Illustration.jsx"},{"name":"Illustration","sourcePath":"components/illustrations/Illustration.jsx"},{"name":"ProgressBar","sourcePath":"components/status/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/status/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/status/Spinner.jsx"},{"name":"Card","sourcePath":"components/surfaces/Card.jsx"},{"name":"DirectionToggle","sourcePath":"components/surfaces/DirectionToggle.jsx"},{"name":"MediaFrame","sourcePath":"components/surfaces/MediaFrame.jsx"},{"name":"Tabs","sourcePath":"components/surfaces/Tabs.jsx"},{"name":"ThemeToggle","sourcePath":"components/surfaces/ThemeToggle.jsx"}],"sourceHashes":{"components/content/ChatBubble.jsx":"5f7803c8fcc7","components/content/FeatureCard.jsx":"201f1e8d485f","components/content/StatCard.jsx":"6e57e5f5f536","components/content/Testimonial.jsx":"1de5f92c6c17","components/content/TypingIndicator.jsx":"ff9859ee8539","components/core/Avatar.jsx":"2c72ce90a397","components/core/Badge.jsx":"5448bc46ea1a","components/core/Button.jsx":"5e615eacd040","components/core/Chip.jsx":"58d9dd559c1d","components/core/IconButton.jsx":"9e7f3dc32053","components/feedback/Alert.jsx":"ccfaff2fbcf6","components/feedback/Dialog.jsx":"ee14810ac610","components/feedback/EmptyState.jsx":"5402c551f006","components/feedback/Toast.jsx":"50e4ffce0b14","components/feedback/Tooltip.jsx":"02cfe0b3e522","components/forms/Checkbox.jsx":"4e2b0c7b335f","components/forms/Input.jsx":"d0e19e5aec54","components/forms/Select.jsx":"6bb51ebe113e","components/forms/Toggle.jsx":"9806ab67232d","components/icons/Icon.jsx":"e9b21e38e4f9","components/illustrations/Illustration.jsx":"856948cf49a2","components/status/ProgressBar.jsx":"2d1a49a94c3a","components/status/Skeleton.jsx":"7b1e9abdd586","components/status/Spinner.jsx":"50d6d8f61630","components/surfaces/Card.jsx":"9fe8de9f9e7c","components/surfaces/DirectionToggle.jsx":"b5d288b59c6f","components/surfaces/MediaFrame.jsx":"835766817b97","components/surfaces/Tabs.jsx":"06e61b9c7e28","components/surfaces/ThemeToggle.jsx":"572e944dd84c","scripts/doc-page.js":"f52ae9c02fca","scripts/showcase-i18n.js":"6acf0ab4d7b1","scripts/showcase.js":"08d1f9eee5a2","tokens/reveal.js":"9118940899bc","ui_kits/roi-calculator/RoiCalculator.jsx":"cc152aa4c2f3","ui_kits/website/App.jsx":"62d6534083dd","ui_kits/website/ChatWidget.jsx":"44c68c4da314","ui_kits/website/Features.jsx":"f0968e1f6785","ui_kits/website/Hero.jsx":"4c660c140a68","ui_kits/website/KitIcon.jsx":"7f22b7861b07","ui_kits/website/Proof.jsx":"a81c6a0d24ed","ui_kits/website/SiteHeader.jsx":"38384084eceb","ui_kits/website/Workflows.jsx":"a75e04257439"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_ebeb85 = window.DesignSystem_ebeb85 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/FeatureCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Feature / benefit card: icon tile, heading, copy, and trailing tag chips.
 * Mirrors the "Why Admissions Teams Choose Cory" grid.
 */
function FeatureCard({
  icon,
  title,
  children,
  tags = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      transition: 'box-shadow var(--duration-slow) var(--ease-out), transform var(--duration-slow) var(--ease-out)',
      ...style
    },
    onMouseEnter: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
      e.currentTarget.style.transform = 'translateY(var(--lift-hover))';
    },
    onMouseLeave: e => {
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 'var(--radius-md)',
      background: 'var(--blue-100)',
      color: 'var(--blue-600)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 'var(--text-h4)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)',
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 'var(--text-ui)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: 0
    }
  }, children), tags.length > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 2
    }
  }, tags.map((t, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontSize: 'var(--text-overline)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      borderRadius: '50%',
      background: 'var(--cyan-500)'
    }
  }), t))));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/content/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Big-number metric block, AgentCory's signature stat treatment.
 * Use `gradient` for the headline number on hero/ROI sections.
 */
function StatCard({
  value,
  label,
  sub,
  gradient = false,
  align = 'start',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align === 'center' ? 'center' : 'start',
      gap: 4,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-extrabold)',
      fontSize: 'var(--text-metric-lg)',
      direction: 'ltr',
      unicodeBidi: 'isolate',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tighter)',
      ...(gradient ? {
        background: 'var(--gradient-brand-text)',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent'
      } : {
        color: 'var(--text-strong)'
      })
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-body-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-body)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, sub));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const STATUS = {
  online: 'var(--fill-success)',
  away: 'var(--fill-warning)',
  offline: 'var(--slate-400)',
  busy: 'var(--fill-danger)'
};

/**
 * CoryMark: the mascot as an SVG <g> for composing inside larger drawings (Illustration uses it).
 * 120-unit art, placed at x/y and scaled to size. tile / glyph set the colours; tile="none" draws the glyph only.
 */
function CoryMark({
  x = 0,
  y = 0,
  size = 120,
  tile = '#0B1F36',
  glyph = '#FFFFFF',
  id
}) {
  const uid = React.useId ? React.useId().replace(/:/g, '') : 'g';
  const gid = `cory_mark_${id || uid}`;
  const k = size / 120;
  return /*#__PURE__*/React.createElement("g", {
    transform: `translate(${x} ${y}) scale(${k})`
  }, tile !== 'none' && /*#__PURE__*/React.createElement("rect", {
    width: "120",
    height: "120",
    rx: "27.2727",
    fill: tile
  }), /*#__PURE__*/React.createElement("path", {
    d: "M87.675 60.3866C91.0899 60.3866 93.8581 63.1576 93.8581 66.5759V78.9544C93.8581 82.3728 91.0899 85.1437 87.675 85.1437H85.9277C85.0505 85.1437 84.3171 85.8003 84.1546 86.6632C82.0995 97.5763 72.8901 105.96 61.5902 106.746C60.6321 106.813 59.8511 106.027 59.8511 105.065V102.358C59.8511 101.396 60.6322 100.625 61.5885 100.537C71.0183 99.6597 78.4003 91.7173 78.4003 82.0491V63.4812C78.4003 53.2265 70.0955 44.9134 59.8511 44.9134C49.6066 44.9134 41.3019 53.2265 41.3019 63.4812V83.403C41.3019 84.3644 40.5233 85.1437 39.5629 85.1437H32.0272C28.6124 85.1437 25.8441 82.3728 25.8441 78.9544V66.5759C25.8441 63.1576 28.6124 60.3866 32.0272 60.3866H33.7745C34.6517 60.3866 35.385 59.73 35.5475 58.8671C37.7071 47.3991 47.767 38.7241 59.8511 38.7241C71.9351 38.7241 81.9951 47.3991 84.1546 58.8671C84.3171 59.73 85.0505 60.3866 85.9277 60.3866H87.675Z",
    fill: glyph
  }), /*#__PURE__*/React.createElement("path", {
    d: "M55.9561 14.0971C54.6498 14.6457 48.3248 17.1143 41.8622 19.583C14.0868 30.1435 10.2368 31.7893 10.0305 33.2979C9.82429 34.6008 10.5805 35.0808 14.8431 36.6581C17.5931 37.6867 22.5432 39.6068 25.8432 40.8411C32.8967 44.043 35.2154 44.5986 39.5247 41.3897C51.1561 32.7282 67.7026 32.7124 80.1393 41.3897C82.484 43.4469 84.197 44.043 86.8055 43.7528C88.9367 43.7528 107.725 36.3838 109.169 34.9437C111.198 32.9197 110.063 32.2007 99.4754 28.0863C94.2503 26.029 83.3877 21.846 75.4126 18.6916C67.3687 15.5371 60.2186 12.9999 59.5999 12.9999C58.9124 13.0685 57.2624 13.5485 55.9561 14.0971Z",
    fill: `url(#${gid})`
  }), /*#__PURE__*/React.createElement("path", {
    d: "M109.728 51.3221L109.99 33.7503C109.991 33.6533 109.953 33.5599 109.885 33.4913C109.776 33.3821 109.609 33.3551 109.471 33.4241L105.447 35.4385C104.857 35.7333 104.485 36.3361 104.485 36.9954V51.2961C104.485 52.2575 105.264 53.0368 106.224 53.0368H107.989C108.939 53.0368 109.714 52.2732 109.728 51.3221Z",
    fill: `url(#${gid})`
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: gid,
    x1: "10",
    y1: "33",
    x2: "110",
    y2: "33",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#258AFD"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#29BEDD"
  }))));
}
function CoryGlyph({
  dark
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 120",
    width: "100%",
    height: "100%",
    style: {
      display: 'block'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "120",
    height: "120",
    rx: "27.2727",
    fill: dark ? '#0B1F36' : '#F4F5FA'
  }), /*#__PURE__*/React.createElement("path", {
    d: "M87.675 60.3866C91.0899 60.3866 93.8581 63.1576 93.8581 66.5759V78.9544C93.8581 82.3728 91.0899 85.1437 87.675 85.1437H85.9277C85.0505 85.1437 84.3171 85.8003 84.1546 86.6632C82.0995 97.5763 72.8901 105.96 61.5902 106.746C60.6321 106.813 59.8511 106.027 59.8511 105.065V102.358C59.8511 101.396 60.6322 100.625 61.5885 100.537C71.0183 99.6597 78.4003 91.7173 78.4003 82.0491V63.4812C78.4003 53.2265 70.0955 44.9134 59.8511 44.9134C49.6066 44.9134 41.3019 53.2265 41.3019 63.4812V83.403C41.3019 84.3644 40.5233 85.1437 39.5629 85.1437H32.0272C28.6124 85.1437 25.8441 82.3728 25.8441 78.9544V66.5759C25.8441 63.1576 28.6124 60.3866 32.0272 60.3866H33.7745C34.6517 60.3866 35.385 59.73 35.5475 58.8671C37.7071 47.3991 47.767 38.7241 59.8511 38.7241C71.9351 38.7241 81.9951 47.3991 84.1546 58.8671C84.3171 59.73 85.0505 60.3866 85.9277 60.3866H87.675Z",
    fill: dark ? '#FFFFFF' : '#0B1F36'
  }), /*#__PURE__*/React.createElement("path", {
    d: "M55.9561 14.0971C54.6498 14.6457 48.3248 17.1143 41.8622 19.583C14.0868 30.1435 10.2368 31.7893 10.0305 33.2979C9.82429 34.6008 10.5805 35.0808 14.8431 36.6581C17.5931 37.6867 22.5432 39.6068 25.8432 40.8411C32.8967 44.043 35.2154 44.5986 39.5247 41.3897C51.1561 32.7282 67.7026 32.7124 80.1393 41.3897C82.484 43.4469 84.197 44.043 86.8055 43.7528C88.9367 43.7528 107.725 36.3838 109.169 34.9437C111.198 32.9197 110.063 32.2007 99.4754 28.0863C94.2503 26.029 83.3877 21.846 75.4126 18.6916C67.3687 15.5371 60.2186 12.9999 59.5999 12.9999C58.9124 13.0685 57.2624 13.5485 55.9561 14.0971Z",
    fill: "url(#cory_av_grad)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M109.728 51.3221L109.99 33.7503C109.991 33.6533 109.953 33.5599 109.885 33.4913C109.776 33.3821 109.609 33.3551 109.471 33.4241L105.447 35.4385C104.857 35.7333 104.485 36.3361 104.485 36.9954V51.2961C104.485 52.2575 105.264 53.0368 106.224 53.0368H107.989C108.939 53.0368 109.714 52.2732 109.728 51.3221Z",
    fill: "url(#cory_av_grad)"
  }), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "cory_av_grad",
    x1: "10",
    y1: "33",
    x2: "110",
    y2: "33",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#258AFD"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#29BEDD"
  }))));
}

/**
 * Avatar: the Cory mascot tile (dark/light), an image, or initials.
 * A broken image falls back to initials; `status` adds a presence dot.
 */
function Avatar({
  src,
  name,
  kind = 'cory',
  size = 40,
  ring = false,
  status,
  statusLabel,
  style,
  ...rest
}) {
  const [failed, setFailed] = useState(false);
  const dim = typeof size === 'number' ? `${size}px` : size;
  const px = typeof size === 'number' ? size : 40;
  const dot = status && STATUS[status] ? /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": statusLabel || status,
    style: {
      position: 'absolute',
      insetInlineEnd: '-2%',
      bottom: '-2%',
      width: Math.max(8, Math.round(px * 0.28)),
      height: Math.max(8, Math.round(px * 0.28)),
      borderRadius: '50%',
      background: STATUS[status],
      boxShadow: '0 0 0 2px var(--surface-card)'
    }
  }) : null;
  const wrap = node => dot ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      flexShrink: 0,
      width: dim,
      height: dim
    }
  }, node, dot) : node;
  const base = {
    width: dim,
    height: dim,
    borderRadius: 'var(--radius-tile)',
    flexShrink: 0,
    overflow: 'hidden',
    display: 'inline-flex',
    boxShadow: ring ? '0 0 0 3px var(--surface-card), 0 0 0 4px var(--border-default)' : 'none',
    ...style
  };
  if (kind === 'cory' || kind === 'cory-light') {
    return wrap(/*#__PURE__*/React.createElement("span", _extends({
      style: base
    }, rest), /*#__PURE__*/React.createElement(CoryGlyph, {
      dark: kind === 'cory'
    })));
  }
  if (src && !failed) {
    return wrap(/*#__PURE__*/React.createElement("img", _extends({
      src: src,
      alt: name || '',
      onError: () => setFailed(true),
      style: {
        ...base,
        objectFit: 'cover'
      }
    }, rest)));
  }
  const initials = (name || '?').split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return wrap(/*#__PURE__*/React.createElement("span", _extends({
    role: failed && name ? 'img' : undefined,
    "aria-label": failed && name ? name : undefined,
    style: {
      ...base,
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--navy-100)',
      color: 'var(--navy-700)',
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-bold)',
      fontSize: typeof size === 'number' ? size * 0.38 : 15,
      letterSpacing: '-0.01em'
    }
  }, rest), initials));
}
Object.assign(__ds_scope, { CoryMark, Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/content/ChatBubble.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Chat message bubble for the Cory widget. `from="cory"` shows the mascot
 * avatar and a light bubble at inline-start; `from="user"` is a brand bubble at inline-end
 * (right in LTR, left in RTL); `from="system"` is a centred quiet note (handoff, timestamps).
 * `status` on user messages: sending (dimmed), sent, failed (red edge + Retry).
 */
function ChatBubble({
  from = 'cory',
  children,
  time,
  showAvatar = true,
  status,
  onRetry,
  retryLabel = 'Retry',
  failedLabel = 'Not sent',
  style,
  ...rest
}) {
  if (from === 'system') {
    return /*#__PURE__*/React.createElement("div", _extends({
      role: "status",
      style: {
        display: 'flex',
        justifyContent: 'center',
        padding: '2px 0',
        ...style
      }
    }, rest), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        maxWidth: '88%',
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)',
        background: 'var(--surface-sunken)',
        color: 'var(--text-muted)',
        fontSize: 'var(--text-caption)',
        fontWeight: 'var(--weight-medium)',
        lineHeight: 1.4,
        textAlign: 'center'
      }
    }, children, time && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-subtle)',
        fontSize: 'var(--text-micro)'
      }
    }, time)));
  }
  const isUser = from === 'user';
  const failed = status === 'failed';
  const sending = status === 'sending';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: isUser ? 'row-reverse' : 'row',
      alignItems: 'flex-end',
      gap: 10,
      ...style
    }
  }, rest), showAvatar && !isUser ? /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    kind: "cory",
    size: 30
  }) : showAvatar && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 30,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isUser ? 'flex-end' : 'flex-start',
      maxWidth: '78%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-busy": sending || undefined,
    style: {
      padding: '10px 14px',
      fontSize: 'var(--text-ui-sm)',
      lineHeight: 1.45,
      borderRadius: 16,
      ...(isUser ? {
        borderEndEndRadius: 4
      } : {
        borderEndStartRadius: 4
      }),
      background: isUser ? 'var(--gradient-brand-deep)' : 'var(--surface-card)',
      color: isUser ? 'var(--text-on-brand)' : 'var(--text-body)',
      border: failed ? '1px solid var(--fill-danger)' : isUser ? '1px solid transparent' : '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)',
      opacity: sending ? 'var(--opacity-muted)' : 1,
      transition: 'opacity var(--duration-base) var(--ease-out)'
    }
  }, children), (time || status) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 4,
      padding: '0 4px',
      fontSize: 'var(--text-micro)',
      color: failed ? 'var(--text-danger)' : 'var(--text-subtle)'
    }
  }, failed ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    role: "alert"
  }, failedLabel), onRetry && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onRetry,
    style: {
      background: 'none',
      border: 0,
      padding: '6px 8px',
      margin: '-6px -8px',
      minHeight: 24,
      font: 'inherit',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-link)',
      cursor: 'pointer',
      textDecoration: 'underline',
      textUnderlineOffset: 2,
      borderRadius: 'var(--radius-xs)'
    }
  }, retryLabel)) : sending ? /*#__PURE__*/React.createElement("span", {
    role: "status"
  }, "Sending\u2026") : /*#__PURE__*/React.createElement(React.Fragment, null, time, status === 'sent' && /*#__PURE__*/React.createElement("span", {
    role: "img",
    "aria-label": "Sent",
    style: {
      color: 'var(--text-success)'
    }
  }, "\u2713")))));
}
Object.assign(__ds_scope, { ChatBubble });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ChatBubble.jsx", error: String((e && e.message) || e) }); }

// components/content/Testimonial.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Testimonial card: a hero metric, the quote, and an attributed person.
 * Mirrors the "Trusted by Leading Institutions" cards.
 */
function Testimonial({
  metric,
  metricLabel,
  quote,
  name,
  role,
  photo,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 'var(--space-6)',
      boxShadow: 'var(--shadow-sm)',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...style
    }
  }, rest), metric && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-extrabold)',
      fontSize: 'var(--text-metric-md)',
      direction: 'ltr',
      unicodeBidi: 'isolate',
      lineHeight: 1,
      letterSpacing: 'var(--tracking-tighter)',
      background: 'var(--gradient-brand-text)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      color: 'transparent'
    }
  }, metric), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-muted)'
    }
  }, metricLabel)), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 'var(--text-md)',
      lineHeight: 1.55,
      color: 'var(--text-body)',
      fontWeight: 'var(--weight-medium)'
    }
  }, "\u201C", quote, "\u201D"), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    kind: photo ? 'image' : 'initials',
    src: photo,
    name: name,
    size: 40
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      lineHeight: 1.3
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-ui-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, role))));
}
Object.assign(__ds_scope, { Testimonial });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Testimonial.jsx", error: String((e && e.message) || e) }); }

// components/content/TypingIndicator.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VH = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap'
};

/** Cory is composing a reply: three pulsing dots in a Cory bubble. role=status announces the label. */
function TypingIndicator({
  label = 'Cory is typing',
  showAvatar = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    "aria-live": "polite",
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 10,
      ...style
    }
  }, rest), showAvatar && /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    kind: "cory",
    size: 30
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '13px 14px',
      borderRadius: 16,
      borderEndStartRadius: 4,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xs)'
    }
  }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--text-subtle)',
      animation: `cory-typing 1.2s var(--ease-in-out) ${i * 0.15}s infinite`
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: VH
  }, label));
}
Object.assign(__ds_scope, { TypingIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/TypingIndicator.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Compact status / metric label. Every tone passes WCAG AA for its text size.
 */
function Badge({
  children,
  tone = 'brand',
  size = 'md',
  dot = false,
  style,
  ...rest
}) {
  const tones = {
    brand: {
      background: 'var(--blue-100)',
      color: 'var(--blue-700)',
      dot: 'var(--blue-500)'
    },
    cyan: {
      background: 'var(--cyan-100)',
      color: 'var(--cyan-800)',
      dot: 'var(--cyan-500)'
    },
    success: {
      background: 'var(--green-100)',
      color: 'var(--green-700)',
      dot: 'var(--green-500)'
    },
    warning: {
      background: 'var(--amber-100)',
      color: 'var(--amber-700)',
      dot: 'var(--amber-500)'
    },
    danger: {
      background: 'var(--red-100)',
      color: 'var(--red-700)',
      dot: 'var(--red-500)'
    },
    neutral: {
      background: 'var(--slate-100)',
      color: 'var(--slate-700)',
      dot: 'var(--slate-500)'
    },
    ink: {
      background: 'var(--navy-800)',
      color: 'var(--white)',
      dot: 'var(--cyan-400)'
    },
    onInk: {
      background: 'var(--on-ink-fill)',
      color: 'var(--on-ink-strong)',
      dot: 'var(--cyan-400)'
    }
  };
  const sizes = {
    sm: {
      padding: '3px 9px',
      fontSize: 'var(--text-micro)'
    },
    md: {
      padding: '5px 12px',
      fontSize: 'var(--text-caption)'
    }
  };
  const t = tones[tone] || tones.brand;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: s.padding,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.2,
      borderRadius: 'var(--radius-pill)',
      background: t.background,
      color: t.color,
      maxWidth: '100%',
      whiteSpace: 'nowrap',
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dot,
      flexShrink: 0
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * AgentCory primary action. Pill-shaped, soft elevation.
 * Variants: primary (AA-safe brand gradient), ink (navy), secondary (outline), ghost.
 * States: hover (darken/tint), focus-visible ring, press scale, loading, disabled.
 * Renders an <a> when `href` is given. Under prefers-reduced-motion the spinner becomes
 * static dots next to the still-visible label, so the state never depends on motion.
 */
const VH = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap'
};
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  iconStart,
  iconEnd,
  fullWidth = false,
  disabled = false,
  loading = false,
  loadingLabel = 'Loading',
  href,
  style,
  ...rest
}) {
  const reduced = loading && reducedMotion();
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [focus, setFocus] = useState(false);
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 'var(--text-ui-sm)',
      gap: 6,
      minHeight: 36
    },
    md: {
      padding: '11px 22px',
      fontSize: 'var(--text-ui)',
      gap: 8,
      minHeight: 44
    },
    lg: {
      padding: '15px 30px',
      fontSize: 'var(--text-ui-lg)',
      gap: 10,
      minHeight: 52
    }
  };
  const variants = {
    primary: {
      rest: {
        background: 'var(--gradient-brand-deep)',
        color: 'var(--text-on-brand)',
        boxShadow: 'var(--shadow-brand)',
        border: '1px solid transparent'
      },
      hover: {
        filter: 'brightness(1.08) saturate(1.05)',
        boxShadow: '0 16px 36px rgba(37,138,253,0.36)'
      }
    },
    ink: {
      rest: {
        background: 'var(--action-ink)',
        color: 'var(--surface-card)',
        boxShadow: 'var(--shadow-sm)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--action-ink-hover)',
        boxShadow: 'var(--shadow-md)'
      }
    },
    secondary: {
      rest: {
        background: 'var(--surface-card)',
        color: 'var(--text-strong)',
        boxShadow: 'var(--shadow-xs)',
        border: '1px solid var(--border-interactive)'
      },
      hover: {
        background: 'var(--action-secondary-hover)',
        boxShadow: 'var(--shadow-sm)'
      }
    },
    ghost: {
      rest: {
        background: 'transparent',
        color: 'var(--text-link)',
        boxShadow: 'none',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--action-ghost-hover)',
        color: 'var(--text-link-hover)'
      }
    },
    onInk: {
      rest: {
        background: 'var(--on-ink-fill)',
        color: 'var(--on-ink-strong)',
        boxShadow: 'none',
        border: '1px solid var(--on-ink-border-strong)'
      },
      hover: {
        background: 'var(--on-ink-fill-hover)'
      }
    },
    onInkSolid: {
      rest: {
        background: 'var(--on-ink-strong)',
        color: 'var(--navy-800)',
        boxShadow: 'var(--shadow-md)',
        border: '1px solid transparent'
      },
      hover: {
        boxShadow: 'var(--shadow-lg), var(--shadow-glow)'
      }
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  const inert = disabled || loading;
  const Tag = href && !inert ? 'a' : 'button';
  const transform = pressed && !inert ? `scale(var(--press-scale, 0.97))` : hover && !inert ? 'translateY(-2px)' : 'none';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: Tag === 'a' ? href : undefined,
    disabled: Tag === 'button' ? inert : undefined,
    "aria-disabled": inert || undefined,
    "aria-busy": loading || undefined,
    style: {
      position: 'relative',
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      padding: s.padding,
      minHeight: s.minHeight,
      fontSize: s.fontSize,
      fontFamily: 'var(--font-sans)',
      fontWeight: 'var(--weight-semibold)',
      lineHeight: 1.2,
      maxWidth: '100%',
      textAlign: 'center',
      whiteSpace: 'nowrap',
      letterSpacing: 'var(--tracking-ui)',
      borderRadius: 'var(--radius-pill)',
      textDecoration: 'none',
      cursor: inert ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      transition: `transform var(--duration-base) ${pressed ? 'var(--ease-out)' : 'var(--ease-spring)'}, box-shadow var(--duration-base) var(--ease-out), background var(--duration-base) var(--ease-out), filter var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out)`,
      outline: 'none',
      transform,
      ...v.rest,
      ...(hover && !inert ? v.hover : null),
      ...(focus ? {
        outline: 'var(--border-width-strong, 2px) solid var(--border-focus)',
        outlineOffset: 2,
        boxShadow: v.rest.boxShadow && v.rest.boxShadow !== 'none' ? `var(--shadow-focus), ${v.rest.boxShadow}` : 'var(--shadow-focus)'
      } : null),
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPressed(false);
    },
    onMouseDown: () => setPressed(true),
    onMouseUp: () => setPressed(false),
    onFocus: e => setFocus(e.currentTarget.matches(':focus-visible')),
    onBlur: () => setFocus(false)
  }, rest), loading && !reduced && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderInlineEndColor: 'transparent',
      animation: 'cory-spin 0.8s linear infinite'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: s.gap,
      visibility: loading && !reduced ? 'hidden' : 'visible'
    }
  }, reduced && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      gap: 3
    }
  }, [0.5, 1, 0.5].map((o, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 4,
      height: 4,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: o
    }
  }))), iconStart ?? iconLeft, children, iconEnd ?? iconRight), loading && /*#__PURE__*/React.createElement("span", {
    role: "status",
    style: VH
  }, loadingLabel));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Interactive, selectable pill, filters, tags, toggles. Badge is static; Chip is a control.
 * removable renders a separate, keyboard-reachable remove button inside the pill.
 */
function Chip({
  children,
  selected = false,
  onToggle,
  icon,
  removable = false,
  onRemove,
  removeLabel,
  size = 'md',
  disabled = false,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const s = size === 'sm' ? {
    padding: '5px 12px',
    fontSize: 'var(--text-ui-sm)',
    minHeight: 32
  } : {
    padding: '8px 16px',
    fontSize: 'var(--text-ui)',
    minHeight: 40
  };
  const h = hover && !disabled;
  const bg = selected ? 'var(--action-ink)' : h ? 'var(--action-secondary-hover)' : 'var(--surface-card)';
  const color = selected ? 'var(--surface-card)' : 'var(--text-strong)';
  const border = selected ? 'var(--action-ink)' : 'var(--border-interactive)';
  const pill = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: s.padding,
    minHeight: s.minHeight,
    fontSize: s.fontSize,
    fontFamily: 'var(--font-sans)',
    fontWeight: 'var(--weight-semibold)',
    lineHeight: 1,
    letterSpacing: 'var(--tracking-ui)',
    color,
    background: bg,
    border: `1px solid ${border}`,
    borderRadius: 'var(--radius-pill)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    maxWidth: '100%',
    textAlign: 'start',
    whiteSpace: 'nowrap',
    opacity: disabled ? 'var(--opacity-disabled)' : 1,
    transition: 'background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out), border-color var(--duration-base) var(--ease-out), transform var(--duration-fast) var(--ease-spring)',
    transform: h && !selected ? 'translateY(-2px)' : selected && !disabled ? 'scale(1.02)' : 'none'
  };
  const body = /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, icon), children);
  const hoverProps = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (!removable) {
    return /*#__PURE__*/React.createElement("button", _extends({
      type: "button",
      disabled: disabled,
      role: onToggle ? 'switch' : undefined,
      "aria-checked": onToggle ? selected : undefined,
      onClick: e => {
        onToggle && onToggle(!selected, e);
      }
    }, hoverProps, {
      style: {
        ...pill,
        ...style
      }
    }, rest), body);
  }
  const text = typeof children === 'string' ? children : '';
  const inner = {
    background: 'transparent',
    border: 0,
    padding: 0,
    margin: 0,
    color: 'inherit',
    font: 'inherit',
    letterSpacing: 'inherit',
    cursor: 'inherit',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    minHeight: s.minHeight - 2
  };
  return /*#__PURE__*/React.createElement("span", _extends({}, hoverProps, {
    style: {
      ...pill,
      paddingInlineEnd: Number(s.padding.split(' ')[1].replace('px', '')) - 6,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    role: onToggle ? 'switch' : undefined,
    "aria-checked": onToggle ? selected : undefined,
    onClick: e => {
      onToggle && onToggle(!selected, e);
    },
    style: inner
  }, body), /*#__PURE__*/React.createElement("button", {
    type: "button",
    disabled: disabled,
    "aria-label": removeLabel || (text ? `Remove ${text}` : 'Remove'),
    onClick: e => {
      onRemove && onRemove(e);
    },
    style: {
      ...inner,
      display: 'inline-grid',
      placeItems: 'center',
      width: 24,
      height: 24,
      minHeight: 24,
      borderRadius: '50%',
      background: selected ? 'var(--on-ink-fill-hover)' : 'var(--surface-sunken)',
      fontSize: 15,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Chip.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Square-ish icon-only action. Always needs `label` (aria-label + tooltip title).
 * States: hover, active (ghost), disabled, loading (spinner replaces the icon).
 */
const VH = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap'
};
function IconButton({
  children,
  label,
  variant = 'secondary',
  size = 'md',
  active = false,
  disabled = false,
  loading = false,
  loadingLabel = 'Loading',
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const inert = disabled || loading;
  const px = {
    sm: 36,
    md: 44,
    lg: 52
  }[size] || 44;
  const variants = {
    primary: {
      rest: {
        background: 'var(--gradient-brand-deep)',
        color: 'var(--text-on-brand)',
        border: '1px solid transparent',
        boxShadow: 'var(--shadow-brand)'
      },
      hover: {
        filter: 'brightness(1.08)'
      }
    },
    ink: {
      rest: {
        background: 'var(--action-ink)',
        color: 'var(--surface-card)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--action-ink-hover)'
      }
    },
    secondary: {
      rest: {
        background: 'var(--surface-card)',
        color: 'var(--text-strong)',
        border: '1px solid var(--border-interactive)',
        boxShadow: 'var(--shadow-xs)'
      },
      hover: {
        background: 'var(--action-secondary-hover)'
      }
    },
    ghost: {
      rest: {
        background: active ? 'var(--action-ghost-hover)' : 'transparent',
        color: active ? 'var(--text-link)' : 'var(--text-body)',
        border: '1px solid transparent'
      },
      hover: {
        background: 'var(--action-ghost-hover)',
        color: 'var(--text-link)'
      }
    },
    onInk: {
      rest: {
        background: 'var(--on-ink-fill)',
        color: 'var(--on-ink-strong)',
        border: '1px solid var(--on-ink-border)'
      },
      hover: {
        background: 'var(--on-ink-fill-hover)'
      }
    }
  };
  const v = variants[variant] || variants.secondary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    "aria-pressed": variant === 'ghost' && active ? true : undefined,
    disabled: inert,
    "aria-disabled": inert || undefined,
    "aria-busy": loading || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: px,
      height: px,
      borderRadius: 'var(--radius-pill)',
      cursor: inert ? 'not-allowed' : 'pointer',
      position: 'relative',
      fontSize: Math.round(px * 0.45),
      lineHeight: 1,
      padding: 0,
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      transition: 'background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out), transform var(--duration-base) var(--ease-spring), filter var(--duration-base) var(--ease-out)',
      transform: hover && !inert ? 'translateY(-2px) scale(1.04)' : 'none',
      ...v.rest,
      ...(hover && !inert ? v.hover : null),
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: Math.round(px * 0.4),
      height: Math.round(px * 0.4),
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderInlineEndColor: 'transparent',
      animation: 'cory-spin 0.8s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    role: "status",
    style: VH
  }, loadingLabel)) : children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Shared 20px tone glyphs for Alert, Toast and Dialog. Stroke follows currentColor. */
function FeedbackIcon({
  tone = 'info',
  size = 20
}) {
  const paths = {
    info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 11v5M12 8h.01"
    })),
    success: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M8.5 12.5l2.5 2.5 4.5-5"
    })),
    warning: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
      d: "M12 4l9 16H3z"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M12 10v4M12 17h.01"
    })),
    danger: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
      cx: "12",
      cy: "12",
      r: "9"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M9 9l6 6M15 9l-6 6"
    }))
  };
  return /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0
    }
  }, paths[tone] || paths.info);
}

/**
 * Inline feedback banner. Four tones, optional title, action row and dismiss.
 * danger announces assertively (role=alert); the others politely (role=status).
 */
function Alert({
  tone = 'info',
  title,
  children,
  action,
  onDismiss,
  dismissLabel = 'Dismiss',
  icon,
  compact = false,
  style,
  ...rest
}) {
  const t = ['info', 'success', 'warning', 'danger'].includes(tone) ? tone : 'info';
  return /*#__PURE__*/React.createElement("div", _extends({
    role: t === 'danger' ? 'alert' : 'status',
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: compact ? '10px 14px' : '14px 16px',
      maxWidth: '100%',
      borderRadius: 'var(--radius-md)',
      background: `var(--surface-${t})`,
      border: `1px solid var(--border-${t})`,
      color: 'var(--text-body)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-ui-sm)',
      lineHeight: 1.5,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: `var(--text-${t})`,
      display: 'inline-flex',
      marginTop: 1
    }
  }, icon ?? /*#__PURE__*/React.createElement(FeedbackIcon, {
    tone: t
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      color: `var(--text-${t})`,
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-ui)',
      lineHeight: 1.4
    }
  }, title), children && /*#__PURE__*/React.createElement("div", null, children), action && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 8
    }
  }, action)), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": dismissLabel,
    onClick: onDismiss,
    style: {
      flexShrink: 0,
      width: 28,
      height: 28,
      marginBlock: -4,
      marginInlineEnd: -6,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid transparent',
      background: 'transparent',
      color: `var(--text-${t})`,
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { FeedbackIcon, Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
const FOCUSABLE = 'a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])';

/**
 * Modal dialog: scrim at --z-modal, focus trap, Escape and scrim click to close,
 * focus returned to the opener, body scroll locked. tone="danger" marks a destructive confirm.
 */
function Dialog({
  open,
  onClose,
  title,
  description,
  children,
  actions,
  size = 'md',
  tone = 'default',
  dismissible = true,
  closeLabel = 'Close',
  initialFocusRef,
  style,
  ...rest
}) {
  const panel = useRef(null);
  const opener = useRef(null);
  const uid = useRef(`dlg-${Math.random().toString(36).slice(2, 8)}`);
  useEffect(() => {
    if (!open) return undefined;
    opener.current = document.activeElement;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusables = () => panel.current ? Array.from(panel.current.querySelectorAll(FOCUSABLE)) : [];
    const t = setTimeout(() => {
      const first = initialFocusRef && initialFocusRef.current || focusables().find(el => !el.hasAttribute('data-dialog-close')) || panel.current;
      first && first.focus();
    }, 10);
    const onKey = e => {
      if (e.key === 'Escape' && dismissible) {
        e.stopPropagation();
        onClose && onClose();
        return;
      }
      if (e.key !== 'Tab') return;
      const f = focusables();
      if (!f.length) {
        e.preventDefault();
        return;
      }
      const i = f.indexOf(document.activeElement);
      if (e.shiftKey && i <= 0) {
        e.preventDefault();
        f[f.length - 1].focus();
      } else if (!e.shiftKey && i === f.length - 1) {
        e.preventDefault();
        f[0].focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
      if (opener.current && opener.current.focus) opener.current.focus();
    };
  }, [open]);
  if (!open) return null;
  const w = {
    sm: 420,
    md: 560,
    lg: 720
  }[size] || 560;
  const titleId = `${uid.current}-t`,
    descId = `${uid.current}-d`;
  return /*#__PURE__*/React.createElement("div", {
    onMouseDown: e => {
      if (dismissible && e.target === e.currentTarget) onClose && onClose();
    },
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 'var(--z-modal)',
      display: 'grid',
      placeItems: 'center',
      padding: 20,
      background: 'var(--surface-overlay)',
      WebkitBackdropFilter: 'blur(var(--blur-scrim))',
      backdropFilter: 'blur(var(--blur-scrim))',
      animation: 'cory-fade-in var(--duration-base) var(--ease-out) both'
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    ref: panel,
    role: "dialog",
    "aria-modal": "true",
    "aria-labelledby": title ? titleId : undefined,
    "aria-describedby": description ? descId : undefined,
    tabIndex: -1,
    style: {
      position: 'relative',
      width: w,
      maxWidth: '100%',
      maxHeight: 'calc(100dvh - 40px)',
      overflow: 'auto',
      padding: 'var(--space-8)',
      outline: 'none',
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      borderRadius: 'var(--radius-2xl)',
      boxShadow: 'var(--shadow-xl)',
      border: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-sans)',
      animation: 'cory-scale-in var(--duration-slow) var(--ease-out) both',
      ...style
    }
  }, rest), dismissible && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "data-dialog-close": "1",
    "aria-label": closeLabel,
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      insetInlineEnd: 16,
      width: 36,
      height: 36,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid transparent',
      background: 'var(--surface-sunken)',
      color: 'var(--text-muted)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1
    }
  }, "\xD7"), tone === 'danger' && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: 44,
      height: 44,
      marginBottom: 14,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-danger)',
      color: 'var(--text-danger)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FeedbackIcon, {
    tone: "danger",
    size: 22
  })), title && /*#__PURE__*/React.createElement("h2", {
    id: titleId,
    style: {
      margin: 0,
      paddingInlineEnd: dismissible ? 40 : 0,
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-h3)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1.25,
      color: 'var(--text-strong)'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    id: descId,
    style: {
      margin: '8px 0 0',
      fontSize: 'var(--text-ui)',
      lineHeight: 1.55,
      color: 'var(--text-muted)'
    }
  }, description), children && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 24
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef,
  useState
} = React;
/**
 * Brief confirmation after an action. Ink surface in both themes, auto-dismisses,
 * pauses while hovered or focused. Mount inside <ToastRegion>.
 */
function Toast({
  tone = 'info',
  title,
  children,
  action,
  onDismiss,
  duration = 6000,
  dismissLabel = 'Dismiss',
  style,
  ...rest
}) {
  const t = ['info', 'success', 'warning', 'danger'].includes(tone) ? tone : 'info';
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);
  useEffect(() => {
    if (!onDismiss || !duration || paused) return undefined;
    timer.current = setTimeout(onDismiss, duration);
    return () => clearTimeout(timer.current);
  }, [onDismiss, duration, paused]);
  return /*#__PURE__*/React.createElement("div", _extends({
    role: t === 'danger' ? 'alert' : 'status',
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false),
    onFocus: () => setPaused(true),
    onBlur: () => setPaused(false),
    style: {
      pointerEvents: 'auto',
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      width: 380,
      maxWidth: '100%',
      padding: '14px 16px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--gradient-ink)',
      color: 'var(--on-ink-body)',
      border: '1px solid var(--on-ink-border)',
      boxShadow: 'var(--shadow-xl)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-ui-sm)',
      lineHeight: 1.5,
      animation: 'cory-toast-in var(--duration-slow) var(--ease-out) both',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      color: `var(--on-ink-${t})`,
      display: 'inline-flex',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.FeedbackIcon, {
    tone: t
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, title && /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--on-ink-strong)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-ui)',
      lineHeight: 1.4
    }
  }, title), children && /*#__PURE__*/React.createElement("div", null, children)), action && /*#__PURE__*/React.createElement("div", {
    style: {
      flexShrink: 0,
      alignSelf: 'center'
    }
  }, action), onDismiss && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": dismissLabel,
    onClick: onDismiss,
    style: {
      flexShrink: 0,
      width: 28,
      height: 28,
      marginBlock: -4,
      marginInlineEnd: -6,
      display: 'grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid transparent',
      background: 'transparent',
      color: 'var(--on-ink-muted)',
      cursor: 'pointer',
      fontSize: 18,
      lineHeight: 1
    }
  }, "\xD7"));
}

/** Fixed live region that stacks Toasts at the inline-end bottom corner (z: --z-toast). */
function ToastRegion({
  children,
  position = 'end',
  label = 'Notifications',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "region",
    "aria-label": label,
    "aria-live": "polite",
    "aria-relevant": "additions",
    style: {
      position: 'fixed',
      insetBlockEnd: 24,
      zIndex: 'var(--z-toast)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: position === 'start' ? 'flex-start' : position === 'center' ? 'center' : 'flex-end',
      gap: 10,
      insetInline: position === 'center' ? 16 : undefined,
      insetInlineEnd: position === 'end' ? 24 : undefined,
      insetInlineStart: position === 'start' ? 24 : undefined,
      maxWidth: 'calc(100vw - 32px)',
      pointerEvents: 'none',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Toast, ToastRegion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useEffect,
  useRef,
  useState
} = React;
/**
 * Short label on hover or keyboard focus. Wrap exactly one focusable child
 * (IconButton, Button, link). Escape hides it. Rendered at --z-tooltip.
 */
function Tooltip({
  label,
  children,
  placement = 'top',
  delay = 250,
  id,
  style
}) {
  const [open, setOpen] = useState(false);
  const timer = useRef(null);
  const uid = useRef(id || `tt-${Math.random().toString(36).slice(2, 8)}`);
  const show = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setOpen(true), delay);
  };
  const hide = () => {
    clearTimeout(timer.current);
    setOpen(false);
  };
  useEffect(() => {
    if (!open) return undefined;
    const onKey = e => {
      if (e.key === 'Escape') hide();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);
  const child = React.Children.only(children);
  const trigger = React.cloneElement(child, {
    'aria-describedby': [child.props['aria-describedby'], uid.current].filter(Boolean).join(' ')
  });
  const top = placement === 'top';
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: show,
    onMouseLeave: hide,
    onFocus: show,
    onBlur: hide,
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, trigger, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    id: uid.current,
    style: {
      position: 'absolute',
      insetInlineStart: '50%',
      [top ? 'bottom' : 'top']: 'calc(100% + 8px)',
      zIndex: 'var(--z-tooltip)',
      transform: `translateX(calc(-50% * var(--dir, 1))) translateY(${open ? 0 : top ? 4 : -4}px)`,
      opacity: open ? 1 : 0,
      visibility: open ? 'visible' : 'hidden',
      pointerEvents: 'none',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--surface-ink)',
      color: 'var(--on-ink-strong)',
      boxShadow: 'var(--shadow-md)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-caption)',
      fontWeight: 'var(--weight-medium)',
      lineHeight: 1.35,
      width: 'max-content',
      maxWidth: 240,
      textAlign: 'center',
      overflowWrap: 'break-word',
      transition: `opacity var(--duration-fast) var(--ease-out), transform var(--duration-fast) var(--ease-out), visibility 0s ${open ? '0s' : 'var(--duration-fast)'}`
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/** Checkbox with label + optional hint or error. Controlled or uncontrolled. Supports indeterminate. */
function Checkbox({
  label,
  hint,
  error,
  checked,
  defaultChecked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `cb-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msg = error || hint;
  const msgId = fieldId && msg ? `${fieldId}-msg` : undefined;
  const toggle = e => {
    if (checked === undefined) setInner(e.target.checked);
    onChange && onChange(e.target.checked, e);
  };
  const active = on || indeterminate;
  const border = active ? 'var(--action-primary)' : error ? 'var(--fill-danger)' : 'var(--border-interactive)';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'flex-start',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      minHeight: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: 20,
      height: 20,
      flexShrink: 0,
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fieldId,
    type: "checkbox",
    checked: on,
    disabled: disabled,
    onChange: toggle,
    "aria-invalid": !!error || undefined,
    "aria-describedby": msgId,
    ref: el => {
      if (el) el.indeterminate = indeterminate;
    },
    onFocus: e => setFocus(e.currentTarget.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      inset: 0,
      margin: 0,
      opacity: 0,
      width: '100%',
      height: '100%',
      cursor: 'inherit'
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 'var(--radius-xs)',
      border: `1px solid ${border}`,
      background: active ? 'var(--action-primary)' : 'var(--surface-card)',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      display: 'grid',
      placeItems: 'center',
      transition: 'background var(--duration-fast) var(--ease-out), border-color var(--duration-fast) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 2,
      background: '#fff',
      borderRadius: 1
    }
  }) : on && /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.5l2.5 2.5 4.5-5",
    stroke: "#fff",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })))), (label || msg) && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-ui-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)',
      lineHeight: 1.4
    }
  }, label), msg && /*#__PURE__*/React.createElement("span", {
    id: msgId,
    role: error ? 'alert' : undefined,
    style: {
      fontSize: 'var(--text-overline)',
      fontWeight: error ? 'var(--weight-medium)' : undefined,
      color: error ? 'var(--text-danger)' : 'var(--text-muted)'
    }
  }, msg)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Labelled text input matching AgentCory's demo-request forms.
 * Soft rounded field, blue focus ring. States: default, focus, error, warning, success, loading (validating), disabled.
 */
function Input({
  label,
  hint,
  error,
  warning,
  success,
  loading = false,
  required = false,
  multiline = false,
  disabled = false,
  iconLeft,
  iconRight,
  iconStart,
  iconEnd,
  id,
  style,
  ...rest
}) {
  const spinner = loading ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid var(--text-subtle)',
      borderInlineEndColor: 'transparent',
      animation: 'cory-spin 0.8s linear infinite'
    }
  }) : null;
  const lead = iconStart ?? iconLeft,
    trail = spinner ?? iconEnd ?? iconRight;
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `f-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msgId = fieldId ? `${fieldId}-msg` : undefined;
  const Tag = multiline ? 'textarea' : 'input';
  const border = error ? 'var(--fill-danger)' : warning ? 'var(--fill-warning)' : success ? 'var(--fill-success)' : focus ? 'var(--border-focus)' : 'var(--border-strong)';
  const msg = error || warning || success || hint;
  const msgColor = error ? 'var(--text-danger)' : warning ? 'var(--text-warning)' : success ? 'var(--text-success)' : 'var(--text-muted)';
  const pad = multiline ? '12px 14px' : '11px 14px';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--text-danger)',
      marginInlineStart: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center'
    }
  }, lead && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInlineStart: 14,
      top: multiline ? 13 : '50%',
      transform: multiline ? 'none' : 'translateY(-50%)',
      color: 'var(--text-subtle)',
      display: 'inline-flex',
      pointerEvents: 'none'
    }
  }, lead), /*#__PURE__*/React.createElement(Tag, _extends({
    id: fieldId,
    disabled: disabled,
    required: required,
    "aria-invalid": !!error || undefined,
    "aria-busy": loading || undefined,
    "aria-describedby": msg ? msgId : undefined,
    rows: multiline ? 4 : undefined,
    style: {
      width: '100%',
      boxSizing: 'border-box',
      padding: pad,
      minHeight: multiline ? undefined : 44,
      ...(lead ? {
        paddingInlineStart: 42
      } : null),
      ...(trail ? {
        paddingInlineEnd: 42
      } : null),
      fontSize: 'var(--text-ui)',
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-md)',
      outline: focus ? undefined : 'none',
      resize: multiline ? 'vertical' : undefined,
      cursor: disabled ? 'not-allowed' : undefined,
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false)
  }, rest)), trail && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetInlineEnd: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--text-subtle)',
      display: 'inline-flex'
    }
  }, trail)), msg && /*#__PURE__*/React.createElement("span", {
    id: msgId,
    role: error ? 'alert' : undefined,
    style: {
      fontSize: 'var(--text-overline)',
      fontWeight: error || warning ? 'var(--weight-medium)' : undefined,
      color: msgColor
    }
  }, msg));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Native select styled like Input: label, hint, error, success, disabled, placeholder option.
 * `loading` disables with a "Loading…" placeholder; an empty options list shows `emptyMessage`.
 */
function Select({
  label,
  hint,
  error,
  success,
  required = false,
  disabled = false,
  loading = false,
  loadingMessage = 'Loading…',
  emptyMessage = 'No options yet',
  placeholder,
  options = [],
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `s-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msgId = fieldId ? `${fieldId}-msg` : undefined;
  const empty = !loading && options.length === 0;
  const inert = disabled || loading || empty;
  const border = error ? 'var(--fill-danger)' : success ? 'var(--fill-success)' : focus ? 'var(--border-focus)' : 'var(--border-strong)';
  const msg = error || success || hint;
  const msgColor = error ? 'var(--text-danger)' : success ? 'var(--text-success)' : 'var(--text-muted)';
  const ph = loading ? loadingMessage : empty ? emptyMessage : placeholder;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label, required && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      color: 'var(--text-danger)',
      marginInlineStart: 3
    }
  }, "*")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fieldId,
    disabled: inert,
    required: required,
    "aria-invalid": !!error || undefined,
    "aria-describedby": msg ? msgId : undefined,
    "aria-busy": loading || undefined,
    defaultValue: rest.value === undefined && rest.defaultValue === undefined && ph ? '' : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      minHeight: 44,
      paddingBlock: 11,
      paddingInlineStart: 14,
      paddingInlineEnd: 42,
      appearance: 'none',
      WebkitAppearance: 'none',
      fontSize: 'var(--text-ui)',
      fontFamily: 'var(--font-sans)',
      color: inert ? 'var(--text-muted)' : 'var(--text-strong)',
      background: 'var(--surface-card)',
      border: `1px solid ${border}`,
      borderRadius: 'var(--radius-md)',
      outline: focus ? undefined : 'none',
      cursor: inert ? loading ? 'progress' : 'not-allowed' : 'pointer',
      boxShadow: focus ? 'var(--shadow-focus)' : 'none',
      transition: 'border-color var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
    }
  }, rest), ph && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, ph), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      disabled: o.disabled
    }, l);
  })), loading ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      insetInlineEnd: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      width: 16,
      height: 16,
      borderRadius: '50%',
      border: '2px solid var(--text-subtle)',
      borderInlineEndColor: 'transparent',
      animation: 'cory-spin 0.8s linear infinite',
      pointerEvents: 'none'
    }
  }) : /*#__PURE__*/React.createElement("svg", {
    "aria-hidden": "true",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      position: 'absolute',
      insetInlineEnd: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-subtle)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M4 6l4 4 4-4",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), msg && /*#__PURE__*/React.createElement("span", {
    id: msgId,
    role: error ? 'alert' : undefined,
    style: {
      fontSize: 'var(--text-overline)',
      fontWeight: error ? 'var(--weight-medium)' : undefined,
      color: msgColor
    }
  }, msg));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Toggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const VH = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap'
};

/** On/off switch for settings that apply immediately. `loading` shows a pending knob while the change saves. */
function Toggle({
  label,
  hint,
  error,
  checked,
  defaultChecked = false,
  disabled = false,
  loading = false,
  loadingLabel = 'Saving',
  onChange,
  size = 'md',
  labelPosition = 'end',
  id,
  style,
  ...rest
}) {
  const labelFirst = labelPosition === 'start' || labelPosition === 'left';
  const [inner, setInner] = useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const [focus, setFocus] = useState(false);
  const fieldId = id || (label ? `tg-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const msg = error || hint;
  const msgId = fieldId && msg ? `${fieldId}-msg` : undefined;
  const inert = disabled || loading;
  const w = size === 'sm' ? 36 : 44,
    h = size === 'sm' ? 20 : 24,
    k = h - 6;
  const flip = e => {
    if (inert) return;
    const next = !on;
    if (checked === undefined) setInner(next);
    onChange && onChange(next, e);
  };
  const track = /*#__PURE__*/React.createElement("button", _extends({
    id: fieldId,
    type: "button",
    role: "switch",
    "aria-checked": on,
    "aria-label": label ? undefined : 'Toggle',
    "aria-describedby": msgId,
    "aria-invalid": !!error || undefined,
    "aria-busy": loading || undefined,
    disabled: disabled,
    onClick: flip,
    onFocus: e => setFocus(e.currentTarget.matches(':focus-visible')),
    onBlur: () => setFocus(false),
    style: {
      position: 'relative',
      width: w + 4,
      height: h + 4,
      flexShrink: 0,
      borderRadius: 'var(--radius-pill)',
      border: '2px solid transparent',
      backgroundClip: 'padding-box',
      padding: 0,
      cursor: inert ? loading ? 'progress' : 'not-allowed' : 'pointer',
      background: on ? 'var(--gradient-brand-deep)' : 'var(--border-interactive)',
      boxShadow: error ? '0 0 0 1px var(--fill-danger)' : focus ? 'var(--shadow-focus)' : 'none',
      transition: 'background var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 3,
      insetInlineStart: 3,
      width: k,
      height: k,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: 'var(--shadow-xs)',
      display: 'grid',
      placeItems: 'center',
      transform: on ? `translateX(calc(${w - k - 6}px * var(--dir, 1)))` : 'translateX(0)',
      transition: 'transform var(--duration-base) var(--ease-spring)'
    }
  }, loading && /*#__PURE__*/React.createElement("span", {
    style: {
      width: k - 6,
      height: k - 6,
      borderRadius: '50%',
      border: `2px solid ${on ? 'var(--blue-700)' : 'var(--slate-400)'}`,
      borderInlineEndColor: 'transparent',
      animation: 'cory-spin 0.8s linear infinite'
    }
  })), loading && /*#__PURE__*/React.createElement("span", {
    role: "status",
    style: VH
  }, loadingLabel));
  if (!label && !msg) return track;
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fieldId,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      flexDirection: labelFirst ? 'row-reverse' : 'row',
      justifyContent: labelFirst ? 'space-between' : 'flex-start',
      cursor: inert ? 'not-allowed' : 'pointer',
      opacity: disabled ? 'var(--opacity-disabled)' : 1,
      ...style
    }
  }, track, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-ui-sm)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-strong)',
      lineHeight: 1.4
    }
  }, label), msg && /*#__PURE__*/React.createElement("span", {
    id: msgId,
    role: error ? 'alert' : undefined,
    style: {
      fontSize: 'var(--text-overline)',
      fontWeight: error ? 'var(--weight-medium)' : undefined,
      color: error ? 'var(--text-danger)' : 'var(--text-muted)'
    }
  }, msg)));
}
Object.assign(__ds_scope, { Toggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Toggle.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Cory icon set. 24-unit grid, 2-unit safe area, 1.75 stroke, round caps and joins.
 * Duotone: `t` shapes are a 20% currentColor tint under the `s` stroke shapes; `d` shapes are solid dots.
 * Everything follows currentColor, so an icon recolours with the text it sits in.
 */
const P = (d, k = 'a') => /*#__PURE__*/React.createElement("path", {
  key: k,
  d: d
});
const C = (cx, cy, r, k = 'a') => /*#__PURE__*/React.createElement("circle", {
  key: k,
  cx: cx,
  cy: cy,
  r: r
});
const R = (x, y, w, h, rx, k = 'a') => /*#__PURE__*/React.createElement("rect", {
  key: k,
  x: x,
  y: y,
  width: w,
  height: h,
  rx: rx
});
const PHONE = 'M5 4h3.5l1.8 4.5-2.3 1.8a11 11 0 0 0 5.7 5.7l1.8-2.3L20 15.5V19a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4z';
const BUBBLE = 'M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H9.5L5 20.5V17a2 2 0 0 1-1-1.7z';
const FILE = 'M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z';
const CAL = R(3, 5, 18, 16, 3, 'r');
const CAL_S = [CAL, P('M3 10h18M8 3v4M16 3v4', 'l')];
const SHIELD = 'M12 3l8 3v6c0 4.5-3.4 8-8 9.5C7.4 20 4 16.5 4 12V6z';
const SPEAKER = 'M4 9.5v5h3.5L13 19V5L7.5 9.5z';
const LOBE = 'M12 5.5a3 3 0 0 0-5.6 1.2A3.2 3.2 0 0 0 4.6 12a3.2 3.2 0 0 0 .8 5.3A3.2 3.2 0 0 0 9 21a3 3 0 0 0 3-2.5z';
const TRAY = 'M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2';
const ICONS = {
  // Navigation and actions
  'check': {
    s: [P('M5 12.5l4.5 4.5L19 7')]
  },
  'close': {
    s: [P('M6 6l12 12M18 6L6 18')]
  },
  'plus': {
    s: [P('M12 5v14M5 12h14')]
  },
  'minus': {
    s: [P('M5 12h14')]
  },
  'menu': {
    s: [P('M4 7h16M4 12h16M4 17h16')]
  },
  'more': {
    d: [C(5, 12, 1.6), C(12, 12, 1.6, 'b'), C(19, 12, 1.6, 'c')]
  },
  'more-vertical': {
    d: [C(12, 5, 1.6), C(12, 12, 1.6, 'b'), C(12, 19, 1.6, 'c')]
  },
  'arrow-right': {
    dir: 1,
    s: [P('M4 12h16M13 5l7 7-7 7')]
  },
  'arrow-left': {
    dir: 1,
    s: [P('M20 12H4M11 5l-7 7 7 7')]
  },
  'arrow-up': {
    s: [P('M12 20V4M5 11l7-7 7 7')]
  },
  'arrow-down': {
    s: [P('M12 4v16M5 13l7 7 7-7')]
  },
  'arrow-up-right': {
    dir: 1,
    s: [P('M7 17L17 7M8 7h9v9')]
  },
  'arrow-right-left': {
    s: [P('M16 3l4 4-4 4M20 7H4M8 13l-4 4 4 4M4 17h16')]
  },
  'chevron-down': {
    s: [P('M6 9l6 6 6-6')]
  },
  'chevron-up': {
    s: [P('M6 15l6-6 6 6')]
  },
  'chevron-right': {
    dir: 1,
    s: [P('M9 6l6 6-6 6')]
  },
  'chevron-left': {
    dir: 1,
    s: [P('M15 6l-6 6 6 6')]
  },
  'external-link': {
    dir: 1,
    s: [P('M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5')]
  },
  'log-in': {
    dir: 1,
    s: [P('M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3M10 8l4 4-4 4M14 12H4')]
  },
  'log-out': {
    dir: 1,
    s: [P('M9 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h3M15 8l4 4-4 4M19 12H9')]
  },
  'download': {
    t: [P(TRAY + 'z')],
    s: [P('M12 4v11M7.5 10.5L12 15l4.5-4.5'), P(TRAY, 'b')]
  },
  'upload': {
    t: [P(TRAY + 'z')],
    s: [P('M12 15V4M7.5 8.5L12 4l4.5 4.5'), P(TRAY, 'b')]
  },
  'refresh': {
    s: [P('M20 11a8 8 0 0 0-14.5-3.5M4 4v4.5h4.5M4 13a8 8 0 0 0 14.5 3.5M20 20v-4.5h-4.5')]
  },
  'repeat': {
    s: [P('M17 3l3 3-3 3M20 6H8a4 4 0 0 0-4 4v1M7 21l-3-3 3-3M4 18h12a4 4 0 0 0 4-4v-1')]
  },
  'search': {
    t: [C(10.5, 10.5, 6.5)],
    s: [C(10.5, 10.5, 6.5), P('M15.5 15.5L21 21', 'b')]
  },
  'filter': {
    t: [P('M3 5h18l-7 8.5V20l-4-2v-4.5z')],
    s: [P('M3 5h18l-7 8.5V20l-4-2v-4.5z')]
  },
  'settings': {
    t: [C(15, 7, 2), C(9, 12, 2, 'b'), C(17, 17, 2, 'c')],
    s: [P('M4 7h9M17 7h3M4 12h3M11 12h9M4 17h11M19 17h1'), C(15, 7, 2, 'b'), C(9, 12, 2, 'c'), C(17, 17, 2, 'd')]
  },
  'copy': {
    t: [R(9, 9, 11, 11, 2)],
    s: [R(9, 9, 11, 11, 2), P('M5 15H4.5A1.5 1.5 0 0 1 3 13.5v-9A1.5 1.5 0 0 1 4.5 3h9A1.5 1.5 0 0 1 15 4.5V5', 'b')]
  },
  'pencil': {
    t: [P('M4 20l4.5-1 10.3-10.3a2.1 2.1 0 0 0-3-3L5.5 16z')],
    s: [P('M4 20l4.5-1 10.3-10.3a2.1 2.1 0 0 0-3-3L5.5 16z'), P('M13.5 7.5l3 3', 'b')]
  },
  'trash': {
    t: [P('M6 7h12l-1 13H7z')],
    s: [P('M4 7h16M9 7V4.5A1.5 1.5 0 0 1 10.5 3h3A1.5 1.5 0 0 1 15 4.5V7M6 7l1 13h10l1-13M10 11v6M14 11v6')]
  },
  'link': {
    s: [P('M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.2 1.2M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.2-1.2')]
  },
  'paperclip': {
    s: [P('M20 11.5l-8.5 8.5a5 5 0 0 1-7-7l9-9a3.3 3.3 0 0 1 4.7 4.7l-9 9a1.7 1.7 0 0 1-2.4-2.4l8.4-8.4')]
  },
  'list': {
    d: [C(4, 6, 1.3), C(4, 12, 1.3, 'b'), C(4, 18, 1.3, 'c')],
    s: [P('M9 6h12M9 12h12M9 18h12')]
  },
  'grid': {
    t: [R(3, 3, 8, 8, 2), R(13, 13, 8, 8, 2, 'b')],
    s: [R(3, 3, 8, 8, 2), R(13, 3, 8, 8, 2, 'b'), R(3, 13, 8, 8, 2, 'c'), R(13, 13, 8, 8, 2, 'd')]
  },
  'loader': {
    s: [P('M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1')]
  },
  // Communication (Cory's channels)
  'message': {
    t: [P(BUBBLE)],
    s: [P(BUBBLE)]
  },
  'messages': {
    t: [P('M3 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8l-4 3z')],
    s: [P('M3 5a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H8l-4 3z'), P('M16 9h2a2 2 0 0 1 2 2v9l-3-3h-6a2 2 0 0 1-2-2v-2', 'b')]
  },
  'message-dots': {
    t: [P(BUBBLE)],
    s: [P(BUBBLE)],
    d: [C(8.5, 10.5, 1.1), C(12, 10.5, 1.1, 'b'), C(15.5, 10.5, 1.1, 'c')]
  },
  'send': {
    dir: 1,
    t: [P('M21 3L3 10.5l8 2.5 2.5 8z')],
    s: [P('M21 3L3 10.5l8 2.5 2.5 8zM21 3L11 13')]
  },
  'mail': {
    t: [R(3, 5, 18, 14, 3)],
    s: [R(3, 5, 18, 14, 3), P('M3.5 7.5l8.5 6 8.5-6', 'b')]
  },
  'phone': {
    t: [P(PHONE)],
    s: [P(PHONE)]
  },
  'phone-incoming': {
    t: [P(PHONE)],
    s: [P(PHONE), P('M21 3l-4.5 4.5M16.5 4V7.5H20', 'b')]
  },
  'phone-call': {
    t: [P(PHONE)],
    s: [P(PHONE), P('M15 5.5a4 4 0 0 1 3.5 3.5M15 2a7.5 7.5 0 0 1 7 7', 'b')]
  },
  'mic': {
    t: [R(9, 3, 6, 11, 3)],
    s: [R(9, 3, 6, 11, 3), P('M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6', 'b')]
  },
  'headset': {
    t: [R(3, 13, 4.5, 6.5, 1.75), R(16.5, 13, 4.5, 6.5, 1.75, 'b')],
    s: [P('M4 13v-1a8 8 0 0 1 16 0v1'), R(3, 13, 4.5, 6.5, 1.75, 'b'), R(16.5, 13, 4.5, 6.5, 1.75, 'c'), P('M18.5 19.5v.5a3 3 0 0 1-3 3H13', 'd')]
  },
  'video': {
    t: [R(3, 7, 13, 10, 2.5)],
    s: [R(3, 7, 13, 10, 2.5), P('M16 10.5l5-2.5v8l-5-2.5', 'b')]
  },
  'bell': {
    t: [P('M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z')],
    s: [P('M6 16v-5a6 6 0 0 1 12 0v5l1.5 2h-15z'), P('M10 21a2 2 0 0 0 4 0', 'b')]
  },
  'bell-off': {
    t: [P('M6 16v-5c0-.7.1-1.3.3-1.9L16.7 18H4.5z')],
    s: [P('M6.3 9.1A6 6 0 0 0 6 11v5l-1.5 2H17M18 13v-2a6 6 0 0 0-9-5.2M10 21a2 2 0 0 0 4 0M3 3l18 18')]
  },
  'inbox': {
    t: [P('M3 13h5l1.5 3h5l1.5-3h5v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z')],
    s: [P('M3 13h5l1.5 3h5l1.5-3h5v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'), P('M3 13l3.2-7.4A1 1 0 0 1 7.1 5h9.8a1 1 0 0 1 .9.6L21 13', 'b')]
  },
  'volume': {
    t: [P(SPEAKER)],
    s: [P(SPEAKER), P('M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12', 'b')]
  },
  'mute': {
    t: [P(SPEAKER)],
    s: [P(SPEAKER), P('M17 9l5 5M22 9l-5 5', 'b')]
  },
  'wifi-off': {
    d: [C(12, 19, 1.3)],
    s: [P('M2 8.5a16 16 0 0 1 5.5-3M10 5.2a16 16 0 0 1 12 3.3M5.5 12a11 11 0 0 1 4-2.3M14 10.2a11 11 0 0 1 4.5 1.8M8.5 15.5a6 6 0 0 1 7 0M3 3l18 18')]
  },
  // Time and planning
  'clock': {
    t: [C(12, 12, 9)],
    s: [C(12, 12, 9), P('M12 7v5l3.5 2', 'b')]
  },
  'timer': {
    t: [C(12, 14, 7.5)],
    s: [C(12, 14, 7.5), P('M12 10.5V14l2.5 1.5M10 2h4M12 2v4.5', 'b')]
  },
  'calendar': {
    t: [CAL],
    s: CAL_S
  },
  'calendar-check': {
    t: [CAL],
    s: [...CAL_S, P('M9 15.5l2 2 4-4.5', 'c')]
  },
  'zap': {
    t: [P('M13 2L4.5 13.5H11L10 22l8.5-11.5H12z')],
    s: [P('M13 2L4.5 13.5H11L10 22l8.5-11.5H12z')]
  },
  'sparkles': {
    t: [P('M12 3l1.9 5.6 5.6 1.9-5.6 1.9L12 18l-1.9-5.6-5.6-1.9 5.6-1.9z')],
    s: [P('M12 3l1.9 5.6 5.6 1.9-5.6 1.9L12 18l-1.9-5.6-5.6-1.9 5.6-1.9z'), P('M19 17v4M17 19h4M5 3v3M3.5 4.5h3', 'b')]
  },
  'target': {
    t: [C(12, 12, 5.5)],
    s: [C(12, 12, 9), C(12, 12, 5.5, 'b')],
    d: [C(12, 12, 1.75)]
  },
  'lightbulb': {
    t: [P('M8 14.5a6 6 0 1 1 8 0 3 3 0 0 0-1 2.5H9a3 3 0 0 0-1-2.5z')],
    s: [P('M8 14.5a6 6 0 1 1 8 0 3 3 0 0 0-1 2.5H9a3 3 0 0 0-1-2.5z'), P('M10 21h4', 'b')]
  },
  'brain': {
    t: [P(LOBE), /*#__PURE__*/React.createElement("path", {
      key: "m",
      d: LOBE,
      transform: "matrix(-1 0 0 1 24 0)"
    })],
    s: [P(LOBE), /*#__PURE__*/React.createElement("path", {
      key: "m",
      d: LOBE,
      transform: "matrix(-1 0 0 1 24 0)"
    }), P('M9 9.5a2.5 2.5 0 0 0 3 2M8 15a2.5 2.5 0 0 1 4-1M15 9.5a2.5 2.5 0 0 1-3 2M16 15a2.5 2.5 0 0 0-4-1', 'c')]
  },
  'plug': {
    t: [P('M6 7h12v4a6 6 0 0 1-12 0z')],
    s: [P('M12 22v-5M9 3v4M15 3v4M6 7h12v4a6 6 0 0 1-12 0z')]
  },
  'rocket': {
    t: [P('M12 2.5c3.6 2.4 5.5 6.6 5.5 11.5l-2.5 3.5H9L6.5 14c0-4.9 1.9-9.1 5.5-11.5z')],
    s: [P('M12 2.5c3.6 2.4 5.5 6.6 5.5 11.5l-2.5 3.5H9L6.5 14c0-4.9 1.9-9.1 5.5-11.5zM6.5 14l-3 3 3.5.5M17.5 14l3 3-3.5.5M10 17.5l2 4 2-4')],
    d: [C(12, 10, 1.75)]
  },
  // People and places
  'user': {
    t: [C(12, 8, 4)],
    s: [C(12, 8, 4), P('M4.5 21a7.5 7.5 0 0 1 15 0', 'b')]
  },
  'users': {
    t: [C(9, 8, 3.5)],
    s: [C(9, 8, 3.5), P('M2.5 20a6.5 6.5 0 0 1 13 0M16 4.5a3.5 3.5 0 0 1 0 7M18.5 14.5a6 6 0 0 1 3 5.5', 'b')]
  },
  'graduation-cap': {
    t: [P('M2 9.5L12 5l10 4.5L12 14z')],
    s: [P('M2 9.5L12 5l10 4.5L12 14zM6 11.5v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5M22 9.5v6')]
  },
  'building': {
    t: [R(4, 3, 16, 18, 2)],
    s: [R(4, 3, 16, 18, 2), P('M9 7.5h1.5M13.5 7.5H15M9 11.5h1.5M13.5 11.5H15M10 21v-3.5h4V21', 'b')]
  },
  'home': {
    t: [P('M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z')],
    s: [P('M4 10.5L12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1z')]
  },
  'pin': {
    t: [P('M12 21.5s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z')],
    s: [P('M12 21.5s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z'), C(12, 9.5, 2.5, 'b')]
  },
  'globe': {
    t: [C(12, 12, 9)],
    s: [C(12, 12, 9), P('M3 12h18M12 3c2.8 2.4 4 5.5 4 9s-1.2 6.6-4 9c-2.8-2.4-4-5.5-4-9s1.2-6.6 4-9z', 'b')]
  },
  'heart': {
    t: [P('M12 20.5S3.5 15.3 3.5 9.3A4.5 4.5 0 0 1 12 6.8a4.5 4.5 0 0 1 8.5 2.5c0 6-8.5 11.2-8.5 11.2z')],
    s: [P('M12 20.5S3.5 15.3 3.5 9.3A4.5 4.5 0 0 1 12 6.8a4.5 4.5 0 0 1 8.5 2.5c0 6-8.5 11.2-8.5 11.2z')]
  },
  'star': {
    t: [P('M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z')],
    s: [P('M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L3.5 9.7l5.9-.8z')]
  },
  'thumbs-up': {
    t: [R(3, 11, 4, 10, 1)],
    s: [R(3, 11, 4, 10, 1), P('M7 11l4-7.5a2 2 0 0 1 3.5 1.5L14 9h5a2 2 0 0 1 2 2.3l-1.3 7A2 2 0 0 1 17.7 20H7', 'b')]
  },
  'eye': {
    t: [P('M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z')],
    s: [P('M2.5 12s3.5-6.5 9.5-6.5 9.5 6.5 9.5 6.5-3.5 6.5-9.5 6.5S2.5 12 2.5 12z'), C(12, 12, 3, 'b')]
  },
  'pointer': {
    t: [P('M5.5 4.5L18.5 10l-5.5 2.2L10.8 18z')],
    s: [P('M5.5 4.5L18.5 10l-5.5 2.2L10.8 18z')]
  },
  // Documents and data
  'file': {
    t: [P(FILE)],
    s: [P(FILE), P('M14 3v5h5', 'b')]
  },
  'file-plus': {
    t: [P(FILE)],
    s: [P(FILE), P('M14 3v5h5M12 12v6M9 15h6', 'b')]
  },
  'file-text': {
    t: [P(FILE)],
    s: [P(FILE), P('M14 3v5h5M9 13h6M9 17h4', 'b')]
  },
  'clipboard-list': {
    t: [R(9, 2, 6, 4, 1)],
    s: [R(5, 4, 14, 17, 2.5), R(9, 2, 6, 4, 1, 'b'), P('M9 12h6M9 16h4', 'c')]
  },
  'clipboard-check': {
    t: [R(9, 2, 6, 4, 1)],
    s: [R(5, 4, 14, 17, 2.5), R(9, 2, 6, 4, 1, 'b'), P('M9 14l2 2 4-4.5', 'c')]
  },
  'chart': {
    t: [R(5, 12, 4, 8, 1.25), R(10, 5, 4, 15, 1.25, 'b'), R(15, 15, 4, 5, 1.25, 'c')],
    s: [R(5, 12, 4, 8, 1.25), R(10, 5, 4, 15, 1.25, 'b'), R(15, 15, 4, 5, 1.25, 'c')]
  },
  'trending-up': {
    dir: 1,
    s: [P('M3 17l6-6 4 4 8-8M15 7h6v6')]
  },
  'dollar': {
    s: [P('M12 3v18M16.5 7.5A3.5 3.5 0 0 0 13 5h-2.5a3 3 0 0 0 0 6h3a3 3 0 0 1 0 6H10.5a3.5 3.5 0 0 1-3.5-2.5')]
  },
  'percent': {
    t: [C(6.5, 6.5, 2.5), C(17.5, 17.5, 2.5, 'b')],
    s: [P('M19 5L5 19'), C(6.5, 6.5, 2.5, 'b'), C(17.5, 17.5, 2.5, 'c')]
  },
  'tag': {
    t: [P('M3 3h8.5l9.5 9.5-8.5 8.5L3 11.5z')],
    s: [P('M3 3h8.5l9.5 9.5-8.5 8.5L3 11.5z')],
    d: [C(7.5, 7.5, 1.25)]
  },
  'image': {
    t: [R(3, 4, 18, 16, 2.5)],
    s: [R(3, 4, 18, 16, 2.5), P('M3 16l5-5 4 4 3-3 6 6', 'b')],
    d: [C(16, 9, 1.5)]
  },
  'bookmark': {
    t: [P('M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4z')],
    s: [P('M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-4-6 4z')]
  },
  'lock': {
    t: [R(5, 11, 14, 10, 2.5)],
    s: [R(5, 11, 14, 10, 2.5), P('M8 11V8a4 4 0 0 1 8 0v3', 'b')],
    d: [C(12, 16, 1.25)]
  },
  'shield': {
    t: [P(SHIELD)],
    s: [P(SHIELD), P('M9 12l2 2 4-4.5', 'b')]
  },
  // Feedback
  'info': {
    t: [C(12, 12, 9)],
    s: [C(12, 12, 9), P('M12 11v5M12 8h.01', 'b')]
  },
  'help': {
    t: [C(12, 12, 9)],
    s: [C(12, 12, 9), P('M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7M12 17h.01', 'b')]
  },
  'warning': {
    t: [P('M10.3 4.5a2 2 0 0 1 3.4 0l7.6 13a2 2 0 0 1-1.7 3H4.4a2 2 0 0 1-1.7-3z')],
    s: [P('M10.3 4.5a2 2 0 0 1 3.4 0l7.6 13a2 2 0 0 1-1.7 3H4.4a2 2 0 0 1-1.7-3z'), P('M12 10v4M12 17.5h.01', 'b')]
  },
  'alert': {
    t: [C(12, 12, 9)],
    s: [C(12, 12, 9), P('M12 8v5M12 16.5h.01', 'b')]
  },
  'check-circle': {
    t: [C(12, 12, 9)],
    s: [C(12, 12, 9), P('M8.5 12.5l2.5 2.5 4.5-5', 'b')]
  },
  'x-circle': {
    t: [C(12, 12, 9)],
    s: [C(12, 12, 9), P('M9 9l6 6M15 9l-6 6', 'b')]
  },
  // Theme and media
  'sun': {
    t: [C(12, 12, 4)],
    s: [C(12, 12, 4), P('M12 2.5v2M12 19.5v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2.5 12h2M19.5 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4', 'b')]
  },
  'moon': {
    t: [P('M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z')],
    s: [P('M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z')]
  },
  'play': {
    t: [P('M7 4.5v15l12-7.5z')],
    s: [P('M7 4.5v15l12-7.5z')]
  },
  'pause': {
    t: [R(6, 4, 4.5, 16, 1.5), R(13.5, 4, 4.5, 16, 1.5, 'b')],
    s: [R(6, 4, 4.5, 16, 1.5), R(13.5, 4, 4.5, 16, 1.5, 'b')]
  }
};

/** Lucide and legacy names resolve to the Cory set, so existing kits keep working. */
const ICON_ALIASES = {
  'x': 'close',
  'ellipsis': 'more',
  'more-horizontal': 'more',
  'refresh-cw': 'refresh',
  'rotate-cw': 'refresh',
  'repeat-2': 'repeat',
  'message-square': 'message',
  'message-circle': 'message-dots',
  'messages-square': 'messages',
  'message-square-more': 'message-dots',
  'alert-triangle': 'warning',
  'triangle-alert': 'warning',
  'alert-circle': 'alert',
  'circle-alert': 'alert',
  'circle-check': 'check-circle',
  'circle-x': 'x-circle',
  'help-circle': 'help',
  'circle-help': 'help',
  'map-pin': 'pin',
  'edit': 'pencil',
  'edit-2': 'pencil',
  'trash-2': 'trash',
  'volume-2': 'volume',
  'volume-x': 'mute',
  'bar-chart': 'chart',
  'bar-chart-3': 'chart',
  'chart-bar': 'chart',
  'layout-grid': 'grid',
  'sliders-horizontal': 'settings',
  'cog': 'settings',
  'workflow': 'arrow-right-left',
  'shield-check': 'shield',
  'school': 'graduation-cap',
  'building-2': 'building',
  'mouse-pointer': 'pointer',
  'mouse-pointer-2': 'pointer',
  'dollar-sign': 'dollar',
  'bolt': 'zap',
  'loader-2': 'loader',
  'phone-outgoing': 'phone-call',
  'badge-check': 'check-circle',
  'circle-dot': 'target',
  'file-check': 'clipboard-check'
};
const ICON_NAMES = Object.keys(ICONS);

/**
 * Icon: one of the Cory set by name. Inherits currentColor; duotone tint on by default.
 * Directional icons carry .cory-flip-rtl and mirror under dir="rtl" (check, search, close never do).
 */
function Icon({
  name,
  size = 20,
  duotone = true,
  strokeWidth = 1.75,
  label,
  className,
  style,
  ...rest
}) {
  const key = ICONS[name] ? name : ICON_ALIASES[name];
  const def = ICONS[key];
  if (!def) {
    if (typeof console !== 'undefined') console.warn(`Icon: unknown name "${name}"`);
    return /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        display: 'inline-block',
        width: size,
        height: size,
        ...style
      }
    });
  }
  const cls = [className, def.dir ? 'cory-flip-rtl' : null].filter(Boolean).join(' ') || undefined;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    className: cls,
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    focusable: "false",
    style: {
      display: 'inline-block',
      flexShrink: 0,
      verticalAlign: 'middle',
      ...style
    }
  }, rest), duotone && def.t && /*#__PURE__*/React.createElement("g", {
    fill: "currentColor",
    opacity: "0.2",
    stroke: "none"
  }, def.t), def.s && /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, def.s), def.d && /*#__PURE__*/React.createElement("g", {
    fill: "currentColor",
    stroke: "none"
  }, def.d));
}
Object.assign(__ds_scope, { ICONS, ICON_ALIASES, ICON_NAMES, Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/illustrations/Illustration.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/*
 * Cory spot illustrations. One language: the solid Cory tile is the subject; props around it are
 * duotone (tinted fill + 2-unit stroke) drawn from the icon set; the brand glow sits behind.
 * 240 x 180 art box. Colours are tokens, so light, dark and on-ink all resolve by themselves.
 */
const LIGHT = {
  tile: 'var(--text-strong)',
  glyph: 'var(--surface-card)',
  tint: 'var(--surface-info)',
  line: 'var(--text-info)',
  mutedTint: 'var(--surface-sunken)',
  muted: 'var(--border-strong)',
  dash: 'var(--border-interactive)',
  success: ['var(--surface-success)', 'var(--text-success)'],
  warning: ['var(--surface-warning)', 'var(--text-warning)'],
  danger: ['var(--surface-danger)', 'var(--text-danger)']
};
const INK = {
  tile: '#F4F5FA',
  glyph: '#0B1F36',
  tint: 'rgba(255,255,255,0.12)',
  line: 'var(--on-ink-link)',
  mutedTint: 'rgba(255,255,255,0.06)',
  muted: 'var(--on-ink-border-strong)',
  dash: 'var(--on-ink-border-strong)',
  success: ['rgba(95,217,165,0.16)', 'var(--on-ink-success)'],
  warning: ['rgba(255,199,102,0.16)', 'var(--on-ink-warning)'],
  danger: ['rgba(255,138,142,0.16)', 'var(--on-ink-danger)']
};
const bubble = (x, y, w, h, tail) => {
  const r = 10;
  const t = tail === 'br' ? `H${x + w - 13}L${x + w - 12} ${y + h + 11}L${x + w - 24} ${y + h}` : `H${x + 24}L${x + 12} ${y + h + 11}L${x + 13} ${y + h}`;
  return `M${x + r} ${y}H${x + w - r}A${r} ${r} 0 0 1 ${x + w} ${y + r}V${y + h - r}A${r} ${r} 0 0 1 ${x + w - r} ${y + h}${t}H${x + r}A${r} ${r} 0 0 1 ${x} ${y + h - r}V${y + r}A${r} ${r} 0 0 1 ${x + r} ${y}Z`;
};

/** An icon from the set, placed and scaled inside the art box. */
function Glyph({
  name,
  cx,
  cy,
  size = 24,
  stroke,
  tint
}) {
  const def = __ds_scope.ICONS[name];
  if (!def) return null;
  const k = size / 24;
  return /*#__PURE__*/React.createElement("g", {
    transform: `translate(${cx - 12 * k} ${cy - 12 * k}) scale(${k})`
  }, tint && def.t && /*#__PURE__*/React.createElement("g", {
    fill: tint,
    stroke: "none"
  }, def.t), def.s && /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: stroke,
    strokeWidth: 2 / k,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, def.s), def.d && /*#__PURE__*/React.createElement("g", {
    fill: stroke,
    stroke: "none"
  }, def.d));
}
function Bubble({
  x,
  y,
  w,
  h,
  tail,
  p,
  dots = true
}) {
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    d: bubble(x, y, w, h, tail),
    fill: p.tint,
    stroke: p.line,
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), dots && [0, 1, 2].map(i => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: x + w / 2 + (i - 1) * 11,
    cy: y + h / 2,
    r: "3",
    fill: p.line
  })));
}
function Badge({
  cx,
  cy,
  r = 20,
  tone,
  p,
  name
}) {
  const [tint, line] = tone ? p[tone] : [p.tint, p.line];
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: tint,
    stroke: line,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement(Glyph, {
    name: name,
    cx: cx,
    cy: cy,
    size: r * 1.15,
    stroke: line
  }));
}
function Spark({
  cx,
  cy,
  s = 10,
  fill
}) {
  return /*#__PURE__*/React.createElement("path", {
    d: `M${cx} ${cy - s}Q${cx} ${cy} ${cx + s} ${cy}Q${cx} ${cy} ${cx} ${cy + s}Q${cx} ${cy} ${cx - s} ${cy}Q${cx} ${cy} ${cx} ${cy - s}Z`,
    fill: fill
  });
}
function Ring({
  cx,
  cy,
  r,
  p
}) {
  return /*#__PURE__*/React.createElement("circle", {
    cx: cx,
    cy: cy,
    r: r,
    fill: "none",
    stroke: p.dash,
    strokeWidth: "1.5",
    strokeDasharray: "4 7",
    strokeLinecap: "round"
  });
}
function MiniCard({
  x,
  y,
  w,
  h,
  p,
  name
}) {
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: x,
    y: y,
    width: w,
    height: h,
    rx: "10",
    fill: p.mutedTint,
    stroke: p.muted,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement(Glyph, {
    name: name,
    cx: x + w / 2,
    cy: y + h / 2 - 6,
    size: 20,
    stroke: p.line
  }), /*#__PURE__*/React.createElement("rect", {
    x: x + 10,
    y: y + h - 14,
    width: w - 20,
    height: "4",
    rx: "2",
    fill: p.muted
  }));
}
const SCENES = {
  empty: (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Bubble, {
    x: 140,
    y: 28,
    w: 66,
    h: 40,
    tail: "bl",
    p: p
  }), /*#__PURE__*/React.createElement("rect", {
    x: "40",
    y: "118",
    width: "62",
    height: "28",
    rx: "9",
    fill: "none",
    stroke: p.dash,
    strokeWidth: "2",
    strokeDasharray: "5 6",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(Spark, {
    cx: 62,
    cy: 44,
    s: 8,
    fill: g
  }), /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 84,
    y: 54,
    size: 72,
    tile: p.tile,
    glyph: p.glyph
  })),
  search: (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 74,
    y: 46,
    size: 72,
    tile: p.tile,
    glyph: p.glyph
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "156",
    cy: "112",
    r: "24",
    fill: p.tint,
    stroke: p.line,
    strokeWidth: "2.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M173 129l18 18",
    stroke: p.line,
    strokeWidth: "5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M146 104a12 12 0 0 1 9-5",
    stroke: p.line,
    strokeWidth: "2",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement(Spark, {
    cx: 50,
    cy: 38,
    s: 8,
    fill: g
  })),
  error: (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 76,
    y: 56,
    size: 72,
    tile: p.tile,
    glyph: p.glyph
  }), /*#__PURE__*/React.createElement(Badge, {
    cx: 162,
    cy: 52,
    r: 24,
    tone: "warning",
    p: p,
    name: "warning"
  }), /*#__PURE__*/React.createElement(Badge, {
    cx: 56,
    cy: 128,
    r: 13,
    tone: "danger",
    p: p,
    name: "close"
  })),
  offline: (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 66,
    y: 54,
    size: 72,
    tile: p.tile,
    glyph: p.glyph
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: p.muted,
    strokeWidth: "3",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M156 76a30 30 0 0 1 42 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M165 88a17 17 0 0 1 24 0"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M174 100a5 5 0 0 1 6 0"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M152 58l48 48",
    stroke: p.danger[1],
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "46",
    y: "138",
    width: "112",
    height: "6",
    rx: "3",
    fill: p.mutedTint,
    stroke: p.muted,
    strokeWidth: "1.5"
  })),
  success: (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 76,
    y: 48,
    size: 72,
    tile: p.tile,
    glyph: p.glyph
  }), /*#__PURE__*/React.createElement(Badge, {
    cx: 160,
    cy: 120,
    r: 24,
    tone: "success",
    p: p,
    name: "check"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "52",
    cy: "48",
    r: "4",
    fill: g
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "186",
    cy: "48",
    r: "3",
    fill: p.success[1]
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "44",
    cy: "124",
    r: "3",
    fill: p.line
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "196",
    cy: "84",
    r: "2.5",
    fill: g
  }), /*#__PURE__*/React.createElement(Spark, {
    cx: 66,
    cy: 132,
    s: 7,
    fill: g
  })),
  connect: (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(MiniCard, {
    x: 12,
    y: 62,
    w: 52,
    h: 56,
    p: p,
    name: "file-text"
  }), /*#__PURE__*/React.createElement(MiniCard, {
    x: 176,
    y: 62,
    w: 52,
    h: 56,
    p: p,
    name: "calendar"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M64 90h20M156 90h20",
    stroke: p.dash,
    strokeWidth: "2",
    strokeDasharray: "4 5",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 84,
    y: 54,
    size: 72,
    tile: p.tile,
    glyph: p.glyph
  }), /*#__PURE__*/React.createElement(Badge, {
    cx: 156,
    cy: 58,
    r: 13,
    p: p,
    name: "plug"
  })),
  invite: (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 84,
    y: 42,
    size: 72,
    tile: p.tile,
    glyph: p.glyph
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "50",
    cy: "128",
    r: "22",
    fill: p.tint,
    stroke: p.line,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement(Glyph, {
    name: "user",
    cx: 50,
    cy: 128,
    size: 26,
    stroke: p.line
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "190",
    cy: "128",
    r: "22",
    fill: p.tint,
    stroke: p.line,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement(Glyph, {
    name: "user",
    cx: 190,
    cy: 128,
    size: 26,
    stroke: p.line
  }), /*#__PURE__*/React.createElement(Badge, {
    cx: 162,
    cy: 52,
    r: 13,
    p: p,
    name: "plus"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M72 120h20M148 120h20",
    stroke: p.dash,
    strokeWidth: "2",
    strokeDasharray: "4 5",
    strokeLinecap: "round"
  })),
  launch: (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Ring, {
    cx: 120,
    cy: 90,
    r: 62,
    p: p
  }), /*#__PURE__*/React.createElement(Ring, {
    cx: 120,
    cy: 90,
    r: 82,
    p: p
  }), /*#__PURE__*/React.createElement("path", {
    d: "M28 72h22M18 90h32M28 108h22",
    stroke: p.muted,
    strokeWidth: "3",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 84,
    y: 54,
    size: 72,
    tile: p.tile,
    glyph: p.glyph
  }), /*#__PURE__*/React.createElement(Glyph, {
    name: "zap",
    cx: 170,
    cy: 44,
    size: 34,
    stroke: p.line,
    tint: p.tint
  }), /*#__PURE__*/React.createElement(Spark, {
    cx: 196,
    cy: 120,
    s: 7,
    fill: g
  })),
  'not-found': (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 66,
    y: 60,
    size: 72,
    tile: p.tile,
    glyph: p.glyph
  }), /*#__PURE__*/React.createElement("path", {
    d: "M140 96c10-10 14-28 28-36",
    stroke: p.dash,
    strokeWidth: "2",
    strokeDasharray: "4 5",
    strokeLinecap: "round",
    fill: "none"
  }), /*#__PURE__*/React.createElement(Glyph, {
    name: "pin",
    cx: 176,
    cy: 56,
    size: 56,
    stroke: p.line,
    tint: p.tint
  }), /*#__PURE__*/React.createElement(Badge, {
    cx: 56,
    cy: 48,
    r: 13,
    p: p,
    name: "help"
  })),
  hero: (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Ring, {
    cx: 120,
    cy: 90,
    r: 78,
    p: p
  }), /*#__PURE__*/React.createElement(Bubble, {
    x: 6,
    y: 34,
    w: 64,
    h: 40,
    tail: "br",
    p: p
  }), /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 78,
    y: 48,
    size: 84,
    tile: p.tile,
    glyph: p.glyph
  }), /*#__PURE__*/React.createElement(Badge, {
    cx: 184,
    cy: 126,
    r: 22,
    tone: "success",
    p: p,
    name: "calendar-check"
  }), /*#__PURE__*/React.createElement(Glyph, {
    name: "phone-call",
    cx: 190,
    cy: 50,
    size: 32,
    stroke: p.line,
    tint: p.tint
  }), /*#__PURE__*/React.createElement(Spark, {
    cx: 50,
    cy: 130,
    s: 9,
    fill: g
  })),
  cover: (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Ring, {
    cx: 120,
    cy: 90,
    r: 70,
    p: p
  }), /*#__PURE__*/React.createElement(Ring, {
    cx: 120,
    cy: 90,
    r: 96,
    p: p
  }), /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 76,
    y: 46,
    size: 88,
    tile: p.tile,
    glyph: p.glyph
  }), /*#__PURE__*/React.createElement(Spark, {
    cx: 192,
    cy: 36,
    s: 11,
    fill: g
  }), /*#__PURE__*/React.createElement(Spark, {
    cx: 40,
    cy: 140,
    s: 7,
    fill: g
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "48",
    cy: "48",
    r: "3",
    fill: p.line
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "200",
    cy: "130",
    r: "3",
    fill: p.line
  })),
  email: (p, g) => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    x: "68",
    y: "108",
    width: "104",
    height: "58",
    rx: "10",
    fill: p.tint,
    stroke: p.line,
    strokeWidth: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M70 114l50 32 50-32",
    fill: "none",
    stroke: p.line,
    strokeWidth: "2",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement(__ds_scope.CoryMark, {
    x: 88,
    y: 34,
    size: 64,
    tile: p.tile,
    glyph: p.glyph
  }), /*#__PURE__*/React.createElement(Spark, {
    cx: 184,
    cy: 60,
    s: 8,
    fill: g
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "52",
    cy: "76",
    r: "3",
    fill: p.line
  }))
};
const ILLUSTRATION_SCENES = Object.keys(SCENES);

/**
 * Illustration: a Cory spot scene for empty, error, onboarding, hero, cover and email surfaces.
 * Sized by width (height follows 4:3). onInk swaps to the on-ink palette for navy panels.
 */
function Illustration({
  scene = 'empty',
  width = 200,
  glow = true,
  onInk = false,
  label,
  style,
  ...rest
}) {
  const uid = React.useId ? React.useId().replace(/:/g, '') : 'i';
  const gid = `cory_ill_${uid}`;
  const p = onInk ? INK : LIGHT;
  const draw = SCENES[scene] || SCENES.empty;
  const w = typeof width === 'number' ? `${width}px` : width;
  return /*#__PURE__*/React.createElement("svg", _extends({
    viewBox: "0 0 240 180",
    width: w,
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : 'true',
    focusable: "false",
    style: {
      display: 'block',
      height: 'auto',
      maxWidth: '100%',
      overflow: 'visible',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("radialGradient", {
    id: `${gid}_glow`
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#29BEDD",
    stopOpacity: onInk ? 0.3 : 0.22
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#29BEDD",
    stopOpacity: "0"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: `${gid}_brand`,
    x1: "0",
    y1: "0",
    x2: "1",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#258AFD"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#29BEDD"
  }))), glow && /*#__PURE__*/React.createElement("ellipse", {
    cx: "120",
    cy: "96",
    rx: "110",
    ry: "74",
    fill: `url(#${gid}_glow)`
  }), draw(p, `url(#${gid}_brand)`));
}
Object.assign(__ds_scope, { ILLUSTRATION_SCENES, Illustration });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/illustrations/Illustration.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Nothing here yet. voice="cory" shows the mascot and expects first-person copy;
 * voice="neutral" shows an icon tile for admin surfaces. scene swaps the mascot for a spot illustration. onInk for navy panels.
 */
function EmptyState({
  voice = 'cory',
  icon,
  scene,
  title,
  children,
  action,
  secondaryAction,
  size = 'md',
  variant = 'card',
  onInk = false,
  style,
  ...rest
}) {
  const sm = size === 'sm';
  const c = onInk ? {
    title: 'var(--on-ink-strong)',
    body: 'var(--on-ink-body)',
    tile: 'var(--on-ink-fill)',
    tileFg: 'var(--on-ink-link)',
    border: 'var(--on-ink-border-strong)'
  } : {
    title: 'var(--text-strong)',
    body: 'var(--text-muted)',
    tile: 'var(--surface-info)',
    tileFg: 'var(--text-info)',
    border: 'var(--border-default)'
  };
  const frame = variant === 'card' ? {
    border: `1px dashed ${c.border}`,
    borderRadius: 'var(--radius-xl)',
    background: onInk ? 'transparent' : 'var(--surface-card)'
  } : null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: sm ? 10 : 14,
      padding: sm ? '24px 20px' : '40px 28px',
      fontFamily: 'var(--font-sans)',
      ...frame,
      ...style
    }
  }, rest), scene ? /*#__PURE__*/React.createElement(__ds_scope.Illustration, {
    scene: scene,
    width: sm ? 128 : 184,
    onInk: onInk,
    style: {
      marginBlock: sm ? -8 : -12
    }
  }) : voice === 'cory' ? /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    kind: onInk ? 'cory-light' : 'cory',
    size: sm ? 44 : 60
  }) : icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-grid',
      placeItems: 'center',
      width: sm ? 44 : 56,
      height: sm ? 44 : 56,
      borderRadius: 'var(--radius-md)',
      background: c.tile,
      color: c.tileFg
    }
  }, icon) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      maxWidth: '44ch'
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: sm ? 'var(--text-ui-lg)' : 'var(--text-h4)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-tight)',
      lineHeight: 1.3,
      color: c.title
    }
  }, title), children && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--text-ui-sm)',
      lineHeight: 1.55,
      color: c.body
    }
  }, children)), (action || secondaryAction) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: 10,
      marginTop: 2
    }
  }, action, secondaryAction));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/status/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Determinate progress (value 0..max) or indeterminate (no value) bar with optional label and percentage.
 */
function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  size = 'md',
  tone = 'brand',
  style,
  ...rest
}) {
  const indeterminate = value === undefined || value === null;
  const pct = indeterminate ? 0 : Math.min(100, Math.max(0, value / max * 100));
  const fills = {
    brand: 'var(--gradient-brand-deep)',
    success: 'var(--text-success)',
    warning: 'var(--text-warning)',
    danger: 'var(--text-danger)'
  }; // 700-step tones: every fill reads ≥3:1 against the track
  const fill = fills[tone] || fills.brand;
  const h = size === 'sm' ? 4 : 8;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, rest), (label || showValue && !indeterminate) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 12,
      fontSize: 'var(--text-label)',
      fontWeight: 'var(--weight-medium)',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && !indeterminate && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono-sm)',
      color: 'var(--text-muted)',
      direction: 'ltr',
      unicodeBidi: 'isolate'
    }
  }, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-label": typeof label === 'string' ? label : undefined,
    "aria-valuemin": 0,
    "aria-valuemax": max,
    "aria-valuenow": indeterminate ? undefined : Math.round(value),
    "aria-valuetext": indeterminate ? 'Loading' : undefined,
    style: {
      position: 'relative',
      height: h,
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-skeleton)',
      overflow: 'hidden'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      insetBlock: 0,
      insetInlineStart: 0,
      width: '40%',
      borderRadius: 'inherit',
      background: fill,
      animation: 'cory-progress-slide 1.4s var(--ease-in-out) infinite'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      height: '100%',
      width: `${pct}%`,
      borderRadius: 'inherit',
      background: fill,
      transition: 'width var(--duration-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/status/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Loading placeholder that mirrors the shape of the content it stands in for.
 * aria-hidden; put aria-busy="true" on the region while skeletons show.
 */
function Skeleton({
  variant = 'text',
  width,
  height,
  lines = 1,
  radius,
  style,
  ...rest
}) {
  const base = {
    display: 'block',
    background: 'linear-gradient(90deg, var(--surface-skeleton) 0%, var(--surface-skeleton-shine) 50%, var(--surface-skeleton) 100%)',
    backgroundSize: '200% 100%',
    animation: 'cory-shimmer 1.6s linear infinite',
    borderRadius: radius ?? (variant === 'circle' ? '50%' : variant === 'text' ? 'var(--radius-xs)' : 'var(--radius-md)')
  };
  if (variant === 'text') {
    return /*#__PURE__*/React.createElement("span", _extends({
      "aria-hidden": "true",
      style: {
        display: 'flex',
        flexDirection: 'column',
        gap: '0.55em',
        width: width ?? '100%',
        ...style
      }
    }, rest), Array.from({
      length: Math.max(1, lines)
    }).map((_, i) => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        ...base,
        height: height ?? '0.9em',
        width: lines > 1 && i === lines - 1 ? '62%' : '100%'
      }
    })));
  }
  const d = variant === 'circle' ? width ?? height ?? 40 : null;
  return /*#__PURE__*/React.createElement("span", _extends({
    "aria-hidden": "true",
    style: {
      ...base,
      width: d ?? width ?? '100%',
      height: d ?? height ?? 120,
      flexShrink: 0,
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/status/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VH = {
  position: 'absolute',
  width: 1,
  height: 1,
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  whiteSpace: 'nowrap'
};
const reducedMotion = () => typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Indeterminate activity indicator for a single action or small region.
 * Under prefers-reduced-motion it renders static dots and shows the label.
 */
function Spinner({
  size = 20,
  label = 'Loading',
  showLabel = false,
  tone = 'brand',
  style,
  ...rest
}) {
  const reduced = reducedMotion();
  const color = tone === 'onInk' ? 'var(--on-ink-strong)' : tone === 'current' ? 'currentColor' : 'var(--action-primary)';
  const labelColor = tone === 'onInk' ? 'var(--on-ink-body)' : tone === 'current' ? 'currentColor' : 'var(--text-muted)';
  const visible = showLabel || reduced;
  return /*#__PURE__*/React.createElement("span", _extends({
    role: "status",
    "aria-live": "polite",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      color,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-ui-sm)',
      ...style
    }
  }, rest), reduced ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      gap: Math.max(2, size * 0.14)
    }
  }, [0.45, 1, 0.45].map((o, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: size * 0.24,
      height: size * 0.24,
      borderRadius: '50%',
      background: 'currentColor',
      opacity: o
    }
  }))) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: size,
      height: size,
      flexShrink: 0,
      borderRadius: '50%',
      border: `${Math.max(2, Math.round(size / 10))}px solid currentColor`,
      borderInlineEndColor: 'transparent',
      animation: 'cory-spin 0.8s linear infinite'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: visible ? {
      color: labelColor
    } : VH
  }, label));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/status/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
/**
 * Generic surface primitive. FeatureCard/StatCard are opinionated; Card is the blank tile
 * used for bento grids, case-study covers, and metadata panels.
 */
function Card({
  children,
  variant = 'default',
  padding = 'md',
  interactive = false,
  selected = false,
  href,
  as,
  style,
  className,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)'
  };
  const variants = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      color: 'var(--text-body)',
      boxShadow: 'var(--shadow-sm)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid transparent',
      color: 'var(--text-body)',
      boxShadow: 'none'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)',
      color: 'var(--text-body)',
      boxShadow: 'none'
    },
    ink: {
      background: 'var(--gradient-ink)',
      border: '1px solid var(--on-ink-border)',
      color: 'var(--on-ink-body)',
      boxShadow: 'var(--shadow-md)'
    },
    brand: {
      background: 'var(--gradient-brand-deep-135)',
      border: '1px solid transparent',
      color: 'var(--text-on-brand)',
      boxShadow: 'var(--shadow-brand)'
    }
  };
  const v = variants[variant] || variants.default;
  const lift = interactive && hover;
  const Tag = as || (href ? 'a' : 'div');
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    className: [variant === 'ink' || variant === 'brand' ? 'cory-on-ink' : '', className].filter(Boolean).join(' ') || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'block',
      position: 'relative',
      overflow: 'hidden',
      isolation: 'isolate',
      padding: pads[padding] ?? padding,
      borderRadius: 'var(--radius-xl)',
      textDecoration: 'none',
      cursor: interactive || href ? 'pointer' : undefined,
      transition: 'transform var(--duration-slow) var(--ease-out), box-shadow var(--duration-slow) var(--ease-out), border-color var(--duration-base) var(--ease-out)',
      transform: lift ? 'translateY(var(--lift-hover))' : 'none',
      ...v,
      ...(lift ? {
        boxShadow: variant === 'ink' ? 'var(--shadow-glow), var(--shadow-lg)' : 'var(--shadow-lg)'
      } : null),
      ...(selected ? {
        borderColor: 'var(--border-focus)',
        boxShadow: 'var(--shadow-focus)'
      } : null),
      ...style
    }
  }, rest), variant === 'ink' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: '60%',
      aspectRatio: '1',
      insetInlineEnd: '-20%',
      top: '-30%',
      background: 'var(--glow-cyan)',
      filter: 'blur(var(--blur-glow))',
      zIndex: -1,
      pointerEvents: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Card.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/DirectionToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useState
} = React;
/**
 * LTR / RTL switch. Writes dir and lang on <html>, persists to localStorage ('cory-dir'),
 * and fires a 'cory:direction' event. Every token and component mirrors from that one attribute.
 */
function DirectionToggle({
  size = 'md',
  variant = 'secondary',
  rtlLang = 'ar',
  ltrLang = 'en',
  storageKey = 'cory-dir',
  labels,
  onChange,
  style,
  ...rest
}) {
  const read = () => typeof document !== 'undefined' && document.documentElement.getAttribute('dir') === 'rtl' ? 'rtl' : 'ltr';
  const [dir, setDir] = useState(read);
  const apply = (next, persist) => {
    const html = document.documentElement;
    html.setAttribute('dir', next);
    html.setAttribute('lang', next === 'rtl' ? rtlLang : ltrLang);
    if (persist) {
      try {
        localStorage.setItem(storageKey, next);
      } catch (e) {}
    }
    setDir(next);
    window.dispatchEvent(new CustomEvent('cory:direction', {
      detail: {
        dir: next
      }
    }));
    onChange && onChange(next);
  };
  useEffect(() => {
    let saved = null;
    try {
      saved = localStorage.getItem(storageKey);
    } catch (e) {}
    if (saved && saved !== read()) apply(saved, false);
    const mo = new MutationObserver(() => setDir(read()));
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir']
    });
    return () => mo.disconnect();
  }, []);
  const h = {
    sm: 36,
    md: 44,
    lg: 52
  }[size] || 44;
  const l = labels || {
    ltr: 'LTR',
    rtl: 'RTL'
  };
  const looks = {
    secondary: {
      track: 'var(--surface-sunken)',
      border: 'var(--border-default)',
      on: 'var(--surface-card)',
      onText: 'var(--text-strong)',
      offText: 'var(--text-muted)'
    },
    onInk: {
      track: 'var(--on-ink-fill)',
      border: 'var(--on-ink-border)',
      on: 'var(--on-ink-strong)',
      onText: 'var(--navy-800)',
      offText: 'var(--on-ink-body)'
    }
  };
  const v = looks[variant] || looks.secondary;
  const seg = key => {
    const on = dir === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      type: "button",
      "aria-pressed": on,
      onClick: () => !on && apply(key, true),
      style: {
        flex: '1 1 0',
        minWidth: h,
        height: h - 8,
        padding: '0 12px',
        border: 0,
        borderRadius: 'var(--radius-pill)',
        cursor: on ? 'default' : 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: size === 'sm' ? 'var(--text-micro)' : 'var(--text-caption)',
        fontWeight: 'var(--weight-bold)',
        letterSpacing: '0.04em',
        whiteSpace: 'nowrap',
        background: on ? v.on : 'transparent',
        color: on ? v.onText : v.offText,
        boxShadow: on ? 'var(--shadow-xs)' : 'none',
        transition: 'background var(--duration-base) var(--ease-out), color var(--duration-base) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("bdi", null, l[key]));
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "group",
    "aria-label": "Reading direction",
    dir: "ltr",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 2,
      padding: 3,
      height: h,
      borderRadius: 'var(--radius-pill)',
      background: v.track,
      border: `1px solid ${v.border}`,
      ...style
    }
  }, rest), seg('ltr'), seg('rtl'));
}
Object.assign(__ds_scope, { DirectionToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/DirectionToggle.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/MediaFrame.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useRef
} = React;
/**
 * Media frame: poster/image/video in a rounded tile with a fixed aspect ratio.
 * Video: play affordance, mute toggle, optional autoplay loop (muted).
 */
function MediaFrame({
  src,
  poster,
  alt = '',
  ratio = '16 / 9',
  video = false,
  autoplay = false,
  loop = true,
  caption,
  radius = 'var(--radius-xl)',
  fit = 'cover',
  overlay,
  style,
  ...rest
}) {
  const [playing, setPlaying] = useState(autoplay);
  const [muted, setMuted] = useState(true);
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const toggle = () => {
    const v = ref.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };
  const ctl = {
    display: 'inline-grid',
    placeItems: 'center',
    width: 44,
    height: 44,
    borderRadius: 'var(--radius-pill)',
    background: 'rgba(11,31,54,0.62)',
    color: '#fff',
    border: '1px solid rgba(255,255,255,0.28)',
    backdropFilter: 'blur(8px)',
    cursor: 'pointer',
    fontSize: 16,
    lineHeight: 1
  };
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      aspectRatio: ratio === 'auto' ? undefined : ratio,
      ...(ratio === 'auto' ? {
        height: '100%',
        minHeight: 160
      } : null),
      borderRadius: radius,
      overflow: 'hidden',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm)',
      isolation: 'isolate'
    }
  }, video ? /*#__PURE__*/React.createElement("video", {
    ref: ref,
    src: src,
    poster: poster,
    muted: muted,
    loop: loop,
    autoPlay: autoplay,
    playsInline: true,
    onClick: toggle,
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block',
      cursor: 'pointer',
      transition: 'transform var(--duration-slow) var(--ease-out)',
      transform: hover ? 'scale(1.02)' : 'scale(1)'
    }
  }) : src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block',
      transition: 'transform var(--duration-slow) var(--ease-out)',
      transform: hover ? 'scale(1.03)' : 'scale(1)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": alt || 'media placeholder',
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'repeating-linear-gradient(135deg, var(--surface-sunken) 0 10px, var(--surface-card) 10px 20px)',
      color: 'var(--text-subtle)',
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-mono)'
    }
  }, alt || 'drop media'), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(180deg, rgba(11,31,54,0) 30%, rgba(11,31,54,0.84) 100%)',
      pointerEvents: 'none'
    }
  }), overlay && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      insetInline: 20,
      bottom: 18,
      color: '#fff'
    }
  }, overlay), video && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      padding: 14,
      pointerEvents: 'none',
      opacity: hover || !playing ? 1 : 0,
      transition: 'opacity var(--duration-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": playing ? 'Pause' : 'Play',
    onClick: toggle,
    style: {
      ...ctl,
      pointerEvents: 'auto',
      width: playing ? 44 : 64,
      height: playing ? 44 : 64,
      fontSize: playing ? 16 : 22,
      background: playing ? ctl.background : 'var(--gradient-brand-deep)',
      border: playing ? ctl.border : '1px solid transparent',
      boxShadow: playing ? 'none' : 'var(--shadow-brand)',
      position: playing ? 'static' : 'absolute',
      left: '50%',
      top: '50%',
      transform: playing ? 'none' : 'translate(-50%,-50%)'
    }
  }, playing ? '❚❚' : '▶'), /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": muted ? 'Unmute' : 'Mute',
    "aria-pressed": !muted,
    onClick: () => {
      setMuted(!muted);
      if (ref.current) ref.current.muted = !muted;
    },
    style: {
      ...ctl,
      pointerEvents: 'auto',
      marginInlineStart: 'auto',
      width: 'auto',
      padding: '0 14px',
      fontSize: 12,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      letterSpacing: '0.02em'
    }
  }, muted ? 'Unmute' : 'Mute'))), caption && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      marginTop: 10,
      fontSize: 'var(--text-caption)',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { MediaFrame });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/MediaFrame.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useRef,
  useLayoutEffect,
  useEffect
} = React;
/**
 * Tabs / segmented control / filter bar. One component, three looks.
 * `underline` animates an indicator under the active tab; `segmented` slides a pill.
 * Keyboard: arrow keys move (mirrored in RTL), Home/End jump, disabled tabs are skipped.
 */
function Tabs({
  items = [],
  value,
  defaultValue,
  onChange,
  variant = 'underline',
  size = 'md',
  fullWidth = false,
  label,
  style,
  ...rest
}) {
  const enabled = items.filter(it => !it.disabled);
  const [inner, setInner] = useState(defaultValue ?? (enabled[0] && enabled[0].value));
  const active = value !== undefined ? value : inner;
  const refs = useRef({});
  const [ind, setInd] = useState({
    left: 0,
    width: 0
  });
  const listRef = useRef(null);
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const bump = () => setTick(n => n + 1);
    const mo = new MutationObserver(bump);
    mo.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['dir', 'lang']
    });
    const ro = typeof ResizeObserver !== 'undefined' ? new ResizeObserver(bump) : null;
    if (ro && listRef.current) ro.observe(listRef.current);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(bump);
    return () => {
      mo.disconnect();
      ro && ro.disconnect();
    };
  }, []);
  useLayoutEffect(() => {
    const el = refs.current[active];
    if (el) setInd({
      left: el.offsetLeft,
      width: el.offsetWidth
    });
  }, [active, items.length, size, tick]);
  const select = v => {
    if (value === undefined) setInner(v);
    onChange && onChange(v);
  };
  const onKey = e => {
    const keys = ['ArrowRight', 'ArrowLeft', 'Home', 'End'];
    if (!keys.includes(e.key) || !enabled.length) return;
    e.preventDefault();
    const rtl = listRef.current && getComputedStyle(listRef.current).direction === 'rtl';
    const i = Math.max(0, enabled.findIndex(it => it.value === active));
    let n = i;
    if (e.key === 'Home') n = 0;else if (e.key === 'End') n = enabled.length - 1;else {
      const fwd = e.key === 'ArrowRight' !== !!rtl;
      n = (i + (fwd ? 1 : -1) + enabled.length) % enabled.length;
    }
    const next = enabled[n].value;
    select(next);
    const el = refs.current[next];
    el && el.focus();
  };
  const fs = size === 'sm' ? 'var(--text-ui-sm)' : 'var(--text-ui)';
  const seg = variant === 'segmented';
  const pills = variant === 'pills';
  const h = size === 'sm' ? 36 : 44;
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    "aria-label": label,
    ref: listRef,
    onKeyDown: onKey,
    style: {
      position: 'relative',
      maxWidth: '100%',
      overflowX: 'auto',
      overflowY: 'hidden',
      scrollbarWidth: 'none',
      display: fullWidth ? 'grid' : 'inline-flex',
      gridTemplateColumns: fullWidth ? `repeat(${items.length}, 1fr)` : undefined,
      gap: seg ? 4 : pills ? 8 : 0,
      padding: seg ? 4 : 0,
      background: seg ? 'var(--surface-sunken)' : 'transparent',
      borderRadius: seg ? 'var(--radius-pill)' : 0,
      borderBottom: variant === 'underline' ? '1px solid var(--border-default)' : 'none',
      ...style
    }
  }, rest), seg && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      top: 4,
      bottom: 4,
      left: ind.left,
      width: ind.width,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-sm)',
      transition: 'left var(--duration-slow) var(--ease-out), width var(--duration-slow) var(--ease-out)'
    }
  }), variant === 'underline' && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      bottom: 0,
      height: 2,
      left: ind.left,
      width: ind.width,
      background: 'var(--gradient-brand)',
      borderRadius: 2,
      transition: 'left var(--duration-slow) var(--ease-out), width var(--duration-slow) var(--ease-out)'
    }
  }), items.map(it => {
    const on = it.value === active;
    const off = !!it.disabled;
    return /*#__PURE__*/React.createElement("button", {
      key: it.value,
      type: "button",
      role: "tab",
      "aria-selected": on,
      "aria-disabled": off || undefined,
      disabled: off,
      tabIndex: on ? 0 : -1,
      ref: el => {
        refs.current[it.value] = el;
      },
      onClick: () => !off && select(it.value),
      style: {
        position: 'relative',
        zIndex: 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
        height: seg ? h - 8 : h,
        padding: pills ? '0 16px' : '0 14px',
        fontSize: fs,
        fontFamily: 'var(--font-sans)',
        fontWeight: 'var(--weight-semibold)',
        letterSpacing: 'var(--tracking-ui)',
        whiteSpace: 'nowrap',
        cursor: off ? 'not-allowed' : 'pointer',
        border: pills ? `1px solid ${on ? 'var(--action-ink)' : 'var(--border-interactive)'}` : 'none',
        borderRadius: seg || pills ? 'var(--radius-pill)' : 0,
        background: pills && on ? 'var(--action-ink)' : 'transparent',
        opacity: off ? 'var(--opacity-disabled)' : 1,
        color: pills && on ? 'var(--surface-card)' : on ? 'var(--text-strong)' : 'var(--text-muted)',
        transition: 'color var(--duration-base) var(--ease-out), background var(--duration-base) var(--ease-out)'
      }
    }, it.icon, it.label, it.count !== undefined && /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 'var(--text-micro)',
        padding: '2px 7px',
        borderRadius: 'var(--radius-pill)',
        background: on && pills ? 'var(--on-ink-fill-hover)' : 'var(--surface-sunken)',
        color: 'inherit',
        direction: 'ltr',
        unicodeBidi: 'isolate'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useState
} = React;
/**
 * Light / dark switch. Writes data-theme on <html>, persists to localStorage ('cory-theme'),
 * and defaults to the OS preference. Pair with the color tokens' dark block.
 */
function ThemeToggle({
  size = 'md',
  variant = 'secondary',
  storageKey = 'cory-theme',
  style,
  ...rest
}) {
  const read = () => {
    if (typeof document === 'undefined') return 'light';
    const attr = document.documentElement.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };
  const [theme, setTheme] = useState(read);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved && saved !== theme) {
        setTheme(saved);
        return;
      }
    } catch (e) {}
    document.documentElement.setAttribute('data-theme', theme);
  }, []);
  const apply = next => {
    setTheme(next);
    document.documentElement.setAttribute('data-theme', next);
    try {
      localStorage.setItem(storageKey, next);
    } catch (e) {}
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  const dark = theme === 'dark';
  const px = {
    sm: 36,
    md: 44,
    lg: 52
  }[size] || 44;
  const looks = {
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border-interactive)'
    },
    ghost: {
      background: hover ? 'var(--action-ghost-hover)' : 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    onInk: {
      background: hover ? 'var(--on-ink-fill-hover)' : 'var(--on-ink-fill)',
      color: 'var(--on-ink-strong)',
      border: '1px solid var(--on-ink-border)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    role: "switch",
    "aria-checked": dark,
    "aria-label": "Dark theme",
    title: dark ? 'Switch to light theme' : 'Switch to dark theme',
    onClick: () => apply(dark ? 'light' : 'dark'),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-grid',
      placeItems: 'center',
      width: px,
      height: px,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      padding: 0,
      overflow: 'hidden',
      transition: 'background var(--duration-base) var(--ease-out), transform var(--duration-fast) var(--ease-out)',
      transform: hover ? 'translateY(-1px)' : 'none',
      ...(looks[variant] || looks.secondary),
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: 'absolute',
      width: px * 0.4,
      height: px * 0.4,
      borderRadius: '50%',
      background: dark ? 'transparent' : 'var(--gradient-brand-135)',
      boxShadow: dark ? `inset ${px * 0.13}px -${px * 0.08}px 0 0 currentColor` : 'none',
      transform: dark ? 'rotate(-25deg) scale(0.95)' : 'rotate(0) scale(1)',
      transition: 'transform var(--duration-slow) var(--ease-spring), background var(--duration-base) var(--ease-out), box-shadow var(--duration-base) var(--ease-out)'
    }
  }));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// scripts/doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    /* Monolithic at print: Blink slices a transform-scaled child at
     * fragmentainer boundaries mapped in UNSCALED layout coordinates
     * (transforms are paint-time), so the .fit box (authored size, e.g.
     * 1400x990) gets cut at the page's free block space and spills onto
     * a second sheet even though its SCALED footprint fits the page by
     * construction. overflow:hidden makes .fit-box a scroll container —
     * monolithic under fragmentation (css-break-3) — so the scaled
     * content prints atomically on one sheet. No clipping for content
     * within the authored box: .fit-box is calc-sized to exactly the
     * scaled footprint. (Content that bleeds past content-width/height
     * is clipped at the footprint — fit mode's contract; it previously
     * painted beyond it at print.) Print-only, so the screen rendering
     * keeps visible overflow for editor affordances.
     * The export path injects the same rule into frozen copies
     * (print-eval.ts om-print-fit-contain). The .fit-mode scope is
     * load-bearing: .fit-box wraps slotted content in EVERY mode, and an
     * unscoped overflow:hidden would make whole flowing documents
     * monolithic (one truncated sheet). overflow:hidden, never clip —
     * clip is not a scroll container, so not monolithic. */
    @media print {
      .fit-mode .fit-box { overflow: hidden; }
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/doc-page.js", error: String((e && e.message) || e) }); }

// scripts/showcase-i18n.js
try { (() => {
/* Showcase locale layer: when <html dir="rtl">, swap English copy for Arabic.
   Runs before showcase.js so headline splitting sees the final text. Strings not
   listed stay English; bidi isolation in the tokens keeps them readable. */
(() => {
  const html = document.documentElement;
  const btn = document.getElementById('dir-toggle');
  if (btn) {
    const rtl = html.getAttribute('dir') === 'rtl';
    btn.textContent = rtl ? 'English' : 'العربية';
    btn.setAttribute('aria-label', rtl ? 'Switch to English, left to right' : 'التبديل إلى العربية، من اليمين إلى اليسار');
    btn.setAttribute('lang', rtl ? 'en' : 'ar');
    btn.addEventListener('click', () => {
      try {
        localStorage.setItem('cory-dir', rtl ? 'ltr' : 'rtl');
        const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        sessionStorage.setItem('cory-dir-switch', String(scrollY / max));
      } catch (e) {}
      document.documentElement.style.transition = 'opacity 160ms ease';
      document.documentElement.style.opacity = '0';
      setTimeout(() => location.reload(), 160);
    });
  }
  if (html.getAttribute('dir') !== 'rtl') return;
  const AR = {
    'Color': 'الألوان',
    'Type': 'الخطوط',
    'Components': 'المكوّنات',
    'Voice': 'الأسلوب',
    'Guide': 'الدليل',
    'Explore templates': 'استكشف القوالب',
    'Cory': 'كوري',
    '● Online': '● متصل',
    'Contact rate': 'معدل التواصل',
    '⚡ <60s response': '⚡ استجابة في أقل من 60 ثانية',
    'Engagement': 'التفاعل',
    'AgentCory Design System · v1': 'نظام تصميم AgentCory · الإصدار 1',
    'A design system': 'نظام تصميم',
    'with a': 'له',
    'voice.': 'صوت.',
    'Every token, component, and template behind Cory, the AI admissions assistant that answers in under 60 seconds. Built to ship, ready to copy.': 'كل رمز ومكوّن وقالب يقف خلف كوري، مساعد القبول الذكي الذي يجيب في أقل من 60 ثانية. جاهز للإطلاق والنسخ.',
    'Explore the templates': 'استكشف القوالب',
    'Meet the components': 'تعرّف على المكوّنات',
    'Response time': 'وقت الاستجابة',
    'Avg. ROI': 'متوسط العائد',
    'Hours saved': 'ساعات موفّرة',
    'scroll': 'مرّر',
    'Foundations · Color': 'الأساسيات · الألوان',
    'Navy ink.': 'حبر كحلي.',
    'Signal gradient.': 'تدرّج الإشارة.',
    'A two-part identity: deep navy for the words that ground you, a blue→cyan sweep for the moments that move you. Cool slate neutrals on an off-white surface.': 'هوية من جزأين: كحلي عميق للكلمات التي تمنحك الثبات، وتدرّج من الأزرق إلى السماوي للّحظات التي تحرّكك. ألوان رمادية هادئة على سطح فاتح.',
    'Ink': 'الحبر',
    'Signal start': 'بداية الإشارة',
    'Signal end': 'نهاية الإشارة',
    'The gradient': 'التدرّج',
    'Positive': 'إيجابي',
    'Neutral': 'محايد',
    'Foundations · Typography': 'الأساسيات · الطباعة',
    'Friendly, geometric,': 'ودود، هندسي،',
    'extrabold.': 'وعريض.',
    'One family across the whole brand, JetBrains Mono for the numbers that do the talking. Display weights run heavy with tight tracking.': 'عائلة خط واحدة للعلامة كلها، مع خط IBM Plex Sans Arabic للنص العربي وخط JetBrains Mono للأرقام. أوزان العناوين ثقيلة وواضحة.',
    'Boost admissions': 'عزّز القبول',
    'Why teams choose Cory': 'لماذا تختار الفرق كوري',
    'Meet prospects where they are, voice, SMS, email, and chat.': 'قابل المتقدمين حيث هم: اتصال ورسائل وبريد ومحادثة.',
    'The kit': 'المجموعة',
    'Twenty-nine components,': 'تسعة وعشرون مكوّناً،',
    'zero guesswork.': 'بلا تخمين.',
    'Pill buttons, soft corners, navy-tinted shadows. Every piece ships as a ready-to-import React component; six of them are previewed here.': 'أزرار مستديرة، زوايا ناعمة، وظلال بلمسة كحلية. كل قطعة مكوّن React جاهز للاستيراد.',
    'Button': 'الزر',
    'Badge': 'الشارة',
    'StatCard': 'بطاقة الإحصاء',
    'ChatBubble': 'فقاعة المحادثة',
    'Input': 'حقل الإدخال',
    'Avatar': 'الصورة الرمزية',
    'Book My Demo': 'احجز عرضي التوضيحي',
    'Try Cory Now': 'جرّب كوري الآن',
    '⚡ <60s Response': '⚡ استجابة فورية',
    '+54% yield': 'تسجيل أعلى بنسبة 54%',
    'New': 'جديد',
    'AI-Powered': 'بالذكاء الاصطناعي',
    '▲ from 40%': '▲ من 40%',
    "Hi, I'm Cory 👋 Ready to see what I can do?": 'مرحباً، أنا كوري 👋 هل أنت مستعد لترى ما يمكنني فعله؟',
    'Show me the fall deadlines': 'أرني مواعيد التقديم للخريف',
    'Focus me, blue ring, soft glow.': 'ركّز هنا: حلقة زرقاء وتوهّج ناعم.',
    '● Always on': '● متاح دائماً',
    'Templates': 'القوالب',
    'Four starting points,': 'أربع نقاط انطلاق،',
    'ready to copy.': 'جاهزة للنسخ.',
    'Live previews of four of the twenty templates, every one built entirely from the system you just scrolled through.': 'معاينات حية، وكل قالب مبني بالكامل من النظام الذي تصفحته للتو.',
    'Landing Page': 'الصفحة الرئيسية',
    'Full marketing homepage, hero to footer': 'صفحة تسويقية كاملة من الواجهة إلى التذييل',
    'Open': 'افتح',
    'Pitch Deck': 'عرض تقديمي',
    '6-slide 16:9 sales deck': 'عرض مبيعات من 6 شرائح بمقاس 16:9',
    'One-Pager': 'صفحة واحدة',
    'Printable Letter-size overview': 'ملخص قابل للطباعة بمقاس Letter',
    'Outreach Email': 'بريد التواصل',
    '600px marketing email from Cory': 'بريد تسويقي بعرض 600px من كوري',
    'Brand voice': 'صوت العلامة',
    'Cory speaks in': 'كوري يتحدث',
    'first person.': 'بصيغة المتكلم.',
    'The defining trait of the brand. Section labels talk': 'السمة المميزة للعلامة. عناوين الأقسام تتحدث',
    'about': 'عن',
    'Cory; CTAs and conversation come': 'كوري، أما الدعوات للإجراء والمحادثة فتأتي',
    'from': 'من',
    'Cory. Confident, benefit-led, warm, and always quantified.': 'كوري. واثق، يركّز على الفائدة، دافئ، ومدعوم بالأرقام دائماً.',
    '"I", never "it"': '«أنا»، لا «هو»',
    '"Ready to see what I can do for your admissions team?"': '«هل أنت مستعد لترى ما يمكنني فعله لفريق القبول لديك؟»',
    'Numbers do the talking': 'الأرقام تتحدث',
    'Lead with the figure: <60s, 94%, 10x, $2.4M.': 'ابدأ بالرقم: أقل من 60 ثانية، 94%، 10 أضعاف، 2.4 مليون دولار.',
    '"You", not "we"': '«أنت»، لا «نحن»',
    'Copy centers your team, your counselors, your yield.': 'النص يتمحور حول فريقك ومستشاريك ونتائجك.',
    "Hi, I'm Cory 👋 Ready to see what I can do for your admissions team?": 'مرحباً، أنا كوري 👋 هل أنت مستعد لترى ما يمكنني فعله لفريق القبول لديك؟',
    "We're losing inquiries after hours.": 'نخسر الاستفسارات بعد ساعات العمل.',
    'Not anymore. I answer every inquiry in under 60 seconds, call, text, chat, or email. Want me to call you and show you?': 'ليس بعد الآن. أجيب على كل استفسار في أقل من 60 ثانية، بالاتصال أو الرسائل أو المحادثة أو البريد. هل تريد أن أتصل بك لأريك؟',
    'Strike while the iron is hot. ⚡': 'اغتنم الفرصة وهي سانحة. ⚡',
    'Open source of truth': 'مرجع واحد للحقيقة',
    "Build your next surface with Cory's system.": 'ابنِ واجهتك القادمة بنظام كوري.',
    'Tokens, components, guidelines, and four copy-ready templates, everything in one place, consistent by default.': 'الرموز والمكوّنات والإرشادات وأربعة قوالب جاهزة، كل شيء في مكان واحد ومتّسق افتراضياً.',
    'Start from a template': 'ابدأ من قالب',
    'Review the foundations': 'راجع الأساسيات',
    'NotebookLM how-to guide': 'دليل NotebookLM',
    'AgentCory Design System · a Colaberry product': 'نظام تصميم AgentCory · منتج من Colaberry'
  };
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const hits = [];
  let n;
  while (n = walker.nextNode()) {
    const p = n.parentElement;
    if (!p || p.closest('script,style,.marquee,code,.mono,small.no-i18n')) continue;
    const raw = n.textContent,
      key = raw.replace(/\s+/g, ' ').trim();
    if (AR[key]) hits.push([n, raw.match(/^\s*/)[0] + AR[key] + raw.match(/\s*$/)[0]]);
  }
  hits.forEach(([node, text]) => {
    node.textContent = text;
  });
  document.title = 'نظام تصميم AgentCory، العرض';
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/showcase-i18n.js", error: String((e && e.message) || e) }); }

// scripts/showcase.js
try { (() => {
/* AgentCory DS Showcase — GSAP + Lenis orchestration */
(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const DIR = document.documentElement.getAttribute('dir') === 'rtl' ? -1 : 1; // mirror horizontal motion in RTL
  const CONNECTED = /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/; // Hebrew + Arabic ranges: never split into letters
  gsap.registerPlugin(ScrollTrigger);

  // Smooth scroll
  let lenis = null;
  if (!reduce && window.Lenis) {
    lenis = new Lenis({
      lerp: 0.11,
      wheelMultiplier: 1
    });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
  }
  // Anchor links via lenis
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const el = document.querySelector(a.getAttribute('href'));
      if (!el) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(el, {
        offset: -70
      });else window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 70,
        behavior: 'smooth'
      });
    });
  });

  // Split headline into chars
  document.querySelectorAll('[data-split]').forEach(el => {
    const walk = node => {
      [...node.childNodes].forEach(child => {
        if (child.nodeType === 3) {
          // Inline-block pieces are bidi-neutral, so wrap each run in its own direction:
          // letters for Latin (LTR), whole words for connected scripts (RTL), never reversed.
          const rtlRun = CONNECTED.test(child.textContent);
          const frag = document.createElement('span');
          frag.setAttribute('dir', rtlRun ? 'rtl' : 'ltr');
          // Split by words first; spaces stay real text nodes so lines can only break between words.
          child.textContent.split(/(\s+)/).forEach(word => {
            if (!word) return;
            if (/^\s+$/.test(word)) {
              frag.appendChild(document.createTextNode(' '));
              return;
            }
            const w = document.createElement('span');
            w.className = 'word';
            w.style.cssText = 'display:inline-block;white-space:nowrap';
            // Latin words animate letter by letter; connected scripts (Arabic, Hebrew) move as whole words
            (rtlRun ? [word] : word.split('')).forEach(ch => {
              const s = document.createElement('span');
              s.className = 'ch';
              s.textContent = ch;
              w.appendChild(s);
            });
            frag.appendChild(w);
          });
          node.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          // Gradient words animate as one unit: background-clip:text cannot paint through child layers
          if (child.classList.contains('grad-text')) child.classList.add('ch');else walk(child);
        }
      });
    };
    walk(el);
  });

  // Safety net: if the animation clock never starts (background tab, throttled iframe, capture tools), content must not stay hidden
  setTimeout(() => {
    if (gsap.ticker.frame > 5) return;
    gsap.set(['.hero-title .ch', '.hero-fade', '.hero-chip', '.reveal', '.sec-title .ch', '.voice-bubble', '.sec-head .overline', '.sec-sub'], {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateX: 0
    });
    gsap.set('.color-band', {
      scaleY: 1
    });
    gsap.set('#preloader', {
      display: 'none'
    });
    gsap.set('.grad-sweep', {
      backgroundPosition: '0% 0'
    });
  }, 2600);
  if (reduce) {
    // Reduced motion: keep opacity-only reveals and the gradient sweep, drop all movement, parallax, loops and the preloader
    document.documentElement.classList.add('no-motion');
    const pre = document.getElementById('preloader');
    if (pre) pre.remove();
    gsap.set(['.hero-title .ch', '.hero-fade', '.hero-chip', '.reveal', '.sec-title .ch', '.voice-bubble'], {
      y: 0,
      x: 0,
      scale: 1,
      rotateX: 0,
      clearProps: 'transform'
    });
    gsap.set('.color-band', {
      scaleY: 1
    });
    gsap.timeline().to('.hero-title .ch', {
      opacity: 1,
      duration: 0.5,
      stagger: 0.012,
      ease: 'power2.out'
    }).to('.grad-sweep', {
      backgroundPosition: '0% 0',
      duration: 1.1,
      ease: 'power2.inOut'
    }, '-=0.3').to(['.hero-fade', '.hero-chip'], {
      opacity: 1,
      duration: 0.6,
      stagger: 0.06,
      ease: 'power2.out'
    }, '-=0.9');
    document.querySelectorAll('.reveal, .sec-title .ch, .voice-bubble').forEach(el => {
      gsap.to(el, {
        opacity: 1,
        duration: 0.6,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%'
        }
      });
    });
    return;
  }

  // Direction switch reload: no preloader, restore the reader's place
  let switching = null;
  try {
    switching = sessionStorage.getItem('cory-dir-switch');
    sessionStorage.removeItem('cory-dir-switch');
  } catch (e) {}
  if (switching !== null) {
    const pre = document.getElementById('preloader');
    if (pre) pre.remove();
    window.addEventListener('load', () => setTimeout(() => {
      const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      window.scrollTo(0, parseFloat(switching) * max);
      ScrollTrigger.refresh();
    }, 450));
  }

  // ---- Preloader → hero intro ----
  const intro = gsap.timeline();
  if (switching !== null) intro.timeScale(2.5);
  intro.to('#pre-logo', {
    scale: 1,
    opacity: 1,
    duration: 0.5,
    ease: 'power3.out'
  }).to('#pre-bar i', {
    scaleX: 1,
    duration: 0.55,
    ease: 'power2.inOut'
  }, '-=0.2').to('#preloader', {
    yPercent: -100,
    duration: 0.7,
    ease: 'power4.inOut'
  }, '+=0.1').set('#preloader', {
    display: 'none'
  }).from('#site-header', {
    y: -60,
    opacity: 0,
    duration: 0.6,
    ease: 'power3.out'
  }, '-=0.55').to('.hero-title .ch', {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transformPerspective: 600,
    duration: 0.8,
    stagger: 0.018,
    ease: 'power4.out',
    onComplete: function () {
      gsap.set(this.targets(), {
        clearProps: 'transform'
      });
    }
  }, '-=0.45').to('.grad-sweep', {
    backgroundPosition: '0% 0',
    duration: 1.1,
    ease: 'power2.inOut'
  }, '-=0.35').to('.hero-fade', {
    y: 0,
    opacity: 1,
    duration: 0.7,
    stagger: 0.09,
    ease: 'power3.out'
  }, '-=1.0').to('.hero-chip', {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.7,
    stagger: 0.08,
    ease: 'back.out(1.6)'
  }, '-=0.5');

  // Hero scroll-out: content lifts and fades, chips part, so the fold feels dimensional
  gsap.to('.hero-in', {
    y: -80,
    opacity: 0,
    ease: 'none',
    scrollTrigger: {
      trigger: '#hero',
      start: 'top top',
      end: 'bottom 35%',
      scrub: true
    }
  });
  document.querySelectorAll('.hero-chip').forEach((c, i) => {
    gsap.to(c, {
      y: -(60 + i * 30),
      x: DIR * (i % 2 ? 1 : -1) * (20 + i * 10),
      opacity: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom 45%',
        scrub: true
      }
    });
  });

  // Hero chips: float + mouse parallax
  document.querySelectorAll('.hero-chip').forEach((c, i) => {
    gsap.to(c, {
      y: '+=' + (8 + i * 4),
      duration: 2.4 + i * 0.35,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: i * 0.2
    });
  });
  const heroArt = document.querySelector('.hero-art');
  if (heroArt && matchMedia('(pointer:fine)').matches) {
    window.addEventListener('mousemove', e => {
      const x = e.clientX / innerWidth - 0.5,
        y = e.clientY / innerHeight - 0.5;
      document.querySelectorAll('.hero-chip').forEach((c, i) => {
        const d = (i % 3 + 1) * 10;
        gsap.to(c, {
          x: x * d,
          duration: 0.9,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
      gsap.to('.hero-glow', {
        x: x * 40,
        y: y * 30,
        duration: 1.2,
        ease: 'power2.out',
        overwrite: 'auto'
      });
    }, {
      passive: true
    });
  }

  // Generic reveals
  document.querySelectorAll('.reveal').forEach(el => {
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 86%'
      },
      delay: parseFloat(el.dataset.delay || 0)
    });
  });

  // Section headline char sweeps
  document.querySelectorAll('.sec-title[data-split]').forEach(el => {
    gsap.to(el.querySelectorAll('.ch'), {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transformPerspective: 600,
      duration: 0.7,
      stagger: 0.014,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%'
      },
      onComplete: function () {
        gsap.set(this.targets(), {
          clearProps: 'transform'
        });
      }
    });
  });

  // Color bars grow
  gsap.to('.color-band', {
    scaleY: 1,
    duration: 1,
    stagger: 0.06,
    ease: 'power4.out',
    transformOrigin: 'bottom',
    scrollTrigger: {
      trigger: '#colors .bands',
      start: 'top 80%'
    }
  });

  // Giant type scrub
  gsap.fromTo('.type-giant', {
    xPercent: 6 * DIR,
    opacity: 0.25
  }, {
    xPercent: -6 * DIR,
    opacity: 1,
    ease: 'none',
    scrollTrigger: {
      trigger: '#type',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.6
    }
  });

  // Marquees
  document.querySelectorAll('.marquee-track').forEach(track => {
    if (reduce) return; // reduced motion: the strip stands still
    const tw = gsap.to(track, {
      xPercent: -50,
      duration: 26,
      repeat: -1,
      ease: 'none'
    }); // marquee is an English LTR island in both directions
    const host = track.parentElement; // WCAG 2.2.2: moving content pauses on hover or keyboard focus
    host.addEventListener('mouseenter', () => tw.pause());
    host.addEventListener('mouseleave', () => tw.resume());
    host.addEventListener('focusin', () => tw.pause());
    host.addEventListener('focusout', () => tw.resume());
  });

  // Templates: horizontal pin on desktop
  ScrollTrigger.matchMedia({
    '(min-width: 960px)': () => {
      const rail = document.querySelector('.tpl-rail');
      const wrap = document.querySelector('.tpl-pin');
      if (!rail || !wrap) return;
      const dist = () => rail.scrollWidth - wrap.clientWidth;
      gsap.to(rail, {
        x: () => -dist() * DIR,
        ease: 'none',
        scrollTrigger: {
          trigger: '#templates',
          start: 'top top',
          end: () => '+=' + dist(),
          pin: true,
          scrub: 0.7,
          invalidateOnRefresh: true
        }
      });
    }
  });

  // Chat bubbles pop in
  gsap.to('.voice-bubble', {
    y: 0,
    opacity: 1,
    scale: 1,
    duration: 0.6,
    stagger: 0.45,
    ease: 'back.out(1.5)',
    scrollTrigger: {
      trigger: '#voice .voice-thread',
      start: 'top 78%'
    }
  });

  // Stat counters
  document.querySelectorAll('[data-count]').forEach(el => {
    const end = parseFloat(el.dataset.count);
    const fmt = v => (el.dataset.prefix || '') + (el.dataset.decimals ? v.toFixed(1) : Math.round(v).toLocaleString()) + (el.dataset.suffix || '');
    const obj = {
      v: 0
    };
    gsap.to(obj, {
      v: end,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 88%'
      },
      onUpdate: () => {
        el.textContent = fmt(obj.v);
      }
    });
  });

  // Scroll progress bar
  gsap.to('.progress', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      start: 0,
      end: 'max',
      scrub: 0.3
    }
  });

  // Section heads: overline slides in, subtitle fades, in sequence with the headline
  document.querySelectorAll('.sec-head').forEach(head => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: head,
        start: 'top 85%'
      }
    });
    tl.to(head.querySelector('.overline'), {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power3.out'
    }).to(head.querySelector('.sec-sub'), {
      opacity: 1,
      y: 0,
      duration: 0.7,
      ease: 'power3.out'
    }, '-=0.2');
  });

  // Component cards: 3D tilt toward pointer + spotlight follows the cursor
  if (matchMedia('(pointer:fine)').matches) {
    document.querySelectorAll('.comp-card').forEach(card => {
      card.addEventListener('pointermove', e => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width,
          py = (e.clientY - r.top) / r.height;
        card.style.setProperty('--mx', px * 100 + '%');
        card.style.setProperty('--my', py * 100 + '%');
        gsap.to(card, {
          rotateY: (px - .5) * 8,
          rotateX: (.5 - py) * 8,
          transformPerspective: 900,
          y: -6,
          duration: 0.5,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
      card.addEventListener('pointerleave', () => gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        y: 0,
        duration: 0.7,
        ease: 'power3.out',
        overwrite: 'auto'
      }));
    });
    // Magnetic CTAs: the button leans toward the cursor, snaps back on leave
    document.querySelectorAll('.magnetic').forEach(btn => {
      btn.addEventListener('pointermove', e => {
        const r = btn.getBoundingClientRect();
        gsap.to(btn, {
          x: (e.clientX - r.left - r.width / 2) * 0.28,
          y: (e.clientY - r.top - r.height / 2) * 0.28,
          duration: 0.4,
          ease: 'power2.out',
          overwrite: 'auto'
        });
      });
      btn.addEventListener('pointerleave', () => gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.45)',
        overwrite: 'auto'
      }));
    });
  }

  // Active nav link follows the section in view
  document.querySelectorAll('section[id]').forEach(sec => {
    const link = document.querySelector('.nav-links a[href="#' + sec.id + '"]');
    if (!link) return;
    ScrollTrigger.create({
      trigger: sec,
      start: 'top 50%',
      end: 'bottom 50%',
      onToggle: self => link.classList.toggle('active', self.isActive)
    });
  });

  // Section parallax: dark CTA glow and type specimen drift against scroll
  gsap.to('#cta .glow', {
    yPercent: 30,
    ease: 'none',
    scrollTrigger: {
      trigger: '#cta',
      start: 'top bottom',
      end: 'bottom top',
      scrub: true
    }
  });
  gsap.fromTo('.voice-thread', {
    y: 60
  }, {
    y: -40,
    ease: 'none',
    scrollTrigger: {
      trigger: '#voice',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 0.5
    }
  });

  // Header shadow on scroll
  ScrollTrigger.create({
    start: 60,
    onToggle: self => document.getElementById('site-header').classList.toggle('scrolled', self.isActive)
  });

  // Hero canvas: drifting gradient orbs
  const cv = document.getElementById('hero-canvas');
  if (cv) {
    const ctx = cv.getContext('2d');
    let w, h;
    const orbs = [];
    const resize = () => {
      w = cv.width = cv.offsetWidth * devicePixelRatio;
      h = cv.height = cv.offsetHeight * devicePixelRatio;
    };
    resize();
    addEventListener('resize', resize, {
      passive: true
    });
    const cols = ['37,138,253', '41,190,221', '31,184,119'];
    for (let i = 0; i < 7; i++) orbs.push({
      x: Math.random(),
      y: Math.random(),
      r: 0.12 + Math.random() * 0.16,
      c: cols[i % 3],
      sp: 0.00008 + Math.random() * 0.00014,
      ph: Math.random() * Math.PI * 2,
      a: 0.05 + Math.random() * 0.06
    });
    // node field: sparse brand nodes, linked when near, drawn toward the pointer
    const nodes = [];
    let pointer = null;
    const seed = () => {
      nodes.length = 0;
      const n = Math.max(18, Math.min(70, Math.round(cv.offsetWidth * cv.offsetHeight / 16000)));
      for (let i = 0; i < n; i++) nodes.push({
        x: Math.random(),
        y: Math.random(),
        vx: (Math.random() - .5) * .00004,
        vy: (Math.random() - .5) * .00004,
        r: 1 + Math.random() * 1.6,
        c: i % 3 === 0 ? cols[1] : cols[0],
        ph: Math.random() * 6.28
      });
    };
    seed();
    addEventListener('resize', seed, {
      passive: true
    });
    if (matchMedia('(pointer:fine)').matches) {
      cv.parentElement.addEventListener('pointermove', e => {
        const r = cv.getBoundingClientRect();
        pointer = {
          x: (e.clientX - r.left) / r.width,
          y: (e.clientY - r.top) / r.height
        };
      }, {
        passive: true
      });
      cv.parentElement.addEventListener('pointerleave', () => pointer = null);
    }
    const inkRgb = () => document.documentElement.getAttribute('data-theme') === 'dark' ? '255,255,255' : '11,31,54';
    let last = 0,
      vis = true;
    new IntersectionObserver(e => vis = e[0].isIntersecting).observe(cv);
    const tick = t => {
      requestAnimationFrame(tick);
      if (!vis || t - last < 33) return;
      last = t;
      ctx.clearRect(0, 0, w, h);
      const link = Math.min(150, Math.max(90, cv.offsetWidth * 0.1)) * devicePixelRatio,
        ink = inkRgb();
      nodes.forEach(n => {
        n.x += n.vx * 33 + Math.sin(t * .0006 + n.ph) * .00008;
        n.y += n.vy * 33 + Math.cos(t * .0005 + n.ph) * .00008;
        if (pointer) {
          const dx = pointer.x - n.x,
            dy = pointer.y - n.y,
            d = Math.hypot(dx, dy);
          if (d < .22 && d > .002) {
            n.x += dx / d * .0009 * (1 - d / .22);
            n.y += dy / d * .0009 * (1 - d / .22);
          }
        }
        if (n.x < -.02) n.x = 1.02;
        if (n.x > 1.02) n.x = -.02;
        if (n.y < -.02) n.y = 1.02;
        if (n.y > 1.02) n.y = -.02;
      });
      ctx.lineWidth = devicePixelRatio;
      for (let i = 0; i < nodes.length; i++) for (let k = i + 1; k < nodes.length; k++) {
        const a = nodes[i],
          b = nodes[k];
        const d = Math.hypot((a.x - b.x) * w, (a.y - b.y) * h);
        if (d < link) {
          const near = pointer && Math.hypot(((a.x + b.x) / 2 - pointer.x) * w, ((a.y + b.y) / 2 - pointer.y) * h) < link * 1.4;
          ctx.strokeStyle = 'rgba(' + (near ? cols[1] : ink) + ',' + (near ? .5 : .09) * (1 - d / link) + ')';
          ctx.beginPath();
          ctx.moveTo(a.x * w, a.y * h);
          ctx.lineTo(b.x * w, b.y * h);
          ctx.stroke();
        }
      }
      nodes.forEach(n => {
        const near = pointer && Math.hypot((n.x - pointer.x) * w, (n.y - pointer.y) * h) < link * 1.4;
        ctx.fillStyle = 'rgba(' + n.c + ',' + (near ? .95 : .55) * (.75 + .25 * Math.sin(t * .0014 + n.ph)) + ')';
        ctx.beginPath();
        ctx.arc(n.x * w, n.y * h, n.r * devicePixelRatio * (near ? 1.6 : 1), 0, 7);
        ctx.fill();
      });
      orbs.forEach(o => {
        const x = (o.x + Math.sin(t * o.sp + o.ph) * 0.12) * w;
        const y = (o.y + Math.cos(t * o.sp * 0.8 + o.ph) * 0.1) * h;
        const r = o.r * Math.max(w, h);
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, `rgba(${o.c},${o.a})`);
        g.addColorStop(1, `rgba(${o.c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, 7);
        ctx.fill();
      });
    };
    requestAnimationFrame(tick);
  }

  // Refresh after iframes load (heights settle)
  window.addEventListener('load', () => setTimeout(() => ScrollTrigger.refresh(), 400));
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "scripts/showcase.js", error: String((e && e.message) || e) }); }

// tokens/reveal.js
try { (() => {
/* AgentCory reveal engine: marks data-reveal elements visible as they enter the viewport.
   Children of a [data-stagger] parent cascade by --stagger (70ms) each; data-delay adds ms.
   Counters: data-count="94" data-prefix="<" data-suffix="%" animate the number when revealed.
   Safe by default: elements are only hidden once this script has run (html.cory-js). */
(() => {
  const html = document.documentElement;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ease = t => 1 - Math.pow(1 - t, 3);
  const count = el => {
    const end = parseFloat(el.dataset.count);
    if (isNaN(end)) return;
    const pre = el.dataset.prefix || '',
      suf = el.dataset.suffix || '',
      dec = parseInt(el.dataset.decimals || '0', 10);
    const fmt = v => pre + (dec ? v.toFixed(dec) : Math.round(v).toLocaleString()) + suf;
    if (reduce) {
      el.textContent = fmt(end);
      return;
    }
    const dur = parseInt(el.dataset.duration || '1400', 10);
    const t0 = performance.now();
    const tick = t => {
      const p = Math.min(1, (t - t0) / dur);
      el.textContent = fmt(end * ease(p));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const show = el => {
    if (el.classList.contains('is-visible')) return;
    el.classList.add('is-visible');
    el.querySelectorAll('[data-count]').forEach(count);
    if (el.dataset.count) count(el);
    el.addEventListener('transitionend', () => {
      el.style.willChange = 'auto';
    }, {
      once: true
    });
  };
  const prime = root => {
    root.querySelectorAll('[data-stagger]').forEach(p => {
      const step = parseInt(p.dataset.stagger || '70', 10);
      [...p.children].forEach((c, i) => {
        if (!c.hasAttribute('data-reveal')) c.setAttribute('data-reveal', p.dataset.revealKind || 'up');
        c.style.setProperty('--reveal-delay', i * step + parseInt(c.dataset.delay || '0', 10) + 'ms');
      });
    });
    root.querySelectorAll('[data-reveal][data-delay]').forEach(c => {
      if (!c.style.getPropertyValue('--reveal-delay')) c.style.setProperty('--reveal-delay', c.dataset.delay + 'ms');
    });
  };
  const io = 'IntersectionObserver' in window ? new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        show(e.target);
        io.unobserve(e.target);
      }
    });
  }, {
    rootMargin: '0px 0px -12% 0px',
    threshold: 0.08
  }) : null;
  const observe = root => {
    prime(root);
    root.querySelectorAll('[data-reveal]').forEach(el => {
      if (el.classList.contains('is-visible')) return;
      if (!io || reduce) {
        show(el);
        return;
      }
      const r = el.getBoundingClientRect();
      if (r.top < innerHeight * 0.92 && r.bottom > 0) show(el);else io.observe(el);
    });
  };
  const start = () => {
    html.classList.add('cory-js');
    observe(document);
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);else start();
  // Content that streams or mounts later (DC templates, React roots)
  new MutationObserver(muts => {
    let dirty = false;
    muts.forEach(m => m.addedNodes.forEach(n => {
      if (n.nodeType === 1 && (n.hasAttribute('data-reveal') || n.hasAttribute('data-stagger') || n.querySelector('[data-reveal],[data-stagger]'))) dirty = true;
    }));
    if (dirty) observe(document);
  }).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
  // Never leave content hidden if the observer never fires (background tabs, capture tools)
  setTimeout(() => document.querySelectorAll('[data-reveal]:not(.is-visible)').forEach(el => {
    const r = el.getBoundingClientRect();
    if (r.top < innerHeight) show(el);
  }), 2500);
  window.coryReveal = {
    observe,
    show
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "tokens/reveal.js", error: String((e && e.message) || e) }); }

// ui_kits/roi-calculator/RoiCalculator.jsx
try { (() => {
// AgentCory ROI Calculator — faithful recreation of the live site's interactive tool.
function Field({
  label,
  value,
  onChange,
  prefix,
  suffix,
  step = 1,
  min = 0,
  error
}) {
  const id = `roi-${label.replace(/\W+/g, '-').toLowerCase()}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      border: `1px solid ${error ? 'var(--fill-danger)' : 'var(--border-strong)'}`,
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)',
      overflow: 'hidden'
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingInlineStart: 14,
      color: 'var(--text-muted)',
      fontSize: 15
    }
  }, prefix), /*#__PURE__*/React.createElement("input", {
    id: id,
    type: "number",
    inputMode: "decimal",
    value: value,
    step: step,
    min: min,
    "aria-invalid": !!error || undefined,
    "aria-describedby": error ? `${id}-err` : undefined,
    onChange: e => {
      const n = parseFloat(e.target.value);
      onChange(Number.isFinite(n) ? Math.max(min, n) : 0);
    },
    style: {
      flex: 1,
      border: 0,
      outline: 'none',
      padding: '11px 14px',
      fontSize: 15,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-strong)',
      background: 'transparent',
      width: '100%',
      minWidth: 0
    }
  }), suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      paddingInlineEnd: 14,
      color: 'var(--text-muted)',
      fontSize: 15
    }
  }, suffix)), error && /*#__PURE__*/React.createElement("span", {
    id: `${id}-err`,
    role: "alert",
    style: {
      fontSize: 'var(--text-overline)',
      fontWeight: 500,
      color: 'var(--text-danger)'
    }
  }, error));
}
function Slider({
  label,
  value,
  onChange,
  min,
  max,
  suffix
}) {
  const pct = (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      fontWeight: 600,
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-link)',
      direction: 'ltr',
      unicodeBidi: 'isolate'
    }
  }, value, suffix)), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    value: value,
    "aria-label": label,
    onChange: e => onChange(parseFloat(e.target.value)),
    style: {
      WebkitAppearance: 'none',
      appearance: 'none',
      height: 24,
      borderRadius: 999,
      margin: 0,
      background: `linear-gradient(90deg, var(--blue-700) 0%, var(--cyan-700) ${pct}%, var(--border-interactive) ${pct}%) center / 100% 6px no-repeat`,
      cursor: 'pointer'
    }
  }));
}
function RoiCalculator() {
  const {
    Badge,
    Button,
    Alert,
    EmptyState,
    Icon: DsIcon
  } = window.DesignSystem_ebeb85;
  const Icon = ({
    name
  }) => /*#__PURE__*/React.createElement(DsIcon, {
    name: name,
    size: 20
  });
  const [inquiries, setInquiries] = React.useState(2000);
  const [contactRate, setContactRate] = React.useState(45);
  const [appRate, setAppRate] = React.useState(22);
  const [tuition, setTuition] = React.useState(25000);
  const [staffCost, setStaffCost] = React.useState(30);
  const [touches, setTouches] = React.useState(6);
  const [coryContact, setCoryContact] = React.useState(92);
  const [responseImpact, setResponseImpact] = React.useState(25);
  const [automation, setAutomation] = React.useState(85);
  const YIELD = 0.30; // application → enrollment yield
  const annualInq = inquiries * 12;
  const baseApps = annualInq * (contactRate / 100) * (appRate / 100);
  const coryApps = annualInq * (coryContact / 100) * (appRate / 100) * (1 + responseImpact / 100);
  const addApps = Math.max(0, Math.round(coryApps - baseApps));
  const addEnroll = Math.round(addApps * YIELD);
  const revenue = addEnroll * tuition;
  const hours = Math.round(annualInq * touches * (automation / 100) * 1 / 60); // ~1 min/touch
  const investment = 48000; // illustrative annual platform cost
  const roi = Math.round((revenue + hours * staffCost) / investment * 100);
  const fmtMoney = n => n >= 1e6 ? `$${(n / 1e6).toFixed(1)}M` : `$${Math.round(n).toLocaleString()}`;
  const fmtNum = n => n.toLocaleString();
  const errors = {
    inquiries: inquiries <= 0 ? 'Enter at least 1 inquiry a month' : undefined,
    contactRate: contactRate > 100 ? 'A rate cannot exceed 100%' : undefined,
    appRate: appRate > 100 ? 'A rate cannot exceed 100%' : undefined
  };
  const incomplete = inquiries <= 0 || tuition <= 0;
  const hasErrors = Object.values(errors).some(Boolean);
  const results = [{
    icon: 'file-plus',
    value: `+${fmtNum(addApps)}`,
    label: 'Additional Applications'
  }, {
    icon: 'graduation-cap',
    value: `+${fmtNum(addEnroll)}`,
    label: 'Additional Enrollments'
  }, {
    icon: 'trending-up',
    value: fmtMoney(revenue),
    label: 'Tuition Revenue Lift'
  }, {
    icon: 'clock',
    value: fmtNum(hours),
    label: 'Staff Hours Saved'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      background: 'var(--surface-card)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '16px var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-agentcory.svg",
    alt: "AgentCory",
    style: {
      height: 24
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--border-default)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 600,
      fontSize: 15,
      color: 'var(--text-strong)'
    }
  }, "ROI Calculator"), /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true,
    style: {
      marginInlineStart: 'auto'
    }
  }, "Live estimate"))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1120,
      margin: '0 auto',
      padding: '40px var(--gutter) 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 'var(--text-fluid-h2)',
      letterSpacing: '-0.03em',
      margin: '0 0 6px'
    }
  }, "Calculate your ROI"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 16,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "See how much Cory can save your team and add to enrollment revenue.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
      gap: 'var(--grid-gap)',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 16,
      margin: '0 0 18px'
    }
  }, "Your Current Metrics"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Monthly Inquiries",
    value: inquiries,
    onChange: setInquiries,
    step: 50,
    error: errors.inquiries
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Current Contact Rate",
    value: contactRate,
    onChange: setContactRate,
    suffix: "%",
    error: errors.contactRate
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Inquiry \u2192 Application",
    value: appRate,
    onChange: setAppRate,
    suffix: "%",
    error: errors.appRate
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Average Tuition (Net)",
    value: tuition,
    onChange: setTuition,
    prefix: "$",
    step: 500
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Staff Hourly Cost",
    value: staffCost,
    onChange: setStaffCost,
    prefix: "$"
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Avg Outreach Touches / Lead",
    value: touches,
    onChange: setTouches
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 16,
      margin: '0 0 6px'
    }
  }, "Cory's Impact ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--text-subtle)',
      fontSize: 13
    }
  }, "(Adjustable)")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(Slider, {
    label: "Cory Contact Rate",
    value: coryContact,
    onChange: setCoryContact,
    min: 60,
    max: 100,
    suffix: "%"
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Response Time Impact",
    value: responseImpact,
    onChange: setResponseImpact,
    min: 0,
    max: 50,
    suffix: "%"
  }), /*#__PURE__*/React.createElement(Slider, {
    label: "Automation Coverage",
    value: automation,
    onChange: setAutomation,
    min: 50,
    max: 100,
    suffix: "%"
  })), /*#__PURE__*/React.createElement(Alert, {
    tone: "info",
    compact: true,
    style: {
      marginTop: 26
    }
  }, "Estimates use a ", Math.round(YIELD * 100), "% application-to-enrollment yield and an illustrative annual platform cost. Adjust the sliders to model your scenario.")), /*#__PURE__*/React.createElement("aside", {
    "aria-live": "polite",
    "aria-atomic": "true",
    style: {
      position: 'sticky',
      top: 20,
      background: 'var(--gradient-ink)',
      borderRadius: 'var(--radius-2xl)',
      padding: 28,
      color: 'var(--on-ink-strong)',
      boxShadow: 'var(--shadow-lg)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--on-ink-link)',
      marginBottom: 6
    }
  }, "Projected Annual Impact"), incomplete || hasErrors ? /*#__PURE__*/React.createElement(EmptyState, {
    onInk: true,
    variant: "plain",
    size: "sm",
    title: hasErrors ? 'Fix the highlighted fields' : 'Tell me your monthly inquiries',
    style: {
      padding: '24px 8px'
    }
  }, hasErrors ? 'I’ll recalculate as soon as the numbers make sense.' : 'Add inquiries and net tuition and I’ll project applications, enrollments and revenue.') : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cory-metric cory-gradient-text",
    style: {
      fontSize: 60
    }
  }, roi, "%"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--on-ink-body)'
    }
  }, "Estimated", /*#__PURE__*/React.createElement("br", null), "Annual ROI")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, results.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 0',
      borderTop: '1px solid var(--on-ink-border)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 38,
      height: 38,
      borderRadius: 'var(--radius-sm)',
      background: 'var(--on-ink-fill)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--on-ink-link)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: r.icon
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "cory-metric",
    style: {
      fontSize: 24,
      color: 'var(--on-ink-strong)',
      letterSpacing: '-0.02em'
    }
  }, r.value), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--text-caption)',
      color: 'var(--on-ink-body)'
    }
  }, r.label)))))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    style: {
      marginTop: 22
    }
  }, "Book a Demo")))));
}
Object.assign(window, {
  RoiCalculator
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/roi-calculator/RoiCalculator.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
// Compose the full AgentCory marketing homepage
function App() {
  const [chatOpen, setChatOpen] = React.useState(false);
  const [demoOpen, setDemoOpen] = React.useState(false);
  const {
    SiteHeader,
    Hero,
    Workflows,
    Features,
    Proof,
    ClosingCta,
    SiteFooter,
    ChatWidget,
    DemoModal
  } = window;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(SiteHeader, {
    onTry: () => setChatOpen(true),
    onDemo: () => setDemoOpen(true)
  }), /*#__PURE__*/React.createElement(Hero, {
    onTry: () => setChatOpen(true),
    onDemo: () => setDemoOpen(true),
    onOpenChat: () => setChatOpen(true)
  }), /*#__PURE__*/React.createElement(Workflows, null), /*#__PURE__*/React.createElement(Features, null), /*#__PURE__*/React.createElement(Proof, null), /*#__PURE__*/React.createElement(ClosingCta, {
    onDemo: () => setDemoOpen(true)
  }), /*#__PURE__*/React.createElement(SiteFooter, null), /*#__PURE__*/React.createElement(ChatWidget, {
    open: chatOpen,
    onToggle: () => setChatOpen(o => !o)
  }), /*#__PURE__*/React.createElement(DemoModal, {
    open: demoOpen,
    onClose: () => setDemoOpen(false)
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/ChatWidget.jsx
try { (() => {
// Floating Cory chat widget + a demo-request dialog (built on the system's Dialog)
function ChatWidget({
  open,
  onToggle
}) {
  const {
    ChatBubble,
    TypingIndicator,
    IconButton,
    Alert
  } = window.DesignSystem_ebeb85;
  const [msgs, setMsgs] = React.useState([{
    id: 1,
    from: 'cory',
    text: "Hi, I'm Cory 👋 Ask me anything about admissions: programs, deadlines, tuition."
  }]);
  const [val, setVal] = React.useState('');
  const [typing, setTyping] = React.useState(false);
  const [online, setOnline] = React.useState(typeof navigator === 'undefined' ? true : navigator.onLine);
  const bodyRef = React.useRef(null);
  const inputRef = React.useRef(null);
  React.useEffect(() => {
    const up = () => setOnline(true),
      down = () => setOnline(false);
    window.addEventListener('online', up);
    window.addEventListener('offline', down);
    return () => {
      window.removeEventListener('online', up);
      window.removeEventListener('offline', down);
    };
  }, []);
  React.useEffect(() => {
    if (open && inputRef.current) inputRef.current.focus();
  }, [open]);
  const canned = "Great question! I can answer that instantly and even book you a call with an advisor. Want me to set one up?";
  function reply() {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs(m => [...m, {
        id: Date.now(),
        from: 'cory',
        text: canned
      }]);
    }, 1400);
  }
  function send(retryId) {
    const text = retryId ? msgs.find(m => m.id === retryId).text : val.trim();
    if (!text) return;
    const id = retryId || Date.now();
    setMsgs(m => retryId ? m.map(x => x.id === id ? {
      ...x,
      status: 'sending'
    } : x) : [...m, {
      id,
      from: 'user',
      text,
      status: 'sending'
    }]);
    if (!retryId) setVal('');
    setTimeout(() => {
      if (!online) {
        setMsgs(m => m.map(x => x.id === id ? {
          ...x,
          status: 'failed'
        } : x));
        return;
      }
      setMsgs(m => m.map(x => x.id === id ? {
        ...x,
        status: 'sent'
      } : x));
      reply();
    }, 500);
  }
  React.useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [msgs, typing]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, open && /*#__PURE__*/React.createElement("section", {
    "aria-label": "Chat with Cory",
    style: {
      position: 'fixed',
      bottom: 96,
      insetInlineEnd: 24,
      width: 380,
      maxWidth: 'calc(100vw - 32px)',
      height: 520,
      maxHeight: 'calc(100dvh - 120px)',
      background: 'var(--surface-page)',
      borderRadius: 'var(--radius-xl)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xl)',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      zIndex: 'var(--z-overlay)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--gradient-ink)',
      padding: '14px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(window.DesignSystem_ebeb85.Avatar, {
    kind: "cory-light",
    size: 38,
    status: online ? 'online' : 'offline',
    statusLabel: online ? 'Cory is online' : 'Offline'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25,
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--on-ink-strong)',
      fontWeight: 700,
      fontSize: 15
    }
  }, "Cory"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: online ? 'var(--on-ink-success)' : 'var(--on-ink-muted)',
      fontSize: 12,
      fontWeight: 600
    }
  }, online ? 'Typically replies in under 5s' : 'Reconnecting…')), /*#__PURE__*/React.createElement(IconButton, {
    label: "Close chat",
    variant: "onInk",
    size: "sm",
    onClick: onToggle
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    ref: bodyRef,
    role: "log",
    "aria-live": "polite",
    "aria-relevant": "additions",
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: 16,
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, !online && /*#__PURE__*/React.createElement(Alert, {
    tone: "warning",
    compact: true,
    title: "You're offline"
  }, "I'll send your messages as soon as you're back."), msgs.map(m => /*#__PURE__*/React.createElement(ChatBubble, {
    key: m.id,
    from: m.from,
    status: m.status,
    onRetry: () => send(m.id)
  }, m.text)), typing && /*#__PURE__*/React.createElement(TypingIndicator, null)), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      send();
    },
    style: {
      padding: 12,
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-card)',
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "cory-chat-input",
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)',
      whiteSpace: 'nowrap'
    }
  }, "Your message"), /*#__PURE__*/React.createElement("input", {
    id: "cory-chat-input",
    ref: inputRef,
    value: val,
    onChange: e => setVal(e.target.value),
    autoComplete: "off",
    placeholder: "Type your question\u2026",
    style: {
      flex: 1,
      minWidth: 0,
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-card)',
      padding: '10px 16px',
      fontSize: 14,
      fontFamily: 'var(--font-sans)',
      color: 'var(--text-strong)'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    type: "submit",
    label: "Send message",
    variant: "primary",
    size: "sm",
    disabled: !val.trim()
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: "send",
    size: 16
  })))), /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    "aria-label": open ? 'Close chat' : 'Chat with Cory',
    "aria-expanded": open,
    style: {
      position: 'fixed',
      bottom: 24,
      insetInlineEnd: 24,
      width: 60,
      height: 60,
      borderRadius: '50%',
      border: 0,
      background: 'var(--gradient-brand-deep)',
      boxShadow: 'var(--shadow-brand)',
      cursor: 'pointer',
      zIndex: 'calc(var(--z-overlay) + 1)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(window.LucideIcon, {
    name: open ? 'x' : 'message-circle',
    size: 26,
    style: {
      color: 'var(--text-on-brand)'
    }
  })));
}
function DemoModal({
  open,
  onClose
}) {
  const {
    Button,
    Input,
    Dialog,
    Alert
  } = window.DesignSystem_ebeb85;
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    when: 'Right now'
  });
  const [errors, setErrors] = React.useState({});
  const [busy, setBusy] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [failed, setFailed] = React.useState(false);
  const set = k => e => {
    setForm(f => ({
      ...f,
      [k]: e.target.value
    }));
    if (errors[k]) setErrors(x => ({
      ...x,
      [k]: undefined
    }));
  };
  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Enter your name so I know who to ask for';
    if (form.phone.replace(/\D/g, '').length < 10) e.phone = 'Enter a 10-digit number, e.g. 555 000 0000';
    return e;
  };
  const submit = ev => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = document.getElementById(e.name ? 'f-full-name' : 'f-phone-number');
      first && first.focus();
      return;
    }
    setBusy(true);
    setFailed(false);
    setTimeout(() => {
      setBusy(false);
      setSent(true);
    }, 1100);
  };
  const close = () => {
    if (busy) return;
    onClose();
    setTimeout(() => {
      setSent(false);
      setErrors({});
      setFailed(false);
      setForm({
        name: '',
        phone: '',
        when: 'Right now'
      });
    }, 300);
  };
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: close,
    dismissible: !busy,
    size: "sm",
    title: sent ? "You're all set!" : 'Let me call you',
    description: sent ? 'I will call you shortly. Watch for a call from 1-888-465-1991.' : "Experience my voice capabilities live. I'd love to chat.",
    actions: sent ? /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: close
    }, "Close") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      onClick: close,
      disabled: busy
    }, "Not now"), /*#__PURE__*/React.createElement(Button, {
      form: "demo-form",
      type: "submit",
      loading: busy,
      loadingLabel: "Requesting your call"
    }, "Request Demo Call"))
  }, sent ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success",
    title: "Call requested",
    compact: true
  }, "\u26A1 Under 60 seconds response time") : /*#__PURE__*/React.createElement("form", {
    id: "demo-form",
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, failed && /*#__PURE__*/React.createElement(Alert, {
    tone: "danger",
    title: "I couldn't send that",
    compact: true
  }, "Check your connection and try again."), /*#__PURE__*/React.createElement(Input, {
    label: "Full Name",
    required: true,
    placeholder: "Jane Doe",
    value: form.name,
    onChange: set('name'),
    error: errors.name,
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Phone Number",
    required: true,
    type: "tel",
    placeholder: "(555) 000-0000",
    value: form.phone,
    onChange: set('phone'),
    error: errors.phone,
    autoComplete: "tel"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "When should Cory call?",
    value: form.when,
    onChange: set('when'),
    hint: "Right now, or a time that suits you"
  })));
}
Object.assign(window, {
  ChatWidget,
  DemoModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ChatWidget.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Features.jsx
try { (() => {
// "Why Admissions Teams Choose Cory" — feature grid
const Icon = ({
  name
}) => /*#__PURE__*/React.createElement(window.LucideIcon, {
  name: name,
  size: 24
});
function Features() {
  const {
    FeatureCard
  } = window.DesignSystem_ebeb85;
  const items = [{
    icon: 'zap',
    title: 'Lightning-Fast Outreach',
    body: 'Strike while the iron is hot. Cory engages every new inquiry within 60 seconds, ensuring no lead goes cold.',
    tags: ['30s avg response', 'Natural AI conversation', 'Voicemail detection']
  }, {
    icon: 'messages-square',
    title: 'Multi-Channel Mastery',
    body: 'Meet prospects where they are across voice, SMS, email, and chat. Each touchpoint is perfectly timed.',
    tags: ['Voice + SMS + Email', 'Perfect timing', 'WhatsApp support']
  }, {
    icon: 'clock',
    title: 'Always Available',
    body: 'Never miss an inquiry, regardless of time or day. Cory captures weekend and evening leads competitors lose.',
    tags: ['24/7 coverage', 'Time zone smart', 'Holiday support']
  }, {
    icon: 'brain',
    title: 'Intelligent FAQ Brain',
    body: 'Cory knows your programs inside and out, trained on your curriculum, requirements, costs, and policies.',
    tags: ['Custom training', 'Auto updates', 'Human escalation']
  }, {
    icon: 'target',
    title: 'Smart Qualification',
    body: 'Books meetings and hands off to counselors with full context. Reduces manual outreach by 80–90%.',
    tags: ['Lead scoring', 'Auto booking', 'Context handoff']
  }, {
    icon: 'plug',
    title: 'Seamless Integration',
    body: 'Plugs into your CRM/SIS, every touch logged, dashboards included. Native Slate, Salesforce, and Banner.',
    tags: ['CRM sync', 'Auto logging', 'Real-time data']
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '76px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cory-overline"
  }, "Why teams choose Cory"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      letterSpacing: '-0.03em',
      margin: '10px 0 0'
    }
  }, "Built for enrollment teams")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
      gap: 'var(--grid-gap)'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(FeatureCard, {
    key: i,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: it.icon
    }),
    title: it.title,
    tags: it.tags
  }, it.body)))));
}
Object.assign(window, {
  Features
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Features.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Marketing hero — headline, stats, and a product visual (the Cory chat preview)
function Hero({
  onTry,
  onDemo,
  onOpenChat
}) {
  const {
    Button,
    StatCard,
    Badge,
    ChatBubble
  } = window.DesignSystem_ebeb85;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: -160,
      insetInlineEnd: -120,
      width: 520,
      height: 520,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(41,190,221,0.18), rgba(37,138,253,0.05) 60%, transparent 70%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: 'var(--section-y) var(--gutter)',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
      gap: 'clamp(32px, 5vw, 56px)',
      alignItems: 'center',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "cory-eyebrow-pill",
    style: {
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--green-500)'
    }
  }), "AI Admissions Assistant"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 56,
      lineHeight: 1.04,
      letterSpacing: '-0.03em',
      margin: '0 0 18px'
    }
  }, "Boost admissions with ", /*#__PURE__*/React.createElement("span", {
    className: "cory-gradient-text"
  }, "AI precision")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.55,
      color: 'var(--text-body)',
      margin: '0 0 28px',
      maxWidth: 480
    }
  }, "Engage every inquiry in under 60 seconds. Turn prospects into enrolled students."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginBottom: 40,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onTry
  }, "Try Cory Now"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    onClick: onDemo
  }, "Book a Demo")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '24px 44px',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StatCard, {
    value: "<60s",
    label: "Response Time",
    gradient: true
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "94%",
    label: "Contact Rate"
  }), /*#__PURE__*/React.createElement(StatCard, {
    value: "10x",
    label: "ROI Potential"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-2xl)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-xl)',
      padding: 18,
      maxWidth: 400,
      marginInlineStart: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 6px 14px',
      borderBottom: '1px solid var(--border-subtle)',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cory-tile-dark.svg",
    alt: "",
    style: {
      width: 36,
      height: 36,
      borderRadius: 'var(--radius-tile)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      lineHeight: 1.25
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--text-strong)'
    }
  }, "Cory"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-success)',
      fontWeight: 600
    }
  }, "\u25CF Online now")), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand",
    size: "sm",
    style: {
      marginInlineStart: 'auto'
    }
  }, "< 5s")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(ChatBubble, {
    from: "cory",
    time: "9:41 AM"
  }, "Hi, I'm Cory \uD83D\uDC4B Ready to find your program?"), /*#__PURE__*/React.createElement(ChatBubble, {
    from: "user"
  }, "Do you offer evening MBA classes?"), /*#__PURE__*/React.createElement(ChatBubble, {
    from: "cory",
    showAvatar: true
  }, "Yes, Tue/Thu evenings. Want me to book a call with an advisor?")), /*#__PURE__*/React.createElement("button", {
    onClick: onOpenChat,
    style: {
      marginTop: 16,
      width: '100%',
      padding: '11px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid var(--border-default)',
      background: 'var(--surface-sunken)',
      color: 'var(--text-muted)',
      fontSize: 14,
      fontFamily: 'var(--font-sans)',
      cursor: 'pointer',
      textAlign: 'start'
    }
  }, "Ask Cory a question\u2026")))));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/KitIcon.jsx
try { (() => {
// Icon wrapper: resolves to the design system's own Icon (Lucide names still work through its alias map).
function LucideIcon({
  name,
  size = 22,
  style
}) {
  const {
    Icon
  } = window.DesignSystem_ebeb85;
  return /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: size,
    style: style
  });
}
Object.assign(window, {
  LucideIcon
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/KitIcon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Proof.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Testimonials + Colaberry banner + closing CTA + footer
function Proof() {
  const {
    Testimonial,
    Button
  } = window.DesignSystem_ebeb85;
  const data = [{
    metric: '847%',
    metricLabel: 'ROI in Year 1',
    quote: 'Cory transformed our admissions process. We went from 40% contact rates to 94% overnight, and conversion improved 30%.',
    name: 'Dr. Sarah Johnson',
    role: 'Director of Admissions, Metro State University'
  }, {
    metric: '2,100',
    metricLabel: 'Hours Saved / Year',
    quote: 'Our team focuses on relationships instead of manual outreach. Cory handles qualification perfectly and hands off with full context.',
    name: 'Michael Chen',
    role: 'VP Enrollment Management, Tech Institute'
  }, {
    metric: '$2.4M',
    metricLabel: 'Added Revenue',
    quote: 'The 24/7 availability alone increased our inquiries by 20%. Weekend leads now convert at the same rate as business hours.',
    name: 'Lisa Rodriguez',
    role: 'Enrollment Director, Community College Network'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '76px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cory-overline"
  }, "Trusted by leading institutions"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      letterSpacing: '-0.03em',
      margin: '10px 0 0'
    }
  }, "Results admissions teams feel")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
      gap: 'var(--grid-gap)'
    }
  }, data.map((d, i) => /*#__PURE__*/React.createElement(Testimonial, _extends({
    key: i
  }, d))))));
}
function ClosingCta({
  onDemo
}) {
  const {
    Button
  } = window.DesignSystem_ebeb85;
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '20px var(--gutter) 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--gradient-ink)',
      borderRadius: 'var(--radius-2xl)',
      padding: 'clamp(32px, 5vw, 56px) clamp(24px, 4vw, 48px)',
      color: '#fff',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 32,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: -120,
      insetInlineEnd: 40,
      width: 360,
      height: 360,
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(41,190,221,0.35), transparent 65%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/cory-tile.svg",
    alt: "",
    style: {
      width: 56,
      height: 56,
      borderRadius: 'var(--radius-tile)',
      marginBottom: 18
    }
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      color: '#fff',
      fontSize: 34,
      letterSpacing: '-0.03em',
      margin: '0 0 10px'
    }
  }, "Let's work together"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'rgba(255,255,255,0.78)',
      margin: 0,
      maxWidth: 480
    }
  }, "I'm ready to help your team engage more prospects, save time, and boost enrollments. Let me show you how in 30 minutes.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    onClick: onDemo
  }, "Book My Demo")))));
}
const FooterIcon = ({
  name
}) => /*#__PURE__*/React.createElement(window.LucideIcon, {
  name: name,
  size: 18
});
function SiteFooter() {
  const cols = [{
    h: 'Product',
    items: ['Features', 'How It Works', 'Demo', 'Case Studies']
  }, {
    h: 'Resources',
    items: ['Blog', 'Guides', 'Webinars', 'Help Center']
  }, {
    h: 'Company',
    items: ['About', 'Careers', 'Privacy Policy', 'Terms of Service']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--navy-800)',
      color: 'var(--on-ink-body)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px var(--gutter) 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-agentcory-darkmode.svg",
    alt: "AgentCory",
    style: {
      height: 26,
      marginBottom: 16
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14,
      lineHeight: 1.6,
      margin: '0 0 16px',
      maxWidth: 260
    }
  }, "AI-powered admissions assistant that boosts conversions with lightning-fast, multi-channel outreach."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, ['linkedin', 'twitter', 'youtube', 'instagram', 'facebook'].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    style: {
      width: 32,
      height: 32,
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(FooterIcon, {
    name: n
  }))))), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 700,
      margin: '0 0 14px'
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, c.items.map(it => /*#__PURE__*/React.createElement("a", {
    key: it,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      color: 'var(--on-ink-body)',
      fontSize: 14,
      textDecoration: 'none',
      padding: '5px 0',
      display: 'inline-block'
    }
  }, it)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--on-ink-border)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px var(--gutter)',
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13,
      flexWrap: 'wrap',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Agent Cory \xB7 Powered by Colaberry"), /*#__PURE__*/React.createElement("span", null, "cory@agentcory.ai \xB7 1-888-465-1991 \xB7 Plano, TX"))));
}
Object.assign(window, {
  Proof,
  ClosingCta,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Proof.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/SiteHeader.jsx
try { (() => {
// AgentCory marketing site — top navigation
function SiteHeader({
  onTry,
  onDemo
}) {
  const {
    Button,
    DirectionToggle
  } = window.DesignSystem_ebeb85;
  const links = ['Home', 'How It Works', 'ROI', 'Demo', 'Features'];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'var(--surface-header)',
      backdropFilter: 'blur(var(--blur-header))',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      height: 'var(--header-height)',
      padding: '0 var(--gutter)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--space-4)',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-agentcory.svg",
    alt: "AgentCory",
    style: {
      height: 26,
      width: 'auto',
      maxWidth: '100%',
      objectFit: 'contain',
      objectPosition: 'left center',
      flex: '0 1 auto',
      minWidth: 0
    }
  }), /*#__PURE__*/React.createElement("nav", {
    className: "cory-hide-mobile",
    style: {
      display: 'flex',
      gap: 'var(--space-7)',
      alignItems: 'center'
    }
  }, links.map((l, i) => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    onClick: e => e.preventDefault(),
    style: {
      fontSize: 'var(--text-ui-sm)',
      fontWeight: 500,
      color: i === 0 ? 'var(--text-strong)' : 'var(--text-body)',
      textDecoration: 'none',
      padding: '10px 0',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      alignItems: 'center',
      minHeight: 24
    }
  }, l))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      flex: 'none'
    }
  }, /*#__PURE__*/React.createElement(DirectionToggle, {
    size: "sm"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    onClick: onTry
  }, "Try Cory Now"))));
}
Object.assign(window, {
  SiteHeader
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/SiteHeader.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Workflows.jsx
try { (() => {
// "How Cory Works" — five automated workflows with metric chips
const Icon = ({
  name
}) => /*#__PURE__*/React.createElement(window.LucideIcon, {
  name: name,
  size: 22
});
function Workflows() {
  const {
    Badge
  } = window.DesignSystem_ebeb85;
  const steps = [{
    icon: 'phone-incoming',
    title: 'Instant Inbound Response',
    body: 'Answer every call, text, email in under 5 seconds.',
    a: '100% Response',
    b: '<5s Answer'
  }, {
    icon: 'timer',
    title: '60-Second Lead Contact',
    body: 'Call, voicemail, SMS, email, automatically sequenced.',
    a: '94% Contact',
    b: '<60s First Touch'
  }, {
    icon: 'calendar-check',
    title: 'Appointment Show & Recovery',
    body: 'Reminders, confirmations, instant no-show rebooking.',
    a: '85% Show Rate',
    b: '67% Recovered'
  }, {
    icon: 'sparkles',
    title: 'Smart Nurture Campaigns',
    body: '15 personalized emails with resources and stories.',
    a: '23% Engagement',
    b: '15 Touch Points'
  }, {
    icon: 'refresh-cw',
    title: 'Long-Term Re-engagement',
    body: '60-day cycles with updates and scholarship alerts.',
    a: '18% Reactivated',
    b: '60 Day Cycle'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-card)',
      borderTop: '1px solid var(--border-subtle)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '76px var(--gutter)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "cory-overline"
  }, "How Cory Works"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      letterSpacing: '-0.03em',
      margin: '10px 0 8px'
    }
  }, "Five workflows, zero manual effort"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Cory runs the entire top of your enrollment funnel, automatically.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, steps.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: '52px minmax(0, 1fr)',
      gap: 20,
      alignItems: 'start',
      background: 'var(--surface-page)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 52,
      height: 52,
      borderRadius: 'var(--radius-md)',
      background: 'var(--gradient-ink)',
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: -8,
      insetInlineStart: -8,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      fontSize: 11,
      fontWeight: 700,
      color: 'var(--text-link)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, i + 1)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      margin: '0 0 3px'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, s.body)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap',
      gridColumn: '2'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, s.a), /*#__PURE__*/React.createElement(Badge, {
    tone: "brand"
  }, s.b)))))));
}
Object.assign(window, {
  Workflows
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Workflows.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ChatBubble = __ds_scope.ChatBubble;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Testimonial = __ds_scope.Testimonial;

__ds_ns.TypingIndicator = __ds_scope.TypingIndicator;

__ds_ns.CoryMark = __ds_scope.CoryMark;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.FeedbackIcon = __ds_scope.FeedbackIcon;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastRegion = __ds_scope.ToastRegion;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Toggle = __ds_scope.Toggle;

__ds_ns.ICONS = __ds_scope.ICONS;

__ds_ns.ICON_ALIASES = __ds_scope.ICON_ALIASES;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ILLUSTRATION_SCENES = __ds_scope.ILLUSTRATION_SCENES;

__ds_ns.Illustration = __ds_scope.Illustration;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.DirectionToggle = __ds_scope.DirectionToggle;

__ds_ns.MediaFrame = __ds_scope.MediaFrame;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

})();
