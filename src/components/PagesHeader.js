import {useContext} from 'react';
import DataContext from '../context/DataContext';
import Breadcrumb from './Breadcrumb'
import Header from '../components/Header'



function PagesHeader({page}) {

  const {pageTitle} = useContext(DataContext);
  
  // Find the title object for the current page
  const titleObj = pageTitle.find(title => title.name.toLowerCase() === page.toLowerCase());

  // If a title object is found, use its name as the title, otherwise use a default title
  const title = titleObj ? titleObj.name : 'Default Title';

  return (
    <section className="page-header">
      <Header />
      <div className="page-header-bread">
        <div className="page-header-bread-0">
          <h2>
            {title}
          </h2>
          <Breadcrumb title={title}/>
        </div>
      </div>
    </section>
  )
}

export default PagesHeader