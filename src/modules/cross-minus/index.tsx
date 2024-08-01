import { useState } from "react";
import { Form } from "./form.tsx";
import { CrossMinusTable } from "./cross-minus-table";

import './cross-minus.css';

export const CrossMinus = () => {
    const [enteredValue, setEnteredValue] = useState<string>('');

    return (
        <div className="page-container cross-minus-container">
            <Form valueState={ [enteredValue, setEnteredValue] } />
            <CrossMinusTable enteredValue={ enteredValue } />
        </div>
    )
}
