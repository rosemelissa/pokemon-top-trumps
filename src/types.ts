export interface PokemonCard {
    name: string;
    img: string;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  }

  export interface GamePlayProps {
    compCards: PokemonCard[];
    setCompCards: React.Dispatch<React.SetStateAction<PokemonCard[]>>;
    userCards: PokemonCard[];
    setUserCards: React.Dispatch<React.SetStateAction<PokemonCard[]>>;
    newTurn: boolean;
    setNewTurn: React.Dispatch<React.SetStateAction<boolean>>;
    compIndex: number;
    setCompIndex: React.Dispatch<React.SetStateAction<number>>;
    userIndex: number;
    setUserIndex: React.Dispatch<React.SetStateAction<number>>;
    turnNumber: number;
    setTurnNumber: React.Dispatch<React.SetStateAction<number>>;
  }