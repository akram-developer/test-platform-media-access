import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    eyebrow?: string;
    className?: string;
    align?: 'left' | 'center' | 'right';
}

export function SectionHeader({ title, subtitle, eyebrow, className, align = 'center' }: SectionHeaderProps) {
    return (
        <div className={cn(
            "mb-12 space-y-3",
            align === 'center' && "text-center mx-auto",
            align === 'right' && "text-right ml-auto",
            align === 'left' && "text-left mr-auto",
            className
        )}>
            {eyebrow && (
                <span className="inline-block text-sm font-semibold tracking-wider text-blue-500 uppercase">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                {title}
            </h2>
            {subtitle && (
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                    {subtitle}
                </p>
            )}
        </div>
    );
}
