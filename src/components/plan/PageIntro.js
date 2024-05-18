// PageIntro.js
import React, { useContext } from 'react';
import DataContext from '../../context/DataContext';

function PageIntro({ page }) {
  const { data } = useContext(DataContext);
  const { about, plans, terms } = data;
  let pageTitle, pageContent;

  switch (page) {
    case 'about':
      pageTitle = about.title;
      pageContent = about.content;
      break;
    case 'plans':
      pageTitle = plans.title;
      pageContent = plans.content;
      break;
    case 'terms':
      pageTitle = terms.title;
      pageContent = terms.content;
      break;
    default:
      break;
  }

  return (
    <div className="col-12">
      <div className="invest-pack-0">
        <h3>{pageTitle}</h3>
        <p>{pageContent}</p>
      </div>
    </div>
  );
}

export default PageIntro;
