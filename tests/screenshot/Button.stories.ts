import Button from '../../src/shared/ui/button.vue';
import type { Meta, StoryObj } from '@storybook/vue3-vite';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    // You can add a control for slot content
    default: { control: 'text' }
  }
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    disabled: false,
    fullWidth: false,
    default: 'Click Me' 
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">{{ args.default }}</Button>`
  })
};

export const Disabled: Story = {
  args: {
    disabled: true,
    default: 'Disabled Button'
  },
  render: (args) => ({
    components: { Button },
    setup() {
      return { args };
    },
    template: `<Button v-bind="args">{{ args.default }}</Button>`
  })
};
