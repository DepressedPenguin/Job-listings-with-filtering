import { useState } from "react";
import data from "./data.json";
import "./App.css";
import Header from "./Components/Header";
import CardList from "./Components/CardsList";
import Filter from "./Components/Filter";

export type DataT = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

function App() {
  const [filteringLangList, setFilteringLangList] = useState<string[]>([]);

  return (
    <>
      <Header />
      <Filter
        setFilteringLangList={setFilteringLangList}
        filteringLangList={filteringLangList}
      />
      <CardList
        setFilteringLangList={setFilteringLangList}
        dataUsers={data}
        filteringLangList={filteringLangList}
      />
    </>
  );
}

export default App;
