import { CrossminusTableRow } from "./cross-minus-table-row.tsx";
import {useCrossminus} from "../hooks/use-cross-minus.ts";

import './cross-minus-table.css';

type CrossMinusTableProps = {
    enteredValue: string;
}

export const CrossMinusTable = ({
    enteredValue
}: CrossMinusTableProps) => {
    const [isLoading, stringsObj] = useCrossminus(enteredValue);

    if (isLoading) {
        return null
    }

    return (
        <div className="cross-minus-table">
            { Object.keys(stringsObj).map((key: string) =>
                <CrossminusTableRow key={ key } name={ key } value={ stringsObj[key] } />
            )}
        </div>
    )
}
