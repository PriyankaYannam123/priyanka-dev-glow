import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GlowButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
  href?: string;
}

export const GlowButton = ({ 
  children, 
  variant = "primary", 
  className, 
  onClick,
  href 
}: GlowButtonProps) => {
  const Component = href ? "a" : Button;
  
  return (
    <Component
      className={cn(
        "glow-button px-8 py-4 font-medium rounded-2xl transition-all duration-300",
        variant === "primary" && "text-primary-foreground",
        variant === "secondary" && "text-foreground",
        className
      )}
      onClick={onClick}
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
    >
      {children}
    </Component>
  );
};