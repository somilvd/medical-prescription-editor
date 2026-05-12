import React from "react";

export default function App() {
  const [templateUrl] = React.useState("/plantilla.jpg");

  const [formData, setFormData] = React.useState({
    receta: "",
    paciente: "",
    dni: "",
    medicamento: "",
    posologia: "",
    envases: "",
    unidades: "",
    prescriptor: "",
    fecha: "",
  });

  const [fields, setFields] = React.useState([
    { id: "receta", key: "receta", label: "Receta", x: 80, y: 80, size: 16 },
    { id: "paciente", key: "paciente", label: "Paciente", x: 520, y: 140, size: 16 },
    { id: "dni", key: "dni", label: "DNI", x: 520, y: 170, size: 14 },
    { id: "medicamento", key: "medicamento", label: "Medicamento", x: 80, y: 200, size: 16 },
    { id: "posologia", key: "posologia", label: "Posología", x: 80, y: 230, size: 14 },
    { id: "envases", key: "envases", label: "Envases", x: 80, y: 260, size: 14 },
    { id: "unidades", key: "unidades", label: "Unidades", x: 80, y: 290, size: 14 },
    { id: "prescriptor", key: "prescriptor", label: "Doctor", x: 520, y: 380, size: 14 },
    { id: "fecha", key: "fecha", label: "Fecha", x: 520, y: 410, size: 14 },
  ]);

  const [dragging, setDragging] = React.useState(null);
  const [selectedField, setSelectedField] = React.useState(null);

  const paperRef = React.useRef(null);

  // MOVE
  const onMove = (e) => {
    if (!dragging) return;

    const rect = paperRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setFields((prev) =>
      prev.map((f) =>
        f.id === dragging ? { ...f, x, y } : f
      )
    );
  };

  const stopDrag = () => setDragging(null);

  const print = () => window.print();

  return (
    <div className="app">

      {/* PANEL */}
      <div className="panel no-print">

        <h1>Introduzca los datos de los campos correspondientes </h1>

        {/* FORMULARIO */}
        {Object.keys(formData).map((k) => (
          <div key={k}>
            <label>{k}</label>
            <input
              value={formData[k]}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  [k]: e.target.value,
                })
              }
            />
          </div>
        ))}

        <button onClick={print}>Imprimir</button>

        {/* 🟢 EDITOR DE TAMAÑO */}
        {selectedField && (
          <div className="size-box">
            <h3>📏 Tamaño del campo: {selectedField.label}</h3>

            <input
              type="number"
              min="8"
              max="60"
              value={
                fields.find((f) => f.id === selectedField.id)?.size
              }
              onChange={(e) => {
                const value = Math.min(
                  60,
                  Math.max(8, Number(e.target.value))
                );

                setFields((prev) =>
                  prev.map((f) =>
                    f.id === selectedField.id
                      ? { ...f, size: value }
                      : f
                  )
                );
              }}
            />

            <div>Tamaño actual: {fields.find((f) => f.id === selectedField.id)?.size}px</div>
          </div>
        )}

      </div>

      {/* PAPEL A4 */}
      <div className="paper-wrapper">

        <div
          ref={paperRef}
          className="paper"
          onMouseMove={onMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >

          <img src={templateUrl} className="bg" />

          {fields.map((f) => (
            <div
              key={f.id}
              className="field"
              style={{
                left: f.x,
                top: f.y,
                fontSize: f.size,
              }}
              onMouseDown={() => setDragging(f.id)}
              onClick={() => setSelectedField(f)}
            >
              {formData[f.key]}
            </div>
          ))}

        </div>

      </div>

    </div>
  );
}