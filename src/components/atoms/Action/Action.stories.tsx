import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Action from '.';

export default {
    title: 'Components/Action',
    component: Action,
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof Action>;

const Template: ComponentStory<typeof Action> = (args) => <Action {...args} />;

export const Button = Template.bind({});
Button.args = {
    type: 'Button',
    label: 'Get Started',
    url: 'https://www.stackbit.com/',
    style: 'primary'
};

export const IconButton = Template.bind({});
IconButton.args = {
    type: 'Button',
    label: 'Twitter',
    url: 'https://www.stackbit.com/',
    style: 'primary',
    showIcon: true,
    icon: 'twitter'
};
