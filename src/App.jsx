import './App.css';

function App() {
  const name = 'John Doe';
  const func = () => 'From east to west chawarma is the best';
  const isLoading = false;
  const showName = false;

  // if (isLoading) return <div>Loading ...</div>;
  return (
    <div className="App">
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <h1>Hello {showName && name}</h1>
          {1 + 2} <br />
          {func()}
        </>
      )}
    </div>
  );
}

export default App;
