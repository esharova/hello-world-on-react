import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

var data = [
  {
    id: 0,
    title: 'React',
    subtitle: 'Библиотека для создания пользовательских интерфейсов',
    imageUrl: 'https://facebook.github.io/react/img/logo.svg'
  },
  {
    id: 1,
    title: 'Angular 2',
    subtitle: 'Один фреймворк',
    imageUrl: 'https://angular.io/resources/images/logos/angular2/angular.svg'
  },
  {
    id: 2,
    title: 'Ember',
    subtitle: 'Фреймворк для создания амбициозных веб-приложений',
    imageUrl: 'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200'
  },
  {
    id: 3,
    title: 'Vue',
    subtitle: 'Прогрессивный фреймворк',
    imageUrl: 'https://vuejs.org/images/logo.png'
  }
];

ReactDOM.render(
  <App heroes={data} />,
  document.getElementById('root')
);