import { InputConfig } from '../../models/input/input-config';

export const InputConfigFilled = (): InputConfig => {
    return {
        inputLabel: {
            text: 'Label'
        },
        type: 'text',
        placeholder: 'Default',
        prefixIcon: {
            addIcon: false
        },
    };
};