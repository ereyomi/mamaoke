import { InputConfig } from '../../models/input/input-config';

export const InputConfigDefault = (): InputConfig => {
    return {
        inputLabel: {
            text: 'Label'
        },
        type: 'text',
        placeholder: 'Default',
        prefixIcon: {
            addIcon: true 
        },
    };
};