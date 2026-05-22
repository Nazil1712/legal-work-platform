import FloatingCard from "./FloatingCard";
import { desktopCards } from "../_data/card.data"

export default function FloatingCards() {
  return (
    <div className="absolute inset-0 hidden lg:block">
      {desktopCards.map((card) => (
        <FloatingCard key={card.id} {...card} />
      ))}
    </div>
  );
}