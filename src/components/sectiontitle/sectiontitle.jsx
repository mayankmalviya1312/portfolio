import "./sectiontitle.css";

function SectionTitle({
  subtitle,
  title,
  description,
  center = false,
}) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <span>{subtitle}</span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}

export default SectionTitle;