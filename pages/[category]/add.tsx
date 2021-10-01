import Head from "next/head";

import Layout from "layout/index";
import Input from "components/Forms/Input";
import TextArea from "components/Forms/TextArea";
import { useInput } from "hooks/useInput";

const AddEngine: React.FC = () => {
  const engine = {
    brand: useInput(""),
    model: useInput(""),
    imageUrl: useInput(""),
    pdf: useInput(""),
    cc: useInput(""),
    description: useInput(""),
  };

  const resetForm = () => {
    for (const key in engine) {
      if (Object.prototype.hasOwnProperty.call(engine, key)) {
        engine[key].reset();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetForm();
  };

  return (
    <Layout>
      <Head>
        <title>PARAMOTOR FINDER</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <form onSubmit={handleSubmit} className="w-96 flex flex-col">
          <Input placeHolder="brand" type="text" bind={engine.brand.bind} />
          <Input placeHolder="model" type="text" bind={engine.model.bind} />
          <Input
            placeHolder="image Url"
            type="text"
            bind={engine.imageUrl.bind}
          />
          <Input placeHolder="pdf link" type="text" bind={engine.pdf.bind} />
          <Input placeHolder="cc" type="number" bind={engine.cc.bind} />
          <TextArea placeHolder="Description" bind={engine.cc.bind} />

          <input type="submit" value="Submit" />
        </form>
      </main>
    </Layout>
  );
};

export default AddEngine;
