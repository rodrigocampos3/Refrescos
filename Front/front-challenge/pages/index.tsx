import { Layout } from "../components/Layout";
import Image from "next/image";
import inicial from "../assets/inicial.svg";
import Button from "../components/Button";
const Ind = () => {
	return (
		<Layout title={"Home"}>
			<div className="flex h-full w-full flex-1 flex-col items-center bg-black text-center">
				<div className="pr-20">
					<Image width={250} src={inicial} height={200} alt="teste" />
				</div>
				<div className="px-3 text-left">
					<p className="text-[48px] font-bold leading-[50px] text-[#6EDA2A]">
						Pequenas ações mudam o mundo.
					</p>
					<p className="pt-3 text-lg text-[#8A929A]">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do.
					</p>
					<div className="mt-20 text-center">
						<a href="/cadastro"><Button text="Crie uma nova conta" /></a>
					</div>
					<div className="flex h-16 items-center justify-center">
						<p className="text-center text-white">
							<span className="text-[#6EDA2A]">
								Já tem conta?
							</span>
							<a href="/login" className="text-[#fff] underline">
								{" "}
								Faça login
							</a>
						</p>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Ind;
