import React, {useState} from "react";
import './LoginPage.css';
import { useNavigate } from "react-router-dom";

const LoginPage =()=>{
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const navigate = useNavigate();

    const correctId = '123';
    const correctPw = '5678';

    const handleLogin = () => {
        if (id === correctId && pw === correctPw) {
        alert('로그인 성공!');
        navigate('/success');
      } else {
        alert('로그인 실패!');
      }
    };

    
    return (
        <div className="page">  
            <div className="titleWrap">
                <br/>
                로그인
            </div>
            <div className="contentWrap">
            <div className="inputTitle">아이디</div>
            <div className="inputWrap">
                <input className="input" 
                placeholder="아이디를 입력하세요"
                value={id}
                onChange={(e) => setId(e.target.value)}/> 
            </div>

            <div className="inputTitle">비밀번호</div>
            <div className="inputWrap">
                <input className="input" 
                placeholder="비밀번호를 입력하세요"
                value={pw}
                onChange={(e) => setPw(e.target.value)}
            />
            </div>

            <div>
                 <button className="bottonButton" onClick={handleLogin}>
            로그인
          </button>
            </div>
            </div>
            
        </div>
        
    );

};

export default LoginPage;