import { distinctUntilChanged, Observable } from 'rxjs';
import { useEffect, useState } from 'react';

export const useObservable = <T>(observable$: Observable<T>) => {
    const [value, setValue] = useState<T>();

    useEffect(() => {
        const subscription = observable$.pipe(distinctUntilChanged()).subscribe((value) => {
            setValue(value);
        });

        return () => {
            subscription.unsubscribe();
        };
    }, [observable$]);

    return value;
};
