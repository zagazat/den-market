import React, { useMemo } from 'react';

type CrossMinusFormProps = {
    valueState: [string, React.Dispatch<React.SetStateAction<string>>];
}

export const Form = ({ valueState }: CrossMinusFormProps) => {
    const [value, setValue] = valueState;

    const isDuplicate = useMemo(() => {
        const valueArr = value.trim().split('\n')
        const valueSet = new Set(valueArr);

        return valueSet.size !== valueArr.length;
    }, [value])

    const editText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value);
    }

    const cleanText = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const valueSet = new Set(value.trim().split('\n'));

        setValue(Array.from(valueSet).join('\n'));
    }

    return (
        <form className='cross-minus-form'>
            <textarea
                value={ value }
                onChange={ editText }
                className={`${isDuplicate ? 'cross-minus-textarea cross-minus-duplicate' : 'cross-minus-textarea'}`}
                placeholder={ "просто\nвставь\nсписок\nслов\nтвоих\n" }
                autoFocus={ true }
            />
            { isDuplicate && (
                <button className='cross-minus-clean' onClick={cleanText}>
                    Убрать дубликаты
                </button>
            )}
        </form>
    )
}
