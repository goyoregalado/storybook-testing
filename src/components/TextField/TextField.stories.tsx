import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from "@storybook/testing-library";
import { TextField, TextFieldProps } from "./TextField.tsx";
import { useState } from "react";

const ControlledTextField = ({
  ...props
}: Omit<TextFieldProps, "value" | "setValue">) => {
  const [value, setValue] = useState("");
  return <TextField {...props} value={value} setValue={setValue} />;
};

const meta = {
  title: "Form/TextField",
  component: ControlledTextField,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    id: "email",
    type: "email",
    label: "Company label",
    placeholder: "Company name",
    error: "Please enter a valid email address",
  },
} satisfies Meta<typeof ControlledTextField>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=39-33&mode=design&t=sEmajI3fO61o4DjF-4",
    },
  },
};

export const Focus = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=39-31&mode=design&t=sEmajI3fO61o4DjF-4",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const user = userEvent.setup();

    await user.click(canvas.getByLabelText("Company label"));
  },
} satisfies Story;

export const Error: Story = {
  parameters: {
    design: {
      type: "figma",
      url: "https://www.figma.com/file/GIyivL3AeBjiTc8zTtXzx5/Frontend-EOI?type=design&node-id=39-32&mode=design&t=sEmajI3fO61o4DjF-4",
    },
  },
  play: async (context) => {
    const user = userEvent.setup();

    await Focus.play(context);

    await user.keyboard("this is a wrong email");
    await user.click(document.body);
  },
};
