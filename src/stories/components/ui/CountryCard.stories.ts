import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/ui/card';

const meta: Meta<typeof Card> = {
  title: 'Component/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};
