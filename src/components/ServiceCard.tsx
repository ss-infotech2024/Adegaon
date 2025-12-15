import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="govt-card p-6 text-center group cursor-pointer">
      <div className="service-icon mx-auto group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
        <Icon className="w-7 h-7" />
      </div>
      <h4 className="font-bold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  );
};

export default ServiceCard;
