import './styles.scss';

export const CheckboxInput = (name, label) => {
  return `
    <div class="checkbox-container" >
      <input type="checkbox" id=${name} name=${name}  />
      <label for=${name}>${label}</label>
    </div>
  `;
};