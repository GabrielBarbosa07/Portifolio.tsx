import styles from "../../../styles/Knowledge.module.css";
import Next from "../../assets/knowlegde-icons/nextjs.svg";
import Typescript from "../../assets/knowlegde-icons/typescript.svg";
import React from "../../assets/knowlegde-icons/react.svg";
import Javascript from "../../assets/knowlegde-icons/javascript.svg";
import Tailwind from "../../assets/knowlegde-icons/tailwindcss.svg";
import Node from "../../assets/knowlegde-icons/node-js.svg";
import Git from "../../assets/knowlegde-icons/git.svg";
import SectionTitle from "../SectionTitle";
import KnowledgeItem from "./KnowledgeItem";

export default function Knowledge() {
  return (
    <section className={styles.KnowledgeContainer}>
      <SectionTitle title="Hard Skills" />

      <section className="max-w-full">
        <KnowledgeItem
          key={Next}
          title="NextJs"
          src={Next}
          alt="NextJs"
          imgTitle="NextJs"
        />
        <KnowledgeItem
          key={Typescript}
          title="Typescript"
          src={Typescript}
          alt="Typescript"
          imgTitle="Typescript"
        />
        <KnowledgeItem
          key={React}
          title="React"
          src={React}
          alt="React"
          imgTitle="React"
        />
        <KnowledgeItem
          key={Javascript}
          title="Javascript"
          src={Javascript}
          alt="Javascript"
          imgTitle="Javascript"
        />
        <KnowledgeItem
          key={Node}
          title="NodeJS"
          src={Node}
          alt="NodeJS"
          imgTitle="NodeJS"
        />
        <KnowledgeItem
          key={Tailwind}
          title="Tailwind"
          src={Tailwind}
          alt="Tailwind"
          imgTitle="Tailwind"
        />
        <KnowledgeItem
          key={Git}
          title="Git"
          src={Git}
          alt="Git"
          imgTitle="Git"
        />
      </section>
    </section>
  );
}
