import Layout from "layout/index";
import Input from "components/forms/Input";
import CreatableSelect from "components/forms/CreatableSelect";
import TextArea from "components/forms/TextArea";
import { useInput, useArrayInput } from "hooks/useInputs";
import { useFileUploader } from "hooks/useFileUploader";
import { useSelect } from "hooks/useSelect";
import { GetStaticPaths, GetStaticProps } from "next";
import { getBrandList } from "pages/api/create/brand";
import toast from "react-hot-toast";
import FileUploader from "components/forms/fileUploader/FileUploader";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

type Suggestion = {
  label: string;
  value: string;
};

type Props = {
  brandList: Suggestion[];
};

const AddEngine: React.FC<Props> = (props) => {
  const engine = {
    brand: useSelect(props.brandList),
    model: useInput("text"),
    imageUrl: useFileUploader("image"),
    cylinderVolume: useInput("number"),
    description: useInput("text"),
    reduction: useArrayInput("number"),
  };

  // const [brandList, setBrandList] = useState(props.brandList);

  const addBrand = async (name) => {
    try {
      const newBrandList = await fetch("/api/create/brand", {
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

  return (
    <Layout>
      <h1 className="w-full text-3xl text-center">Add new engine</h1>
      <div className="flex justify-center pt-12">
        <form onSubmit={onSubmit} className="w-96 flex flex-col">
          <FileUploader {...engine.imageUrl} />
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
          <div className="py-2 w-full">
            <p className="capitalize whitespace-nowrap">description</p>
            <TextArea {...engine.description} />
          </div>
          <div className="py-2">
            <p className="capitalize whitespace-nowrap">reduction</p>
            <div>
              {engine.reduction.values.map((value, i) => (
                <div key={i} className="flex mt-2">
                  <div className="w-20 mr-2">
                    <Input
                      inputType={engine.reduction.inputType}
                      value={value}
                      onChange={(e) => engine.reduction.onChange(e, i)}
                    />
                  </div>
                  {engine.reduction.values.length > 1 && (
                    <Image
                      className="cursor-pointer"
                      src="/icons/less.svg"
                      alt="more"
                      width={32}
                      height={32}
                      onClick={() => engine.reduction.remove(i)}
                    />
                  )}
                </div>
              ))}
              <div className="mt-2">
                <Image
                  className="cursor-pointer"
                  src="/icons/plus.svg"
                  alt="more"
                  width={32}
                  height={32}
                  onClick={engine.reduction.add}
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="hover:bg-gray-200 cursor-pointer"
          />
        </form>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      brandList: await getBrandList(),
    },
  };
};

export default AddEngine;
