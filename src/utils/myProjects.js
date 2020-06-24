import touristee from '../assets/touristee.jpg';
import foodDiary from '../assets/foodDiary.png';
import chirrup from '../assets/chirrup.png';
import employeeDir from '../assets/employeeDir.png';
import googleBook from '../assets/googleBook.png';
import budgetTracker from '../assets/budgetTracker.png';


const myProjects = [
  {
    id: 0,
    title: 'Chirrup!',
    description: 'ReactJS, NodeJS, ExpressJS, MongoDB',
    repo: 'https://github.com/kishaprudente/madagascar',
    demo: 'https://chirrup-app.herokuapp.com/',
    image: chirrup,
  },
  {
    id: 1,
    title: 'Touristee',
    description: 'HTML, CSS, JavaScript, jQuery',
    repo: 'https://github.com/kishaprudente/touristee',
    demo: 'https://kishaprudente.github.io/touristee/',
    image: touristee,
  },
  {
    id: 2,
    title: 'My Food Diary',
    description: 'JavaScript, Bulma, MySQL',
    repo: 'https://github.com/jiyoon9886/food_diaries',
    demo: 'https://food-diaries.herokuapp.com/',
    image: foodDiary,
  },
  {
    id: 3,
    title: 'Employee Directory',
    description: 'JavaScript, React, NodeJS, Express',
		repo: 'https://github.com/jiyoon9886/employee-directory',
		demo: 'https://jkim-user-dir.herokuapp.com/',
    image: employeeDir,
  },
  {
    id: 4,
    title: 'Budget Tracker',
    description: 'HTML, Express, MongoDB',
		repo: 'https://github.com/jiyoon9886/budget-tracker',
		demo: 'https://budget-tracker-ver1.herokuapp.com/',
    image: budgetTracker,
  },
  {
    id: 5,
    title: 'Google Books Search',
    description: 'ReactJS, NodeJS, MongoDB, Express',
		repo: 'https://github.com/jiyoon9886/google-book-search',
		demo: 'https://mern-reading-list-1.herokuapp.com/',
    image: googleBook,
  },
];

export default myProjects;
