import React from "react";
import Editor_Output from '../Components/Editor_Output'
import Navbar from "../Components/Navbar";
import { useRef ,useState} from "react";

const App = () => {
      const editor_value = useRef(snippet);
      const [output,setOutput] = useState("Code Output will appear here");
      return (
        <>
          <Navbar editor_value = {editor_value} setOutput={setOutput}></Navbar>
          <Editor_Output editor_value = {editor_value} output={output}></Editor_Output>
        </>
      )
};

const snippet = `#include <bits/stdc++.h>
using namespace std;

int main() {
    
    return 0;
}`;

export default App;
