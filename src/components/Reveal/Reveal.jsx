import useReveal from "../../hooks/useReveal";

function Reveal({ children }) {
  const ref = useReveal();

  return (
    <div ref={ref} className="fade-up">
      {children}
    </div>
  );
}

export default Reveal;