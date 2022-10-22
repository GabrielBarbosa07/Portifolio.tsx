/* eslint-disable react/jsx-no-comment-textnodes */

interface Props {
  comment?: string;
  objName: string;
  keyOne: string;
  valueOne: string;
  keyTwo: string;
  valueTwo: string;
  positionRight?: boolean;
}

export default function HeroContent({
  comment,
  objName,
  keyOne,
  valueOne,
  keyTwo,
  valueTwo,
  positionRight,
 
}: Props) {
  return (
    <main
      key={objName}
      className={`
      ${positionRight ? "items-end" : "items-start"} p-4 text-white w-96 bg-gradient font-mono font-light  
      hover:brightness-125 transition-all duration-700  max-[640px]:w-full
      `}
    >
        <span className="block text-gra-600">{comment}</span>
        <span className="text-[#c38cdd] mr-2">{objName}</span>
        {"\u007b"}
        <div className="mt-1 ml-4">
          {keyOne}
          <span className="text-[#7ac7e3]"> {valueOne}</span>
        </div>
        <div className="mt-1 ml-4">
          {keyTwo}
          <span className="text-[#7ac7e3]"> {valueTwo} </span>
          <br />
        </div>
        {"\u007d"}
     
    </main>
  );
}
