import * as React from 'react';
import { cn } from '@utils/cn';

const Label = React.forwardRef<HTMLLabelElement, React.ComponentProps<'label'>>(({className , ...props},ref)=>{
    return <label ref={ref} className={cn('block text-sm font-InterMedium font-medium text-slate-300 mb-2',className)}{...props}/>
});

Label.displayName = 'Label';

export {Label}