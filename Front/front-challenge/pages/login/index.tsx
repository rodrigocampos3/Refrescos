import { useState } from "react";
import { Layout } from "../../components/Layout";
import Image from "next/image";
import inicial from "../assets/inicial.svg";
import Button2 from "../../components/Button2";
import Input from "../../components/input";
import { useRouter } from "next/router";
import axios from "axios";


const Home = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");




  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleRegister = () => {
    const data = {
      email,
      password,
    };
    console.log(data)
    axios.post('http://localhost:3000/login', data)
      .then(response => {
        alert('Login realizado com sucesso!');
		// Após a autenticação bem sucedida:
		localStorage.setItem("username", email);
		handleRedirect
      })
      .catch(error => {
        console.error(error);
        alert('Ocorreu um erro durante o registro.');
      });
  };

  
  
  const handleRedirect = () => {
    router.push("../home");
  };

  return (
    <Layout title={"Home"}>
      <div className="flex h-full w-full flex-1 flex-col items-center bg-black text-center">
        <div className="mt-[50%] w-full px-6">
          <div className=" text-md mx-auto px-10 text-center text-[#fff]">
            <h3 className="text-lg font-bold">Acesse sua conta</h3>
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="pass"
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500">{error}</p>}
        </div>
        <div className="mt-10 w-full px-10">
		<Button2 text="Entrar" backgroundColor="bg-[#468C19]" onClick={handleRegister} />
        </div>
      </div>
    </Layout>
  );
  }
export default Home;