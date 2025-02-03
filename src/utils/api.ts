import BigCard1 from "../Assets/Large/Bigcard1.png";
import BigCard2 from "../Assets/Large/Bigcard2.png";
import BigCard3 from "../Assets/Large/Bigcard3.png";
import BigCard4 from "../Assets/Large/Bigcard4.png";
import BigCard5 from "../Assets/Large/Bigcard5.png";
import BigCard6 from "../Assets/Large/Bigcard6.png";
import ImageOverflow1 from "../Assets/Overflow/Image1.png";
import ImageOverflow10 from "../Assets/Overflow/Image10.png";
import ImageOverflow11 from "../Assets/Overflow/Image11.png";
import ImageOverflow12 from "../Assets/Overflow/Image12.png";
import ImageOverflow13 from "../Assets/Overflow/Image13.png";
import ImageOverflow14 from "../Assets/Overflow/Image14.png";
import ImageOverflow15 from "../Assets/Overflow/Image15.png";
import ImageOverflow16 from "../Assets/Overflow/Image16.png";
import ImageOverflow17 from "../Assets/Overflow/Image17.png";
import ImageOverflow2 from "../Assets/Overflow/Image2.png";
import ImageOverflow3 from "../Assets/Overflow/Image3.png";
import ImageOverflow4 from "../Assets/Overflow/Image4.png";
import ImageOverflow5 from "../Assets/Overflow/Image5.png";
import ImageOverflow6 from "../Assets/Overflow/Image6.png";
import ImageOverflow7 from "../Assets/Overflow/Image7.png";
import ImageOverflow8 from "../Assets/Overflow/Image8.png";
import ImageOverflow9 from "../Assets/Overflow/Image9.png";
import MediumCard1 from "../Assets/Medium/MediumCard1.png";
import MediumCard2 from "../Assets/Medium/MediumCard2.png";
import MediumCard3 from "../Assets/Medium/MediumCard3.png";
import MediumCard4 from "../Assets/Medium/MediumCard4.png";
import MediumCard5 from "../Assets/Medium/MediumCard5.png";
import MediumCard6 from "../Assets/Medium/MediumCard6.png";
import MediumCard7 from "../Assets/Medium/MediumCard7.png";
import SmallCard1 from "../Assets/Small/small1.png";
import SmallCard2 from "../Assets/Small/small2.png";
import SmallCard3 from "../Assets/Small/small3.png";
import SmallCard4 from "../Assets/Small/SmallCard1.png";
import smallid1 from "../Assets/SmallCards/01.png";
import smallid2 from "../Assets/SmallCards/02.png";
import smallid3 from "../Assets/SmallCards/03.png";
import smallid4 from "../Assets/SmallCards/04.png";
import { CardProps, ImageOverflowProps, SmallCardProps } from "./type";

export const smallcardData: SmallCardProps[] = [
  { smallid: 1, smalltitle: "Card 1", smallurl: smallid1 },
  { smallid: 2, smalltitle: "Card 2", smallurl: smallid2 },
  { smallid: 3, smalltitle: "Card 3", smallurl: smallid3 },
  { smallid: 4, smalltitle: "Card 4", smallurl: smallid4 },
];

export const cardData: CardProps[] = [
  {
    id: 1,
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    description: "Card property",
    url: BigCard1,
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 102,
   
    likes:58,
  },
  {
    id: 2,
    title: "Vulputate felis purus viverra morbi facilisi eget",
    description: "Card property",
    url: BigCard2,
    price: 3.19,
    timeLeftHr: 2,
    timeLeftMin: 41,
    numberBidding: 35,
    likes:120,
  },
  {
    id: 3,
    title: "Dui accumsan leo vestibulum ornare eu",
    description: "Card property",
    url: BigCard3,
    price: 1.11,
    timeLeftHr: 22,
    timeLeftMin: 59,
    numberBidding: 102,
    likes:570,
  },
  {
    id: 4,
    title: "Tristique diam a, enim, eros tellus. Viverra etiam",
    description: "Card property",
    url: BigCard4,
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 102,
    likes:58,
  },
  {
    id: 5,
    title: "Senectus adipiscing nascetur accumsan etiam",
    description: "Card property",
    url: BigCard5,
    price: 1.63,
    timeLeftHr: 37,
    timeLeftMin: 1,
    numberBidding: 12,
    likes:98,
  },
  {
    id: 6,
    title: "Mattis at diam lorem nisl nam sed sociis",
    description: "Card property",
    url: BigCard6,
    price: 2.55,
    timeLeftHr: 12,
    timeLeftMin: 15,
    numberBidding: 19,
    likes:58,
  },

]

