import { Layout } from "../../components/Layout";
import Image from "next/image";
import Button2 from "../../components/Button2";
import Input from "../../components/input";

const finalizar = () => {
	return (
		<Layout title={"finalizar"}>
			<div className="flex h-full w-full flex-1 flex-col items-center bg-black text-center">
				<div className="mt-[10%] w-full px-6">
					<div className="text-md mx-auto flex items-center space-x-2 px-7 text-center text-[#fff]">
						<Image
							src="/icon-voltar.svg"
							alt="icon"
							width={24}
							height={24}
						/>
						<h3 className="text-center text-lg font-bold">
							Confirmação de transferência
						</h3>
					</div>
					<div className="mt-[10%] border-gray-500 rounded-2xl text-white text-left">
						<div className="p-6">
							<p>Pagamento</p>
							<hr className="my-2 border-b border-gray-500" />
							<p>Transferência</p>
							<hr className="my-2 border-b border-gray-500" />
							<p>Horário</p>
						</div>
					</div>
				</div>
				<div className="fixed bottom-0 left-0 right-0 mb-10 px-10">
					<a href="/home"><Button2 text="Finalizar" /></a>
				</div>
			</div>
		</Layout>
	);
};

export default finalizar;
