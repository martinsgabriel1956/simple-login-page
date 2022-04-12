
const SignInText = '<h1>Sign in</h1>';
const DescribeText = '<p>Sign in and start managing your candidates!</p>';
const forgotPasswordText = '<a href="#">Forgot your password?</p>';

import { Input } from '../ui/Input';
import { CheckboxInput } from '../ui/CheckboxInput';
import { Button } from '../ui/Button';

import './styles.scss';

export const Card = () => {
  return `
    <section class="container">
      ${SignInText}
      ${DescribeText}

      <div class="input-container">
        ${Input('Username')}
        ${Input('Password')}
      </div>
      <div class="settings-input-container">
        ${CheckboxInput('remember_me', 'Remember me')}
        ${forgotPasswordText}
      </div>
      ${Button('Login')}
    </section>
    </section>
  `;
};