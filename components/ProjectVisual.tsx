import type { ProjectVisual as ProjectVisualType } from "../data/portfolio";

type ProjectVisualProps = {
  type: ProjectVisualType;
  title: string;
};

function CareVisual() {
  return (
    <div className="visual-art visual-care" aria-hidden="true">
      <div className="care-grid" />
      <div className="care-person">
        <span className="care-head" />
        <span className="care-torso" />
        <span className="care-arm care-arm-left" />
        <span className="care-arm care-arm-right" />
        <span className="care-leg care-leg-left" />
        <span className="care-leg care-leg-right" />
      </div>
      <div className="care-signal">
        <span>EARLY WARNING</span>
        <strong>0.82</strong>
      </div>
      <div className="care-footer">EDGE DEVICE / LOCAL PROFILE</div>
    </div>
  );
}

function LegalVisual() {
  return (
    <div className="visual-art visual-legal" aria-hidden="true">
      <div className="legal-topline"><span>CASE OPERATIONS</span><span>LIVE VIEW</span></div>
      <div className="legal-metrics"><strong>248</strong><span>active matters</span><i>+12.4%</i></div>
      <div className="legal-bars">
        <span className="bar-long" /><span className="bar-mid" /><span className="bar-short" /><span className="bar-tall" />
      </div>
      <div className="legal-table">
        <span /><span /><span /><span className="table-accent" />
        <span /><span /><span /><span />
        <span /><span /><span /><span className="table-accent" />
      </div>
    </div>
  );
}

function GreenhouseVisual() {
  return (
    <div className="visual-art visual-greenhouse" aria-hidden="true">
      <div className="greenhouse-sun" />
      <div className="greenhouse-frame"><span /><span /><span /><span /></div>
      <div className="greenhouse-bed">
        <i /><i /><i /><i /><i /><i />
      </div>
      <div className="greenhouse-data"><strong>24.8°</strong><span>humidity 62%</span><span>co₂ 814 ppm</span></div>
    </div>
  );
}

function CloudVisual() {
  return (
    <div className="visual-art visual-cloud" aria-hidden="true">
      <div className="cloud-orbit cloud-orbit-one" />
      <div className="cloud-orbit cloud-orbit-two" />
      <div className="cloud-node cloud-node-one">API</div>
      <div className="cloud-node cloud-node-two">DB</div>
      <div className="cloud-node cloud-node-three">EDGE</div>
      <div className="cloud-core">K</div>
      <div className="cloud-status"><span /> all systems nominal</div>
    </div>
  );
}

function resolveVisual(type: ProjectVisualType) {
  switch (type) {
    case "care":
      return <CareVisual />;
    case "legal":
      return <LegalVisual />;
    case "greenhouse":
      return <GreenhouseVisual />;
    case "cloud":
      return <CloudVisual />;
    default:
      return null;
  }
}

export default function ProjectVisual({ type, title }: ProjectVisualProps) {
  return <div role="img" aria-label={`${title} project visual`}>{resolveVisual(type)}</div>;
}
