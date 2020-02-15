import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';

import Task from '../components/Task';

export const task = {
    id: '1',
    title: 'Test task',
    state: 'TASK_INBOX',
    updatedAt: new Date(2018, 0, 1, 9, 0)
};

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask')
};

storiesOf("Task Component", module)
    .add('default', () => <Task task={task} {...actions} />)
    .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED'}} {...actions} />)
    .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED'}} {...actions} />)
