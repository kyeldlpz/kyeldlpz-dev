"use client";

export default function HeroCollage() {
  return (
    <div className="hero-collage" role="img" aria-label="A playful collage of tools, systems, and interface fragments">
      <div className="collage-line collage-line-one" />
      <div className="collage-line collage-line-two" />
      <div className="collage-sticker collage-keyboard" aria-hidden="true">
        <div className="keyboard-topline"><span>TYPE / SHIP</span><b>01</b></div>
        <div className="keyboard-keys">
          {Array.from({ length: 24 }, (_, index) => <i key={index}>{index % 7 === 0 ? "↗" : ""}</i>)}
        </div>
        <div className="keyboard-space" />
      </div>
      <div className="collage-sticker collage-window" aria-hidden="true">
        <div className="window-bar"><span /><span /><span /></div>
        <div className="window-copy"><small>FIELD NOTE / 026</small><strong>Ideas become<br />systems.</strong><b>↗</b></div>
      </div>
      <div className="collage-sticker collage-headphones" aria-hidden="true"><span className="headband" /><span className="earcup earcup-left" /><span className="earcup earcup-right" /><span className="headphone-wire" /></div>
      <div className="collage-sticker collage-sampler" aria-hidden="true">
        <div className="sampler-label">SIGNAL / 04</div>
        <div className="sampler-screen">GOOD<br />SYSTEMS</div>
        <div className="sampler-controls"><span /><span /><span /><span /><span /><span /><span /><span /></div>
        <div className="sampler-slider" />
      </div>
      <div className="collage-sticker collage-watch" aria-hidden="true"><span className="watch-face"><b>10:24</b><i>BUILD</i></span><span className="watch-band" /></div>
      <div className="collage-caption caption-left">WEB / AI / CLOUD</div>
      <div className="collage-caption caption-right">MAKE IT USEFUL</div>
    </div>
  );
}
