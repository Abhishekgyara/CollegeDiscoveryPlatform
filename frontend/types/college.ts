export type College = {
  id: number;
  name: string;
  location: string;
  fees: number;
 rating: number;
  image: string;

  placements: {
    averagePackage: string;
    highestPackage: string;
  };

  courses: string[];
};