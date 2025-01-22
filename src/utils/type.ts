export interface CardProps {
    id: number;
    title: string;
    description: string;
    url: string;
    price: number;
    timeLeftHr: number;
    timeLeftMin: number;
    numberBidding: number;
    likes: number;
  }

  export interface SmallCardProps {
    smallid: number;
    smalltitle: string;
    smallurl: string;
  }
export  interface ImageOverflowProps {
    id: number;
    title: string;
    url: string;
    price: number;
  }