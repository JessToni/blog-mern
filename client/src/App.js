import './App.css';

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">MyBlog</a>
        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>
      <div class="post">
        <div class="image">
          <img src="https://keegomobility.com/wp-content/uploads/2021/01/green-transportation-electric-car.png" alt="Electric Car"/>
        </div>
        <div class="text">
          <h2>Green Transportation is the Key</h2>
          <p class="info">
            <a class="author">Jess Antoni Mosquera</a>
            <time>2023-08-11 22:21</time>
          </p>
          <p>Green transportation is any means of travel that doesn’t negatively impact the environment.</p>
        </div>
      </div>
      <div class="post">
        <div class="image">
          <img src="https://keegomobility.com/wp-content/uploads/2021/01/green-transportation-electric-car.png" alt="Electric Car"/>
        </div>
        <div class="text">
          <h2>Green Transportation is the Key</h2>
          <p>Green transportation is any means of travel that doesn’t negatively impact the environment.</p>
        </div>
      </div>
      <div class="post">
        <div class="image">
          <img src="https://keegomobility.com/wp-content/uploads/2021/01/green-transportation-electric-car.png" alt="Electric Car"/>
        </div>
        <div class="text">
          <h2>Green Transportation is the Key</h2>
          <p>Green transportation is any means of travel that doesn’t negatively impact the environment.</p>
        </div>
      </div>
    </main>
  );
}

export default App;
