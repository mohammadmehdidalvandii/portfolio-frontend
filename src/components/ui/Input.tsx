import * as React from 'react';
import { cn } from '@utils/cn'; 

const Input = React.forwardRef<HTMLInputElement,React.ComponentProps<'input'>>(({className,type , ...props}, ref)=>{
    return (
        <input type={type}
        className={cn('w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors',className)}
        ref={ref}
        {...props}
        />
    )
});

Input.displayName = 'Input';

export {Input};