/* Marcas de mira nos cantos, como na janela gráfica do CAM */
const CadCorners = ({ size = "w-4 h-4", muted = false }: { size?: string; muted?: boolean }) => (
  <>
    {[
      "top-0 left-0 border-t-2 border-l-2",
      "top-0 right-0 border-t-2 border-r-2",
      "bottom-0 left-0 border-b-2 border-l-2",
      "bottom-0 right-0 border-b-2 border-r-2",
    ].map((c) => (
      <span
        key={c}
        aria-hidden="true"
        className={`pointer-events-none absolute ${size} ${c} transition-colors duration-300 ${
          muted ? "border-white/20 group-hover:border-[#FE731A]" : "border-[#FE731A]"
        }`}
      />
    ))}
  </>
);

export default CadCorners;
