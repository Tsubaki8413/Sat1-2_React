import React, { useState, useEffect } from "react";

function App() {
    const [inputText, setInputText] = useState("");

    return(
        <div>
            <h1>フォームアプリ</h1>

            名前：<input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            /><br/>
            メール：<input
                type="mail"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            /><br/>
            コメント：<textarea
                cols="30" rows="10"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            ></textarea>
            

            <h3>リアルタイム表示</h3>
            <p>
                名前：{inputText}<br/>
                メール：<br/>
                コメント：
            </p>
        </div>
    );
};

export default App;