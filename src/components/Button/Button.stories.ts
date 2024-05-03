import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./Button.tsx";

// Button.stories.ts
const meta = {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Primary",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-1892&mode=design&t=ZZG9mjhYElLEM0Fq-4",
    },
  },
};

export const Secondary: Story = {
  args: {
    title: "Secondary",
    type: "secondary",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-1891&mode=design&t=ZZG9mjhYElLEM0Fq-4",
    },
  },
};
