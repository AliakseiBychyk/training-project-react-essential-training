const { createElement } = React

const title = createElement(
  'h1',
  { id: 'title', className: 'header' },
  'Hello World'
)

ReactDOM.render(
  title,
  document.getElementById('react-container')
)