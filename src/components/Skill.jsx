import { FaHtml5 } from "react-icons/fa";

function Skill({ name, icon }) {
  return (
    <li>
      <img
        src={icon}
        alt={`ikon för ${name}`}
        className="mx-auto mb-2 size-8"
      />
      <p className="text-center font-inter"> {name} </p>
    </li>
  );
}

export default Skill;
