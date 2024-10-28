import "./App.css";
import List from "./components/List";
import Header from "./components/Header";
import Editor from "./components/Editor";

function App() {
  return (
    <div className="APP">
      <Header />
      <Editor />
      <List />
    </div>
  );
}

export default App;
