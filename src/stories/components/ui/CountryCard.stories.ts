import type { Meta, StoryObj } from '@storybook/react';
import Card from '@/components/ui/card';

const meta: Meta<typeof Card> = {
  title: 'Component/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Germany: Story = {};

export const Nigeria: Story = {
  args: {
    name: 'Nigeria',
    capital: 'Abuja',
    region: 'Africa',
    population: 206139587,
    flags: {
      png: 'https://flagcdn.com/w320/ng.png',
      alt: 'The flag of Nigeria is composed of three equal vertical bands of green, white and green.',
    },
  },
};
