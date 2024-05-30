import React from 'react';
export function Home(props: any) {
  return (
    <div className="MOHeadContainer">
      <a className="" href={props.homeUrl} title="Applications Menu" target="_self" rel="noopener">
        <div className="MOHLeftIco">
          <img src="public/img/menu/menubtn.png" alt="Menu" />
        </div>
      </a>
    </div>
  );
}
