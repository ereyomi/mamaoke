import { InputConfig } from '../../models/input/input-config';

export const InputConfigFilledWithPrefix = (): InputConfig => {
    return {
        inputLabel: {
            text: 'Label'
        },
        type: 'text',
        placeholder: 'Default',
        prefixIcon: {
            addIcon: true
        },
        formStatus: {
            isFilled: true
        }
    };
};