const STEPS: { label: string; tag: string }[] = [
  { label: "Lead entra (Meta Ads)", tag: "live" },
  { label: "Calificación automática", tag: "n8n" },
  { label: "Match de propiedad", tag: "IA" },
  { label: "Cita agendada", tag: "GHL" },
];

export function FlowVisual() {
  return (
    <div className="flow-visual">
      {STEPS.map((step, i) => (
        <div key={step.label}>
          <div className="flow-node">
            <span>{step.label}</span>
            <span className="tag">{step.tag}</span>
          </div>
          {i < STEPS.length - 1 && <div className="flow-connector" />}
        </div>
      ))}
    </div>
  );
}
