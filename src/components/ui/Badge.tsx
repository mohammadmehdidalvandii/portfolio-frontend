import * as React from 'react';
import {cva , type VariantProps} from 'class-variance-authority';
import { cn } from '@utils/cn';

const badgeVariants = cva(
    'px-3 py-1 text-sm rounded-full border',
    {
        variants:{
            variant:{
                primary:'bg-slate-800/50 text-blue-400 border-blue-400/20',
                secondary:'bg-green-500/20 text-green-400 border-green-400/30'
            }
        },
        defaultVariants:{
            variant:'primary'
        }
    }
);


export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>,VariantProps<typeof badgeVariants>{}

const Badge = ({className , variant , ...props}:BadgeProps)=>{
    return <div className={cn(badgeVariants({variant}),className)}{...props}/>
};


// eslint-disable-next-line react-refresh/only-export-components
export {Badge , badgeVariants};