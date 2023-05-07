import { Layout } from "../../components/Layout";
import Image from "next/image";
import inicial from "../assets/inicial.svg";
import Button2 from "../../components/Button2";
import Input from "../../components/input";

const Home = () => {
	return (
		<Layout title={"Home"}>
			<div className="flex h-full w-full flex-1 flex-col items-center bg-black text-center">
				<div className="mt-[50%] w-full px-6">
					<div className=" text-md mx-auto px-10 text-center text-[#fff]">
						<h3 className="text-lg font-bold">Acesse sua conta</h3>
					</div>
					<Input type="e-mail" placeholder="Email" />
					<Input type="password" placeholder="Senha" />
				</div>
				<div className="mt-10 w-full px-10">
					<Button2 text="Entrar" />
				</div>
			</div>
		</Layout>
	);
};

export default Home;
