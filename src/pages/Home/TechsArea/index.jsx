import { FaReact, FaJsSquare, FaNodeJs, FaCss3Alt, FaHtml5, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import SectionTitle from "../../../components/SectionTitle";
import Tech from "./Tech";

const TechsArea = () => {
    // Array de tecnologias com seus ícones
    const technologies = [
        { name: 'React', icon: <FaReact />, startDate: '2020-01-01' },
        { name: 'JavaScript', icon: <FaJsSquare />, startDate: '2018-01-01' },
        { name: 'Node.js', icon: <FaNodeJs />, startDate: '2019-06-01' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, startDate: '2021-03-01' },
        { name: 'Next.js', icon: <FaHtml5 />, startDate: '2021-08-01' },
        { name: 'HTML', icon: <FaHtml5 />, startDate: '2017-01-01' },
        { name: 'CSS', icon: <FaCss3Alt />, startDate: '2017-01-01' },
        { name: 'SQL', icon: <FaDatabase />, startDate: '2019-01-01' },
    ];

    return (
        <section className=" mx-auto container py-16">
          <SectionTitle subtitle="competências" title="Conhecimentos" />
          <div className="w-full grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
            {technologies.map((tech) => (
              <div key={tech.name}>
                <Tech tech={tech} />
              </div>
            ))}
          </div>
        </section>
    );
};
 
export default TechsArea;