export const cardData1: CardProps[] = [
  {
    id: 1,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: MediumCard1,
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  },
  {
    id: 2,
    title: "Faucibus habitasse at et platea massa mauris",
    description: "Card property",
    url: MediumCard2,
    price: 2.55,
    timeLeftHr: 22,
    timeLeftMin: 59,
    numberBidding: 101,
    likes: 100,
  },
  {
    id: 3,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: MediumCard3,
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  },
  {
    id: 4,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: MediumCard4,
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  },
  {
    id: 5,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: MediumCard5,
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  },
  {
    id: 6,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: MediumCard6,
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  },
  {
    id: 7,
    title: "Fames habitasse risus ultricies tortor sit",
    description: "Card property",
    url: MediumCard7,
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 100,
    likes: 100,
  }
]

export const cardData2: CardProps[] = [
  {
    id: 1,
    title: "Vulputate velit viverra volutpat volutpat tristique",
    description: "Card property",
    url: SmallCard1,
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 101,
    likes: 54,
  },
  {
    id: 2,
    title: "Egestas blandit sit egestas non sed. Purus semper",
    description: "Card property",
    url: SmallCard2,
    price: 2.15,
    timeLeftHr: 22,
    timeLeftMin: 15,
    numberBidding: 101,
    likes: 54,
  },
  {
    id: 3,
    title: "Id ut consequat netus nec vel amet ut porta in augue",
    description: "Card property",
    url: SmallCard3,
    price: 2.55,
    timeLeftHr: 22,
    timeLeftMin: 15,
    numberBidding: 101,
    likes: 54,
  },

  {
    id: 4,
    title: "Sed et nibh felis integer tellus turpin",
    description: "Card property",
    url: SmallCard4,
    price: 2.55,
    timeLeftHr: 57,
    timeLeftMin: 15,
    numberBidding: 101,
    likes: 54,
  },
]

export const ImageOverflowData: ImageOverflowProps[] = [
  {
    id: 1,
    title: "Card 1",
    url: ImageOverflow1,
    price: 10.99,
  },
  {
    id: 2,
    title: "Card 2",
    url: ImageOverflow2,
    price: 8.99,
  },
  {
    id: 3,
    title: "Card 3",
    url: ImageOverflow3,
    price: 6.99,
  },
  {
    id: 4,
    title: "Card 4",
    url: ImageOverflow4,
    price: 4.99,
  },
  {
    id: 5,
    title: "Card 5",
    url: ImageOverflow5,
    price: 2.99,
  },
  {
    id: 6,
    title: "Card 6",
    url: ImageOverflow6,
    price: 1.99,
  },
  {
    id: 7,
    title: "Card 7",
    url: ImageOverflow7,
    price: 0.99,
  },
  {
    id: 8,
    title: "Card 8",
    url: ImageOverflow8,
    price: 0.49,
  },
  {
    id: 9,
    title: "Card 9",
    url: ImageOverflow9,
    price: 0.29,
  }, 
  {
    id: 10,
    title: "Card 10",
    url: ImageOverflow10,
    price: 4.19,
  }, 
  {
    id: 11,
    title: "Card 11",
    url: ImageOverflow11,
    price: 3.59,
  },
  {
    id: 12,
    title: "Card 12",
    url: ImageOverflow12,
    price: 2.09,
  },
  {
    id: 13,
    title: "Card 13",
    url: ImageOverflow13,
    price: 2.49,
    
  },
  {
    id: 14,
    title: "Card 14",
    url: ImageOverflow14,
    price: 3.99,
  },
  {
    id: 15,
    title: "Card 15",
    url: ImageOverflow15,
    price: 2.99,
  },
  {
    id: 16,
    title: "Card 16",
    url: ImageOverflow16,
    price: 1.99,
  },
  {
    id: 17,
    title: "Card 17",
    url: ImageOverflow17,
    price : 2.29
  },

]