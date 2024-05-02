
import TechBadge from '../../components/TechBadge';
import Button from '../../components/Button';

const Home = () => {
    return (
        <section className="bg-cover  bg-hero-image bg-no-repeat mx-auto">

      <div className="container mx-auto h-auto  text-white py-8 flex flex-col-reverse items-center lg:flex-row">
        <div className=" lg:w-2/4">
            <p className="font-mono  text-xl text-emerald-400" >Olá, meu nome é</p>
          <h2 className="text-4xl font-medium ">Lucas Peixoto</h2>
          <p className="text-gray-400 my-4 text-sm sm:text-base">
            Desenvolvedor front-end apaixonado por tecnologia, com mais de 3 anos de experiência. Meu objetivo é criar interfaces de usuário bonitas e funcionais. Estou sempre aberto a novas oportunidades e desafios.
          </p>
          <ul className="flex flex-wrap gap-4 max-w-[300px] my-4">
            <TechBadge>
            React.js
            </TechBadge>
            <TechBadge>
            Next.js
            </TechBadge>
            <TechBadge>
            TypeScript
            </TechBadge>
         
           
          </ul>
          <Button className={'shadow-button'} >
                Entre em contato
            </Button>
        </div>
  
        <div>
        <img src="src/assets/img/imgPerfil.png" alt="Pedro Costa" className="" />

        </div>
      </div>
        </section>
    );
  };
  
  export default Home;
  