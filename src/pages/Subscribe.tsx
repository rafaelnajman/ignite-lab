import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import LogoSm from "../components/LogoSm";
import ReactLogo from "../components/ReactLogo";
import { useCreateSubscriberMutation } from "../graphql/generated";
import imgUrl from "../../src/assets/code-mockup.png";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation();

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    await createSubscriber({ variables: { name, email } });
    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center relative overflow-hidden ">
      <div className="absolute">
        <ReactLogo />
      </div>
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 gap-5 mx-auto x-max:flex-col ">
        <div className="max-w-[640px] x-max:flex x-max:flex-col x-max:items-center x-max:mx-7">
          <LogoSm />

          <h1 className="text-[2.5rem] mt-8 leading-tight x-max:text-center x-max:text-[2.0rem] ">
            Construa uma
            <strong className="text-blue-500"> aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed x-max:text-center x-max:my-5 ">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded x-max:w-screen x-max:max-w-[715px]">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            action=""
            className="flex flex-col gap-2 w-full"
            onSubmit={handleSubscribe}
          >
            <input
              type="text"
              placeholder="Seu nome Completo"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              type="email"
              placeholder="Seu e-mail"
              className="bg-gray-900 rounded px-5 h-14"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-50"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>
      <img src={imgUrl} alt="" />
    </div>
  );
}
