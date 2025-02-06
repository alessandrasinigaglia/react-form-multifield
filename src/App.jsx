import { useState } from "react";

export default function App() {
  const fixedItems = ["Pane", "Acqua", "Uova"];
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("FrontEnd");
  const [shoppingList, setShoppingList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEntry = { author, content, category };
    setShoppingList([...shoppingList, newEntry]);

    setAuthor("");
    setContent("");
    setCategory("FrontEnd");
  };

  return (
    <div>
      <h1>Lista</h1>
      <ul>
        {fixedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
        {shoppingList.map((item, index) => (
          <li key={index + fixedItems.length}>
            <strong>{item.author}:</strong> {item.content} ({item.category})
          </li>
        ))}
      </ul>

      <hr />
      <h3>Aggiungi alla lista</h3>
      <form onSubmit={handleSubmit}>
        <label>Autore</label>
        <input 
          type="text" 
          value={author} 
          onChange={(e) => setAuthor(e.target.value)} 
        />

        <label>Contenuto</label>
        <input 
          type="text" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
        />

        <label>Categoria</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="FrontEnd">FrontEnd</option>
          <option value="BackEnd">BackEnd</option>
          <option value="UI/UX">UI/UX</option>
        </select>

        <button type="submit">Invia</button>
      </form>
    </div>
  );
}
