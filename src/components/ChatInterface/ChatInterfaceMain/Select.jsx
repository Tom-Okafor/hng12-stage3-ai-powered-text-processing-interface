import PropTypes from "prop-types";

export default function Select({
  interaction,
  selectedLanguage,
  setSelectedLanguage,
}) {
  return (
    <label htmlFor="language" className="flex gap-2">
      Translate To:
      <select
        id="language"
        className="bg-[#000000cc]"
        value={selectedLanguage}
        onChange={(event) => {
          setSelectedLanguage(event.target.value);
        }}
      >
        <option value="en" disabled={interaction.detectedCode === "en"}>
          English
        </option>
        <option value="pt" disabled={interaction.detectedCode === "pt"}>
          Portuguese
        </option>
        <option value="es" disabled={interaction.detectedCode === "es"}>
          Spanish
        </option>
        <option value="ru" disabled={interaction.detectedCode === "ru"}>
          Russian
        </option>
        <option value="tr" disabled={interaction.detectedCode === "tr"}>
          Turkish
        </option>
        <option value="fr" disabled={interaction.detectedCode === "fr"}>
          French
        </option>
      </select>
    </label>
  );
}

Select.propTypes = {
    interaction: PropTypes.shape({
      detectedCode: PropTypes.string.isRequired,
    }).isRequired,
  selectedLanguage: PropTypes.string.isRequired,
  setSelectedLanguage: PropTypes.func.isRequired,
}