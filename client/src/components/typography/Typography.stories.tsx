import { Meta, Story } from "@storybook/react";
import React from "react";

import { Typography, TypographyProps } from "./Typography";
import { Copy } from "./Copy";

export default {
  title: "Text/Typography",
} as Meta;

const Template: Story<TypographyProps> = () => (
  <>
    <p>
      Body font style <strong>with bold text</strong>
    </p>
    <hr />
    <Copy>
      <p>Base copy with multiple paragraphs</p>
      <p>
        Lorem ipsum dolor sit amet, <a href="/">consectetuer adipiscing elit</a>
        . Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
        penatibus et magnis dis parturient montes,{" "}
        <a href="/">
          nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque
          eu, pretium quis, sem. Nulla consequat massa quis enim
        </a>
        . Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In
        enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam
        dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
        Vivamus elementum semper nisi.
      </p>
    </Copy>
    <hr />
    <Copy component="p">Base copy directly as a p tag</Copy>
    <hr />
    <p>
      <a href="/">
        Some link with default styling that is not in a Copy component
      </a>
      <br />
    </p>
    <hr />
    <Typography component="p" variant="copy-super">
      Super copy Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis <strong>parturient montes</strong>, nascetur
      ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
      quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
      vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
      imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis
      pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi.
    </Typography>
    <hr />
    <Typography component="strong" variant="copy-super">
      Super copy Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis, nascetur ridiculus mus. Donec quam felis,
      ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
      quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
      arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
      Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
      dapibus. Vivamus elementum semper nisi.
    </Typography>
    <hr />
    <Typography component="p" variant="smallprint">
      Small print Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
      Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque
      penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec
      quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
      consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec,
      vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
      vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
      tincidunt. Cras dapibus. Vivamus elementum semper nisi.
    </Typography>
  </>
);

export const Default = Template.bind({});

export const Headlines = () => (
  <>
    <Typography component="h1" variant="headline-ultra">
      Ultra Headline
      <br />
      lorem ipsum dolor
    </Typography>
    <hr />
    <Typography component="h2" variant="headline-mega">
      Mega Headline
      <br />
      lorem ipsum
    </Typography>
    <hr />
    <Typography component="h3" variant="headline-super">
      Super Headline
      <br />
      lorem ipsum
    </Typography>
    <hr />
    <Typography component="h4" variant="headline-sub">
      Headline
      <br />
      <strong>with strong text</strong>
    </Typography>
    <hr />
    <Typography component="strong" variant="headline-sub">
      Headline as strong element
    </Typography>
    <hr />
    <Typography component="h5" variant="headline-sub">
      Sub Headline
      <br />
      <strong>with strong text</strong>
    </Typography>
    <hr />
    <Typography component="strong" variant="headline-sub">
      Sub Headline as strong element
    </Typography>
  </>
);

export const HeadlinesHighlighted = () => (
  <>
    <Typography component="h1" variant="headline-ultra" highlight={true}>
      Ultra Headline lorem
      <br />
      ipsum dolor
    </Typography>
    <hr />
    <Typography component="h1" variant="headline-ultra">
      <Typography highlight={true}>Ultra Headline</Typography> with only a
      partial highlight
    </Typography>
    <Typography component="h2" variant="headline-mega" highlight={true}>
      Mega Headline
      <br />
      lorem ipsum
    </Typography>
    <hr />
    <Typography component="h3" variant="headline-super" highlight={true}>
      Super Headline
      <br />
      lorem ipsum
    </Typography>
    <hr />
    <Typography component="h4" variant="headline-sub" highlight={true}>
      Headline
      <br />
      lorem ipsum
    </Typography>
    <hr />
    <Typography component="h5" variant="headline-sub" highlight={true}>
      Sub Headline & Teaser Copy
      <br />
      lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
      ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
    </Typography>
    <hr />
  </>
);
