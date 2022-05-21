const VariantPicker = ({ variants, ...props }) => {
  if (variants.length === (0 || 1)) return null;

  return (
    <select
      {...props}
      className="appearance-none w-full relative mb-3 sm:mb-0 flex-grow font-oxanium-semibold sm:mr-3 pl-3 py-2 bg-midnight-blue border border-sunset-pink focus:border-sunset-pink shadow-sm text-cloudy-day text-sm focus:outline-none focus:text-cloudy-day rounded"
    >
      {variants.map(({ external_id, name }) => (
        <option key={external_id} value={external_id}>
          {name}
        </option>
      ))}
    </select>
  );
};

export default VariantPicker;
