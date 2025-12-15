interface LeaderCardProps {
  name: string;
  position: string;
  image: string;
}

const LeaderCard = ({ name, position, image }: LeaderCardProps) => {
  return (
    <div className="leader-card p-4 text-center">
      <div className="w-28 h-28 mx-auto mb-3 rounded-full overflow-hidden border-4 border-gold shadow-lg">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h4 className="font-bold text-foreground text-sm mb-1">{name}</h4>
      <p className="text-xs text-muted-foreground">{position}</p>
    </div>
  );
};

export default LeaderCard;
