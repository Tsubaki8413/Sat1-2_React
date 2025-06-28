import React, { useState } from "react";

function App() {
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [comment, setComment] = useState("");

    const errorStyle = {
        color: "red",
        fontSize: "0.9em",
        marginBottom: "10px",
    };

    return(
        <div>
            <h1>フォームアプリ</h1>

            <div>
                名前：<input
                    type="text"
                    value={name}
                    maxLength={10}
                    onChange={(e) => setName(e.target.value)}
                /><br/>
                {name.trim() === "" && (
                    <div style={errorStyle}>未入力です</div>
                )}
            </div>

            <div>
                メール：<input
                    type="mail"
                    value={mail}
                    maxLength={30}
                    onChange={(e) => setMail(e.target.value)}
                /><br/>
                {mail.trim() === "" && (
                    <div style={errorStyle}>未入力です</div>
                )}
            </div>

            <div>
                コメント：<textarea
                    cols="30" rows="10"
                    value={comment}
                    maxLength={1000}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                {comment.trim() === "" && (
                    <div style={errorStyle}>未入力です</div>
                )}
            </div>
            

            <h3>リアルタイム表示</h3>

            <p>
                名前：{name}{name.trim() !== "" && <>（{name.length}文字）</>}<br/>
                メール：{mail}{mail.trim() !== "" && <>（{mail.length}文字）</>}<br/>
                コメント：{comment}{comment.trim() !== "" && <>（{comment.length}文字）</>}
            </p>
        </div>
    );
};

export default App;