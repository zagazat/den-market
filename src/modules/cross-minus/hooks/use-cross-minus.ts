import {useEffect, useState} from "react";
import {CrossMinusResult} from "../typings.ts";
import debounce from "lodash/debounce";

const crossMinusProcess = (str: string): Promise<CrossMinusResult> => {
    return new Promise((resolve) => {
        const result: Record<string, string> = {};
        const stringArray = Array.from(new Set(str.split('\n')));

        for (let i = 0; i < stringArray.length; i++) {
            const key = stringArray[i];
            result[key] = stringArray.filter((key) => key !== stringArray[i]).join()
        }

        resolve(result);
    })
}

export function useCrossminus(val: string): [boolean, CrossMinusResult] {
    const [value, setValue] = useState<CrossMinusResult>({});
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        crossMinusProcess(val)
            .then(debounce((result) => {
                setValue(result)
            }, 300))
            .catch(console.error)
            .finally(() => setLoading(false))
    }, [val])

    return [loading, value]
}
