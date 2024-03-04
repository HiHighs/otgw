const categories = [
  {
    category: 'Animation',
    emoji: '👺',
    color: 'greenyellow',
  },
  {
    category: 'Short',
    emoji: '🙃',
    color: 'lightgreen',
  },
  {
    category: 'Adventure',
    emoji: '👑',
    color: 'lightseagreen',
  },
  {
    category: 'Halloween',
    emoji: '👻',
    color: 'salmon',
  },
];

function App() {
  function Avatar() {
    return <img src='./otgw.png' alt='avatar' />;
  }

  function Intro() {
    return (
      <div>
        <h1>Over The Garden Wall</h1>
        <p>
          Over the Garden Wall is an American animated television miniseries
          created by Patrick McHale for Cartoon Network. The series is about two
          half-brothers who travel across a mysterious forest to find their way
          home. The show is based on McHale's animated short movie Tome of the
          Unknown.
        </p>
      </div>
    );
  }

  function Category({ category, emoji, color }) {
    return (
      <li className='category' style={{ backgroundColor: color }}>
        {category} {emoji}
      </li>
    );
  }

  function CategoryList() {
    /*props: skill, emoji, background color*/
    return (
      <ul className='category-list'>
        {categories.map((category) => {
          return (
            <Category
              category={category.category}
              emoji={category.emoji}
              color={category.color}
            ></Category>
          );
        })}
      </ul>
    );
  }

  return (
    <div className='card'>
      <Avatar />
      <div className='data'>
        <Intro />
        <CategoryList />
      </div>
    </div>
  );
}

export default App;
