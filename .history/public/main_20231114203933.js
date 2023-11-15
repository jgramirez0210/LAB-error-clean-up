import '../styles/main.scss'; // You have to import your styles for them to work. Comment in this line
import htmlStructure from '../components/htmlStructure';
import header from '../components/header';
import startSortingBtn from '../components/startSortingBtn';
// import studentAreas from '../components/studentAreas';
// import studentsOnDom from '../components/studentsOnDom';
// import filterBtnRow from '../components/filterBtnRow';
// import form from '../components/form';
// import students from '../utils/sample_data/students';
// import voldysArmy from '../utils/sample_data/voldysArmy';


const startApp = () => {
  htmlStructure(); // always load first
  header();
  startSortingBtn();
  events(); // always load last
};
startApp();
