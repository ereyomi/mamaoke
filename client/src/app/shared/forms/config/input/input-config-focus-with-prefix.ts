import { InputConfig } from '../../models/input/input-config';

export const InputConfigFocusWithPrefix = (): InputConfig => {
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
            isFocus: true
        }
    };
};