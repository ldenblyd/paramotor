import { Product, TypeProduct } from "types/product";
import { getStringInterval } from "utils/getMinMaxValue";
import { Propeller, PropellerRotation } from "types/propeller";
import { Engine } from "types/engine";
import { Seat } from "../types/seat";

const getEngineData = (product: Engine) => {
  const { cylinderVolume, power, starter, consumption } = product;
  const weightList = starter.map((s) => s.weight);

  return [
    { label: "cylinder volume", value: `${cylinderVolume} cc` },
    { label: "power", value: `${power.hp} HP at ${power.rpm} RPM` },
    { label: "weight", value: getStringInterval(weightList, "kg") },
    {
      label: "consumption",
      value: `${consumption.litter}L at ${consumption.thrust}Kg`,
    },
  ];
};

const getPropellerData = (product: Propeller) => {
  const { rotation, diameter, bladeCount } = product;

  return [
    { label: "amount blades", value: bladeCount },
    { label: "diameter", value: `${diameter} cm` },
    { label: "rotation", value: `${PropellerRotation[rotation]}` },
  ];
};

const getSeatData = (product: Seat) => {
  const { weight, size } = product;

  const weightList = size.map((s) => s.weight);
  const heightList = size.reduce((acc, s) => {
    acc.push(s.height.min);
    acc.push(s.height.max);
    return acc;
  }, []);

  // TODO: ADD SIZES
  return [
    // { label: "sizes", value: "" },
    { label: "weight", value: `${weight} kg` },
    { label: "pilot height", value: getStringInterval(heightList, "cm") },
    { label: "pilot weight", value: getStringInterval(weightList, "kg") },
  ];
};

const getDataTable = (product: Product, category: TypeProduct) => {
  const detailsMapping = {
    engine: getEngineData,
    // paramotor: ParamotorCard,
    propeller: getPropellerData,
    seat: getSeatData,
    // wing: WingCard,
  };

  if (detailsMapping[category]) return detailsMapping[category](product);
  return [];
};

type DataTable = {
  label: string;
  value: string;
};

type UseProduct = {
  getDataTable: (product: Product, category: TypeProduct) => DataTable[];
};

const useProduct = (): UseProduct => {
  return {
    getDataTable,
  };
};

export default useProduct;
