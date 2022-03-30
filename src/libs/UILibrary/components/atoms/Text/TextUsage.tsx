import React from 'react';
import { TextBlock } from './TextBlock/TextBlock';
import { LabelTitle } from './LabelTitle/LabelTitle';
import { TextModifier } from './TextModifier/TextModifier';
import { Subtitle } from './Subtitle/Subtitle';
import { Title } from './Title/Title';

export function TextUsage(): JSX.Element {
  return (
    <div>
      {/*inline elements should be wrapped*/}
      <div>
        <Title inline>Title</Title>{' '}
        <Title weight="semibold" inline>
          Semibold Title
        </Title>
      </div>
      <Subtitle>Subtitle</Subtitle>
      <LabelTitle>LabelTitle</LabelTitle>
      <TextBlock align="justify">
        Block Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Accusamus ad aliquam, beatae consequuntur debitis delectus deserunt
        ducimus ex explicabo laudantium libero magni molestiae nihil, nisi
        nostrum ratione sunt ullam veritatis?{' '}
      </TextBlock>
      <TextBlock size="lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </TextBlock>
      <TextBlock weight="bold">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </TextBlock>
      <Title>Modifiers</Title>
      <TextBlock>
        <TextModifier.Color variant="success">Color</TextModifier.Color>
        <br />
        <TextModifier.Underline>Underline</TextModifier.Underline>
      </TextBlock>
    </div>
  );
}
