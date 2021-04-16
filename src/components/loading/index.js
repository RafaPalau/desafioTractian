import React from "react";
import ReactLoading from "react-loading";
import { Section,  Article, Prop, list } from "./generic";

const Loading = (props) => (
  <Section>
       {list.map(list => (
      <Article key={list.prop}>
        <ReactLoading type={list.prop} color={'#0086FF'} />
        <Prop>{list.name}</Prop>
      </Article>
    ))}
  </Section>
);

export default Loading;
