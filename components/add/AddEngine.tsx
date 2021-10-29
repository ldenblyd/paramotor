import Input from "components/forms/Input";
import CreatableSelect from "components/forms/CreatableSelect";
import Select from "components/forms/Select";
import TextArea from "components/forms/TextArea";
import { useInput, useArrayInput } from "hooks/useInputs";
import { useFileUploader } from "hooks/useFileUploader";
import { useSelect } from "hooks/useSelect";
import toast from "react-hot-toast";
import FileUploader from "components/forms/fileUploader/FileUploader";
import InputList from "components/forms/InputList";
import { useEffect, useState } from "react";

type Suggestion = {
  label: string;
  value: string;
};

const clutchList: Suggestion[] = [
  { value: "WITH", label: "WITH" },
  { value: "WITOUT", label: "WITOUT" },
  { value: "CHOOSE", label: "CHOOSE" },
];

const AddEngine: React.FC = () => {
  const [loading, setLoading] = useState(true);

  const engine = {
    brand: useSelect([]),
    model: useInput("text"),
    imageUrl: useFileUploader("image"),
    cylinderVolume: useInput("number"),
    description: useInput("text"),
    reduction: useArrayInput("number"),
    power: {
      hp: useInput("number"),
      rpm: useInput("number"),
    },
    consumption: {
      litter: useInput("number"),
      thrust: useInput("number"),
    },
    clutch: useSelect(clutchList),
  };

  useEffect(() => {
    const loadContent = async () => {
      try {
        const newBrandList = await fetch("/api/brand", {
          method: "GET",
        });
        engine.brand.setOptions(await newBrandList.json());
        setLoading(false);
      } catch (error) {
        console.error(error); // todo fix handle error
      }
    };

    loadContent();
  });

  const addBrand = async (name) => {
    try {
      const newBrandList = await fetch("/api/brand", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      engine.brand.setOptions(await newBrandList.json());
      toast.success(`brand '${name}' created successfully`);
    } catch (error) {
      console.error(error); // todo fix handle error
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const body = {
      // brand: engine.brand.value,
      // model: engine.model.value,
      // cylinderVolume: parseFloat(engine.cylinderVolume.value),
    };

    try {
      await fetch("/api/create/engine", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      toast.success(`engine '${name}' created successfully`);
    } catch (error) {
      console.error(error); // todo fix handle error
    }
  };
  if (loading) {
    return (
      <div className="flex items-center justify-center h-full text-3xl">
        loading...
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <form onSubmit={onSubmit} className="w-96 flex flex-col">
        <FileUploader {...engine.imageUrl} />

        <div className="py-2 w-full">
          <p className="capitalize whitespace-nowrap">description</p>
          <TextArea {...engine.description} />
        </div>

        <div className="py-2">
          <p className="capitalize">brand</p>
          <CreatableSelect {...engine.brand} createAction={addBrand} />
        </div>
        <div className="flex">
          <div className="py-2 pr-2 flex-1">
            <p className="capitalize">model</p>
            <Input {...engine.model} />
          </div>

          <div className="py-2 w-min">
            <p className="capitalize whitespace-nowrap">cylinder volume</p>
            <Input placeHolder="cc" {...engine.cylinderVolume} />
          </div>
        </div>

        <div className="py-2 ">
          <p className="capitalize whitespace-nowrap">power</p>

          <div className="flex justify-between">
            <div className="pr-1 w-full">
              <Input placeHolder="hp" {...engine.power.hp} />
            </div>
            <div className="pl-1 w-full">
              <Input placeHolder="rpm" {...engine.power.rpm} />
            </div>
          </div>
        </div>

        <div className="py-2 ">
          <p className="capitalize whitespace-nowrap">consumption</p>

          <div className="flex justify-between">
            <div className="pr-1 w-full">
              <Input placeHolder="litter" {...engine.consumption.litter} />
            </div>
            <div className="pl-1 w-full">
              <Input placeHolder="thrust" {...engine.consumption.thrust} />
            </div>
          </div>
        </div>

        <div className="py-2">
          <p className="capitalize">clutch</p>
          <Select {...engine.clutch} />
        </div>

        <div className="py-2">
          <p className="capitalize whitespace-nowrap">reduction</p>
          <InputList {...engine.reduction} />
        </div>
      </form>
    </div>
  );
};

export default AddEngine;
