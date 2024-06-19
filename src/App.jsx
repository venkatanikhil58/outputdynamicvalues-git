const reactCars = ["Volvo", "Tata", "Mahindra"];

function getRandomInt(maxIndex) {
  return Math.floor(Math.random() * (maxIndex + 1));
}

function Header() {
  const car = reactCars[getRandomInt(2)];

  return (
    <header>
      <h1>Car details</h1>

      <p><strong>{car}</strong> car is made in india with high build quality</p>
    </header>
  )
}

function App() {
  return (
    <>
      <Header />

      <main>
        <h4>importance of safety</h4>
      </main>
    </>
  )
}

export default App;