import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { TextButton } from "./TextButton";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/TextButton",
  component: TextButton,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    textColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} satisfies Meta<typeof TextButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
  },
};

export const Secondary: Story = {
  args: {
    label: "Button",
    textColor: "red",
  },
};

export const Large: Story = {
  args: {
    size: "2xl",
    label: "Button",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    label: "Button",
  },
};

export const LargeIcon: Story = {
  args: {
    size: "2xl",
    label: "Button",
    icon: true,
  },
};

export const SmallIcon: Story = {
  args: {
    size: "sm",
    label: "Button",
    icon: true,
  },
};
