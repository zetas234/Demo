const IVA_RATE = 0.14;

const baseValueInput = document.getElementById("baseValue");
const calculateButton = document.getElementById("calculateButton");
const warning = document.getElementById("warning");
const baseResult = document.getElementById("baseResult");
const ivaResult = document.getElementById("ivaResult");
const totalResult = document.getElementById("totalResult");

// Formata valores no padrão da moeda angolana.
const formatKz = (value) => {
  return new Intl.NumberFormat("pt-AO", {
    style: "currency",
    currency: "AOA"
  }).format(value);
};

// Aceita números escritos com vírgula ou ponto decimal.
const parseBaseValue = (value) => {
  return Number(value.trim().replace(",", "."));
};

const showWarning = () => {
  warning.textContent = "Insira um valor válido.";
  baseResult.textContent = "-";
  ivaResult.textContent = "-";
  totalResult.textContent = "-";
};

const calculateIva = () => {
  const baseValue = parseBaseValue(baseValueInput.value);

  if (!Number.isFinite(baseValue) || baseValue <= 0) {
    showWarning();
    return;
  }

  const ivaValue = baseValue * IVA_RATE;
  const totalValue = baseValue + ivaValue;

  warning.textContent = "";
  baseResult.textContent = formatKz(baseValue);
  ivaResult.textContent = formatKz(ivaValue);
  totalResult.textContent = formatKz(totalValue);
};

calculateButton.addEventListener("click", calculateIva);
