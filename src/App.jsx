import { useState } from "react";
import "./styles.css";

import React from "react";
import Message from "./components/Message";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  const passCode = "1001";

  const [userInput, setUserInput] = useState({
    charOne: "",
    charTwo: "",
    charThree: "",
    charFour: ""
  });
const handleChange = (e) =>{
  const { name} = e.target; // e.target bizim inputa yonelıyor
if(name==="charOne"){
  setUserInput({...userInput,charOne:e.target.value})
}else if(name==="charTwo"){
  setUserInput({...userInput,charTwo:e.target.value})
}else if(name==="charThree"){
  setUserInput({...userInput,charThree:e.target.value})
}else{
  setUserInput({...userInput,charFour:e.target.value})
}
}
console.log(userInput)

  const [verified, setVerified] = useState(undefined);
  
  /* Challenge

	Doğrulama kodu formu henüz kullanıcının girdisini kontrol etmiyor. Sizin göreviniz aşağıdaki gibi kurulumu tamamlamaktır: 
	
		1. Kullanıcı parola input'larından birine bir karakter yazdığında, userInput state nesnesinin ilgili özelliği, diğer özellikler korunarak güncellenmelidir. Özellik adlarının ve girdilerin adlarının birbiriyle eşleştiğine dikkat edin (charOne, charTwo, vb.)
		   
		2. Kullanıcı gönder butonuna tıkladığında, bir gönderme işleme fonksiyonu sayfanın yenilenmesini engellemeli ve userInput'ta saklanan dört karakterin kombinasyonunun passCode değerine eşit olup olmadığını kontrol etmelidir (yukarıdaki 7. satırda bildirilmiştir).
		   
		3. Eşleşiyorlarsa, verified state değeri true olarak ayarlanmalıdır. Aksi takdirde false olarak ayarlanmalıdır. 
		   
		4. Kodunuz mümkün olduğunca DRY olmalıdır
*/
const handleSubmit= (e) =>{
  e.preventDefault()
  const totalWord =userInput.charOne+userInput.charTwo+userInput.charThree+userInput.charFour
  if(passCode===totalWord){
    setVerified(true)  
  }else{
    setVerified(false) 
  }
  setUserInput({charOne: "",
    charTwo: "",
    charThree: "",
    charFour: ""})
}
console.log(verified)
  return (
    <div className="wrapper">
      <Header />

      <form onSubmit={handleSubmit}>
        <Message status={verified} />

        <div>
          <input required type="password" name="charOne"  value={userInput.charOne}  maxLength="1" onChange={handleChange}/>

          <input required type="password" name="charTwo" value={userInput.charTwo} maxLength="1"  onChange={handleChange}/>

          <input required type="password" name="charThree" value={userInput.charThree}  maxLength="1"  onChange={handleChange}/>

          <input required type="password" name="charFour"  value={userInput.charFour} maxLength="1" onChange={handleChange} />
        </div>

        <button disabled={verified}>Gönder</button>
      </form>

      <Footer />
    </div>
  );
}
