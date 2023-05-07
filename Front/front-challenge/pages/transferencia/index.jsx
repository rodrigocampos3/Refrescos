import { Layout } from "../../components/Layout";
import Image from "next/image";
import Button2 from "../../components/Button2";
import Input from "../../components/input";

const transferencia = () => {
	return (
		<Layout title={"transferencia"}>
			<div className="flex h-full w-full flex-1 flex-col items-center bg-black text-center">
				<div className="mt-[10%] w-full px-6">
					<div className="text-md mx-auto flex items-center space-x-2 px-7 text-center text-[#fff]">
						<Image
							src="/icon-voltar.svg"
							alt="icon"
							width={24}
							height={24}
							className="mr-10"
						/>
						<h3 className="text-lg font-bold mr-5 text-center">Trocar tokens</h3>
					</div>
					<div className="mt-[10%]">
						<span class="font-small block text-left text-sm text-slate-700 after:ml-0.5">
							Detalhes de pagamento
						</span>
						<Input
							type="text"
							className="rounded-lg bg-[0F0F0F] px-4 py-2 text-white"
						/>
						<div className="inline-block rounded-full bg-gray-800 p-2">
							<Image
								src="/icon-seta.svg"
								alt="icon"
								width={24}
								height={24}
							/>
						</div>
						<span class="font-small block text-left text-sm text-slate-700 after:ml-0.5">
							Detalhes de recebimento
						</span>
						<Input
							type="text"
							className="rounded-lg bg-[0F0F0F] px-4 py-2 text-white"
						/>
					</div>
				</div>
				<div className="fixed bottom-0 left-0 right-0 mb-10 px-10">
					<Button2 text="Preview" />
				</div>
			</div>
		</Layout>
	);
};

export default transferencia;