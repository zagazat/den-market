import { ChangeEvent, useState } from 'react';
import copyLogo from '../../../assets/copy-svgrepo-com.svg';

type CrossminusTableRowProps = {
    name: string;
    value: string;
}

export const CrossminusTableRow = ({
    name, value
}: CrossminusTableRowProps) => {
    const [resultValue, setResultValue] = useState(value);

    if (!value || !name) {
        return null
    }

    const changeResultValue = (event: ChangeEvent<HTMLInputElement>) => {
        setResultValue(event.target.value);
    }

    const copyHandler = () => {
        navigator.clipboard.writeText(resultValue.split(',').join('\n').trim());
    }

    return (
        <div className="cross-minus-table-row" key={ name }>
            <button onClick={ copyHandler } className='cross-minus-copy'>
                <img src={copyLogo} className="logo" alt="copy"/>
            </button>
            <span className='cross-minus-key' title={name }>{ name }</span>
            <input className='cross-minus-input' value={ resultValue } onChange={ changeResultValue } />
        </div>
    )
}
