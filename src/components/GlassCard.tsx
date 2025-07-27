import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export const GlassCard = ({ children, className, hover = false, glow = false }: GlassCardProps) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6",
        hover && "transition-all duration-300 hover:scale-105 hover:shadow-2xl",
        glow && "glass-glow",
        className
      )}
    >
      {children}
    </div>
  );
};