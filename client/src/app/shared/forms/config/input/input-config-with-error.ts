import { InputConfig } from '../../models/input/input-config';

export const InputConfigWithError = (): InputConfig => {
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
            isError: true
        }
    }
}