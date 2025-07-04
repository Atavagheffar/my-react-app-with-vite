// import Home from "./Home.jsx";
import Header from "./Header.jsx";
import Maina from "./Maina.jsx";
import Footer from "./Footer.jsx";
import Main from "./Components/home/Main.jsx";

export default function Home() {
  let name = "Ata Ollah";

  return (
    <div>
      {/* <Header />
      <Maina />
      <Footer /> */}

      <h1 id="name">hello {name} :)</h1>
      <Main />
      {/* <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, officiis?
        Culpa cum tenetur tempora hic. Veniam at molestias, tempore voluptates
        officiis velit aspernatur quos distinctio adipisci, quasi neque esse
        cupiditate. 
      </p>*/}
    </div>
  );
}
