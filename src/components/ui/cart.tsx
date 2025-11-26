import * as React from 'react';
import { cn } from '@utils/cn';

const Cart = React.forwardRef<HTMLDivElement,React.HTMLAttributes<HTMLDivElement>>(({className ,...props},ref)=>(
    <div ref={ref} className={cn('relative backdrop-blur-xl bg-slate-800/30 border border-slate-700/50 rounded-2xl shadow-2xl',className)} {...props}/>
));

Cart.displayName = 'Cart';

export {Cart};