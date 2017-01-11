const initialState = [
  {
    id: 0,
    title: 'React',
    subtitle: 'Библиотека для создания пользовательских интерфейсов',
    imageUrl: 'https://facebook.github.io/react/img/logo.svg',
    likes: 0
  },
  {
    id: 1,
    title: 'Angular 2',
    subtitle: 'Один фреймворк',
    imageUrl: 'https://angular.io/resources/images/logos/angular2/angular.svg',
    likes: 0
  },
  {
    id: 2,
    title: 'Ember',
    subtitle: 'Фреймворк для создания амбициозных веб-приложений',
    imageUrl: 'http://www.gravatar.com/avatar/0cf15665a9146ba852bf042b0652780a?s=200',
    likes: 0
  },
  {
    id: 3,
    title: 'Vue',
    subtitle: 'Прогрессивный фреймворк',
    imageUrl: 'https://vuejs.org/images/logo.png',
    likes: 0
  }
];

export default function framework(state = initialState, action) {
  if (action.type === 'ADD_LIKE') {
    console.log('Reducer ADD_LIKE');
    state[action.id] = {
      ...state[action.id],
      likes: ++state[action.id].likes
    };
    return state = [...state];
  }

  return state;
}