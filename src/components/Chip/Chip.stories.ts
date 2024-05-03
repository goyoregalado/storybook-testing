import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from "./Chip.tsx";
import { ChipColor } from "./ChipColor.ts";

const meta = {
  title: "Layout/Chip",
  component: Chip,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Chip>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Purple: Story = {
  args: {
    label: "Purple",
    color: ChipColor.PURPLE,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-2217&mode=design&t=ZZG9mjhYElLEM0Fq-11",
    },
  },
};

export const Green: Story = {
  args: {
    label: "Green",
    color: ChipColor.GREEN,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-2217&mode=design&t=ZZG9mjhYElLEM0Fq-11",
    },
  },
};

export const Orange: Story = {
  args: {
    label: "Orange",
    color: ChipColor.ORANGE,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-2217&mode=design&t=ZZG9mjhYElLEM0Fq-11",
    },
  },
};

export const Blue: Story = {
  args: {
    label: "Orange",
    color: ChipColor.BLUE,
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-2217&mode=design&t=ZZG9mjhYElLEM0Fq-11",
    },
  },
};
