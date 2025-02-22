import PropTypes from "prop-types";

export default function Select({
  interaction,
  selectedLanguage,
  setSelectedLanguage,
}) {
  return (
    <div className="flex gap-2">
      <label>Translate To:</label>
      <select
        id="language"
        className="bg-[#000000cc]"
        value={selectedLanguage}
        onChange={(event) => {
          setSelectedLanguage(event.target.value);
        }}
        aria-label="select language to translate to"
      >
        <option
          value="en"
          disabled={interaction.detectedCode === "en"}
          aria-disabled={interaction.detectedCode === "en"}
        >
          English
        </option>

        <option
          value="pt"
          disabled={interaction.detectedCode === "pt"}
          aria-disabled={interaction.detectedCode === "pt"}
        >
          Portuguese
        </option>

        <option
          value="es"
          disabled={interaction.detectedCode === "es"}
          aria-disabled={interaction.detectedCode === "es"}
        >
          Spanish
        </option>

        <option
          value="ru"
          disabled={interaction.detectedCode === "ru"}
          aria-disabled={interaction.detectedCode === "tr"}
        >
          Russian
        </option>

        <option
          value="tr"
          aria-disabled={interaction.detectedCode === "tr"}
          disabled={interaction.detectedCode === "tr"}
        >
          Turkish
        </option>

        <option
          value="fr"
          aria-disabled={interaction.detectedCode === "fr"}
          disabled={interaction.detectedCode === "fr"}
        >
          French
        </option>
      </select>
    </div>
  );
}

Select.propTypes = {
  interaction: PropTypes.shape({
    detectedCode: PropTypes.string.isRequired,
  }).isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  setSelectedLanguage: PropTypes.func.isRequired,
};
