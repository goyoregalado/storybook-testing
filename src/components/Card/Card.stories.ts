import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card.tsx";

const meta = {
  title: "Layout/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const BaseCard: Story = {
  args: {
    title: "Data Fetching",
    description:
      "Make your React component async and await your data. Next.js supports both server and client data fetching.",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-1891&mode=design&t=ZZG9mjhYElLEM0Fq-4",
    },
  },
};

export const WithImage: Story = {
  args: {
    title: "Built-in Optimizations",
    description:
      "Automatic Image, Font, and Script Optimizations for improved UX and Core Web Vitals.",
    image: "https://i.imgur.com/CVbmc2d.png",
  },
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=1-2182&mode=design&t=ZZG9mjhYElLEM0Fq-4",
    },
  },
};
