import React from 'react';

import PushBanner from './PushBanner';
import { RenderProps } from "@/models/cms/component";

export default function RenderComponents(props: RenderProps) {
  const { pageComponents, entryUid, contentTypeUid, locale } = props;
  return (
    <div
      data-pageref={entryUid}
      data-contenttype={contentTypeUid}
      data-locale={locale}
    >
      {pageComponents?.map((component, key: number) => {
        if (component.hero_banner) {
          return (
            <PushBanner
              banner={component.hero_banner}
              key={`component-${key}`}
            />
          );
        }
      })}
    </div>
  );
}
