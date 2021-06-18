import { InputConfig } from '../../models/input/input-config';

export const InputConfigWithPrefix = (
    text: string = 'label',
    type: string = 'text',
    placeholder: string = 'Default',
    icon: string = 'user'
): InputConfig => {
    return {
        inputLabel: {
            text,
        },
        type,
        placeholder,
        prefixIcon: {
            addIcon: true,
            icon,
        },
    };
};