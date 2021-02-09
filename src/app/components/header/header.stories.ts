import { StoreModule } from '@ngrx/store';
import { moduleMetadata } from '@storybook/angular/dist/client/preview/types';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ErrorDisplayComponent } from '../error-display/error-display.component';
import { HeaderComponent } from './header.component';

export default {
  title: 'UI-Library/HeaderComponent',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [ErrorDisplayComponent],
      imports: [StoreModule.forRoot({})],
      providers: []
    })
  ],
  argTypes: {
    backgroundColor: {
      control: 'color',
      description: 'This will change the color. duh.'
    }
  }
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  component: HeaderComponent,
  props: args
});

export const Primary = Template.bind({});
Primary.args = {

};

export const Secondary = Template.bind({});
Secondary.args = {

  message: 'Secondary Config'
};
