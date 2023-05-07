import { useState } from "react";
import { Layout } from "../../components/Layout";
import Image from "next/image";
import Button2 from "../../components/Button2";
import Input from "../../components/input";
import axios from "axios";

const walletId = '1234';

const Transferencia = () => {
  const [response, setResponse] = useState(null);

  const handleClick = () => {
    const data = {
      // conteúdo do corpo da requisição
    };

    axios.post("http://localhost:8000/wallet/tx-history", data, {
      headers: {
        "x-wallet-id": walletId,
      },
    })
      .then((res) => {
        setResponse(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
            <span className="font-small block text-left text-sm text-[#468C19] after:ml-0.5">
              Detalhes de pagamento
            </span>
            <Input
              type="text"
              className="rounded-lg bg-[0F0F0F] px-4 py-2 text-white"
            />
            <div className="inline-block rounded-full bg-[#468C19] p-2">
              <Image
                src="/icon-seta.svg"
                alt="icon"
                width={24}
                height={24}
              />
            </div>
            <span className="font-small block text-left text-sm text-[#468C19] after:ml-0.5">
              Detalhes de recebimento
            </span>
            <Input
              type="text"
              className="rounded-lg bg-[0F0F0F] px-4 py-2 text-white"
            />
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 mb-10 px-10">
          <Button2
            text="Preview"
            backgroundColor="bg-[#468C19]"
            onClick={handleClick}
          />
        </div>
        {response && (
          <div className="text-white">
            <p>Response:</p>
            <pre>{JSON.stringify(response, null, 2)}</pre>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Transferencia;