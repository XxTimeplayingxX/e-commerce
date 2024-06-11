import "./App.css";
import NavBar from './Components/Navbar/Navbar.jsx';
import Header from './Components/Header/Header.jsx';

function App() {
  return (
    <>
      <section id="collection-1602">
        <div class="cs-container">
          <div class="cs-content">
            <Header>New Collection</Header>
            <div class="cs-button-group">
              <NavBar>New Arrival</NavBar>
              <NavBar>Top Rating</NavBar>
              <NavBar>Best Seller</NavBar>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
