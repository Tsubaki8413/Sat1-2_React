import React, { useState, useEffect } from "react";

function App() {
    const [inputText, setInputText] = useState("");
    const [log, setLog] = useState("");

    return(
        <div>
            <h1>フォームアプリ</h1>

            <input
              type="text"
              placeholder="入力してください"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            
            <p>リアルタイム表示：{inputText}</p>
        </div>
    );
};

export default App;