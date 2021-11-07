export interface IconFolderSettings {
  enableRemixiconsLine: boolean;
  enableRemixiconsFill: boolean;
  enableFontawesomeFill: boolean;
  enableFontawesomeLine: boolean;
  enableFontawesomeBrands: boolean;
  fontSize: number;
}

export const DEFAULT_SETTINGS: IconFolderSettings = {
  enableRemixiconsLine: true,
  enableRemixiconsFill: false,
  enableFontawesomeFill: false,
  enableFontawesomeLine: false,
  enableFontawesomeBrands: false,
  fontSize: 16,
};
