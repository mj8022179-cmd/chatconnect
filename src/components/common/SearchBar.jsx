export default function SearchBar({ value, onChange, placeholder = 'Search conversations' }) {
  return (
    <label className="search-field">
      <span aria-hidden="true">⌕</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} aria-label={placeholder} />
      {value && <button type="button" onClick={() => onChange('')} aria-label="Clear search">×</button>}
    </label>
  );
}
