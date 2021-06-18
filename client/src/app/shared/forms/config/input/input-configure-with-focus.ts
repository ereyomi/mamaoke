import { InputConfig } from '../../models/input/input-config';

export const InputConfigWithFocus = (): InputConfig => {
    return {
        inputLabel: {
            text: 'Label'
        },
        type: 'text',
        placeholder: 'Default',
        prefixIcon: {
            addIcon: false
        },
        formStatus: {
            isFocus: true
        }
    };
};