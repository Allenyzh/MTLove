interface LanguageSelectorProp {
  language: string;
  setLanguage: (lang: string) => void;
}

export default function LanguageSelector({
  language,
  setLanguage,
}: LanguageSelectorProp) {
  return (
    <select value={language} onChange={(e) => setLanguage(e.target.value)}>
      <option value="en">English</option>
      <option value="zh">中文</option>
    </select>
  );
}
