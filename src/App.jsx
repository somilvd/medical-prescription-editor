import React from "react";

export default function App() {

  const [templateUrl] = React.useState("/plantilla.jpg");

  // =========================
  // FORM DATA
  // =========================
  const [formData, setFormData] = React.useState({
    medicamento: "",
    envases: "",
    duracion: "",
    posologia: "",
    unidades: "",
    pauta: "",
    ordenDispensacion: "",

    fechaPrevistaDia: "",
    fechaPrevistaMes: "",
    fechaPrevistaAnio: "",

    pacienteNombre: "",
    pacienteNacimiento: "",
    pacienteDni: "",

    prescriptorNombre: "",
    prescriptorColegiado: "",
    prescriptorEspecialidad: "",
    prescriptorDireccion: "",

    fechaPrescripcionDia: "",
    fechaPrescripcionMes: "",
    fechaPrescripcionAnio: "",

    infoFarmaceutico: "",

    urgencia: "",
    desabastecimiento: "",

    farmacia: "",

    fechaDispensacionDia: "",
    fechaDispensacionMes: "",
    fechaDispensacionAnio: "",

    diagnostico: "",
    instrucciones: "",
  });

  // =========================
  // REQUIRED
  // =========================
  const requiredFields = [
    "fechaPrevistaDia",
    "fechaPrevistaMes",
    "fechaPrevistaAnio",
    "pacienteNombre",
    "pacienteNacimiento",
    "pacienteDni",
    "prescriptorNombre",
    "prescriptorColegiado",
    "prescriptorEspecialidad",
    "fechaPrescripcionDia",
    "fechaPrescripcionMes",
    "fechaPrescripcionAnio",
  ];

  // =========================
  // LABELS
  // =========================
  const labels = {
    medicamento: "Medicamento",
    envases: "Nº envases/unidades",
    duracion: "Duración del tratamiento",
    posologia: "Posología",
    unidades: "Unidades",
    pauta: "Pauta",
    ordenDispensacion: "N.º orden dispensación",

    fechaPrevistaDia: "Fecha prevista dispensación - Día",
    fechaPrevistaMes: "Fecha prevista dispensación - Mes",
    fechaPrevistaAnio: "Fecha prevista dispensación - Año",

    pacienteNombre: "Nombre y apellidos del paciente",
    pacienteNacimiento: "Año de nacimiento del paciente",
    pacienteDni: "DNI/NIE/Pasaporte del paciente",

    prescriptorNombre: "Nombre y apellidos del prescriptor",
    prescriptorColegiado: "Nº colegiado",
    prescriptorEspecialidad: "Especialidad",
    prescriptorDireccion: "Dirección / población",

    fechaPrescripcionDia: "Fecha de la prescripción - Día",
    fechaPrescripcionMes: "Fecha de la prescripción - Mes",
    fechaPrescripcionAnio: "Fecha de la prescripción - Año",

    infoFarmaceutico: "Información al farmacéutico",

    urgencia: 'Urgencia (poner "x" si aplica)',
    desabastecimiento:
      'Desabastecimiento (poner "x" si aplica)',

    farmacia: "Farmacia (NIF/CIF)",

    fechaDispensacionDia:
      "Fecha dispensación - Día",

    fechaDispensacionMes:
      "Fecha dispensación - Mes",

    fechaDispensacionAnio:
      "Fecha dispensación - Año",

    diagnostico: "Diagnóstico(s)",

    instrucciones:
      "Instrucciones al paciente",
  };

  // =========================
  // CAMPOS EN PLANTILLA
  // =========================
  const [fields, setFields] = React.useState([
    { id: "medicamento", key: "medicamento", label: "Medicamento", x: 50, y: 80, size: 14 },
    { id: "envases", key: "envases", label: "Envases", x: 50, y: 110, size: 14 },
    { id: "duracion", key: "duracion", label: "Duración", x: 50, y: 140, size: 14 },
    { id: "posologia", key: "posologia", label: "Posología", x: 50, y: 170, size: 14 },
    { id: "unidades", key: "unidades", label: "Unidades", x: 50, y: 200, size: 14 },
    { id: "pauta", key: "pauta", label: "Pauta", x: 50, y: 230, size: 14 },
    { id: "ordenDispensacion", key: "ordenDispensacion", label: "Orden", x: 50, y: 260, size: 14 },

    { id: "fechaPrevistaDia", key: "fechaPrevistaDia", label: "Fecha Prevista Día", x: 50, y: 290, size: 14 },
    { id: "fechaPrevistaMes", key: "fechaPrevistaMes", label: "Fecha Prevista Mes", x: 180, y: 290, size: 14 },
    { id: "fechaPrevistaAnio", key: "fechaPrevistaAnio", label: "Fecha Prevista Año", x: 310, y: 290, size: 14 },

    { id: "pacienteNombre", key: "pacienteNombre", label: "Paciente", x: 50, y: 330, size: 14 },
    { id: "pacienteNacimiento", key: "pacienteNacimiento", label: "Nacimiento", x: 50, y: 360, size: 14 },
    { id: "pacienteDni", key: "pacienteDni", label: "DNI", x: 50, y: 390, size: 14 },

    { id: "prescriptorNombre", key: "prescriptorNombre", label: "Prescriptor", x: 50, y: 430, size: 14 },
    { id: "prescriptorColegiado", key: "prescriptorColegiado", label: "Colegiado", x: 50, y: 460, size: 14 },
    { id: "prescriptorEspecialidad", key: "prescriptorEspecialidad", label: "Especialidad", x: 50, y: 490, size: 14 },
    { id: "prescriptorDireccion", key: "prescriptorDireccion", label: "Dirección", x: 50, y: 520, size: 14 },

    { id: "fechaPrescripcionDia", key: "fechaPrescripcionDia", label: "Fecha Prescripción Día", x: 50, y: 560, size: 14 },
    { id: "fechaPrescripcionMes", key: "fechaPrescripcionMes", label: "Fecha Prescripción Mes", x: 180, y: 560, size: 14 },
    { id: "fechaPrescripcionAnio", key: "fechaPrescripcionAnio", label: "Fecha Prescripción Año", x: 310, y: 560, size: 14 },

    { id: "infoFarmaceutico", key: "infoFarmaceutico", label: "Info Farmacéutico", x: 50, y: 600, size: 14 },

    { id: "urgencia", key: "urgencia", label: "Urgencia", x: 50, y: 630, size: 14 },
    { id: "desabastecimiento", key: "desabastecimiento", label: "Desabastecimiento", x: 180, y: 630, size: 14 },

    { id: "farmacia", key: "farmacia", label: "Farmacia", x: 50, y: 670, size: 14 },

    { id: "fechaDispensacionDia", key: "fechaDispensacionDia", label: "Fecha Disp. Día", x: 50, y: 700, size: 14 },
    { id: "fechaDispensacionMes", key: "fechaDispensacionMes", label: "Fecha Disp. Mes", x: 180, y: 700, size: 14 },
    { id: "fechaDispensacionAnio", key: "fechaDispensacionAnio", label: "Fecha Disp. Año", x: 310, y: 700, size: 14 },

    { id: "diagnostico", key: "diagnostico", label: "Diagnóstico", x: 50, y: 740, size: 14 },
    { id: "instrucciones", key: "instrucciones", label: "Instrucciones", x: 50, y: 770, size: 14 },
  ]);

  const [dragging, setDragging] = React.useState(null);
  const [selectedField, setSelectedField] = React.useState(null);

  const paperRef = React.useRef(null);

  // =========================
  // VALIDAR FECHAS
  // =========================
  const validateDate = (day, month, year) => {

    if (!day || !month || !year) {
      return false;
    }

    const d = Number(day);
    const m = Number(month);
    const y = Number(year);

    if (d < 1 || d > 31) {
      return false;
    }

    if (m < 1 || m > 12) {
      return false;
    }

    if (y < 1900 || y > 9999) {
      return false;
    }

    const date =
      new Date(y, m - 1, d);

    return (
      date.getFullYear() === y &&
      date.getMonth() === m - 1 &&
      date.getDate() === d
    );
  };

  // =========================
  // VALIDAR TODO
  // =========================
  const validateForm = () => {

    // obligatorios
    for (const field of requiredFields) {

      if (!formData[field]) {

        alert(
          `El campo obligatorio '${labels[field]}' está vacío.`
        );

        return false;
      }
    }

    // fecha prescripción
    const validPrescripcion =
      validateDate(
        formData.fechaPrescripcionDia,
        formData.fechaPrescripcionMes,
        formData.fechaPrescripcionAnio
      );

    if (!validPrescripcion) {

      alert(
        "La fecha de prescripción no es válida."
      );

      return false;
    }

    // fecha prevista
    const validPrevista =
      validateDate(
        formData.fechaPrevistaDia,
        formData.fechaPrevistaMes,
        formData.fechaPrevistaAnio
      );

    if (!validPrevista) {

      alert(
        "La fecha prevista de dispensación no es válida."
      );

      return false;
    }

    return true;
  };

  // =========================
  // MOVE
  // =========================
  const onMove = (e) => {

    if (!dragging) return;

    const rect =
      paperRef.current.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setFields((prev) =>
      prev.map((f) =>
        f.id === dragging
          ? { ...f, x, y }
          : f
      )
    );
  };

  const stopDrag = () => {
    setDragging(null);
  };

  // =========================
  // JSON
  // =========================
  const downloadJson = () => {

    if (!validateForm()) {
      return;
    }

    const parsedData = {
      ...formData,

      urgencia:
        formData.urgencia === "x",

      desabastecimiento:
        formData.desabastecimiento === "x",
    };

    const data = {
      formData: parsedData,
      fields,
    };

    const blob = new Blob(
      [JSON.stringify(data, null, 2)],
      {
        type: "application/json",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const a =
      document.createElement("a");

    a.href = url;
    a.download = "prescripcion.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  // =========================
  // PRINT
  // =========================
  const print = () => {
    if (!validateForm()) return;

    document.body.classList.add("print-mode");
    window.print();
  };

  React.useEffect(() => {
    const after = () => document.body.classList.remove("print-mode");
    window.addEventListener("afterprint", after);
    return () => window.removeEventListener("afterprint", after);
  }, []);

  return (
    <div className="app">

      {/* PANEL */}
      <div className="panel no-print">

        <h1>Prescripción</h1>

        {Object.keys(formData).map((k) => {

          const isRequired =
            requiredFields.includes(k);

          const isDay =
            k.toLowerCase().includes("dia");

          const isMonth =
            k.toLowerCase().includes("mes");

          const isYear =
            k.toLowerCase().includes("anio");

          return (
            <div key={k}>

              <label>
                {labels[k]}
                {isRequired && " *"}
              </label>

              {k === "urgencia" ||
                k === "desabastecimiento" ? (

                <input
                  type="text"
                  maxLength="1"
                  placeholder='Escriba "x"'
                  value={formData[k]}
                  onChange={(e) => {

                    const value =
                      e.target.value.toLowerCase();

                    if (
                      value === "" ||
                      value === "x"
                    ) {

                      setFormData({
                        ...formData,
                        [k]: value,
                      });
                    }
                  }}
                />

              ) : (

                <input
                  type={
                    isDay ||
                      isMonth ||
                      isYear
                      ? "number"
                      : "text"
                  }
                  value={formData[k]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [k]: e.target.value,
                    })
                  }
                />

              )}

            </div>
          );
        })}

        {/* SIZE */}
        {selectedField && (

          <div className="size-box">

            <h3>
              📏 Tamaño:
              {" "}
              {selectedField.label}
            </h3>

            <input
              type="number"
              min="8"
              max="60"
              value={
                fields.find(
                  (f) =>
                    f.id ===
                    selectedField.id
                )?.size
              }
              onChange={(e) => {

                const value = Math.min(
                  60,
                  Math.max(
                    8,
                    Number(e.target.value)
                  )
                );

                setFields((prev) =>
                  prev.map((f) =>
                    f.id ===
                      selectedField.id
                      ? {
                        ...f,
                        size: value,
                      }
                      : f
                  )
                );
              }}
            />

          </div>

        )}

        <button onClick={downloadJson}>
          Descargar JSON
        </button>

        <button onClick={print}>
          Imprimir
        </button>

      </div>

      {/* PAPER */}
      <div className="paper-wrapper">

        <div
          ref={paperRef}
          className="paper"
          onMouseMove={onMove}
          onMouseUp={stopDrag}
          onMouseLeave={stopDrag}
        >

          <img
            src={templateUrl}
            className="bg"
          />

          {fields.map((f) => (

            <div
              key={f.id}
              className="field"
              style={{
                left: f.x,
                top: f.y,
                fontSize: f.size,
              }}
              onMouseDown={() =>
                setDragging(f.id)
              }
              onClick={() =>
                setSelectedField(f)
              }
            >
              {String(formData[f.key])}
            </div>

          ))}

        </div>

      </div>

    </div>
  );
}