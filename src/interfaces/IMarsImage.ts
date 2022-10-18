export interface IMarsImage {
  id: number;
  img_src: string;
  camera: {
    name: string;
    full_name: string;
  };
  rover: {
    name: string;
    launch_date: string;
    landing_date: string;
    status: string;
  };
}
