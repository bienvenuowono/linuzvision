// One editable text: the dashboard group it belongs to, its French label, and the original wording.
// In the value, a line break ("\n") becomes a line break on the page.
export type TextField = readonly [group: string, label: string, value: string];

export function definePage<const T extends Record<string, TextField>>(name: string, path: string, texts: T) {
  return { name, path, texts };
}
