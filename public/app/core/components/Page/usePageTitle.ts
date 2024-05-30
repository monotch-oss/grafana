import { useEffect } from 'react';

import { NavModel, NavModelItem } from '@grafana/data';

import { Branding } from '../Branding/Branding';

export function usePageTitle(navModel?: NavModel, pageNav?: NavModelItem) {
  useEffect(() => {
    const parts: string[] = [];

    if (pageNav) {
      if (pageNav.children) {
        const activePage = pageNav.children.find((x) => x.active);
        if (activePage) {
          parts.push(activePage.text);
        }
      }
      parts.push(pageNav.text);
    }

    parts.push(Branding.AppTitle);

    document.title = parts.join(' - ');
  }, [navModel, pageNav]);
}
