function App() {
  function Avatar() {
    return <img src='./otgw.png' alt='avatar' />;
  }

  function Intro() {
    return (
      <div>
        <h1>Over The Garen Wall</h1>
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

  function Category(props) {
    return (
      <li className='category' style={{ backgroundColor: props.color }}>
        {props.category} {props.emoji}
      </li>
    );
  }

  function CategoryList() {
    /*props: skill, emoji, background color*/
    return (
      <ul className='category-list'>
        <Category category='Animation' emoji='👺' color='greenyellow' />
        <Category category='Short' emoji='🙃' color='lightgreen' />
        <Category category='Adventure' emoji='👑' color='lightseagreen' />
        <Category category='Halloween' emoji='👻' color='salmon' />
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
