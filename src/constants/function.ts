export function tsQuerySelector<T extends HTMLElement>(
  parent: Element | Document,
  selector: string
): T {
  const element = parent.querySelector<T>(selector);
  if (!element) {
    throw new Error(`No such ${element}`);
  }
  return element;
}

export function tsQuerySelectorAll<T extends HTMLElement>(
  parent: Element | Document,
  selector: string
) {
  const element = parent.querySelectorAll<T>(selector);
  if (!element) {
    throw new Error(`No such ${element}`);
  }
  return element;
}
