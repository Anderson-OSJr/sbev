import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="pt-44 flex flex-col items-center px-4">
      <div className="flex flex-col md:flex-row container justify-between gap-8 items-center">
        <div className="flex flex-col  items-start max-w-3xl px-2">
          <h1 className="mt-4 text-4xl font-bold text-amber-500 text-shadow-sm text-shadow-amber-950 ">
            Sobre a SBEV
          </h1>
          <div className="mt-2 text-blue-900">
            <p className="text-xl mt-2">
              A Associação Brasileira dos Profissionais de Ensaios em Voo (SBEV)
              agrega profissionais civis e militares da área de Ensaios em Voo.
            </p>
            <p className="text-xl mt-4">
              A SBEV foi fundada em 19 de Julho de 2015, em São José dos
              Campos-SP, fruto da iniciativa de Pilotos de Prova e Engenheiros
              de Ensaios em Voo que buscavam uma maior integração e difusão de
              conhecimento entre os diversos grupos de profissionais da área de
              ensaios.
            </p>
            <p className="text-xl mt-4">
              A SBEV tem por finalidade agregar profissionais da área, favorecer
              a comunicação técnica e fraterna entre os integrantes, nacionais e
              internacionais, nas diversas áreas de engenharia e operações de
              ensaios em voo, visando o aumento da capacitação, conhecimento e
              segurança nos voos experimentais, de testes e avaliações.
            </p>
          </div>
        </div>

        <div className="min-w-sm px-2 mt-2">
          <Image
            src="/saab_gripen_e_primeiro_voo_brasileiro_1_free_big.jpg"
            alt="Piloto no Gripen"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg shadow-blue-950/50"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-center container px-4 gap-10 justify-between mt-20">
        <div className="md:w-1/3 border-0 rounded-2xl shadow-xl shadow-blue-950 py-8">
          <h1 className="text-center font-bold text-3xl text-blue-900">
            Missão
          </h1>
          <p className="mt-4 px-6 text-blue-900">
            A missão da SBEV é propiciar o avanço da engenharia e operações de
            ensaios em voo favorecendo a livre comunicação e troca de
            experiência entre os profissionais de ensaios em voo do Brasil e do
            Mundo, visando o aprimoramento técnico e pessoal, com foco no
            aumento da segurança nas atividades aéreas.
          </p>
        </div>
        <div className="md:w-1/3 border-0 rounded-2xl shadow-xl shadow-blue-950 py-8">
          <h1 className="text-center font-bold text-3xl text-blue-900">
            Visão
          </h1>
          <p className="mt-4 px-6 text-blue-900">
            A visão da SBEV é ser reconhecida mundialmente como uma organização
            que promove a segurança, a comunicação e educação nos ensaios em voo
            de aeronaves de asa fixa e rotativa.
          </p>
        </div>
        <div className="md:w-1/3 border-0 rounded-2xl shadow-xl shadow-blue-950 py-8">
          <h1 className="text-center font-bold text-3xl text-blue-900">
            Valores
          </h1>
          <p className="mt-4 px-6 text-blue-900">
            O Respeito à pessoa e aos profissionais; a Ética para a manutenção
            da confiança e do respeito; a Transparência nas suas atividades e
            decisões; a Equidade no tratamento às pessoas; a Responsabilidade
            nas suas decisões e ações; a Segurança nos ensaios em voo.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
