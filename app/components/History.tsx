import Image from "next/image";

const History = () => {
  return (
    <section id="history" className="flex flex-col items-center mt-10 pt-40">
      <div className="flex flex-col md:flex-row container justify-between gap-8 items-center relative">
        <div className="px-4 items-start max-w-3xl">
          <h1 className="mt-4 text-4xl font-bold text-amber-500 text-shadow-sm text-shadow-amber-950 ">
            Nossa História
          </h1>
          <div className="mt-4 text-blue-900">
            <p className="text-xl mt-2">
              Há alguns anos um grupo de Pilotos e Engenheiros de Ensaios em Voo
              vinham conversando sobre a intenção de criar no Brasil uma seção
              da Society of Experimental Test Pilots (SETP) e Society of Flight
              Test Engineer (SFTE) nos moldes das existentes nos Estados Unidos
              e Europa, com o intuito de divulgar e discutir experiências nas
              atividades de ensaios em voo.
            </p>
            <p className="text-xl mt-2">
              Era opinião comum que a experiência e conhecimento existentes,
              civil ou militar, é enorme, consistente e válida, porém muitas
              vezes limitada a quem a vivenciou.
            </p>
            <p className="text-xl mt-2">
              No começo de 2014 este grupo resolveu tornar a intenção realidade
              e começar a sedimentar a idéia. Foram várias reuniões informais,
              logicamente incrementadas por uma boa pizza e um bom chope, para
              trilhar o caminho a seguir.
            </p>
            <p className="text-xl mt-2">
              A intenção inicial de ser uma Seção comum da SETP e SFTE foi
              dificultada pelas restrições das constituições das Sociedades em
              permitir este tipo de proceimento.
            </p>
            <p className="text-xl mt-2">
              Não desanimamos e tomamos um caminho alternativo de criar uma
              sociedade de ensaios em voo que, então, fosse reconhecida por
              ambas as Sociedades.
            </p>
            <p className="text-xl mt-2">
              Por questões jurídicas, o nome escolhido da seção que seria a
              Sociedade Brasileira de Ensaios em Voo – SBEV, foi Associação
              Brasileira dos Profissionais de Ensaios em Voo.
            </p>
            <p className="text-xl mt-2">
              A data para instituição da SBEV foi escolhida como 19 de Julho de
              2015, pois foi neste dia em 1906 que foi apresentado e realizado o
              primeiro ensaio do 14 Bis utilizando o balão 14 como testbed.
            </p>
            <p className="text-xl mt-2">
              No ano de 2016 conseguimos realizar todos os procedimentos
              burocráticos para formalizar a instituição da SBEV e hoje já
              existimos juridicamente.
            </p>
            <p className="text-xl mt-2">
              Muito andamos até chegar aqui e muito conseguimos em tornar real
              uma idéia e um objetivo. Mais ainda teremos que andar para termos
              o reconhecimento da SBEV e realmente conseguir a multiplicação dos
              nossos conhecimentos e experiências. Com certeza, passo-a-passo e
              com o auxilio de todos conseguiremos chegar lá.
            </p>
          </div>
        </div>

        <div>
          <Image
            src="/menini_presidente.jpg"
            alt="Primeiro Presidente"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg shadow-blue-950/50"
          />

          <div className="text-blue-900 text-center mt-2">
            <h2 className="text-2xl">Eduardo Alves Menine, Prova 28</h2>
            <h3 className="text-xl">Presidente Fundador da SBEV</h3>
          </div>
        </div>
      </div>
    </section>
  );
};
export default History;
