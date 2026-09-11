import { caseStudies, CaseStudy } from "@/lib/data";
import { Reveal } from "./Reveal";
import { VoiceVisual } from "./visuals/VoiceVisual";
import { ChatVisual } from "./visuals/ChatVisual";
import { FlowVisual } from "./visuals/FlowVisual";

function Visual({ type }: { type: CaseStudy["visual"] }) {
  if (type === "voice") return <VoiceVisual />;
  if (type === "chat") return <ChatVisual />;
  return <FlowVisual />;
}

function CaseRow({ study }: { study: CaseStudy }) {
  return (
    <Reveal>
      <div className={`case ${study.reverse ? "case-reverse" : ""}`}>
        <div>
          <div className="case-label">{study.label}</div>
          <h3>{study.title}</h3>
          <p>{study.description}</p>
          <ul>
            {study.features.map((f) => (
              <li key={f.k}>
                <span>{f.k}</span>
                <span>{f.v}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="case-visual">
          <Visual type={study.visual} />
        </div>
      </div>
    </Reveal>
  );
}

export function CaseStudies() {
  return (
    <section id="sistemas">
      <div className="wrap">
        {caseStudies.map((study) => (
          <CaseRow key={study.id} study={study} />
        ))}
      </div>
    </section>
  );
}
