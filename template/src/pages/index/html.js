import content from './content.hbs';
import layout from 'layout';

export default layout.init({
  pageTitle: 'AdminLTE 2 | Dashboard'
}).run(content);
