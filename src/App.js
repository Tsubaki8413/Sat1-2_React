import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [comment, setComment] = useState("");

    return(
        <div>
            <h1>フォームアプリ</h1>

            名前：<input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
            /><br/>
            メール：<input
                type="mail"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
            /><br/>
            コメント：<textarea
                cols="30" rows="10"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            ></textarea>
            

            <h3>リアルタイム表示</h3>
            <p>
                名前：{name}<br/>
                メール：{mail}<br/>
                コメント：{comment}
            </p>
        </div>
    );
};

export default App;